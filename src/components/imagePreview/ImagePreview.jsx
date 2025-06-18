import React, { useState, useEffect } from "react";
import { FiEye, FiRotateCcw, FiRotateCw, FiZoomIn, FiZoomOut, FiX } from "react-icons/fi";
import '../../css/imagePreview.css';
import PropTypes from 'prop-types';

export default function ImagePreview({ 
    src, 
    alt = "", 
    preview = false, 
    width,
    height,
    className,
    hoverIcon = <FiEye />,
    objectFit = "cover",
    radius = "md",
    ...props 
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [transform, setTransform] = useState({
        rotation: 0,
        scale: 1,
        translateX: 0,
        translateY: 0
    });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    // Reset transform when modal opens
    useEffect(() => {
        if (isOpen) {
            setTransform({
                rotation: 0,
                scale: 1,
                translateX: 0,
                translateY: 0
            });
        }
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleRotateLeft = () => {
        setTransform(prev => ({ ...prev, rotation: prev.rotation - 90 }));
    };

    const handleRotateRight = () => {
        setTransform(prev => ({ ...prev, rotation: prev.rotation + 90 }));
    };

    const handleZoomIn = () => {
        setTransform(prev => ({ ...prev, scale: Math.min(prev.scale * 1.25, 5) }));
    };

    const handleZoomOut = () => {
        setTransform(prev => ({ ...prev, scale: Math.max(prev.scale / 1.25, 0.25) }));
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleMouseDown = (e) => {
        if (transform.scale > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - transform.translateX,
                y: e.clientY - transform.translateY
            });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && transform.scale > 1) {
            setTransform(prev => ({
                ...prev,
                translateX: e.clientX - dragStart.x,
                translateY: e.clientY - dragStart.y
            }));
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            handleZoomIn();
        } else {
            handleZoomOut();
        }
    };

    const getTransformStyle = () => {
        return {
            transform: `translate(${transform.translateX}px, ${transform.translateY}px) rotate(${transform.rotation}deg) scale(${transform.scale})`,
            cursor: transform.scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
        };
    };

    let imageClass = 'hadr-image-preview';
    if (className) {
        imageClass += ` ${className}`;
    }

    const imageStyle = {
        width: width,
        height: height,
        objectFit: objectFit
    };

    return (
        <>
            <div className={imageClass} data-radius={radius}>
                <img 
                    src={src} 
                    alt={alt}
                    style={imageStyle}
                    {...props}
                />
                {preview && (
                    <div 
                        className="hadr-image-preview__overlay"
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="hadr-image-preview__icon">
                            {hoverIcon}
                        </div>
                    </div>
                )}
            </div>

            {isOpen && (
                <div className="hadr-image-preview__modal">
                    <div 
                        className="hadr-image-preview__backdrop"
                        onClick={handleClose}
                    />
                    
                    <div className="hadr-image-preview__controls">
                        <button 
                            onClick={handleRotateLeft}
                            className="hadr-image-preview__control-btn"
                            title="Rotar izquierda"
                        >
                            <FiRotateCcw />
                        </button>
                        <button 
                            onClick={handleRotateRight}
                            className="hadr-image-preview__control-btn"
                            title="Rotar derecha"
                        >
                            <FiRotateCw />
                        </button>
                        <button 
                            onClick={handleZoomIn}
                            className="hadr-image-preview__control-btn"
                            title="Acercar"
                        >
                            <FiZoomIn />
                        </button>
                        <button 
                            onClick={handleZoomOut}
                            className="hadr-image-preview__control-btn"
                            title="Alejar"
                        >
                            <FiZoomOut />
                        </button>
                        <button 
                            onClick={handleClose}
                            className="hadr-image-preview__control-btn hadr-image-preview__control-btn--close"
                            title="Cerrar"
                        >
                            <FiX />
                        </button>
                    </div>

                    <div 
                        className="hadr-image-preview__content"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onWheel={handleWheel}
                    >
                        <img 
                            src={src} 
                            alt={alt}
                            style={getTransformStyle()}
                            draggable={false}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

ImagePreview.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    preview: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    hoverIcon: PropTypes.node,
    objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full'])
};
