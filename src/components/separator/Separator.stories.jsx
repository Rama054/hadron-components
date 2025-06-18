import Separator from './Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  },
};

export const Default = {
  args: {
    orientation: 'horizontal'
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <p>Contenido antes del separador</p>
      <Separator {...args} />
      <p>Contenido después del separador</p>
    </div>
  )
};

export const Vertical = {
  args: {
    orientation: 'vertical',
    size: '100px'
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '120px' }}>
      <div>Contenido izquierda</div>
      <Separator {...args} />
      <div>Contenido derecha</div>
    </div>
  )
};

export const WithColors = {
  render: (args) => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p>Separador primary</p>
        <Separator color="primary" />
      </div>
      
      <div>
        <p>Separador success</p>
        <Separator color="success" />
      </div>
      
      <div>
        <p>Separador warning</p>
        <Separator color="warning" />
      </div>
      
      <div>
        <p>Separador danger</p>
        <Separator color="danger" />
      </div>
    </div>
  )
};

export const DifferentSizes = {
  render: (args) => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p>Separador fino (1px)</p>
        <Separator width="1px" />
      </div>
      
      <div>
        <p>Separador medio (2px)</p>
        <Separator width="2px" color="primary" />
      </div>
      
      <div>
        <p>Separador grueso (4px)</p>
        <Separator width="4px" color="success" />
      </div>
      
      <div>
        <p>Separador personalizado (50% ancho)</p>
        <Separator size="50%" color="warning" />
      </div>
    </div>
  )
};

export const InNavigation = {
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1rem', 
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Inicio</a>
      <Separator orientation="vertical" size="20px" color="secondary" />
      <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Productos</a>
      <Separator orientation="vertical" size="20px" color="secondary" />
      <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Servicios</a>
      <Separator orientation="vertical" size="20px" color="secondary" />
      <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Contacto</a>
    </div>
  )
};

export const InCards = {
  render: (args) => (
    <div style={{ 
      width: '300px',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 1rem 0' }}>Información del usuario</h3>
      
      <div style={{ marginBottom: '1rem' }}>
        <strong>Nombre:</strong> Juan Pérez
      </div>
      
      <Separator color="primary" />
      
      <div style={{ margin: '1rem 0' }}>
        <strong>Email:</strong> juan@example.com
      </div>
      
      <Separator />
      
      <div style={{ marginTop: '1rem' }}>
        <strong>Teléfono:</strong> +1 234 567 890
      </div>
    </div>
  )
};
