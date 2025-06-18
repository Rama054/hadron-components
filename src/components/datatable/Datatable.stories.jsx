import { useRef, useState } from "react";
import Badge from "../badge/Badge";
import Datatable from "./Datatable";
import Button from "../button/Button";
import '../../css/theme.css';
import useThemeMode from '../../hooks/useThemeMode';
import data from './data.json';
import { BiEdit, BiTrash, BiExport, BiPlus, BiRefresh } from "react-icons/bi";

export default {
    title: "Components/DataTable",
    component: Datatable,
    parameters: {
        docs: {
            description: {
                component: `
El componente DataTable es una tabla avanzada diseñada para dashboards minimalistas. 
Ofrece funcionalidades como ordenamiento, búsqueda, paginación y selección múltiple.

### Características principales:
- **Búsqueda en tiempo real** con filtrado por múltiples campos
- **Ordenamiento** por columnas con indicadores visuales
- **Paginación** integrada con el componente Paginator
- **Selección múltiple** con checkbox y selección de todos
- **Personalización de celdas** mediante funciones de renderizado
- **Diseño responsivo** y minimalista
- **Soporte para temas** claro y oscuro

### Uso básico:
\`\`\`jsx
import DataTable from './DataTable';

const columns = [
    { field: 'name', header: 'Nombre', sorteable: true },
    { field: 'email', header: 'Email', sorteable: true },
    { field: 'status', header: 'Estado', body: (row) => <Badge>{row.status}</Badge> }
];

<DataTable 
    data={users} 
    columns={columns}
    title="Usuarios"
    filter={true}
    paginator={true}
    rows={10}
/>
\`\`\`
                `
            }
        }
    },
    argTypes: {
        data: {
            description: 'Array de objetos con los datos a mostrar',
            control: { type: 'object' }
        },
        columns: {
            description: 'Configuración de columnas con field, header, sorteable, body y searchFields',
            control: { type: 'object' }
        },
        title: {
            control: { type: 'text' },
            description: 'Título de la tabla que aparece en el header'
        },
        filter: {
            control: { type: 'boolean' },
            description: 'Habilita el campo de búsqueda en tiempo real'
        },
        filterPlaceholder: {
            control: { type: 'text' },
            description: 'Placeholder del campo de búsqueda'
        },
        paginator: {
            control: { type: 'boolean' },
            description: 'Habilita la paginación en la tabla'
        },
        rows: {
            control: { type: 'number' },
            description: 'Número de filas por página cuando la paginación está activa'
        },
        height: {
            control: { type: 'text' },
            description: 'Altura máxima de la tabla (ej: "500px"). Habilita scroll vertical'
        },
        selectedRows: {
            description: 'Ref para manejar las filas seleccionadas (useRef)',
            control: { type: 'object' }
        },
        rowClick: {
            description: 'Función callback al hacer click en una fila',
            action: 'clicked'
        },
        headerButtons: {
            description: 'Componentes React para mostrar en el header (botones de acción)',
            control: { type: 'object' }
        },
        noDataMessage: {
            control: { type: 'text' },
            description: 'Mensaje cuando no hay datos para mostrar'
        }
    }
};

// Columnas base para los ejemplos
const basicColumns = [
    {
        searchFields: ["nombre", "apellido", "email"],
        field: "nombre",
        header: 'Nombre',
        sorteable: true,
        body: (data) => (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: '600' }}>{data.nombre} {data.apellido}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>{data.email}</span>
            </div>
        )
    },
    { field: 'telefono', header: 'Teléfono', sorteable: true },
    {
        field: 'status',
        header: 'Estado',
        sorteable: true,
        body: (data) => (
            <Badge
                color={data.status === 'inactivo' ? 'danger' : 'success'}
                content={data.status}
                variant="soft"
            />
        )
    },
    { field: 'empresa.nombre', header: 'Empresa' },
];

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>

            <div>
                <h3>Tabla Básica</h3>
                <Datatable
                    data={data}
                    columns={basicColumns}
                    title="Lista de Usuarios"
                />
            </div>
        </div>
    );
};

Default.parameters = {
    docs: {
        description: {
            story: 'Tabla básica sin funcionalidades adicionales. Muestra solo los datos con formato minimalista.'
        }
    }
};

export const WithSearch = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>

            <div>
                <h3>Con Búsqueda</h3>
                <Datatable
                    data={data}
                    columns={basicColumns}
                    title="Usuarios del Sistema"
                    filter={true}
                    filterPlaceholder="Buscar por nombre, email o teléfono..."
                />
            </div>
        </div>
    );
};

