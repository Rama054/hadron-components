import React from 'react';
import PropTypes from 'prop-types';
import '../../css/breadcrumb.css';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function BreadCrumb({
    items = [],
    separator,
    size = 'md',
    color = 'primary',
    showHome = true,
    homeIcon,
    className,
    onItemClick,
    toHome = '/',
    ...props
}) {
    const handleItemClick = (item, index) => {
        if (onItemClick && !item.disabled) {
            onItemClick(item, index);
        }
    };

    const renderSeparator = (index) => {
        if (index === items.length - 1) return null;
        
        return (
            <span className="q-breadcrumb-separator" key={`separator-${index}`}>
                {separator || <IoChevronForward size={14} />}
            </span>
        );
    };

    const renderItem = (item, index) => {
        const isLast = index === items.length - 1;
        const isClickable = item.href || item.onClick || onItemClick;

        // Usar template si está disponible
        if (item.template) {
            return (
                <span
                    key={index}
                    className={`q-breadcrumb-item ${isLast ? 'q-breadcrumb-current' : ''} ${item.disabled ? 'q-breadcrumb-disabled' : ''}`}
                    onClick={() => handleItemClick(item, index)}
                >
                    {item.template(item, index, isLast)}
                </span>
            );
        }

        // Renderizado estándar
        const content = (
            <>
                {item.icon && (
                    <span className="q-breadcrumb-icon">
                        {item.icon}
                    </span>
                )}
                <span className="q-breadcrumb-label">
                    {item.label}
                </span>
            </>
        );

        if (isClickable && !isLast && !item.disabled) {
            if (item.href) {
                return (
                    <Link
                        key={index}
                        to={item.href}
                        className={`q-breadcrumb-item q-breadcrumb-link ${item.disabled ? 'q-breadcrumb-disabled' : ''}`}
                        onClick={(e) => {
                            if (item.onClick) {
                                e.preventDefault();
                                item.onClick(item, index);
                            }
                            handleItemClick(item, index);
                        }}
                        target={item.target}
                        rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                    >
                        {content}
                    </Link>
                );
            } else {
                return (
                    <button
                        key={index}
                        type="button"
                        className={`q-breadcrumb-item q-breadcrumb-button ${item.disabled ? 'q-breadcrumb-disabled' : ''}`}
                        onClick={() => {
                            if (item.onClick) item.onClick(item, index);
                            handleItemClick(item, index);
                        }}
                        disabled={item.disabled}
                    >
                        {content}
                    </button>
                );
            }
        }

        return (
            <span
                key={index}
                className={`q-breadcrumb-item ${isLast ? 'q-breadcrumb-current' : ''} ${item.disabled ? 'q-breadcrumb-disabled' : ''}`}
            >
                {content}
            </span>
        );
    };

    let breadcrumbClass = 'q-breadcrumb';
    if (className) breadcrumbClass += ` ${className}`;

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <nav 
            className={breadcrumbClass}
            data-size={size}
            data-color={color}
            aria-label="Breadcrumb"
            {...props}
        >
            <ol className="q-breadcrumb-list">
                {/* Home item si está habilitado */}
                {showHome && items.length > 0 && items[0].label !== 'Home' && (
                    <>
                        <li className="q-breadcrumb-list-item">
                            <Link
                                to={toHome}
                                className="q-breadcrumb-item q-breadcrumb-button q-breadcrumb-home"
                                onClick={() => handleItemClick({ label: 'Home', isHome: true }, -1)}
                            >
                                {homeIcon && (
                                    <span className="q-breadcrumb-icon">
                                        {homeIcon}
                                    </span>
                                )}
                                <span className="q-breadcrumb-label">Home</span>
                            </Link>
                        </li>
                        {renderSeparator(-1)}
                    </>
                )}

                {/* Items del breadcrumb */}
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <li className="q-breadcrumb-list-item">
                            {renderItem(item, index)}
                        </li>
                        {renderSeparator(index)}
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
}

BreadCrumb.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string,
        onClick: PropTypes.func,
        icon: PropTypes.node,
        template: PropTypes.func,
        disabled: PropTypes.bool,
        target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
    })).isRequired,
    separator: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.string,
    showHome: PropTypes.bool,
    homeIcon: PropTypes.node,
    className: PropTypes.string,
    onItemClick: PropTypes.func,
    toHome: PropTypes.string
};
