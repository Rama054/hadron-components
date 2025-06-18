import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../css/tabs.css';

const TabsContext = createContext();

function Root({ 
    children, 
    color = 'primary', 
    variant = 'line',
    size = 'md',
    equalWidth = false, 
    orientation = 'horizontal', 
    defaultValue,
    value,
    onValueChange,
    className,
    ...props 
}) {
    const [activeValue, setActiveValue] = useState(value || defaultValue || null);

    useEffect(() => {
        if (value !== undefined) {
            setActiveValue(value);
        }
    }, [value]);

    const handleValueChange = (newValue) => {
        if (value === undefined) {
            setActiveValue(newValue);
        }
        
        if (onValueChange) {
            onValueChange(newValue);
        }
    };

    let rootClassName = 'q-tabs-root';
    if (className) rootClassName += ` ${className}`;

    return (
        <TabsContext.Provider value={{ 
            activeValue, 
            setActiveValue: handleValueChange,
            color,
            variant,
            size,
            equalWidth,
            orientation 
        }}>
            <div 
                className={rootClassName} 
                data-color={color} 
                data-variant={variant}
                data-size={size}
                data-equal-width={equalWidth} 
                data-orientation={orientation}
                {...props}
            >
                {children}
            </div>
        </TabsContext.Provider>
    );
}

function List({ children, className, ...props }) {
    const { orientation, equalWidth } = useContext(TabsContext);
    
    let listClassName = 'q-tabs-list';
    if (className) listClassName += ` ${className}`;

    return (
        <div 
            className={listClassName}
            role="tablist"
            aria-orientation={orientation}
            {...props}
        >
            {children}
        </div>
    );
}

function Trigger({ children, value, disabled = false, className, ...props }) {
    const { activeValue, setActiveValue, variant } = useContext(TabsContext);
    const isActive = activeValue === value;

    const handleClick = () => {
        if (!disabled && value) {
            setActiveValue(value);
        }
    };

    const handleKeyDown = (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            setActiveValue(value);
        }
    };

    let triggerClassName = 'q-tabs-trigger';
    if (className) triggerClassName += ` ${className}`;
    if (isActive) triggerClassName += ' active';
    if (disabled) triggerClassName += ' disabled';

    return (
        <button
            className={triggerClassName}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            role="tab"
            aria-selected={isActive}
            aria-controls={`content-${value}`}
            id={`trigger-${value}`}
            tabIndex={isActive ? 0 : -1}
            data-state={isActive ? 'active' : 'inactive'}
            {...props}
        >
            {children}
        </button>
    );
}

function Content({ children, value, className, ...props }) {
    const { activeValue } = useContext(TabsContext);
    const isActive = activeValue === value;

    let contentClassName = 'q-tabs-content';
    if (className) contentClassName += ` ${className}`;

    if (!isActive) {
        return null;
    }

    return (
        <div
            className={contentClassName}
            role="tabpanel"
            aria-labelledby={`trigger-${value}`}
            id={`content-${value}`}
            data-state={isActive ? 'active' : 'inactive'}
            {...props}
        >
            {children}
        </div>
    );
}

// PropTypes
Root.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    variant: PropTypes.oneOf(['line', 'card', 'pill']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    equalWidth: PropTypes.bool,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onValueChange: PropTypes.func,
    className: PropTypes.string
};

List.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Trigger.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

Content.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string
};

const Tabs = {
    Root,
    List,
    Trigger,
    Content
};

export default Tabs;
