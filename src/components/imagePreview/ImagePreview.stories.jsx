import React from 'react';
import { FiImage, FiCamera } from 'react-icons/fi';
import { PiEye } from 'react-icons/pi';
import ImagePreview from './ImagePreview';

export default {
    title: 'Components/ImagePreview',
    component: ImagePreview,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        src: {
            control: 'text',
            description: 'URL de la imagen'
        },
        alt: {
            control: 'text',
            description: 'Texto alternativo para la imagen'
        },
        preview: {
            control: 'boolean',
            description: 'Habilita la funcionalidad de vista previa'
        },
        width: {
            control: 'text',
            description: 'Ancho de la imagen'
        },
        height: {
            control: 'text',
            description: 'Alto de la imagen'
        },
        objectFit: {
            control: 'select',
            options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
            description: 'Cómo se ajusta la imagen en su contenedor'
        },
        radius: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'full'],
            description: 'Radio de borde de la imagen'
        },
    },
};

const sampleImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

export const Default = {
    args: {
        src: sampleImage,
        alt: "Imagen de ejemplo",
        preview: false,
        width: "200px",
        height: "150px",
    },
};

export const WithPreview = {
    args: {
        src: sampleImage,
        alt: "Imagen con vista previa",
        preview: true,
        width: "200px",
        height: "150px",
    },
};

export const CustomHoverIcon = {
    args: {
        src: sampleImage,
        alt: "Imagen con icono personalizado",
        preview: true,
        width: "200px",
        height: "150px",
        hoverIcon: <FiCamera />,
    },
};

export const DifferentSizes = () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div>
            <h4>Pequeña</h4>
            <ImagePreview
                src={sampleImage}
                alt="Imagen pequeña"
                width="100px"
                height="100px"
                preview={true}
            />
        </div>
        <div>
            <h4>Mediana</h4>
            <ImagePreview
                src={sampleImage}
                alt="Imagen mediana"
                width="200px"
                height="150px"
                preview={true}
            />
        </div>
        <div>
            <h4>Grande</h4>
            <ImagePreview
                src={sampleImage}
                alt="Imagen grande"
                width="300px"
                height="200px"
                preview={true}
            />
        </div>
    </div>
);

export const DifferentRadius = () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
            <h4>Sin radio</h4>
            <ImagePreview
                src={sampleImage}
                alt="Sin radio"
                width="150px"
                height="150px"
                radius="none"
                preview={true}
            />
        </div>
        <div>
            <h4>Radio pequeño</h4>
            <ImagePreview
                src={sampleImage}
                alt="Radio pequeño"
                width="150px"
                height="150px"
                radius="sm"
                preview={true}
            />
        </div>
        <div>
            <h4>Radio mediano</h4>
            <ImagePreview
                src={sampleImage}
                alt="Radio mediano"
                width="150px"
                height="150px"
                radius="md"
                preview={true}
            />
        </div>
        <div>
            <h4>Radio grande</h4>
            <ImagePreview
                src={sampleImage}
                alt="Radio grande"
                width="150px"
                height="150px"
                radius="lg"
                preview={true}
            />
        </div>
        <div>
            <h4>Radio completo</h4>
            <ImagePreview
                src={sampleImage}
                alt="Radio completo"
                width="150px"
                height="150px"
                radius="full"
                preview={true}
            />
        </div>
    </div>
);

export const ObjectFitVariations = () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
            <h4>Cover</h4>
            <ImagePreview
                src={sampleImage}
                alt="Object fit cover"
                width="150px"
                height="100px"
                objectFit="cover"
                preview={true}
            />
        </div>
        <div>
            <h4>Contain</h4>
            <ImagePreview
                src={sampleImage}
                alt="Object fit contain"
                width="150px"
                height="100px"
                objectFit="contain"
                preview={true}
            />
        </div>
        <div>
            <h4>Fill</h4>
            <ImagePreview
                src={sampleImage}
                alt="Object fit fill"
                width="150px"
                height="100px"
                objectFit="fill"
                preview={true}
            />
        </div>
    </div>
);

export const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
            padding: '16px'
        }}>
            {images.map((src, index) => (
                <ImagePreview
                    key={index}
                    src={src}
                    alt={`Imagen de galería ${index + 1}`}
                    width="100%"
                    height="150px"
                    preview={true}
                    radius="md"
                />
            ))}
        </div>
    );
};
