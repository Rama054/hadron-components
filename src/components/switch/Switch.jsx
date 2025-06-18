import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/switch.css';

export default function Switch({ 
    label, 
    id, 
    name,
    color = 'primary',
    size = 'md',
    disabled = false,
    checked,
    defaultChecked = false,
    onChange,
    className,
    children,
    form,
    ...props 
}) {
    const [isChecked, setIsChecked] = useState(checked !== undefined ? checked : defaultChecked);
    const uniqueId = id || `switch-${name || Math.random().toString(36).substr(2, 9)}`;
    
    const handleChange = (e) => {
        const newChecked = e.target.checked;
        
        if (checked === undefined) {
            setIsChecked(newChecked);
        }
        
        if (form && name) {
            form.setValue(name, newChecked);
            form.trigger(name);
        }
        
        if (onChange) {
            onChange(e);
        }
    };

    const currentChecked = checked !== undefined ? checked : isChecked;
    
    let rootClassName = 'q-switch-root';
    if (className) rootClassName += ` ${className}`;
    if (disabled) rootClassName += ' q-switch-disabled';

    return (
        <div className={rootClassName}>
            {(label || children) && (
                <label htmlFor={uniqueId} className="q-switch-label">
                    {label || children}
                </label>
            )}
            <div 
                className="q-switch" 
                data-checked={currentChecked} 
                data-disabled={disabled} 
                data-size={size} 
                data-color={color}
            >
                <input 
                    id={uniqueId}
                    name={name}
                    type="checkbox" 
                    checked={currentChecked}
                    disabled={disabled}
                    onChange={handleChange}
                    data-color={color}
                    aria-describedby={label ? undefined : 'switch-description'}
                    {...props}
                />
                <span className='q-switch-slider' />
            </div>
        </div>
    );
}

Switch.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    form: PropTypes.object
};
