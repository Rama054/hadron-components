import { useRef, useState } from "react";
import { PiEye, PiEyeSlash } from "react-icons/pi";
import Button from "../button/Button";
import Spinner from "../spinner/Spinner";
import PropTypes from 'prop-types';
import '../../css/input.css';

export default function Input({
    appendIcon = null,
    prependIcon = null,
    appendText = null,
    prependText = null,
    type = "text",
    placeholder = null,
    label = null,
    color = null,
    size = "md",
    variant = "default",
    radius = "md",
    loading = false,
    disabled = false,
    required = false,
    className = null,
    helpText = null,
    errorText = null,
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef(null);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Hace foco en el input cuando se hace clic en el InputRoot
    const handleFocus = (event) => {
        const tagName = event.target.tagName;
        if (tagName === "BUTTON" || tagName === "svg" || tagName === "SVG") return;
        if (inputRef.current && !disabled) {
            inputRef.current.focus();
        }
    };

    let inputClassName = "q-input-root";
    if (className) inputClassName += ` ${className}`;
    if (errorText) inputClassName += " q-input-error";
    if (disabled) inputClassName += " q-input-disabled";

    const uniqueId = props.id || (label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : `input-${Math.random().toString(36).substr(2, 9)}`);

    return (
        <div className="q-input-container">
            {label && (
                <label className="q-input-label" htmlFor={uniqueId}>
                    {label}
                    {required && <span className="q-input-required">*</span>}
                </label>
            )}
            <div
                className={inputClassName}
                data-radius={radius}
                data-color={color}
                data-size={size}
                data-variant={variant}
                onClick={handleFocus}
            >
                {prependIcon && <div className="q-input-slot q-input-prepend">{prependIcon}</div>}
                {prependText && <span className="q-slot-text" data-side='left'>{prependText}</span>}

                <input
                    ref={inputRef}
                    id={uniqueId}
                    type={type === "password" ? (showPassword ? "text" : "password") : type}
                    placeholder={placeholder}
                    disabled={loading || disabled}
                    required={required}
                    className="q-input"
                    {...props}
                />

                {type === "password" && (
                    <div className="q-input-slot q-input-append">
                        <Button 
                            variant="ghost" 
                            size="sm"
                            radius={radius} 
                            onClick={handleTogglePassword}
                            disabled={disabled}
                            tabIndex={-1}
                        >
                            {showPassword ? <PiEye size={16} /> : <PiEyeSlash size={16} />}
                        </Button>
                    </div>
                )}

                {loading && (
                    <div className="q-input-slot q-input-append">
                        <Spinner size="sm" color={color || 'primary'} />
                    </div>
                )}
                
                {appendIcon && <div className="q-input-slot q-input-append">{appendIcon}</div>}
                {appendText && <span className="q-slot-text" data-side='right'>{appendText}</span>}
            </div>
            
            {(helpText || errorText) && (
                <div className="q-input-help-container">
                    {helpText && <small className="q-input-help-text">{helpText}</small>}
                    {errorText && <small className="q-input-error-text">{errorText}</small>}
                </div>
            )}
        </div>
    );
}

Input.propTypes = {
    appendIcon: PropTypes.node,
    prependIcon: PropTypes.node,
    appendText: PropTypes.string,
    prependText: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url', 'search']),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['default', 'filled', 'ghost']),
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    className: PropTypes.string,
    helpText: PropTypes.string,
    errorText: PropTypes.string
};
