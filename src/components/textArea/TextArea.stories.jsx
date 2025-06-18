import TextArea from './TextArea';
import { useState } from 'react';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full']
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both']
    }
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  
  return (
    <div style={{ width: '400px' }}>
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Caracteres escritos:</strong> {value.length}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Comentarios',
  placeholder: 'Escribe tus comentarios aquí...',
  name: 'comments'
};

export const WithHelp = Template.bind({});
WithHelp.args = {
  label: 'Descripción del proyecto',
  placeholder: 'Describe tu proyecto...',
  helpText: 'Proporciona una descripción detallada de tu proyecto',
  name: 'description'
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Mensaje',
  placeholder: 'Tu mensaje...',
  errorText: 'Este campo es obligatorio',
  name: 'message'
};

export const Required = Template.bind({});
Required.args = {
  label: 'Feedback',
  placeholder: 'Tu feedback es importante...',
  required: true,
  name: 'feedback'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Campo deshabilitado',
  placeholder: 'No puedes escribir aquí',
  disabled: true,
  value: 'Contenido predefinido',
  name: 'disabled'
};

export const Sizes = {
  render: (args) => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <TextArea
        size="sm"
        label="Tamaño pequeño"
        placeholder="TextArea pequeño..."
        name="small"
      />
      
      <TextArea
        size="md"
        label="Tamaño mediano"
        placeholder="TextArea mediano..."
        name="medium"
      />
      
      <TextArea
        size="lg"
        label="Tamaño grande"
        placeholder="TextArea grande..."
        name="large"
      />
    </div>
  )
};

export const Colors = {
  render: (args) => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <TextArea
        color="primary"
        label="Primary"
        placeholder="Color primary..."
        name="primary"
      />
      
      <TextArea
        color="success"
        label="Success"
        placeholder="Color success..."
        name="success"
      />
      
      <TextArea
        color="warning"
        label="Warning"
        placeholder="Color warning..."
        name="warning"
      />
      
      <TextArea
        color="danger"
        label="Danger"
        placeholder="Color danger..."
        name="danger"
      />
    </div>
  )
};

export const ResizeOptions = {
  render: (args) => (
    <div style={{ width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <TextArea
        resize="none"
        label="Sin redimensión"
        placeholder="No se puede redimensionar..."
        name="none"
      />
      
      <TextArea
        resize="vertical"
        label="Vertical"
        placeholder="Solo vertical..."
        name="vertical"
      />
      
      <TextArea
        resize="horizontal"
        label="Horizontal"
        placeholder="Solo horizontal..."
        name="horizontal"
      />
      
      <TextArea
        resize="both"
        label="Ambas direcciones"
        placeholder="Ambas direcciones..."
        name="both"
      />
    </div>
  )
};

export const WithCharacterCount = {
  render: (args) => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ width: '400px' }}>
        <TextArea
          label="Post en redes sociales"
          placeholder="¿Qué está pasando?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={280}
          showCharacterCount
          helpText="Máximo 280 caracteres"
          name="social-post"
        />
      </div>
    );
  }
};

export const LongForm = {
  render: (args) => {
    const [formData, setFormData] = useState({
      title: '',
      summary: '',
      content: '',
      tags: ''
    });
    
    const updateField = (field) => (e) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };
    
    return (
      <div style={{ width: '600px' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3>Crear nuevo artículo</h3>
          <p>Completa todos los campos para publicar tu artículo</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Título del artículo"
            value={formData.title}
            onChange={updateField('title')}
            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1.1rem' }}
          />
          
          <TextArea
            label="Resumen"
            placeholder="Escribe un breve resumen..."
            value={formData.summary}
            onChange={updateField('summary')}
            rows={3}
            maxLength={200}
            showCharacterCount
            helpText="Resumen que aparecerá en la vista previa"
            name="summary"
          />
          
          <TextArea
            label="Contenido principal"
            placeholder="Escribe el contenido completo del artículo..."
            value={formData.content}
            onChange={updateField('content')}
            rows={8}
            helpText="Contenido detallado del artículo"
            name="content"
          />
          
          <TextArea
            label="Tags"
            placeholder="Etiquetas separadas por comas..."
            value={formData.tags}
            onChange={updateField('tags')}
            rows={2}
            helpText="Ejemplo: javascript, react, tutorial"
            name="tags"
          />
        </div>
        
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <strong>Vista previa del formulario:</strong>
          <pre style={{ fontSize: '0.75rem', marginTop: '0.5rem', overflow: 'auto' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
};

export const ContactForm = {
  render: (args) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const [errors, setErrors] = useState({});
    
    const updateField = (field) => (e) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };
    
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
      if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
      if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';
      if (formData.message.length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Formulario enviado correctamente!');
      }
    };
    
    return (
      <div style={{ width: '500px' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3>Contacto</h3>
          <p>Envíanos tu mensaje y te responderemos pronto</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <input
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={updateField('name')}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '8px', 
                border: `1px solid ${errors.name ? '#ef4444' : '#ccc'}`,
                outline: 'none'
              }}
            />
            {errors.name && <small style={{ color: '#ef4444' }}>{errors.name}</small>}
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={updateField('email')}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                borderRadius: '8px', 
                border: `1px solid ${errors.email ? '#ef4444' : '#ccc'}`,
                outline: 'none'
              }}
            />
            {errors.email && <small style={{ color: '#ef4444' }}>{errors.email}</small>}
          </div>
          
          <input
            type="text"
            placeholder="Asunto (opcional)"
            value={formData.subject}
            onChange={updateField('subject')}
            style={{ 
              padding: '0.75rem', 
              borderRadius: '8px', 
              border: '1px solid #ccc',
              outline: 'none'
            }}
          />
          
          <TextArea
            label="Mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.message}
            onChange={updateField('message')}
            errorText={errors.message}
            required
            rows={6}
            maxLength={1000}
            showCharacterCount
            name="message"
          />
          
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500'
            }}
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    );
  }
};

export const WithReactHookForm = {
  render: (args) => {
    const [formData, setFormData] = useState({});
    
    const mockForm = {
      register: (name) => ({
        name,
        onChange: (e) => setFormData(prev => ({ ...prev, [name]: e.target.value })),
        onBlur: () => {},
        ref: () => {}
      })
    };
    
    return (
      <div style={{ width: '400px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Formulario con React Hook Form:</strong>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextArea
            {...mockForm.register('review')}
            label="Reseña del producto"
            placeholder="Comparte tu experiencia..."
            helpText="Tu opinión nos ayuda a mejorar"
            rows={5}
          />
          
          <TextArea
            {...mockForm.register('suggestions')}
            label="Sugerencias"
            placeholder="¿Qué podríamos mejorar?"
            rows={3}
          />
        </div>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Datos del formulario:</strong>
          <pre style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
};
