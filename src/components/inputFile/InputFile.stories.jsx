import InputFile from './InputFile';
import { PiUploadSimple, PiImageSquare, PiFilePdf } from 'react-icons/pi';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default {
    title: 'Components/InputFile',
    component: InputFile,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente para subir archivos que funciona tanto de forma nativa como con react-hook-form'
            }
        }
    },
    argTypes: {
        label: { control: 'text' },
        name: { control: 'text' },
        multiple: { control: 'boolean' },
        helpText: { control: 'text' },
        accept: { control: 'text' },
        errorText: { control: 'text' },
        disabled: { control: 'boolean' },
        maxFiles: { control: 'number' },
        maxSize: { control: 'number' },
        dropzoneText: { control: 'text' },
        listHeight: { control: 'text' },
    }
};

// Historia básica
export const Default = {
    args: {
        label: 'Subir archivo',
        name: 'documento',
        helpText: 'Selecciona un archivo desde tu dispositivo'
    }
};

// Múltiples archivos
export const Multiple = {
    args: {
        label: 'Subir múltiples archivos',
        name: 'documentos',
        multiple: true,
        helpText: 'Puedes seleccionar varios archivos a la vez'
    }
};

// Con limitaciones
export const WithLimits = {
    args: {
        label: 'Documentos PDF',
        name: 'pdfs',
        accept: '.pdf',
        maxFiles: 3,
        maxSize: 5 * 1024 * 1024, // 5MB
        multiple: true,
        helpText: 'Solo archivos PDF, máximo 3 archivos de 5MB cada uno'
    }
};

// Solo imágenes
export const ImagesOnly = {
    args: {
        label: 'Subir imágenes',
        name: 'imagenes',
        accept: 'image/*',
        maxFiles: 5,
        maxSize: 2 * 1024 * 1024, // 2MB
        multiple: true,
        icon: PiImageSquare,
        dropzoneText: 'Arrastra tus imágenes aquí',
        helpText: 'Solo imágenes, máximo 5 archivos de 2MB cada uno'
    }
};

// Icono personalizado
export const CustomIcon = {
    args: {
        label: 'Documentos PDF',
        name: 'pdf',
        accept: '.pdf',
        icon: PiFilePdf,
        dropzoneText: 'Sube tu documento PDF',
        helpText: 'Solo se aceptan archivos PDF'
    }
};

// Deshabilitado
export const Disabled = {
    args: {
        label: 'Archivo (deshabilitado)',
        name: 'disabled',
        disabled: true,
        helpText: 'Este campo está deshabilitado'
    }
};

// Con error
export const WithError = {
    args: {
        label: 'Documento requerido',
        name: 'documento-error',
        errorText: 'Este campo es obligatorio',
        helpText: 'Selecciona un documento válido'
    }
};

// Uso nativo (sin react-hook-form)
export const NativeUsage = () => {
    const [files, setFiles] = useState([]);

    const handleFilesChange = (selectedFiles) => {
        setFiles(selectedFiles || []);
        console.log('Archivos seleccionados:', selectedFiles);
    };

    return (
        <div style={{ width: '1000px' }}>
            <InputFile
                label="Uso nativo"
                name="native-files"
                multiple
                onChange={handleFilesChange}
                helpText="Este ejemplo usa onChange directamente"
            />
            <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
                Archivos seleccionados: {files.length}
            </div>
        </div>
    );
};

// Con react-hook-form (nuevo enfoque con form object)
export const ReactHookFormDemo = () => {
    const form = useForm();
    const { handleSubmit, formState: { errors } } = form;
    
    const watchedFiles = form.watch('documentos');

    const onSubmit = (data) => {
        console.log('Datos del formulario:', data);
        alert(`Archivos enviados: ${data.documentos?.length || 0}`);
    };

    return (
        <div style={{ width: '400px' }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <InputFile
                    label="Documentos (React Hook Form)"
                    name="documentos"
                    multiple
                    maxFiles={3}
                    form={form}
                    errorText={errors.documentos?.message}
                    helpText="Máximo 3 archivos - Usa form object"
                />
                
                <button 
                    type="submit" 
                    style={{ 
                        padding: '0.5rem 1rem', 
                        background: '#007bff', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Enviar formulario
                </button>
                
                <div style={{ fontSize: '0.875rem', color: '#666' }}>
                    Archivos en el formulario: {watchedFiles?.length || 0}
                </div>
            </form>
        </div>
    );
};

// Comparación de ambos métodos
export const ComparisonDemo = () => {
    const [nativeFiles, setNativeFiles] = useState([]);
    const form = useForm();
    
    const hookFormFiles = form.watch('comparison');

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '800px' }}>
            <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Uso Nativo</h3>
                <InputFile
                    label="Archivos (nativo)"
                    name="native"
                    multiple
                    onChange={setNativeFiles}
                    helpText="Usa onChange directamente"
                />
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#666' }}>
                    Archivos: {nativeFiles?.length || 0}
                </div>
            </div>
            
            <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>React Hook Form</h3>
                <InputFile
                    label="Archivos (react-hook-form)"
                    name="comparison"
                    multiple
                    form={form}
                    helpText="Usa form object"
                />
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#666' }}>
                    Archivos: {hookFormFiles?.length || 0}
                </div>
            </div>
        </div>
    );
};

// Con altura personalizada de lista
export const CustomListHeight = () => {
    const [files, setFiles] = useState([]);

    return (
        <div style={{ width: '400px' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Lista con altura personalizada</h3>
            <InputFile
                label="Muchos archivos"
                name="custom-height"
                multiple
                maxFiles={20}
                listHeight="120px"
                onChange={setFiles}
                helpText="La lista tiene scroll cuando hay muchos archivos (max 120px)"
            />
            <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#666' }}>
                Archivos seleccionados: {files.length}
            </div>
            
            <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Otras alturas:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <InputFile
                        label="Lista pequeña (80px)"
                        name="small-list"
                        multiple
                        listHeight="80px"
                        helpText="Lista muy compacta"
                    />
                    <InputFile
                        label="Lista grande (300px)"
                        name="large-list"
                        multiple
                        listHeight="300px"
                        helpText="Lista más espaciosa"
                    />
                    <InputFile
                        label="Lista en vh (15vh)"
                        name="vh-list"
                        multiple
                        listHeight="15vh"
                        helpText="Usando viewport height"
                    />
                </div>
            </div>
        </div>
    );
};
