import Tabs from './Tabs';
import { useState } from 'react';
import { PiHouse, PiUser, PiGear, PiChartBar, PiFolder, PiLock } from 'react-icons/pi';

export default {
  title: 'Components/Tabs',
  component: Tabs.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    },
    variant: {
      control: 'select',
      options: ['line', 'card', 'pill']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  },
};

const Template = (args) => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <div style={{ width: '500px' }}>
      <Tabs.Root
        {...args}
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <Tabs.List>
          <Tabs.Trigger value="tab1">Inicio</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Productos</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Servicios</Tabs.Trigger>
        </Tabs.List>
        
        <Tabs.Content value="tab1">
          <h3>Contenido de Inicio</h3>
          <p>Esta es la página principal con información general sobre nuestra empresa.</p>
        </Tabs.Content>
        
        <Tabs.Content value="tab2">
          <h3>Nuestros Productos</h3>
          <p>Aquí encontrarás información detallada sobre todos nuestros productos.</p>
        </Tabs.Content>
        
        <Tabs.Content value="tab3">
          <h3>Servicios Disponibles</h3>
          <p>Conoce todos los servicios que ofrecemos para nuestros clientes.</p>
        </Tabs.Content>
      </Tabs.Root>
      
      <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Tab activo:</strong> {activeTab}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'line',
  defaultValue: 'tab1'
};

export const Variants = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
      {/* Line variant */}
      <div>
        <h4>Line Variant</h4>
        <Tabs.Root variant="line" defaultValue="line1">
          <Tabs.List>
            <Tabs.Trigger value="line1">Dashboard</Tabs.Trigger>
            <Tabs.Trigger value="line2">Analytics</Tabs.Trigger>
            <Tabs.Trigger value="line3">Reports</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="line1">Dashboard content</Tabs.Content>
          <Tabs.Content value="line2">Analytics content</Tabs.Content>
          <Tabs.Content value="line3">Reports content</Tabs.Content>
        </Tabs.Root>
      </div>
      
      {/* Card variant */}
      <div>
        <h4>Card Variant</h4>
        <Tabs.Root variant="card" defaultValue="card1">
          <Tabs.List>
            <Tabs.Trigger value="card1">Overview</Tabs.Trigger>
            <Tabs.Trigger value="card2">Details</Tabs.Trigger>
            <Tabs.Trigger value="card3">Settings</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="card1">Overview content</Tabs.Content>
          <Tabs.Content value="card2">Details content</Tabs.Content>
          <Tabs.Content value="card3">Settings content</Tabs.Content>
        </Tabs.Root>
      </div>
      
      {/* Pill variant */}
      <div>
        <h4>Pill Variant</h4>
        <Tabs.Root variant="pill" defaultValue="pill1">
          <Tabs.List>
            <Tabs.Trigger value="pill1">Profile</Tabs.Trigger>
            <Tabs.Trigger value="pill2">Account</Tabs.Trigger>
            <Tabs.Trigger value="pill3">Billing</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="pill1">Profile content</Tabs.Content>
          <Tabs.Content value="pill2">Account content</Tabs.Content>
          <Tabs.Content value="pill3">Billing content</Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
};

