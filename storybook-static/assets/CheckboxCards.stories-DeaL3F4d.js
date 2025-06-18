import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as T}from"./index-BZISi7jw.js";import{P as a}from"./index-Co38GRlK.js";import{g as R,h as z,i as Z,j as ae,k as V}from"./index-KKouTENB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";function ee({children:i,name:r,columns:o={sm:1,md:2,lg:3},color:n="primary",radius:l="md",form:t,onChange:u,className:d,defaultValue:S=[],...I}){const[m,g]=C.useState(S),x=c=>{const p=m.includes(c)?m.filter(re=>re!==c):[...m,c];g(p),t&&(t.setValue(r,p),t.trigger(r)),u&&u(p)};let A="q-checkbox-cards-root";return d&&(A+=` ${d}`),e.jsxs("div",{className:A,"data-color":n,"data-radius":l,...Object.fromEntries(Object.entries(o).map(([c,p])=>[`data-columns-${c}`,p])),...I,children:[e.jsx("input",{type:"hidden",name:r,value:JSON.stringify(m)}),T.Children.toArray(i).map((c,p)=>T.cloneElement(c,{key:p,selected:m.includes(c.props.value),onSelect:()=>x(c.props.value),color:n,radius:l}))]})}function se({children:i,value:r,title:o,description:n,icon:l,selected:t,onSelect:u,disabled:d=!1,color:S,radius:I,...m}){let g="q-checkbox-cards-item";return t&&(g+=" selected"),d&&(g+=" disabled"),e.jsxs("div",{className:g,onClick:d?void 0:u,"data-color":S,"data-radius":I,tabIndex:d?-1:0,role:"checkbox","aria-checked":t,"aria-disabled":d,onKeyDown:x=>{(x.key==="Enter"||x.key===" ")&&!d&&(x.preventDefault(),u())},...m,children:[l&&e.jsx("div",{className:"q-checkbox-cards-icon",children:l}),e.jsxs("div",{className:"q-checkbox-cards-content",children:[o&&e.jsx("div",{className:"q-checkbox-cards-title",children:o}),n&&e.jsx("div",{className:"q-checkbox-cards-description",children:n}),!o&&!n&&i]}),e.jsx("input",{type:"checkbox",name:`checkbox-card-${r}`,value:r,checked:t,onChange:()=>{},tabIndex:-1,"aria-hidden":"true"})]})}ee.propTypes={children:a.node.isRequired,name:a.string.isRequired,columns:a.object,color:a.string,radius:a.oneOf(["none","sm","md","lg","full"]),form:a.object,onChange:a.func,className:a.string,defaultValue:a.array};se.propTypes={children:a.node,value:a.oneOfType([a.string,a.number]).isRequired,title:a.string,description:a.string,icon:a.node,selected:a.bool,onSelect:a.func,disabled:a.bool,color:a.string,radius:a.string};const s={Root:ee,Item:se},le={title:"Components/CheckboxCards",component:s.Root,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","danger","info"]},radius:{control:"select",options:["none","sm","md","lg","full"]}}},P=i=>{const[r,o]=C.useState([]);return e.jsxs("div",{style:{width:"600px"},children:[e.jsxs(s.Root,{...i,name:"features",onChange:o,children:[e.jsx(s.Item,{value:"security",title:"Seguridad avanzada",description:"Protección con cifrado de extremo a extremo",icon:e.jsx(R,{size:24})}),e.jsx(s.Item,{value:"analytics",title:"Análisis detallados",description:"Reportes y métricas en tiempo real",icon:e.jsx(z,{size:24})}),e.jsx(s.Item,{value:"collaboration",title:"Colaboración en equipo",description:"Herramientas para trabajar en conjunto",icon:e.jsx(Z,{size:24})}),e.jsx(s.Item,{value:"automation",title:"Automatización",description:"Workflows y procesos automáticos",icon:e.jsx(ae,{size:24})}),e.jsx(s.Item,{value:"cloud",title:"Almacenamiento en la nube",description:"Acceso desde cualquier dispositivo",icon:e.jsx(V,{size:24})})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Características seleccionadas:"})," ",r.length>0?r.join(", "):"Ninguna"]})]})},h=P.bind({});h.args={columns:{sm:1,md:2},color:"primary",radius:"md"};const b=P.bind({});b.args={columns:{sm:1,md:2},color:"success",radius:"md"};const v=P.bind({});v.args={columns:{sm:1},color:"info",radius:"lg"};const k={render:i=>{const[r,o]=C.useState([]);return e.jsxs("div",{style:{width:"800px"},children:[e.jsxs(s.Root,{...i,name:"services",onChange:o,children:[e.jsx(s.Item,{value:"hosting",title:"Web Hosting",description:"Alojamiento web profesional"}),e.jsx(s.Item,{value:"domain",title:"Registro de dominio",description:"Tu dominio personalizado"}),e.jsx(s.Item,{value:"ssl",title:"Certificado SSL",description:"Seguridad para tu sitio"}),e.jsx(s.Item,{value:"backup",title:"Copias de seguridad",description:"Respaldo automático diario"}),e.jsx(s.Item,{value:"cdn",title:"Red CDN",description:"Entrega de contenido global"}),e.jsx(s.Item,{value:"support",title:"Soporte 24/7",description:"Asistencia técnica completa"})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsxs("strong",{children:["Servicios seleccionados (",r.length,"):"]}),e.jsx("br",{}),r.length>0?r.join(", "):"Ninguno"]})]})},args:{columns:{sm:1,md:2,lg:3},color:"warning",radius:"md"}},j={render:i=>{const[r,o]=C.useState([]);return e.jsxs("div",{style:{width:"400px"},children:[e.jsxs(s.Root,{...i,name:"preferences",onChange:o,children:[e.jsx(s.Item,{value:"email",children:"Email"}),e.jsx(s.Item,{value:"sms",children:"SMS"}),e.jsx(s.Item,{value:"push",children:"Push"}),e.jsx(s.Item,{value:"phone",children:"Teléfono"})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Notificaciones preferidas:"})," ",r.length>0?r.join(", "):"Ninguna"]})]})},args:{columns:{sm:2,md:4},color:"secondary",radius:"full"}},f={render:i=>{const[r,o]=C.useState({}),n={setValue:(l,t)=>{o(u=>({...u,[l]:t}))},trigger:()=>{}};return e.jsxs("div",{style:{width:"500px"},children:[e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx("strong",{children:"Selecciona los addons que deseas:"})}),e.jsxs(s.Root,{...i,name:"addons",form:n,children:[e.jsx(s.Item,{value:"premium-support",title:"Soporte Premium",description:"Respuesta en menos de 1 hora",icon:e.jsx(R,{size:20})}),e.jsx(s.Item,{value:"advanced-analytics",title:"Analytics Avanzado",description:"Métricas detalladas y reportes",icon:e.jsx(z,{size:20})}),e.jsx(s.Item,{value:"team-collaboration",title:"Colaboración en Equipo",description:"Hasta 10 usuarios adicionales",icon:e.jsx(Z,{size:20})}),e.jsx(s.Item,{value:"api-access",title:"Acceso a API",description:"Integración con sistemas externos",icon:e.jsx(V,{size:20})})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Formulario:"}),e.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})},args:{columns:{sm:1,md:2},color:"danger",radius:"sm"}},y={render:i=>{const[r,o]=C.useState(["security","analytics"]);return e.jsxs("div",{style:{width:"600px"},children:[e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx("strong",{children:"Características incluidas en tu plan:"})}),e.jsxs(s.Root,{...i,name:"included-features",onChange:o,children:[e.jsx(s.Item,{value:"security",title:"Seguridad Básica",description:"Protección estándar incluida",icon:e.jsx(R,{size:20})}),e.jsx(s.Item,{value:"analytics",title:"Reportes Básicos",description:"Métricas esenciales",icon:e.jsx(z,{size:20})}),e.jsx(s.Item,{value:"storage",title:"Almacenamiento Extra",description:"100GB adicionales",icon:e.jsx(V,{size:20})})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#e8f5e8",borderRadius:"4px"},children:[e.jsx("strong",{children:"Total seleccionado:"})," ",r.length," características",e.jsx("br",{}),e.jsx("small",{children:r.join(" + ")})]})]})},args:{columns:{sm:1,md:3},color:"success",radius:"md"}};var w,N,q;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [selectedValues, setSelectedValues] = useState([]);
  return <div style={{
    width: '600px'
  }}>\r
      <CheckboxCards.Root {...args} name="features" onChange={setSelectedValues}>\r
        <CheckboxCards.Item value="security" title="Seguridad avanzada" description="Protección con cifrado de extremo a extremo" icon={<PiShieldCheck size={24} />} />\r
        <CheckboxCards.Item value="analytics" title="Análisis detallados" description="Reportes y métricas en tiempo real" icon={<PiChartBar size={24} />} />\r
        <CheckboxCards.Item value="collaboration" title="Colaboración en equipo" description="Herramientas para trabajar en conjunto" icon={<PiUsers size={24} />} />\r
        <CheckboxCards.Item value="automation" title="Automatización" description="Workflows y procesos automáticos" icon={<PiClock size={24} />} />\r
        <CheckboxCards.Item value="cloud" title="Almacenamiento en la nube" description="Acceso desde cualquier dispositivo" icon={<PiCloud size={24} />} />\r
        {/* <CheckboxCards.Item\r
          value="mobile"\r
          title="App móvil"\r
          description="Aplicación nativa para iOS y Android"\r
          icon={<PiMobile size={24} />}\r
          disabled\r
         /> */}\r
      </CheckboxCards.Root>\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Características seleccionadas:</strong> {selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguna'}\r
      </div>\r
    </div>;
}`,...(q=(N=h.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var B,E,D;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [selectedValues, setSelectedValues] = useState([]);
  return <div style={{
    width: '600px'
  }}>\r
      <CheckboxCards.Root {...args} name="features" onChange={setSelectedValues}>\r
        <CheckboxCards.Item value="security" title="Seguridad avanzada" description="Protección con cifrado de extremo a extremo" icon={<PiShieldCheck size={24} />} />\r
        <CheckboxCards.Item value="analytics" title="Análisis detallados" description="Reportes y métricas en tiempo real" icon={<PiChartBar size={24} />} />\r
        <CheckboxCards.Item value="collaboration" title="Colaboración en equipo" description="Herramientas para trabajar en conjunto" icon={<PiUsers size={24} />} />\r
        <CheckboxCards.Item value="automation" title="Automatización" description="Workflows y procesos automáticos" icon={<PiClock size={24} />} />\r
        <CheckboxCards.Item value="cloud" title="Almacenamiento en la nube" description="Acceso desde cualquier dispositivo" icon={<PiCloud size={24} />} />\r
        {/* <CheckboxCards.Item\r
          value="mobile"\r
          title="App móvil"\r
          description="Aplicación nativa para iOS y Android"\r
          icon={<PiMobile size={24} />}\r
          disabled\r
         /> */}\r
      </CheckboxCards.Root>\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Características seleccionadas:</strong> {selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguna'}\r
      </div>\r
    </div>;
}`,...(D=(E=b.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var M,O,F;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [selectedValues, setSelectedValues] = useState([]);
  return <div style={{
    width: '600px'
  }}>\r
      <CheckboxCards.Root {...args} name="features" onChange={setSelectedValues}>\r
        <CheckboxCards.Item value="security" title="Seguridad avanzada" description="Protección con cifrado de extremo a extremo" icon={<PiShieldCheck size={24} />} />\r
        <CheckboxCards.Item value="analytics" title="Análisis detallados" description="Reportes y métricas en tiempo real" icon={<PiChartBar size={24} />} />\r
        <CheckboxCards.Item value="collaboration" title="Colaboración en equipo" description="Herramientas para trabajar en conjunto" icon={<PiUsers size={24} />} />\r
        <CheckboxCards.Item value="automation" title="Automatización" description="Workflows y procesos automáticos" icon={<PiClock size={24} />} />\r
        <CheckboxCards.Item value="cloud" title="Almacenamiento en la nube" description="Acceso desde cualquier dispositivo" icon={<PiCloud size={24} />} />\r
        {/* <CheckboxCards.Item\r
          value="mobile"\r
          title="App móvil"\r
          description="Aplicación nativa para iOS y Android"\r
          icon={<PiMobile size={24} />}\r
          disabled\r
         /> */}\r
      </CheckboxCards.Root>\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Características seleccionadas:</strong> {selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguna'}\r
      </div>\r
    </div>;
}`,...(F=(O=v.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var H,W,U;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState([]);
    return <div style={{
      width: '800px'
    }}>\r
        <CheckboxCards.Root {...args} name="services" onChange={setSelectedValues}>\r
          <CheckboxCards.Item value="hosting" title="Web Hosting" description="Alojamiento web profesional" />\r
          <CheckboxCards.Item value="domain" title="Registro de dominio" description="Tu dominio personalizado" />\r
          <CheckboxCards.Item value="ssl" title="Certificado SSL" description="Seguridad para tu sitio" />\r
          <CheckboxCards.Item value="backup" title="Copias de seguridad" description="Respaldo automático diario" />\r
          <CheckboxCards.Item value="cdn" title="Red CDN" description="Entrega de contenido global" />\r
          <CheckboxCards.Item value="support" title="Soporte 24/7" description="Asistencia técnica completa" />\r
        </CheckboxCards.Root>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Servicios seleccionados ({selectedValues.length}):</strong>\r
          <br />\r
          {selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguno'}\r
        </div>\r
      </div>;
  },
  args: {
    columns: {
      sm: 1,
      md: 2,
      lg: 3
    },
    color: 'warning',
    radius: 'md'
  }
}`,...(U=(W=k.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var J,_,$;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState([]);
    return <div style={{
      width: '400px'
    }}>\r
        <CheckboxCards.Root {...args} name="preferences" onChange={setSelectedValues}>\r
          <CheckboxCards.Item value="email">Email</CheckboxCards.Item>\r
          <CheckboxCards.Item value="sms">SMS</CheckboxCards.Item>\r
          <CheckboxCards.Item value="push">Push</CheckboxCards.Item>\r
          <CheckboxCards.Item value="phone">Teléfono</CheckboxCards.Item>\r
        </CheckboxCards.Root>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Notificaciones preferidas:</strong> {selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguna'}\r
        </div>\r
      </div>;
  },
  args: {
    columns: {
      sm: 2,
      md: 4
    },
    color: 'secondary',
    radius: 'full'
  }
}`,...($=(_=j.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var G,L,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = useState({});
    const mockForm = {
      setValue: (name, value) => {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      },
      trigger: () => {}
    };
    return <div style={{
      width: '500px'
    }}>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <strong>Selecciona los addons que deseas:</strong>\r
        </div>\r
        \r
        <CheckboxCards.Root {...args} name="addons" form={mockForm}>\r
          <CheckboxCards.Item value="premium-support" title="Soporte Premium" description="Respuesta en menos de 1 hora" icon={<PiShieldCheck size={20} />} />\r
          <CheckboxCards.Item value="advanced-analytics" title="Analytics Avanzado" description="Métricas detalladas y reportes" icon={<PiChartBar size={20} />} />\r
          <CheckboxCards.Item value="team-collaboration" title="Colaboración en Equipo" description="Hasta 10 usuarios adicionales" icon={<PiUsers size={20} />} />\r
          <CheckboxCards.Item value="api-access" title="Acceso a API" description="Integración con sistemas externos" icon={<PiCloud size={20} />} />\r
        </CheckboxCards.Root>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Formulario:</strong>\r
          <pre>{JSON.stringify(formData, null, 2)}</pre>\r
        </div>\r
      </div>;
  },
  args: {
    columns: {
      sm: 1,
      md: 2
    },
    color: 'danger',
    radius: 'sm'
  }
}`,...(K=(L=f.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState(['security', 'analytics']);
    return <div style={{
      width: '600px'
    }}>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <strong>Características incluidas en tu plan:</strong>\r
        </div>\r
        \r
        <CheckboxCards.Root {...args} name="included-features" onChange={setSelectedValues}>\r
          <CheckboxCards.Item value="security" title="Seguridad Básica" description="Protección estándar incluida" icon={<PiShieldCheck size={20} />} />\r
          <CheckboxCards.Item value="analytics" title="Reportes Básicos" description="Métricas esenciales" icon={<PiChartBar size={20} />} />\r
          <CheckboxCards.Item value="storage" title="Almacenamiento Extra" description="100GB adicionales" icon={<PiCloud size={20} />} />\r
        </CheckboxCards.Root>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#e8f5e8',
        borderRadius: '4px'
      }}>\r
          <strong>Total seleccionado:</strong> {selectedValues.length} características\r
          <br />\r
          <small>{selectedValues.join(' + ')}</small>\r
        </div>\r
      </div>;
  },
  args: {
    columns: {
      sm: 1,
      md: 3
    },
    color: 'success',
    radius: 'md'
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ue=["Default","WithColor","SingleColumn","ThreeColumns","SimpleCards","WithReactHookForm","MultiSelection"];export{h as Default,y as MultiSelection,j as SimpleCards,v as SingleColumn,k as ThreeColumns,b as WithColor,f as WithReactHookForm,ue as __namedExportsOrder,le as default};
