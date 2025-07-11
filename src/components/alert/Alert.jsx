import React, { useEffect, useState, useRef } from "react";
import '../../css/alert.css';
import Button from "../button/Button";
import { PiInfo, PiWarning, PiX, PiCheck } from "react-icons/pi";
import PropTypes from 'prop-types';
const AlertIcons = {
    info: <PiInfo size={20} />,
    warning: <PiWarning size={20} />,
    danger: <PiX size={20} />,
    success: <PiCheck size={20} />
};

export default function Alert({
    isOpen = false,
    onConfirm,
    onCancel,
    title = "Confirmar acción",
    message = "¿Estás seguro de que quieres continuar?",
    variant = "info",
    confirmText = "Confirmar",
    cancelText = "Cancelar",
    showCancel = true,
    closeOnEscape = true,
    closeOnOverlay = false,
    className,
    ...props
}) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const mouseDownTargetRef = useRef(null);

    // Manejar animaciones de entrada y salida
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            // Small delay to trigger animation
            const timer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
            // Wait for animation to complete before unmounting
            const timer = setTimeout(() => setShouldRender(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Manejar tecla Escape
    useEffect(() => {
        if (!shouldRender || !closeOnEscape) return;

        const handleEscape = (e) => {
            if (e.key === 'Escape' && onCancel) {
                onCancel();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [shouldRender, closeOnEscape, onCancel]);

    // Prevenir scroll del body cuando el modal está abierto
    useEffect(() => {
        if (shouldRender) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [shouldRender]);

    // Manejar click en overlay
    const handleMouseDown = (e) => {
        // Guardar dónde empezó el click
        mouseDownTargetRef.current = e.target;
    };

    const handleOverlayClick = (e) => {
        // Solo cerrar si:
        // 1. El click empezó en el overlay (mousedown)
        // 2. El click terminó en el overlay (mouseup/click)
        // 3. Es el mismo elemento (overlay)
        const clickStartedOnOverlay = mouseDownTargetRef.current === e.currentTarget;
        const clickEndedOnOverlay = e.target === e.currentTarget;

        if (clickStartedOnOverlay && clickEndedOnOverlay && closeOnOverlay && onCancel) {
            onCancel();
        }

        // Limpiar la referencia
        mouseDownTargetRef.current = null;
    };

    if (!shouldRender) return null;



    return (
        <div
            className={`q-alert-overlay ${isAnimating ? 'q-alert-overlay-open' : ''}`}
            onMouseDown={handleMouseDown}
            onClick={handleOverlayClick}
            {...props}
        >
            <div
                className={`q-alert ${isAnimating ? 'q-alert-open' : ''} ${className || ''}`.trim()}
                data-variant={variant}
                role="alertdialog"
                aria-labelledby="alert-title"
                aria-describedby="alert-message"
            >
                <div className="q-alert-header">
                    <div className="q-alert-icon">
                        {AlertIcons[variant]}
                    </div>
                    <h3 id="alert-title" className="q-alert-title">
                        {title}
                    </h3>
                </div>

                <div className="q-alert-body">
                    <p id="alert-message" className="q-alert-message">
                        {message}
                    </p>
                </div>

                <div className="q-alert-footer">
                    {showCancel && (
                        <Button
                            variant="ghost"
                            color="secondary"
                            onClick={onCancel}
                        >
                            {cancelText}
                        </Button>
                    )}
                    <Button
                        variant="solid"
                        color={variant === 'danger' ? 'danger' : 'primary'}
                        onClick={onConfirm}
                        autoFocus
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </div>
    );
}

Alert.propTypes = {
    isOpen: PropTypes.bool,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    title: PropTypes.string,
    message: PropTypes.string,
    variant: PropTypes.oneOf(['info', 'warning', 'danger', 'success']),
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    showCancel: PropTypes.bool,
    closeOnEscape: PropTypes.bool,
    closeOnOverlay: PropTypes.bool,
    className: PropTypes.string
};
