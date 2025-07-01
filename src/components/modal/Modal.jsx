import { useState, createContext, useContext, useEffect } from "react";
import { PiX } from "react-icons/pi";
import '../../css/modal.css'
import Button from "../button/Button";

const ModalContext = createContext();

function Root({ children, open, onOpenChange, ...props }) {
    const [isOpen, setIsOpen] = useState(false);

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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                values.setIsOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            if (event.target.classList.contains("q-modal-overlay")) {
                values.setIsOpen(false);
            }
        };
        
        const handleClickClose = (event) => {
            if (event.target.getAttribute("data-close") !== null) {
                values.setIsOpen(false);
            }
        }


        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("click", handleClickClose);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("click", handleClickClose);
        };
    }, [values]);


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

function Content({ children, title }) {
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
                className={`q-modal-content ${isAnimating ? 'q-modal-content-open' : ''}`} 
                
            >
                <div className="q-modal-header">
                    {
                        title && <span>{title}</span>
                    }

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