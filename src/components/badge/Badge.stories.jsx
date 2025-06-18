import '../../css/theme.css';
import Avatar from "../avatar/Avatar";
import Badge from "./Badge";
import Button from "../button/Button";
import useThemeMode from '../../hooks/useThemeMode';

export default {
    title: "Components/Badge",
    component: Badge,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['solid', 'outline', 'soft', 'ghost']
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg']
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
        }
    }
};

const colors = [
    'primary', 'secondary', 'success', 'info', 'warning', 'danger',
    'blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'
];

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Solid Variant</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map((color, index) => (
                        <Badge key={index} variant="solid" color={color} content={color} />
                    ))}
                </div>
            </div>

            <div>
                <h3>Outline Variant</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map((color, index) => (
                        <Badge key={index} variant="outline" color={color} content={color} />
                    ))}
                </div>
            </div>

            <div>
                <h3>Soft Variant</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map((color, index) => (
                        <Badge key={index} variant="soft" color={color} content={color} />
                    ))}
                </div>
            </div>

            <div>
                <h3>Ghost Variant</h3>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {colors.map((color, index) => (
                        <Badge key={index} variant="ghost" color={color} content={color} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Sizes = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Size Variants</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Badge size="xs" color="primary" content="XS" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Extra Small</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Badge size="sm" color="primary" content="SM" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Small</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Badge size="md" color="primary" content="MD" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Medium</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Badge size="lg" color="primary" content="LG" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Large</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Numbers = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Number Badges</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Badge color="danger" content={1} />
                    <Badge color="danger" content={5} />
                    <Badge color="danger" content={10} />
                    <Badge color="danger" content={99} />
                    <Badge color="danger" content={100} max={99} />
                    <Badge color="danger" content={999} max={99} />
                </div>
            </div>

            <div>
                <h3>Pill Shape</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Badge color="primary" content={1} pill />
                    <Badge color="success" content={5} pill />
                    <Badge color="warning" content={10} pill />
                    <Badge color="danger" content={99} pill />
                    <Badge color="info" content={100} pill max={99} />
                </div>
            </div>
        </div>
    )
}

export const Dots = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Dot Indicators</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    {['xs', 'sm', 'md', 'lg'].map(size => (
                        <div key={size} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <Badge color="success" dot size={size} />
                            <Badge color="warning" dot size={size} />
                            <Badge color="danger" dot size={size} />
                            <span style={{ fontSize: '12px' }}>{size}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3>Animated Dots</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Badge color="success" dot animated />
                    <Badge color="warning" dot animated />
                    <Badge color="danger" dot animated />
                    <Badge color="primary" dot animated />
                </div>
            </div>
        </div>
    )
}

export const WithComponents = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Badge with Avatar</h3>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <Badge color="danger" content={3}>
                        <Avatar src="https://i.pravatar.cc/250?u=user1" alt="User" size="md" />
                    </Badge>
                    
                    <Badge color="success" dot>
                        <Avatar src="https://i.pravatar.cc/250?u=user2" alt="User" size="lg" />
                    </Badge>
                    
                    <Badge color="warning" dot animated>
                        <Avatar alt="John Doe" size="xl" color="blue" />
                    </Badge>
                </div>
            </div>

            <div>
                <h3>Badge with Button</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Badge color="danger" content={5}>
                        <Button variant="outline" color="primary">Messages</Button>
                    </Badge>
                    
                    <Badge color="success" dot>
                        <Button variant="soft" color="secondary">Notifications</Button>
                    </Badge>
                </div>
            </div>

            <div>
                <h3>Dashboard Notifications</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Badge color="danger" content={12} size="sm">
                        <Button variant="ghost" color="gray">📧 Inbox</Button>
                    </Badge>
                    
                    <Badge color="warning" content={3} size="sm">
                        <Button variant="ghost" color="gray">⚠️ Alerts</Button>
                    </Badge>
                    
                    <Badge color="success" dot size="sm">
                        <Button variant="ghost" color="gray">💬 Chat</Button>
                    </Badge>
                    
                    <Badge color="info" content="New" size="xs">
                        <Button variant="ghost" color="gray">📊 Reports</Button>
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export const Interactive = (args) => {
    return (
        <div style={{ padding: '24px' }}>
            <Badge {...args}>
                <Avatar src="https://i.pravatar.cc/250?u=interactive" alt="User" size="lg" />
            </Badge>
        </div>
    )
}

Interactive.args = {
    variant: "solid",
    color: "danger",
    content: 5,
    size: "sm",
    pill: false,
    dot: false,
    animated: false,
    max: 99
}
