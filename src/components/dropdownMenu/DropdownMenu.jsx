import { useState, createContext, useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import '../../css/dropdownMenu.css';
import PropTypes from 'prop-types';

const DropdownContext = createContext();

// Global state to manage multiple dropdowns
let activeDropdown = null;
const dropdownInstances = new Set();

// Function to calculate dropdown position
const calculatePosition = (triggerElement, side, align, sideOffset, alignOffset, contentElement = null) => {
    if (!triggerElement) return { top: 0, left: 0 };
    
    const triggerRect = triggerElement.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    // Get content dimensions if available
    const contentRect = contentElement ? contentElement.getBoundingClientRect() : { width: 220, height: 200 };
    
    let top = 0;
    let left = 0;
    
    // Calculate position based on side
    switch (side) {
        case 'bottom':
            top = triggerRect.bottom + scrollY + sideOffset;
            break;
        case 'top':
            top = triggerRect.top + scrollY - contentRect.height - sideOffset;
            break;
        case 'left':
            left = triggerRect.left + scrollX - contentRect.width - sideOffset;
            top = triggerRect.top + scrollY;
            break;
        case 'right':
            left = triggerRect.right + scrollX + sideOffset;
            top = triggerRect.top + scrollY;
            break;
        default:
            top = triggerRect.bottom + scrollY + sideOffset;
    }
    
    // Calculate alignment - do this in JS instead of CSS transforms
    if (side === 'bottom' || side === 'top') {
        switch (align) {
            case 'start':
                left = triggerRect.left + scrollX + alignOffset;
                break;
            case 'center':
                left = triggerRect.left + scrollX + (triggerRect.width / 2) - (contentRect.width / 2) + alignOffset;
                break;
            case 'end':
                left = triggerRect.right + scrollX - contentRect.width + alignOffset;
                break;
            default:
                left = triggerRect.left + scrollX + alignOffset;
        }
    } else if (side === 'left' || side === 'right') {
        switch (align) {
            case 'start':
                top = triggerRect.top + scrollY + alignOffset;
                break;
            case 'center':
                top = triggerRect.top + scrollY + (triggerRect.height / 2) - (contentRect.height / 2) + alignOffset;
                break;
            case 'end':
                top = triggerRect.bottom + scrollY - contentRect.height + alignOffset;
                break;
            default:
                top = triggerRect.top + scrollY + alignOffset;
        }
    }
    
    return { top, left };
};

const closeOtherDropdowns = (currentInstance) => {
    dropdownInstances.forEach(instance => {
        if (instance !== currentInstance) {
            instance.setIsOpen(false);
        }
    });
};

function Root({ children, disabled = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);
    const instanceRef = useRef({ setIsOpen });

    // Update instance reference
    instanceRef.current.setIsOpen = setIsOpen;

    // Register/unregister this dropdown instance
    useEffect(() => {
        dropdownInstances.add(instanceRef.current);
        return () => {
            dropdownInstances.delete(instanceRef.current);
            if (activeDropdown === instanceRef.current) {
                activeDropdown = null;
            }
        };
    }, []);

    // Handle opening and closing
    useEffect(() => {
        if (isOpen) {
            // Close other dropdowns when this one opens
            closeOtherDropdowns(instanceRef.current);
            activeDropdown = instanceRef.current;
        } else {
            if (activeDropdown === instanceRef.current) {
                activeDropdown = null;
            }
        }
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <DropdownContext.Provider value={{ isOpen, setIsOpen, disabled, triggerRef }}>
            <div className="q-dropdown-menu" ref={dropdownRef}>{children}</div>
        </DropdownContext.Provider>
    );
}

function Trigger({ children, asChild = false }) {
    const { isOpen, setIsOpen, disabled, triggerRef } = useContext(DropdownContext);

    useEffect(() => {
        function handleClick(event) {
            if (!event.target.closest(".q-dropdown-menu")) {
                setIsOpen(false);
            }
        }
        
        if (isOpen) {
            document.addEventListener("click", handleClick);
        }
        
        return () => document.removeEventListener("click", handleClick);
    }, [isOpen, setIsOpen]);

    const handleClick = (e) => {
        e.stopPropagation();
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const triggerProps = {
        onClick: handleClick,
        'aria-expanded': isOpen,
        'aria-haspopup': 'menu',
        disabled
    };

    if (asChild) {
        return (
            <div className="q-dropdown-trigger" ref={triggerRef} {...triggerProps}>
                {children}
            </div>
        );
    }

    return (
        <button className="q-dropdown-trigger" ref={triggerRef} {...triggerProps}>
            {children}
        </button>
    );
}

function Content({ 
    children, 
    align = "start", 
    side = "bottom", 
    sideOffset = 8,
    alignOffset = 0,
    className 
}) {
    const { isOpen, triggerRef } = useContext(DropdownContext);
    const contentRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    // Calculate and update position with slight delay to ensure contentRef is ready
    useEffect(() => {
        if (isOpen && triggerRef.current) {
            // Small delay to ensure DOM is ready
            const timer = setTimeout(() => {
                if (contentRef.current) {
                    const newPosition = calculatePosition(
                        triggerRef.current,
                        side,
                        align,
                        sideOffset,
                        alignOffset,
                        contentRef.current
                    );
                    setPosition(newPosition);
                }
            }, 0);
            
            return () => clearTimeout(timer);
        }
    }, [isOpen, side, align, sideOffset, alignOffset]);

    // Handle scroll and resize events to update position
    useEffect(() => {
        if (!isOpen) return;
        
        const updatePosition = () => {
            if (triggerRef.current && contentRef.current) {
                const newPosition = calculatePosition(
                    triggerRef.current,
                    side,
                    align,
                    sideOffset,
                    alignOffset,
                    contentRef.current
                );
                setPosition(newPosition);
            }
        };
        
        window.addEventListener('scroll', updatePosition, true);
        window.addEventListener('resize', updatePosition);
        
        return () => {
            window.removeEventListener('scroll', updatePosition, true);
            window.removeEventListener('resize', updatePosition);
        };
    }, [isOpen, side, align, sideOffset, alignOffset]);

    /* useEffect(() => {
        if (isOpen && contentRef.current) {
            // Focus first item when opened
            const firstItem = contentRef.current.querySelector('[role="menuitem"]');
            if (firstItem) {
                firstItem.focus();
            }
        }
    }, [isOpen]); */

    if (!isOpen) return null;

    let contentClass = "q-dropdown-content q-dropdown-content-portal";
    if (className) contentClass += ` ${className}`;

    const contentStyle = {
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 9999
    };

    const content = (
        <div 
            ref={contentRef}
            className={contentClass}
            data-align={align}
            data-side={side}
            style={contentStyle}
            role="menu"
            tabIndex={-1}
        >
            {children}
        </div>
    );

    // Render as portal to body
    return createPortal(content, document.body);
}

function Item({ 
    children, 
    icon, 
    onClick, 
    disabled = false, 
    destructive = false,
    className,
    ...props 
}) {
    const { setIsOpen } = useContext(DropdownContext);

    const handleClick = (e) => {
        e.preventDefault();
        if (!disabled) {
            setIsOpen(false);
            if (onClick) onClick(e);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
        }
    };

    let itemClass = "q-dropdown-item";
    if (className) itemClass += ` ${className}`;
    if (disabled) itemClass += " q-dropdown-item-disabled";
    if (destructive) itemClass += " q-dropdown-item-destructive";

    return (
        <div 
            className={itemClass}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="menuitem"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
            {...props}
        >
            {icon && <span className="q-dropdown-item-icon">{icon}</span>}
            <span className="q-dropdown-item-text">{children}</span>
        </div>
    );
}

function Label({ children, className, ...props }) {
    let labelClass = "q-dropdown-label";
    if (className) labelClass += ` ${className}`;
    
    return (
        <div className={labelClass} {...props}>
            {children}
        </div>
    );
}

function Separator({ className }) {
    let separatorClass = "q-dropdown-separator";
    if (className) separatorClass += ` ${className}`;
    
    return <div className={separatorClass} role="separator" />;
}

// PropTypes
Root.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool
};

Trigger.propTypes = {
    children: PropTypes.node.isRequired,
    asChild: PropTypes.bool
};

Content.propTypes = {
    children: PropTypes.node.isRequired,
    align: PropTypes.oneOf(['start', 'center', 'end']),
    side: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    sideOffset: PropTypes.number,
    alignOffset: PropTypes.number,
    className: PropTypes.string
};

Item.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    destructive: PropTypes.bool,
    className: PropTypes.string
};

Label.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Separator.propTypes = {
    className: PropTypes.string
};

const DropdownMenu = {
    Root,
    Trigger,
    Content,
    Item,
    Label,
    Separator,
};

export default DropdownMenu;





