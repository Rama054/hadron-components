import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/radioCards.css';

function Root({ 
    children, 
    name, 
    columns = { sm: 1, md: 2, lg: 3 }, 
    color = 'primary',
    radius = 'md',
    multiple = false, 
    form, 
    onChange, 
    className,
    defaultValue = multiple ? [] : '',
    ...props 
}) {
    const [selectedValues, setSelectedValues] = useState(defaultValue);

    const handleSelect = (value) => {
        let newValue;
        if (multiple) {
            newValue = selectedValues.includes(value)
                ? selectedValues.filter(v => v !== value)
                : [...selectedValues, value];
        } else {
            newValue = value;
        }

        setSelectedValues(newValue);

        if (form) {
            form.setValue(name, newValue);
            form.trigger(name);
        }

        if (onChange) {
            onChange(newValue);
        }
    };

    let rootClassName = 'q-radio-cards-root';
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
                    selected: multiple
                        ? selectedValues.includes(child.props.value)
                        : selectedValues === child.props.value,
                    onSelect: () => handleSelect(child.props.value),
                    color,
                    radius
                })
            )}
        </div>
    );
}

function Item({ children, value, title, description, icon, selected, onSelect, disabled = false, color, radius, ...props }) {
    let itemClassName = 'q-radio-cards-item';
    if (selected) itemClassName += ' selected';
    if (disabled) itemClassName += ' disabled';

    return (
        <div 
            className={itemClassName}
            onClick={!disabled ? onSelect : undefined}
            data-color={color}
            data-radius={radius}
            tabIndex={disabled ? -1 : 0}
            role="button"
            aria-pressed={selected}
            aria-disabled={disabled}
            onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
                    e.preventDefault();
                    onSelect();
                }
            }}
            {...props}
        >
            {icon && <div className="q-radio-cards-icon">{icon}</div>}
            <div className="q-radio-cards-content">
                {title && <div className="q-radio-cards-title">{title}</div>}
                {description && <div className="q-radio-cards-description">{description}</div>}
                {!title && !description && children}
            </div>
            <input 
                type="radio" 
                name={`radio-card-${value}`}
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
    multiple: PropTypes.bool,
    form: PropTypes.object,
    onChange: PropTypes.func,
    className: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
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

const RadioCards = {
    Root,
    Item
};

export default RadioCards;
