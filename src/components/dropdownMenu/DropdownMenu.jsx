import { useState, createContext, useContext, useEffect, useRef } from "react";
import '../../css/dropdownMenu.css';
import PropTypes from 'prop-types';

const DropdownContext = createContext();

// Global state to manage multiple dropdowns
let activeDropdown = null;
const dropdownInstances = new Set();

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
        <DropdownContext.Provider value={{ isOpen, setIsOpen, disabled }}>
            <div className="q-dropdown-menu" ref={dropdownRef}>{children}</div>
        </DropdownContext.Provider>
    );
}

function Trigger({ children, asChild = false }) {
    const { isOpen, setIsOpen, disabled } = useContext(DropdownContext);

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
            <div className="q-dropdown-trigger" {...triggerProps}>
                {children}
            </div>
        );
    }

    return (
        <button className="q-dropdown-trigger" {...triggerProps}>
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
    const { isOpen } = useContext(DropdownContext);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen && contentRef.current) {
            // Focus first item when opened
            const firstItem = contentRef.current.querySelector('[role="menuitem"]');
            if (firstItem) {
                firstItem.focus();
            }
        }
    }, [isOpen]);

    if (!isOpen) return null;

    let contentClass = "q-dropdown-content";
    if (className) contentClass += ` ${className}`;

    return (
        <div 
            ref={contentRef}
            className={contentClass}
            data-align={align}
            data-side={side}
            style={{
                '--side-offset': `${sideOffset}px`,
                '--align-offset': `${alignOffset}px`
            }}
            role="menu"
        >
            {children}
        </div>
    );
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





