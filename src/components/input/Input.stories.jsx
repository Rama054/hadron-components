import '../../css/theme.css';
import Input from './Input';
import useThemeMode from '../../hooks/useThemeMode';

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search']
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg']
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'filled', 'ghost']
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

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px', maxWidth: '500px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Basic Inputs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Input label="Name" placeholder="Enter your name" />
                    <Input label="Email" type="email" placeholder="Enter your email" />
                    <Input label="Password" type="password" placeholder="Enter your password" />
                    <Input label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
            </div>
        </div>
    )
}

export const Sizes = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '500px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Size Variants</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Input label="Small Input" size="sm" placeholder="Small size input" />
                    <Input label="Medium Input (Default)" size="md" placeholder="Medium size input" />
                    <Input label="Large Input" size="lg" placeholder="Large size input" />
                </div>
            </div>
        </div>
    )
}

export const Variants = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '500px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Style Variants</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Input label="Default Variant" variant="default" placeholder="Default border style" />
                    <Input label="Filled Variant" variant="filled" placeholder="Filled background style" />
                    <Input label="Ghost Variant" variant="ghost" placeholder="Minimal underline style" />
                </div>
            </div>
        </div>
    )
}

export const WithIcons = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '500px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Icons and Addons</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Input 
                        label="Search" 
                        type="search"
                        placeholder="Search anything..." 
                        prependIcon="🔍"
                    />
                    <Input 
                        label="Website URL" 
                        type="url"
                        placeholder="example.com" 
                        prependText="https://"
                        appendText=".com"
                    />
                    <Input 
                        label="Price" 
                        type="number"
                        placeholder="0.00" 
                        prependText="$"
                        appendText="USD"
                    />
                    <Input 
                        label="Email with validation" 
                        type="email"
                        placeholder="user@example.com" 
                        prependIcon="📧"
                        appendIcon="✅"
                    />
                </div>
            </div>
        </div>
    )
}

export const States = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '500px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Input States</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Input 
                        label="Normal State" 
                        placeholder="Type something..." 
                        helpText="This is a help text to guide the user"
                    />
                    <Input 
                        label="Loading State" 
                        placeholder="Processing..." 
                        loading
                        helpText="Input is currently processing"
                    />
                    <Input 
                        label="Disabled State" 
                        placeholder="Cannot edit" 
                        disabled
                        helpText="This field is disabled"
                    />
                    <Input 
                        label="Required Field" 
                        placeholder="Enter required value" 
                        required
                        helpText="This field is required"
                    />
                    <Input 
                        label="Error State" 
                        placeholder="Invalid input" 
                        errorText="This field contains an error"
                        helpText="Please correct the error above"
                    />
                </div>
            </div>
        </div>
    )
}

export const Colors = () => {
    const { toggleTheme } = useThemeMode();
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '500px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Color Variants</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {colors.map(color => (
                        <Input 
                            key={color}
                            label={`${color.charAt(0).toUpperCase() + color.slice(1)} Input`}
                            placeholder={`${color} colored input`}
                            color={color}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const FormExample = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Registration Form</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <Input 
                        label="First Name" 
                        placeholder="John" 
                        required
                    />
                    <Input 
                        label="Last Name" 
                        placeholder="Doe" 
                        required
                    />
                    <div style={{ gridColumn: '1 / -1' }}>
                        <Input 
                            label="Email Address" 
                            type="email"
                            placeholder="john.doe@example.com" 
                            prependIcon="📧"
                            required
                            helpText="We'll use this for account notifications"
                        />
                    </div>
                    <Input 
                        label="Password" 
                        type="password"
                        placeholder="Enter password" 
                        required
                        helpText="At least 8 characters"
                    />
                    <Input 
                        label="Confirm Password" 
                        type="password"
                        placeholder="Confirm password" 
                        required
                    />
                    <div style={{ gridColumn: '1 / -1' }}>
                        <Input 
                            label="Website (Optional)" 
                            type="url"
                            placeholder="your-website" 
                            prependText="https://"
                            appendText=".com"
                            helpText="Your personal or company website"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const DashboardInputs = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '600px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Dashboard Controls</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <Input 
                        label="Search Users" 
                        type="search"
                        placeholder="Search by name or email..." 
                        prependIcon="🔍"
                        size="sm"
                    />
                    <Input 
                        label="Filter by Date" 
                        type="date"
                        size="sm"
                    />
                    <Input 
                        label="Budget Range" 
                        type="number"
                        placeholder="0" 
                        prependText="$"
                        appendText="USD"
                        size="sm"
                    />
                    <Input 
                        label="API Endpoint" 
                        type="url"
                        placeholder="api/v1/endpoint" 
                        prependText="https://api.example.com/"
                        size="sm"
                        variant="filled"
                    />
                </div>
            </div>

            <div>
                <h3>Settings Form</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Input 
                        label="Organization Name" 
                        placeholder="Acme Corporation" 
                        prependIcon="🏢"
                    />
                    <Input 
                        label="Contact Email" 
                        type="email"
                        placeholder="contact@acme.com" 
                        prependIcon="📧"
                        helpText="Primary contact for system notifications"
                    />
                    <Input 
                        label="Slack Webhook URL" 
                        type="url"
                        placeholder="hooks.slack.com/..." 
                        prependText="https://"
                        helpText="Optional: Receive notifications in Slack"
                    />
                </div>
            </div>
        </div>
    )
}

export const Interactive = (args) => {
    return (
        <div style={{ padding: '24px', maxWidth: '400px' }}>
            <Input {...args} />
        </div>
    )
}

Interactive.args = {
    label: "Interactive Input",
    type: "text",
    placeholder: "Type something...",
    size: "md",
    variant: "default",
    radius: "md",
    helpText: "This is a help text",
    errorText: "",
    disabled: false,
    loading: false,
    required: false
}
