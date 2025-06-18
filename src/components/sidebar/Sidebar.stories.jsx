import Sidebar from './Sidebar';
import Button from '../button/Button';
import { useState } from 'react';
import { PiHouse, PiUser, PiGear, PiSignOut } from 'react-icons/pi';
import { CiMenuBurger } from "react-icons/ci";

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom']
    }
  },
};

const SidebarContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <h2 style={{ margin: '0 0 1rem 0', color: '#333' }}>Menú Principal</h2>
    
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <a href="#" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem', 
        padding: '0.75rem', 
        textDecoration: 'none', 
        color: '#333',
        borderRadius: '8px',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={e => e.target.style.backgroundColor = '#f0f0f0'}
      onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
      >
        <PiHouse size={20} />
        Inicio
      </a>
      
      <a href="#" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem', 
        padding: '0.75rem', 
        textDecoration: 'none', 
        color: '#333',
        borderRadius: '8px'
      }}
      onMouseEnter={e => e.target.style.backgroundColor = '#f0f0f0'}
      onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
      >
        <PiUser size={20} />
        Perfil
      </a>
      
      <a href="#" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.75rem', 
        padding: '0.75rem', 
        textDecoration: 'none', 
        color: '#333',
        borderRadius: '8px'
      }}
      onMouseEnter={e => e.target.style.backgroundColor = '#f0f0f0'}
      onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
      >
        <PiGear size={20} />
        Configuración
      </a>
    </nav>
    
    <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
      <Button variant="ghost" color="danger" style={{ width: '100%', justifyContent: 'flex-start' }}>
        <PiSignOut size={20} />
        Cerrar sesión
      </Button>
    </div>
  </div>
);

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{ minHeight: '400px', position: 'relative' }}>
      <div style={{ padding: '2rem' }}>
        <h1>Página Principal</h1>
        <p>Este es el contenido principal de la página.</p>
        
        <Button onClick={() => setIsOpen(true)}>
          <CiMenuBurger size={20} />
          Abrir Sidebar
        </Button>
        
        <div style={{ marginTop: '2rem' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      
      <Sidebar
        {...args}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <SidebarContent />
      </Sidebar>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: 'left',
  size: '320px'
};

export const RightSidebar = Template.bind({});
RightSidebar.args = {
  position: 'right',
  size: '280px'
};

export const TopSidebar = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ minHeight: '400px', position: 'relative' }}>
        <div style={{ padding: '2rem' }}>
          <h1>Sidebar Superior</h1>
          <p>Este sidebar se desliza desde arriba.</p>
          
          <Button onClick={() => setIsOpen(true)}>
            Abrir Sidebar Superior
          </Button>
        </div>
        
        <Sidebar
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1rem' }}>
            <h3 style={{ margin: 0 }}>Notificaciones</h3>
            <div style={{ padding: '0.5rem 1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
              3 nuevas notificaciones
            </div>
            <Button size="sm">Ver todas</Button>
          </div>
        </Sidebar>
      </div>
    );
  },
  args: {
    position: 'top',
    size: '200px'
  }
};

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
  position: 'left',
  size: '300px',
  color: '#1e293b'
};

export const WithoutCloseButton = Template.bind({});
WithoutCloseButton.args = {
  position: 'left',
  size: '320px',
  showCloseButton: false
};

export const NarrowSidebar = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ minHeight: '400px', position: 'relative' }}>
        <div style={{ padding: '2rem' }}>
          <h1>Sidebar Estrecho</h1>
          <p>Un sidebar más estrecho ideal para navegación con iconos.</p>
          
          <Button onClick={() => setIsOpen(true)}>
            Abrir Sidebar
          </Button>
        </div>
        
        <Sidebar
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', paddingTop: '1rem' }}>
            <Button variant="ghost" size="lg" style={{ width: '48px', height: '48px', padding: 0 }}>
              <PiHouse size={24} />
            </Button>
            <Button variant="ghost" size="lg" style={{ width: '48px', height: '48px', padding: 0 }}>
              <PiUser size={24} />
            </Button>
            <Button variant="ghost" size="lg" style={{ width: '48px', height: '48px', padding: 0 }}>
              <PiGear size={24} />
            </Button>
          </div>
        </Sidebar>
      </div>
    );
  },
  args: {
    position: 'left',
    size: '80px'
  }
};
