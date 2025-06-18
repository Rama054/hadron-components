import '../../css/badge.css';
import PropTypes from 'prop-types';

export default function Badge({
    children,
    color = "primary",
    variant = "solid",
    content,
    pill = false,
    dot = false,
    animated = false,
    size = "sm",
    max = 99,
    ...props
}) {
    // Format content if it's a number and exceeds max
    const formatContent = (content) => {
        if (typeof content === 'number' && content > max) {
            return `${max}+`;
        }
        return content;
    };

    const badgeClass = `${
        dot ? 'q-badge-dot' : ''
    } ${
        children ? 'q-dot-floating' : ''
    } ${
        animated ? 'q-badge-animated' : ''
    } ${
        pill ? 'q-badge-pill' : ''
    }`.trim();

    return (
        <div className="q-badge">
            <span 
                data-color={color} 
                data-variant={variant} 
                data-size={size}
                className={badgeClass} 
                {...props}
            >
                {!dot && formatContent(content)}
            </span>
            {children}
        </div>
    );
}

Badge.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    variant: PropTypes.oneOf(['solid', 'outline', 'soft', 'ghost']),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    pill: PropTypes.bool,
    dot: PropTypes.bool,
    animated: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    max: PropTypes.number
};