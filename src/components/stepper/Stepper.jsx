import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../css/stepper.css';
import { IoChevronBack, IoChevronForward, IoCheckmark } from 'react-icons/io5';
import Button from '../button/Button';

// Context para compartir estado entre Root y Step
const StepperContext = createContext();

// Hook para usar el contexto
const useStepper = () => {
    const context = useContext(StepperContext);
    if (!context) {
        throw new Error('Stepper.Step debe estar dentro de Stepper.Root');
    }
    return context;
};

// Componente Root del Stepper
function Root({
    children,
    activeStep = 0,
    onStepChange,
    color = 'primary',
    size = 'md',
    orientation = 'horizontal',
    position = 'top',
    allowClickNavigation = true,
    showControls = true,
    nextButtonText = 'Siguiente',
    backButtonText = 'Atrás',
    finishButtonText = 'Finalizar',
    customFinishButton,
    onFinish,
    stepValidator,
    className,
    ...props
}) {
    const [currentStep, setCurrentStep] = useState(activeStep);
    const [completedSteps, setCompletedSteps] = useState(new Set());
    const [stepValidations, setStepValidations] = useState({});

    // Sincronizar con prop externa
    useEffect(() => {
        setCurrentStep(activeStep);
    }, [activeStep]);

    // Contar total de steps
    const totalSteps = React.Children.count(children);

    // Funciones de navegación
    const goToStep = (stepIndex, force = false) => {
        // Validar si el step está bloqueado
        if (!force && stepValidator && !stepValidator(stepIndex, currentStep)) {
            return false;
        }

        // Validar si el step actual es válido antes de moverse
        if (!force && stepValidations[currentStep] === false) {
            return false;
        }

        if (stepIndex >= 0 && stepIndex < totalSteps) {
            setCurrentStep(stepIndex);
            if (onStepChange) {
                onStepChange(stepIndex, currentStep);
            }
            return true;
        }
        return false;
    };

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            // Marcar step actual como completado
            setCompletedSteps(prev => new Set([...prev, currentStep]));
            return goToStep(currentStep + 1);
        }
        return false;
    };

    const prevStep = () => {
        if (currentStep > 0) {
            return goToStep(currentStep - 1, true); // Permitir volver siempre
        }
        return false;
    };

    const finish = () => {
        // Marcar último step como completado
        setCompletedSteps(prev => new Set([...prev, currentStep]));
        if (onFinish) {
            onFinish(currentStep, completedSteps);
        }
    };

    // Función para validar un step
    const validateStep = (stepIndex, isValid) => {
        setStepValidations(prev => ({
            ...prev,
            [stepIndex]: isValid
        }));
    };

    // Verificar si un step está completado
    const isStepCompleted = (stepIndex) => {
        return completedSteps.has(stepIndex) || stepIndex < currentStep;
    };

    // Verificar si se puede navegar a un step
    const canNavigateToStep = (stepIndex) => {
        if (!allowClickNavigation) return false;
        if (stepIndex === currentStep) return false;
        if (stepIndex < currentStep) return true; // Siempre se puede volver atrás
        return isStepCompleted(stepIndex - 1); // Solo si el anterior está completado
    };

    // Valor del contexto
    const contextValue = {
        currentStep,
        totalSteps,
        goToStep,
        nextStep,
        prevStep,
        finish,
        validateStep,
        isStepCompleted,
        canNavigateToStep,
        color,
        size,
        orientation,
        position,
        allowClickNavigation,
        stepValidations
    };

    // Renderizar navegación
    const renderNavigation = () => {
        return React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null;

            const isActive = index === currentStep;
            const isCompleted = isStepCompleted(index);
            const canNavigate = canNavigateToStep(index);

            return (
                <div 
                    className={`q-stepper-nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${canNavigate ? 'clickable' : ''}`}
                    onClick={() => canNavigate && goToStep(index)}
                >
                    <div className="q-stepper-nav-indicator">
                        {isCompleted && index !== currentStep ? (
                            <IoCheckmark size={16} />
                        ) : (
                            <span>{index + 1}</span>
                        )}
                    </div>
                    <div className="q-stepper-nav-content">
                        <div className="q-stepper-nav-title">
                            {child.props.title || `Step ${index + 1}`}
                        </div>
                        {child.props.description && (
                            <div className="q-stepper-nav-description">
                                {child.props.description}
                            </div>
                        )}
                    </div>
                    {index < totalSteps - 1 && <div className="q-stepper-nav-connector" />}
                </div>
            );
        });
    };

    // Renderizar controles
    const renderControls = () => {
        if (!showControls) return null;

        const isFirst = currentStep === 0;
        const isLast = currentStep === totalSteps - 1;
        const canProceed = stepValidations[currentStep] !== false;

        return (
            <div className="q-stepper-controls">
                {!isFirst && (
                    <Button
                        variant="outline"
                        color={color}
                        size={size}
                        onClick={prevStep}
                    >
                        {backButtonText}
                    </Button>
                )}
                
                <div className="q-stepper-controls-spacer" />
                
                {!isLast ? (
                    <Button
                        variant="solid"
                        color={color}
                        size={size}
                        onClick={nextStep}
                        disabled={!canProceed}
                        rightIcon={<IoChevronForward size={16} />}
                    >
                        {nextButtonText}
                    </Button>
                ) : (
                    customFinishButton || (
                        <Button
                            variant="solid"
                            color={color}
                            size={size}
                            onClick={finish}
                            disabled={!canProceed}
                        >
                            {finishButtonText}
                        </Button>
                    )
                )}
            </div>
        );
    };

    let stepperClass = 'q-stepper';
    if (className) stepperClass += ` ${className}`;

    const isVertical = orientation === 'vertical';
    const navPosition = position;

    return (
        <StepperContext.Provider value={contextValue}>
            <div 
                className={stepperClass}
                data-color={color}
                data-size={size}
                data-orientation={orientation}
                data-position={position}
                {...props}
            >
                {/* Navegación superior */}
                {navPosition === 'top' && (
                    <div className="q-stepper-navigation">
                        {renderNavigation()}
                    </div>
                )}

                <div className="q-stepper-body">
                    {/* Navegación izquierda */}
                    {navPosition === 'left' && (
                        <div className="q-stepper-navigation">
                            {renderNavigation()}
                        </div>
                    )}

                    {/* Contenido */}
                    <div className="q-stepper-content">
                        {React.Children.map(children, (child, index) => {
                            if (index === currentStep) {
                                return React.cloneElement(child, { 
                                    key: index, 
                                    stepIndex: index,
                                    isActive: true 
                                });
                            }
                            return null;
                        })}

                        {/* Controles en contenido */}
                        {(navPosition === 'top' || navPosition === 'bottom') && renderControls()}
                    </div>

                    {/* Navegación derecha */}
                    {navPosition === 'right' && (
                        <div className="q-stepper-navigation">
                            {renderNavigation()}
                        </div>
                    )}
                </div>

                {/* Navegación inferior */}
                {navPosition === 'bottom' && (
                    <div className="q-stepper-navigation">
                        {renderNavigation()}
                    </div>
                )}
            </div>
        </StepperContext.Provider>
    );
}

