import Tooltip from './Tooltip';
import Button from '../button/Button';
import { PiInfo, PiQuestion, PiWarning, PiCheck, PiX, PiHeart } from 'react-icons/pi';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    }
  },
};

export const Default = {
  args: {
    content: 'Este es un tooltip básico',
    placement: 'top',
    children: <Button>Hover me</Button>
  }
};

export const Placements = {
  render: (args) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '2rem',
      padding: '3rem',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      <div></div>
      <Tooltip content="Tooltip arriba" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <div></div>
      
      <Tooltip content="Tooltip izquierda" placement="left">
        <Button>Left</Button>
      </Tooltip>
      
      <div style={{ textAlign: 'center', color: '#666' }}>
        Hover en cualquier botón
      </div>
      
      <Tooltip content="Tooltip derecha" placement="right">
        <Button>Right</Button>
      </Tooltip>
      
      <div></div>
      <Tooltip content="Tooltip abajo" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <div></div>
    </div>
  )
};

export const Triggers = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tooltip content="Aparece al hacer hover" trigger="hover">
        <Button variant="outline">Hover</Button>
      </Tooltip>
      
      <Tooltip content="Aparece al hacer click" trigger="click">
        <Button variant="outline">Click</Button>
      </Tooltip>
      
      <Tooltip content="Aparece al hacer focus" trigger="focus">
        <button style={{ 
          padding: '0.5rem 1rem', 
          border: '1px solid #ccc', 
          borderRadius: '4px',
          background: 'white',
          cursor: 'pointer'
        }}>
          Focus (Tab)
        </button>
      </Tooltip>
    </div>
  )
};

export const Colors = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tooltip content="Primary tooltip" color="primary">
        <Button color="primary">Primary</Button>
      </Tooltip>
      
      <Tooltip content="Success tooltip" color="success">
        <Button color="success">Success</Button>
      </Tooltip>
      
      <Tooltip content="Warning tooltip" color="warning">
        <Button color="warning">Warning</Button>
      </Tooltip>
      
      <Tooltip content="Danger tooltip" color="danger">
        <Button color="danger">Danger</Button>
      </Tooltip>
      
      <Tooltip content="Info tooltip" color="info">
        <Button color="info">Info</Button>
      </Tooltip>
      
      <Tooltip content="Secondary tooltip" color="secondary">
        <Button color="secondary">Secondary</Button>
      </Tooltip>
    </div>
  )
};

export const WithIcons = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Información adicional sobre este elemento">
        <PiInfo size={24} style={{ color: '#3b82f6', cursor: 'pointer' }} />
      </Tooltip>
      
      <Tooltip content="¿Necesitas ayuda? Haz click para más detalles" trigger="click">
        <PiQuestion size={24} style={{ color: '#8b5cf6', cursor: 'pointer' }} />
      </Tooltip>
      
      <Tooltip content="¡Advertencia! Procede con cuidado" color="warning">
        <PiWarning size={24} style={{ color: '#f59e0b', cursor: 'pointer' }} />
      </Tooltip>
      
      <Tooltip content="Operación completada exitosamente" color="success">
        <PiCheck size={24} style={{ color: '#10b981', cursor: 'pointer' }} />
      </Tooltip>
      
      <Tooltip content="Cerrar o cancelar acción" color="danger">
        <PiX size={24} style={{ color: '#ef4444', cursor: 'pointer' }} />
      </Tooltip>
      
      <Tooltip content="¡Me gusta este contenido!" color="danger" placement="bottom">
        <PiHeart size={24} style={{ color: '#ec4899', cursor: 'pointer' }} />
      </Tooltip>
    </div>
  )
};

export const LongContent = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      <Tooltip 
        content="Este es un tooltip con contenido más largo que demuestra cómo se adapta el componente cuando el texto es extenso"
        maxWidth="200px"
      >
        <Button>Contenido largo</Button>
      </Tooltip>
      
      <Tooltip 
        content="Tooltip con contenido muy extenso que incluye múltiples líneas de texto para demostrar el comportamiento del word-wrap y el max-width del componente"
        maxWidth="300px"
        placement="bottom"
      >
        <Button>Contenido muy largo</Button>
      </Tooltip>
    </div>
  )
};

