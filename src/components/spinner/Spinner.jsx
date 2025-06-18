import PropTypes from 'prop-types';
import "../../css/spinner.css";

export default function Spinner({ 
    type = "circle", 
    size = "md", 
    color = "primary",
    className,
    ...props 
}) {
    const getSizeValue = () => {
        const sizeMap = {
            xs: '12px',
            sm: '16px', 
            md: '24px',
            lg: '32px',
            xl: '48px'
        };
        return sizeMap[size] || size;
    };

    const spinners = () => {
        switch (type) {
            case "classic":
                return <CircleSpinner />;
            case "cube":
                return <CubicSpinner />;
            case "circle":
                return <FadingCircleSpinner />;
            case "dots":
                return <DotsSpinner />;
            default:
                return <FadingCircleSpinner />;
        }
    };

    let spinnerClass = "q-spinner-root";
    if (className) spinnerClass += ` ${className}`;

    return (
        <div
            className={spinnerClass}
            data-color={color}
            data-size={size}
            style={{ "--spinner-size": getSizeValue() }}
            role="status"
            aria-label="Cargando"
            {...props}
        >
            {spinners()}
        </div>
    );
}

const CircleSpinner = () => (
    <div className="q-spinner-classic" />
);

const CubicSpinner = () => (
    <>
        <div className="q-spinner-cube" />
        <div className="q-spinner-cube" />
    </>
);

const FadingCircleSpinner = () => {
    const count = 8;
    const circles = Array.from({ length: count }, (_, i) => {
        return (
            <div
                className="q-spinner-circle"
                key={i}
                style={{
                    transform: `rotate(${i * 360 / count}deg)`,
                    "--animation-delay": `${-1.1 + i * 0.1}s`
                }}
            />
        );
    });

    return <>{circles}</>;
};

const DotsSpinner = () => {
    return (
        <div className="q-spinner-dots">
            <div className="q-spinner-dot" style={{"--delay": "0s"}} />
            <div className="q-spinner-dot" style={{"--delay": "0.1s"}} />
            <div className="q-spinner-dot" style={{"--delay": "0.2s"}} />
        </div>
    );
};

Spinner.propTypes = {
    type: PropTypes.oneOf(['classic', 'cube', 'circle', 'dots']),
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
        PropTypes.string
    ]),
    color: PropTypes.string,
    className: PropTypes.string
};
