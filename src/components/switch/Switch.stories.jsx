import Switch from './Switch';
import { useState } from 'react';

export default {
  title: 'Components/Switch',
  component: Switch,
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
    }
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      
      <div style={{ padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Estado:</strong> {checked ? 'Activado' : 'Desactivado'}
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Activar notificaciones',
  name: 'notifications'
};

export const WithColor = Template.bind({});
WithColor.args = {
  label: 'Modo oscuro',
  color: 'success',
  name: 'darkMode'
};

export const Sizes = {
  render: (args) => {
    const [states, setStates] = useState({ sm: false, md: true, lg: false });
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <Switch
          size="sm"
          label="Switch pequeño"
          checked={states.sm}
          onChange={(e) => setStates(prev => ({ ...prev, sm: e.target.checked }))}
          name="switch-sm"
        />
        <Switch
          size="md"
          label="Switch mediano"
          checked={states.md}
          onChange={(e) => setStates(prev => ({ ...prev, md: e.target.checked }))}
          name="switch-md"
        />
        <Switch
          size="lg"
          label="Switch grande"
          checked={states.lg}
          onChange={(e) => setStates(prev => ({ ...prev, lg: e.target.checked }))}
          name="switch-lg"
        />
      </div>
    );
  }
};

export const Colors = {
  render: (args) => {
    const [states, setStates] = useState({
      primary: true,
      success: true,
      warning: false,
      danger: false,
      info: true,
      secondary: false
    });
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <Switch
          color="primary"
          label="Primary"
          checked={states.primary}
          onChange={(e) => setStates(prev => ({ ...prev, primary: e.target.checked }))}
          name="switch-primary"
        />
        <Switch
          color="success"
          label="Success"
          checked={states.success}
          onChange={(e) => setStates(prev => ({ ...prev, success: e.target.checked }))}
          name="switch-success"
        />
        <Switch
          color="warning"
          label="Warning"
          checked={states.warning}
          onChange={(e) => setStates(prev => ({ ...prev, warning: e.target.checked }))}
          name="switch-warning"
        />
        <Switch
          color="danger"
          label="Danger"
          checked={states.danger}
          onChange={(e) => setStates(prev => ({ ...prev, danger: e.target.checked }))}
          name="switch-danger"
        />
        <Switch
          color="info"
          label="Info"
          checked={states.info}
          onChange={(e) => setStates(prev => ({ ...prev, info: e.target.checked }))}
          name="switch-info"
        />
        <Switch
          color="secondary"
          label="Secondary"
          checked={states.secondary}
          onChange={(e) => setStates(prev => ({ ...prev, secondary: e.target.checked }))}
          name="switch-secondary"
        />
      </div>
    );
  }
};

export const Disabled = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Switch
        label="Deshabilitado (off)"
        disabled
        checked={false}
        name="disabled-off"
      />
      <Switch
        label="Deshabilitado (on)"
        disabled
        checked={true}
        color="success"
        name="disabled-on"
      />
    </div>
  )
};

export const WithoutLabel = {
  render: (args) => {
    const [checked, setChecked] = useState(true);
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span>Wi-Fi</span>
        <Switch
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="info"
          name="wifi"
        />
        <span style={{ color: checked ? '#10b981' : '#6b7280' }}>
          {checked ? 'Conectado' : 'Desconectado'}
        </span>
      </div>
    );
  }
};

export const SettingsPanel = {
  render: (args) => {
    const [settings, setSettings] = useState({
      notifications: true,
      autoSave: false,
      darkMode: true,
      soundEffects: false,
      analytics: true
    });
    
    const updateSetting = (key) => (e) => {
      setSettings(prev => ({ ...prev, [key]: e.target.checked }));
    };
    
    return (
      <div style={{ 
        width: '320px',
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: '0 0 1.5rem 0' }}>Configuración</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Notificaciones</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Recibir alertas y mensajes</div>
            </div>
            <Switch
              checked={settings.notifications}
              onChange={updateSetting('notifications')}
              color="primary"
              name="notifications"
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Guardado automático</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Guardar cambios automáticamente</div>
            </div>
            <Switch
              checked={settings.autoSave}
              onChange={updateSetting('autoSave')}
              color="success"
              name="autoSave"
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Modo oscuro</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Interfaz con tema oscuro</div>
            </div>
            <Switch
              checked={settings.darkMode}
              onChange={updateSetting('darkMode')}
              color="secondary"
              name="darkMode"
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Efectos de sonido</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Reproducir sonidos de la interfaz</div>
            </div>
            <Switch
              checked={settings.soundEffects}
              onChange={updateSetting('soundEffects')}
              color="warning"
              name="soundEffects"
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Analytics</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Compartir datos de uso</div>
            </div>
            <Switch
              checked={settings.analytics}
              onChange={updateSetting('analytics')}
              color="info"
              name="analytics"
            />
          </div>
        </div>
        
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <strong>Estado actual:</strong>
          <pre style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem' }}>
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
};

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
      <div style={{ width: '300px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Preferencias de usuario:</strong>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Switch
            label="Recibir emails promocionales"
            name="marketingEmails"
            form={mockForm}
            color="primary"
          />
          <Switch
            label="Notificaciones push"
            name="pushNotifications"
            form={mockForm}
            color="info"
            defaultChecked={true}
          />
          <Switch
            label="Compartir perfil público"
            name="publicProfile"
            form={mockForm}
            color="success"
          />
        </div>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Datos del formulario:</strong>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  }
};
