import '../../css/progressBar.css';
import PropTypes from 'prop-types';

export default function ProgressBar({
    value = 0,
    max = 100,
    color = 'primary',
    size = 'md',
    variant = 'default',
    showLabel = false,
    labelPosition = 'right',
    customLabel,
    animated = true,
    striped = false,
    radius = 'sm',
    className,
    ...props
}) {
    // Calcular el porcentaje
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    // Generar el label
    const getLabel = () => {
        if (customLabel) return customLabel;
        if (variant === 'percentage') return `${Math.round(percentage)}%`;
        if (variant === 'fraction') return `${value}/${max}`;
        return `${Math.round(percentage)}%`;
    };

    let progressClass = 'q-progress';
    if (className) progressClass += ` ${className}`;
    if (striped) progressClass += ' q-progress-striped';
    if (animated && striped) progressClass += ' q-progress-animated';

    const progressBar = (
        <div 
            className={progressClass}
            data-size={size}
            data-radius={radius}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
            {...props}
        >
            <div 
                className="q-progress-bar"
                data-color={color}
                style={{ width: `${percentage}%` }}
            >
                {showLabel && labelPosition === 'inside' && (
                    <span className="q-progress-label q-progress-label-inside">
                        {getLabel()}
                    </span>
                )}
            </div>
        </div>
    );

    if (showLabel && labelPosition !== 'inside') {
        return (
            <div className="q-progress-wrapper">
                {labelPosition === 'left' && (
                    <span className="q-progress-label q-progress-label-outside">
                        {getLabel()}
                    </span>
                )}
                {progressBar}
                {labelPosition === 'right' && (
                    <span className="q-progress-label q-progress-label-outside">
                        {getLabel()}
                    </span>
                )}
            </div>
        );
    }

    return progressBar;
}

ProgressBar.propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    variant: PropTypes.oneOf(['default', 'percentage', 'fraction']),
    showLabel: PropTypes.bool,
    labelPosition: PropTypes.oneOf(['inside', 'left', 'right']),
    customLabel: PropTypes.node,
    animated: PropTypes.bool,
    striped: PropTypes.bool,
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    className: PropTypes.string
};
