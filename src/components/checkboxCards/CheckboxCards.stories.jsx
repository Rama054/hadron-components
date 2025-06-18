import CheckboxCards from './CheckboxCards';
import { useState } from 'react';
import { PiShieldCheck, PiClock, PiUsers, PiChartBar, PiCloud } from 'react-icons/pi';


export default {
  title: 'Components/CheckboxCards',
  component: CheckboxCards.Root,
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
    }
  },
};

const Template = (args) => {
  const [selectedValues, setSelectedValues] = useState([]);
  
  return (
    <div style={{ width: '600px' }}>
      <CheckboxCards.Root
        {...args}
        name="features"
        onChange={setSelectedValues}
      >
        <CheckboxCards.Item
          value="security"
          title="Seguridad avanzada"
          description="Protección con cifrado de extremo a extremo"
          icon={<PiShieldCheck size={24} />}
        />
        <CheckboxCards.Item
          value="analytics"
          title="Análisis detallados"
          description="Reportes y métricas en tiempo real"
          icon={<PiChartBar size={24} />}
        />
        <CheckboxCards.Item
          value="collaboration"
          title="Colaboración en equipo"
          description="Herramientas para trabajar en conjunto"
          icon={<PiUsers size={24} />}
        />
        <CheckboxCards.Item
          value="automation"
          title="Automatización"
          description="Workflows y procesos automáticos"
          icon={<PiClock size={24} />}
        />
        <CheckboxCards.Item
          value="cloud"
          title="Almacenamiento en la nube"
          description="Acceso desde cualquier dispositivo"
          icon={<PiCloud size={24} />}
        />
        {/* <CheckboxCards.Item
          value="mobile"
          title="App móvil"
          description="Aplicación nativa para iOS y Android"
          icon={<PiMobile size={24} />}
          disabled
        /> */}
      </CheckboxCards.Root>
      
      <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Características seleccionadas:</strong> {selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguna'}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  columns: { sm: 1, md: 2 },
  color: 'primary',
  radius: 'md'
};

export const WithColor = Template.bind({});
WithColor.args = {
  columns: { sm: 1, md: 2 },
  color: 'success',
  radius: 'md'
};

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  columns: { sm: 1 },
  color: 'info',
  radius: 'lg'
};

export const ThreeColumns = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState([]);
    
    return (
      <div style={{ width: '800px' }}>
        <CheckboxCards.Root
          {...args}
          name="services"
          onChange={setSelectedValues}
        >
          <CheckboxCards.Item
            value="hosting"
            title="Web Hosting"
            description="Alojamiento web profesional"
          />
          <CheckboxCards.Item
            value="domain"
            title="Registro de dominio"
            description="Tu dominio personalizado"
          />
          <CheckboxCards.Item
            value="ssl"
            title="Certificado SSL"
            description="Seguridad para tu sitio"
          />
          <CheckboxCards.Item
            value="backup"
            title="Copias de seguridad"
            description="Respaldo automático diario"
          />
          <CheckboxCards.Item
            value="cdn"
            title="Red CDN"
            description="Entrega de contenido global"
          />
          <CheckboxCards.Item
            value="support"
            title="Soporte 24/7"
            description="Asistencia técnica completa"
          />
        </CheckboxCards.Root>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Servicios seleccionados ({selectedValues.length}):</strong>
          <br />
          {selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguno'}
        </div>
      </div>
    );
  },
  args: {
    columns: { sm: 1, md: 2, lg: 3 },
    color: 'warning',
    radius: 'md'
  }
};

// Simple cards without icons
export const SimpleCards = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState([]);
    
    return (
      <div style={{ width: '400px' }}>
        <CheckboxCards.Root
          {...args}
          name="preferences"
          onChange={setSelectedValues}
        >
          <CheckboxCards.Item value="email">Email</CheckboxCards.Item>
          <CheckboxCards.Item value="sms">SMS</CheckboxCards.Item>
          <CheckboxCards.Item value="push">Push</CheckboxCards.Item>
          <CheckboxCards.Item value="phone">Teléfono</CheckboxCards.Item>
        </CheckboxCards.Root>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Notificaciones preferidas:</strong> {selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguna'}
        </div>
      </div>
    );
  },
  args: {
    columns: { sm: 2, md: 4 },
    color: 'secondary',
    radius: 'full'
  }
};

// React Hook Form example
export const WithReactHookForm = {
  render: (args) => {
    const [formData, setFormData] = useState({});
    
    const mockForm = {
      setValue: (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
      },
      trigger: () => {}
    };
    
    return (
      <div style={{ width: '500px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Selecciona los addons que deseas:</strong>
        </div>
        
        <CheckboxCards.Root
          {...args}
          name="addons"
          form={mockForm}
        >
          <CheckboxCards.Item
            value="premium-support"
            title="Soporte Premium"
            description="Respuesta en menos de 1 hora"
            icon={<PiShieldCheck size={20} />}
          />
          <CheckboxCards.Item
            value="advanced-analytics"
            title="Analytics Avanzado"
            description="Métricas detalladas y reportes"
            icon={<PiChartBar size={20} />}
          />
          <CheckboxCards.Item
            value="team-collaboration"
            title="Colaboración en Equipo"
            description="Hasta 10 usuarios adicionales"
            icon={<PiUsers size={20} />}
          />
          <CheckboxCards.Item
            value="api-access"
            title="Acceso a API"
            description="Integración con sistemas externos"
            icon={<PiCloud size={20} />}
          />
        </CheckboxCards.Root>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Formulario:</strong>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  },
  args: {
    columns: { sm: 1, md: 2 },
    color: 'danger',
    radius: 'sm'
  }
};

// Multi-selection example
export const MultiSelection = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState(['security', 'analytics']);
    
    return (
      <div style={{ width: '600px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Características incluidas en tu plan:</strong>
        </div>
        
        <CheckboxCards.Root
          {...args}
          name="included-features"
          onChange={setSelectedValues}
        >
          <CheckboxCards.Item
            value="security"
            title="Seguridad Básica"
            description="Protección estándar incluida"
            icon={<PiShieldCheck size={20} />}
          />
          <CheckboxCards.Item
            value="analytics"
            title="Reportes Básicos"
            description="Métricas esenciales"
            icon={<PiChartBar size={20} />}
          />
          <CheckboxCards.Item
            value="storage"
            title="Almacenamiento Extra"
            description="100GB adicionales"
            icon={<PiCloud size={20} />}
          />
        </CheckboxCards.Root>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#e8f5e8', borderRadius: '4px' }}>
          <strong>Total seleccionado:</strong> {selectedValues.length} características
          <br />
          <small>{selectedValues.join(' + ')}</small>
        </div>
      </div>
    );
  },
  args: {
    columns: { sm: 1, md: 3 },
    color: 'success',
    radius: 'md'
  }
};
