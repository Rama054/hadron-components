import React, { useState } from 'react';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    multiple: {
      control: 'boolean',
      description: 'Permite seleccionar múltiples opciones'
    }
  },
};

const countries = [
  { value: 'us', label: 'Estados Unidos' },
  { value: 'ca', label: 'Canadá' },
  { value: 'mx', label: 'México' },
  { value: 'ar', label: 'Argentina' },
  { value: 'br', label: 'Brasil' },
  { value: 'cl', label: 'Chile' },
  { value: 'co', label: 'Colombia' },
  { value: 'pe', label: 'Perú' },
  { value: 'uy', label: 'Uruguay' },
  { value: 'py', label: 'Paraguay' }
];

// Versión mejorada del Template que maneja mejor el estado
const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState('');
  
  const handleChange = (value) => {
    console.log('Template onChange:', value);
    setSelectedValue(value);
  };
  
  return (
    <div style={{ width: '300px' }}>
      <Select
        {...args}
        options={countries}
        onChange={handleChange}
      />
      
      <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Valor seleccionado:</strong> {String(selectedValue) || 'Ninguno'}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Selecciona un país',
  placeholder: 'Elige una opción...',
  name: 'country'
};

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'País de origen',
  placeholder: 'Seleccionar...',
  color: 'success',
  name: 'country'
};

export const WithFilter = Template.bind({});
WithFilter.args = {
  label: 'Buscar país',
  placeholder: 'Escribe para buscar...',
  filter: true,
  color: 'info',
  name: 'country'
};

export const FilterTest = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [debugInfo, setDebugInfo] = useState('Componente cargado');
    
    const handleChange = (value) => {
      console.log('Select onChange triggered with:', value);
      setSelectedValue(value);
      setDebugInfo(`Seleccionado: ${value}`);
    };
    
    return (
      <div style={{ width: '300px' }}>
        <h4>Test del filtro</h4>
        <Select
          {...args}
          options={countries}
          onChange={handleChange}
          filter={true}
        />
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Debug:</strong> {String(debugInfo) || 'Ninguna selección'}
        </div>
        
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#666' }}>
          Instrucciones: Abre el select y escribe en el campo de filtro para buscar países.
        </div>
        
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#999' }}>
          Países disponibles: {countries.length}
        </div>
      </div>
    );
  },
  args: {
    label: 'Test del filtro',
    placeholder: 'Selecciona y filtra...',
    name: 'filterTest'
  }
};

// NUEVOS STORIES PARA SELECCIÓN MÚLTIPLE
export const Multiple = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState([]);
    
    const handleChange = (values) => {
      console.log('Multiple onChange:', values);
      setSelectedValues(values);
    };
    
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          options={countries}
          onChange={handleChange}
          multiple={true}
        />
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Valores seleccionados:</strong>
          <div style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {Array.isArray(selectedValues) && selectedValues.length > 0 
              ? selectedValues.join(', ') 
              : 'Ninguno'
            }
          </div>
        </div>
      </div>
    );
  },
  args: {
    label: 'Selecciona múltiples países',
    placeholder: 'Elige varios países...',
    name: 'countries'
  }
};

export const MultipleWithFilter = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState([]);
    
    const handleChange = (values) => {
      setSelectedValues(values);
    };
    
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          options={countries}
          onChange={handleChange}
          multiple={true}
          filter={true}
        />
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Países seleccionados ({Array.isArray(selectedValues) ? selectedValues.length : 0}):</strong>
          <div style={{ fontSize: '0.875rem', marginTop: '0.25rem', maxHeight: '100px', overflowY: 'auto' }}>
            {Array.isArray(selectedValues) && selectedValues.length > 0 
              ? selectedValues.map((value, index) => (
                  <div key={index} style={{ padding: '2px 0' }}>
                    • {countries.find(c => c.value === value)?.label || value}
                  </div>
                ))
              : <div>No hay países seleccionados</div>
            }
          </div>
        </div>
      </div>
    );
  },
  args: {
    label: 'Buscar y seleccionar múltiples',
    placeholder: 'Busca y selecciona países...',
    color: 'success',
    name: 'multipleCountries'
  }
};

