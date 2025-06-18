import React, { useState } from 'react';
import Chips from './Chips';

export default {
    title: 'Components/Chips',
    component: Chips,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        value: {
            control: 'object',
            description: 'Array de valores iniciales'
        },
        label: {
            control: 'text',
            description: 'Etiqueta del campo'
        },
        placeholder: {
            control: 'text',
            description: 'Texto de placeholder'
        },
        disabled: {
            control: 'boolean',
            description: 'Estado deshabilitado'
        },
        error: {
            control: 'text',
            description: 'Estado de error o mensaje'
        },
        helpText: {
            control: 'text',
            description: 'Texto de ayuda'
        },
        chipColor: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
            description: 'Color de los chips'
        },
        chipVariant: {
            control: 'select',
            options: ['solid', 'outline', 'soft', 'ghost'],
            description: 'Variante visual de los chips'
        },
        chipRadius: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'full'],
            description: 'Radio de borde de los chips'
        },
        maxChips: {
            control: 'number',
            description: 'Número máximo de chips permitidos'
        },
        allowDuplicates: {
            control: 'boolean',
            description: 'Permite valores duplicados'
        },
        separator: {
            control: 'select',
            options: ['enter', 'comma', 'tab', 'space', 'blur', 'paste'],
            description: 'Tecla o acción que crea un chip'
        },
        trimValues: {
            control: 'boolean',
            description: 'Elimina espacios en blanco de los valores'
        }
    },
};

export const Default = {
    args: {
        label: "Etiquetas",
        placeholder: "Escribe y presiona Enter...",
        value: [],
    },
};

export const WithInitialValues = {
    args: {
        label: "Tecnologías",
        placeholder: "Agregar tecnología...",
        value: ['React', 'TypeScript', 'Sass'],
        chipColor: 'primary',
    },
};

