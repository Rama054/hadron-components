import Calendar from "./Calendar";
import useThemeMode from '../../hooks/useThemeMode';
import '../../css/theme.css';

// Ejemplos básicos
const basicEvents = [
    // Eventos de un día
    { id: 1, date: '2025-07-10', initHour: '09:00', endHour: '11:00', title: 'Team Meeting', description: 'Weekly team sync' },
    { id: 2, date: '2025-07-10', initHour: '14:30', endHour: '15:45', title: 'Client Call', description: 'Project discussion' },
    { id: 3, date: '2025-07-11', initHour: '10:00', endHour: '12:00', title: 'Workshop', description: 'Training session' },
    
    // Eventos multi-día
    { id: 100, initDate: '2025-07-15', endDate: '2025-07-17', initHour: '09:00', endHour: '17:00', title: 'Conference', description: 'Annual tech conference' }
];

const preciseTimeEvents = [
    { id: 1, date: '2025-07-10', initHour: '08:05', endHour: '08:47', title: 'Morning Brief', description: 'Quick sync' },
    { id: 2, date: '2025-07-10', initHour: '10:15', endHour: '12:37', title: 'Deep Work', description: 'Focused session' },
    { id: 3, date: '2025-07-10', initHour: '13:22', endHour: '13:33', title: 'Quick Check', description: '11-minute review' },
    { id: 4, date: '2025-07-11', initHour: '09:45', endHour: '11:18', title: 'Code Review', description: 'Sprint review' }
];

export default {
    title: "Components/Calendar",
    component: Calendar,
    parameters: {
        docs: {
            description: {
                component: 'Componente de calendario con vistas mensual y semanal. Soporta eventos de un día y multi-día con horarios precisos.'
            }
        }
    },
    argTypes: {
        events: { control: 'object', description: 'Array de eventos' },
        onDateClick: { action: 'date-clicked' },
        onEventClick: { action: 'event-clicked' },
        initialViewMode: { control: { type: 'select' }, options: ['month', 'week'] },
        timeSlotInterval: { control: { type: 'select' }, options: [15, 30, 60] }
    }
};

export const Default = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ padding: '24px' }}>
            <button onClick={toggleTheme} style={{ marginBottom: '24px' }}>Toggle Theme</button>
            <h3>Calendario Básico</h3>
            <Calendar />
        </div>
    )
}

export const WithBasicEvents = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ padding: '24px' }}>
            <button onClick={toggleTheme} style={{ marginBottom: '24px' }}>Toggle Theme</button>
            <h3>Con Eventos Básicos</h3>
            <p>Eventos de un día y multi-día con horarios estándar.</p>
            <Calendar 
                events={basicEvents}
                initialDate={new Date(2025, 6, 10)}
            />
        </div>
    )
}

export const PreciseTimingEvents = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ padding: '24px' }}>
            <button onClick={toggleTheme} style={{ marginBottom: '24px' }}>Toggle Theme</button>
            <h3>Horarios Precisos</h3>
            <p>Eventos con horarios exactos como 08:05, 12:37, etc.</p>
            <Calendar 
                events={preciseTimeEvents}
                initialDate={new Date(2025, 6, 10)}
                initialViewMode="week"
            />
        </div>
    )
}

export const WeekView = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ padding: '24px' }}>
            <button onClick={toggleTheme} style={{ marginBottom: '24px' }}>Toggle Theme</button>
            <h3>Vista Semanal</h3>
            <p>Calendario iniciando en vista semanal.</p>
            <Calendar 
                events={basicEvents}
                initialDate={new Date(2025, 6, 10)}
                initialViewMode="week"
            />
        </div>
    )
}

export const FifteenMinuteSlots = () => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ padding: '24px' }}>
            <button onClick={toggleTheme} style={{ marginBottom: '24px' }}>Toggle Theme</button>
            <h3>Intervalos de 15 Minutos</h3>
            <p>Calendario con slots de 15 minutos para consultas médicas o servicios express.</p>
            <Calendar 
                events={preciseTimeEvents}
                initialDate={new Date(2025, 6, 10)}
                timeSlotInterval={60}
                initialViewMode="week"
            />
        </div>
    )
}

export const SixtyMinuteSlots = () => {
    const { toggleTheme } = useThemeMode();

    const hourlyEvents = [
        { id: 1, date: '2025-07-10', initHour: '09:00', endHour: '10:00', title: 'Meeting Block 1', description: 'First hour session' },
        { id: 2, date: '2025-07-10', initHour: '11:00', endHour: '13:00', title: 'Workshop', description: 'Two hour workshop' },
        { id: 3, date: '2025-07-10', initHour: '15:00', endHour: '16:00', title: 'Review Session', description: 'Final hour review' }
    ];

    return (
        <div style={{ padding: '24px' }}>
            <button onClick={toggleTheme} style={{ marginBottom: '24px' }}>Toggle Theme</button>
            <h3>Intervalos de 60 Minutos</h3>
            <p>Calendario con slots de una hora para sesiones largas o bloques de tiempo.</p>
            <Calendar 
                events={hourlyEvents}
                initialDate={new Date(2025, 6, 10)}
                timeSlotInterval={60}
                initialViewMode="week"
            />
        </div>
    )
}

export const Interactive = (args) => {
    const { toggleTheme } = useThemeMode();

    return (
        <div style={{ padding: '24px' }}>
            <button onClick={toggleTheme} style={{ marginBottom: '24px' }}>Toggle Theme</button>
            <h3>Calendario Interactivo</h3>
            <p>Usa los controles para modificar las propiedades.</p>
            <Calendar {...args} />
        </div>
    )
}

Interactive.args = {
    events: basicEvents,
    initialDate: new Date(2025, 6, 10),
    initialViewMode: 'month',
    timeSlotInterval: 30,
    workingHours: { start: '08:00', end: '20:00' }
}