export const WithoutArrow = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tooltip content="Tooltip con flecha" arrow={true}>
        <Button variant="outline">Con flecha</Button>
      </Tooltip>
      
      <Tooltip content="Tooltip sin flecha" arrow={false}>
        <Button variant="outline">Sin flecha</Button>
      </Tooltip>
    </div>
  )
};

export const InteractiveElements = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Tooltip content="Información sobre este input">
          <input 
            type="text" 
            placeholder="Input con tooltip"
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </Tooltip>
        
        <Tooltip content="Selecciona una opción" placement="bottom">
          <select style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
        </Tooltip>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Tooltip content="Marca esta casilla para aceptar">
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input type="checkbox" />
            Acepto términos
          </label>
        </Tooltip>
        
        <Tooltip content="Texto con información adicional" placement="right">
          <span style={{ textDecoration: 'underline', cursor: 'help' }}>
            Texto con tooltip
          </span>
        </Tooltip>
      </div>
    </div>
  )
};

export const DelayVariations = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tooltip content="Sin delay" delay={0}>
        <Button variant="outline">Inmediato</Button>
      </Tooltip>
      
      <Tooltip content="Delay normal" delay={200}>
        <Button variant="outline">Normal (200ms)</Button>
      </Tooltip>
      
      <Tooltip content="Delay largo" delay={500}>
        <Button variant="outline">Lento (500ms)</Button>
      </Tooltip>
    </div>
  )
};

export const InForm = {
  render: (args) => (
    <div style={{ 
      width: '400px', 
      padding: '2rem', 
      border: '1px solid #e2e8f0', 
      borderRadius: '8px',
      backgroundColor: 'white'
    }}>
      <h3 style={{ marginTop: 0 }}>Formulario de registro</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            Nombre completo
            <Tooltip content="Ingresa tu nombre y apellido">
              <PiInfo size={16} style={{ color: '#6b7280', cursor: 'help' }} />
            </Tooltip>
          </label>
          <input 
            type="text" 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            Email
            <Tooltip content="Utilizaremos este email para enviarte confirmaciones" placement="right">
              <PiInfo size={16} style={{ color: '#6b7280', cursor: 'help' }} />
            </Tooltip>
          </label>
          <input 
            type="email" 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            Contraseña
            <Tooltip 
              content="La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números"
              maxWidth="250px"
              color="warning"
            >
              <PiWarning size={16} style={{ color: '#f59e0b', cursor: 'help' }} />
            </Tooltip>
          </label>
          <input 
            type="password" 
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <Tooltip content="Al registarte, aceptas nuestros términos y condiciones" placement="top">
            <Button style={{ width: '100%' }}>
              Registrarse
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
};

export const Disabled = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tooltip content="Este tooltip está habilitado" disabled={false}>
        <Button>Tooltip habilitado</Button>
      </Tooltip>
      
      <Tooltip content="Este tooltip está deshabilitado" disabled={true}>
        <Button variant="outline">Tooltip deshabilitado</Button>
      </Tooltip>
    </div>
  )
};

