import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { 
    FiHome, 
    FiPackage, 
    FiFileText, 
    FiList, 
    FiCamera, 
    FiUser, 
    FiSettings,
    FiLogOut,
    FiShoppingCart,
    FiBarChart,
    FiUsers
} from 'react-icons/fi';
import VerticalMenu from './VerticalMenu';

export default {
    title: 'Components/VerticalMenu',
    component: VerticalMenu,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <Router>
                <div style={{ display: 'flex', height: '100vh' }}>
                    <div style={{ width: '280px', background: '#1e293b', padding: '1rem' }}>
                        <Story />
                    </div>
                    <div style={{ flex: 1, padding: '2rem', background: '#f8fafc' }}>
                        <h2>Contenido principal</h2>
                        <p>El menú está a la izquierda. Navega por las opciones para ver los estados activos.</p>
                    </div>
                </div>
            </Router>
        ),
    ],
    argTypes: {
        theme: {
            control: 'select',
            options: ['light', 'dark'],
            description: 'Tema visual del menú'
        },
        accentColor: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
            description: 'Color de acento para elementos activos'
        },
        showGroupHeadings: {
            control: 'boolean',
            description: 'Mostrar encabezados de grupo'
        },
        compact: {
            control: 'boolean',
            description: 'Modo compacto con menos padding'
        }
    },
};

const sampleMenu = [
    {
        heading: "General",
        list: [
            {
                title: "Dashboard",
                icon: <FiHome size={20} />,
                to: "/dashboard"
            },
            {
                title: "Pedidos",
                icon: <FiPackage size={20} />,
                list: [
                    {
                        title: "Ver pedidos",
                        to: "/pedidos"
                    },
                    {
                        title: "Nuevo pedido",
                        to: "/pedidos/nuevo"
                    },
                    {
                        title: "Histórico",
                        to: "/pedidos/historico"
                    }
                ]
            },
            {
                title: "Productos",
                icon: <FiShoppingCart size={20} />,
                list: [
                    {
                        title: "Catálogo",
                        to: "/productos"
                    },
                    {
                        title: "Categorías",
                        to: "/productos/categorias"
                    },
                    {
                        title: "Inventario",
                        to: "/productos/inventario"
                    }
                ]
            },
            {
                title: "Facturas",
                icon: <FiFileText size={20} />,
                to: "/facturas"
            },
            {
                title: "Lista de precios",
                icon: <FiList size={20} />,
                to: "/precios"
            }
        ]
    },
    {
        heading: "Analytics",
        list: [
            {
                title: "Reportes",
                icon: <FiBarChart size={20} />,
                list: [
                    {
                        title: "Ventas",
                        to: "/reportes/ventas"
                    },
                    {
                        title: "Productos",
                        to: "/reportes/productos"
                    },
                    {
                        title: "Clientes",
                        to: "/reportes/clientes"
                    }
                ]
            },
            {
                title: "Clientes",
                icon: <FiUsers size={20} />,
                to: "/clientes"
            }
        ]
    },
    {
        heading: "Sistema",
        list: [
            {
                title: "Perfil",
                icon: <FiUser size={20} />,
                to: "/perfil"
            },
            {
                title: "Configuración",
                icon: <FiSettings size={20} />,
                to: "/configuracion"
            },
            {
                title: "Cerrar sesión",
                icon: <FiLogOut size={20} />,
                click: () => alert('Cerrando sesión...')
            }
        ]
    }
];

export const Default = {
    args: {
        menu: sampleMenu,
        theme: 'dark',
        accentColor: 'primary',
    },
};

