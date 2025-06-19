import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Sidebar from '../sidebar/Sidebar';
import '../../css/sidebarPanel.css';
import PropTypes from 'prop-types';

import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function SidebarPanel({
    menu = [],
    backgroundColor = '#3b82f6',
    textColor = '#ffffff',
    logoContent = null,
    expandedItems = [],
    onItemClick,
    onToggleExpand,
    showGroupHeadings = true,
    mobileMenuOpen = false,
    setMobileMenuOpen = () => {},
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
        if (window.innerWidth <= 768) {
            setMobileMenuOpen(false);
        }
    };

    const renderIcon = (iconName) => {
        if (!iconName) return null;

        if (typeof iconName === 'string') {
            return <span className="q-sidebar-panel__icon-placeholder">{iconName.slice(-1)}</span>;
        }

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
                        className={`q-sidebar-panel__link q-sidebar-panel__link--expandable ${childActive ? 'q-sidebar-panel__link--has-active-child' : ''}`}
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

        return (
            <li key={`${sectionIndex}-${itemIndex}`} className={itemClass}>
                <RouterLink
                    to={item.to}
                    className={`q-sidebar-panel__link ${active ? 'q-sidebar-panel__link--active' : ''}`}
                    onClick={(e) => handleItemClick(item, e)}
                    data-level={level}
                    style={{ color: textColor }}
                >
                    <div className="q-sidebar-panel__link-content">
                        {renderIcon(item.icon)}
                        <span className="q-sidebar-panel__link-text">{item.title}</span>
                    </div>
                </RouterLink>
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
            <aside
                className={`${containerClass} q-sidebar-panel--desktop`}
                style={{ backgroundColor }}
                {...props}
            >
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

            <Sidebar
                open={mobileMenuOpen}
                onClose={() => {
                    setMobileMenuOpen(false)
                }}
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
