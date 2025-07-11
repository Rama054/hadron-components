import React from "react";
import '../../css/button.css';
import Spinner from "../spinner/Spinner";
import PropTypes from 'prop-types';

export default function Button({ 
    children, 
    color = 'primary', 
    disabled = false, 
    variant = 'solid', 
    size = 'md',
    radius = 'md', 
    loading = false, 
    fullWidth = false,
    icon = false,
    className, 
    type = 'button',
    ...props 
}) {
  
    let buttonClass = 'q-button';

    if (fullWidth) {
        buttonClass += ' q-button-full';
    }

    if (className) {
        buttonClass += ` ${className}`;
    }
/* {loading && <Spinner type="classic" />} */
    return (
        <button 
            type={type}
            className={buttonClass} 
            data-radius={radius} 
            data-variant={variant} 
            data-color={color}
            data-size={size}
            data-icon={icon}
            data-loading={loading}
            disabled={disabled || loading} 
            {...props}
        >
            {loading && <Spinner color={color} type="classic" size="md" className="q-spinner" />}
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['solid', 'outline', 'soft', 'ghost']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    loading: PropTypes.bool,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};







