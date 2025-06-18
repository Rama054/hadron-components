import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import '../../css/tooltip.css';

export default function Tooltip({
    content,
    children,
    placement = 'top',
    trigger = 'hover',
    delay = 200,
    offset = 8,
    disabled = false,
    className,
    style,
    arrow = true,
    maxWidth = '250px',
    color,
    ...props
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0, placement: placement });
    const triggerRef = useRef(null);
    const tooltipRef = useRef(null);
    const timeoutRef = useRef(null);
    const isHoveringRef = useRef(false);

    const calculatePosition = useCallback(() => {
        if (!triggerRef.current || !tooltipRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        
        // Obtener dimensiones reales del tooltip incluyendo padding
        const tooltipElement = tooltipRef.current;
        const tooltipWidth = tooltipElement.offsetWidth;
        const tooltipHeight = tooltipElement.offsetHeight;
        
        // Si las dimensiones siguen siendo 0, usar un fallback mínimo
        const actualWidth = tooltipWidth > 0 ? tooltipWidth : 150;
        const actualHeight = tooltipHeight > 0 ? tooltipHeight : 32;
        
        
        const viewport = {
            width: window.innerWidth,
            height: window.innerHeight,
            scrollX: window.scrollX,
            scrollY: window.scrollY
        };

        let x, y;
        let actualPlacement = placement;

        // Espaciado más conservador
        const arrowOffset = arrow ? 4 : 0;
        const totalOffset = offset + arrowOffset;
        
        switch (placement) {
            case 'top':
                // Centrado perfecto: centro del trigger menos la mitad del ancho del tooltip
                x = triggerRect.left + (triggerRect.width / 2) - (actualWidth / 2);
                y = triggerRect.top - actualHeight - totalOffset;
                break;
            case 'bottom':
                // Centrado perfecto: centro del trigger menos la mitad del ancho del tooltip
                x = triggerRect.left + (triggerRect.width / 2) - (actualWidth / 2);
                y = triggerRect.bottom + totalOffset;
                break;
            case 'left':
                x = triggerRect.left - actualWidth - totalOffset;
                // Centrado perfecto: centro del trigger menos la mitad del alto del tooltip
                y = triggerRect.top + (triggerRect.height / 2) - (actualHeight / 2);
                break;
            case 'right':
                x = triggerRect.right + totalOffset;
                // Centrado perfecto: centro del trigger menos la mitad del alto del tooltip
                y = triggerRect.top + (triggerRect.height / 2) - (actualHeight / 2);
                break;
            default:
                x = triggerRect.left;
                y = triggerRect.top;
        }

        // Adjust for viewport boundaries
        const margin = 12;
        
        if (x < margin) {
            x = margin;
        } else if (x + actualWidth > viewport.width - margin) {
            x = viewport.width - actualWidth - margin;
        }

        if (y < margin) {
            if (placement === 'top') {
                actualPlacement = 'bottom';
                y = triggerRect.bottom + totalOffset;
            } else {
                y = margin;
            }
        } else if (y + actualHeight > viewport.height - margin) {
            if (placement === 'bottom') {
                actualPlacement = 'top';
                y = triggerRect.top - actualHeight - totalOffset;
            } else {
                y = viewport.height - actualHeight - margin;
            }
        }

        setPosition({ 
            x: x + viewport.scrollX, 
            y: y + viewport.scrollY,
            placement: actualPlacement
        });
    }, [placement, offset, arrow]);

    const showTooltip = useCallback(() => {
        if (disabled || !content) return;
        
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, trigger === 'hover' ? delay : 0);
    }, [disabled, content, delay, trigger]);

    const hideTooltip = useCallback(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            if (!isHoveringRef.current) {
                setIsVisible(false);
            }
        }, 100);
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (trigger === 'hover') {
            isHoveringRef.current = true;
            showTooltip();
        }
    }, [trigger, showTooltip]);

    const handleMouseLeave = useCallback(() => {
        if (trigger === 'hover') {
            isHoveringRef.current = false;
            hideTooltip();
        }
    }, [trigger, hideTooltip]);

    const handleClick = useCallback(() => {
        if (trigger === 'click') {
            if (isVisible) {
                hideTooltip();
            } else {
                showTooltip();
            }
        }
    }, [trigger, isVisible, showTooltip, hideTooltip]);

    const handleFocus = useCallback(() => {
        if (trigger === 'focus') {
            showTooltip();
        }
    }, [trigger, showTooltip]);

    const handleBlur = useCallback(() => {
        if (trigger === 'focus') {
            hideTooltip();
        }
    }, [trigger, hideTooltip]);

    const handleTooltipMouseEnter = useCallback(() => {
        if (trigger === 'hover') {
            isHoveringRef.current = true;
            clearTimeout(timeoutRef.current);
        }
    }, [trigger]);

    const handleTooltipMouseLeave = useCallback(() => {
        if (trigger === 'hover') {
            isHoveringRef.current = false;
            hideTooltip();
        }
    }, [trigger, hideTooltip]);

    useEffect(() => {
        if (isVisible) {
            // Usar requestAnimationFrame para asegurar que el DOM esté actualizado
            requestAnimationFrame(() => {
                calculatePosition();
                // Recalcular una vez más después de un pequeño delay para dimensiones exactas
                setTimeout(() => {
                    calculatePosition();
                }, 10);
            });
        }
    }, [isVisible, calculatePosition]);

    useEffect(() => {
        const handleScroll = () => {
            if (isVisible) {
                calculatePosition();
            }
        };

        const handleResize = () => {
            if (isVisible) {
                calculatePosition();
            }
        };

        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutRef.current);
        };
    }, [isVisible, calculatePosition]);

    // Close tooltip on escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isVisible) {
                hideTooltip();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isVisible, hideTooltip]);

    const triggerElement = (
        <span
            ref={triggerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="q-tooltip-trigger"
            {...props}
        >
            {children}
        </span>
    );

    const tooltipElement = isVisible && content && (
        <div
            ref={tooltipRef}
            className={`q-tooltip ${className || ''}`}
            style={{
                position: 'absolute',
                left: position.x,
                top: position.y,
                maxWidth,
                zIndex: 9999,
                ...style
            }}
            data-placement={position.placement}
            data-color={color}
            data-arrow={arrow}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            role="tooltip"
            aria-hidden={!isVisible}
        >
            {arrow && <div className="q-tooltip-arrow" />}
            <div className="q-tooltip-content">
                {content}
            </div>
        </div>
    );

    return (
        <>
            {triggerElement}
            {typeof document !== 'undefined' && tooltipElement && 
                createPortal(tooltipElement, document.body)
            }
        </>
    );
}

Tooltip.propTypes = {
    content: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
    delay: PropTypes.number,
    offset: PropTypes.number,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    arrow: PropTypes.bool,
    maxWidth: PropTypes.string,
    color: PropTypes.string
};