export const LightTheme = {
    args: {
        menu: sampleMenu,
        theme: 'light',
        accentColor: 'primary',
    },
    decorators: [
        (Story) => (
            <Router>
                <div style={{ display: 'flex', height: '100vh' }}>
                    <div style={{ width: '280px', background: '#ffffff', padding: '1rem', borderRight: '1px solid #e2e8f0' }}>
                        <Story />
                    </div>
                    <div style={{ flex: 1, padding: '2rem', background: '#f8fafc' }}>
                        <h2>Contenido principal</h2>
                        <p>El menú está a la izquierda en tema claro.</p>
                    </div>
                </div>
            </Router>
        ),
    ],
};

export const DifferentAccentColors = () => {
    const [selectedColor, setSelectedColor] = useState('primary');
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }}>
                <div style={{ width: '280px', background: '#1e293b', padding: '1rem' }}>
                    <VerticalMenu
                        menu={sampleMenu}
                        theme="dark"
                        accentColor={selectedColor}
                    />
                </div>
                <div style={{ flex: 1, padding: '2rem', background: '#f8fafc' }}>
                    <h2>Cambia el color de acento</h2>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '1rem' }}>
                        {colors.map(color => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                style={{
                                    padding: '8px 16px',
                                    border: selectedColor === color ? '2px solid #3b82f6' : '1px solid #d1d5db',
                                    borderRadius: '6px',
                                    background: selectedColor === color ? '#eff6ff' : 'white',
                                    cursor: 'pointer',
                                    textTransform: 'capitalize'
                                }}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Router>
    );
};

export const CompactMode = {
    args: {
        menu: sampleMenu,
        theme: 'dark',
        accentColor: 'primary',
        compact: true,
    },
};

export const WithoutGroupHeadings = {
    args: {
        menu: sampleMenu,
        theme: 'dark',
        accentColor: 'primary',
        showGroupHeadings: false,
    },
};

export const MinimalMenu = () => {
    const minimalMenuData = [
        {
            heading: "Main",
            list: [
                {
                    title: "Home",
                    icon: <FiHome size={20} />,
                    to: "/home"
                },
                {
                    title: "Settings",
                    icon: <FiSettings size={20} />,
                    to: "/settings"
                },
                {
                    title: "Logout",
                    icon: <FiLogOut size={20} />,
                    click: () => alert('Logout clicked')
                }
            ]
        }
    ];

    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }}>
                <div style={{ width: '240px', background: '#1e293b', padding: '1rem' }}>
                    <VerticalMenu
                        menu={minimalMenuData}
                        theme="dark"
                        accentColor="success"
                    />
                </div>
                <div style={{ flex: 1, padding: '2rem', background: '#f8fafc' }}>
                    <h2>Menú minimal</h2>
                    <p>Ejemplo con pocas opciones.</p>
                </div>
            </div>
        </Router>
    );
};

export const CustomEventHandlers = () => {
    const [logs, setLogs] = useState([]);

    const handleItemClick = (item, event) => {
        const newLog = `Clicked: ${item.title} at ${new Date().toLocaleTimeString()}`;
        setLogs(prev => [newLog, ...prev.slice(0, 4)]);
    };

    const handleToggleExpand = (key, expanded) => {
        const newLog = `${expanded ? 'Expanded' : 'Collapsed'}: ${key} at ${new Date().toLocaleTimeString()}`;
        setLogs(prev => [newLog, ...prev.slice(0, 4)]);
    };

    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh' }}>
                <div style={{ width: '280px', background: '#1e293b', padding: '1rem' }}>
                    <VerticalMenu
                        menu={sampleMenu}
                        theme="dark"
                        accentColor="info"
                        onItemClick={handleItemClick}
                        onToggleExpand={handleToggleExpand}
                    />
                </div>
                <div style={{ flex: 1, padding: '2rem', background: '#f8fafc' }}>
                    <h2>Event Handlers</h2>
                    <p>Los clicks y expansiones se registran aquí:</p>
                    <div style={{ marginTop: '1rem', padding: '1rem', background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <h4>Últimos eventos:</h4>
                        <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                            {logs.map((log, index) => (
                                <li key={index} style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                    {log}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Router>
    );
};
