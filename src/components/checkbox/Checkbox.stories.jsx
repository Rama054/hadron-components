import '../../css/theme.css';
import Checkbox from './Checkbox';
import useThemeMode from '../../hooks/useThemeMode';

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg']
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Basic Checkboxes</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Checkbox label="Accept terms and conditions" />
                    <Checkbox label="Subscribe to newsletter" checked />
                    <Checkbox label="Disabled option" disabled />
                    <Checkbox label="Disabled checked" checked disabled />
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Checkbox label="Small checkbox" size="sm" checked />
                    <Checkbox label="Medium checkbox (default)" size="md" checked />
                    <Checkbox label="Large checkbox" size="lg" checked />
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {colors.map(color => (
                        <Checkbox 
                            key={color} 
                            label={`${color.charAt(0).toUpperCase() + color.slice(1)} checkbox`}
                            color={color}
                            checked
                        />
                    ))}
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
                <h3>Indeterminate State</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Checkbox label="Indeterminate checkbox" indeterminate />
                    <Checkbox label="Indeterminate primary" indeterminate color="primary" />
                    <Checkbox label="Indeterminate success" indeterminate color="success" />
                </div>
            </div>

            <div>
                <h3>With Help Text</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Checkbox 
                        label="Marketing emails" 
                        helpText="Receive updates about new products and features"
                    />
                    <Checkbox 
                        label="Required field" 
                        helpText="This field is required to continue"
                        required
                    />
                </div>
            </div>

            <div>
                <h3>Error State</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Checkbox 
                        label="Accept terms" 
                        errorText="You must accept the terms to continue"
                        required
                    />
                    <Checkbox 
                        label="Privacy policy" 
                        errorText="Please review and accept our privacy policy"
                        helpText="Read our privacy policy for more information"
                    />
                </div>
            </div>
        </div>
    )
}

export const FormExample = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
            <button onClick={toggleTheme} style={{ width: 'fit-content' }}>Toggle Theme</button>
            
            <div>
                <h3>Registration Form</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
                    <Checkbox 
                        label="I agree to the Terms of Service" 
                        helpText="By checking this box, you agree to our terms and conditions"
                        required
                    />
                    <Checkbox 
                        label="Subscribe to our newsletter" 
                        helpText="Get updates about new features and products"
                    />
                    <Checkbox 
                        label="Enable two-factor authentication" 
                        helpText="Recommended for better security"
                        color="success"
                    />
                    <Checkbox 
                        label="Share usage analytics" 
                        helpText="Help us improve by sharing anonymous usage data"
                        color="info"
                    />
                </div>
            </div>
        </div>
    )
}

export const Interactive = (args) => {
    return (
        <div style={{ padding: '24px' }}>
            <Checkbox {...args} />
        </div>
    )
}

Interactive.args = {
    label: "Interactive checkbox",
    color: "primary",
    size: "md",
    checked: false,
    disabled: false,
    indeterminate: false,
    helpText: "This is a help text",
    errorText: ""
}
