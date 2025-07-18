import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '../../css/checkbox.css';

const Checkbox = forwardRef(({ 
    label, 
    color = "primary", 
    size = "md",
    helpText, 
    errorText, 
    checked, 
    defaultChecked,
    onChange, 
    disabled = false,
    indeterminate = false,
    className,
    id,
    name,
    value,
    ...props 
}, ref) => {
    let checkboxClass = "q-checkbox-root";
    if (className) checkboxClass += ` ${className}`;
    if (errorText) checkboxClass += " q-checkbox-error";
    if (disabled) checkboxClass += " q-checkbox-disabled";

    const uniqueId = id || `checkbox-${name || Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={checkboxClass}>
            <div className="q-checkbox-container">
                <input
                    ref={(el) => {
                        if (el) el.indeterminate = indeterminate;
                        if (ref) {
                            if (typeof ref === 'function') {
                                ref(el);
                            } else {
                                ref.current = el;
                            }
                        }
                    }}
                    id={uniqueId}
                    name={name}
                    value={value}
                    data-color={color}
                    data-size={size}
                    type="checkbox"
                    checked={checked}
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                    disabled={disabled}
                    className="q-checkbox-input"
                    {...props}
                />
                <label className="q-checkbox-label" htmlFor={uniqueId}>
                    {label}
                </label>
            </div>
            {(helpText || errorText) && (
                <div className="q-checkbox-help">
                    {helpText && !errorText && (
                        <span className="q-help-text">{helpText}</span>
                    )}
                    {errorText && (
                        <span className="q-error-text">{errorText}</span>
                    )}
                </div>
            )}
        </div>
    );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    helpText: PropTypes.string,
    errorText: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Checkbox;