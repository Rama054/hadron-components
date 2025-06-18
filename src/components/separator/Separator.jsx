import PropTypes from 'prop-types';
import '../../css/separator.css';

export default function Separator({ 
    color, 
    width = '1px', 
    size, 
    orientation = 'horizontal', 
    className,
    style,
    ...props 
}) {
    const defineSize = () => {
        if (orientation === 'vertical') {
            return size ? size : '1rem';
        }
        return size ? size : '100%';
    };

    let separatorClass = 'q-separator';
    let separatorStyle = { 
        '--separator-width': width, 
        '--separator-size': defineSize() 
    };

    if (style) {
        separatorStyle = { ...separatorStyle, ...style };
    }

    if (className) {
        separatorClass += ` ${className}`;
    }

    return (
        <span 
            className={separatorClass} 
            data-orientation={orientation} 
            data-color={color} 
            style={separatorStyle}
            role="separator"
            aria-orientation={orientation}
            {...props}
        />
    );
}

Separator.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    size: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    className: PropTypes.string,
    style: PropTypes.object
};