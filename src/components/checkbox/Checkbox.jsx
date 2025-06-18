import '../../css/checkbox.css';
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Checkbox({ 
    label, 
    color = "primary", 
    size = "md",
    helpText, 
    errorText, 
    checked, 
    onChange, 
    disabled = false,
    indeterminate = false,
    className,
    ...props 
}) {
    const [isChecked, setIsChecked] = useState(checked ?? false);

    const handleChange = (e) => {
        const newValue = e.target.checked;
        setIsChecked(newValue);
        if (onChange && !props.name) onChange(newValue);
    };

    let checkboxClass = "q-checkbox-root";
    if (className) checkboxClass += ` ${className}`;
    if (errorText) checkboxClass += " q-checkbox-error";
    if (disabled) checkboxClass += " q-checkbox-disabled";

    const uniqueId = props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={checkboxClass}>
            <div className="q-checkbox-container">
                <input
                    {...props}
                    id={uniqueId}
                    data-color={color}
                    data-size={size}
                    type="checkbox"
                    checked={checked ?? isChecked}
                    onChange={handleChange}
                    disabled={disabled}
                    ref={(el) => {
                        if (el) el.indeterminate = indeterminate;
                    }}
                    className="q-checkbox-input"
                />
                <label className="q-checkbox-label" htmlFor={uniqueId}>
                    {label}
                </label>
            </div>
            {(helpText || errorText) && (
                <div className="q-checkbox-help">
                    {helpText && <span className="q-help-text">{helpText}</span>}
                    {errorText && <span className="q-error-text">{errorText}</span>}
                </div>
            )}
        </div>
    );
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    helpText: PropTypes.string,
    errorText: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    className: PropTypes.string
};
