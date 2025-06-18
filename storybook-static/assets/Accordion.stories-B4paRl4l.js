import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BZISi7jw.js";import{P as i}from"./index-Co38GRlK.js";import{I as fe,a as v,b as ge,c as he,d as V,e as ve}from"./index-I48yvNyK.js";import{b as y}from"./index-KKouTENB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";const ue=h.createContext(),ye=()=>{const a=h.useContext(ue);if(!a)throw new Error("Accordion.Tab debe estar dentro de Accordion.Root");return a};function xe({children:a,exclusive:n=!1,activeIndex:r,defaultActiveIndex:t,onActiveIndexChange:s,color:u="primary",size:x="md",variant:d="default",disabled:c=!1,className:b,...q}){const[N,j]=h.useState(()=>n?t??null:t??[]),m=r!==void 0,p=m?r:N,z={toggleTab:l=>{if(c)return;let g;if(n)g=p===l?null:l;else{const E=Array.isArray(p)?p:[];E.includes(l)?g=E.filter(be=>be!==l):g=[...E,l]}m||j(g),s&&s(g,l)},isTabActive:l=>n?p===l:(Array.isArray(p)?p:[]).includes(l),color:u,size:x,variant:d,disabled:c,exclusive:n};let f="q-accordion";return b&&(f+=` ${b}`),c&&(f+=" q-accordion-disabled"),e.jsx(ue.Provider,{value:z,children:e.jsx("div",{className:f,"data-color":u,"data-size":x,"data-variant":d,...q,children:a})})}function me({children:a,title:n,icon:r,disabled:t=!1,index:s,className:u,headerClassName:x,contentClassName:d,...c}){const{toggleTab:b,isTabActive:q,disabled:N}=ye(),j=N||t,m=q(s),p=()=>{j||b(s)},O=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),p())};let A="q-accordion-tab";u&&(A+=` ${u}`),m&&(A+=" q-accordion-tab-active"),j&&(A+=" q-accordion-tab-disabled");let z="q-accordion-header";x&&(z+=` ${x}`);let f="q-accordion-content";return d&&(f+=` ${d}`),e.jsxs("div",{className:A,...c,children:[e.jsxs("button",{type:"button",className:z,onClick:p,onKeyDown:O,disabled:j,"aria-expanded":m,"aria-controls":`accordion-content-${s}`,id:`accordion-header-${s}`,children:[e.jsxs("div",{className:"q-accordion-header-content",children:[r&&e.jsx("span",{className:"q-accordion-icon",children:r}),e.jsx("span",{className:"q-accordion-title",children:n})]}),e.jsx("span",{className:`q-accordion-chevron ${m?"q-accordion-chevron-open":""}`,children:e.jsx(fe,{size:16})})]}),e.jsx("div",{className:`q-accordion-content-wrapper ${m?"q-accordion-content-open":""}`,id:`accordion-content-${s}`,"aria-labelledby":`accordion-header-${s}`,role:"region",children:e.jsx("div",{className:f,children:a})})]})}xe.propTypes={children:i.node.isRequired,exclusive:i.bool,activeIndex:i.oneOfType([i.number,i.arrayOf(i.number)]),defaultActiveIndex:i.oneOfType([i.number,i.arrayOf(i.number)]),onActiveIndexChange:i.func,color:i.string,size:i.oneOf(["sm","md","lg"]),variant:i.oneOf(["default","bordered","filled"]),disabled:i.bool,className:i.string};me.propTypes={children:i.node.isRequired,title:i.oneOfType([i.string,i.node]).isRequired,icon:i.node,disabled:i.bool,index:i.number.isRequired,className:i.string,headerClassName:i.string,contentClassName:i.string};const o={Root:xe,Tab:me},Se={title:"Components/Accordion",component:o.Root,parameters:{layout:"centered",docs:{description:{component:"Componente Accordion expandible con soporte para modo exclusivo y múltiple, estados controlados y no controlados."}}},argTypes:{exclusive:{control:{type:"boolean"},description:"Solo permite un panel abierto a la vez"},color:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info"],description:"Color del accordion"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del accordion"},variant:{control:{type:"select"},options:["default","bordered","filled"],description:"Variante visual del accordion"},disabled:{control:{type:"boolean"},description:"Deshabilita todo el accordion"}}},U=a=>e.jsx("div",{style:{width:"500px"},children:e.jsxs(o.Root,{...a,children:[e.jsxs(o.Tab,{index:0,title:"Configuración General",icon:e.jsx(v,{size:16}),children:[e.jsx("p",{children:"Aquí puedes configurar las opciones generales de tu cuenta."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Idioma de la interfaz"}),e.jsx("li",{children:"Zona horaria"}),e.jsx("li",{children:"Formato de fecha"}),e.jsx("li",{children:"Tema de la aplicación"})]})]}),e.jsxs(o.Tab,{index:1,title:"Perfil de Usuario",icon:e.jsx(y,{size:16}),children:[e.jsx("p",{children:"Gestiona la información de tu perfil personal."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("label",{children:["Nombre: ",e.jsx("input",{type:"text",defaultValue:"Juan Pérez"})]}),e.jsxs("label",{children:["Email: ",e.jsx("input",{type:"email",defaultValue:"juan@example.com"})]}),e.jsxs("label",{children:["Teléfono: ",e.jsx("input",{type:"tel",defaultValue:"+54 11 1234-5678"})]})]})]}),e.jsxs(o.Tab,{index:2,title:"Métodos de Pago",icon:e.jsx(ge,{size:16}),children:[e.jsx("p",{children:"Administra tus tarjetas y métodos de pago."}),e.jsxs("div",{style:{padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #dee2e6"},children:[e.jsx("strong",{children:"Tarjeta principal:"})," **** **** **** 4242",e.jsx("br",{}),e.jsx("small",{children:"Visa terminada en 4242"})]})]})]})}),T=U.bind({});T.args={exclusive:!1};const C=U.bind({});C.args={exclusive:!0,defaultActiveIndex:0};const P={render:a=>{const n=["primary","secondary","success","warning","danger","info"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:n.map(r=>e.jsxs("div",{children:[e.jsxs("h4",{style:{margin:"0 0 1rem 0",fontSize:"1rem",textTransform:"capitalize",color:"#666"},children:["Color: ",r]}),e.jsxs(o.Root,{color:r,exclusive:!0,defaultActiveIndex:0,children:[e.jsx(o.Tab,{index:0,title:"Configuración",icon:e.jsx(v,{size:16}),children:e.jsxs("p",{children:["Panel de configuración con color ",r,"."]})}),e.jsx(o.Tab,{index:1,title:"Notificaciones",icon:e.jsx(he,{size:16}),children:e.jsx("p",{children:"Gestiona tus notificaciones aquí."})})]})]},r))})}},S={render:a=>{const n=["sm","md","lg"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:n.map(r=>e.jsxs("div",{children:[e.jsxs("h4",{style:{margin:"0 0 1rem 0",fontSize:"1rem",color:"#666"},children:["Tamaño: ",r]}),e.jsxs(o.Root,{size:r,exclusive:!0,defaultActiveIndex:0,children:[e.jsx(o.Tab,{index:0,title:"Panel Principal",icon:e.jsx(y,{size:16}),children:e.jsxs("p",{children:["Contenido del panel con tamaño ",r,"."]})}),e.jsx(o.Tab,{index:1,title:"Configuración",icon:e.jsx(v,{size:16}),children:e.jsx("p",{children:"Configuraciones adicionales."})})]})]},r))})}},R={render:a=>{const n=["default","bordered","filled"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:n.map(r=>e.jsxs("div",{children:[e.jsxs("h4",{style:{margin:"0 0 1rem 0",fontSize:"1rem",textTransform:"capitalize",color:"#666"},children:["Variante: ",r]}),e.jsxs(o.Root,{variant:r,exclusive:!0,defaultActiveIndex:0,children:[e.jsx(o.Tab,{index:0,title:"Información",icon:e.jsx(y,{size:16}),children:e.jsxs("p",{children:["Panel con variante ",r,"."]})}),e.jsx(o.Tab,{index:1,title:"Seguridad",icon:e.jsx(V,{size:16}),children:e.jsx("p",{children:"Configuraciones de seguridad."})})]})]},r))})}},k={render:a=>{const[n,r]=h.useState([0]),[t,s]=h.useState([]),u=(d,c)=>{r(d),s(b=>[...b,{timestamp:new Date().toLocaleTimeString(),activeIndex:d,clickedIndex:c}].slice(-5))},x=()=>{r([]),s([])};return e.jsxs("div",{style:{width:"500px"},children:[e.jsxs("div",{style:{marginBottom:"1rem",display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx("button",{onClick:()=>r([0,1]),style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px"},children:"Abrir Primeros 2"}),e.jsx("button",{onClick:x,style:{padding:"0.5rem 1rem",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"4px"},children:"Cerrar Todos"})]}),e.jsxs(o.Root,{activeIndex:n,onActiveIndexChange:u,color:"primary",children:[e.jsx(o.Tab,{index:0,title:"Panel 1",icon:e.jsx(y,{size:16}),children:e.jsx("p",{children:"Contenido del primer panel controlado."})}),e.jsx(o.Tab,{index:1,title:"Panel 2",icon:e.jsx(v,{size:16}),children:e.jsx("p",{children:"Contenido del segundo panel controlado."})}),e.jsx(o.Tab,{index:2,title:"Panel 3",icon:e.jsx(V,{size:16}),children:e.jsx("p",{children:"Contenido del tercer panel controlado."})})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"8px",fontSize:"0.875rem"},children:[e.jsx("strong",{children:"Estado actual:"})," ",JSON.stringify(n),t.length>0&&e.jsxs("div",{style:{marginTop:"0.5rem"},children:[e.jsx("strong",{children:"Log de cambios:"}),e.jsx("ul",{style:{margin:"0.5rem 0",paddingLeft:"1rem"},children:t.map((d,c)=>e.jsxs("li",{style:{marginBottom:"0.25rem"},children:[d.timestamp," - Clicked: ",d.clickedIndex,", Active: ",JSON.stringify(d.activeIndex)]},c))})]})]})]})}},w={render:a=>{const[n,r]=h.useState(null);return e.jsxs("div",{style:{width:"500px"},children:[e.jsxs("div",{style:{marginBottom:"1rem",display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[[0,1,2].map(t=>e.jsxs("button",{onClick:()=>r(t),style:{padding:"0.25rem 0.75rem",backgroundColor:n===t?"#3b82f6":"#e5e7eb",color:n===t?"white":"#374151",border:"none",borderRadius:"4px",fontSize:"0.875rem"},children:["Panel ",t+1]},t)),e.jsx("button",{onClick:()=>r(null),style:{padding:"0.25rem 0.75rem",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"4px",fontSize:"0.875rem"},children:"Cerrar"})]}),e.jsxs(o.Root,{exclusive:!0,activeIndex:n,onActiveIndexChange:r,color:"success",children:[e.jsxs(o.Tab,{index:0,title:"Configuración General",icon:e.jsx(v,{size:16}),children:[e.jsx("p",{children:"Panel de configuración general del sistema."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"})," Habilitar notificaciones"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"})," Modo oscuro"]}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"})," Actualizaciones automáticas"]})]})]}),e.jsxs(o.Tab,{index:1,title:"Perfil de Usuario",icon:e.jsx(y,{size:16}),children:[e.jsx("p",{children:"Información personal y configuración del perfil."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"},children:[e.jsx("input",{placeholder:"Nombre"}),e.jsx("input",{placeholder:"Apellido"}),e.jsx("input",{placeholder:"Email",type:"email"}),e.jsx("input",{placeholder:"Teléfono",type:"tel"})]})]}),e.jsxs(o.Tab,{index:2,title:"Ayuda y Soporte",icon:e.jsx(ve,{size:16}),children:[e.jsx("p",{children:"Recursos de ayuda y contacto con soporte técnico."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsx("a",{href:"#",style:{color:"#3b82f6",textDecoration:"none"},children:"📚 Documentación"}),e.jsx("a",{href:"#",style:{color:"#3b82f6",textDecoration:"none"},children:"💬 Chat en vivo"}),e.jsx("a",{href:"#",style:{color:"#3b82f6",textDecoration:"none"},children:"📧 Contactar soporte"})]})]})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",backgroundColor:"#f0f9ff",borderRadius:"6px",fontSize:"0.875rem",border:"1px solid #0ea5e9"},children:[e.jsx("strong",{children:"Panel activo:"})," ",n!==null?`Panel ${n+1}`:"Ninguno"]})]})}},D={render:a=>e.jsx("div",{style:{width:"500px"},children:e.jsxs(o.Root,{exclusive:!0,defaultActiveIndex:0,children:[e.jsx(o.Tab,{index:0,title:"Panel Habilitado",icon:e.jsx(y,{size:16}),children:e.jsx("p",{children:"Este panel está habilitado y se puede usar normalmente."})}),e.jsx(o.Tab,{index:1,title:"Panel Deshabilitado",icon:e.jsx(v,{size:16}),disabled:!0,children:e.jsx("p",{children:"Este contenido no se debería ver porque el panel está deshabilitado."})}),e.jsxs(o.Tab,{index:2,title:"Otro Panel Habilitado",icon:e.jsx(V,{size:16}),children:[e.jsx("p",{children:"Este panel también está habilitado."}),e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"4px"},children:"Acción del Panel"})]})]})})},I=U.bind({});I.args={disabled:!0,exclusive:!0};var G,$,L;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`args => <div style={{
  width: '500px'
}}>\r
        <Accordion.Root {...args}>\r
            <Accordion.Tab index={0} title="Configuración General" icon={<IoSettings size={16} />}>\r
                <p>Aquí puedes configurar las opciones generales de tu cuenta.</p>\r
                <ul>\r
                    <li>Idioma de la interfaz</li>\r
                    <li>Zona horaria</li>\r
                    <li>Formato de fecha</li>\r
                    <li>Tema de la aplicación</li>\r
                </ul>\r
            </Accordion.Tab>\r
            \r
            <Accordion.Tab index={1} title="Perfil de Usuario" icon={<PiUser size={16} />}>\r
                <p>Gestiona la información de tu perfil personal.</p>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>\r
                    <label>Nombre: <input type="text" defaultValue="Juan Pérez" /></label>\r
                    <label>Email: <input type="email" defaultValue="juan@example.com" /></label>\r
                    <label>Teléfono: <input type="tel" defaultValue="+54 11 1234-5678" /></label>\r
                </div>\r
            </Accordion.Tab>\r
            \r
            <Accordion.Tab index={2} title="Métodos de Pago" icon={<IoCard size={16} />}>\r
                <p>Administra tus tarjetas y métodos de pago.</p>\r
                <div style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>\r
                    <strong>Tarjeta principal:</strong> **** **** **** 4242\r
                    <br />\r
                    <small>Visa terminada en 4242</small>\r
                </div>\r
            </Accordion.Tab>\r
        </Accordion.Root>\r
    </div>`,...(L=($=T.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var H,J,B;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`args => <div style={{
  width: '500px'
}}>\r
        <Accordion.Root {...args}>\r
            <Accordion.Tab index={0} title="Configuración General" icon={<IoSettings size={16} />}>\r
                <p>Aquí puedes configurar las opciones generales de tu cuenta.</p>\r
                <ul>\r
                    <li>Idioma de la interfaz</li>\r
                    <li>Zona horaria</li>\r
                    <li>Formato de fecha</li>\r
                    <li>Tema de la aplicación</li>\r
                </ul>\r
            </Accordion.Tab>\r
            \r
            <Accordion.Tab index={1} title="Perfil de Usuario" icon={<PiUser size={16} />}>\r
                <p>Gestiona la información de tu perfil personal.</p>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>\r
                    <label>Nombre: <input type="text" defaultValue="Juan Pérez" /></label>\r
                    <label>Email: <input type="email" defaultValue="juan@example.com" /></label>\r
                    <label>Teléfono: <input type="tel" defaultValue="+54 11 1234-5678" /></label>\r
                </div>\r
            </Accordion.Tab>\r
            \r
            <Accordion.Tab index={2} title="Métodos de Pago" icon={<IoCard size={16} />}>\r
                <p>Administra tus tarjetas y métodos de pago.</p>\r
                <div style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>\r
                    <strong>Tarjeta principal:</strong> **** **** **** 4242\r
                    <br />\r
                    <small>Visa terminada en 4242</small>\r
                </div>\r
            </Accordion.Tab>\r
        </Accordion.Root>\r
    </div>`,...(B=(J=C.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};var M,W,F;P.parameters={...P.parameters,docs:{...(M=P.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      width: '500px'
    }}>\r
                {colors.map(color => <div key={color}>\r
                        <h4 style={{
          margin: '0 0 1rem 0',
          fontSize: '1rem',
          textTransform: 'capitalize',
          color: '#666'
        }}>\r
                            Color: {color}\r
                        </h4>\r
                        <Accordion.Root color={color} exclusive defaultActiveIndex={0}>\r
                            <Accordion.Tab index={0} title="Configuración" icon={<IoSettings size={16} />}>\r
                                <p>Panel de configuración con color {color}.</p>\r
                            </Accordion.Tab>\r
                            <Accordion.Tab index={1} title="Notificaciones" icon={<IoNotifications size={16} />}>\r
                                <p>Gestiona tus notificaciones aquí.</p>\r
                            </Accordion.Tab>\r
                        </Accordion.Root>\r
                    </div>)}\r
            </div>;
  }
}`,...(F=(W=P.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var Z,K,_;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const sizes = ['sm', 'md', 'lg'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      width: '500px'
    }}>\r
                {sizes.map(size => <div key={size}>\r
                        <h4 style={{
          margin: '0 0 1rem 0',
          fontSize: '1rem',
          color: '#666'
        }}>\r
                            Tamaño: {size}\r
                        </h4>\r
                        <Accordion.Root size={size} exclusive defaultActiveIndex={0}>\r
                            <Accordion.Tab index={0} title="Panel Principal" icon={<PiUser size={16} />}>\r
                                <p>Contenido del panel con tamaño {size}.</p>\r
                            </Accordion.Tab>\r
                            <Accordion.Tab index={1} title="Configuración" icon={<IoSettings size={16} />}>\r
                                <p>Configuraciones adicionales.</p>\r
                            </Accordion.Tab>\r
                        </Accordion.Root>\r
                    </div>)}\r
            </div>;
  }
}`,...(_=(K=S.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var Q,X,Y;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const variants = ['default', 'bordered', 'filled'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      width: '500px'
    }}>\r
                {variants.map(variant => <div key={variant}>\r
                        <h4 style={{
          margin: '0 0 1rem 0',
          fontSize: '1rem',
          textTransform: 'capitalize',
          color: '#666'
        }}>\r
                            Variante: {variant}\r
                        </h4>\r
                        <Accordion.Root variant={variant} exclusive defaultActiveIndex={0}>\r
                            <Accordion.Tab index={0} title="Información" icon={<PiUser size={16} />}>\r
                                <p>Panel con variante {variant}.</p>\r
                            </Accordion.Tab>\r
                            <Accordion.Tab index={1} title="Seguridad" icon={<IoShield size={16} />}>\r
                                <p>Configuraciones de seguridad.</p>\r
                            </Accordion.Tab>\r
                        </Accordion.Root>\r
                    </div>)}\r
            </div>;
  }
}`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ie;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    const [activeIndex, setActiveIndex] = useState([0]);
    const [log, setLog] = useState([]);
    const handleActiveIndexChange = (newActiveIndex, clickedIndex) => {
      setActiveIndex(newActiveIndex);
      setLog(prev => [...prev, {
        timestamp: new Date().toLocaleTimeString(),
        activeIndex: newActiveIndex,
        clickedIndex
      }].slice(-5)); // Keep last 5 entries
    };
    const resetAccordion = () => {
      setActiveIndex([]);
      setLog([]);
    };
    return <div style={{
      width: '500px'
    }}>\r
                <div style={{
        marginBottom: '1rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>\r
                    <button onClick={() => setActiveIndex([0, 1])} style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}>\r
                        Abrir Primeros 2\r
                    </button>\r
                    <button onClick={resetAccordion} style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}>\r
                        Cerrar Todos\r
                    </button>\r
                </div>\r
\r
                <Accordion.Root activeIndex={activeIndex} onActiveIndexChange={handleActiveIndexChange} color="primary">\r
                    <Accordion.Tab index={0} title="Panel 1" icon={<PiUser size={16} />}>\r
                        <p>Contenido del primer panel controlado.</p>\r
                    </Accordion.Tab>\r
                    <Accordion.Tab index={1} title="Panel 2" icon={<IoSettings size={16} />}>\r
                        <p>Contenido del segundo panel controlado.</p>\r
                    </Accordion.Tab>\r
                    <Accordion.Tab index={2} title="Panel 3" icon={<IoShield size={16} />}>\r
                        <p>Contenido del tercer panel controlado.</p>\r
                    </Accordion.Tab>\r
                </Accordion.Root>\r
\r
                <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        fontSize: '0.875rem'
      }}>\r
                    <strong>Estado actual:</strong> {JSON.stringify(activeIndex)}\r
                    \r
                    {log.length > 0 && <div style={{
          marginTop: '0.5rem'
        }}>\r
                            <strong>Log de cambios:</strong>\r
                            <ul style={{
            margin: '0.5rem 0',
            paddingLeft: '1rem'
          }}>\r
                                {log.map((entry, index) => <li key={index} style={{
              marginBottom: '0.25rem'
            }}>\r
                                        {entry.timestamp} - Clicked: {entry.clickedIndex}, Active: {JSON.stringify(entry.activeIndex)}\r
                                    </li>)}\r
                            </ul>\r
                        </div>}\r
                </div>\r
            </div>;
  }
}`,...(ie=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ne,ae;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    const [activeIndex, setActiveIndex] = useState(null);
    return <div style={{
      width: '500px'
    }}>\r
                <div style={{
        marginBottom: '1rem',
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>\r
                    {[0, 1, 2].map(index => <button key={index} onClick={() => setActiveIndex(index)} style={{
          padding: '0.25rem 0.75rem',
          backgroundColor: activeIndex === index ? '#3b82f6' : '#e5e7eb',
          color: activeIndex === index ? 'white' : '#374151',
          border: 'none',
          borderRadius: '4px',
          fontSize: '0.875rem'
        }}>\r
                            Panel {index + 1}\r
                        </button>)}\r
                    <button onClick={() => setActiveIndex(null)} style={{
          padding: '0.25rem 0.75rem',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '0.875rem'
        }}>\r
                        Cerrar\r
                    </button>\r
                </div>\r
\r
                <Accordion.Root exclusive activeIndex={activeIndex} onActiveIndexChange={setActiveIndex} color="success">\r
                    <Accordion.Tab index={0} title="Configuración General" icon={<IoSettings size={16} />}>\r
                        <p>Panel de configuración general del sistema.</p>\r
                        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>\r
                            <label><input type="checkbox" /> Habilitar notificaciones</label>\r
                            <label><input type="checkbox" /> Modo oscuro</label>\r
                            <label><input type="checkbox" /> Actualizaciones automáticas</label>\r
                        </div>\r
                    </Accordion.Tab>\r
                    \r
                    <Accordion.Tab index={1} title="Perfil de Usuario" icon={<PiUser size={16} />}>\r
                        <p>Información personal y configuración del perfil.</p>\r
                        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem'
          }}>\r
                            <input placeholder="Nombre" />\r
                            <input placeholder="Apellido" />\r
                            <input placeholder="Email" type="email" />\r
                            <input placeholder="Teléfono" type="tel" />\r
                        </div>\r
                    </Accordion.Tab>\r
                    \r
                    <Accordion.Tab index={2} title="Ayuda y Soporte" icon={<IoHelpCircle size={16} />}>\r
                        <p>Recursos de ayuda y contacto con soporte técnico.</p>\r
                        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>\r
                            <a href="#" style={{
              color: '#3b82f6',
              textDecoration: 'none'
            }}>📚 Documentación</a>\r
                            <a href="#" style={{
              color: '#3b82f6',
              textDecoration: 'none'
            }}>💬 Chat en vivo</a>\r
                            <a href="#" style={{
              color: '#3b82f6',
              textDecoration: 'none'
            }}>📧 Contactar soporte</a>\r
                        </div>\r
                    </Accordion.Tab>\r
                </Accordion.Root>\r
\r
                <div style={{
        marginTop: '1rem',
        padding: '0.75rem',
        backgroundColor: '#f0f9ff',
        borderRadius: '6px',
        fontSize: '0.875rem',
        border: '1px solid #0ea5e9'
      }}>\r
                    <strong>Panel activo:</strong> {activeIndex !== null ? \`Panel \${activeIndex + 1}\` : 'Ninguno'}\r
                </div>\r
            </div>;
  }
}`,...(ae=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,le,se;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '500px'
  }}>\r
            <Accordion.Root exclusive defaultActiveIndex={0}>\r
                <Accordion.Tab index={0} title="Panel Habilitado" icon={<PiUser size={16} />}>\r
                    <p>Este panel está habilitado y se puede usar normalmente.</p>\r
                </Accordion.Tab>\r
                \r
                <Accordion.Tab index={1} title="Panel Deshabilitado" icon={<IoSettings size={16} />} disabled>\r
                    <p>Este contenido no se debería ver porque el panel está deshabilitado.</p>\r
                </Accordion.Tab>\r
                \r
                <Accordion.Tab index={2} title="Otro Panel Habilitado" icon={<IoShield size={16} />}>\r
                    <p>Este panel también está habilitado.</p>\r
                    <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}>\r
                        Acción del Panel\r
                    </button>\r
                </Accordion.Tab>\r
            </Accordion.Root>\r
        </div>
}`,...(se=(le=D.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var de,ce,pe;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`args => <div style={{
  width: '500px'
}}>\r
        <Accordion.Root {...args}>\r
            <Accordion.Tab index={0} title="Configuración General" icon={<IoSettings size={16} />}>\r
                <p>Aquí puedes configurar las opciones generales de tu cuenta.</p>\r
                <ul>\r
                    <li>Idioma de la interfaz</li>\r
                    <li>Zona horaria</li>\r
                    <li>Formato de fecha</li>\r
                    <li>Tema de la aplicación</li>\r
                </ul>\r
            </Accordion.Tab>\r
            \r
            <Accordion.Tab index={1} title="Perfil de Usuario" icon={<PiUser size={16} />}>\r
                <p>Gestiona la información de tu perfil personal.</p>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>\r
                    <label>Nombre: <input type="text" defaultValue="Juan Pérez" /></label>\r
                    <label>Email: <input type="email" defaultValue="juan@example.com" /></label>\r
                    <label>Teléfono: <input type="tel" defaultValue="+54 11 1234-5678" /></label>\r
                </div>\r
            </Accordion.Tab>\r
            \r
            <Accordion.Tab index={2} title="Métodos de Pago" icon={<IoCard size={16} />}>\r
                <p>Administra tus tarjetas y métodos de pago.</p>\r
                <div style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>\r
                    <strong>Tarjeta principal:</strong> **** **** **** 4242\r
                    <br />\r
                    <small>Visa terminada en 4242</small>\r
                </div>\r
            </Accordion.Tab>\r
        </Accordion.Root>\r
    </div>`,...(pe=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Re=["Default","Exclusive","WithColors","Sizes","Variants","Controlled","ExclusiveControlled","WithDisabledTabs","CompletelyDisabled"];export{I as CompletelyDisabled,k as Controlled,T as Default,C as Exclusive,w as ExclusiveControlled,S as Sizes,R as Variants,P as WithColors,D as WithDisabledTabs,Re as __namedExportsOrder,Se as default};