export const WithIcons = {
  render: (args) => (
    <div style={{ width: '600px' }}>
      <Tabs.Root defaultValue="home" color="success">
        <Tabs.List>
          <Tabs.Trigger value="home">
            <PiHouse size={20} />
            Inicio
          </Tabs.Trigger>
          <Tabs.Trigger value="profile">
            <PiUser size={20} />
            Perfil
          </Tabs.Trigger>
          <Tabs.Trigger value="analytics">
            <PiChartBar size={20} />
            Analytics
          </Tabs.Trigger>
          <Tabs.Trigger value="settings">
            <PiGear size={20} />
            Configuración
          </Tabs.Trigger>
        </Tabs.List>
        
        <Tabs.Content value="home">
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h3>🏠 Bienvenido al Dashboard</h3>
            <p>Esta es la página principal donde puedes ver un resumen de toda tu actividad.</p>
          </div>
        </Tabs.Content>
        
        <Tabs.Content value="profile">
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h3>👤 Información del Perfil</h3>
            <p>Gestiona tu información personal y preferencias de cuenta.</p>
          </div>
        </Tabs.Content>
        
        <Tabs.Content value="analytics">
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h3>📊 Métricas y Analytics</h3>
            <p>Visualiza estadísticas detalladas y reportes de rendimiento.</p>
          </div>
        </Tabs.Content>
        
        <Tabs.Content value="settings">
          <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h3>⚙️ Configuración del Sistema</h3>
            <p>Ajusta las configuraciones y preferencias de la aplicación.</p>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
};

export const VerticalTabs = {
  render: (args) => (
    <div style={{ width: '600px', height: '400px' }}>
      <Tabs.Root orientation="vertical" defaultValue="general" variant="card">
        <Tabs.List>
          <Tabs.Trigger value="general">
            <PiGear size={16} />
            General
          </Tabs.Trigger>
          <Tabs.Trigger value="security">
            <PiLock size={16} />
            Seguridad
          </Tabs.Trigger>
          <Tabs.Trigger value="files">
            <PiFolder size={16} />
            Archivos
          </Tabs.Trigger>
          <Tabs.Trigger value="account" disabled>
            <PiUser size={16} />
            Cuenta (Deshabilitado)
          </Tabs.Trigger>
        </Tabs.List>
        
        <Tabs.Content value="general">
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', height: '300px' }}>
            <h3>Configuración General</h3>
            <p>Ajusta las configuraciones básicas del sistema.</p>
            <div style={{ marginTop: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Idioma:</label>
              <select style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option>Español</option>
                <option>English</option>
                <option>Français</option>
              </select>
            </div>
          </div>
        </Tabs.Content>
        
        <Tabs.Content value="security">
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', height: '300px' }}>
            <h3>Configuración de Seguridad</h3>
            <p>Gestiona las opciones de seguridad y privacidad.</p>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>
                <input type="checkbox" defaultChecked /> Autenticación de dos factores
              </label>
              <label>
                <input type="checkbox" /> Notificaciones de inicio de sesión
              </label>
            </div>
          </div>
        </Tabs.Content>
        
        <Tabs.Content value="files">
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', height: '300px' }}>
            <h3>Gestión de Archivos</h3>
            <p>Administra tus archivos y configuraciones de almacenamiento.</p>
            <div style={{ marginTop: '1rem' }}>
              <p><strong>Espacio usado:</strong> 2.4 GB de 10 GB</p>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px' }}>
                <div style={{ width: '24%', height: '100%', backgroundColor: '#10b981', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
};

export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
      <div>
        <h4>Small Size</h4>
        <Tabs.Root size="sm" defaultValue="sm1">
          <Tabs.List>
            <Tabs.Trigger value="sm1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="sm2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="sm3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="sm1">Small tab content</Tabs.Content>
          <Tabs.Content value="sm2">Small tab content 2</Tabs.Content>
          <Tabs.Content value="sm3">Small tab content 3</Tabs.Content>
        </Tabs.Root>
      </div>
      
      <div>
        <h4>Medium Size</h4>
        <Tabs.Root size="md" defaultValue="md1">
          <Tabs.List>
            <Tabs.Trigger value="md1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="md2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="md3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="md1">Medium tab content</Tabs.Content>
          <Tabs.Content value="md2">Medium tab content 2</Tabs.Content>
          <Tabs.Content value="md3">Medium tab content 3</Tabs.Content>
        </Tabs.Root>
      </div>
      
      <div>
        <h4>Large Size</h4>
        <Tabs.Root size="lg" defaultValue="lg1">
          <Tabs.List>
            <Tabs.Trigger value="lg1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="lg2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="lg3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="lg1">Large tab content</Tabs.Content>
          <Tabs.Content value="lg2">Large tab content 2</Tabs.Content>
          <Tabs.Content value="lg3">Large tab content 3</Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
};

export const EqualWidth = {
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Tabs.Root equalWidth defaultValue="equal1">
        <Tabs.List>
          <Tabs.Trigger value="equal1">A</Tabs.Trigger>
          <Tabs.Trigger value="equal2">Tab Mediano</Tabs.Trigger>
          <Tabs.Trigger value="equal3">Tab Muy Largo</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="equal1">Contenido A</Tabs.Content>
        <Tabs.Content value="equal2">Contenido del tab mediano</Tabs.Content>
        <Tabs.Content value="equal3">Contenido del tab muy largo</Tabs.Content>
      </Tabs.Root>
    </div>
  )
};

export const Colors = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '500px' }}>
      {['primary', 'success', 'warning', 'danger', 'info', 'secondary'].map((color) => (
        <div key={color}>
          <h4 style={{ textTransform: 'capitalize', margin: '0 0 0.5rem 0' }}>{color}</h4>
          <Tabs.Root color={color} defaultValue={`${color}1`}>
            <Tabs.List>
              <Tabs.Trigger value={`${color}1`}>Tab 1</Tabs.Trigger>
              <Tabs.Trigger value={`${color}2`}>Tab 2</Tabs.Trigger>
              <Tabs.Trigger value={`${color}3`}>Tab 3</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value={`${color}1`}>Contenido con color {color}</Tabs.Content>
            <Tabs.Content value={`${color}2`}>Contenido 2</Tabs.Content>
            <Tabs.Content value={`${color}3`}>Contenido 3</Tabs.Content>
          </Tabs.Root>
        </div>
      ))}
    </div>
  )
};

