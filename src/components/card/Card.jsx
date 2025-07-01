import '../../css/card.css';
import PropTypes from 'prop-types';

function CardRoot({ 
    children, 
    maxWidth, 
    className = '', 
    color, 
    variant = 'default',
    padding = 'md',
    radius = 'lg',
    shadow = 'sm',
    hoverable = false,
    fullwidth = false,
    ...props 
}) {
    let classCard = `q-card-root ${className}`.trim();
    
    if (hoverable) {
        classCard += ' q-card-hoverable';
    }

    return (
        <div 
            className={classCard} 
            data-color={color}
            data-variant={variant}
            data-padding={padding}
            data-radius={radius}
            data-fullwidth={fullwidth}
            data-shadow={shadow}
            style={{ maxWidth: maxWidth }} 
            {...props}
        >
            {children}
        </div>
    )
}

function CardHeader({ 
    children, 
    className = '',
    divider = true,
    ...props 
}) {
    let headerClass = `q-card-header ${className}`.trim();
    
    if (!divider) {
        headerClass += ' q-card-header-no-divider';
    }
    
    return (
        <div className={headerClass} {...props}>
            {children}
        </div>
    )
}

function CardBody({ 
    children, 
    className = '', 
    ...props 
}) {
    let bodyClass = `q-card-body ${className}`.trim();

    return (
        <div className={bodyClass} {...props}>
            {children}
        </div>
    )
}

function CardFooter({ 
    children, 
    className = '',
    divider = true,
    ...props 
}) {
    let footerClass = `q-card-footer ${className}`.trim();
    
    if (!divider) {
        footerClass += ' q-card-footer-no-divider';
    }
    
    return (
        <div className={footerClass} {...props}>
            {children}
        </div>
    )
}

// PropTypes
CardRoot.propTypes = {
    children: PropTypes.node,
    maxWidth: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'outlined', 'filled', 'ghost']),
    padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    hoverable: PropTypes.bool
};

CardHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    divider: PropTypes.bool
};

CardBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

CardFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    divider: PropTypes.bool
};

const Card = {
    Root: CardRoot,
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
};

export default Card;