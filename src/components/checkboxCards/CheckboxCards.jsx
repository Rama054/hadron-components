import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/checkboxCards.css';

function Root({ 
    children, 
    name, 
    columns = { sm: 1, md: 2, lg: 3 }, 
    color = 'primary',
    radius = 'md',
    form, 
    onChange, 
    className,
    defaultValue = [],
    ...props 
}) {
    const [selectedValues, setSelectedValues] = useState(defaultValue);

    const handleSelect = (value) => {
        const newValue = selectedValues.includes(value)
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value];

        setSelectedValues(newValue);

        if (form) {
            form.setValue(name, newValue);
            form.trigger(name);
        }

        if (onChange) {
            onChange(newValue);
        }
    };

    let rootClassName = 'q-checkbox-cards-root';
    if (className) rootClassName += ` ${className}`;

    return (
        <div 
            className={rootClassName}
            data-color={color}
            data-radius={radius}
            {...Object.fromEntries(
                Object.entries(columns).map(([key, value]) => [`data-columns-${key}`, value])
            )}
            {...props}
        >
            <input type="hidden" name={name} value={JSON.stringify(selectedValues)} />

            {React.Children.toArray(children).map((child, index) =>
                React.cloneElement(child, {
                    key: index,
                    selected: selectedValues.includes(child.props.value),
                    onSelect: () => handleSelect(child.props.value),
                    color,
                    radius
                })
            )}
        </div>
    );
}

function Item({ children, value, title, description, icon, selected, onSelect, disabled = false, color, radius, ...props }) {
    let itemClassName = 'q-checkbox-cards-item';
    if (selected) itemClassName += ' selected';
    if (disabled) itemClassName += ' disabled';

    return (
        <div 
            className={itemClassName}
            onClick={!disabled ? onSelect : undefined}
            data-color={color}
            data-radius={radius}
            tabIndex={disabled ? -1 : 0}
            role="checkbox"
            aria-checked={selected}
            aria-disabled={disabled}
            onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
                    e.preventDefault();
                    onSelect();
                }
            }}
            {...props}
        >
            {icon && <div className="q-checkbox-cards-icon">{icon}</div>}
            <div className="q-checkbox-cards-content">
                {title && <div className="q-checkbox-cards-title">{title}</div>}
                {description && <div className="q-checkbox-cards-description">{description}</div>}
                {!title && !description && children}
            </div>
            <input 
                type="checkbox" 
                name={`checkbox-card-${value}`}
                value={value}
                checked={selected}
                onChange={() => {}}
                tabIndex={-1}
                aria-hidden="true"
            />
        </div>
    );
}

// PropTypes
Root.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    columns: PropTypes.object,
    color: PropTypes.string,
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    form: PropTypes.object,
    onChange: PropTypes.func,
    className: PropTypes.string,
    defaultValue: PropTypes.array
};

Item.propTypes = {
    children: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.node,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    radius: PropTypes.string
};

const CheckboxCards = {
    Root,
    Item
};

export default CheckboxCards;