WithSearch.parameters = {
    docs: {
        description: {
            story: 'Tabla con búsqueda en tiempo real. Busca en múltiples campos usando `searchFields` en las columnas.'
        }
    }
};

export const WithPagination = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>

            <div>
                <h3>Con Paginación</h3>
                <Datatable
                    data={data}
                    columns={basicColumns}
                    title="Usuarios Registrados"
                    paginator={true}
                    rows={5}
                    filter={true}
                    filterPlaceholder="Buscar usuarios..."
                />
            </div>
        </div>
    );
};

WithPagination.parameters = {
    docs: {
        description: {
            story: 'Tabla con paginación integrada. Usa el componente Paginator para navegar entre páginas.'
        }
    }
};

export const WithSelection = () => {
    const { toggleTheme } = useThemeMode();
    const selectedRowsRef = useRef(new Set());
    const [selectedCount, setSelectedCount] = useState(0);

    const handleShowSelected = () => {
        const selected = Array.from(selectedRowsRef.current);
        console.log('Filas seleccionadas:', selected);
        setSelectedCount(selected.length);
        alert(`${selected.length} filas seleccionadas. Ver consola para detalles.`);
    };

    const headerButtons = (
        <div style={{ display: 'flex', gap: '8px' }}>
            <Button
                onClick={handleShowSelected}
                color="primary"
                size="sm"
                leftIcon={<BiExport />}
            >
                Exportar Seleccionados
            </Button>
            {selectedCount > 0 && (
                <Badge color="primary" content={`${selectedCount} seleccionados`} />
            )}
        </div>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>

            <div>
                <h3>Con Selección Múltiple</h3>
                <Datatable
                    data={data}
                    columns={basicColumns}
                    title="Gestión de Usuarios"
                    selectedRows={selectedRowsRef}
                    filter={true}
                    filterPlaceholder="Buscar..."
                    paginator={true}
                    rows={10}
                    headerButtons={headerButtons}
                />
            </div>
        </div>
    );
};

WithSelection.parameters = {
    docs: {
        description: {
            story: `Tabla con selección múltiple usando checkboxes. 
            - Usa un \`useRef\` para mantener las filas seleccionadas
            - Incluye selección de todos los elementos
            - Muestra contador de elementos seleccionados`
        }
    }
};

export const WithActions = () => {
    const { toggleTheme } = useThemeMode();
    const [selectedUser, setSelectedUser] = useState(null);

    const columnsWithActions = [
        ...basicColumns,
        {
            field: 'actions',
            header: 'Acciones',
            body: (row) => (
                <div style={{ display: 'flex', gap: '4px' }}>
                    <Button
                        size="sm"
                        variant="ghost"
                        color="info"
                        onClick={(e) => {
                            e.stopPropagation();
                            alert(`Editar: ${row.nombre} ${row.apellido}`);
                        }}
                    >
                        <BiEdit size={16} />
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        color="danger"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (confirm(`¿Eliminar a ${row.nombre} ${row.apellido}?`)) {
                                alert('Usuario eliminado');
                            }
                        }}
                    >
                        <BiTrash size={16} />
                    </Button>
                </div>
            )
        }
    ];

    const headerButtons = (
        <div style={{ display: 'flex', gap: '8px' }}>
            <Button
                color="primary"
                size="sm"
                leftIcon={<BiPlus />}
            >
                Nuevo Usuario
            </Button>
            <Button
                variant="outline"
                color="secondary"
                size="sm"
                leftIcon={<BiRefresh />}
            >
                Actualizar
            </Button>
        </div>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>

            <div>
                <h3>Con Acciones por Fila</h3>
                <Datatable
                    data={data}
                    columns={columnsWithActions}
                    title="Administración de Usuarios"
                    filter={true}
                    filterPlaceholder="Buscar usuarios..."
                    paginator={true}
                    rows={8}
                    headerButtons={headerButtons}
                    rowClick={(row) => {
                        setSelectedUser(row);
                        console.log('Fila clickeada:', row);
                    }}
                />
                {selectedUser && (
                    <div style={{ marginTop: '16px', padding: '16px', backgroundColor: 'var(--hadr-selected)', borderRadius: '8px' }}>
                        <strong>Usuario seleccionado:</strong> {selectedUser.nombre} {selectedUser.apellido}
                    </div>
                )}
            </div>
        </div>
    );
};

WithActions.parameters = {
    docs: {
        description: {
            story: `Tabla con acciones por fila y botones en el header.
            - Botones de acción individuales por fila
            - Botones globales en el header
            - Manejo de eventos con \`rowClick\``
        }
    }
};

