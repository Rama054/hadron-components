import '../../css/datatable.css';
import { BiSort, BiSortDown, BiSortUp } from "react-icons/bi";
import { PiMagnifyingGlass, PiX } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Input from '../input/Input';
import { useMemo, useState, useEffect, useRef } from 'react';
import Paginator from '../paginator/Paginator';
import Badge from '../badge/Badge';
import Button from '../button/Button';
import Checkbox from '../checkbox/Checkbox';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';

export default function Datatable({
    headerButtons,
    noDataMessage,
    data,
    loading = false,
    paginator = false,
    rows,
    rowClick, 
    filterPlaceholder, 
    columns, 
    selectedRows: selectedRowsRef, 
    height, 
    title = "Tabla de datos", 
    filter = false,
    // Nuevas props para paginación del servidor
    serverSide = false,
    totalRecords = 0,
    onPageChange,
    onSort,
    onSearch,
    searchValue = "",
    currentPage: externalCurrentPage = 1,
    sortField = null,
    sortOrder = null
}) {

    // Estados para paginación del cliente (modo legacy)
    const [clientSearchTerm, setClientSearchTerm] = useState("");
    const [clientSortColumn, setClientSortColumn] = useState(null);
    const [clientSortOrder, setClientSortOrder] = useState(null);
    const [clientCurrentPage, setClientCurrentPage] = useState(1);

    // Estado local para el input de búsqueda (evita pérdida de foco)
    const [localSearchValue, setLocalSearchValue] = useState(searchValue);
    const [isSearching, setIsSearching] = useState(false);

    // Estados para selección
    const [selectedVisibleRows, setSelectedVisibleRows] = useState([]);
    const [selectedAll, setSelectedAll] = useState(false);

    // Determinar qué valores usar según el modo
    const searchTerm = serverSide ? localSearchValue : clientSearchTerm;
    const currentPage = serverSide ? externalCurrentPage : clientCurrentPage;
    const activeSortField = serverSide ? sortField : clientSortColumn;
    const activeSortOrder = serverSide ? sortOrder : clientSortOrder;

    // Efecto para sincronizar el valor local con el prop searchValue
    useEffect(() => {
        setLocalSearchValue(searchValue);
        setIsSearching(false);
    }, [searchValue]);

    // Efecto para resetear el estado de búsqueda cuando llegan los datos
    useEffect(() => {
        if (!loading) {
            setIsSearching(false);
        }
    }, [loading, data]);

    // Efecto para resetear página cuando cambia la búsqueda en modo servidor
    useEffect(() => {
        if (serverSide && searchValue !== searchTerm && onPageChange) {
            onPageChange(1);
        }
    }, [searchValue, serverSide]);

    const handleSelectAll = () => {
        const isSelectingAll = !selectedAll;
        setSelectedAll(isSelectingAll);

        if (isSelectingAll) {
            selectedRowsRef.current = new Set(["ALL"]);
        } else {
            selectedRowsRef.current.clear();
        }

        setSelectedVisibleRows(isSelectingAll ? data.map(row => row.id) : []);
    };

    const handleSelectRow = (id) => {
        const newSelection = new Set(selectedVisibleRows);

        if (newSelection.has(id)) {
            newSelection.delete(id);
            selectedRowsRef.current.delete(id);
        } else {
            newSelection.add(id);
            selectedRowsRef.current.add(id);
        }

        setSelectedVisibleRows(Array.from(newSelection));
    };

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc?.[key], obj) || "-";
    };

    const handleSort = (column) => {
        if (serverSide) {
            // Modo servidor: delegar al padre
            if (onSort) {
                let newSortOrder;
                if (activeSortField === column) {
                    newSortOrder = activeSortOrder === "asc" ? "desc" : activeSortOrder === "desc" ? null : "asc";
                } else {
                    newSortOrder = "asc";
                }
                
                onSort({
                    field: newSortOrder ? column : null,
                    order: newSortOrder
                });
            }
        } else {
            // Modo cliente: lógica local
            if (clientSortColumn === column) {
                setClientSortOrder(clientSortOrder === "asc" ? "desc" : clientSortOrder === "desc" ? null : "asc");
                if (clientSortOrder === "desc") setClientSortColumn(null);
            } else {
                setClientSortColumn(column);
                setClientSortOrder("asc");
            }
        }
    };

    const handleSearchInputChange = (value) => {
        setLocalSearchValue(value);

        if (!serverSide) {
            // Modo cliente: actualizar estado local inmediatamente
            setClientSearchTerm(value);
            setClientCurrentPage(1); // Reset a primera página
        }
    };

    const handleSearchSubmit = () => {
        if (serverSide && onSearch) {
            setIsSearching(true);
            onSearch(localSearchValue);
        }
    };

    const handleClearSearch = () => {
        setLocalSearchValue("");
        
        if (serverSide) {
            // Modo servidor: limpiar búsqueda en el servidor
            if (onSearch) {
                setIsSearching(true);
                onSearch("");
            }
        } else {
            // Modo cliente: limpiar búsqueda local
            setClientSearchTerm("");
            setClientCurrentPage(1);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && serverSide) {
            handleSearchSubmit();
        }
    };

    const handlePageChangeInternal = (page) => {
        if (serverSide) {
            // Modo servidor: delegar al padre
            if (onPageChange) {
                onPageChange(page);
            }
        } else {
            // Modo cliente: actualizar estado local
            setClientCurrentPage(page);
        }
    };

    // Datos procesados (solo para modo cliente)
    const filteredData = useMemo(() => {
        if (serverSide) return data; // En modo servidor, los datos ya vienen filtrados

        return data.filter((obj) =>
            columns.some((column) => {
                const fieldsToSearch = column.searchFields || [column.field];
                return fieldsToSearch.some((field) => {
                    const value = getNestedValue(obj, field);
                    return value?.toString().toLowerCase().includes(clientSearchTerm.toLowerCase());
                });
            })
        );
    }, [clientSearchTerm, data, serverSide]);

    const sortedData = useMemo(() => {
        if (serverSide) return data; // En modo servidor, los datos ya vienen ordenados

        if (!clientSortColumn || !clientSortOrder) return filteredData;

        return [...filteredData].sort((a, b) => {
            const valueA = getNestedValue(a, clientSortColumn);
            const valueB = getNestedValue(b, clientSortColumn);

            if (typeof valueA === "number" && typeof valueB === "number") {
                return clientSortOrder === "asc" ? valueA - valueB : valueB - valueA;
            }

            return clientSortOrder === "asc"
                ? valueA.toString().localeCompare(valueB.toString())
                : valueB.toString().localeCompare(valueA.toString());
        });
    }, [filteredData, clientSortColumn, clientSortOrder, serverSide]);

    const handleRowClick = (e, row) => {
        const isCheckbox = e.target.dataset.role === "checkbox" || e.target.parentElement.dataset.role === "checkbox";
        if (isCheckbox) return;

        if (rowClick) {
            rowClick(row);
        }
    };

    // Calcular datos a mostrar y total de páginas
    const displayData = serverSide 
        ? data 
        : (paginator ? sortedData.slice((currentPage - 1) * rows, currentPage * rows) : sortedData);

    const totalPages = serverSide 
        ? Math.ceil(totalRecords / rows)
        : Math.ceil(sortedData.length / rows);

    const totalRecordsDisplay = serverSide ? totalRecords : data.length;

    const loadingBody = (
        <tbody>
            {Array.from({ length: rows || 5 }, (_, index) => (
                <tr key={index}>
                    {selectedRowsRef && (
                        <td className="q-datatable-checkbox-column">
                            <Checkbox
                                label=""
                                checked={false}
                                onChange={() => {}}
                                size="sm"
                                color="primary"
                                disabled
                            />
                        </td>
                    )}
                    {columns.map((column) => (
                        <td key={column.field}>
                            <Skeleton width="100%" height="20px" />
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );

    const dataBody = (
        <tbody>
            {(() => {
                if (displayData.length === 0) {
                    return (
                        <tr>
                            <td colSpan={columns.length + (selectedRowsRef ? 1 : 0)} style={{ textAlign: "center", padding: "10px" }}>
                                {noDataMessage || "No hay datos para mostrar"}
                            </td>
                        </tr>
                    );
                }

                return displayData.map((row, index) => (
                    <tr
                        key={row.id || index}
                        style={{ cursor: rowClick ? "pointer" : "default" }}
                        onClick={(e) => rowClick && handleRowClick(e, row)}
                        className={selectedVisibleRows.includes(row.id) ? "selected" : undefined}
                    >
                        {selectedRowsRef && (
                            <td className="q-datatable-checkbox-column" data-role="checkbox">
                                <Checkbox
                                    label=""
                                    checked={selectedVisibleRows.includes(row.id)}
                                    onChange={() => handleSelectRow(row.id)}
                                    size="sm"
                                    color="primary"
                                />
                            </td>
                        )}
                        {columns.map((column) => (
                            <td key={column.field} style={column.field === "actions" ? { width: "100px", textAlign: "center", ...column.style } : { ...column.style }}>
                                {column.body ? column.body(row) : getNestedValue(row, column.field)}
                            </td>
                        ))}
                    </tr>
                ));
            })()}
        </tbody>
    );

    return (
        <div className="q-datatable">
            <div className="q-datatable-header">
                <div className="q-datatable-title">
                    <span>{title}</span>
                    <Badge 
                        color="primary" 
                        content={loading ? <Spinner size="sm" type='classic' /> : totalRecordsDisplay} 
                        variant="soft" 
                    />
                </div>
                <div className="q-datatable-actions">
                    {filter && (
                        <Input
                            disabled={loading}
                            placeholder={filterPlaceholder}
                            value={searchTerm}
                            onChange={(e) => handleSearchInputChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            appendIcon={
                                searchTerm ? (
                                    <Button
                                        variant="ghost"
                                        color="azure"
                                        size="sm"
                                        radius="full"
                                        icon
                                        onClick={handleClearSearch}
                                        disabled={loading}
                                    >
                                        <PiX size={16} />
                                    </Button>
                                ) : serverSide ? null : <PiMagnifyingGlass size={16} />
                            }
                            appendButton={serverSide ? (
                                <Button
                                    variant="solid"
                                    color="primary"
                                    size="md"
                                    radius="md"
                                    icon
                                    loading={isSearching}
                                    disabled={loading}
                                    onClick={handleSearchSubmit}
                                >
                                    <FaMagnifyingGlass size={16} />
                                </Button>
                            ) : null}
                        />
                    )}
                    {headerButtons && headerButtons}
                </div>
            </div>
            <div className="q-datatable-body" style={{ maxHeight: height }}>
                <table>
                    <thead>
                        <tr>
                            {selectedRowsRef && (
                                <th className="q-datatable-checkbox-column">
                                    <Checkbox
                                        label=""
                                        checked={selectedAll}
                                        onChange={handleSelectAll}
                                        size="sm"
                                        color="primary"
                                    />
                                </th>
                            )}
                            {columns.map(({ field, header, sorteable }) => (
                                <th
                                    key={field}
                                    className={activeSortField === field ? "sortActive" : undefined}
                                    style={{ cursor: sorteable ? "pointer" : "default" }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px" }}>
                                        <span>{header}</span>
                                        {sorteable && (
                                            <Button 
                                                size='sm' 
                                                radius='full' 
                                                onClick={() => sorteable && handleSort(field)} 
                                                variant="ghost" 
                                                color="azure" 
                                                icon
                                            >
                                                {activeSortField === field
                                                    ? (activeSortOrder === "asc" ? <BiSortUp size={16} /> : <BiSortDown size={16} />)
                                                    : <BiSort size={16} />
                                                }
                                            </Button>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {loading ? loadingBody : dataBody}
                </table>
            </div>
            <div className="q-datatable-footer">
                {!loading && paginator && (
                    <Paginator
                        currentPage={currentPage}
                        maxVisible={7}
                        totalPages={totalPages}
                        onPageChange={handlePageChangeInternal}
                    />
                )}
            </div>
        </div>
    );
}