import ProgressBar from "./ProgressBar";
import useThemeMode from '../../hooks/useThemeMode';
import '../../css/theme.css';
import React, { useState, useEffect } from 'react';
import Button from '../button/Button';

export default {
    title: "Components/ProgressBar",
    component: ProgressBar,
    parameters: {
        docs: {
            description: {
                component: `
El componente ProgressBar es una barra de progreso minimalista y versátil diseñada para dashboards.
Permite visualizar el progreso de tareas, métricas o cualquier valor porcentual.

### Características principales:
- **Múltiples tamaños** desde xs hasta xl
- **Colores del sistema** integrados con el tema
- **Labels configurables** con diferentes posiciones
- **Animaciones opcionales** con patrón de rayas
- **Totalmente responsivo** y accesible
- **Soporte para temas** claro y oscuro

### Uso básico:
\`\`\`jsx
import ProgressBar from './ProgressBar';

// Progreso simple
<ProgressBar value={75} max={100} color="primary" />

// Con label
<ProgressBar 
    value={45} 
    max={100} 
    color="success" 
    showLabel={true}
    labelPosition="right"
/>

// Animado con rayas
<ProgressBar 
    value={60} 
    max={100} 
    color="warning" 
    striped={true}
    animated={true}
/>
\`\`\`
                `
            }
        }
    },
    argTypes: {
        value: {
            control: { type: 'number', min: 0, max: 100 },
            description: 'Valor actual del progreso'
        },
        max: {
            control: { type: 'number' },
            description: 'Valor máximo (por defecto 100)'
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'emerald', 'teal', 'cyan', 'sky'],
            description: 'Color de la barra de progreso'
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Tamaño de la barra'
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'percentage', 'fraction'],
            description: 'Formato del label'
        },
        showLabel: {
            control: { type: 'boolean' },
            description: 'Mostrar el label con el valor'
        },
        labelPosition: {
            control: { type: 'select' },
            options: ['inside', 'left', 'right'],
            description: 'Posición del label'
        },
        animated: {
            control: { type: 'boolean' },
            description: 'Animar las rayas (requiere striped=true)'
        },
        striped: {
            control: { type: 'boolean' },
            description: 'Mostrar patrón de rayas'
        },
        radius: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'full'],
            description: 'Radio de los bordes'
        }
    }
};

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Progreso Básico</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
                    <ProgressBar value={25} max={100} color="primary" />
                    <ProgressBar value={50} max={100} color="success" />
                    <ProgressBar value={75} max={100} color="warning" />
                    <ProgressBar value={90} max={100} color="danger" />
                </div>
            </div>
        </div>
    );
};

Default.parameters = {
    docs: {
        description: {
            story: 'Barras de progreso básicas con diferentes valores y colores.'
        }
    }
};

export const Sizes = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Tamaños</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '4px' }}>Extra Small (xs)</p>
                        <ProgressBar value={60} size="xs" color="primary" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '4px' }}>Small (sm)</p>
                        <ProgressBar value={60} size="sm" color="primary" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '4px' }}>Medium (md)</p>
                        <ProgressBar value={60} size="md" color="primary" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '4px' }}>Large (lg)</p>
                        <ProgressBar value={60} size="lg" color="primary" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '4px' }}>Extra Large (xl)</p>
                        <ProgressBar value={60} size="xl" color="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

Sizes.parameters = {
    docs: {
        description: {
            story: 'Diferentes tamaños de barras de progreso para adaptarse a distintos contextos.'
        }
    }
};

export const WithLabels = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Con Labels</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '8px' }}>Label a la derecha</p>
                        <ProgressBar value={45} color="primary" showLabel={true} labelPosition="right" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '8px' }}>Label a la izquierda</p>
                        <ProgressBar value={67} color="success" showLabel={true} labelPosition="left" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '8px' }}>Label dentro (solo visible con progreso mayor al 10%)</p>
                        <ProgressBar value={78} color="info" showLabel={true} labelPosition="inside" size="lg" />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '8px' }}>Formato fracción</p>
                        <ProgressBar value={156} max={200} color="warning" showLabel={true} variant="fraction" />
                    </div>
                </div>
            </div>
        </div>
    );
};

WithLabels.parameters = {
    docs: {
        description: {
            story: 'Barras de progreso con labels en diferentes posiciones y formatos.'
        }
    }
};

