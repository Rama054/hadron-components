import Card from "./Card";
import Button from "../button/Button";
import Avatar from "../avatar/Avatar";
import Badge from "../badge/Badge";
import useThemeMode from '../../hooks/useThemeMode';
import '../../css/theme.css';

export default {
    title: "Components/Card",
    component: Card.Root,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled', 'ghost']
        },
        padding: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl']
        },
        radius: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl']
        },
        shadow: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl']
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
        }
    }
};

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Basic Cards</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <Card.Root maxWidth="300px">
                        <Card.Body>
                            This is a simple card with just body content. Perfect for displaying basic information in a clean, minimal way.
                        </Card.Body>
                    </Card.Root>

                    <Card.Root maxWidth="300px">
                        <Card.Header>
                            <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Card with Header</h3>
                        </Card.Header>
                        <Card.Body>
                            This card includes a header section with a title. Great for organizing content with clear sections.
                        </Card.Body>
                    </Card.Root>

                    <Card.Root maxWidth="300px">
                        <Card.Header>
                            <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Complete Card</h3>
                        </Card.Header>
                        <Card.Body>
                            This card has all sections: header, body, and footer. Perfect for forms, detailed information, or action cards.
                        </Card.Body>
                        <Card.Footer>
                            <Button size="sm" variant="outline" color="secondary">Cancel</Button>
                            <Button size="sm" color="primary">Save</Button>
                        </Card.Footer>
                    </Card.Root>
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
                <h3>Card Variants</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Card.Root variant="default" maxWidth="250px">
                            <Card.Header>
                                <h4 style={{ margin: 0 }}>Default</h4>
                            </Card.Header>
                            <Card.Body>
                                Standard card with background and border.
                            </Card.Body>
                        </Card.Root>
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Default</div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Card.Root variant="outlined" maxWidth="250px">
                            <Card.Header>
                                <h4 style={{ margin: 0 }}>Outlined</h4>
                            </Card.Header>
                            <Card.Body>
                                Emphasized border, no shadow.
                            </Card.Body>
                        </Card.Root>
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Outlined</div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Card.Root variant="filled" maxWidth="250px">
                            <Card.Header>
                                <h4 style={{ margin: 0 }}>Filled</h4>
                            </Card.Header>
                            <Card.Body>
                                Subtle background fill.
                            </Card.Body>
                        </Card.Root>
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Filled</div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Card.Root variant="ghost" maxWidth="250px">
                            <Card.Header>
                                <h4 style={{ margin: 0 }}>Ghost</h4>
                            </Card.Header>
                            <Card.Body>
                                Minimal styling, transparent.
                            </Card.Body>
                        </Card.Root>
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Ghost</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Sizing = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Padding Variants</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {['none', 'sm', 'md', 'lg', 'xl'].map(padding => (
                        <div key={padding} style={{ textAlign: 'center' }}>
                            <Card.Root padding={padding} maxWidth="200px">
                                <Card.Body>
                                    Padding: {padding}
                                </Card.Body>
                            </Card.Root>
                            <div style={{ fontSize: '12px', marginTop: '8px', textTransform: 'capitalize' }}>{padding}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3>Shadow Variants</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {['none', 'sm', 'md', 'lg', 'xl'].map(shadow => (
                        <div key={shadow} style={{ textAlign: 'center' }}>
                            <Card.Root shadow={shadow} maxWidth="200px">
                                <Card.Body>
                                    Shadow: {shadow}
                                </Card.Body>
                            </Card.Root>
                            <div style={{ fontSize: '12px', marginTop: '8px', textTransform: 'capitalize' }}>{shadow}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3>Radius Variants</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {['none', 'sm', 'md', 'lg', 'xl'].map(radius => (
                        <div key={radius} style={{ textAlign: 'center' }}>
                            <Card.Root radius={radius} maxWidth="200px">
                                <Card.Body>
                                    Radius: {radius}
                                </Card.Body>
                            </Card.Root>
                            <div style={{ fontSize: '12px', marginTop: '8px', textTransform: 'capitalize' }}>{radius}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Colors = () => {
    const { toggleTheme } = useThemeMode();
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Color Variants</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {colors.map(color => (
                        <Card.Root key={color} color={color} maxWidth="200px">
                            <Card.Header>
                                <h4 style={{ margin: 0, textTransform: 'capitalize' }}>{color}</h4>
                            </Card.Header>
                            <Card.Body>
                                Card with {color} color theme applied to background and borders.
                            </Card.Body>
                        </Card.Root>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Interactive = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Hoverable Cards</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    <Card.Root hoverable maxWidth="300px">
                        <Card.Header>
                            <h4 style={{ margin: 0 }}>Hoverable Card</h4>
                        </Card.Header>
                        <Card.Body>
                            This card has hover effects. Try hovering over it to see the elevation and border changes.
                        </Card.Body>
                        <Card.Footer>
                            <Button size="sm" variant="ghost" color="primary">Learn More</Button>
                        </Card.Footer>
                    </Card.Root>

                    <Card.Root hoverable variant="outlined" maxWidth="300px">
                        <Card.Header>
                            <h4 style={{ margin: 0 }}>Outlined + Hover</h4>
                        </Card.Header>
                        <Card.Body>
                            Combines outlined variant with hover effects for a subtle but interactive feel.
                        </Card.Body>
                        <Card.Footer>
                            <Button size="sm" variant="outline" color="secondary">Action</Button>
                        </Card.Footer>
                    </Card.Root>
                </div>
            </div>
        </div>
    )
}

export const DashboardCards = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Dashboard Examples</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    
                    {/* Stats Card */}
                    <Card.Root hoverable>
                        <Card.Header>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <h4 style={{ margin: 0 }}>Total Revenue</h4>
                                <Badge color="success" content="+12%" size="xs" />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--hadr-color-success)' }}>
                                $45,231
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--hadr-text-muted)', marginTop: '4px' }}>
                                vs last month
                            </div>
                        </Card.Body>
                    </Card.Root>

                    {/* User Profile Card */}
                    <Card.Root>
                        <Card.Header divider={false}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
                                <Avatar src="https://i.pravatar.cc/250?u=profile" alt="User" size="md" status="online" />
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1rem' }}>Sarah Wilson</h4>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--hadr-text-muted)' }}>Product Manager</div>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                                Managing the design system and component library. Available for project discussions.
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Button size="sm" variant="ghost" color="secondary">Message</Button>
                            <Button size="sm" variant="outline" color="primary">View Profile</Button>
                        </Card.Footer>
                    </Card.Root>

                    {/* Quick Actions */}
                    <Card.Root variant="outlined">
                        <Card.Header>
                            <h4 style={{ margin: 0 }}>Quick Actions</h4>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <Button variant="ghost" color="primary" leftIcon="📊" fullWidth>Generate Report</Button>
                                <Button variant="ghost" color="secondary" leftIcon="👥" fullWidth>Manage Users</Button>
                                <Button variant="ghost" color="success" leftIcon="💾" fullWidth>Export Data</Button>
                                <Button variant="ghost" color="warning" leftIcon="⚙️" fullWidth>Settings</Button>
                            </div>
                        </Card.Body>
                    </Card.Root>

                    {/* Notification Card */}
                    <Card.Root color="warning" variant="filled">
                        <Card.Header>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>⚠️</span>
                                <h4 style={{ margin: 0 }}>System Update</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            A new version is available. Please update your system to ensure optimal performance and security.
                        </Card.Body>
                        <Card.Footer>
                            <Button size="sm" variant="ghost" color="warning">Later</Button>
                            <Button size="sm" color="warning">Update Now</Button>
                        </Card.Footer>
                    </Card.Root>

                </div>
            </div>
        </div>
    )
}

export const CustomCard = (args) => {
    return (
        <div style={{ padding: '24px' }}>
            <Card.Root {...args}>
                <Card.Header>
                    <h3 style={{ margin: 0 }}>Interactive Card</h3>
                </Card.Header>
                <Card.Body>
                    This is a customizable card component. Use the controls to experiment with different variants, padding, shadows, and other properties.
                </Card.Body>
                <Card.Footer>
                    <Button size="sm" variant="outline" color="secondary">Cancel</Button>
                    <Button size="sm" color="primary">Confirm</Button>
                </Card.Footer>
            </Card.Root>
        </div>
    )
}

CustomCard.args = {
    variant: "default",
    padding: "md",
    radius: "lg",
    shadow: "sm",
    hoverable: false,
    maxWidth: "400px"
}
