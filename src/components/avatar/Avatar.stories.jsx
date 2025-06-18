import '../../css/theme.css';
import useThemeMode from '../../hooks/useThemeMode';
import Avatar from './Avatar';

export default {
    title: "Components/Avatar",
    component: Avatar,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
        },
        radius: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'full']
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'gray', 'blue', 'purple', 'pink']
        },
        status: {
            control: { type: 'select' },
            options: [undefined, 'online', 'offline', 'away', 'busy']
        }
    }
};

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Sizes</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar src="https://i.pravatar.cc/250?u=avatar1" alt="Avatar" size='xs' />
                    <Avatar src="https://i.pravatar.cc/250?u=avatar2" alt="Avatar" size='sm' />
                    <Avatar src="https://i.pravatar.cc/250?u=avatar3" alt="Avatar" size='md' />
                    <Avatar src="https://i.pravatar.cc/250?u=avatar4" alt="Avatar" size='lg' />
                    <Avatar src="https://i.pravatar.cc/250?u=avatar5" alt="Avatar" size='xl' />
                    <Avatar src="https://i.pravatar.cc/250?u=avatar6" alt="Avatar" size='xxl' />
                </div>
            </div>
        </div>
    )
}

export const Fallbacks = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Text Initials</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar size='sm'>AB</Avatar>
                    <Avatar size='md' color="primary">CD</Avatar>
                    <Avatar size='lg' color="success">EF</Avatar>
                    <Avatar size='xl' color="warning">GH</Avatar>
                </div>
            </div>

            <div>
                <h3>Auto Fallback from Name</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar alt="John Doe" size='md' color="blue" />
                    <Avatar alt="Maria Garcia" size='md' color="purple" />
                    <Avatar alt="Alex Smith" size='md' color="pink" />
                    <Avatar alt="Sarah Wilson" size='md' color="teal" />
                </div>
            </div>
        </div>
    )
}

export const Status = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Status Indicators</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=user1" alt="Online User" size='lg' status="online" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Online</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=user2" alt="Away User" size='lg' status="away" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Away</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=user3" alt="Busy User" size='lg' status="busy" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Busy</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=user4" alt="Offline User" size='lg' status="offline" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Offline</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Radius = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Border Radius</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=radius1" alt="Avatar" size='lg' radius="none" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>None</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=radius2" alt="Avatar" size='lg' radius="sm" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Small</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=radius3" alt="Avatar" size='lg' radius="md" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Medium</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=radius4" alt="Avatar" size='lg' radius="lg" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Large</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/250?u=radius5" alt="Avatar" size='lg' radius="full" />
                        <div style={{ fontSize: '12px', marginTop: '8px' }}>Full</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Colors = () => {
    const { toggleTheme } = useThemeMode();
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'blue', 'purple', 'pink', 'teal'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Color Variants (Fallback)</h3>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {colors.map((color, index) => (
                        <div key={color} style={{ textAlign: 'center' }}>
                            <Avatar alt={`User ${index + 1}`} size='lg' color={color} />
                            <div style={{ fontSize: '12px', marginTop: '8px', textTransform: 'capitalize' }}>{color}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Interactive = (args) => {
    return (
        <div style={{ padding: '24px' }}>
            <Avatar {...args} />
        </div>
    )
}

Interactive.args = {
    src: "https://i.pravatar.cc/250?u=interactive",
    alt: "Interactive Avatar",
    size: "lg",
    radius: "full",
    color: "primary",
    status: "online"
}
