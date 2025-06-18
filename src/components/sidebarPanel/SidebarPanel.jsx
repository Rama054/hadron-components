import React, { useState } from "react";
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import Sidebar from '../sidebar/Sidebar';
import '../../css/sidebarPanel.css';
import PropTypes from 'prop-types';

// Intentamos importar Link, pero puede no estar disponible
let Link;
try {
    const reactRouterDom = require('react-router-dom');
    Link = reactRouterDom.Link;
} catch (error) {
    // Si react-router-dom no está disponible, usamos un componente mock
    Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;
}

// Hook personalizado para usar location de forma segura
const useSafeLocation = () => {
    try {
        const { useLocation } = require('react-router-dom');
        return useLocation();
    } catch (error) {
        // Si no estamos dentro de un Router context, retornamos un objeto mock
        return { pathname: '' };
    }
};

export default function SidebarPanel({
    menu = [],
    backgroundColor = '#3b82f6',
    textColor = '#ffffff',
    logoContent = null,
    expandedItems = [],
    onItemClick,
    onToggleExpand,
    showGroupHeadings = true,
    className,
    ...props
}) {
    const [internalExpandedItems, setInternalExpandedItems] = useState(expandedItems);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useSafeLocation();

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
        // Solo verificar rutas activas si tenemos un pathname válido
        if (location.pathname === '') return false;
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
        // Cerrar menú móvil al hacer click en un item
        if (window.innerWidth <= 768) {
            setMobileMenuOpen(false);
        }
    };

    const renderIcon = (iconName) => {
        if (!iconName) return null;

        // Si es un string, asumir que es un icono de react-icons
        if (typeof iconName === 'string') {
            try {
                // Esto requeriría un mapeo de iconos o importación dinámica
                // Por ahora retornamos un placeholder
                return <span className="q-sidebar-panel__icon-placeholder">{iconName.slice(-1)}</span>;
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

        const itemClass = `q-sidebar-panel__item${level > 0 ? ' q-sidebar-panel__item--nested' : ''}`;

        if (hasChildren) {
            return (
                <li key={`${sectionIndex}-${itemIndex}`} className={itemClass}>
                    <button
                        type="button"
                        className={`q-sidebar-panel__link q-sidebar-panel__link--expandable ${childActive ? 'q-sidebar-panel__link--has-active-child' : ''
                            }`}
                        onClick={() => toggleExpand(itemIndex, sectionIndex)}
                        data-level={level}
                        style={{ color: textColor }}
                    >
                        <div className="q-sidebar-panel__link-content">
                            {renderIcon(item.icon)}
                            <span className="q-sidebar-panel__link-text">{item.title}</span>
                        </div>
                        <span className={`q-sidebar-panel__expand-icon ${expanded ? 'q-sidebar-panel__expand-icon--expanded' : ''}`}>
                            {expanded ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
                        </span>
                    </button>

                    {expanded && (
                        <ul className="q-sidebar-panel__submenu">
                            {item.list.map((subItem, subIndex) =>
                                renderMenuItem(subItem, subIndex, sectionIndex, level + 1)
                            )}
                        </ul>
                    )}
                </li>
            );
        }

        // Elemento simple (hoja)
        const LinkComponent = item.to && location.pathname !== '' ? Link : 'button';
        const linkProps = item.to && location.pathname !== ''
            ? { to: item.to }
            : { type: 'button' };

        return (
            <li key={`${sectionIndex}-${itemIndex}`} className={itemClass}>
                <LinkComponent
                    {...linkProps}
                    className={`q-sidebar-panel__link ${active ? 'q-sidebar-panel__link--active' : ''}`}
                    onClick={(e) => handleItemClick(item, e)}
                    data-level={level}
                    style={{ color: textColor }}
                >
                    <div className="q-sidebar-panel__link-content">
                        {renderIcon(item.icon)}
                        <span className="q-sidebar-panel__link-text">{item.title}</span>
                    </div>
                </LinkComponent>
            </li>
        );
    };

    const renderMenuContent = () => (
        <nav className="q-sidebar-panel__nav">
            <ul className="q-sidebar-panel__list">
                {menu.map((section, sectionIndex) => (
                    <li key={sectionIndex} className="q-sidebar-panel__section">
                        {showGroupHeadings && section.heading && (
                            <div
                                className="q-sidebar-panel__section-heading"
                                style={{ color: textColor, opacity: 0.8 }}
                            >
                                {section.heading}
                            </div>
                        )}
                        <ul className="q-sidebar-panel__section-list">
                            {section.list?.map((item, itemIndex) =>
                                renderMenuItem(item, itemIndex, sectionIndex)
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );

    const containerClass = `q-sidebar-panel ${className || ''}`.trim();

    return (
        <>
            {/* Botón para abrir menú móvil */}
            <button
                className="q-sidebar-panel__mobile-toggle"
                onClick={() => {
                    setMobileMenuOpen(true)
                }}
                aria-label="Abrir menú"
            >
                <FiMenu size={24} />
            </button>

            {/* Sidebar Desktop */}
            <aside
                className={`${containerClass} q-sidebar-panel--desktop`}
                style={{ backgroundColor }}
                {...props}
            >
                {/* Logo/Header */}
                {logoContent && (
                    <div
                        className="q-sidebar-panel__header"
                        style={{ color: textColor }}
                    >
                        {logoContent}
                    </div>
                )}

                {renderMenuContent()}
            </aside>

            {/* Sidebar Mobile */}
            <Sidebar
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                className="q-sidebar-panel--mobile"
            >

                <div
                    className="q-sidebar-panel__mobile-content"
                    style={{ backgroundColor }}
                >
                    <div className="q-sidebar-panel__mobile-header">
                        {logoContent && (
                            <div
                                className="q-sidebar-panel__header"
                                style={{ color: textColor }}
                            >
                                {logoContent}
                            </div>
                        )}
                    </div>
                    {renderMenuContent()}
                </div>
            </Sidebar>
        </>
    );
}

SidebarPanel.propTypes = {
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
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    logoContent: PropTypes.node,
    expandedItems: PropTypes.arrayOf(PropTypes.string),
    onItemClick: PropTypes.func,
    onToggleExpand: PropTypes.func,
    showGroupHeadings: PropTypes.bool,
    className: PropTypes.string
};
