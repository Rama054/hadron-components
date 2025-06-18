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
                <h3>Icon Buttons</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {sizes.map(size => (
                        <Button key={size} size={size} color="primary">
                            ⚙️
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
                <h3>Left Icons</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button color="primary" leftIcon="📁">Open File</Button>
                    <Button color="success" leftIcon="💾" variant="outline">Save</Button>
                    <Button color="danger" leftIcon="🗑️" variant="soft">Delete</Button>
                    <Button color="info" leftIcon="📧" variant="ghost">Send Email</Button>
                </div>
            </div>

            <div>
                <h3>Right Icons</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button color="primary" rightIcon="→">Next</Button>
                    <Button color="secondary" rightIcon="↗️" variant="outline">External Link</Button>
                    <Button color="success" rightIcon="✓" variant="soft">Confirm</Button>
                    <Button color="warning" rightIcon="⚠️" variant="ghost">Warning</Button>
                </div>
            </div>

            <div>
                <h3>Icon Only</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button color="primary">⚙️</Button>
                    <Button color="secondary" variant="outline">❤️</Button>
                    <Button color="success" variant="soft">✓</Button>
                    <Button color="danger" variant="ghost">✕</Button>
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
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Button color="primary">Normal</Button>
                    <Button color="primary" loading>Loading</Button>
                    <Button color="primary" loading leftIcon="📁">Loading with Icon</Button>
                </div>
            </div>

            <div>
                <h3>Full Width</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
                    <Button color="primary" fullWidth>Full Width Button</Button>
                    <Button color="secondary" variant="outline" fullWidth>Full Width Outline</Button>
                    <Button color="success" variant="soft" fullWidth leftIcon="✓">Full Width with Icon</Button>
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
                    <Button color="primary" leftIcon="📊">Generate Report</Button>
                    <Button color="success" variant="outline" leftIcon="💾">Export Data</Button>
                    <Button color="info" variant="soft" leftIcon="🔄">Refresh</Button>
                    <Button color="warning" variant="ghost" leftIcon="⚙️">Settings</Button>
                    <Button color="danger" variant="outline" size="sm">🗑️</Button>
                    <Button color="secondary" variant="ghost" size="sm">📝</Button>
                </div>
            </div>

            <div>
                <h3>Toolbar Actions</h3>
                <div style={{ display: 'flex', gap: '8px', padding: '12px', backgroundColor: 'var(--hadr-selected)', borderRadius: '8px' }}>
                    <Button size="sm" variant="ghost" color="secondary">📁</Button>
                    <Button size="sm" variant="ghost" color="secondary">💾</Button>
                    <Button size="sm" variant="ghost" color="secondary">📋</Button>
                    <Button size="sm" variant="ghost" color="secondary">✂️</Button>
                    <div style={{ width: '1px', backgroundColor: 'var(--hadr-border-color)', margin: '0 8px' }}></div>
                    <Button size="sm" variant="ghost" color="secondary">↶</Button>
                    <Button size="sm" variant="ghost" color="secondary">↷</Button>
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
    fullWidth: false
}
