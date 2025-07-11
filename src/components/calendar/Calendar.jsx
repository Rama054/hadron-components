import React, { useState } from 'react';
import '../../css/calendar.css';
import { MdChevronLeft, MdChevronRight, MdCalendarMonth, MdSchedule } from 'react-icons/md';
import Button from '../button/Button';

const Calendar = ({
    events = [],
    onDateClick,
    onEventClick,
    initialDate = new Date(),
    initialViewMode = 'month',
    timeSlotInterval = 30,
    workingHours = { start: '08:00', end: '22:00' }
}) => {
    const [currentDate, setCurrentDate] = useState(initialDate);
    const [viewMode, setViewMode] = useState(initialViewMode);

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    // Generar horarios según el intervalo configurado
    const generateTimeSlots = () => {
        const slots = [];
        const startHour = parseInt(workingHours.start.split(':')[0]);
        const startMinute = parseInt(workingHours.start.split(':')[1]);
        const endHour = parseInt(workingHours.end.split(':')[0]);
        const endMinute = parseInt(workingHours.end.split(':')[1]);
        
        // Convertir todo a minutos para facilitar cálculos
        const startTotalMinutes = startHour * 60 + startMinute;
        const endTotalMinutes = endHour * 60 + endMinute;
        
        // Generar slots según el intervalo
        for (let minutes = startTotalMinutes; minutes <= endTotalMinutes; minutes += timeSlotInterval) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            const timeString = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
            slots.push(timeString);
        }
        
        return slots;
    };

    const timeSlots = generateTimeSlots();

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const handleDateClick = (date) => {
        if (!date) return;

        if (onDateClick) {
            onDateClick(date, getEventosForDate(date));
        } else {
            // Comportamiento por defecto si no se proporciona handler
            const eventos = getEventosForDate(date);
            const fechaFormateada = date.toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            if (eventos.length > 0) {
                const eventosTexto = eventos.map(e => {
                    const esMultiDia = e.initDate && e.endDate;
                    
                    if (esMultiDia) {
                        return `• ${e.initDate} - ${e.endDate} (${e.initHour} - ${e.endHour}): ${e.title} (${e.description})`;
                    }
                    return `• ${e.initHour} - ${e.endHour}: ${e.title} (${e.description})`;
                }).join('\n');
                alert(`Eventos para ${fechaFormateada}:\n\n${eventosTexto}`);
            } else {
                alert(`No hay eventos programados para ${fechaFormateada}`);
            }
        }
    };

    const handleEventClick = (evento) => {
        if (onEventClick) {
            onEventClick(evento);
        }
    };

    const getEventosForDate = (date) => {
        if (!date) return [];
        const dateKey = formatDate(date);
        
        return events.filter(evento => {
            // Verificar si es evento de un día
            if (evento.date) {
                return evento.date === dateKey;
            }
            
            // Verificar si es evento multi-día
            if (evento.initDate && evento.endDate) {
                const fechaInicio = new Date(evento.initDate);
                const fechaFin = new Date(evento.endDate);
                return date >= fechaInicio && date <= fechaFin;
            }
            
            return false;
        });
    };

    const navigateMonth = (direction) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + direction);
            return newDate;
        });
    };

    const navigateWeek = (direction) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(prevDate.getDate() + (direction * 7));
            return newDate;
        });
    };

    const getWeekDates = (date) => {
        const startOfWeek = new Date(date);
        const day = startOfWeek.getDay();
        const diff = startOfWeek.getDate() - day;
        startOfWeek.setDate(diff);

        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const weekDate = new Date(startOfWeek);
            weekDate.setDate(startOfWeek.getDate() + i);
            weekDates.push(weekDate);
        }
        return weekDates;
    };

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];

        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(new Date(year, month, -startingDayOfWeek + i + 1)); // Días del mes anterior
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }

        // Completar el mes con días vacíos hasta completar la semana
        const remainingDays = 7 - (days.length % 7);
        for (let i = 0; i < remainingDays && remainingDays < 7; i++) {
            days.push(new Date(year, month + 1, i + 1)); // Días del mes siguiente
        }

        return days;
    };

    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Nueva función para calcular la posición y altura exacta de un evento
    const getEventPositionAndHeight = (evento) => {
        const workingStartMinutes = timeToMinutes(workingHours.start);
        const workingEndMinutes = timeToMinutes(workingHours.end);
        
        const eventoStartMinutes = timeToMinutes(evento.initHour);
        const eventoEndMinutes = timeToMinutes(evento.endHour);
        
        // Altura de cada fila de tiempo (incluyendo border)
        const timeRowHeight = 60; // Altura de cada fila
        const borderWidth = 1; // Border entre filas
        
        // Calcular en qué slot de tiempo debería empezar el evento
        const minutesFromStart = eventoStartMinutes - workingStartMinutes;
        const eventDurationMinutes = eventoEndMinutes - eventoStartMinutes;
        
        // Calcular la posición exacta considerando los bordes
        const minutesPerSlot = timeSlotInterval;
        const slotsFromStart = minutesFromStart / minutesPerSlot;
        const wholeSlotsFromStart = Math.floor(slotsFromStart);
        const partialSlotMinutes = minutesFromStart % minutesPerSlot;
        
        // Posición top: slots completos + porción del slot actual + bordes acumulados
        const topPosition = (wholeSlotsFromStart * timeRowHeight) + 
                           (partialSlotMinutes / minutesPerSlot * timeRowHeight) + 
                           (wholeSlotsFromStart * borderWidth);
        
        // Altura del evento considerando bordes internos
        const eventSlots = eventDurationMinutes / minutesPerSlot;
        const wholeEventSlots = Math.floor(eventSlots);
        const partialEventSlot = eventDurationMinutes % minutesPerSlot;
        
        const eventHeight = (wholeEventSlots * timeRowHeight) + 
                           (partialEventSlot / minutesPerSlot * timeRowHeight) + 
                           (Math.max(0, wholeEventSlots - 1) * borderWidth); // Bordes internos
        
        return {
            top: Math.max(0, topPosition),
            height: Math.max(30, eventHeight) // Altura mínima de 30px
        };
    };

    // Función mejorada para verificar si un evento debe ser mostrado
    const shouldShowEventAtTimeSlot = (evento, timeSlot) => {
        const slotMinutes = timeToMinutes(timeSlot);
        const eventoStartMinutes = timeToMinutes(evento.initHour);
        const eventoEndMinutes = timeToMinutes(evento.endHour);
        
        // El evento se muestra si el slot está dentro del rango del evento
        return slotMinutes >= eventoStartMinutes && slotMinutes < eventoEndMinutes;
    };

    const getEventoAtTimeSlot = (date, timeSlot) => {
        const eventos = getEventosForDate(date);
        const slotMinutes = timeToMinutes(timeSlot);

        return eventos.find(evento => {
            // Para eventos multi-día
            if (evento.initDate && evento.endDate) {
                const fechaInicio = new Date(evento.initDate);
                const fechaFin = new Date(evento.endDate);
                const esEventoMultiDia = fechaInicio.getTime() !== fechaFin.getTime();

                if (esEventoMultiDia) {
                    // Si es el primer día del evento multi-día
                    if (date.toDateString() === fechaInicio.toDateString()) {
                        const inicioMinutes = timeToMinutes(evento.initHour);
                        return slotMinutes >= inicioMinutes;
                    }
                    // Si es el último día del evento multi-día
                    else if (date.toDateString() === fechaFin.toDateString()) {
                        const finMinutes = timeToMinutes(evento.endHour);
                        return slotMinutes < finMinutes;
                    }
                    // Si es un día intermedio
                    else {
                        return true; // Todo el día está ocupado
                    }
                }
            }

            // Para eventos de un solo día, usar la función de verificación
            return shouldShowEventAtTimeSlot(evento, timeSlot);
        });
    };

    const renderMonthView = () => {
        const days = getDaysInMonth(currentDate);
        const today = new Date();

        return (
            <div className="q-calendar__month-grid">
                {days.map((day, index) => {
                    const allEventos = getEventosForDate(day);
                    const isToday = day && day.toDateString() === today.toDateString();
                    const isDayInCurrentMonth = day && day.getMonth() === currentDate.getMonth();

                    return (
                        <div
                            key={index}
                            onClick={() => handleDateClick(day)}
                            className={`q-calendar__day ${isDayInCurrentMonth ? 'q-calendar__day--valid' : 'q-calendar__day--invalid'} ${isToday ? 'q-calendar__day--today' : ''}`}
                        >
                            {day && (
                                <>
                                    <div className={`q-calendar__day-number ${isToday && 'q-calendar__day-number--today'}`}>
                                        {day.getDate()}
                                    </div>

                                    {allEventos.length > 0 && (
                                        <div className="q-calendar__events">
                                            {allEventos.slice(0, 2).map((evento, eventoIndex) => {
                                                const esMultiDia = evento.initDate && evento.endDate && 
                                                    new Date(evento.initDate).getTime() !== new Date(evento.endDate).getTime();

                                                return (
                                                    <div
                                                        key={evento.id}
                                                        className={`q-calendar__event`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleEventClick(evento);
                                                        }}
                                                    >
                                                        {esMultiDia ? '📅' : evento.initHour} {evento.title}
                                                    </div>
                                                );
                                            })}
                                            {allEventos.length > 2 && (
                                                <div className="q-calendar__more-events">
                                                    +{allEventos.length - 2} más
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderWeekView = () => {
        const weekDates = getWeekDates(currentDate);
        const today = new Date();

        return (
            <div className="q-calendar__week-view">
                <div className="q-calendar__week-container">
                    {/* Header con los días de la semana */}
                    <div className="q-calendar__week-header">
                        <div className="q-calendar__time-header">Hora</div>
                        {weekDates.map((date, index) => {
                            const isToday = date.toDateString() === today.toDateString();
                            return (
                                <div
                                    key={index}
                                    className={`q-calendar__week-day-header ${isToday ? 'q-calendar__week-day-header--today' : ''}`}
                                    onClick={() => handleDateClick(date)}
                                >
                                    <div className="q-calendar__week-day-name">{diasSemana[date.getDay()]}</div>
                                    <div className={`q-calendar__week-day-number ${isToday ? 'q-calendar__week-day-number--today' : ''}`}>
                                        {date.getDate()}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Grid con horarios */}
                    <div className="q-calendar__week-grid" style={{ position: 'relative' }}>
                        {timeSlots.map((time, timeIndex) => (
                            <div key={timeIndex} className="q-calendar__time-row">
                                {/* Columna de hora */}
                                <div className="q-calendar__time-slot">
                                    <MdSchedule className="q-calendar__time-icon" />
                                    {time}
                                </div>

                                {/* Columnas de días */}
                                {weekDates.map((date, dateIndex) => {
                                    const evento = getEventoAtTimeSlot(date, time);
                                    const isToday = date.toDateString() === today.toDateString();

                                    return (
                                        <div
                                            key={dateIndex}
                                            className={`q-calendar__time-cell ${evento ? (evento.initDate && evento.endDate ? 'q-calendar__time-cell--multi-day' : 'q-calendar__time-cell--with-event') : ''} ${isToday ? 'q-calendar__time-cell--today' : ''}`}
                                            onClick={() => handleDateClick(date)}
                                            style={{ position: 'relative' }}
                                        >
                                            {/* Solo renderizar eventos en el primer slot del día si es el primer slot de tiempo */}
                                            {timeIndex === 0 && getEventosForDate(date).map((eventoItem) => {
                                                const esMultiDia = eventoItem.initDate && eventoItem.endDate && 
                                                    new Date(eventoItem.initDate).getTime() !== new Date(eventoItem.endDate).getTime();
                                                
                                                if (esMultiDia) {
                                                    // Lógica para eventos multi-día
                                                    return (
                                                        <div
                                                            key={`multi-${eventoItem.id}`}
                                                            className="q-calendar__time-event q-calendar__time-event--multi-day"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleEventClick(eventoItem);
                                                            }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: '4px',
                                                                right: '4px',
                                                                height: '100%',
                                                                zIndex: 10
                                                            }}
                                                        >
                                                            <div className="q-calendar__time-event-client">{eventoItem.title}</div>
                                                            <div className="q-calendar__time-event-service">{eventoItem.description}</div>
                                                            <div className="q-calendar__time-event-time">
                                                                {`Día ${Math.ceil((date - new Date(eventoItem.initDate)) / (1000 * 60 * 60 * 24)) + 1}`}
                                                            </div>
                                                        </div>
                                                    );
                                                } else {
                                                    // Para eventos de un solo día, calcular posición exacta
                                                    const { top, height } = getEventPositionAndHeight(eventoItem);
                                                    
                                                    return (
                                                        <div
                                                            key={`single-${eventoItem.id}`}
                                                            className="q-calendar__time-event q-calendar__time-event--single-day"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleEventClick(eventoItem);
                                                            }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: `${top}px`,
                                                                left: '4px',
                                                                right: '4px',
                                                                height: `${height}px`,
                                                                zIndex: 10,
                                                                minHeight: '40px'
                                                            }}
                                                        >
                                                            <div className="q-calendar__time-event-client">{eventoItem.title}</div>
                                                            <div className="q-calendar__time-event-service">{eventoItem.description}</div>
                                                            <div className="q-calendar__time-event-time">
                                                                {`${eventoItem.initHour} - ${eventoItem.endHour}`}
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="q-calendar">
            {/* Header del calendario */}
            <div className="q-calendar__header">
                <div className="q-calendar__navigation">
                    <Button
                        onClick={() => viewMode === 'month' ? navigateMonth(-1) : navigateWeek(-1)}
                        icon
                        variant="ghost"
                        radius='full'
                        size='sm'
                    >
                        <MdChevronLeft size={20} />
                    </Button>

                    <h2 className="q-calendar__title">
                        {viewMode === 'month'
                            ? `${meses[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                            : `Semana del ${getWeekDates(currentDate)[0].getDate()} al ${getWeekDates(currentDate)[6].getDate()} de ${meses[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                        }
                    </h2>
                    <Button
                        onClick={() => viewMode === 'month' ? navigateMonth(1) : navigateWeek(1)}
                        icon
                        variant="ghost"
                        radius='full'
                        size='sm'
                    >
                        <MdChevronRight size={20} />
                    </Button>
                </div>

                {/* Selector de vista */}
                <div className="q-calendar__view-selector">
                    <Button
                        size='sm'
                        radius='sm'
                        onClick={() => setViewMode('month')}
                        variant={viewMode === 'month' ? 'solid' : 'outline'}
                    >
                        <MdCalendarMonth size={20} />
                        <span>Mes</span>
                    </Button>
                    <Button
                        size='sm'
                        radius='sm'
                        onClick={() => setViewMode('week')}
                        variant={viewMode === 'week' ? 'solid' : 'outline'}
                    >
                        <MdSchedule size={20} />
                        <span>Semana</span>
                    </Button>
                </div>
            </div>

            {/* Días de la semana (solo en vista mensual) */}
            {viewMode === 'month' && (
                <div className="q-calendar__weekdays">
                    {diasSemana.map(dia => (
                        <div key={dia} className="q-calendar__weekday">
                            {dia}
                        </div>
                    ))}
                </div>
            )}

            {/* Renderizar vista según el modo */}
            {viewMode === 'month' ? renderMonthView() : renderWeekView()}
        </div>
    );
};

export default Calendar;