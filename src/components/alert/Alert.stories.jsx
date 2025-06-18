import React from 'react';
import Alert from './Alert';

export default {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente de diálogo de confirmación modal que interrumpe al usuario y espera una respuesta.'
            }
        }
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['info', 'warning', 'danger', 'success'],
            description: 'Tipo de alert que determina el color y el icono'
        },
        isOpen: {
            control: { type: 'boolean' },
            description: 'Controla la visibilidad del alert'
        },
        showCancel: {
            control: { type: 'boolean' },
            description: 'Mostrar o ocultar el botón de cancelar'
        },
        closeOnEscape: {
            control: { type: 'boolean' },
            description: 'Permitir cerrar con tecla Escape'
        },
        closeOnOverlay: {
            control: { type: 'boolean' },
            description: 'Permitir cerrar haciendo click fuera del modal'
        }
    }
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    title: "Confirmar acción",
    message: "¿Estás seguro de que quieres continuar con esta acción?",
    variant: "info",
    onConfirm: () => console.log('Confirmado'),
    onCancel: () => console.log('Cancelado')
};

export const Warning = Template.bind({});
Warning.args = {
    isOpen: true,
    title: "Acción de advertencia",
    message: "Esta acción puede tener consecuencias. ¿Deseas continuar?",
    variant: "warning",
    onConfirm: () => console.log('Confirmado'),
    onCancel: () => console.log('Cancelado')
};

export const Danger = Template.bind({});
Danger.args = {
    isOpen: true,
    title: "Eliminar elemento",
    message: "Esta acción no se puede deshacer. ¿Estás seguro de que quieres eliminar este elemento?",
    variant: "danger",
    confirmText: "Eliminar",
    cancelText: "Conservar",
    onConfirm: () => console.log('Eliminado'),
    onCancel: () => console.log('Conservado')
};

export const Success = Template.bind({});
Success.args = {
    isOpen: true,
    title: "Operación completada",
    message: "La operación se ha completado exitosamente. ¿Deseas continuar?",
    variant: "success",
    confirmText: "Continuar",
    onConfirm: () => console.log('Continuando'),
    onCancel: () => console.log('Cancelado')
};

export const WithoutCancel = Template.bind({});
WithoutCancel.args = {
    isOpen: true,
    title: "Información importante",
    message: "Por favor, lee esta información importante antes de continuar.",
    variant: "info",
    showCancel: false,
    confirmText: "Entendido",
    onConfirm: () => console.log('Entendido')
};

export const CustomTexts = Template.bind({});
CustomTexts.args = {
    isOpen: true,
    title: "Guardar cambios",
    message: "Tienes cambios sin guardar. ¿Qué deseas hacer?",
    variant: "warning",
    confirmText: "Guardar",
    cancelText: "Descartar",
    onConfirm: () => console.log('Guardado'),
    onCancel: () => console.log('Descartado')
};

// Story interactiva para probar la funcionalidad
export const Interactive = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [variant, setVariant] = React.useState('info');

    const handleConfirm = () => {
        console.log('Confirmado');
        setIsOpen(false);
    };

    const handleCancel = () => {
        console.log('Cancelado');
        setIsOpen(false);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h3>Test del componente Alert</h3>
            
            <div style={{ marginBottom: '1rem' }}>
                <label>
                    Variant: 
                    <select 
                        value={variant} 
                        onChange={(e) => setVariant(e.target.value)}
                        style={{ marginLeft: '0.5rem' }}
                    >
                        <option value="info">Info</option>
                        <option value="warning">Warning</option>
                        <option value="danger">Danger</option>
                        <option value="success">Success</option>
                    </select>
                </label>
            </div>

            <button 
                onClick={() => setIsOpen(true)}
                style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    cursor: 'pointer'
                }}
            >
                Abrir Alert
            </button>

            <Alert
                isOpen={isOpen}
                title={`Alert de tipo ${variant}`}
                message={`Este es un ejemplo de alert con variant "${variant}". Puedes probarlo interactuando con los botones.`}
                variant={variant}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                closeOnEscape={true}
                closeOnOverlay={true}
            />
        </div>
    );
};