export const CustomStyling = () => {
    const { toggleTheme } = useThemeMode();

    const customColumns = [
        {
            field: 'nombre',
            header: 'Usuario',
            sorteable: true,
            body: (data) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: 'var(--hadr-color-primary-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '600',
                        color: 'var(--hadr-color-primary)'
                    }}>
                        {data.nombre.charAt(0)}{data.apellido.charAt(0)}
                    </div>
                    <div>
                        <div style={{ fontWeight: '600' }}>{data.nombre} {data.apellido}</div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{data.email}</div>
                    </div>
                </div>
            )
        },
        {
            field: 'empresa',
            header: 'Información de Empresa',
            body: (data) => (
                <div>
                    <div style={{ fontWeight: '600' }}>{data.empresa.nombre}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                        {data.empresa.departamento} • {data.empresa.cargo}
                    </div>
                </div>
            )
        },
        {
            field: 'metrics',
            header: 'Métricas',
            body: (data) => {
                const productivity = Math.floor(Math.random() * 100);
                const color = productivity > 70 ? 'success' : productivity > 40 ? 'warning' : 'danger';

                return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                            width: '100px',
                            height: '8px',
                            backgroundColor: 'var(--hadr-border-color)',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${productivity}%`,
                                height: '100%',
                                backgroundColor: `var(--hadr-color-${color})`,
                                transition: 'width 0.3s ease'
                            }} />
                        </div>
                        <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{productivity}%</span>
                    </div>
                );
            }
        },
        {
            field: 'status',
            header: 'Estado',
            sorteable: true,
            body: (data) => (
                <Badge
                    color={data.status === 'inactivo' ? 'danger' : 'success'}
                    content={data.status}
                    variant="soft"
                />
            )
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>

            <div>
                <h3>Tabla Personalizada para Dashboard</h3>
                <Datatable
                    data={data}
                    columns={customColumns}
                    title="Panel de Empleados"
                    filter={true}
                    filterPlaceholder="Buscar empleados..."
                    paginator={true}
                    rows={6}
                    height="600px"
                />
            </div>
        </div>
    );
};

CustomStyling.parameters = {
    docs: {
        description: {
            story: `Ejemplo avanzado con estilos personalizados para dashboard.
            - Avatares con iniciales
            - Barras de progreso
            - Información jerárquica
            - Renderizado personalizado con \`body\` en columnas`
        }
    }
};

export const EmptyState = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>

            <div>
                <h3>Estado Vacío</h3>
                <Datatable
                    data={[]}
                    columns={basicColumns}
                    title="Sin Resultados"
                    filter={true}
                    filterPlaceholder="Buscar..."
                    noDataMessage="No se encontraron usuarios en el sistema"
                />
            </div>
        </div>
    );
};

EmptyState.parameters = {
    docs: {
        description: {
            story: 'Estado vacío de la tabla con mensaje personalizado usando `noDataMessage`.'
        }
    }
};

export const FixedHeight = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>

            <div>
                <h3>Altura Fija con Scroll</h3>
                <Datatable
                    data={data}
                    columns={basicColumns}
                    title="Tabla con Scroll"
                    height="400px"
                    filter={true}
                    filterPlaceholder="Buscar..."
                />
            </div>
        </div>
    );
};

FixedHeight.parameters = {
    docs: {
        description: {
            story: 'Tabla con altura fija y scroll vertical. Útil para espacios limitados en dashboards.'
        }
    }
};

export const Interactive = (args) => {
    const selectedRowsRef = useRef(new Set());

    const handleBadge = (data) => (
        <Badge
            color={data.status === 'inactivo' ? 'danger' : 'success'}
            content={data.status}
            variant="soft"
        />
    );

    const columns = [
        {
            searchFields: ["nombre", "apellido", "email"],
            field: "nombre",
            header: 'Nombre',
            sorteable: true,
            body: (data) => `${data.nombre} ${data.apellido}`
        },
        { field: 'email', header: 'Email', sorteable: true },
        { field: 'telefono', header: 'Teléfono', sorteable: true },
        {
            searchFields: ["status"],
            body: handleBadge,
            header: 'Status',
            sorteable: true,
            field: 'status'
        },
        { field: 'empresa.nombre', header: 'Empresa' },
    ];

    return (
        <div style={{ padding: '24px' }}>
            <Datatable
                {...args}
                selectedRows={args.selectedRows ? selectedRowsRef : undefined}
                data={data}
                columns={columns}
            />
        </div>
    );
};

Interactive.args = {
    title: "Tabla Interactiva",
    filter: true,
    filterPlaceholder: "Buscar...",
    paginator: true,
    rows: 10,
    height: "500px",
    selectedRows: true,
    noDataMessage: "No hay datos disponibles"
};
