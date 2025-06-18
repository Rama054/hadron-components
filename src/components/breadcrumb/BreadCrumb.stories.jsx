import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import { IoHome, IoFolder, IoDocument, IoChevronForward, IoArrowForward, IoPlay } from 'react-icons/io5';

export default {
    title: 'Components/BreadCrumb',
    component: BreadCrumb,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente de navegación breadcrumb que muestra la jerarquía de páginas y permite navegación.'
            }
        }
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Tamaño del breadcrumb'
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
            description: 'Color del breadcrumb'
        },
        showHome: {
            control: { type: 'boolean' },
            description: 'Mostrar enlace de inicio automáticamente'
        }
    }
};

const basicItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Usuarios', href: '/users' },
    { label: 'Perfil' }
];

const itemsWithIcons = [
    { label: 'Dashboard', icon: <IoHome size={16} />, href: '/dashboard' },
    { label: 'Proyectos', icon: <IoFolder size={16} />, href: '/projects' },
    { label: 'Documentos', icon: <IoDocument size={16} />, href: '/documents' },
    { label: 'Archivo.pdf' }
];

const Template = (args) => {
    const [clickedItem, setClickedItem] = useState('');

    const handleItemClick = (item, index) => {
        setClickedItem(`Clicked: ${item.label} (index: ${index})`);
    };

    return (
        <div style={{ width: '1000px', padding: '1rem' }}>
            <BreadCrumb
                {...args}
                onItemClick={handleItemClick}
            />
            
            {clickedItem && (
                <div style={{ 
                    marginTop: '1rem', 
                    padding: '0.5rem', 
                    backgroundColor: '#f5f5f5', 
                    borderRadius: '4px',
                    fontSize: '0.875rem'
                }}>
                    <strong>Evento:</strong> {clickedItem}
                </div>
            )}
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    items: basicItems
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    items: itemsWithIcons,
    color: 'primary'
};

export const WithCustomSeparator = Template.bind({});
WithCustomSeparator.args = {
    items: itemsWithIcons,
    separator: <IoArrowForward size={14} />,
    color: 'success'
};

export const WithoutHome = Template.bind({});
WithoutHome.args = {
    items: basicItems,
    showHome: false,
    color: 'secondary'
};

export const WithCustomHomeIcon = Template.bind({});
WithCustomHomeIcon.args = {
    items: [
        { label: 'Proyectos', href: '/projects' },
        { label: 'Frontend', href: '/frontend' },
        { label: 'Componentes' }
    ],
    homeIcon: <IoHome size={16} />,
    color: 'info'
};

export const Sizes = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '1500px', padding: '1rem' }}>
            <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Pequeño</h4>
                <BreadCrumb
                    {...args}
                    size="sm"
                    items={itemsWithIcons}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Mediano</h4>
                <BreadCrumb
                    {...args}
                    size="md"
                    items={itemsWithIcons}
                />
            </div>
            <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Grande</h4>
                <BreadCrumb
                    {...args}
                    size="lg"
                    items={itemsWithIcons}
                />
            </div>
        </div>
    ),
    args: {
        color: 'primary'
    }
};

export const WithTemplate = {
    render: (args) => {
        const [navigation, setNavigation] = useState([]);

        const customTemplate = (item, index, isLast) => {
            return (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    backgroundColor: isLast ? '#e3f2fd' : 'transparent',
                    border: isLast ? '1px solid #2196f3' : 'none'
                }}>
                    {item.icon}
                    <span style={{ 
                        fontWeight: isLast ? '600' : '400',
                        color: isLast ? '#1976d2' : 'inherit'
                    }}>
                        {item.label}
                    </span>
                    {item.count && (
                        <span style={{
                            backgroundColor: '#ff4444',
                            color: 'white',
                            borderRadius: '10px',
                            padding: '0.125rem 0.375rem',
                            fontSize: '0.625rem',
                            fontWeight: '600'
                        }}>
                            {item.count}
                        </span>
                    )}
                </div>
            );
        };

        const templateItems = [
            { 
                label: 'Dashboard', 
                icon: <IoHome size={16} />, 
                template: customTemplate,
                onClick: () => setNavigation(['Dashboard'])
            },
            { 
                label: 'Proyectos', 
                icon: <IoFolder size={16} />, 
                count: 12,
                template: customTemplate,
                onClick: () => setNavigation(['Dashboard', 'Proyectos'])
            },
            { 
                label: 'Hadron UI', 
                icon: <IoDocument size={16} />, 
                template: customTemplate 
            }
        ];

        return (
            <div style={{ width: '700px', padding: '1rem' }}>
                <h4>Breadcrumb con Templates Personalizados</h4>
                <BreadCrumb
                    {...args}
                    items={templateItems}
                    separator={<IoPlay size={12} />}
                    showHome={false}
                />
                
                {navigation.length > 0 && (
                    <div style={{ 
                        marginTop: '1rem', 
                        padding: '0.5rem', 
                        backgroundColor: '#f0f9ff', 
                        borderRadius: '4px',
                        border: '1px solid #0ea5e9'
                    }}>
                        <strong>Navegación:</strong> {navigation.join(' → ')}
                    </div>
                )}
            </div>
        );
    },
    args: {
        color: 'info'
    }
};

export const Interactive = {
    render: (args) => {
        const [currentPath, setCurrentPath] = useState(['Dashboard', 'Usuarios', 'Perfil']);
        
        const buildItems = (path) => {
            return path.map((item, index) => ({
                label: item,
                icon: index === 0 ? <IoHome size={16} /> : 
                      index === path.length - 1 ? <IoDocument size={16} /> : 
                      <IoFolder size={16} />,
                onClick: () => {
                    // Navegar hacia atrás eliminando elementos después del clickeado
                    setCurrentPath(path.slice(0, index + 1));
                }
            }));
        };

        const addLevel = () => {
            const newLevels = ['Configuración', 'Notificaciones', 'Avanzado', 'Seguridad'];
            const randomLevel = newLevels[Math.floor(Math.random() * newLevels.length)];
            setCurrentPath([...currentPath, randomLevel]);
        };

        return (
            <div style={{ width: '600px', padding: '1rem' }}>
                <h4>Breadcrumb Interactivo</h4>
                <BreadCrumb
                    {...args}
                    items={buildItems(currentPath)}
                    showHome={false}
                />
                
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={addLevel}
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Agregar Nivel
                    </button>
                    <button
                        onClick={() => setCurrentPath(['Dashboard'])}
                        style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Reset
                    </button>
                </div>
                
                <div style={{ 
                    marginTop: '1rem', 
                    padding: '0.5rem', 
                    backgroundColor: '#f5f5f5', 
                    borderRadius: '4px',
                    fontSize: '0.875rem'
                }}>
                    <strong>Ruta actual:</strong> {currentPath.join(' / ')}
                </div>
            </div>
        );
    },
    args: {
        color: 'primary',
        separator: <IoChevronForward size={14} />
    }
};

export const Colors = {
    render: (args) => {
        const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '600px', padding: '1rem' }}>
                {colors.map((color) => (
                    <div key={color}>
                        <h4 style={{ 
                            margin: '0 0 0.5rem 0', 
                            fontSize: '0.875rem', 
                            color: '#666',
                            textTransform: 'capitalize'
                        }}>
                            {color}
                        </h4>
                        <BreadCrumb
                            {...args}
                            color={color}
                            items={itemsWithIcons}
                        />
                    </div>
                ))}
            </div>
        );
    },
    args: {}
};
