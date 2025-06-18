import RadioCards from './RadioCards';
import { useState } from 'react';
import { PiCreditCard, PiBank, PiWallet, PiCurrencyDollar } from 'react-icons/pi';

export default {
  title: 'Components/RadioCards',
  component: RadioCards.Root,
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
  const [selectedValue, setSelectedValue] = useState('');
  
  return (
    <div style={{ width: '600px' }}>
      <RadioCards.Root
        {...args}
        name="payment-method"
        onChange={setSelectedValue}
      >
        <RadioCards.Item
          value="credit-card"
          title="Tarjeta de crédito"
          description="Pago con tarjeta de crédito o débito"
          icon={<PiCreditCard size={24} />}
        />
        <RadioCards.Item
          value="bank"
          title="Transferencia bancaria"
          description="Transferencia directa desde tu cuenta"
          icon={<PiBank size={24} />}
        />
        <RadioCards.Item
          value="wallet"
          title="Billetera digital"
          description="Pago con billetera virtual"
          icon={<PiWallet size={24} />}
        />
        <RadioCards.Item
          value="cash"
          title="Efectivo"
          description="Pago en efectivo al recibir"
          icon={<PiCurrencyDollar size={24} />}
          disabled
        />
      </RadioCards.Root>
      
      <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <strong>Valor seleccionado:</strong> {selectedValue || 'Ninguno'}
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
    const [selectedValue, setSelectedValue] = useState('');
    
    return (
      <div style={{ width: '800px' }}>
        <RadioCards.Root
          {...args}
          name="plan-selection"
          onChange={setSelectedValue}
        >
          <RadioCards.Item
            value="basic"
            title="Plan Básico"
            description="Ideal para uso personal"
          />
          <RadioCards.Item
            value="pro"
            title="Plan Pro"
            description="Para equipos pequeños"
          />
          <RadioCards.Item
            value="enterprise"
            title="Plan Enterprise"
            description="Para grandes organizaciones"
          />
          <RadioCards.Item
            value="custom"
            title="Plan Personalizado"
            description="Solución a medida"
          />
          <RadioCards.Item
            value="trial"
            title="Prueba Gratuita"
            description="30 días gratis"
          />
          <RadioCards.Item
            value="student"
            title="Plan Estudiante"
            description="Descuento especial"
          />
        </RadioCards.Root>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Plan seleccionado:</strong> {selectedValue || 'Ninguno'}
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
    const [selectedValue, setSelectedValue] = useState('');
    
    return (
      <div style={{ width: '400px' }}>
        <RadioCards.Root
          {...args}
          name="size-selection"
          onChange={setSelectedValue}
        >
          <RadioCards.Item value="xs">XS</RadioCards.Item>
          <RadioCards.Item value="sm">SM</RadioCards.Item>
          <RadioCards.Item value="md">MD</RadioCards.Item>
          <RadioCards.Item value="lg">LG</RadioCards.Item>
          <RadioCards.Item value="xl">XL</RadioCards.Item>
        </RadioCards.Root>
        
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <strong>Talla seleccionada:</strong> {selectedValue || 'Ninguna'}
        </div>
      </div>
    );
  },
  args: {
    columns: { sm: 3, md: 5 },
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
          <strong>Selecciona tu método de pago preferido:</strong>
        </div>
        
        <RadioCards.Root
          {...args}
          name="paymentMethod"
          form={mockForm}
        >
          <RadioCards.Item
            value="visa"
            title="Visa"
            description="Tarjeta Visa"
            icon={<PiCreditCard size={20} />}
          />
          <RadioCards.Item
            value="mastercard"
            title="Mastercard"
            description="Tarjeta Mastercard"
            icon={<PiCreditCard size={20} />}
          />
          <RadioCards.Item
            value="paypal"
            title="PayPal"
            description="Cuenta PayPal"
            icon={<PiWallet size={20} />}
          />
        </RadioCards.Root>
        
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
