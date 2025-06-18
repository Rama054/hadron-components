import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BZISi7jw.js";import{P as a}from"./index-Co38GRlK.js";import{r as le,b as L,h as re,s as V,t as de,u as h}from"./index-KKouTENB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";const A=d.createContext();function ie({children:s,color:i="primary",variant:t="line",size:l="md",equalWidth:o=!1,orientation:n="horizontal",defaultValue:c,value:u,onValueChange:g,className:T,...z}){const[p,b]=d.useState(u||c||null);d.useEffect(()=>{u!==void 0&&b(u)},[u]);const ne=S=>{u===void 0&&b(S),g&&g(S)};let P="q-tabs-root";return T&&(P+=` ${T}`),e.jsx(A.Provider,{value:{activeValue:p,setActiveValue:ne,color:i,variant:t,size:l,equalWidth:o,orientation:n},children:e.jsx("div",{className:P,"data-color":i,"data-variant":t,"data-size":l,"data-equal-width":o,"data-orientation":n,...z,children:s})})}function ae({children:s,className:i,...t}){const{orientation:l,equalWidth:o}=d.useContext(A);let n="q-tabs-list";return i&&(n+=` ${i}`),e.jsx("div",{className:n,role:"tablist","aria-orientation":l,...t,children:s})}function se({children:s,value:i,disabled:t=!1,className:l,...o}){const{activeValue:n,setActiveValue:c,variant:u}=d.useContext(A),g=n===i,T=()=>{!t&&i&&c(i)},z=b=>{(b.key==="Enter"||b.key===" ")&&!t&&(b.preventDefault(),c(i))};let p="q-tabs-trigger";return l&&(p+=` ${l}`),g&&(p+=" active"),t&&(p+=" disabled"),e.jsx("button",{className:p,onClick:T,onKeyDown:z,disabled:t,role:"tab","aria-selected":g,"aria-controls":`content-${i}`,id:`trigger-${i}`,tabIndex:g?0:-1,"data-state":g?"active":"inactive",...o,children:s})}function te({children:s,value:i,className:t,...l}){const{activeValue:o}=d.useContext(A),n=o===i;let c="q-tabs-content";return t&&(c+=` ${t}`),n?e.jsx("div",{className:c,role:"tabpanel","aria-labelledby":`trigger-${i}`,id:`content-${i}`,"data-state":n?"active":"inactive",...l,children:s}):null}ie.propTypes={children:a.node.isRequired,color:a.string,variant:a.oneOf(["line","card","pill"]),size:a.oneOf(["sm","md","lg"]),equalWidth:a.bool,orientation:a.oneOf(["horizontal","vertical"]),defaultValue:a.string,value:a.string,onValueChange:a.func,className:a.string};ae.propTypes={children:a.node.isRequired,className:a.string};se.propTypes={children:a.node.isRequired,value:a.string.isRequired,disabled:a.bool,className:a.string};te.propTypes={children:a.node.isRequired,value:a.string.isRequired,className:a.string};const r={Root:ie,List:ae,Trigger:se,Content:te},xe={title:"Components/Tabs",component:r.Root,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","danger","info"]},variant:{control:"select",options:["line","card","pill"]},size:{control:"select",options:["sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]}}},oe=s=>{const[i,t]=d.useState("tab1");return e.jsxs("div",{style:{width:"500px"},children:[e.jsxs(r.Root,{...s,value:i,onValueChange:t,children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:"tab1",children:"Inicio"}),e.jsx(r.Trigger,{value:"tab2",children:"Productos"}),e.jsx(r.Trigger,{value:"tab3",children:"Servicios"})]}),e.jsxs(r.Content,{value:"tab1",children:[e.jsx("h3",{children:"Contenido de Inicio"}),e.jsx("p",{children:"Esta es la página principal con información general sobre nuestra empresa."})]}),e.jsxs(r.Content,{value:"tab2",children:[e.jsx("h3",{children:"Nuestros Productos"}),e.jsx("p",{children:"Aquí encontrarás información detallada sobre todos nuestros productos."})]}),e.jsxs(r.Content,{value:"tab3",children:[e.jsx("h3",{children:"Servicios Disponibles"}),e.jsx("p",{children:"Conoce todos los servicios que ofrecemos para nuestros clientes."})]})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Tab activo:"})," ",i]})]})},x=oe.bind({});x.args={variant:"line",defaultValue:"tab1"};const v={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Line Variant"}),e.jsxs(r.Root,{variant:"line",defaultValue:"line1",children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:"line1",children:"Dashboard"}),e.jsx(r.Trigger,{value:"line2",children:"Analytics"}),e.jsx(r.Trigger,{value:"line3",children:"Reports"})]}),e.jsx(r.Content,{value:"line1",children:"Dashboard content"}),e.jsx(r.Content,{value:"line2",children:"Analytics content"}),e.jsx(r.Content,{value:"line3",children:"Reports content"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Card Variant"}),e.jsxs(r.Root,{variant:"card",defaultValue:"card1",children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:"card1",children:"Overview"}),e.jsx(r.Trigger,{value:"card2",children:"Details"}),e.jsx(r.Trigger,{value:"card3",children:"Settings"})]}),e.jsx(r.Content,{value:"card1",children:"Overview content"}),e.jsx(r.Content,{value:"card2",children:"Details content"}),e.jsx(r.Content,{value:"card3",children:"Settings content"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Pill Variant"}),e.jsxs(r.Root,{variant:"pill",defaultValue:"pill1",children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:"pill1",children:"Profile"}),e.jsx(r.Trigger,{value:"pill2",children:"Account"}),e.jsx(r.Trigger,{value:"pill3",children:"Billing"})]}),e.jsx(r.Content,{value:"pill1",children:"Profile content"}),e.jsx(r.Content,{value:"pill2",children:"Account content"}),e.jsx(r.Content,{value:"pill3",children:"Billing content"})]})]})]})},m={render:s=>e.jsx("div",{style:{width:"600px"},children:e.jsxs(r.Root,{defaultValue:"home",color:"success",children:[e.jsxs(r.List,{children:[e.jsxs(r.Trigger,{value:"home",children:[e.jsx(le,{size:20}),"Inicio"]}),e.jsxs(r.Trigger,{value:"profile",children:[e.jsx(L,{size:20}),"Perfil"]}),e.jsxs(r.Trigger,{value:"analytics",children:[e.jsx(re,{size:20}),"Analytics"]}),e.jsxs(r.Trigger,{value:"settings",children:[e.jsx(V,{size:20}),"Configuración"]})]}),e.jsx(r.Content,{value:"home",children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e2e8f0",borderRadius:"8px"},children:[e.jsx("h3",{children:"🏠 Bienvenido al Dashboard"}),e.jsx("p",{children:"Esta es la página principal donde puedes ver un resumen de toda tu actividad."})]})}),e.jsx(r.Content,{value:"profile",children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e2e8f0",borderRadius:"8px"},children:[e.jsx("h3",{children:"👤 Información del Perfil"}),e.jsx("p",{children:"Gestiona tu información personal y preferencias de cuenta."})]})}),e.jsx(r.Content,{value:"analytics",children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e2e8f0",borderRadius:"8px"},children:[e.jsx("h3",{children:"📊 Métricas y Analytics"}),e.jsx("p",{children:"Visualiza estadísticas detalladas y reportes de rendimiento."})]})}),e.jsx(r.Content,{value:"settings",children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e2e8f0",borderRadius:"8px"},children:[e.jsx("h3",{children:"⚙️ Configuración del Sistema"}),e.jsx("p",{children:"Ajusta las configuraciones y preferencias de la aplicación."})]})})]})})},j={render:s=>e.jsx("div",{style:{width:"600px",height:"400px"},children:e.jsxs(r.Root,{orientation:"vertical",defaultValue:"general",variant:"card",children:[e.jsxs(r.List,{children:[e.jsxs(r.Trigger,{value:"general",children:[e.jsx(V,{size:16}),"General"]}),e.jsxs(r.Trigger,{value:"security",children:[e.jsx(de,{size:16}),"Seguridad"]}),e.jsxs(r.Trigger,{value:"files",children:[e.jsx(h,{size:16}),"Archivos"]}),e.jsxs(r.Trigger,{value:"account",disabled:!0,children:[e.jsx(L,{size:16}),"Cuenta (Deshabilitado)"]})]}),e.jsx(r.Content,{value:"general",children:e.jsxs("div",{style:{padding:"1.5rem",border:"1px solid #e2e8f0",borderRadius:"8px",height:"300px"},children:[e.jsx("h3",{children:"Configuración General"}),e.jsx("p",{children:"Ajusta las configuraciones básicas del sistema."}),e.jsxs("div",{style:{marginTop:"1rem"},children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem"},children:"Idioma:"}),e.jsxs("select",{style:{padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"},children:[e.jsx("option",{children:"Español"}),e.jsx("option",{children:"English"}),e.jsx("option",{children:"Français"})]})]})]})}),e.jsx(r.Content,{value:"security",children:e.jsxs("div",{style:{padding:"1.5rem",border:"1px solid #e2e8f0",borderRadius:"8px",height:"300px"},children:[e.jsx("h3",{children:"Configuración de Seguridad"}),e.jsx("p",{children:"Gestiona las opciones de seguridad y privacidad."}),e.jsxs("div",{style:{marginTop:"1rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:!0})," Autenticación de dos factores"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"})," Notificaciones de inicio de sesión"]})]})]})}),e.jsx(r.Content,{value:"files",children:e.jsxs("div",{style:{padding:"1.5rem",border:"1px solid #e2e8f0",borderRadius:"8px",height:"300px"},children:[e.jsx("h3",{children:"Gestión de Archivos"}),e.jsx("p",{children:"Administra tus archivos y configuraciones de almacenamiento."}),e.jsxs("div",{style:{marginTop:"1rem"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Espacio usado:"})," 2.4 GB de 10 GB"]}),e.jsx("div",{style:{width:"100%",height:"8px",backgroundColor:"#e2e8f0",borderRadius:"4px"},children:e.jsx("div",{style:{width:"24%",height:"100%",backgroundColor:"#10b981",borderRadius:"4px"}})})]})]})})]})})},f={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small Size"}),e.jsxs(r.Root,{size:"sm",defaultValue:"sm1",children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:"sm1",children:"Tab 1"}),e.jsx(r.Trigger,{value:"sm2",children:"Tab 2"}),e.jsx(r.Trigger,{value:"sm3",children:"Tab 3"})]}),e.jsx(r.Content,{value:"sm1",children:"Small tab content"}),e.jsx(r.Content,{value:"sm2",children:"Small tab content 2"}),e.jsx(r.Content,{value:"sm3",children:"Small tab content 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium Size"}),e.jsxs(r.Root,{size:"md",defaultValue:"md1",children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:"md1",children:"Tab 1"}),e.jsx(r.Trigger,{value:"md2",children:"Tab 2"}),e.jsx(r.Trigger,{value:"md3",children:"Tab 3"})]}),e.jsx(r.Content,{value:"md1",children:"Medium tab content"}),e.jsx(r.Content,{value:"md2",children:"Medium tab content 2"}),e.jsx(r.Content,{value:"md3",children:"Medium tab content 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large Size"}),e.jsxs(r.Root,{size:"lg",defaultValue:"lg1",children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:"lg1",children:"Tab 1"}),e.jsx(r.Trigger,{value:"lg2",children:"Tab 2"}),e.jsx(r.Trigger,{value:"lg3",children:"Tab 3"})]}),e.jsx(r.Content,{value:"lg1",children:"Large tab content"}),e.jsx(r.Content,{value:"lg2",children:"Large tab content 2"}),e.jsx(r.Content,{value:"lg3",children:"Large tab content 3"})]})]})]})},y={render:s=>e.jsx("div",{style:{width:"500px"},children:e.jsxs(r.Root,{equalWidth:!0,defaultValue:"equal1",children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:"equal1",children:"A"}),e.jsx(r.Trigger,{value:"equal2",children:"Tab Mediano"}),e.jsx(r.Trigger,{value:"equal3",children:"Tab Muy Largo"})]}),e.jsx(r.Content,{value:"equal1",children:"Contenido A"}),e.jsx(r.Content,{value:"equal2",children:"Contenido del tab mediano"}),e.jsx(r.Content,{value:"equal3",children:"Contenido del tab muy largo"})]})})},C={render:s=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"500px"},children:["primary","success","warning","danger","info","secondary"].map(i=>e.jsxs("div",{children:[e.jsx("h4",{style:{textTransform:"capitalize",margin:"0 0 0.5rem 0"},children:i}),e.jsxs(r.Root,{color:i,defaultValue:`${i}1`,children:[e.jsxs(r.List,{children:[e.jsx(r.Trigger,{value:`${i}1`,children:"Tab 1"}),e.jsx(r.Trigger,{value:`${i}2`,children:"Tab 2"}),e.jsx(r.Trigger,{value:`${i}3`,children:"Tab 3"})]}),e.jsxs(r.Content,{value:`${i}1`,children:["Contenido con color ",i]}),e.jsx(r.Content,{value:`${i}2`,children:"Contenido 2"}),e.jsx(r.Content,{value:`${i}3`,children:"Contenido 3"})]})]},i))})},R={render:s=>{const[i,t]=d.useState("dashboard");return e.jsxs("div",{style:{width:"700px"},children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("h2",{children:"Panel de Administración"}),e.jsx("p",{children:"Gestiona tu aplicación desde este panel centralizado"})]}),e.jsxs(r.Root,{value:i,onValueChange:t,variant:"card",color:"primary",children:[e.jsxs(r.List,{children:[e.jsxs(r.Trigger,{value:"dashboard",children:[e.jsx(re,{size:18}),"Dashboard"]}),e.jsxs(r.Trigger,{value:"users",children:[e.jsx(L,{size:18}),"Usuarios"]}),e.jsxs(r.Trigger,{value:"files",children:[e.jsx(h,{size:18}),"Archivos"]}),e.jsxs(r.Trigger,{value:"settings",children:[e.jsx(V,{size:18}),"Configuración"]})]}),e.jsx(r.Content,{value:"dashboard",children:e.jsxs("div",{style:{padding:"2rem",border:"1px solid #e2e8f0",borderRadius:"12px"},children:[e.jsx("h3",{children:"📊 Dashboard Principal"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",marginTop:"1rem"},children:[e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:[e.jsx("h4",{children:"1,234"}),e.jsx("p",{children:"Usuarios activos"})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:[e.jsx("h4",{children:"5,678"}),e.jsx("p",{children:"Ventas totales"})]}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"8px",textAlign:"center"},children:[e.jsx("h4",{children:"98%"}),e.jsx("p",{children:"Disponibilidad"})]})]})]})}),e.jsx(r.Content,{value:"users",children:e.jsxs("div",{style:{padding:"2rem",border:"1px solid #e2e8f0",borderRadius:"12px"},children:[e.jsx("h3",{children:"👥 Gestión de Usuarios"}),e.jsx("p",{children:"Administra los usuarios de tu plataforma"}),e.jsx("div",{style:{marginTop:"1rem"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"1px solid #e2e8f0"},children:[e.jsx("th",{style:{textAlign:"left",padding:"0.5rem"},children:"Nombre"}),e.jsx("th",{style:{textAlign:"left",padding:"0.5rem"},children:"Email"}),e.jsx("th",{style:{textAlign:"left",padding:"0.5rem"},children:"Estado"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem"},children:"Juan Pérez"}),e.jsx("td",{style:{padding:"0.5rem"},children:"juan@example.com"}),e.jsx("td",{style:{padding:"0.5rem"},children:"✅ Activo"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.5rem"},children:"María García"}),e.jsx("td",{style:{padding:"0.5rem"},children:"maria@example.com"}),e.jsx("td",{style:{padding:"0.5rem"},children:"✅ Activo"})]})]})]})})]})}),e.jsx(r.Content,{value:"files",children:e.jsxs("div",{style:{padding:"2rem",border:"1px solid #e2e8f0",borderRadius:"12px"},children:[e.jsx("h3",{children:"📁 Gestión de Archivos"}),e.jsx("p",{children:"Administra los archivos y recursos del sistema"}),e.jsxs("div",{style:{marginTop:"1rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx(h,{size:16}),e.jsx("span",{children:"documentos/"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx(h,{size:16}),e.jsx("span",{children:"imagenes/"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(h,{size:16}),e.jsx("span",{children:"videos/"})]})]})]})}),e.jsx(r.Content,{value:"settings",children:e.jsxs("div",{style:{padding:"2rem",border:"1px solid #e2e8f0",borderRadius:"12px"},children:[e.jsx("h3",{children:"⚙️ Configuración del Sistema"}),e.jsx("p",{children:"Ajusta las configuraciones globales de la aplicación"}),e.jsxs("div",{style:{marginTop:"1rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontWeight:"500",marginBottom:"0.5rem"},children:"Nombre de la aplicación:"}),e.jsx("input",{type:"text",defaultValue:"Mi Dashboard",style:{padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc",width:"200px"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontWeight:"500",marginBottom:"0.5rem"},children:"Zona horaria:"}),e.jsxs("select",{style:{padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"},children:[e.jsx("option",{children:"UTC-3 (Buenos Aires)"}),e.jsx("option",{children:"UTC-5 (Nueva York)"}),e.jsx("option",{children:"UTC+0 (Londres)"})]})]}),e.jsx("div",{children:e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),"Habilitar notificaciones"]})})]})]})})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Tab activo:"})," ",i]})]})}};var k,D,q;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [activeTab, setActiveTab] = useState('tab1');
  return <div style={{
    width: '500px'
  }}>\r
      <Tabs.Root {...args} value={activeTab} onValueChange={setActiveTab}>\r
        <Tabs.List>\r
          <Tabs.Trigger value="tab1">Inicio</Tabs.Trigger>\r
          <Tabs.Trigger value="tab2">Productos</Tabs.Trigger>\r
          <Tabs.Trigger value="tab3">Servicios</Tabs.Trigger>\r
        </Tabs.List>\r
        \r
        <Tabs.Content value="tab1">\r
          <h3>Contenido de Inicio</h3>\r
          <p>Esta es la página principal con información general sobre nuestra empresa.</p>\r
        </Tabs.Content>\r
        \r
        <Tabs.Content value="tab2">\r
          <h3>Nuestros Productos</h3>\r
          <p>Aquí encontrarás información detallada sobre todos nuestros productos.</p>\r
        </Tabs.Content>\r
        \r
        <Tabs.Content value="tab3">\r
          <h3>Servicios Disponibles</h3>\r
          <p>Conoce todos los servicios que ofrecemos para nuestros clientes.</p>\r
        </Tabs.Content>\r
      </Tabs.Root>\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Tab activo:</strong> {activeTab}\r
      </div>\r
    </div>;
}`,...(q=(D=x.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var w,B,G;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '500px'
  }}>\r
      {/* Line variant */}\r
      <div>\r
        <h4>Line Variant</h4>\r
        <Tabs.Root variant="line" defaultValue="line1">\r
          <Tabs.List>\r
            <Tabs.Trigger value="line1">Dashboard</Tabs.Trigger>\r
            <Tabs.Trigger value="line2">Analytics</Tabs.Trigger>\r
            <Tabs.Trigger value="line3">Reports</Tabs.Trigger>\r
          </Tabs.List>\r
          <Tabs.Content value="line1">Dashboard content</Tabs.Content>\r
          <Tabs.Content value="line2">Analytics content</Tabs.Content>\r
          <Tabs.Content value="line3">Reports content</Tabs.Content>\r
        </Tabs.Root>\r
      </div>\r
      \r
      {/* Card variant */}\r
      <div>\r
        <h4>Card Variant</h4>\r
        <Tabs.Root variant="card" defaultValue="card1">\r
          <Tabs.List>\r
            <Tabs.Trigger value="card1">Overview</Tabs.Trigger>\r
            <Tabs.Trigger value="card2">Details</Tabs.Trigger>\r
            <Tabs.Trigger value="card3">Settings</Tabs.Trigger>\r
          </Tabs.List>\r
          <Tabs.Content value="card1">Overview content</Tabs.Content>\r
          <Tabs.Content value="card2">Details content</Tabs.Content>\r
          <Tabs.Content value="card3">Settings content</Tabs.Content>\r
        </Tabs.Root>\r
      </div>\r
      \r
      {/* Pill variant */}\r
      <div>\r
        <h4>Pill Variant</h4>\r
        <Tabs.Root variant="pill" defaultValue="pill1">\r
          <Tabs.List>\r
            <Tabs.Trigger value="pill1">Profile</Tabs.Trigger>\r
            <Tabs.Trigger value="pill2">Account</Tabs.Trigger>\r
            <Tabs.Trigger value="pill3">Billing</Tabs.Trigger>\r
          </Tabs.List>\r
          <Tabs.Content value="pill1">Profile content</Tabs.Content>\r
          <Tabs.Content value="pill2">Account content</Tabs.Content>\r
          <Tabs.Content value="pill3">Billing content</Tabs.Content>\r
        </Tabs.Root>\r
      </div>\r
    </div>
}`,...(G=(B=v.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var E,$,I;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px'
  }}>\r
      <Tabs.Root defaultValue="home" color="success">\r
        <Tabs.List>\r
          <Tabs.Trigger value="home">\r
            <PiHouse size={20} />\r
            Inicio\r
          </Tabs.Trigger>\r
          <Tabs.Trigger value="profile">\r
            <PiUser size={20} />\r
            Perfil\r
          </Tabs.Trigger>\r
          <Tabs.Trigger value="analytics">\r
            <PiChartBar size={20} />\r
            Analytics\r
          </Tabs.Trigger>\r
          <Tabs.Trigger value="settings">\r
            <PiGear size={20} />\r
            Configuración\r
          </Tabs.Trigger>\r
        </Tabs.List>\r
        \r
        <Tabs.Content value="home">\r
          <div style={{
          padding: '1rem',
          border: '1px solid #e2e8f0',
          borderRadius: '8px'
        }}>\r
            <h3>🏠 Bienvenido al Dashboard</h3>\r
            <p>Esta es la página principal donde puedes ver un resumen de toda tu actividad.</p>\r
          </div>\r
        </Tabs.Content>\r
        \r
        <Tabs.Content value="profile">\r
          <div style={{
          padding: '1rem',
          border: '1px solid #e2e8f0',
          borderRadius: '8px'
        }}>\r
            <h3>👤 Información del Perfil</h3>\r
            <p>Gestiona tu información personal y preferencias de cuenta.</p>\r
          </div>\r
        </Tabs.Content>\r
        \r
        <Tabs.Content value="analytics">\r
          <div style={{
          padding: '1rem',
          border: '1px solid #e2e8f0',
          borderRadius: '8px'
        }}>\r
            <h3>📊 Métricas y Analytics</h3>\r
            <p>Visualiza estadísticas detalladas y reportes de rendimiento.</p>\r
          </div>\r
        </Tabs.Content>\r
        \r
        <Tabs.Content value="settings">\r
          <div style={{
          padding: '1rem',
          border: '1px solid #e2e8f0',
          borderRadius: '8px'
        }}>\r
            <h3>⚙️ Configuración del Sistema</h3>\r
            <p>Ajusta las configuraciones y preferencias de la aplicación.</p>\r
          </div>\r
        </Tabs.Content>\r
      </Tabs.Root>\r
    </div>
}`,...(I=($=m.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var M,N,U;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    height: '400px'
  }}>\r
      <Tabs.Root orientation="vertical" defaultValue="general" variant="card">\r
        <Tabs.List>\r
          <Tabs.Trigger value="general">\r
            <PiGear size={16} />\r
            General\r
          </Tabs.Trigger>\r
          <Tabs.Trigger value="security">\r
            <PiLock size={16} />\r
            Seguridad\r
          </Tabs.Trigger>\r
          <Tabs.Trigger value="files">\r
            <PiFolder size={16} />\r
            Archivos\r
          </Tabs.Trigger>\r
          <Tabs.Trigger value="account" disabled>\r
            <PiUser size={16} />\r
            Cuenta (Deshabilitado)\r
          </Tabs.Trigger>\r
        </Tabs.List>\r
        \r
        <Tabs.Content value="general">\r
          <div style={{
          padding: '1.5rem',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          height: '300px'
        }}>\r
            <h3>Configuración General</h3>\r
            <p>Ajusta las configuraciones básicas del sistema.</p>\r
            <div style={{
            marginTop: '1rem'
          }}>\r
              <label style={{
              display: 'block',
              marginBottom: '0.5rem'
            }}>Idioma:</label>\r
              <select style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}>\r
                <option>Español</option>\r
                <option>English</option>\r
                <option>Français</option>\r
              </select>\r
            </div>\r
          </div>\r
        </Tabs.Content>\r
        \r
        <Tabs.Content value="security">\r
          <div style={{
          padding: '1.5rem',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          height: '300px'
        }}>\r
            <h3>Configuración de Seguridad</h3>\r
            <p>Gestiona las opciones de seguridad y privacidad.</p>\r
            <div style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>\r
              <label>\r
                <input type="checkbox" defaultChecked /> Autenticación de dos factores\r
              </label>\r
              <label>\r
                <input type="checkbox" /> Notificaciones de inicio de sesión\r
              </label>\r
            </div>\r
          </div>\r
        </Tabs.Content>\r
        \r
        <Tabs.Content value="files">\r
          <div style={{
          padding: '1.5rem',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          height: '300px'
        }}>\r
            <h3>Gestión de Archivos</h3>\r
            <p>Administra tus archivos y configuraciones de almacenamiento.</p>\r
            <div style={{
            marginTop: '1rem'
          }}>\r
              <p><strong>Espacio usado:</strong> 2.4 GB de 10 GB</p>\r
              <div style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#e2e8f0',
              borderRadius: '4px'
            }}>\r
                <div style={{
                width: '24%',
                height: '100%',
                backgroundColor: '#10b981',
                borderRadius: '4px'
              }}></div>\r
              </div>\r
            </div>\r
          </div>\r
        </Tabs.Content>\r
      </Tabs.Root>\r
    </div>
}`,...(U=(N=j.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var W,F,O;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '500px'
  }}>\r
      <div>\r
        <h4>Small Size</h4>\r
        <Tabs.Root size="sm" defaultValue="sm1">\r
          <Tabs.List>\r
            <Tabs.Trigger value="sm1">Tab 1</Tabs.Trigger>\r
            <Tabs.Trigger value="sm2">Tab 2</Tabs.Trigger>\r
            <Tabs.Trigger value="sm3">Tab 3</Tabs.Trigger>\r
          </Tabs.List>\r
          <Tabs.Content value="sm1">Small tab content</Tabs.Content>\r
          <Tabs.Content value="sm2">Small tab content 2</Tabs.Content>\r
          <Tabs.Content value="sm3">Small tab content 3</Tabs.Content>\r
        </Tabs.Root>\r
      </div>\r
      \r
      <div>\r
        <h4>Medium Size</h4>\r
        <Tabs.Root size="md" defaultValue="md1">\r
          <Tabs.List>\r
            <Tabs.Trigger value="md1">Tab 1</Tabs.Trigger>\r
            <Tabs.Trigger value="md2">Tab 2</Tabs.Trigger>\r
            <Tabs.Trigger value="md3">Tab 3</Tabs.Trigger>\r
          </Tabs.List>\r
          <Tabs.Content value="md1">Medium tab content</Tabs.Content>\r
          <Tabs.Content value="md2">Medium tab content 2</Tabs.Content>\r
          <Tabs.Content value="md3">Medium tab content 3</Tabs.Content>\r
        </Tabs.Root>\r
      </div>\r
      \r
      <div>\r
        <h4>Large Size</h4>\r
        <Tabs.Root size="lg" defaultValue="lg1">\r
          <Tabs.List>\r
            <Tabs.Trigger value="lg1">Tab 1</Tabs.Trigger>\r
            <Tabs.Trigger value="lg2">Tab 2</Tabs.Trigger>\r
            <Tabs.Trigger value="lg3">Tab 3</Tabs.Trigger>\r
          </Tabs.List>\r
          <Tabs.Content value="lg1">Large tab content</Tabs.Content>\r
          <Tabs.Content value="lg2">Large tab content 2</Tabs.Content>\r
          <Tabs.Content value="lg3">Large tab content 3</Tabs.Content>\r
        </Tabs.Root>\r
      </div>\r
    </div>
}`,...(O=(F=f.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var H,_,J;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '500px'
  }}>\r
      <Tabs.Root equalWidth defaultValue="equal1">\r
        <Tabs.List>\r
          <Tabs.Trigger value="equal1">A</Tabs.Trigger>\r
          <Tabs.Trigger value="equal2">Tab Mediano</Tabs.Trigger>\r
          <Tabs.Trigger value="equal3">Tab Muy Largo</Tabs.Trigger>\r
        </Tabs.List>\r
        <Tabs.Content value="equal1">Contenido A</Tabs.Content>\r
        <Tabs.Content value="equal2">Contenido del tab mediano</Tabs.Content>\r
        <Tabs.Content value="equal3">Contenido del tab muy largo</Tabs.Content>\r
      </Tabs.Root>\r
    </div>
}`,...(J=(_=y.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,Y,Z;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '500px'
  }}>\r
      {['primary', 'success', 'warning', 'danger', 'info', 'secondary'].map(color => <div key={color}>\r
          <h4 style={{
        textTransform: 'capitalize',
        margin: '0 0 0.5rem 0'
      }}>{color}</h4>\r
          <Tabs.Root color={color} defaultValue={\`\${color}1\`}>\r
            <Tabs.List>\r
              <Tabs.Trigger value={\`\${color}1\`}>Tab 1</Tabs.Trigger>\r
              <Tabs.Trigger value={\`\${color}2\`}>Tab 2</Tabs.Trigger>\r
              <Tabs.Trigger value={\`\${color}3\`}>Tab 3</Tabs.Trigger>\r
            </Tabs.List>\r
            <Tabs.Content value={\`\${color}1\`}>Contenido con color {color}</Tabs.Content>\r
            <Tabs.Content value={\`\${color}2\`}>Contenido 2</Tabs.Content>\r
            <Tabs.Content value={\`\${color}3\`}>Contenido 3</Tabs.Content>\r
          </Tabs.Root>\r
        </div>)}\r
    </div>
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var Q,X,ee;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState('dashboard');
    return <div style={{
      width: '700px'
    }}>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <h2>Panel de Administración</h2>\r
          <p>Gestiona tu aplicación desde este panel centralizado</p>\r
        </div>\r
        \r
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} variant="card" color="primary">\r
          <Tabs.List>\r
            <Tabs.Trigger value="dashboard">\r
              <PiChartBar size={18} />\r
              Dashboard\r
            </Tabs.Trigger>\r
            <Tabs.Trigger value="users">\r
              <PiUser size={18} />\r
              Usuarios\r
            </Tabs.Trigger>\r
            <Tabs.Trigger value="files">\r
              <PiFolder size={18} />\r
              Archivos\r
            </Tabs.Trigger>\r
            <Tabs.Trigger value="settings">\r
              <PiGear size={18} />\r
              Configuración\r
            </Tabs.Trigger>\r
          </Tabs.List>\r
          \r
          <Tabs.Content value="dashboard">\r
            <div style={{
            padding: '2rem',
            border: '1px solid #e2e8f0',
            borderRadius: '12px'
          }}>\r
              <h3>📊 Dashboard Principal</h3>\r
              <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '1rem'
            }}>\r
                <div style={{
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                textAlign: 'center'
              }}>\r
                  <h4>1,234</h4>\r
                  <p>Usuarios activos</p>\r
                </div>\r
                <div style={{
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                textAlign: 'center'
              }}>\r
                  <h4>5,678</h4>\r
                  <p>Ventas totales</p>\r
                </div>\r
                <div style={{
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                textAlign: 'center'
              }}>\r
                  <h4>98%</h4>\r
                  <p>Disponibilidad</p>\r
                </div>\r
              </div>\r
            </div>\r
          </Tabs.Content>\r
          \r
          <Tabs.Content value="users">\r
            <div style={{
            padding: '2rem',
            border: '1px solid #e2e8f0',
            borderRadius: '12px'
          }}>\r
              <h3>👥 Gestión de Usuarios</h3>\r
              <p>Administra los usuarios de tu plataforma</p>\r
              <div style={{
              marginTop: '1rem'
            }}>\r
                <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>\r
                  <thead>\r
                    <tr style={{
                    borderBottom: '1px solid #e2e8f0'
                  }}>\r
                      <th style={{
                      textAlign: 'left',
                      padding: '0.5rem'
                    }}>Nombre</th>\r
                      <th style={{
                      textAlign: 'left',
                      padding: '0.5rem'
                    }}>Email</th>\r
                      <th style={{
                      textAlign: 'left',
                      padding: '0.5rem'
                    }}>Estado</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    <tr>\r
                      <td style={{
                      padding: '0.5rem'
                    }}>Juan Pérez</td>\r
                      <td style={{
                      padding: '0.5rem'
                    }}>juan@example.com</td>\r
                      <td style={{
                      padding: '0.5rem'
                    }}>✅ Activo</td>\r
                    </tr>\r
                    <tr>\r
                      <td style={{
                      padding: '0.5rem'
                    }}>María García</td>\r
                      <td style={{
                      padding: '0.5rem'
                    }}>maria@example.com</td>\r
                      <td style={{
                      padding: '0.5rem'
                    }}>✅ Activo</td>\r
                    </tr>\r
                  </tbody>\r
                </table>\r
              </div>\r
            </div>\r
          </Tabs.Content>\r
          \r
          <Tabs.Content value="files">\r
            <div style={{
            padding: '2rem',
            border: '1px solid #e2e8f0',
            borderRadius: '12px'
          }}>\r
              <h3>📁 Gestión de Archivos</h3>\r
              <p>Administra los archivos y recursos del sistema</p>\r
              <div style={{
              marginTop: '1rem'
            }}>\r
                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>\r
                  <PiFolder size={16} />\r
                  <span>documentos/</span>\r
                </div>\r
                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>\r
                  <PiFolder size={16} />\r
                  <span>imagenes/</span>\r
                </div>\r
                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>\r
                  <PiFolder size={16} />\r
                  <span>videos/</span>\r
                </div>\r
              </div>\r
            </div>\r
          </Tabs.Content>\r
          \r
          <Tabs.Content value="settings">\r
            <div style={{
            padding: '2rem',
            border: '1px solid #e2e8f0',
            borderRadius: '12px'
          }}>\r
              <h3>⚙️ Configuración del Sistema</h3>\r
              <p>Ajusta las configuraciones globales de la aplicación</p>\r
              <div style={{
              marginTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>\r
                <div>\r
                  <label style={{
                  display: 'block',
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>\r
                    Nombre de la aplicación:\r
                  </label>\r
                  <input type="text" defaultValue="Mi Dashboard" style={{
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  width: '200px'
                }} />\r
                </div>\r
                <div>\r
                  <label style={{
                  display: 'block',
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>\r
                    Zona horaria:\r
                  </label>\r
                  <select style={{
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}>\r
                    <option>UTC-3 (Buenos Aires)</option>\r
                    <option>UTC-5 (Nueva York)</option>\r
                    <option>UTC+0 (Londres)</option>\r
                  </select>\r
                </div>\r
                <div>\r
                  <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>\r
                    <input type="checkbox" defaultChecked />\r
                    Habilitar notificaciones\r
                  </label>\r
                </div>\r
              </div>\r
            </div>\r
          </Tabs.Content>\r
        </Tabs.Root>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Tab activo:</strong> {activeTab}\r
        </div>\r
      </div>;
  }
}`,...(ee=(X=R.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};const Te=["Default","Variants","WithIcons","VerticalTabs","Sizes","EqualWidth","Colors","ComplexExample"];export{C as Colors,R as ComplexExample,x as Default,y as EqualWidth,f as Sizes,v as Variants,j as VerticalTabs,m as WithIcons,Te as __namedExportsOrder,xe as default};
