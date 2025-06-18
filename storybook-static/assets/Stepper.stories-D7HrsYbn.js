import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u,R as y}from"./index-BZISi7jw.js";import{P as r}from"./index-Co38GRlK.js";import{n as pe,o as de,f as le}from"./index-I48yvNyK.js";import{B as N}from"./Button-kmOhRj6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";import"./Spinner-DKwzja_x.js";const X=u.createContext(),ce=()=>{const d=u.useContext(X);if(!d)throw new Error("Stepper.Step debe estar dentro de Stepper.Root");return d};function Z({children:d,activeStep:m=0,onStepChange:c,color:i="primary",size:h="md",orientation:s="horizontal",position:l="top",allowClickNavigation:o=!0,showControls:g=!0,nextButtonText:f="Siguiente",backButtonText:T="Atrás",finishButtonText:te="Finalizar",customFinishButton:re,onFinish:A,stepValidator:q,className:B,...ie}){const[a,z]=u.useState(m),[V,w]=u.useState(new Set),[k,ae]=u.useState({});u.useEffect(()=>{z(m)},[m]);const S=y.Children.count(d),C=(t,n=!1)=>!n&&q&&!q(t,a)||!n&&k[a]===!1?!1:t>=0&&t<S?(z(t),c&&c(t,a),!0):!1,H=()=>a<S-1?(w(t=>new Set([...t,a])),C(a+1)):!1,O=()=>a>0?C(a-1,!0):!1,F=()=>{w(t=>new Set([...t,a])),A&&A(a,V)},se=(t,n)=>{ae(x=>({...x,[t]:n}))},D=t=>V.has(t)||t<a,P=t=>!o||t===a?!1:t<a?!0:D(t-1),ne={currentStep:a,totalSteps:S,goToStep:C,nextStep:H,prevStep:O,finish:F,validateStep:se,isStepCompleted:D,canNavigateToStep:P,color:i,size:h,orientation:s,position:l,allowClickNavigation:o,stepValidations:k},b=()=>y.Children.map(d,(t,n)=>{if(!y.isValidElement(t))return null;const x=n===a,E=D(n),$=P(n);return e.jsxs("div",{className:`q-stepper-nav-item ${x?"active":""} ${E?"completed":""} ${$?"clickable":""}`,onClick:()=>$&&C(n),children:[e.jsx("div",{className:"q-stepper-nav-indicator",children:E&&n!==a?e.jsx(pe,{size:16}):e.jsx("span",{children:n+1})}),e.jsxs("div",{className:"q-stepper-nav-content",children:[e.jsx("div",{className:"q-stepper-nav-title",children:t.props.title||`Step ${n+1}`}),t.props.description&&e.jsx("div",{className:"q-stepper-nav-description",children:t.props.description})]}),n<S-1&&e.jsx("div",{className:"q-stepper-nav-connector"})]})}),oe=()=>{if(!g)return null;const t=a===0,n=a===S-1,x=k[a]!==!1;return e.jsxs("div",{className:"q-stepper-controls",children:[!t&&e.jsx(N,{variant:"outline",color:i,size:h,onClick:O,leftIcon:e.jsx(de,{size:16}),children:T}),e.jsx("div",{className:"q-stepper-controls-spacer"}),n?re||e.jsx(N,{variant:"solid",color:i,size:h,onClick:F,disabled:!x,children:te}):e.jsx(N,{variant:"solid",color:i,size:h,onClick:H,disabled:!x,rightIcon:e.jsx(le,{size:16}),children:f})]})};let M="q-stepper";B&&(M+=` ${B}`);const v=l;return e.jsx(X.Provider,{value:ne,children:e.jsxs("div",{className:M,"data-color":i,"data-size":h,"data-orientation":s,"data-position":l,...ie,children:[v==="top"&&e.jsx("div",{className:"q-stepper-navigation",children:b()}),e.jsxs("div",{className:"q-stepper-body",children:[v==="left"&&e.jsx("div",{className:"q-stepper-navigation",children:b()}),e.jsxs("div",{className:"q-stepper-content",children:[y.Children.map(d,(t,n)=>n===a?y.cloneElement(t,{key:n,stepIndex:n,isActive:!0}):null),(v==="top"||v==="bottom")&&oe()]}),v==="right"&&e.jsx("div",{className:"q-stepper-navigation",children:b()})]}),v==="bottom"&&e.jsx("div",{className:"q-stepper-navigation",children:b()})]})})}function ee({children:d,title:m,description:c,stepIndex:i,isActive:h,validator:s,className:l,...o}){const{validateStep:g}=ce();u.useEffect(()=>{if(s&&i!==void 0){const T=s();g(i,T)}},[s,i,g]);let f="q-stepper-step";return l&&(f+=` ${l}`),h&&(f+=" q-stepper-step-active"),e.jsx("div",{className:f,...o,children:d})}Z.propTypes={children:r.node.isRequired,activeStep:r.number,onStepChange:r.func,color:r.string,size:r.oneOf(["sm","md","lg"]),orientation:r.oneOf(["horizontal","vertical"]),position:r.oneOf(["top","right","bottom","left"]),allowClickNavigation:r.bool,showControls:r.bool,nextButtonText:r.string,backButtonText:r.string,finishButtonText:r.string,customFinishButton:r.node,onFinish:r.func,stepValidator:r.func,className:r.string};ee.propTypes={children:r.node.isRequired,title:r.string,description:r.string,stepIndex:r.number,isActive:r.bool,validator:r.func,className:r.string};const p={Root:Z,Step:ee},ye={title:"Components/Stepper",component:p.Root,parameters:{layout:"fullscreen",docs:{description:{component:"Componente Stepper para guiar usuarios a través de procesos paso a paso con validación y navegación flexible."}}},argTypes:{position:{control:{type:"select"},options:["top","right","bottom","left"],description:"Posición de la navegación"},orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Orientación del stepper"},color:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info"],description:"Color del stepper"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del stepper"},allowClickNavigation:{control:{type:"boolean"},description:"Permitir navegación haciendo click en los pasos"},showControls:{control:{type:"boolean"},description:"Mostrar botones de navegación"}}},j={render:d=>{const[m,c]=u.useState(0);return e.jsxs("div",{style:{padding:"2rem",minHeight:"600px"},children:[e.jsx("h2",{style:{marginBottom:"2rem"},children:"Basic Stepper"}),e.jsxs(p.Root,{...d,activeStep:m,onStepChange:c,children:[e.jsx(p.Step,{title:"Header I",children:e.jsxs("div",{style:{padding:"4rem",background:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:[e.jsx("h3",{children:"Content I"}),e.jsx("p",{children:"This is the content for the first step."})]})}),e.jsx(p.Step,{title:"Header II",children:e.jsxs("div",{style:{padding:"4rem",background:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:[e.jsx("h3",{children:"Content II"}),e.jsx("p",{children:"This is the content for the second step."})]})}),e.jsx(p.Step,{title:"Header III",children:e.jsxs("div",{style:{padding:"4rem",background:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:[e.jsx("h3",{children:"Content III"}),e.jsx("p",{children:"This is the content for the third step."})]})})]})]})},args:{position:"top",color:"primary",size:"md"}},I={render:d=>{const m=["top","right","bottom","left"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",padding:"2rem"},children:m.map(c=>e.jsxs("div",{style:{minHeight:"400px"},children:[e.jsxs("h3",{style:{marginBottom:"1rem",textTransform:"capitalize"},children:["Position: ",c]}),e.jsxs(p.Root,{position:c,size:"sm",showControls:!1,children:[e.jsx(p.Step,{title:"Header I",children:e.jsx("div",{style:{padding:"2rem",background:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:"Content I"})}),e.jsx(p.Step,{title:"Header II",children:e.jsx("div",{style:{padding:"2rem",background:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:"Content II"})}),e.jsx(p.Step,{title:"Header III",children:e.jsx("div",{style:{padding:"2rem",background:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:"Content III"})})]})]},c))})}},R={render:d=>{const[m,c]=u.useState(0),[i,h]=u.useState({0:{name:"",email:""},1:{terms:!1,privacy:!1},2:{confirmation:""}}),s={0:()=>i[0].name.length>2&&i[0].email.includes("@"),1:()=>i[1].terms&&i[1].privacy,2:()=>i[2].confirmation==="CONFIRMAR"},l=(o,g)=>{h(f=>({...f,[o]:{...f[o],...g}}))};return e.jsxs("div",{style:{padding:"2rem",maxWidth:"600px"},children:[e.jsx("h2",{style:{marginBottom:"2rem"},children:"Stepper with Validation"}),e.jsxs(p.Root,{activeStep:m,onStepChange:c,color:"success",stepValidator:(o,g)=>s[g]?s[g]():!0,children:[e.jsx(p.Step,{title:"Basic Data",description:"Complete required information",validator:s[0],children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h3",{children:"Basic Information"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",marginTop:"1rem"},children:[e.jsx("input",{placeholder:"Name (minimum 3 characters)",value:i[0].name,onChange:o=>l(0,{name:o.target.value}),style:{padding:"0.75rem",border:i[0].name.length>2?"2px solid #10b981":"1px solid #ddd",borderRadius:"4px"}}),e.jsx("input",{type:"email",placeholder:"Valid email",value:i[0].email,onChange:o=>l(0,{email:o.target.value}),style:{padding:"0.75rem",border:i[0].email.includes("@")?"2px solid #10b981":"1px solid #ddd",borderRadius:"4px"}})]}),e.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",backgroundColor:s[0]()?"#dcfce7":"#fef2f2",borderRadius:"4px",fontSize:"0.875rem"},children:s[0]()?"✅ Valid data":"❌ Complete all fields correctly"})]})}),e.jsx(p.Step,{title:"Terms & Conditions",description:"Accept terms to continue",validator:s[1],children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h3",{children:"Terms & Conditions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",marginTop:"1rem"},children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("input",{type:"checkbox",checked:i[1].terms,onChange:o=>l(1,{terms:o.target.checked})}),"I accept the terms and conditions"]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("input",{type:"checkbox",checked:i[1].privacy,onChange:o=>l(1,{privacy:o.target.checked})}),"I accept the privacy policy"]})]}),e.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",backgroundColor:s[1]()?"#dcfce7":"#fef2f2",borderRadius:"4px",fontSize:"0.875rem"},children:s[1]()?"✅ Terms accepted":"❌ You must accept both terms"})]})}),e.jsx(p.Step,{title:"Confirmation",description:"Confirm your registration",validator:s[2],children:e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h3",{children:"Confirm Registration"}),e.jsx("p",{children:'Type "CONFIRMAR" to finish the process:'}),e.jsx("input",{placeholder:"Type CONFIRMAR",value:i[2].confirmation,onChange:o=>l(2,{confirmation:o.target.value}),style:{padding:"0.75rem",border:s[2]()?"2px solid #10b981":"1px solid #ddd",borderRadius:"4px",width:"100%",marginTop:"1rem"}}),e.jsx("div",{style:{marginTop:"1rem",padding:"0.75rem",backgroundColor:s[2]()?"#dcfce7":"#fef2f2",borderRadius:"4px",fontSize:"0.875rem"},children:s[2]()?"✅ Correct confirmation":'❌ Type exactly "CONFIRMAR"'})]})})]})]})}};var W,_,Y;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [currentStep, setCurrentStep] = useState(0);
    return <div style={{
      padding: '2rem',
      minHeight: '600px'
    }}>\r
                <h2 style={{
        marginBottom: '2rem'
      }}>Basic Stepper</h2>\r
                \r
                <Stepper.Root {...args} activeStep={currentStep} onStepChange={setCurrentStep}>\r
                    <Stepper.Step title="Header I">\r
                        <div style={{
            padding: '4rem',
            background: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center'
          }}>\r
                            <h3>Content I</h3>\r
                            <p>This is the content for the first step.</p>\r
                        </div>\r
                    </Stepper.Step>\r
\r
                    <Stepper.Step title="Header II">\r
                        <div style={{
            padding: '4rem',
            background: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center'
          }}>\r
                            <h3>Content II</h3>\r
                            <p>This is the content for the second step.</p>\r
                        </div>\r
                    </Stepper.Step>\r
\r
                    <Stepper.Step title="Header III">\r
                        <div style={{
            padding: '4rem',
            background: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center'
          }}>\r
                            <h3>Content III</h3>\r
                            <p>This is the content for the third step.</p>\r
                        </div>\r
                    </Stepper.Step>\r
                </Stepper.Root>\r
            </div>;
  },
  args: {
    position: 'top',
    color: 'primary',
    size: 'md'
  }
}`,...(Y=(_=j.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var L,G,J;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const positions = ['top', 'right', 'bottom', 'left'];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      padding: '2rem'
    }}>\r
                {positions.map(position => <div key={position} style={{
        minHeight: '400px'
      }}>\r
                        <h3 style={{
          marginBottom: '1rem',
          textTransform: 'capitalize'
        }}>\r
                            Position: {position}\r
                        </h3>\r
                        <Stepper.Root position={position} size="sm" showControls={false}>\r
                            <Stepper.Step title="Header I">\r
                                <div style={{
              padding: '2rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              textAlign: 'center'
            }}>\r
                                    Content I\r
                                </div>\r
                            </Stepper.Step>\r
                            <Stepper.Step title="Header II">\r
                                <div style={{
              padding: '2rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              textAlign: 'center'
            }}>\r
                                    Content II\r
                                </div>\r
                            </Stepper.Step>\r
                            <Stepper.Step title="Header III">\r
                                <div style={{
              padding: '2rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              textAlign: 'center'
            }}>\r
                                    Content III\r
                                </div>\r
                            </Stepper.Step>\r
                        </Stepper.Root>\r
                    </div>)}\r
            </div>;
  }
}`,...(J=(G=I.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepData, setStepData] = useState({
      0: {
        name: '',
        email: ''
      },
      1: {
        terms: false,
        privacy: false
      },
      2: {
        confirmation: ''
      }
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
        [step]: {
          ...prev[step],
          ...data
        }
      }));
    };
    return <div style={{
      padding: '2rem',
      maxWidth: '600px'
    }}>\r
                <h2 style={{
        marginBottom: '2rem'
      }}>Stepper with Validation</h2>\r
                \r
                <Stepper.Root activeStep={currentStep} onStepChange={setCurrentStep} color="success" stepValidator={(nextStep, currentStep) => {
        return validators[currentStep] ? validators[currentStep]() : true;
      }}>\r
                    <Stepper.Step title="Basic Data" description="Complete required information" validator={validators[0]}>\r
                        <div style={{
            padding: '2rem'
          }}>\r
                            <h3>Basic Information</h3>\r
                            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '1rem'
            }}>\r
                                <input placeholder="Name (minimum 3 characters)" value={stepData[0].name} onChange={e => updateStepData(0, {
                name: e.target.value
              })} style={{
                padding: '0.75rem',
                border: stepData[0].name.length > 2 ? '2px solid #10b981' : '1px solid #ddd',
                borderRadius: '4px'
              }} />\r
                                <input type="email" placeholder="Valid email" value={stepData[0].email} onChange={e => updateStepData(0, {
                email: e.target.value
              })} style={{
                padding: '0.75rem',
                border: stepData[0].email.includes('@') ? '2px solid #10b981' : '1px solid #ddd',
                borderRadius: '4px'
              }} />\r
                            </div>\r
                            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: validators[0]() ? '#dcfce7' : '#fef2f2',
              borderRadius: '4px',
              fontSize: '0.875rem'
            }}>\r
                                {validators[0]() ? '✅ Valid data' : '❌ Complete all fields correctly'}\r
                            </div>\r
                        </div>\r
                    </Stepper.Step>\r
