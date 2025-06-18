import Button from "./Button";
import useThemeMode from '../../hooks/useThemeMode';
import '../../css/theme.css';

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['solid', 'outline', 'soft', 'ghost']
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        },
        radius: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'full']
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
        },
        icon: {
            control: { type: 'boolean' }
        },
        loading: {
            control: { type: 'boolean' }
        },
        disabled: {
            control: { type: 'boolean' }
        },
        fullWidth: {
            control: { type: 'boolean' }
        }
    }
};

const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Solid Variant (Default)</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map(color => (
                        <Button key={color} color={color} variant="solid">
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <h3>Disabled State</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map(color => (
                        <Button key={color} color={color} disabled>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Variants = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Outline Variant</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map(color => (
                        <Button key={color} variant="outline" color={color}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <h3>Soft Variant</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map(color => (
                        <Button key={color} variant="soft" color={color}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <h3>Ghost Variant</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map(color => (
                        <Button key={color} variant="ghost" color={color}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Sizes = () => {
    const { toggleTheme } = useThemeMode();
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Size Variants</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {sizes.map(size => (
                        <Button key={size} size={size} color="primary">
                            {size.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <h3>Icon Buttons (data-icon="true")</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {sizes.map(size => (
                        <Button key={size} size={size} color="primary" icon>
                            ⚙️
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <h3>Text Buttons with Icons</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {sizes.map(size => (
                        <Button key={size} size={size} color="primary">
                            ⚙️ {size.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const WithIcons = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Text with Icons (in children)</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button color="primary">📁 Open File</Button>
                    <Button color="success" variant="outline">💾 Save</Button>
                    <Button color="danger" variant="soft">🗑️ Delete</Button>
                    <Button color="info" variant="ghost">📧 Send Email</Button>
                </div>
            </div>

            <div>
                <h3>Icon Buttons (data-icon="true")</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Button color="primary" icon>⚙️</Button>
                    <Button color="secondary" variant="outline" icon>❤️</Button>
                    <Button color="success" variant="soft" icon>✓</Button>
                    <Button color="danger" variant="ghost" icon>✕</Button>
                </div>
            </div>

            <div>
                <h3>Icon Buttons - Different Sizes</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Button size="xs" color="primary" icon>⚙️</Button>
                    <Button size="sm" color="primary" icon>⚙️</Button>
                    <Button size="md" color="primary" icon>⚙️</Button>
                    <Button size="lg" color="primary" icon>⚙️</Button>
                    <Button size="xl" color="primary" icon>⚙️</Button>
                </div>
            </div>

            <div>
                <h3>Icon Buttons - Circular (radius="full")</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Button color="primary" icon radius="full">📁</Button>
                    <Button color="success" variant="outline" icon radius="full">💾</Button>
                    <Button color="danger" variant="soft" icon radius="full">🗑️</Button>
                    <Button color="info" variant="ghost" icon radius="full">📧</Button>
                </div>
            </div>
        </div>
    )
}

export const States = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Loading States</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button color="primary">Normal</Button>
                    <Button color="primary" loading>Loading Text</Button>
                    <Button color="primary" loading>📁 Loading with Icon</Button>
                </div>
            </div>

            <div>
                <h3>Loading States - Different Variants</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button color="primary" variant="solid" loading>Solid Loading</Button>
                    <Button color="primary" variant="outline" loading>Outline Loading</Button>
                    <Button color="primary" variant="soft" loading>Soft Loading</Button>
                    <Button color="primary" variant="ghost" loading>Ghost Loading</Button>
                </div>
            </div>

            <div>
                <h3>Loading Icon Buttons</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Button color="primary" icon loading>⚙️</Button>
                    <Button color="success" variant="outline" icon loading>💾</Button>
                    <Button color="danger" variant="soft" icon loading radius="full">🗑️</Button>
                </div>
            </div>

            <div>
                <h3>Disabled States</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button color="primary" disabled>Disabled Solid</Button>
                    <Button color="primary" variant="outline" disabled>Disabled Outline</Button>
                    <Button color="primary" variant="soft" disabled>Disabled Soft</Button>
                    <Button color="primary" variant="ghost" disabled>Disabled Ghost</Button>
                    <Button color="primary" icon disabled>⚙️</Button>
                </div>
            </div>

            <div>
                <h3>Full Width</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
                    <Button color="primary" fullWidth>Full Width Button</Button>
                    <Button color="secondary" variant="outline" fullWidth>Full Width Outline</Button>
                    <Button color="success" variant="soft" fullWidth>✓ Full Width with Icon</Button>
                    <Button color="danger" fullWidth loading>Full Width Loading</Button>
                </div>
            </div>
        </div>
    )
}

export const Radius = () => {
    const { toggleTheme } = useThemeMode();
    const radiusOptions = ['none', 'sm', 'md', 'lg', 'full'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Border Radius</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    {radiusOptions.map(radius => (
                        <div key={radius} style={{ textAlign: 'center' }}>
                            <Button color="primary" radius={radius}>Button</Button>
                            <div style={{ fontSize: '12px', marginTop: '8px', textTransform: 'capitalize' }}>
                                {radius}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const DashboardActions = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Dashboard Actions</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button color="primary">📊 Generate Report</Button>
                    <Button color="success" variant="outline">💾 Export Data</Button>
                    <Button color="info" variant="soft">🔄 Refresh</Button>
                    <Button color="warning" variant="ghost">⚙️ Settings</Button>
                    <Button color="danger" variant="outline" size="sm" icon>🗑️</Button>
                    <Button color="secondary" variant="ghost" size="sm" icon>📝</Button>
                </div>
            </div>

            <div>
                <h3>Toolbar Actions</h3>
                <div style={{ display: 'flex', gap: '8px', padding: '12px', backgroundColor: 'var(--hadr-selected)', borderRadius: '8px' }}>
                    <Button size="sm" variant="ghost" color="secondary" icon>📁</Button>
                    <Button size="sm" variant="ghost" color="secondary" icon>💾</Button>
                    <Button size="sm" variant="ghost" color="secondary" icon>📋</Button>
                    <Button size="sm" variant="ghost" color="secondary" icon>✂️</Button>
                    <div style={{ width: '1px', backgroundColor: 'var(--hadr-border-color)', margin: '0 8px' }}></div>
                    <Button size="sm" variant="ghost" color="secondary" icon>↶</Button>
                    <Button size="sm" variant="ghost" color="secondary" icon>↷</Button>
                </div>
            </div>

            <div>
                <h3>Action Bar with Loading States</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button color="primary" loading>📊 Generating...</Button>
                    <Button color="success" variant="outline">💾 Export Data</Button>
                    <Button color="info" variant="soft" icon loading>🔄</Button>
                    <Button color="warning" variant="ghost" disabled>⚙️ Settings</Button>
                </div>
            </div>

            <div>
                <h3>Floating Action Buttons</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Button color="primary" icon radius="full">+</Button>
                    <Button color="success" icon radius="full" variant="soft">✓</Button>
                    <Button color="danger" icon radius="full" variant="outline">×</Button>
                    <Button color="info" icon radius="full" variant="ghost" loading>⚙️</Button>
                </div>
            </div>
        </div>
    )
}

export const Interactive = (args) => {
    return (
        <div style={{ padding: '24px' }}>
            <Button {...args} />
        </div>
    )
}

Interactive.args = {
    children: "Interactive Button",
    variant: "solid",
    color: "primary",
    size: "md",
    radius: "md",
    disabled: false,
    loading: false,
    fullWidth: false,
    icon: false
}
