import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import '../../css/verticalMenu.css';
import PropTypes from 'prop-types';

export default function VerticalMenu({ 
    menu = [],
    theme = 'dark',
    accentColor = 'primary',
    expandedItems = [],
    onItemClick,
    onToggleExpand,
    showGroupHeadings = true,
    compact = false,
    className,
    ...props 
}) {
    const [internalExpandedItems, setInternalExpandedItems] = useState(expandedItems);
    const location = useLocation();

    const isExpanded = (itemIndex, sectionIndex) => {
        const key = `${sectionIndex}-${itemIndex}`;
        return internalExpandedItems.includes(key);
    };

    const toggleExpand = (itemIndex, sectionIndex) => {
        const key = `${sectionIndex}-${itemIndex}`;
        const newExpanded = isExpanded(itemIndex, sectionIndex)
            ? internalExpandedItems.filter(item => item !== key)
            : [...internalExpandedItems, key];
        
        setInternalExpandedItems(newExpanded);
        
        if (onToggleExpand) {
            onToggleExpand(key, !isExpanded(itemIndex, sectionIndex));
        }
    };

    const isActive = (item) => {
        if (!item.to || !location.pathname) return false;
        return location.pathname === item.to || location.pathname.startsWith(item.to + '/');
    };

    const hasActiveChild = (children) => {
        return children?.some(child => isActive(child));
    };

    const handleItemClick = (item, event) => {
        if (onItemClick) {
            onItemClick(item, event);
        }
        if (item.click) {
            item.click(event);
        }
    };

    const renderIcon = (iconName) => {
        if (!iconName) return null;
        
        // Si es un string, asumir que es un icono de react-icons
        if (typeof iconName === 'string') {
            try {
                // Esto requeriría un mapeo de iconos o importación dinámica
                // Por ahora retornamos un placeholder
                return <span className="hadr-vertical-menu__icon-placeholder">{iconName.slice(-1)}</span>;
            } catch {
                return null;
            }
        }
        
        // Si es un componente React
        if (React.isValidElement(iconName)) {
            return iconName;
        }
        
        return null;
    };

    const renderMenuItem = (item, itemIndex, sectionIndex, level = 0) => {
        const hasChildren = item.list && item.list.length > 0;
        const expanded = isExpanded(itemIndex, sectionIndex);
        const active = isActive(item);
        const childActive = hasActiveChild(item.list);

        const itemClass = `hadr-vertical-menu__item${level > 0 ? ' hadr-vertical-menu__item--nested' : ''}`;
        
        if (hasChildren) {
            return (
                <li key={`${sectionIndex}-${itemIndex}`} className={itemClass}>
                    <button
                        type="button"
                        className={`hadr-vertical-menu__link hadr-vertical-menu__link--expandable ${
                            childActive ? 'hadr-vertical-menu__link--has-active-child' : ''
                        }`}
                        onClick={() => toggleExpand(itemIndex, sectionIndex)}
                        data-level={level}
                    >
                        <div className="hadr-vertical-menu__link-content">
                            {renderIcon(item.icon)}
                            <span className="hadr-vertical-menu__link-text">{item.title}</span>
                        </div>
                        <span className={`hadr-vertical-menu__expand-icon ${expanded ? 'hadr-vertical-menu__expand-icon--expanded' : ''}`}>
                            {expanded ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
                        </span>
                    </button>
                    
                    {expanded && (
                        <ul className="hadr-vertical-menu__submenu">
                            {item.list.map((subItem, subIndex) => 
                                renderMenuItem(subItem, subIndex, sectionIndex, level + 1)
                            )}
                        </ul>
                    )}
                </li>
            );
        }

        // Elemento simple (hoja)
        const LinkComponent = item.to ? Link : 'button';
        const linkProps = item.to 
            ? { to: item.to }
            : { type: 'button' };

        return (
            <li key={`${sectionIndex}-${itemIndex}`} className={itemClass}>
                <LinkComponent
                    {...linkProps}
                    className={`hadr-vertical-menu__link ${active ? 'hadr-vertical-menu__link--active' : ''}`}
                    onClick={(e) => handleItemClick(item, e)}
                    data-level={level}
                >
                    <div className="hadr-vertical-menu__link-content">
                        {renderIcon(item.icon)}
                        <span className="hadr-vertical-menu__link-text">{item.title}</span>
                    </div>
                </LinkComponent>
            </li>
        );
    };

    const containerClass = `hadr-vertical-menu ${
        compact ? 'hadr-vertical-menu--compact' : ''
    } ${className || ''}`.trim();

    return (
        <nav 
            className={containerClass}
            data-theme={theme}
            data-accent-color={accentColor}
            {...props}
        >
            <ul className="hadr-vertical-menu__list">
                {menu.map((section, sectionIndex) => (
                    <li key={sectionIndex} className="hadr-vertical-menu__section">
                        {showGroupHeadings && section.heading && (
                            <div className="hadr-vertical-menu__section-heading">
                                {section.heading}
                            </div>
                        )}
                        <ul className="hadr-vertical-menu__section-list">
                            {section.list?.map((item, itemIndex) => 
                                renderMenuItem(item, itemIndex, sectionIndex)
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

VerticalMenu.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string,
            list: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
                    to: PropTypes.string,
                    click: PropTypes.func,
                    list: PropTypes.array
                })
            )
        })
    ).isRequired,
    theme: PropTypes.oneOf(['light', 'dark']),
    accentColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info']),
    expandedItems: PropTypes.arrayOf(PropTypes.string),
    onItemClick: PropTypes.func,
    onToggleExpand: PropTypes.func,
    showGroupHeadings: PropTypes.bool,
    compact: PropTypes.bool,
    className: PropTypes.string
};
