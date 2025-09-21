import React, { useState, useEffect } from "react";
import { FiEye, FiRotateCcw, FiRotateCw, FiZoomIn, FiZoomOut, FiX, FiHome } from "react-icons/fi";
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
    draggable = true, // nuevo prop para controlar si se puede arrastrar
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
    const [lastTap, setLastTap] = useState(0); // para detectar doble tap en mobile

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
        setTransform(prev => {
            const newScale = Math.min(prev.scale * 1.25, 5);
            return { ...prev, scale: newScale };
        });
    };

    const handleZoomOut = () => {
        setTransform(prev => {
            const newScale = Math.max(prev.scale / 1.25, 0.25);
            const scaleFactor = newScale / prev.scale;
            
            // Ajustar la traducción proporcionalmente al cambio de escala
            // Esto hace que la imagen se contraiga hacia el centro
            const newTranslateX = prev.translateX * scaleFactor;
            const newTranslateY = prev.translateY * scaleFactor;
            
            // Si la nueva escala es <= 1, resetear la traducción
            if (newScale <= 1) {
                return {
                    ...prev,
                    scale: newScale,
                    translateX: 0,
                    translateY: 0
                };
            }
            
            // Aplicar límites a la nueva posición
            const constrained = constrainTranslation(newTranslateX, newTranslateY, newScale);
            
            return {
                ...prev,
                scale: newScale,
                translateX: constrained.x,
                translateY: constrained.y
            };
        });
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // Reset transform to original position
    const resetTransform = () => {
        setTransform({
            rotation: 0,
            scale: 1,
            translateX: 0,
            translateY: 0
        });
    };

    // Calculate drag limits to keep image within bounds
    const getDragLimits = (scale = transform.scale) => {
        const container = document.querySelector('.hadr-image-preview__content');
        if (!container) return { maxX: 0, maxY: 0, minX: 0, minY: 0 };

        const containerRect = container.getBoundingClientRect();
        const scaledWidth = containerRect.width * scale;
        const scaledHeight = containerRect.height * scale;

        const maxX = Math.max(0, (scaledWidth - containerRect.width) / 2);
        const maxY = Math.max(0, (scaledHeight - containerRect.height) / 2);

        return {
            maxX,
            maxY,
            minX: -maxX,
            minY: -maxY
        };
    };

    // Constrain translation within bounds
    const constrainTranslation = (x, y, scale = transform.scale) => {
        if (scale <= 1) return { x: 0, y: 0 };
        
        const limits = getDragLimits(scale);
        return {
            x: Math.max(limits.minX, Math.min(limits.maxX, x)),
            y: Math.max(limits.minY, Math.min(limits.maxY, y))
        };
    };

    const handleMouseDown = (e) => {
        if (transform.scale > 1 && draggable) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - transform.translateX,
                y: e.clientY - transform.translateY
            });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && transform.scale > 1 && draggable) {
            const newX = e.clientX - dragStart.x;
            const newY = e.clientY - dragStart.y;
            const constrained = constrainTranslation(newX, newY);
            
            setTransform(prev => ({
                ...prev,
                translateX: constrained.x,
                translateY: constrained.y
            }));
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        
        setTransform(prev => {
            const zoomFactor = 1.25;
            const newScale = e.deltaY < 0 
                ? Math.min(prev.scale * zoomFactor, 5)
                : Math.max(prev.scale / zoomFactor, 0.25);
            
            const scaleFactor = newScale / prev.scale;
            
            // Ajustar la traducción proporcionalmente al cambio de escala
            const newTranslateX = prev.translateX * scaleFactor;
            const newTranslateY = prev.translateY * scaleFactor;
            
            // Si la nueva escala es <= 1, resetear la traducción
            if (newScale <= 1) {
                return {
                    ...prev,
                    scale: newScale,
                    translateX: 0,
                    translateY: 0
                };
            }
            
            // Aplicar límites a la nueva posición
            const constrained = constrainTranslation(newTranslateX, newTranslateY, newScale);
            
            return {
                ...prev,
                scale: newScale,
                translateX: constrained.x,
                translateY: constrained.y
            };
        });
    };

    // Handle double click to reset
    const handleDoubleClick = () => {
        resetTransform();
    };

    // Handle touch events for mobile double tap
    const handleTouchStart = (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 500 && tapLength > 0) {
            // Double tap detected
            resetTransform();
        }
        
        setLastTap(currentTime);
        
        // Handle drag start for touch
        if (e.touches.length === 1 && transform.scale > 1 && draggable) {
            const touch = e.touches[0];
            setIsDragging(true);
            setDragStart({
                x: touch.clientX - transform.translateX,
                y: touch.clientY - transform.translateY
            });
        }
    };

    const handleTouchMove = (e) => {
        if (isDragging && e.touches.length === 1 && transform.scale > 1 && draggable) {
            e.preventDefault();
            const touch = e.touches[0];
            const newX = touch.clientX - dragStart.x;
            const newY = touch.clientY - dragStart.y;
            const constrained = constrainTranslation(newX, newY);
            
            setTransform(prev => ({
                ...prev,
                translateX: constrained.x,
                translateY: constrained.y
            }));
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const getTransformStyle = () => {
        let cursor = 'default';
        if (transform.scale > 1 && draggable) {
            cursor = isDragging ? 'grabbing' : 'grab';
        }
        
        return {
            transform: `translate(${transform.translateX}px, ${transform.translateY}px) rotate(${transform.rotation}deg) scale(${transform.scale})`,
            cursor
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
                            onClick={resetTransform}
                            className="hadr-image-preview__control-btn"
                            title="Restaurar posición original"
                        >
                            <FiHome />
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
                        onDoubleClick={handleDoubleClick}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
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
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    draggable: PropTypes.bool // permite deshabilitar el arrastre de la imagen
};
