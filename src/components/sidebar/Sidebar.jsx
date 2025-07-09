import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import { PiX } from 'react-icons/pi';
import '../../css/sidebar.css';

export default function Sidebar({ 
    children, 
    color, 
    open = false, 
    position = 'left', 
    size = "320px", 
    onClose, 
    className,
    style,
    showCloseButton = true,
    ...props 
}) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const keyPressHandler = (event) => {
            if (event.key === 'Escape' && open) {
                onClose?.();
            }
        };

        document.addEventListener('keydown', keyPressHandler);

        if (open) {
            document.body.style.overflow = "hidden";
            
            // Focus management
            setTimeout(() => {
                const focusableElements = sidebarRef.current?.querySelectorAll(
                    'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                if (focusableElements?.length) {
                    focusableElements[0].focus();
                }
            }, 100);
        } else {
            document.body.style.overflow = "";
        }
        
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener('keydown', keyPressHandler);
        };
    }, [open, onClose]);

    // Focus trap
    useEffect(() => {
        const trapFocus = (event) => {
            if (!open || !sidebarRef.current) return;

            const focusableElements = sidebarRef.current.querySelectorAll(
                'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            if (!focusableElements.length) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.key === 'Tab') {
                if (event.shiftKey) {
                    // Shift + Tab (moverse hacia atrás)
                    if (document.activeElement === firstElement) {
                        event.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    // Tab normal (moverse hacia adelante)
                    if (document.activeElement === lastElement) {
                        event.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        };

        document.addEventListener('keydown', trapFocus);
        return () => {
            document.removeEventListener('keydown', trapFocus);
        };
    }, [open]);

    let sidebarClass = 'q-sidebar-root';
    let sidebarStyle = { 
        "--sidebar-size": size, 
        "--background-sidebar": color 
    };

    if (style) {
        sidebarStyle = { ...sidebarStyle, ...style };
    }

    if (className) {
        sidebarClass += ` ${className}`;
    }

    return (
        <aside 
            className={sidebarClass} 
            style={sidebarStyle} 
            data-open={open} 
            data-position={position}
            {...props}
        >
            <div 
                className="q-sidebar-overlay" 
                onClick={onClose}
                aria-hidden="true"
            />
            <div 
                className='q-sidebar' 
                ref={sidebarRef}
                role="dialog"
                aria-modal="true"
                aria-label="Sidebar"
            >
                {showCloseButton && (
                    <Button 
                        variant='ghost' 
                        radius='full' 
                        size='sm'
                        onClick={onClose} 
                        className='q-sidebar-close'
                        aria-label="Cerrar sidebar"
                        icon
                    >
                        <PiX size={20} />
                    </Button>
                )}
                <div className="q-sidebar-content">
                    {children}
                </div>
            </div>
        </aside>
    );
}

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    open: PropTypes.bool,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    size: PropTypes.string,
    onClose: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    showCloseButton: PropTypes.bool
};