export const CenteringDebug = {
  name: 'Debug - Centrado',
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '4rem', 
      padding: '4rem',
      backgroundColor: '#f8fafc',
      borderRadius: '8px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#374151' }}>Debug de Centrado</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>Los tooltips deben aparecer perfectamente centrados</p>
      </div>
      
      {/* Grid de prueba con guías visuales */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gap: '3rem',
        alignItems: 'center',
        justifyItems: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        position: 'relative'
      }}>
        {/* Líneas de guía */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: '#e2e8f0',
          zIndex: 0
        }} />
        
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: '1px',
          backgroundColor: '#e2e8f0',
          zIndex: 0
        }} />
        
        {/* Iconos pequeños */}
        <Tooltip content="Icono info" color="info" placement="top">
          <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#0ea5e9',
            borderRadius: '50%',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1
          }} />
        </Tooltip>
        
        <Tooltip content="Icono warning" color="warning" placement="top">
          <div style={{
            width: '16px',
            height: '16px',
            backgroundColor: '#f59e0b',
            borderRadius: '50%',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1
          }} />
        </Tooltip>
        
        {/* Botón centro */}
        <Tooltip content="Botón centrado" color="primary" placement="top">
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1
          }}>
            Centro
          </button>
        </Tooltip>
        
        {/* Elemento rectangular */}
        <Tooltip content="Elemento ancho" color="success" placement="top">
          <div style={{
            width: '80px',
            height: '30px',
            backgroundColor: '#10b981',
            borderRadius: '4px',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1
          }} />
        </Tooltip>
        
        {/* Elemento muy pequeño */}
        <Tooltip content="Muy pequeño" color="danger" placement="top">
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#ef4444',
            borderRadius: '50%',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1
          }} />
        </Tooltip>
      </div>
      
      {/* Prueba con todas las direcciones */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '4rem',
        alignItems: 'center',
        justifyItems: 'center',
        padding: '3rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <div></div>
        <Tooltip content="Top" placement="top" color="blue">
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#3b82f6',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}>
            T
          </div>
        </Tooltip>
        <div></div>
        
        <Tooltip content="Left" placement="left" color="purple">
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#8b5cf6',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}>
            L
          </div>
        </Tooltip>
        
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Centro</span>
        </div>
        
        <Tooltip content="Right" placement="right" color="pink">
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#ec4899',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}>
            R
          </div>
        </Tooltip>
        
        <div></div>
        <Tooltip content="Bottom" placement="bottom" color="green">
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#22c55e',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}>
            B
          </div>
        </Tooltip>
        <div></div>
      </div>
    </div>
  )
};

export const ImprovementsDemo = {
  name: 'Mejoras - Centrado y Espaciado',
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '3rem', 
      padding: '3rem',
      backgroundColor: '#f8fafc',
      borderRadius: '8px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#374151' }}>Problemas Solucionados</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>✅ Flecha del mismo color | ✅ Centrado perfecto | ✅ Espaciado adecuado</p>
      </div>
      
      {/* Iconos pequeños para probar centrado */}
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#6b7280' }}>Iconos pequeños</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Tooltip content="Información adicional" color="info">
              <PiInfo size={20} style={{ color: '#0ea5e9', cursor: 'pointer' }} />
            </Tooltip>
            
            <Tooltip content="Advertencia importante" color="warning" placement="bottom">
              <PiWarning size={16} style={{ color: '#f59e0b', cursor: 'pointer' }} />
            </Tooltip>
            
            <Tooltip content="Operación exitosa" color="success" placement="right">
              <PiCheck size={18} style={{ color: '#10b981', cursor: 'pointer' }} />
            </Tooltip>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#6b7280' }}>Botones grandes</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Tooltip content="Botón primario con tooltip centrado" color="primary">
              <Button size="lg">Grande</Button>
            </Tooltip>
            
            <Tooltip content="Botón secundario" color="secondary" placement="bottom">
              <Button variant="outline" size="lg">Outline</Button>
            </Tooltip>
          </div>
        </div>
      </div>
      
      {/* Demostración de colores con flechas */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 2rem 0', fontSize: '0.875rem', color: '#6b7280' }}>Todos los colores con flechas del mismo color</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { color: 'primary', label: 'Primary' },
            { color: 'success', label: 'Success' },
            { color: 'warning', label: 'Warning' },
            { color: 'danger', label: 'Danger' },
            { color: 'info', label: 'Info' },
            { color: 'secondary', label: 'Secondary' }
          ].map(({ color, label }) => (
            <Tooltip 
              key={color}
              content={`Tooltip ${label} con flecha del mismo color`} 
              color={color}
              placement="top"
            >
              <div style={{
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                backgroundColor: `var(--q-color-${color}, #6b7280)`,
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {label}
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
      
      {/* Espaciado y posicionamiento */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr auto 1fr', 
        gap: '2rem',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <Tooltip content="Espaciado perfecto izquierda" placement="left" color="purple">
          <Button variant="outline">Left</Button>
        </Tooltip>
        
        <div style={{ textAlign: 'center' }}>
          <Tooltip content="Centrado vertical y horizontal perfecto" placement="top" color="emerald">
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              ✓
            </div>
          </Tooltip>
          <p style={{ margin: '1rem 0 0 0', fontSize: '0.75rem', color: '#6b7280' }}>Elemento circular</p>
        </div>
        
        <Tooltip content="Espaciado perfecto derecha" placement="right" color="pink">
          <Button variant="outline">Right</Button>
        </Tooltip>
      </div>
    </div>
  )
};
