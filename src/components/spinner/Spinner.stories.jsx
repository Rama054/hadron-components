import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['classic', 'cube', 'circle', 'dots']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    }
  },
};

export const Default = {
  args: {
    type: 'circle',
    size: 'md',
    color: 'primary'
  }
};

export const Types = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner type="classic" size="lg" color="primary" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Classic</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner type="circle" size="lg" color="success" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Circle</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner type="cube" size="lg" color="warning" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Cube</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner type="dots" size="lg" color="danger" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Dots</p>
      </div>
    </div>
  )
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="xs" color="primary" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>XS (12px)</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner size="sm" color="primary" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>SM (16px)</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner size="md" color="primary" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>MD (24px)</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner size="lg" color="primary" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>LG (32px)</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner size="xl" color="primary" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>XL (48px)</p>
      </div>
    </div>
  )
};

export const Colors = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner color="primary" size="lg" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Primary</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner color="secondary" size="lg" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Secondary</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner color="success" size="lg" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Success</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner color="warning" size="lg" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Warning</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner color="danger" size="lg" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Danger</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner color="info" size="lg" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Info</p>
      </div>
    </div>
  )
};

export const InButtons = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        padding: '0.75rem 1rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        <Spinner size="sm" color="white" />
        Cargando...
      </button>
      
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        padding: '0.75rem 1rem',
        backgroundColor: '#10b981',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        <Spinner type="dots" size="sm" color="white" />
        Procesando...
      </button>
      
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: '#f59e0b',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer'
      }}>
        <Spinner type="classic" size="sm" color="white" />
      </button>
    </div>
  )
};

export const LoadingStates = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      {/* Loading Card */}
      <div style={{ 
        padding: '2rem', 
        border: '1px solid #e2e8f0', 
        borderRadius: '12px',
        backgroundColor: 'white',
        textAlign: 'center'
      }}>
        <Spinner size="lg" color="primary" />
        <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Cargando datos</h3>
        <p style={{ color: '#6b7280', margin: 0 }}>Por favor espera mientras obtenemos la información</p>
      </div>
      
      {/* Inline Loading */}
      <div style={{ 
        padding: '1rem', 
        border: '1px solid #e2e8f0', 
        borderRadius: '8px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <Spinner size="sm" color="info" />
        <span>Sincronizando...</span>
      </div>
      
      {/* Full Screen Loading Overlay */}
      <div style={{ 
        position: 'relative',
        height: '200px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <Spinner type="cube" size="lg" color="secondary" />
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Cargando contenido...</span>
        </div>
      </div>
    </div>
  )
};

export const CustomSize = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="60px" color="primary" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Custom 60px</p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Spinner type="dots" size="80px" color="success" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Custom 80px</p>
      </div>
    </div>
  )
};
