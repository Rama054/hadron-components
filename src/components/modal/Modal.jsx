import { useState, createContext, useContext, useEffect, useRef, useCallback } from "react";
import { PiX } from "react-icons/pi";
import '../../css/modal.css'
import Button from "../button/Button";

const ModalContext = createContext();

function Root({ children, open, onOpenChange, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const mouseDownTargetRef = useRef(null);

    const values = {
        isOpen: open !== undefined ? open : isOpen,
        setIsOpen: (value) => {
            if (onOpenChange) {
                onOpenChange(value);
            } else {
                setIsOpen(value);
            }
        }
    }

    const handleKeyDown = useCallback((event) => {
        if (event.key === "Escape") {
            values.setIsOpen(false);
        }
    }, [values]);

    const handleMouseDown = useCallback((event) => {
        // Guardar dónde empezó el click
        mouseDownTargetRef.current = event.target;
    }, []);

    const handleClickOutside = useCallback((event) => {
        // Solo cerrar si el click empezó y terminó en el overlay
        const clickStartedOnOverlay = mouseDownTargetRef.current && mouseDownTargetRef.current.classList.contains("q-modal-overlay");
        const clickEndedOnOverlay = event.target.classList.contains("q-modal-overlay");
        
        if (clickStartedOnOverlay && clickEndedOnOverlay) {
            values.setIsOpen(false);
        }
        
        // Limpiar la referencia
        mouseDownTargetRef.current = null;
    }, [values]);
        
    const handleClickClose = useCallback((event) => {
        if (event.target.getAttribute("data-close") !== null) {
            values.setIsOpen(false);
        }
    }, [values]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("click", handleClickClose);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("click", handleClickClose);
        };
    }, [handleKeyDown, handleMouseDown, handleClickOutside, handleClickClose]);

    return (
        <ModalContext.Provider value={values}>
            <div className={`q-modal-root ${props.className ? props.className : ''}`} {...props}>{children}</div>
        </ModalContext.Provider>
    )
}

function Trigger({ children }) {
    const { isOpen, setIsOpen } = useContext(ModalContext);

    return (
        <div className="q-modal-trigger" onClick={() => setIsOpen(!isOpen)}>
            {children}
        </div>
    )
}

function Content({ children, title, subtitle, width, maxWidth, ...props }) {
    const { isOpen, setIsOpen } = useContext(ModalContext);
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

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

    if (!shouldRender) return null;

    return (
        <div className={`q-modal-overlay ${isAnimating ? 'q-modal-overlay-open' : ''}`}>
            <div 
                className={`q-modal-content ${props.className ? props.className : ''} ${isAnimating ? 'q-modal-content-open' : ''}`} 
                style={ props.style ? props.style : { width: width || '100%', maxWidth: maxWidth || '450px' } }
            >
                <div className="q-modal-header">
                    <div >
                    { title && <p className="q-modal-title">{title}</p> }
                    { subtitle && <span className="q-modal-subtitle">{subtitle}</span> }
                    </div>

                    <Button className="q-modal-close" radius="full" variant="ghost" color="secondary" icon onClick={() => setIsOpen(false)}>
                        <PiX size={20} />
                    </Button>
                </div>
                <div className="q-modal-content-body">
                    {children}
                </div>

            </div>
        </div>
    )
}

function Footer({ children }) {
    return (
        <div className="q-modal-footer">
            {children}
        </div>
    )
}

const Modal = {
    Root,
    Trigger,
    Content,
    Footer
}

export default Modal;