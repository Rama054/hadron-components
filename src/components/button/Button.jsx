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
    leftIcon,
    rightIcon,
    className, 
    ...props 
}) {
  
    const isIconOnly = () => {
        return React.Children.count(children) === 1 && 
               React.isValidElement(children) && 
               !leftIcon && 
               !rightIcon;
    };
  
    let buttonClass = 'q-button';

    if (isIconOnly()) {
        buttonClass += ' q-button-icon';
    }

    if (fullWidth) {
        buttonClass += ' q-button-full';
    }

    if (className) {
        buttonClass += ` ${className}`;
    }

    return (
        <button 
            className={buttonClass} 
            data-radius={radius} 
            data-variant={variant} 
            data-color={color}
            data-size={size}
            disabled={disabled || loading} 
            {...props}
        >
            {loading && <Spinner size="sm" />}
            {leftIcon && !loading && leftIcon}
            {children}
            {rightIcon && !loading && rightIcon}
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
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string
};







