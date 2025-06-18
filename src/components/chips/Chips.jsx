import React, { useState, useRef, useEffect } from "react";
import { PiX } from "react-icons/pi";
import '../../css/chips.css';
import PropTypes from 'prop-types';

export default function Chips({ 
    value = [], 
    onChange,
    onAdd,
    onRemove,
    label,
    placeholder = "Escribe y presiona Enter...",
    disabled = false,
    error = false,
    helpText,
    chipColor = 'primary',
    chipVariant = 'solid',
    chipRadius = 'md',
    maxChips,
    allowDuplicates = false,
    separator = 'enter',
    trimValues = true,
    validateChip,
    className,
    name,
    id,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    ...props 
}) {
    const [inputValue, setInputValue] = useState('');
    const [chips, setChips] = useState(value || []);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    // Sync with external value changes
    useEffect(() => {
        if (JSON.stringify(value) !== JSON.stringify(chips)) {
            setChips(value || []);
        }
    }, [value]);

    // Notify parent of changes
    useEffect(() => {
        if (onChange && JSON.stringify(chips) !== JSON.stringify(value)) {
            onChange(chips);
        }
    }, [chips, onChange]);

    const addChip = (chipValue) => {
        const processedValue = trimValues ? chipValue.trim() : chipValue;
        
        if (!processedValue) return;

        // Check for duplicates
        if (!allowDuplicates && chips.includes(processedValue)) return;

        // Check max chips limit
        if (maxChips && chips.length >= maxChips) return;

        // Validate chip if validator provided
        if (validateChip && !validateChip(processedValue)) return;

        const newChips = [...chips, processedValue];
        setChips(newChips);
        setInputValue('');

        // Call onAdd callback
        if (onAdd) {
            onAdd(processedValue, newChips);
        }
    };

    const removeChip = (index) => {
        if (disabled) return;
        
        const chipToRemove = chips[index];
        const newChips = chips.filter((_, i) => i !== index);
        setChips(newChips);

        // Call onRemove callback
        if (onRemove) {
            onRemove(chipToRemove, newChips, index);
        }
    };

    const handleKeyDown = (e) => {
        const value = e.target.value;

        switch (e.key) {
            case 'Enter':
                if (separator === 'enter' || separator.includes('enter')) {
                    e.preventDefault();
                    addChip(value);
                }
                break;
            
            case ',':
                if (separator === 'comma' || separator.includes('comma')) {
                    e.preventDefault();
                    addChip(value);
                }
                break;
            
            case 'Tab':
                if (separator === 'tab' || separator.includes('tab')) {
                    if (value.trim()) {
                        e.preventDefault();
                        addChip(value);
                    }
                }
                break;
            
            case 'Backspace':
                if (!value && chips.length > 0) {
                    removeChip(chips.length - 1);
                }
                break;
            
            case ' ':
                if (separator === 'space' || separator.includes('space')) {
                    e.preventDefault();
                    addChip(value);
                }
                break;
        }
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        
        // Add chip on blur if there's content and separator includes blur
        if (separator === 'blur' || separator.includes('blur')) {
            if (e.target.value.trim()) {
                addChip(e.target.value);
            }
        }
    };

    const handlePaste = (e) => {
        if (separator === 'paste' || separator.includes('paste')) {
            e.preventDefault();
            const pastedText = e.clipboardData.getData('text');
            const values = pastedText.split(/[,\n\t]/).filter(v => v.trim());
            
            values.forEach(value => {
                addChip(value);
            });
        }
    };

    const focusInput = () => {
        if (!disabled && inputRef.current) {
            inputRef.current.focus();
        }
    };

    let containerClass = 'hadr-chips';
    if (disabled) containerClass += ' hadr-chips--disabled';
    if (error) containerClass += ' hadr-chips--error';
    if (isFocused) containerClass += ' hadr-chips--focused';
    if (className) containerClass += ` ${className}`;

    const inputId = id || `chips-${Math.random().toString(36).substr(2, 9)}`;
    const helpTextId = helpText ? `${inputId}-help` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const describedBy = [
        ariaDescribedBy,
        helpTextId,
        errorId
    ].filter(Boolean).join(' ') || undefined;

    return (
        <div className="hadr-chips-wrapper">
            {label && (
                <label htmlFor={inputId} className="hadr-chips__label">
                    {label}
                </label>
            )}
            
            <div 
                className={containerClass}
                onClick={focusInput}
                data-testid="chips-container"
            >
                <div className="hadr-chips__content">
                    {chips.map((chip, index) => (
                        <div 
                            key={`${chip}-${index}`}
                            className="hadr-chips__chip"
                            data-color={chipColor}
                            data-variant={chipVariant}
                            data-radius={chipRadius}
                        >
                            <span className="hadr-chips__chip-text">{chip}</span>
                            {!disabled && (
                                <button
                                    type="button"
                                    className="hadr-chips__chip-remove"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeChip(index);
                                    }}
                                    aria-label={`Eliminar ${chip}`}
                                    tabIndex={-1}
                                >
                                    <PiX size={20} />
                                </button>
                            )}
                        </div>
                    ))}
                    
                    <input
                        ref={inputRef}
                        type="text"
                        id={inputId}
                        name={name}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setIsFocused(true)}
                        onBlur={handleBlur}
                        onPaste={handlePaste}
                        placeholder={chips.length === 0 ? placeholder : ''}
                        disabled={disabled || (maxChips && chips.length >= maxChips)}
                        className="hadr-chips__input"
                        aria-label={ariaLabel}
                        aria-describedby={describedBy}
                        aria-invalid={error}
                        {...props}
                    />
                </div>
            </div>

            {helpText && !error && (
                <div id={helpTextId} className="hadr-chips__help-text">
                    {helpText}
                </div>
            )}

            {error && (
                <div id={errorId} className="hadr-chips__error-text">
                    {typeof error === 'string' ? error : 'Este campo contiene errores'}
                </div>
            )}
        </div>
    );
}

Chips.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    helpText: PropTypes.string,
    chipColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    chipVariant: PropTypes.oneOf(['solid', 'outline', 'soft', 'ghost']),
    chipRadius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    maxChips: PropTypes.number,
    allowDuplicates: PropTypes.bool,
    separator: PropTypes.oneOfType([
        PropTypes.oneOf(['enter', 'comma', 'tab', 'space', 'blur', 'paste']),
        PropTypes.arrayOf(PropTypes.oneOf(['enter', 'comma', 'tab', 'space', 'blur', 'paste']))
    ]),
    trimValues: PropTypes.bool,
    validateChip: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    'aria-label': PropTypes.string,
    'aria-describedby': PropTypes.string
};