export const MultipleWithDefaultValues = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState(['ar', 'br', 'mx']);
    
    const handleChange = (values) => {
      setSelectedValues(values);
    };
    
    return (
      <div style={{ width: '300px' }}>
        <Select
          {...args}
          options={countries}
          onChange={handleChange}
          multiple={true}
          defaultValue={['ar', 'br', 'mx']}
        />
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Estado actual:</strong>
          <pre style={{ fontSize: '0.75rem', margin: '0.5rem 0 0 0', overflow: 'auto' }}>
            {JSON.stringify(selectedValues, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
  args: {
    label: 'Con valores predeterminados',
    placeholder: 'Valores por defecto...',
    color: 'warning',
    name: 'defaultMultiple'
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Campo deshabilitado',
  placeholder: 'No disponible',
  disabled: true,
  name: 'country'
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Select
        {...args}
        size="sm"
        label="Tamaño pequeño"
        options={countries.slice(0, 3)}
        name="country-sm"
      />
      <Select
        {...args}
        size="md"
        label="Tamaño mediano"
        options={countries.slice(0, 3)}
        name="country-md"
      />
      <Select
        {...args}
        size="lg"
        label="Tamaño grande"
        options={countries.slice(0, 3)}
        name="country-lg"
      />
    </div>
  ),
  args: {
    color: 'primary'
  }
};

export const WithTemplate = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('');
    
    const users = [
      { value: '1', label: 'Juan Pérez', email: 'juan@example.com', avatar: '👨' },
      { value: '2', label: 'María García', email: 'maria@example.com', avatar: '👩' },
      { value: '3', label: 'Carlos López', email: 'carlos@example.com', avatar: '👨‍💼' },
      { value: '4', label: 'Ana Martínez', email: 'ana@example.com', avatar: '👩‍💼' }
    ];
    
    const userTemplate = (user) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.2em' }}>{user.avatar}</span>
        <div>
          <div style={{ fontWeight: '500' }}>{user.label}</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{user.email}</div>
        </div>
      </div>
    );
    
    return (
      <div style={{ width: '350px' }}>
        <Select
          {...args}
          options={users}
          template={userTemplate}
          onChange={setSelectedValue}
          filter
        />
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Usuario seleccionado:</strong> {selectedValue || 'Ninguno'}
        </div>
      </div>
    );
  },
  args: {
    label: 'Asignar usuario',
    placeholder: 'Buscar usuario...',
    color: 'secondary',
    name: 'assignedUser'
  }
};

export const WithReactHookForm = {
  render: (args) => {
    const [formData, setFormData] = useState({});
    
    const mockForm = {
      register: (name) => ({
        name,
        onChange: () => {},
        onBlur: () => {},
        ref: () => {}
      }),
      setValue: (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
      },
      trigger: () => {}
    };
    
    return (
      <div style={{ width: '300px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Formulario con React Hook Form:</strong>
        </div>
        
        <Select
          {...args}
          options={countries}
          form={mockForm}
        />
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Datos del formulario:</strong>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  },
  args: {
    label: 'País de residencia',
    placeholder: 'Selecciona tu país...',
    name: 'residence',
    color: 'warning'
  }
};

// Test específico para problema de scroll
export const ScrollPositionTest = {
  render: (args) => {
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [extraContent, setExtraContent] = useState([]);
    
    const handleChange = (values) => {
      setSelectedCountries(values);
      
      // Simular generación de contenido que causa scroll
      const newContent = [];
      for (let i = 0; i < values.length * 5; i++) {
        newContent.push(`Contenido generado dinámicamente #${i + 1} para ${values[values.length - 1] || 'selección'}`);
      }
      setExtraContent(newContent);
    };
    
    return (
      <div style={{ 
        height: '400px', 
        overflowY: 'auto', 
        border: '2px solid #ddd', 
        borderRadius: '8px',
        padding: '1rem',
        width: '350px'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>🧪 Test de Posición con Scroll</strong>
          <p style={{ fontSize: '0.875rem', color: '#666', margin: '0.5rem 0' }}>
            Selecciona países y observa que el dropdown se mantiene alineado al botón,
            incluso cuando el contenido dinámico genera scroll.
          </p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <Select
            {...args}
            options={countries}
            onChange={handleChange}
            multiple={true}
            filter={true}
          />
        </div>
        
        <div style={{ marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#f0f8ff', borderRadius: '4px' }}>
          <strong>Países seleccionados ({selectedCountries.length}):</strong>
          <div style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {selectedCountries.length > 0 
              ? selectedCountries.map(value => countries.find(c => c.value === value)?.label).join(', ')
              : 'Ninguno'
            }
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#fff5f5', 
          border: '1px solid #fed7d7', 
          borderRadius: '4px',
          padding: '0.75rem',
          marginBottom: '1rem' 
        }}>
          <strong>⚠️ Instrucciones del test:</strong>
          <ol style={{ fontSize: '0.875rem', marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
            <li>Abre el dropdown del select</li>
            <li>Selecciona varios países (esto generará contenido abajo)</li>
            <li>El contenido nuevo hará que aparezca scroll en este contenedor</li>
            <li>Abre el dropdown nuevamente y verifica que esté alineado correctamente</li>
            <li>Haz scroll en este contenedor y abre el dropdown otra vez</li>
          </ol>
        </div>
        
        {/* Contenido dinámico que genera scroll */}
        {extraContent.length > 0 && (
          <div style={{ 
            backgroundColor: '#f7fafc', 
            border: '1px solid #e2e8f0',
            borderRadius: '4px',
            padding: '0.75rem'
          }}>
            <strong>📄 Contenido dinámico generado:</strong>
            <div style={{ 
              fontSize: '0.8rem', 
              marginTop: '0.5rem',
              maxHeight: '200px',
              overflowY: 'auto'
            }}>
              {extraContent.map((content, index) => (
                <div key={index} style={{ 
                  padding: '0.25rem 0', 
                  borderBottom: index < extraContent.length - 1 ? '1px solid #e2e8f0' : 'none'
                }}>
                  {content}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Contenido adicional para forzar más scroll */}
        <div style={{ height: '100px', backgroundColor: '#fafafa', marginTop: '1rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', color: '#666' }}>
          Contenido adicional para generar más scroll
        </div>
      </div>
    );
  },
  args: {
    label: 'Selecciona países (Test Scroll)',
    placeholder: 'Elige varios para generar contenido...',
    color: 'primary',
    name: 'scrollTest'
  }
};
