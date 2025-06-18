import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    FiHome,
    FiPackage,
    FiFileText,
    FiUser,
    FiSettings,
    FiLogOut,
    FiShoppingCart,
    FiBarChart,
    FiUsers
} from 'react-icons/fi';
import SidebarPanel from './SidebarPanel';

export default {
    title: 'Components/SidebarPanel',
    component: SidebarPanel,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <Router>
                <div style={{ display: 'flex', height: '100vh' }}>
                    <Story />
                    <div style={{ flex: 1, padding: '2rem 2rem 2rem 5rem', background: '#f8fafc' }}>
                        <h2>Panel Principal</h2>
                        <p>Este es el contenido principal. El sidebar está a la izquierda.</p>
                        <p>En mobile aparece un botón hamburguesa para abrir el sidebar.</p>
                    </div>
                </div>
            </Router>
        ),
    ],
    argTypes: {
        backgroundColor: {
            control: 'color',
            description: 'Color de fondo del sidebar'
        },
        textColor: {
            control: 'color',
            description: 'Color del texto'
        },
        logoContent: {
            control: 'text',
            description: 'Contenido del logo/header'
        },
        showGroupHeadings: {
            control: 'boolean',
            description: 'Mostrar encabezados de grupo'
        }
    },
};

const sampleMenu = [
    {
        heading: "Principal",
        list: [
            {
                title: "Dashboard",
                icon: <FiHome size={18} />,
                to: "/dashboard"
            },
            {
                title: "Productos",
                icon: <FiPackage size={18} />,
                list: [
                    {
                        title: "Catálogo",
                        to: "/productos"
                    },
                    {
                        title: "Inventario",
                        to: "/productos/inventario"
                    }
                ]
            },
            {
                title: "Pedidos",
                icon: <FiShoppingCart size={18} />,
                to: "/pedidos"
            }
        ]
    },
    {
        heading: "Sistema",
        list: [
            {
                title: "Mi Perfil",
                icon: <FiUser size={18} />,
                to: "/perfil"
            },
            {
                title: "Configuración",
                icon: <FiSettings size={18} />,
                to: "/configuracion"
            },
            {
                title: "Cerrar Sesión",
                icon: <FiLogOut size={18} />,
                click: () => alert('Cerrando sesión...')
            }
        ]
    }
];

export const Default = {
    args: {
        menu: sampleMenu,
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
        logoContent: 'MI EMPRESA',
        showGroupHeadings: true,
    },
};

export const CustomColors = {
    args: {
        menu: sampleMenu,
        backgroundColor: '#059669',
        textColor: '#f0fdf4',
        logoContent: 'ADMIN PANEL',
        showGroupHeadings: true,
    },
};

export const DarkTheme = {
    args: {
        menu: sampleMenu,
        backgroundColor: '#1f2937',
        textColor: '#f9fafb',
        logoContent: 'DASHBOARD',
        showGroupHeadings: true,
    },
};

export const WithoutHeadings = {
    args: {
        menu: sampleMenu,
        backgroundColor: '#7c3aed',
        textColor: '#faf5ff',
        logoContent: 'SISTEMA',
        showGroupHeadings: false,
    },
};

export const ColorCustomizer = () => {
    const [backgroundColor, setBackgroundColor] = useState('#3b82f6');
    const [textColor, setTextColor] = useState('#ffffff');
    const [logoText, setLogoText] = useState('MI EMPRESA');

    return (
        <>
            <SidebarPanel
                menu={sampleMenu}
                backgroundColor={backgroundColor}
                textColor={textColor}
                logoContent={logoText}
                showGroupHeadings={true}
            />
            <div style={{ flex: 1, padding: '2rem 2rem 2rem 5rem', background: '#f8fafc' }}>
                <h2>Personalizador de Colores</h2>

                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'end' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.875rem', fontWeight: '500' }}>
                                Color de Fondo:
                            </label>
                            <input
                                type="color"
                                value={backgroundColor}
                                onChange={(e) => setBackgroundColor(e.target.value)}
                                style={{ width: '60px', height: '40px', border: 'none', borderRadius: '4px' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.875rem', fontWeight: '500' }}>
                                Color de Texto:
                            </label>
                            <input
                                type="color"
                                value={textColor}
                                onChange={(e) => setTextColor(e.target.value)}
                                style={{ width: '60px', height: '40px', border: 'none', borderRadius: '4px' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.875rem', fontWeight: '500' }}>
                                Texto del Logo:
                            </label>
                            <input
                                type="text"
                                value={logoText}
                                onChange={(e) => setLogoText(e.target.value)}
                                style={{
                                    padding: '8px',
                                    border: '1px solid #d1d5db',
                                    borderRadius: '4px',
                                    width: '150px'
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ padding: '1rem', background: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <h4>Configuración Actual:</h4>
                    <pre style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>
                        {`<SidebarPanel
                            backgroundColor="${backgroundColor}"
                            textColor="${textColor}"
                            logoContent="${logoText}"
                            menu={menuData}
                            />`}
                    </pre>
                </div>
            </div>
        </>
    );
};
