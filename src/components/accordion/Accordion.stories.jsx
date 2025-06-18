import React, { useState } from 'react';
import Accordion from './Accordion';
import { IoSettings, IoCard, IoNotifications, IoShield, IoHelpCircle } from 'react-icons/io5';
import { PiUser } from 'react-icons/pi';

export default {
    title: 'Components/Accordion',
    component: Accordion.Root,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Accordion expandible con soporte para modo exclusivo y múltiple, estados controlados y no controlados.'
            }
        }
    },
    argTypes: {
        exclusive: {
            control: { type: 'boolean' },
            description: 'Solo permite un panel abierto a la vez'
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
            description: 'Color del accordion'
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Tamaño del accordion'
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'bordered', 'filled'],
            description: 'Variante visual del accordion'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Deshabilita todo el accordion'
        }
    }
};

const Template = (args) => (
    <div style={{ width: '500px' }}>
        <Accordion.Root {...args}>
            <Accordion.Tab 
                index={0} 
                title="Configuración General" 
                icon={<IoSettings size={16} />}
            >
                <p>Aquí puedes configurar las opciones generales de tu cuenta.</p>
                <ul>
                    <li>Idioma de la interfaz</li>
                    <li>Zona horaria</li>
                    <li>Formato de fecha</li>
                    <li>Tema de la aplicación</li>
                </ul>
            </Accordion.Tab>
            
            <Accordion.Tab 
                index={1} 
                title="Perfil de Usuario" 
                icon={<PiUser size={16} />}
            >
                <p>Gestiona la información de tu perfil personal.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label>Nombre: <input type="text" defaultValue="Juan Pérez" /></label>
                    <label>Email: <input type="email" defaultValue="juan@example.com" /></label>
                    <label>Teléfono: <input type="tel" defaultValue="+54 11 1234-5678" /></label>
                </div>
            </Accordion.Tab>
            
            <Accordion.Tab 
                index={2} 
                title="Métodos de Pago" 
                icon={<IoCard size={16} />}
            >
                <p>Administra tus tarjetas y métodos de pago.</p>
                <div style={{ 
                    padding: '1rem', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '8px',
                    border: '1px solid #dee2e6'
                }}>
                    <strong>Tarjeta principal:</strong> **** **** **** 4242
                    <br />
                    <small>Visa terminada en 4242</small>
                </div>
            </Accordion.Tab>
        </Accordion.Root>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    exclusive: false
};

export const Exclusive = Template.bind({});
Exclusive.args = {
    exclusive: true,
    defaultActiveIndex: 0
};

export const WithColors = {
    render: (args) => {
        const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
                {colors.map((color) => (
                    <div key={color}>
                        <h4 style={{ 
                            margin: '0 0 1rem 0', 
                            fontSize: '1rem',
                            textTransform: 'capitalize',
                            color: '#666'
                        }}>
                            Color: {color}
                        </h4>
                        <Accordion.Root color={color} exclusive defaultActiveIndex={0}>
                            <Accordion.Tab index={0} title="Configuración" icon={<IoSettings size={16} />}>
                                <p>Panel de configuración con color {color}.</p>
                            </Accordion.Tab>
                            <Accordion.Tab index={1} title="Notificaciones" icon={<IoNotifications size={16} />}>
                                <p>Gestiona tus notificaciones aquí.</p>
                            </Accordion.Tab>
                        </Accordion.Root>
                    </div>
                ))}
            </div>
        );
    }
};

export const Sizes = {
    render: (args) => {
        const sizes = ['sm', 'md', 'lg'];
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
                {sizes.map((size) => (
                    <div key={size}>
                        <h4 style={{ 
                            margin: '0 0 1rem 0', 
                            fontSize: '1rem',
                            color: '#666'
                        }}>
                            Tamaño: {size}
                        </h4>
                        <Accordion.Root size={size} exclusive defaultActiveIndex={0}>
                            <Accordion.Tab index={0} title="Panel Principal" icon={<PiUser size={16} />}>
                                <p>Contenido del panel con tamaño {size}.</p>
                            </Accordion.Tab>
                            <Accordion.Tab index={1} title="Configuración" icon={<IoSettings size={16} />}>
                                <p>Configuraciones adicionales.</p>
                            </Accordion.Tab>
                        </Accordion.Root>
                    </div>
                ))}
            </div>
        );
    }
};

