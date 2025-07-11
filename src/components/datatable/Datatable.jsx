import '../../css/datatable.css';
import { BiSort, BiSortDown, BiSortUp } from "react-icons/bi";
import { PiMagnifyingGlass } from "react-icons/pi";
import Input from '../input/Input';
import { useMemo, useState } from 'react';
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
    rowClick, filterPlaceholder, columns, selectedRows: selectedRowsRef, height, title = "Tabla de datos", filter = false }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);

    const [selectedVisibleRows, setSelectedVisibleRows] = useState([]);
    const [selectedAll, setSelectedAll] = useState(false);

    const handleSelectAll = () => {
        const isSelectingAll = !selectedAll; // Nuevo estado

        setSelectedAll(isSelectingAll);

        if (isSelectingAll) {
            // Seleccionar TODOS en el servidor
            selectedRowsRef.current = new Set(["ALL"]); // Marcar todos sin guardarlos en el cliente
        } else {
            // Deseleccionar todo
            selectedRowsRef.current.clear();
        }

        // Marcar visualmente todos los elementos en la página actual
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
        if (sortColumn === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : sortOrder === "desc" ? null : "asc");
            if (sortOrder === "desc") setSortColumn(null);
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };

    const filteredData = useMemo(() => {
        return data.filter((obj) =>
            columns.some((column) => {
                const fieldsToSearch = column.searchFields || [column.field];

                return fieldsToSearch.some((field) => {
                    const value = getNestedValue(obj, field);
                    return value?.toString().toLowerCase().includes(searchTerm.toLowerCase());
                });
            })
        );
    }, [searchTerm, data]);

    const sortedData = useMemo(() => {
        if (!sortColumn || !sortOrder) return filteredData;

        return [...filteredData].sort((a, b) => {
            const valueA = getNestedValue(a, sortColumn);
            const valueB = getNestedValue(b, sortColumn);

            if (typeof valueA === "number" && typeof valueB === "number") {
                return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
            }

            return sortOrder === "asc"
                ? valueA.toString().localeCompare(valueB.toString())
                : valueB.toString().localeCompare(valueA.toString());
        });
    }, [filteredData, sortColumn, sortOrder]);

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handleRowClick = (e, row) => {
        const isCheckbox = e.target.dataset.role === "checkbox" || e.target.parentElement.dataset.role === "checkbox";
        if (isCheckbox) return;

        if (rowClick) {
            rowClick(row);
        }
    }

    const loadingBody = (
        <tbody>
            {Array.from({ length: 5 }, (_, index) => (
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
    )

    const dataBody = (
        <tbody>
            {(() => {
                const filteredRows = paginator
                    ? sortedData.slice((currentPage - 1) * rows, currentPage * rows)
                    : sortedData;

                if (filteredRows.length === 0) {
                    return (
                        <tr>
                            <td colSpan={columns.length + (selectedRowsRef ? 1 : 0)} style={{ textAlign: "center", padding: "10px" }}>
                                {noDataMessage || "No hay datos para mostrar"}
                            </td>
                        </tr>
                    );
                }

                return filteredRows.map((row, index) => (
                    <tr
                        key={index}
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
                            <td key={column.field} style={ column.field === "actions" ? { width: "100px", textAlign: "center", ...column.style } : {...column.style} }>
                                {column.body ? column.body(row) : getNestedValue(row, column.field)}
                            </td>
                        ))}
                    </tr>
                ));
            })()}
        </tbody>
    )


    return (
        <div className="q-datatable">
            <div className="q-datatable-header">
                <div className="q-datatable-title">
                    <span>{title}</span>
                    <Badge color="primary" content={loading ? <Spinner size="sm" type='classic' /> : data.length} variant="soft" />
                </div>
                <div className="q-datatable-actions">
                    {
                        filter && (
                            <Input
                                disabled={loading}
                                placeholder={filterPlaceholder}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                appendIcon={<PiMagnifyingGlass size={16} />}
                            />
                        )
                    }
                    {headerButtons && headerButtons}
                </div>
            </div>
            <div className="q-datatable-body" style={{ maxHeight: height }}>
                <table>
                    <thead>
                        <tr>
                            {
                                selectedRowsRef &&
                                <th className="q-datatable-checkbox-column">
                                    <Checkbox
                                        label=""
                                        checked={selectedAll}
                                        onChange={handleSelectAll}
                                        size="sm"
                                        color="primary"
                                    />
                                </th>
                            }
                            {columns.map(({ field, header, sorteable }) => (
                                <th
                                    key={field}
                                    className={sortColumn === field ? "sortActive" : undefined}
                                    style={{ cursor: sorteable ? "pointer" : "default" }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px" }}>
                                        <span>{header}</span>
                                        {sorteable && (
                                            <Button size='sm' radius='full' onClick={() => sorteable && handleSort(field)} variant="ghost" color="azure" icon>
                                                {
                                                    sortColumn === field
                                                        ? (sortOrder === "asc" ? <BiSortUp size={16} /> : <BiSortDown size={16} />)
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
                        totalPages={Math.ceil([...data].length / rows)}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    )
}