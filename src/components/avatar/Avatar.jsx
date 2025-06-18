import "../../css/avatar.css";
import PropTypes from 'prop-types';

export default function Avatar({ 
    src, 
    alt, 
    size = "md", 
    children, 
    radius = "full", 
    color = "gray", 
    className, 
    status,
    ...props 
}) {
    let avatarClass = "q-avatar";
    if (className) avatarClass += ` ${className}`;

    return (
        <div className={avatarClass} data-size={size} data-radius={radius} data-color={color} {...props}>
            {children ? (
                <span>{children}</span>
            ) : src && alt ? (
                <img src={src} alt={alt} />
            ) : (
                <span>{alt ? alt.charAt(0).toUpperCase() : '?'}</span>
            )}
            {status && <span className="q-avatar-status" data-status={status}></span>}
        </div>
    );
}

Avatar.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    children: PropTypes.node,
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    color: PropTypes.string,
    className: PropTypes.string,
    status: PropTypes.oneOf(['online', 'offline', 'away', 'busy'])
};
