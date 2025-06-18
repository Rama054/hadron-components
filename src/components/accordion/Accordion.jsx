import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../css/accordion.css';
import { IoChevronDown } from 'react-icons/io5';

// Context para compartir estado entre Root y Tab
const AccordionContext = createContext();

// Hook para usar el contexto
const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error('Accordion.Tab debe estar dentro de Accordion.Root');
    }
    return context;
};

// Componente Root del Accordion
function Root({
    children,
    exclusive = false,
    activeIndex,
    defaultActiveIndex,
    onActiveIndexChange,
    color = 'primary',
    size = 'md',
    variant = 'default',
    disabled = false,
    className,
    ...props
}) {
    // Estado interno para acordeones no controlados
    const [internalActiveIndex, setInternalActiveIndex] = useState(() => {
        if (exclusive) {
            return defaultActiveIndex ?? null;
        } else {
            return defaultActiveIndex ?? [];
        }
    });

    // Determinar si es controlado o no controlado
    const isControlled = activeIndex !== undefined;
    const currentActiveIndex = isControlled ? activeIndex : internalActiveIndex;

    // Función para cambiar el estado de un tab
    const toggleTab = (index) => {
        if (disabled) return;

        let newActiveIndex;

        if (exclusive) {
            // Modo exclusivo: solo uno abierto a la vez
            newActiveIndex = currentActiveIndex === index ? null : index;
        } else {
            // Modo múltiple: varios pueden estar abiertos
            const currentArray = Array.isArray(currentActiveIndex) ? currentActiveIndex : [];
            if (currentArray.includes(index)) {
                newActiveIndex = currentArray.filter(i => i !== index);
            } else {
                newActiveIndex = [...currentArray, index];
            }
        }

        // Actualizar estado si no es controlado
        if (!isControlled) {
            setInternalActiveIndex(newActiveIndex);
        }

        // Llamar callback si existe
        if (onActiveIndexChange) {
            onActiveIndexChange(newActiveIndex, index);
        }
    };

    // Función para verificar si un tab está activo
    const isTabActive = (index) => {
        if (exclusive) {
            return currentActiveIndex === index;
        } else {
            const activeArray = Array.isArray(currentActiveIndex) ? currentActiveIndex : [];
            return activeArray.includes(index);
        }
    };

    // Valor del contexto
    const contextValue = {
        toggleTab,
        isTabActive,
        color,
        size,
        variant,
        disabled,
        exclusive
    };

    let accordionClass = 'q-accordion';
    if (className) accordionClass += ` ${className}`;
    if (disabled) accordionClass += ' q-accordion-disabled';

    return (
        <AccordionContext.Provider value={contextValue}>
            <div 
                className={accordionClass}
                data-color={color}
                data-size={size}
                data-variant={variant}
                {...props}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

// Componente Tab del Accordion
function Tab({
    children,
    title,
    icon,
    disabled: tabDisabled = false,
    index,
    className,
    headerClassName,
    contentClassName,
    ...props
}) {
    const { 
        toggleTab, 
        isTabActive,
        disabled: rootDisabled 
    } = useAccordion();

    const isDisabled = rootDisabled || tabDisabled;
    const isActive = isTabActive(index);

    const handleToggle = () => {
        if (!isDisabled) {
            toggleTab(index);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
        }
    };

    let tabClass = 'q-accordion-tab';
    if (className) tabClass += ` ${className}`;
    if (isActive) tabClass += ' q-accordion-tab-active';
    if (isDisabled) tabClass += ' q-accordion-tab-disabled';

    let headerClass = 'q-accordion-header';
    if (headerClassName) headerClass += ` ${headerClassName}`;

    let contentClass = 'q-accordion-content';
    if (contentClassName) contentClass += ` ${contentClassName}`;

    return (
        <div className={tabClass} {...props}>
            <button
                type="button"
                className={headerClass}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                disabled={isDisabled}
                aria-expanded={isActive}
                aria-controls={`accordion-content-${index}`}
                id={`accordion-header-${index}`}
            >
                <div className="q-accordion-header-content">
                    {icon && (
                        <span className="q-accordion-icon">
                            {icon}
                        </span>
                    )}
                    <span className="q-accordion-title">
                        {title}
                    </span>
                </div>
                
                <span 
                    className={`q-accordion-chevron ${isActive ? 'q-accordion-chevron-open' : ''}`}
                >
                    <IoChevronDown size={16} />
                </span>
            </button>

            <div 
                className={`q-accordion-content-wrapper ${isActive ? 'q-accordion-content-open' : ''}`}
                id={`accordion-content-${index}`}
                aria-labelledby={`accordion-header-${index}`}
                role="region"
            >
                <div className={contentClass}>
                    {children}
                </div>
            </div>
        </div>
    );
}

// Validación de props
Root.propTypes = {
    children: PropTypes.node.isRequired,
    exclusive: PropTypes.bool,
    activeIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),
    defaultActiveIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),
    onActiveIndexChange: PropTypes.func,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['default', 'bordered', 'filled']),
    disabled: PropTypes.bool,
    className: PropTypes.string
};

Tab.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    index: PropTypes.number.isRequired,
    className: PropTypes.string,
    headerClassName: PropTypes.string,
    contentClassName: PropTypes.string
};

// Objeto Accordion con componentes
const Accordion = {
    Root,
    Tab
};

export default Accordion;