export const Variants = {
    render: (args) => {
        const variants = ['default', 'bordered', 'filled'];
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
                {variants.map((variant) => (
                    <div key={variant}>
                        <h4 style={{ 
                            margin: '0 0 1rem 0', 
                            fontSize: '1rem',
                            textTransform: 'capitalize',
                            color: '#666'
                        }}>
                            Variante: {variant}
                        </h4>
                        <Accordion.Root variant={variant} exclusive defaultActiveIndex={0}>
                            <Accordion.Tab index={0} title="Información" icon={<PiUser size={16} />}>
                                <p>Panel con variante {variant}.</p>
                            </Accordion.Tab>
                            <Accordion.Tab index={1} title="Seguridad" icon={<IoShield size={16} />}>
                                <p>Configuraciones de seguridad.</p>
                            </Accordion.Tab>
                        </Accordion.Root>
                    </div>
                ))}
            </div>
        );
    }
};

export const Controlled = {
    render: (args) => {
        const [activeIndex, setActiveIndex] = useState([0]);
        const [log, setLog] = useState([]);

        const handleActiveIndexChange = (newActiveIndex, clickedIndex) => {
            setActiveIndex(newActiveIndex);
            setLog(prev => [...prev, {
                timestamp: new Date().toLocaleTimeString(),
                activeIndex: newActiveIndex,
                clickedIndex
            }].slice(-5)); // Keep last 5 entries
        };

        const resetAccordion = () => {
            setActiveIndex([]);
            setLog([]);
        };

        return (
            <div style={{ width: '500px' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button 
                        onClick={() => setActiveIndex([0, 1])}
                        style={{ 
                            padding: '0.5rem 1rem', 
                            backgroundColor: '#3b82f6', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '4px' 
                        }}
                    >
                        Abrir Primeros 2
                    </button>
                    <button 
                        onClick={resetAccordion}
                        style={{ 
                            padding: '0.5rem 1rem', 
                            backgroundColor: '#ef4444', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '4px' 
                        }}
                    >
                        Cerrar Todos
                    </button>
                </div>

                <Accordion.Root 
                    activeIndex={activeIndex}
                    onActiveIndexChange={handleActiveIndexChange}
                    color="primary"
                >
                    <Accordion.Tab index={0} title="Panel 1" icon={<PiUser size={16} />}>
                        <p>Contenido del primer panel controlado.</p>
                    </Accordion.Tab>
                    <Accordion.Tab index={1} title="Panel 2" icon={<IoSettings size={16} />}>
                        <p>Contenido del segundo panel controlado.</p>
                    </Accordion.Tab>
                    <Accordion.Tab index={2} title="Panel 3" icon={<IoShield size={16} />}>
                        <p>Contenido del tercer panel controlado.</p>
                    </Accordion.Tab>
                </Accordion.Root>

                <div style={{ 
                    marginTop: '1rem', 
                    padding: '1rem', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '8px',
                    fontSize: '0.875rem'
                }}>
                    <strong>Estado actual:</strong> {JSON.stringify(activeIndex)}
                    
                    {log.length > 0 && (
                        <div style={{ marginTop: '0.5rem' }}>
                            <strong>Log de cambios:</strong>
                            <ul style={{ margin: '0.5rem 0', paddingLeft: '1rem' }}>
                                {log.map((entry, index) => (
                                    <li key={index} style={{ marginBottom: '0.25rem' }}>
                                        {entry.timestamp} - Clicked: {entry.clickedIndex}, Active: {JSON.stringify(entry.activeIndex)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export const ExclusiveControlled = {
    render: (args) => {
        const [activeIndex, setActiveIndex] = useState(null);
        
        return (
            <div style={{ width: '500px' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {[0, 1, 2].map((index) => (
                        <button 
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{ 
                                padding: '0.25rem 0.75rem', 
                                backgroundColor: activeIndex === index ? '#3b82f6' : '#e5e7eb',
                                color: activeIndex === index ? 'white' : '#374151',
                                border: 'none', 
                                borderRadius: '4px',
                                fontSize: '0.875rem'
                            }}
                        >
                            Panel {index + 1}
                        </button>
                    ))}
                    <button 
                        onClick={() => setActiveIndex(null)}
                        style={{ 
                            padding: '0.25rem 0.75rem', 
                            backgroundColor: '#ef4444', 
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '4px',
                            fontSize: '0.875rem'
                        }}
                    >
                        Cerrar
                    </button>
                </div>

                <Accordion.Root 
                    exclusive
                    activeIndex={activeIndex}
                    onActiveIndexChange={setActiveIndex}
                    color="success"
                >
                    <Accordion.Tab index={0} title="Configuración General" icon={<IoSettings size={16} />}>
                        <p>Panel de configuración general del sistema.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label><input type="checkbox" /> Habilitar notificaciones</label>
                            <label><input type="checkbox" /> Modo oscuro</label>
                            <label><input type="checkbox" /> Actualizaciones automáticas</label>
                        </div>
                    </Accordion.Tab>
                    
                    <Accordion.Tab index={1} title="Perfil de Usuario" icon={<PiUser size={16} />}>
                        <p>Información personal y configuración del perfil.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                            <input placeholder="Nombre" />
                            <input placeholder="Apellido" />
                            <input placeholder="Email" type="email" />
                            <input placeholder="Teléfono" type="tel" />
                        </div>
                    </Accordion.Tab>
                    
                    <Accordion.Tab index={2} title="Ayuda y Soporte" icon={<IoHelpCircle size={16} />}>
                        <p>Recursos de ayuda y contacto con soporte técnico.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>📚 Documentación</a>
                            <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>💬 Chat en vivo</a>
                            <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>📧 Contactar soporte</a>
                        </div>
                    </Accordion.Tab>
                </Accordion.Root>

                <div style={{ 
                    marginTop: '1rem', 
                    padding: '0.75rem', 
                    backgroundColor: '#f0f9ff', 
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    border: '1px solid #0ea5e9'
                }}>
                    <strong>Panel activo:</strong> {activeIndex !== null ? `Panel ${activeIndex + 1}` : 'Ninguno'}
                </div>
            </div>
        );
    }
};

export const WithDisabledTabs = {
    render: (args) => (
        <div style={{ width: '500px' }}>
            <Accordion.Root exclusive defaultActiveIndex={0}>
                <Accordion.Tab index={0} title="Panel Habilitado" icon={<PiUser size={16} />}>
                    <p>Este panel está habilitado y se puede usar normalmente.</p>
                </Accordion.Tab>
                
                <Accordion.Tab 
                    index={1} 
                    title="Panel Deshabilitado" 
                    icon={<IoSettings size={16} />}
                    disabled
                >
                    <p>Este contenido no se debería ver porque el panel está deshabilitado.</p>
                </Accordion.Tab>
                
                <Accordion.Tab index={2} title="Otro Panel Habilitado" icon={<IoShield size={16} />}>
                    <p>Este panel también está habilitado.</p>
                    <button style={{ 
                        padding: '0.5rem 1rem', 
                        backgroundColor: '#10b981', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px' 
                    }}>
                        Acción del Panel
                    </button>
                </Accordion.Tab>
            </Accordion.Root>
        </div>
    )
};

export const CompletelyDisabled = Template.bind({});
CompletelyDisabled.args = {
    disabled: true,
    exclusive: true
};