export const StripedAnimated = () => {
    const { toggleTheme } = useThemeMode();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + 1));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Rayas y Animación</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '4px' }}>Estático con rayas</p>
                        <ProgressBar value={60} color="primary" striped={true} />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '4px' }}>Animado con rayas</p>
                        <ProgressBar value={75} color="success" striped={true} animated={true} />
                    </div>
                    <div>
                        <p style={{ fontSize: '12px', marginBottom: '4px' }}>Progreso en tiempo real</p>
                        <ProgressBar 
                            value={progress} 
                            color="info" 
                            striped={true} 
                            animated={true} 
                            showLabel={true} 
                            labelPosition="right"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

StripedAnimated.parameters = {
    docs: {
        description: {
            story: 'Barras de progreso con patrón de rayas y animación continua.'
        }
    }
};

export const Colors = () => {
    const { toggleTheme } = useThemeMode();
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'purple', 'pink', 'orange', 'emerald', 'cyan', 'slate'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Colores del Sistema</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '600px' }}>
                    {colors.map(color => (
                        <div key={color}>
                            <p style={{ fontSize: '12px', marginBottom: '4px', textTransform: 'capitalize' }}>{color}</p>
                            <ProgressBar value={70} color={color} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Colors.parameters = {
    docs: {
        description: {
            story: 'Todos los colores disponibles del sistema de diseño.'
        }
    }
};

export const BorderRadius = () => {
    const { toggleTheme } = useThemeMode();
    const radiusOptions = ['none', 'sm', 'md', 'lg', 'full'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Radio de Bordes</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
                    {radiusOptions.map(radius => (
                        <div key={radius}>
                            <p style={{ fontSize: '12px', marginBottom: '4px', textTransform: 'capitalize' }}>
                                {radius === 'none' ? 'Sin radio' : radius}
                            </p>
                            <ProgressBar value={65} color="primary" radius={radius} size="lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

BorderRadius.parameters = {
    docs: {
        description: {
            story: 'Diferentes opciones de radio de borde para la barra de progreso.'
        }
    }
};

export const DashboardExamples = () => {
    const { toggleTheme } = useThemeMode();
    const [uploadProgress, setUploadProgress] = useState(0);
    const [downloading, setDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);

    const startUpload = () => {
        setUploadProgress(0);
        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 300);
    };

    const startDownload = () => {
        setDownloading(true);
        setDownloadProgress(0);
        const interval = setInterval(() => {
            setDownloadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setDownloading(false);
                    return 0;
                }
                return prev + 2;
            });
        }, 50);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Ejemplos para Dashboard</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
                    {/* Métricas de rendimiento */}
                    <div style={{ 
                        padding: '20px', 
                        backgroundColor: 'var(--hadr-surface-bg)', 
                        border: '1px solid var(--hadr-border-color)',
                        borderRadius: '12px' 
                    }}>
                        <h4 style={{ marginBottom: '16px' }}>Métricas de Rendimiento</h4>
                        <div style={{ display: 'grid', gap: '16px' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>CPU</span>
                                    <span style={{ fontSize: '14px', color: 'var(--hadr-text-muted)' }}>45%</span>
                                </div>
                                <ProgressBar value={45} color="primary" size="sm" />
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>Memoria</span>
                                    <span style={{ fontSize: '14px', color: 'var(--hadr-text-muted)' }}>8.2GB / 16GB</span>
                                </div>
                                <ProgressBar value={51} color="warning" size="sm" variant="fraction" customLabel="8.2/16 GB" />
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>Disco</span>
                                    <span style={{ fontSize: '14px', color: 'var(--hadr-text-muted)' }}>85%</span>
                                </div>
                                <ProgressBar value={85} color="danger" size="sm" />
                            </div>
                        </div>
                    </div>

                    {/* Proceso de carga */}
                    <div style={{ 
                        padding: '20px', 
                        backgroundColor: 'var(--hadr-surface-bg)', 
                        border: '1px solid var(--hadr-border-color)',
                        borderRadius: '12px' 
                    }}>
                        <h4 style={{ marginBottom: '16px' }}>Carga de Archivos</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Button onClick={startUpload} color="primary" size="sm">
                                Simular Carga
                            </Button>
                            <ProgressBar 
                                value={uploadProgress} 
                                color={uploadProgress === 100 ? 'success' : 'info'} 
                                showLabel={true} 
                                labelPosition="right"
                                striped={uploadProgress < 100}
                                animated={uploadProgress < 100}
                            />
                        </div>
                    </div>

                    {/* Progreso de tareas */}
                    <div style={{ 
                        padding: '20px', 
                        backgroundColor: 'var(--hadr-surface-bg)', 
                        border: '1px solid var(--hadr-border-color)',
                        borderRadius: '12px' 
                    }}>
                        <h4 style={{ marginBottom: '16px' }}>Progreso del Proyecto</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <p style={{ marginBottom: '8px', fontWeight: '500' }}>Diseño UI/UX</p>
                                <ProgressBar value={95} color="success" showLabel={true} labelPosition="inside" size="lg" />
                            </div>
                            <div>
                                <p style={{ marginBottom: '8px', fontWeight: '500' }}>Desarrollo Frontend</p>
                                <ProgressBar value={73} color="info" showLabel={true} labelPosition="inside" size="lg" />
                            </div>
                            <div>
                                <p style={{ marginBottom: '8px', fontWeight: '500' }}>Backend API</p>
                                <ProgressBar value={45} color="warning" showLabel={true} labelPosition="inside" size="lg" />
                            </div>
                            <div>
                                <p style={{ marginBottom: '8px', fontWeight: '500' }}>Testing</p>
                                <ProgressBar value={20} color="secondary" showLabel={true} labelPosition="right" size="lg" />
                            </div>
                        </div>
                    </div>

                    {/* Mini indicadores */}
                    <div style={{ 
                        padding: '20px', 
                        backgroundColor: 'var(--hadr-surface-bg)', 
                        border: '1px solid var(--hadr-border-color)',
                        borderRadius: '12px' 
                    }}>
                        <h4 style={{ marginBottom: '16px' }}>Indicadores Compactos</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>87%</p>
                                <p style={{ fontSize: '12px', color: 'var(--hadr-text-muted)', marginBottom: '8px' }}>Satisfacción</p>
                                <ProgressBar value={87} color="emerald" size="xs" />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>124</p>
                                <p style={{ fontSize: '12px', color: 'var(--hadr-text-muted)', marginBottom: '8px' }}>Ventas (150)</p>
                                <ProgressBar value={124} max={150} color="purple" size="xs" />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>92%</p>
                                <p style={{ fontSize: '12px', color: 'var(--hadr-text-muted)', marginBottom: '8px' }}>Uptime</p>
                                <ProgressBar value={92} color="success" size="xs" />
                            </div>
                        </div>
                    </div>

                    {/* Descarga en tiempo real */}
                    <div style={{ 
                        padding: '20px', 
                        backgroundColor: 'var(--hadr-surface-bg)', 
                        border: '1px solid var(--hadr-border-color)',
                        borderRadius: '12px' 
                    }}>
                        <h4 style={{ marginBottom: '16px' }}>Proceso de Descarga</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Button 
                                onClick={startDownload} 
                                color="primary" 
                                size="sm"
                                disabled={downloading}
                            >
                                {downloading ? 'Descargando...' : 'Iniciar Descarga'}
                            </Button>
                            {downloading && (
                                <div>
                                    <div style={{ marginBottom: '8px', fontSize: '14px', color: 'var(--hadr-text-muted)' }}>
                                        archivo-importante.zip
                                    </div>
                                    <ProgressBar 
                                        value={downloadProgress} 
                                        color="info" 
                                        showLabel={true} 
                                        labelPosition="right"
                                        striped={true}
                                        animated={true}
                                        size="lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DashboardExamples.parameters = {
    docs: {
        description: {
            story: 'Ejemplos prácticos de uso del ProgressBar en diferentes contextos de dashboard.'
        }
    }
};

export const Interactive = (args) => {
    return (
        <div style={{ padding: '24px', maxWidth: '600px' }}>
            <ProgressBar {...args} />
        </div>
    );
};

Interactive.args = {
    value: 65,
    max: 100,
    color: 'primary',
    size: 'md',
    variant: 'percentage',
    showLabel: true,
    labelPosition: 'right',
    animated: false,
    striped: false,
    radius: 'sm'
};
