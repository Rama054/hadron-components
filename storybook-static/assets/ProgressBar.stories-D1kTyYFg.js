import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as i}from"./index-Co38GRlK.js";import{u as p}from"./useThemeMode-8InCWCg3.js";import{r as b}from"./index-BZISi7jw.js";import{B as C}from"./Button-kmOhRj6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-DKwzja_x.js";function r({value:o=0,max:a=100,color:s="primary",size:l="md",variant:t="default",showLabel:j=!1,labelPosition:n="right",customLabel:B,animated:P=!0,striped:c=!1,radius:d="sm",className:T,...ee}){const S=Math.min(Math.max(o/a*100,0),100),w=()=>B||(t==="percentage"?`${Math.round(S)}%`:t==="fraction"?`${o}/${a}`:`${Math.round(S)}%`);let z="q-progress";T&&(z+=` ${T}`),c&&(z+=" q-progress-striped"),P&&c&&(z+=" q-progress-animated");const D=e.jsx("div",{className:z,"data-size":l,"data-radius":d,role:"progressbar","aria-valuenow":o,"aria-valuemin":0,"aria-valuemax":a,...ee,children:e.jsx("div",{className:"q-progress-bar","data-color":s,style:{width:`${S}%`},children:j&&n==="inside"&&e.jsx("span",{className:"q-progress-label q-progress-label-inside",children:w()})})});return j&&n!=="inside"?e.jsxs("div",{className:"q-progress-wrapper",children:[n==="left"&&e.jsx("span",{className:"q-progress-label q-progress-label-outside",children:w()}),D,n==="right"&&e.jsx("span",{className:"q-progress-label q-progress-label-outside",children:w()})]}):D}r.propTypes={value:i.number,max:i.number,color:i.string,size:i.oneOf(["xs","sm","md","lg","xl"]),variant:i.oneOf(["default","percentage","fraction"]),showLabel:i.bool,labelPosition:i.oneOf(["inside","left","right"]),customLabel:i.node,animated:i.bool,striped:i.bool,radius:i.oneOf(["none","sm","md","lg","full"]),className:i.string};r.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},max:{defaultValue:{value:"100",computed:!1},description:"",type:{name:"number"},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'percentage'",computed:!1},{value:"'fraction'",computed:!1}]},required:!1},showLabel:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},labelPosition:{defaultValue:{value:"'right'",computed:!1},description:"",type:{name:"enum",value:[{value:"'inside'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},animated:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},striped:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},radius:{defaultValue:{value:"'sm'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'full'",computed:!1}]},required:!1},customLabel:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const ne={title:"Components/ProgressBar",component:r,parameters:{docs:{description:{component:`
El componente ProgressBar es una barra de progreso minimalista y versátil diseñada para dashboards.
Permite visualizar el progreso de tareas, métricas o cualquier valor porcentual.

### Características principales:
- **Múltiples tamaños** desde xs hasta xl
- **Colores del sistema** integrados con el tema
- **Labels configurables** con diferentes posiciones
- **Animaciones opcionales** con patrón de rayas
- **Totalmente responsivo** y accesible
- **Soporte para temas** claro y oscuro

### Uso básico:
\`\`\`jsx
import ProgressBar from './ProgressBar';

// Progreso simple
<ProgressBar value={75} max={100} color="primary" />

// Con label
<ProgressBar 
    value={45} 
    max={100} 
    color="success" 
    showLabel={true}
    labelPosition="right"
/>

// Animado con rayas
<ProgressBar 
    value={60} 
    max={100} 
    color="warning" 
    striped={true}
    animated={true}
/>
\`\`\`
                `}}},argTypes:{value:{control:{type:"number",min:0,max:100},description:"Valor actual del progreso"},max:{control:{type:"number"},description:"Valor máximo (por defecto 100)"},color:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info","blue","indigo","purple","pink","red","orange","yellow","green","emerald","teal","cyan","sky"],description:"Color de la barra de progreso"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Tamaño de la barra"},variant:{control:{type:"select"},options:["default","percentage","fraction"],description:"Formato del label"},showLabel:{control:{type:"boolean"},description:"Mostrar el label con el valor"},labelPosition:{control:{type:"select"},options:["inside","left","right"],description:"Posición del label"},animated:{control:{type:"boolean"},description:"Animar las rayas (requiere striped=true)"},striped:{control:{type:"boolean"},description:"Mostrar patrón de rayas"},radius:{control:{type:"select"},options:["none","sm","md","lg","full"],description:"Radio de los bordes"}}},m=()=>{const{toggleTheme:o}=p();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Progreso Básico"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"},children:[e.jsx(r,{value:25,max:100,color:"primary"}),e.jsx(r,{value:50,max:100,color:"success"}),e.jsx(r,{value:75,max:100,color:"warning"}),e.jsx(r,{value:90,max:100,color:"danger"})]})]})]})};m.parameters={docs:{description:{story:"Barras de progreso básicas con diferentes valores y colores."}}};const x=()=>{const{toggleTheme:o}=p();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Tamaños"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px"},children:"Extra Small (xs)"}),e.jsx(r,{value:60,size:"xs",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px"},children:"Small (sm)"}),e.jsx(r,{value:60,size:"sm",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px"},children:"Medium (md)"}),e.jsx(r,{value:60,size:"md",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px"},children:"Large (lg)"}),e.jsx(r,{value:60,size:"lg",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px"},children:"Extra Large (xl)"}),e.jsx(r,{value:60,size:"xl",color:"primary"})]})]})]})]})};x.parameters={docs:{description:{story:"Diferentes tamaños de barras de progreso para adaptarse a distintos contextos."}}};const u=()=>{const{toggleTheme:o}=p();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Con Labels"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"600px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"8px"},children:"Label a la derecha"}),e.jsx(r,{value:45,color:"primary",showLabel:!0,labelPosition:"right"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"8px"},children:"Label a la izquierda"}),e.jsx(r,{value:67,color:"success",showLabel:!0,labelPosition:"left"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"8px"},children:"Label dentro (solo visible con progreso mayor al 10%)"}),e.jsx(r,{value:78,color:"info",showLabel:!0,labelPosition:"inside",size:"lg"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"8px"},children:"Formato fracción"}),e.jsx(r,{value:156,max:200,color:"warning",showLabel:!0,variant:"fraction"})]})]})]})]})};u.parameters={docs:{description:{story:"Barras de progreso con labels en diferentes posiciones y formatos."}}};const g=()=>{const{toggleTheme:o}=p(),[a,s]=b.useState(0);return b.useEffect(()=>{const l=setInterval(()=>{s(t=>t>=100?0:t+1)},50);return()=>clearInterval(l)},[]),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Rayas y Animación"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px"},children:"Estático con rayas"}),e.jsx(r,{value:60,color:"primary",striped:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px"},children:"Animado con rayas"}),e.jsx(r,{value:75,color:"success",striped:!0,animated:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px"},children:"Progreso en tiempo real"}),e.jsx(r,{value:a,color:"info",striped:!0,animated:!0,showLabel:!0,labelPosition:"right"})]})]})]})]})};g.parameters={docs:{description:{story:"Barras de progreso con patrón de rayas y animación continua."}}};const v=()=>{const{toggleTheme:o}=p(),a=["primary","secondary","success","warning","danger","info","purple","pink","orange","emerald","cyan","slate"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Colores del Sistema"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"600px"},children:a.map(s=>e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px",textTransform:"capitalize"},children:s}),e.jsx(r,{value:70,color:s})]},s))})]})]})};v.parameters={docs:{description:{story:"Todos los colores disponibles del sistema de diseño."}}};const h=()=>{const{toggleTheme:o}=p(),a=["none","sm","md","lg","full"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Radio de Bordes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"},children:a.map(s=>e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"4px",textTransform:"capitalize"},children:s==="none"?"Sin radio":s}),e.jsx(r,{value:65,color:"primary",radius:s,size:"lg"})]},s))})]})]})};h.parameters={docs:{description:{story:"Diferentes opciones de radio de borde para la barra de progreso."}}};const f=()=>{const{toggleTheme:o}=p(),[a,s]=b.useState(0),[l,t]=b.useState(!1),[j,n]=b.useState(0),B=()=>{s(0);const c=setInterval(()=>{s(d=>d>=100?(clearInterval(c),100):d+Math.random()*15)},300)},P=()=>{t(!0),n(0);const c=setInterval(()=>{n(d=>d>=100?(clearInterval(c),t(!1),0):d+2)},50)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Ejemplos para Dashboard"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"800px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"var(--hadr-surface-bg)",border:"1px solid var(--hadr-border-color)",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Métricas de Rendimiento"}),e.jsxs("div",{style:{display:"grid",gap:"16px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsx("span",{children:"CPU"}),e.jsx("span",{style:{fontSize:"14px",color:"var(--hadr-text-muted)"},children:"45%"})]}),e.jsx(r,{value:45,color:"primary",size:"sm"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsx("span",{children:"Memoria"}),e.jsx("span",{style:{fontSize:"14px",color:"var(--hadr-text-muted)"},children:"8.2GB / 16GB"})]}),e.jsx(r,{value:51,color:"warning",size:"sm",variant:"fraction",customLabel:"8.2/16 GB"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},children:[e.jsx("span",{children:"Disco"}),e.jsx("span",{style:{fontSize:"14px",color:"var(--hadr-text-muted)"},children:"85%"})]}),e.jsx(r,{value:85,color:"danger",size:"sm"})]})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"var(--hadr-surface-bg)",border:"1px solid var(--hadr-border-color)",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Carga de Archivos"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(C,{onClick:B,color:"primary",size:"sm",children:"Simular Carga"}),e.jsx(r,{value:a,color:a===100?"success":"info",showLabel:!0,labelPosition:"right",striped:a<100,animated:a<100})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"var(--hadr-surface-bg)",border:"1px solid var(--hadr-border-color)",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Progreso del Proyecto"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:"500"},children:"Diseño UI/UX"}),e.jsx(r,{value:95,color:"success",showLabel:!0,labelPosition:"inside",size:"lg"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:"500"},children:"Desarrollo Frontend"}),e.jsx(r,{value:73,color:"info",showLabel:!0,labelPosition:"inside",size:"lg"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:"500"},children:"Backend API"}),e.jsx(r,{value:45,color:"warning",showLabel:!0,labelPosition:"inside",size:"lg"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"8px",fontWeight:"500"},children:"Testing"}),e.jsx(r,{value:20,color:"secondary",showLabel:!0,labelPosition:"right",size:"lg"})]})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"var(--hadr-surface-bg)",border:"1px solid var(--hadr-border-color)",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Indicadores Compactos"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"4px"},children:"87%"}),e.jsx("p",{style:{fontSize:"12px",color:"var(--hadr-text-muted)",marginBottom:"8px"},children:"Satisfacción"}),e.jsx(r,{value:87,color:"emerald",size:"xs"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"4px"},children:"124"}),e.jsx("p",{style:{fontSize:"12px",color:"var(--hadr-text-muted)",marginBottom:"8px"},children:"Ventas (150)"}),e.jsx(r,{value:124,max:150,color:"purple",size:"xs"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"4px"},children:"92%"}),e.jsx("p",{style:{fontSize:"12px",color:"var(--hadr-text-muted)",marginBottom:"8px"},children:"Uptime"}),e.jsx(r,{value:92,color:"success",size:"xs"})]})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"var(--hadr-surface-bg)",border:"1px solid var(--hadr-border-color)",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Proceso de Descarga"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(C,{onClick:P,color:"primary",size:"sm",disabled:l,children:l?"Descargando...":"Iniciar Descarga"}),l&&e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"14px",color:"var(--hadr-text-muted)"},children:"archivo-importante.zip"}),e.jsx(r,{value:j,color:"info",showLabel:!0,labelPosition:"right",striped:!0,animated:!0,size:"lg"})]})]})]})]})]})]})};f.parameters={docs:{description:{story:"Ejemplos prácticos de uso del ProgressBar en diferentes contextos de dashboard."}}};const y=o=>e.jsx("div",{style:{padding:"24px",maxWidth:"600px"},children:e.jsx(r,{...o})});y.args={value:65,max:100,color:"primary",size:"md",variant:"percentage",showLabel:!0,labelPosition:"right",animated:!1,striped:!1,radius:"sm"};m.__docgenInfo={description:"",methods:[],displayName:"Default"};x.__docgenInfo={description:"",methods:[],displayName:"Sizes"};u.__docgenInfo={description:"",methods:[],displayName:"WithLabels"};g.__docgenInfo={description:"",methods:[],displayName:"StripedAnimated"};v.__docgenInfo={description:"",methods:[],displayName:"Colors"};h.__docgenInfo={description:"",methods:[],displayName:"BorderRadius"};f.__docgenInfo={description:"",methods:[],displayName:"DashboardExamples"};y.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var L,k,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Progreso Básico</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '600px'
      }}>\r
                    <ProgressBar value={25} max={100} color="primary" />\r
                    <ProgressBar value={50} max={100} color="success" />\r
                    <ProgressBar value={75} max={100} color="warning" />\r
                    <ProgressBar value={90} max={100} color="danger" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(W=(k=m.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var I,q,M;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Tamaños</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '600px'
      }}>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '4px'
          }}>Extra Small (xs)</p>\r
                        <ProgressBar value={60} size="xs" color="primary" />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '4px'
          }}>Small (sm)</p>\r
                        <ProgressBar value={60} size="sm" color="primary" />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '4px'
          }}>Medium (md)</p>\r
                        <ProgressBar value={60} size="md" color="primary" />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '4px'
          }}>Large (lg)</p>\r
                        <ProgressBar value={60} size="lg" color="primary" />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '4px'
          }}>Extra Large (xl)</p>\r
                        <ProgressBar value={60} size="xl" color="primary" />\r
                    </div>\r
                </div>\r
            </div>\r
        </div>;
}`,...(M=(q=x.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,_,A;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Con Labels</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '600px'
      }}>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '8px'
          }}>Label a la derecha</p>\r
                        <ProgressBar value={45} color="primary" showLabel={true} labelPosition="right" />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '8px'
          }}>Label a la izquierda</p>\r
                        <ProgressBar value={67} color="success" showLabel={true} labelPosition="left" />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '8px'
          }}>Label dentro (solo visible con progreso mayor al 10%)</p>\r
                        <ProgressBar value={78} color="info" showLabel={true} labelPosition="inside" size="lg" />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '8px'
          }}>Formato fracción</p>\r
                        <ProgressBar value={156} max={200} color="warning" showLabel={true} variant="fraction" />\r
                    </div>\r
                </div>\r
            </div>\r
        </div>;
}`,...(A=(_=u.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var E,N,U;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev >= 100 ? 0 : prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Rayas y Animación</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '600px'
      }}>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '4px'
          }}>Estático con rayas</p>\r
                        <ProgressBar value={60} color="primary" striped={true} />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '4px'
          }}>Animado con rayas</p>\r
                        <ProgressBar value={75} color="success" striped={true} animated={true} />\r
                    </div>\r
                    <div>\r
                        <p style={{
            fontSize: '12px',
            marginBottom: '4px'
          }}>Progreso en tiempo real</p>\r
                        <ProgressBar value={progress} color="info" striped={true} animated={true} showLabel={true} labelPosition="right" />\r
                    </div>\r
                </div>\r
            </div>\r
        </div>;
}`,...(U=(N=g.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var V,O,G;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'purple', 'pink', 'orange', 'emerald', 'cyan', 'slate'];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Colores del Sistema</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '600px'
      }}>\r
                    {colors.map(color => <div key={color}>\r
                            <p style={{
            fontSize: '12px',
            marginBottom: '4px',
            textTransform: 'capitalize'
          }}>{color}</p>\r
                            <ProgressBar value={70} color={color} />\r
                        </div>)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(G=(O=v.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var $,F,X;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const radiusOptions = ['none', 'sm', 'md', 'lg', 'full'];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Radio de Bordes</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '600px'
      }}>\r
                    {radiusOptions.map(radius => <div key={radius}>\r
                            <p style={{
            fontSize: '12px',
            marginBottom: '4px',
            textTransform: 'capitalize'
          }}>\r
                                {radius === 'none' ? 'Sin radio' : radius}\r
                            </p>\r
                            <ProgressBar value={65} color="primary" radius={radius} size="lg" />\r
                        </div>)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(X=(F=h.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var H,J,K;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const startUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 300);
  };
  const startDownload = () => {
    setDownloading(true);
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          return 0;
        }
        return prev + 2;
      });
    }, 50);
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Ejemplos para Dashboard</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '800px'
      }}>\r
                    {/* Métricas de rendimiento */}\r
                    <div style={{
          padding: '20px',
          backgroundColor: 'var(--hadr-surface-bg)',
          border: '1px solid var(--hadr-border-color)',
          borderRadius: '12px'
        }}>\r
                        <h4 style={{
            marginBottom: '16px'
          }}>Métricas de Rendimiento</h4>\r
                        <div style={{
            display: 'grid',
            gap: '16px'
          }}>\r
                            <div>\r
                                <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>\r
                                    <span>CPU</span>\r
                                    <span style={{
                  fontSize: '14px',
                  color: 'var(--hadr-text-muted)'
                }}>45%</span>\r
                                </div>\r
                                <ProgressBar value={45} color="primary" size="sm" />\r
                            </div>\r
                            <div>\r
                                <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>\r
                                    <span>Memoria</span>\r
                                    <span style={{
                  fontSize: '14px',
                  color: 'var(--hadr-text-muted)'
                }}>8.2GB / 16GB</span>\r
                                </div>\r
                                <ProgressBar value={51} color="warning" size="sm" variant="fraction" customLabel="8.2/16 GB" />\r
                            </div>\r
                            <div>\r
                                <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>\r
                                    <span>Disco</span>\r
                                    <span style={{
                  fontSize: '14px',
                  color: 'var(--hadr-text-muted)'
                }}>85%</span>\r
                                </div>\r
                                <ProgressBar value={85} color="danger" size="sm" />\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    {/* Proceso de carga */}\r
                    <div style={{
          padding: '20px',
          backgroundColor: 'var(--hadr-surface-bg)',
          border: '1px solid var(--hadr-border-color)',
          borderRadius: '12px'
        }}>\r
                        <h4 style={{
            marginBottom: '16px'
          }}>Carga de Archivos</h4>\r
                        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>\r
                            <Button onClick={startUpload} color="primary" size="sm">\r
                                Simular Carga\r
                            </Button>\r
                            <ProgressBar value={uploadProgress} color={uploadProgress === 100 ? 'success' : 'info'} showLabel={true} labelPosition="right" striped={uploadProgress < 100} animated={uploadProgress < 100} />\r
                        </div>\r
                    </div>\r
\r
                    {/* Progreso de tareas */}\r
                    <div style={{
          padding: '20px',
          backgroundColor: 'var(--hadr-surface-bg)',
          border: '1px solid var(--hadr-border-color)',
          borderRadius: '12px'
        }}>\r
                        <h4 style={{
            marginBottom: '16px'
          }}>Progreso del Proyecto</h4>\r
                        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>\r
                            <div>\r
                                <p style={{
                marginBottom: '8px',
                fontWeight: '500'
              }}>Diseño UI/UX</p>\r
                                <ProgressBar value={95} color="success" showLabel={true} labelPosition="inside" size="lg" />\r
                            </div>\r
                            <div>\r
                                <p style={{
                marginBottom: '8px',
                fontWeight: '500'
              }}>Desarrollo Frontend</p>\r
                                <ProgressBar value={73} color="info" showLabel={true} labelPosition="inside" size="lg" />\r
                            </div>\r
                            <div>\r
                                <p style={{
                marginBottom: '8px',
                fontWeight: '500'
              }}>Backend API</p>\r
                                <ProgressBar value={45} color="warning" showLabel={true} labelPosition="inside" size="lg" />\r
                            </div>\r
                            <div>\r
                                <p style={{
                marginBottom: '8px',
                fontWeight: '500'
              }}>Testing</p>\r
                                <ProgressBar value={20} color="secondary" showLabel={true} labelPosition="right" size="lg" />\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    {/* Mini indicadores */}\r
                    <div style={{
          padding: '20px',
          backgroundColor: 'var(--hadr-surface-bg)',
          border: '1px solid var(--hadr-border-color)',
          borderRadius: '12px'
        }}>\r
                        <h4 style={{
            marginBottom: '16px'
          }}>Indicadores Compactos</h4>\r
                        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px'
          }}>\r
                            <div style={{
              textAlign: 'center'
            }}>\r
                                <p style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '4px'
              }}>87%</p>\r
                                <p style={{
                fontSize: '12px',
                color: 'var(--hadr-text-muted)',
                marginBottom: '8px'
              }}>Satisfacción</p>\r
                                <ProgressBar value={87} color="emerald" size="xs" />\r
                            </div>\r
                            <div style={{
              textAlign: 'center'
            }}>\r
                                <p style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '4px'
              }}>124</p>\r
                                <p style={{
                fontSize: '12px',
                color: 'var(--hadr-text-muted)',
                marginBottom: '8px'
              }}>Ventas (150)</p>\r
                                <ProgressBar value={124} max={150} color="purple" size="xs" />\r
                            </div>\r
                            <div style={{
              textAlign: 'center'
            }}>\r
                                <p style={{
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '4px'
              }}>92%</p>\r
                                <p style={{
                fontSize: '12px',
                color: 'var(--hadr-text-muted)',
                marginBottom: '8px'
              }}>Uptime</p>\r
                                <ProgressBar value={92} color="success" size="xs" />\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    {/* Descarga en tiempo real */}\r
                    <div style={{
          padding: '20px',
          backgroundColor: 'var(--hadr-surface-bg)',
          border: '1px solid var(--hadr-border-color)',
          borderRadius: '12px'
        }}>\r
                        <h4 style={{
            marginBottom: '16px'
          }}>Proceso de Descarga</h4>\r
                        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>\r
                            <Button onClick={startDownload} color="primary" size="sm" disabled={downloading}>\r
                                {downloading ? 'Descargando...' : 'Iniciar Descarga'}\r
                            </Button>\r
                            {downloading && <div>\r
                                    <div style={{
                marginBottom: '8px',
                fontSize: '14px',
                color: 'var(--hadr-text-muted)'
              }}>\r
                                        archivo-importante.zip\r
                                    </div>\r
                                    <ProgressBar value={downloadProgress} color="info" showLabel={true} labelPosition="right" striped={true} animated={true} size="lg" />\r
                                </div>}\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>;
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <div style={{
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <ProgressBar {...args} />\r
        </div>;
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const de=["Default","Sizes","WithLabels","StripedAnimated","Colors","BorderRadius","DashboardExamples","Interactive"];export{h as BorderRadius,v as Colors,f as DashboardExamples,m as Default,y as Interactive,x as Sizes,g as StripedAnimated,u as WithLabels,de as __namedExportsOrder,ne as default};