// Componente Step del Stepper
function Step({
    children,
    title,
    description,
    stepIndex,
    isActive,
    validator,
    className,
    ...props
}) {
    const { validateStep } = useStepper();

    // Ejecutar validación cuando el componente se monta o cambia
    useEffect(() => {
        if (validator && stepIndex !== undefined) {
            const isValid = validator();
            validateStep(stepIndex, isValid);
        }
    }, [validator, stepIndex, validateStep]);

    let stepClass = 'q-stepper-step';
    if (className) stepClass += ` ${className}`;
    if (isActive) stepClass += ' q-stepper-step-active';

    return (
        <div className={stepClass} {...props}>
            {children}
        </div>
    );
}

// Validación de props
Root.propTypes = {
    children: PropTypes.node.isRequired,
    activeStep: PropTypes.number,
    onStepChange: PropTypes.func,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    allowClickNavigation: PropTypes.bool,
    showControls: PropTypes.bool,
    nextButtonText: PropTypes.string,
    backButtonText: PropTypes.string,
    finishButtonText: PropTypes.string,
    customFinishButton: PropTypes.node,
    onFinish: PropTypes.func,
    stepValidator: PropTypes.func,
    className: PropTypes.string
};

Step.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    stepIndex: PropTypes.number,
    isActive: PropTypes.bool,
    validator: PropTypes.func,
    className: PropTypes.string
};

// Objeto Stepper con componentes
const Stepper = {
    Root,
    Step
};

export default Stepper;
