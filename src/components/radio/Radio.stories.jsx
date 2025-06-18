import Radio from "./Radio";
import '../../css/theme.css';
import useThemeMode from '../../hooks/useThemeMode';
import { useForm } from "react-hook-form";

export default {
    title: "Components/Radio",
    component: Radio,
};


export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div className="flex flex-col gap-4">
            <button onClick={toggleTheme}>cambiar</button>
            <Radio id="radio1" name="radio" value="option1" color="danger" label="Option 1" />
            <Radio id="radio2" name="radio" value="option2" color="lime" label="Option 2" />
            <Radio id="radio3" name="radio" value="option3" color="indigo" label="Option 3" />
            <Radio id="radio1" disabled name="radio" value="option1" color="danger" label="Option 1" />
            <Radio id="radio2" disabled name="radio" value="option2" color="lime" label="Option 2" />
            <Radio id="radio3" disabled name="radio" value="option3" color="indigo" label="Option 3" />
        </div>
    )
}

export const Form = () => {
    const form = useForm()
    
    const submitNativ = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
    }
    
    const submitHook = (data) => {
        console.log(data)
    }




    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <form onSubmit={submitNativ} >
                <h1>nativo</h1>
                <Radio id="radio1" name="radio" value="option1" color="danger" label="Option 1" />
                <Radio id="radio2" name="radio" value="option2" color="lime" label="Option 2" />
                <Radio id="radio3" name="radio" value="option3" color="indigo" label="Option 3" />
                <button>enviar</button>
            </form>
            <form onSubmit={form.handleSubmit(submitHook)}> 
                <h1>hook form</h1>
                <Radio id="radio1" {...form.register('radioHook')} value="option1" color="danger" label="Option 1" />
                <Radio id="radio2" {...form.register('radioHook')} value="option2" color="lime" label="Option 2" />
                <Radio id="radio3" {...form.register('radioHook')} value="option3" color="indigo" label="Option 3" />
                <button>enviar</button>
            </form>

        </div>
    )

}