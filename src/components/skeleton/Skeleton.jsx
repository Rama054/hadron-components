import PropTypes from 'prop-types';
import '../../css/skeleton.css';

export default function Skeleton({ 
    radius = 'md', 
    width = '100%', 
    height = '20px', 
    variant = 'rectangular',
    className, 
    style, 
    ...props 
}) {
    let skeletonClass = "q-skeleton";
    let skeletonStyle = {
        '--skeleton-width': width,
        '--skeleton-height': height,
    };
    
    if (className) {
        skeletonClass += " " + className;
    }
    
    if (style) {
        skeletonStyle = { ...skeletonStyle, ...style };
    }

    return (
        <div 
            className={skeletonClass} 
            data-radius={radius} 
            data-variant={variant}
            style={skeletonStyle} 
            aria-label="Cargando..."
            role="status"
            {...props}
        />
    );
}

Skeleton.propTypes = {
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    width: PropTypes.string,
    height: PropTypes.string,
    variant: PropTypes.oneOf(['rectangular', 'circular', 'text']),
    className: PropTypes.string,
    style: PropTypes.object
};