export const DifferentColors = () => {
    const [values, setValues] = useState({
        primary: ['React', 'Vue'],
        secondary: ['JavaScript', 'CSS'],
        success: ['Completado', 'Aprobado'],
        warning: ['Pendiente', 'Revisar'],
        danger: ['Error', 'Rechazado'],
        info: ['Info', 'Nota']
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {Object.entries(values).map(([color, chipValues]) => (
                <Chips
                    key={color}
                    label={`Color: ${color}`}
                    value={chipValues}
                    chipColor={color}
                    onChange={(newValues) => setValues(prev => ({ ...prev, [color]: newValues }))}
                    placeholder={`Agregar chip ${color}...`}
                />
            ))}
        </div>
    );
};

export const DifferentVariants = () => {
    const [values, setValues] = useState({
        solid: ['Solid', 'Chip'],
        outline: ['Outline', 'Chip'],
        soft: ['Soft', 'Chip'],
        ghost: ['Ghost', 'Chip']
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {Object.entries(values).map(([variant, chipValues]) => (
                <Chips
                    key={variant}
                    label={`Variante: ${variant}`}
                    value={chipValues}
                    chipVariant={variant}
                    chipColor="primary"
                    onChange={(newValues) => setValues(prev => ({ ...prev, [variant]: newValues }))}
                    placeholder={`Agregar chip ${variant}...`}
                />
            ))}
        </div>
    );
};

export const DifferentRadius = () => {
    const [values, setValues] = useState({
        none: ['Sin', 'Radio'],
        sm: ['Radio', 'Pequeño'],
        md: ['Radio', 'Mediano'],
        lg: ['Radio', 'Grande'],
        full: ['Radio', 'Completo']
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {Object.entries(values).map(([radius, chipValues]) => (
                <Chips
                    key={radius}
                    label={`Radio: ${radius}`}
                    value={chipValues}
                    chipRadius={radius}
                    chipColor="primary"
                    onChange={(newValues) => setValues(prev => ({ ...prev, [radius]: newValues }))}
                    placeholder={`Agregar chip ${radius}...`}
                />
            ))}
        </div>
    );
};

export const WithValidation = () => {
    const [emails, setEmails] = useState(['admin@example.com']);
    const [tags, setTags] = useState(['javascript']);

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const validateTag = (value) => {
        return value.length >= 3 && /^[a-zA-Z]+$/.test(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Chips
                label="Emails (validación de formato)"
                value={emails}
                onChange={setEmails}
                validateChip={validateEmail}
                placeholder="ejemplo@correo.com"
                helpText="Solo acepta emails válidos"
                chipColor="info"
            />
            
            <Chips
                label="Tags (mínimo 3 caracteres, solo letras)"
                value={tags}
                onChange={setTags}
                validateChip={validateTag}
                placeholder="javascript, react, vue..."
                helpText="Mínimo 3 caracteres, solo letras"
                chipColor="success"
            />
        </div>
    );
};

export const DifferentSeparators = () => {
    const [enterChips, setEnterChips] = useState(['Enter']);
    const [commaChips, setCommaChips] = useState(['Comma']);
    const [tabChips, setTabChips] = useState(['Tab']);
    const [spaceChips, setSpaceChips] = useState(['Space']);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Chips
                label="Separador: Enter"
                value={enterChips}
                onChange={setEnterChips}
                separator="enter"
                placeholder="Presiona Enter para crear chip"
                helpText="Presiona Enter para agregar"
            />
            
            <Chips
                label="Separador: Coma"
                value={commaChips}
                onChange={setCommaChips}
                separator="comma"
                placeholder="Escribe y usa coma para crear chip"
                helpText="Usa coma (,) para agregar"
            />
            
            <Chips
                label="Separador: Tab"
                value={tabChips}
                onChange={setTabChips}
                separator="tab"
                placeholder="Presiona Tab para crear chip"
                helpText="Presiona Tab para agregar"
            />
            
            <Chips
                label="Separador: Espacio"
                value={spaceChips}
                onChange={setSpaceChips}
                separator="space"
                placeholder="Usa espacio para crear chip"
                helpText="Usa espacio para agregar"
            />
        </div>
    );
};

export const WithLimitations = () => {
    const [limitedChips, setLimitedChips] = useState(['Uno', 'Dos']);
    const [noDuplicates, setNoDuplicates] = useState(['Único']);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Chips
                label="Máximo 5 chips"
                value={limitedChips}
                onChange={setLimitedChips}
                maxChips={5}
                placeholder="Máximo 5 chips..."
                helpText={`${limitedChips.length}/5 chips usados`}
                chipColor="warning"
            />
            
            <Chips
                label="Sin duplicados"
                value={noDuplicates}
                onChange={setNoDuplicates}
                allowDuplicates={false}
                placeholder="Sin valores duplicados..."
                helpText="No se permiten valores duplicados"
                chipColor="secondary"
            />
        </div>
    );
};

export const States = () => {
    const [normalChips, setNormalChips] = useState(['Normal']);
    const [disabledChips] = useState(['Deshabilitado', 'Solo lectura']);
    const [errorChips, setErrorChips] = useState(['Error']);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Chips
                label="Estado normal"
                value={normalChips}
                onChange={setNormalChips}
                placeholder="Estado normal..."
                helpText="Campo en estado normal"
            />
            
            <Chips
                label="Estado deshabilitado"
                value={disabledChips}
                disabled={true}
                placeholder="Campo deshabilitado..."
                helpText="Campo deshabilitado"
            />
            
            <Chips
                label="Estado de error"
                value={errorChips}
                onChange={setErrorChips}
                error="Este campo contiene errores"
                placeholder="Campo con error..."
                chipColor="danger"
            />
        </div>
    );
};

export const FormIntegration = () => {
    const [formData, setFormData] = useState({
        skills: ['React', 'JavaScript'],
        interests: ['Web Development'],
        tags: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Datos del formulario:\n' + JSON.stringify(formData, null, 2));
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
            <h3>Formulario con Chips</h3>
            
            <Chips
                label="Habilidades técnicas"
                name="skills"
                value={formData.skills}
                onChange={(skills) => setFormData(prev => ({ ...prev, skills }))}
                placeholder="Agregar habilidad..."
                helpText="Presiona Enter para agregar cada habilidad"
                chipColor="primary"
            />
            
            <Chips
                label="Intereses"
                name="interests"
                value={formData.interests}
                onChange={(interests) => setFormData(prev => ({ ...prev, interests }))}
                placeholder="Agregar interés..."
                chipColor="secondary"
                maxChips={10}
            />
            
            <Chips
                label="Tags opcionales"
                name="tags"
                value={formData.tags}
                onChange={(tags) => setFormData(prev => ({ ...prev, tags }))}
                placeholder="Agregar tag..."
                chipColor="info"
                chipVariant="outline"
            />
            
            <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
                Ver datos del formulario
            </button>
        </form>
    );
};
