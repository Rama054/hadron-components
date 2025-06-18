import PropTypes from 'prop-types';
import '../../css/radio.css';

export default function Radio({ label, color, id, name, value, disabled = false, className, children, ...props }) {
    const uniqueId = id || `radio-${name}-${value}` || `radio-${Math.random().toString(36).substr(2, 9)}`;
    
    let rootClassName = 'q-radio-root';
    if (className) rootClassName += ` ${className}`;
    if (disabled) rootClassName += ' q-radio-disabled';

    return (
        <div className={rootClassName}>
            <input 
                type="radio" 
                id={uniqueId}
                name={name}
                value={value}
                disabled={disabled}
                data-color={color}
                className="q-radio-input" 
                {...props}
            />
            <label htmlFor={uniqueId} className="q-radio-label">
                <span className="q-radio-indicator"></span>
                <span className="q-radio-text">{label || children}</span>
            </label>
        </div>
    )
}

Radio.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string
};