export const ComplexExample = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    
    return (
      <div style={{ width: '700px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <h2>Panel de Administración</h2>
          <p>Gestiona tu aplicación desde este panel centralizado</p>
        </div>
        
        <Tabs.Root 
          value={activeTab} 
          onValueChange={setActiveTab}
          variant="card"
          color="primary"
        >
          <Tabs.List>
            <Tabs.Trigger value="dashboard">
              <PiChartBar size={18} />
              Dashboard
            </Tabs.Trigger>
            <Tabs.Trigger value="users">
              <PiUser size={18} />
              Usuarios
            </Tabs.Trigger>
            <Tabs.Trigger value="files">
              <PiFolder size={18} />
              Archivos
            </Tabs.Trigger>
            <Tabs.Trigger value="settings">
              <PiGear size={18} />
              Configuración
            </Tabs.Trigger>
          </Tabs.List>
          
          <Tabs.Content value="dashboard">
            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h3>📊 Dashboard Principal</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                  <h4>1,234</h4>
                  <p>Usuarios activos</p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                  <h4>5,678</h4>
                  <p>Ventas totales</p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                  <h4>98%</h4>
                  <p>Disponibilidad</p>
                </div>
              </div>
            </div>
          </Tabs.Content>
          
          <Tabs.Content value="users">
            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h3>👥 Gestión de Usuarios</h3>
              <p>Administra los usuarios de tu plataforma</p>
              <div style={{ marginTop: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem' }}>Nombre</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem' }}>Email</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem' }}>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.5rem' }}>Juan Pérez</td>
                      <td style={{ padding: '0.5rem' }}>juan@example.com</td>
                      <td style={{ padding: '0.5rem' }}>✅ Activo</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.5rem' }}>María García</td>
                      <td style={{ padding: '0.5rem' }}>maria@example.com</td>
                      <td style={{ padding: '0.5rem' }}>✅ Activo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Tabs.Content>
          
          <Tabs.Content value="files">
            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h3>📁 Gestión de Archivos</h3>
              <p>Administra los archivos y recursos del sistema</p>
              <div style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <PiFolder size={16} />
                  <span>documentos/</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <PiFolder size={16} />
                  <span>imagenes/</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PiFolder size={16} />
                  <span>videos/</span>
                </div>
              </div>
            </div>
          </Tabs.Content>
          
          <Tabs.Content value="settings">
            <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h3>⚙️ Configuración del Sistema</h3>
              <p>Ajusta las configuraciones globales de la aplicación</p>
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem' }}>
                    Nombre de la aplicación:
                  </label>
                  <input 
                    type="text" 
                    defaultValue="Mi Dashboard" 
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem' }}>
                    Zona horaria:
                  </label>
                  <select style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}>
                    <option>UTC-3 (Buenos Aires)</option>
                    <option>UTC-5 (Nueva York)</option>
                    <option>UTC+0 (Londres)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input type="checkbox" defaultChecked />
                    Habilitar notificaciones
                  </label>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Tab activo:</strong> {activeTab}
        </div>
      </div>
    );
  }
};
