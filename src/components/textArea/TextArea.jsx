import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '../../css/textarea.css';

const TextArea = forwardRef(({ 
    label, 
    placeholder, 
    helpText, 
    errorText,
    id, 
    name,
    color = 'primary',
    size = 'md',
    radius = 'md',
    resize = 'vertical',
    disabled = false,
    required = false,
    rows = 4,
    maxLength,
    showCharacterCount = false,
    className,
    form,
    ...props 
}, ref) => {
    const uniqueId = id || `textarea-${name || Math.random().toString(36).substr(2, 9)}`;
    
    let rootClassName = "q-textarea-container";
    if (className) rootClassName += ` ${className}`;
    if (errorText) rootClassName += " q-textarea-error";
    if (disabled) rootClassName += " q-textarea-disabled";

    const characterCount = props.value ? String(props.value).length : 0;
    const isNearLimit = maxLength && characterCount >= maxLength * 0.8;
    const isOverLimit = maxLength && characterCount > maxLength;

    return (
        <div className={rootClassName}>
            {label && (
                <label htmlFor={uniqueId} className="q-textarea-label">
                    {label}
                    {required && <span className="q-textarea-required">*</span>}
                </label>
            )}
            
            <div 
                className="q-textarea-wrapper"
                data-color={color}
                data-size={size}
                data-radius={radius}
                data-resize={resize}
            >
                <textarea
                    ref={ref}
                    id={uniqueId}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    rows={rows}
                    maxLength={maxLength}
                    className="q-textarea"
                    {...props}
                />
                
                {(showCharacterCount && maxLength) && (
                    <div className={`q-textarea-counter ${isOverLimit ? 'over-limit' : isNearLimit ? 'near-limit' : ''}`}>
                        {characterCount} / {maxLength}
                    </div>
                )}
            </div>
            
            {(helpText || errorText) && (
                <div className="q-textarea-help-container">
                    {helpText && !errorText && (
                        <small className="q-textarea-help-text">{helpText}</small>
                    )}
                    {errorText && (
                        <small className="q-textarea-error-text">{errorText}</small>
                    )}
                </div>
            )}
        </div>
    );
});

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    helpText: PropTypes.string,
    errorText: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    resize: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    rows: PropTypes.number,
    maxLength: PropTypes.number,
    showCharacterCount: PropTypes.bool,
    className: PropTypes.string,
    form: PropTypes.object
};

export default TextArea;