\r
                    <Stepper.Step title="Terms & Conditions" description="Accept terms to continue" validator={validators[1]}>\r
                        <div style={{
            padding: '2rem'
          }}>\r
                            <h3>Terms & Conditions</h3>\r
                            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '1rem'
            }}>\r
                                <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>\r
                                    <input type="checkbox" checked={stepData[1].terms} onChange={e => updateStepData(1, {
                  terms: e.target.checked
                })} />\r
                                    I accept the terms and conditions\r
                                </label>\r
                                <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>\r
                                    <input type="checkbox" checked={stepData[1].privacy} onChange={e => updateStepData(1, {
                  privacy: e.target.checked
                })} />\r
                                    I accept the privacy policy\r
                                </label>\r
                            </div>\r
                            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: validators[1]() ? '#dcfce7' : '#fef2f2',
              borderRadius: '4px',
              fontSize: '0.875rem'
            }}>\r
                                {validators[1]() ? '✅ Terms accepted' : '❌ You must accept both terms'}\r
                            </div>\r
                        </div>\r
                    </Stepper.Step>\r
\r
                    <Stepper.Step title="Confirmation" description="Confirm your registration" validator={validators[2]}>\r
                        <div style={{
            padding: '2rem'
          }}>\r
                            <h3>Confirm Registration</h3>\r
                            <p>Type "CONFIRMAR" to finish the process:</p>\r
                            <input placeholder="Type CONFIRMAR" value={stepData[2].confirmation} onChange={e => updateStepData(2, {
              confirmation: e.target.value
            })} style={{
              padding: '0.75rem',
              border: validators[2]() ? '2px solid #10b981' : '1px solid #ddd',
              borderRadius: '4px',
              width: '100%',
              marginTop: '1rem'
            }} />\r
                            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: validators[2]() ? '#dcfce7' : '#fef2f2',
              borderRadius: '4px',
              fontSize: '0.875rem'
            }}>\r
                                {validators[2]() ? '✅ Correct confirmation' : '❌ Type exactly "CONFIRMAR"'}\r
                            </div>\r
                        </div>\r
                    </Stepper.Step>\r
                </Stepper.Root>\r
            </div>;
  }
}`,...(U=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ce=["Default","PositionVariants","WithValidation"];export{j as Default,I as PositionVariants,R as WithValidation,Ce as __namedExportsOrder,ye as default};
