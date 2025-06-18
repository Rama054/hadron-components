import React, { useState } from 'react';
import Stepper from './Stepper';
import { IoPersonOutline, IoCardOutline, IoShieldCheckmarkOutline, IoCheckmarkDoneOutline } from 'react-icons/io5';
import Button from '../button/Button';

export default {
    title: 'Components/Stepper',
    component: Stepper.Root,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Componente Stepper para guiar usuarios a través de procesos paso a paso con validación y navegación flexible.'
            }
        }
    },
    argTypes: {
        position: {
            control: { type: 'select' },
            options: ['top', 'right', 'bottom', 'left'],
            description: 'Posición de la navegación'
        },
        orientation: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical'],
            description: 'Orientación del stepper'
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
            description: 'Color del stepper'
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Tamaño del stepper'
        },
        allowClickNavigation: {
            control: { type: 'boolean' },
            description: 'Permitir navegación haciendo click en los pasos'
        },
        showControls: {
            control: { type: 'boolean' },
            description: 'Mostrar botones de navegación'
        }
    }
};

export const Default = {
    render: (args) => {
        const [currentStep, setCurrentStep] = useState(0);

        return (
            <div style={{ padding: '2rem', minHeight: '600px' }}>
                <h2 style={{ marginBottom: '2rem' }}>Basic Stepper</h2>
                
                <Stepper.Root
                    {...args}
                    activeStep={currentStep}
                    onStepChange={setCurrentStep}
                >
                    <Stepper.Step title="Header I">
                        <div style={{ padding: '4rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                            <h3>Content I</h3>
                            <p>This is the content for the first step.</p>
                        </div>
                    </Stepper.Step>

                    <Stepper.Step title="Header II">
                        <div style={{ padding: '4rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                            <h3>Content II</h3>
                            <p>This is the content for the second step.</p>
                        </div>
                    </Stepper.Step>

                    <Stepper.Step title="Header III">
                        <div style={{ padding: '4rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                            <h3>Content III</h3>
                            <p>This is the content for the third step.</p>
                        </div>
                    </Stepper.Step>
                </Stepper.Root>
            </div>
        );
    },
    args: {
        position: 'top',
        color: 'primary',
        size: 'md'
    }
};

export const PositionVariants = {
    render: (args) => {
        const positions = ['top', 'right', 'bottom', 'left'];
        
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '2rem' }}>
                {positions.map((position) => (
                    <div key={position} style={{ minHeight: '400px' }}>
                        <h3 style={{ marginBottom: '1rem', textTransform: 'capitalize' }}>
                            Position: {position}
                        </h3>
                        <Stepper.Root position={position} size="sm" showControls={false}>
                            <Stepper.Step title="Header I">
                                <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                                    Content I
                                </div>
                            </Stepper.Step>
                            <Stepper.Step title="Header II">
                                <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                                    Content II
                                </div>
                            </Stepper.Step>
                            <Stepper.Step title="Header III">
                                <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                                    Content III
                                </div>
                            </Stepper.Step>
                        </Stepper.Root>
                    </div>
                ))}
            </div>
        );
    }
};

export const WithValidation = {
    render: (args) => {
        const [currentStep, setCurrentStep] = useState(0);
        const [stepData, setStepData] = useState({
            0: { name: '', email: '' },
            1: { terms: false, privacy: false },
            2: { confirmation: '' }
        });

        // Validadores por step
        const validators = {
            0: () => stepData[0].name.length > 2 && stepData[0].email.includes('@'),
            1: () => stepData[1].terms && stepData[1].privacy,
            2: () => stepData[2].confirmation === 'CONFIRMAR'
        };

        const updateStepData = (step, data) => {
            setStepData(prev => ({
                ...prev,
                [step]: { ...prev[step], ...data }
            }));
        };

        return (
            <div style={{ padding: '2rem', maxWidth: '600px' }}>
                <h2 style={{ marginBottom: '2rem' }}>Stepper with Validation</h2>
                
                <Stepper.Root
                    activeStep={currentStep}
                    onStepChange={setCurrentStep}
                    color="success"
                    stepValidator={(nextStep, currentStep) => {
                        return validators[currentStep] ? validators[currentStep]() : true;
                    }}
                >
                    <Stepper.Step
                        title="Basic Data"
                        description="Complete required information"
                        validator={validators[0]}
                    >
                        <div style={{ padding: '2rem' }}>
                            <h3>Basic Information</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                                <input 
                                    placeholder="Name (minimum 3 characters)" 
                                    value={stepData[0].name}
                                    onChange={(e) => updateStepData(0, { name: e.target.value })}
                                    style={{ 
                                        padding: '0.75rem', 
                                        border: stepData[0].name.length > 2 ? '2px solid #10b981' : '1px solid #ddd', 
                                        borderRadius: '4px' 
                                    }}
                                />
                                <input 
                                    type="email" 
                                    placeholder="Valid email" 
                                    value={stepData[0].email}
                                    onChange={(e) => updateStepData(0, { email: e.target.value })}
                                    style={{ 
                                        padding: '0.75rem', 
                                        border: stepData[0].email.includes('@') ? '2px solid #10b981' : '1px solid #ddd', 
                                        borderRadius: '4px' 
                                    }}
                                />
                            </div>
                            <div style={{ 
                                marginTop: '1rem', 
                                padding: '0.75rem', 
                                backgroundColor: validators[0]() ? '#dcfce7' : '#fef2f2',
                                borderRadius: '4px',
                                fontSize: '0.875rem'
                            }}>
                                {validators[0]() ? '✅ Valid data' : '❌ Complete all fields correctly'}
                            </div>
                        </div>
                    </Stepper.Step>

                    <Stepper.Step
                        title="Terms & Conditions"
                        description="Accept terms to continue"
                        validator={validators[1]}
                    >
                        <div style={{ padding: '2rem' }}>
                            <h3>Terms & Conditions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={stepData[1].terms}
                                        onChange={(e) => updateStepData(1, { terms: e.target.checked })}
                                    />
                                    I accept the terms and conditions
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <input 
                                        type="checkbox" 
                                        checked={stepData[1].privacy}
                                        onChange={(e) => updateStepData(1, { privacy: e.target.checked })}
                                    />
                                    I accept the privacy policy
                                </label>
                            </div>
                            <div style={{ 
                                marginTop: '1rem', 
                                padding: '0.75rem', 
                                backgroundColor: validators[1]() ? '#dcfce7' : '#fef2f2',
                                borderRadius: '4px',
                                fontSize: '0.875rem'
                            }}>
                                {validators[1]() ? '✅ Terms accepted' : '❌ You must accept both terms'}
                            </div>
                        </div>
                    </Stepper.Step>

                    <Stepper.Step
                        title="Confirmation"
                        description="Confirm your registration"
                        validator={validators[2]}
                    >
                        <div style={{ padding: '2rem' }}>
                            <h3>Confirm Registration</h3>
                            <p>Type "CONFIRMAR" to finish the process:</p>
                            <input 
                                placeholder="Type CONFIRMAR" 
                                value={stepData[2].confirmation}
                                onChange={(e) => updateStepData(2, { confirmation: e.target.value })}
                                style={{ 
                                    padding: '0.75rem', 
                                    border: validators[2]() ? '2px solid #10b981' : '1px solid #ddd', 
                                    borderRadius: '4px',
                                    width: '100%',
                                    marginTop: '1rem'
                                }}
                            />
                            <div style={{ 
                                marginTop: '1rem', 
                                padding: '0.75rem', 
                                backgroundColor: validators[2]() ? '#dcfce7' : '#fef2f2',
                                borderRadius: '4px',
                                fontSize: '0.875rem'
                            }}>
                                {validators[2]() ? '✅ Correct confirmation' : '❌ Type exactly "CONFIRMAR"'}
                            </div>
                        </div>
                    </Stepper.Step>
                </Stepper.Root>
            </div>
        );
    }
};
