import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BZISi7jw.js";import{P as n}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";function a({label:o,id:t,name:s,color:r="primary",size:i="md",disabled:d=!1,checked:c,defaultChecked:Z=!1,onChange:k,className:S,children:w,form:x,...ee}){const[re,te]=l.useState(c!==void 0?c:Z),C=t||`switch-${s||Math.random().toString(36).substr(2,9)}`,se=D=>{const z=D.target.checked;c===void 0&&te(z),x&&s&&(x.setValue(s,z),x.trigger(s)),k&&k(D)},j=c!==void 0?c:re;let b="q-switch-root";return S&&(b+=` ${S}`),d&&(b+=" q-switch-disabled"),e.jsxs("div",{className:b,children:[(o||w)&&e.jsx("label",{htmlFor:C,className:"q-switch-label",children:o||w}),e.jsxs("div",{className:"q-switch","data-checked":j,"data-disabled":d,"data-size":i,"data-color":r,children:[e.jsx("input",{id:C,name:s,type:"checkbox",checked:j,disabled:d,onChange:se,"data-color":r,"aria-describedby":o?void 0:"switch-description",...ee}),e.jsx("span",{className:"q-switch-slider"})]})]})}a.propTypes={label:n.string,children:n.node,id:n.string,name:n.string,color:n.string,size:n.oneOf(["sm","md","lg"]),disabled:n.bool,checked:n.bool,defaultChecked:n.bool,onChange:n.func,className:n.string,form:n.object};a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{color:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},defaultChecked:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},id:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},checked:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},className:{description:"",type:{name:"string"},required:!1},form:{description:"",type:{name:"object"},required:!1}}};const ce={title:"Components/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","danger","info"]},size:{control:"select",options:["sm","md","lg"]}}},Y=o=>{const[t,s]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{...o,checked:t,onChange:r=>s(r.target.checked)}),e.jsxs("div",{style:{padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Estado:"})," ",t?"Activado":"Desactivado"]})]})},m=Y.bind({});m.args={label:"Activar notificaciones",name:"notifications"};const g=Y.bind({});g.args={label:"Modo oscuro",color:"success",name:"darkMode"};const h={render:o=>{const[t,s]=l.useState({sm:!1,md:!0,lg:!1});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(a,{size:"sm",label:"Switch pequeño",checked:t.sm,onChange:r=>s(i=>({...i,sm:r.target.checked})),name:"switch-sm"}),e.jsx(a,{size:"md",label:"Switch mediano",checked:t.md,onChange:r=>s(i=>({...i,md:r.target.checked})),name:"switch-md"}),e.jsx(a,{size:"lg",label:"Switch grande",checked:t.lg,onChange:r=>s(i=>({...i,lg:r.target.checked})),name:"switch-lg"})]})}},u={render:o=>{const[t,s]=l.useState({primary:!0,success:!0,warning:!1,danger:!1,info:!0,secondary:!1});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(a,{color:"primary",label:"Primary",checked:t.primary,onChange:r=>s(i=>({...i,primary:r.target.checked})),name:"switch-primary"}),e.jsx(a,{color:"success",label:"Success",checked:t.success,onChange:r=>s(i=>({...i,success:r.target.checked})),name:"switch-success"}),e.jsx(a,{color:"warning",label:"Warning",checked:t.warning,onChange:r=>s(i=>({...i,warning:r.target.checked})),name:"switch-warning"}),e.jsx(a,{color:"danger",label:"Danger",checked:t.danger,onChange:r=>s(i=>({...i,danger:r.target.checked})),name:"switch-danger"}),e.jsx(a,{color:"info",label:"Info",checked:t.info,onChange:r=>s(i=>({...i,info:r.target.checked})),name:"switch-info"}),e.jsx(a,{color:"secondary",label:"Secondary",checked:t.secondary,onChange:r=>s(i=>({...i,secondary:r.target.checked})),name:"switch-secondary"})]})}},f={render:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(a,{label:"Deshabilitado (off)",disabled:!0,checked:!1,name:"disabled-off"}),e.jsx(a,{label:"Deshabilitado (on)",disabled:!0,checked:!0,color:"success",name:"disabled-on"})]})},p={render:o=>{const[t,s]=l.useState(!0);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("span",{children:"Wi-Fi"}),e.jsx(a,{checked:t,onChange:r=>s(r.target.checked),color:"info",name:"wifi"}),e.jsx("span",{style:{color:t?"#10b981":"#6b7280"},children:t?"Conectado":"Desconectado"})]})}},y={render:o=>{const[t,s]=l.useState({notifications:!0,autoSave:!1,darkMode:!0,soundEffects:!1,analytics:!0}),r=i=>d=>{s(c=>({...c,[i]:d.target.checked}))};return e.jsxs("div",{style:{width:"320px",padding:"1.5rem",backgroundColor:"white",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[e.jsx("h3",{style:{margin:"0 0 1.5rem 0"},children:"Configuración"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"500",marginBottom:"0.25rem"},children:"Notificaciones"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280"},children:"Recibir alertas y mensajes"})]}),e.jsx(a,{checked:t.notifications,onChange:r("notifications"),color:"primary",name:"notifications"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"500",marginBottom:"0.25rem"},children:"Guardado automático"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280"},children:"Guardar cambios automáticamente"})]}),e.jsx(a,{checked:t.autoSave,onChange:r("autoSave"),color:"success",name:"autoSave"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"500",marginBottom:"0.25rem"},children:"Modo oscuro"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280"},children:"Interfaz con tema oscuro"})]}),e.jsx(a,{checked:t.darkMode,onChange:r("darkMode"),color:"secondary",name:"darkMode"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"500",marginBottom:"0.25rem"},children:"Efectos de sonido"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280"},children:"Reproducir sonidos de la interfaz"})]}),e.jsx(a,{checked:t.soundEffects,onChange:r("soundEffects"),color:"warning",name:"soundEffects"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"500",marginBottom:"0.25rem"},children:"Analytics"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280"},children:"Compartir datos de uso"})]}),e.jsx(a,{checked:t.analytics,onChange:r("analytics"),color:"info",name:"analytics"})]})]}),e.jsxs("div",{style:{marginTop:"1.5rem",padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx("strong",{children:"Estado actual:"}),e.jsx("pre",{style:{margin:"0.5rem 0 0 0",fontSize:"0.75rem"},children:JSON.stringify(t,null,2)})]})]})}},v={render:o=>{const[t,s]=l.useState({}),r={setValue:(i,d)=>{s(c=>({...c,[i]:d}))},trigger:()=>{}};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx("strong",{children:"Preferencias de usuario:"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{label:"Recibir emails promocionales",name:"marketingEmails",form:r,color:"primary"}),e.jsx(a,{label:"Notificaciones push",name:"pushNotifications",form:r,color:"info",defaultChecked:!0}),e.jsx(a,{label:"Compartir perfil público",name:"publicProfile",form:r,color:"success"})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Datos del formulario:"}),e.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})}};var I,q,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Switch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />\r
      \r
      <div style={{
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Estado:</strong> {checked ? 'Activado' : 'Desactivado'}\r
      </div>\r
    </div>;
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var W,R,N;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Switch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />\r
      \r
      <div style={{
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Estado:</strong> {checked ? 'Activado' : 'Desactivado'}\r
      </div>\r
    </div>;
}`,...(N=(R=g.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var F,M,B;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [states, setStates] = useState({
      sm: false,
      md: true,
      lg: false
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'flex-start'
    }}>\r
        <Switch size="sm" label="Switch pequeño" checked={states.sm} onChange={e => setStates(prev => ({
        ...prev,
        sm: e.target.checked
      }))} name="switch-sm" />\r
        <Switch size="md" label="Switch mediano" checked={states.md} onChange={e => setStates(prev => ({
        ...prev,
        md: e.target.checked
      }))} name="switch-md" />\r
        <Switch size="lg" label="Switch grande" checked={states.lg} onChange={e => setStates(prev => ({
        ...prev,
        lg: e.target.checked
      }))} name="switch-lg" />\r
      </div>;
  }
}`,...(B=(M=h.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var P,T,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [states, setStates] = useState({
      primary: true,
      success: true,
      warning: false,
      danger: false,
      info: true,
      secondary: false
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'flex-start'
    }}>\r
        <Switch color="primary" label="Primary" checked={states.primary} onChange={e => setStates(prev => ({
        ...prev,
        primary: e.target.checked
      }))} name="switch-primary" />\r
        <Switch color="success" label="Success" checked={states.success} onChange={e => setStates(prev => ({
        ...prev,
        success: e.target.checked
      }))} name="switch-success" />\r
        <Switch color="warning" label="Warning" checked={states.warning} onChange={e => setStates(prev => ({
        ...prev,
        warning: e.target.checked
      }))} name="switch-warning" />\r
        <Switch color="danger" label="Danger" checked={states.danger} onChange={e => setStates(prev => ({
        ...prev,
        danger: e.target.checked
      }))} name="switch-danger" />\r
        <Switch color="info" label="Info" checked={states.info} onChange={e => setStates(prev => ({
        ...prev,
        info: e.target.checked
      }))} name="switch-info" />\r
        <Switch color="secondary" label="Secondary" checked={states.secondary} onChange={e => setStates(prev => ({
        ...prev,
        secondary: e.target.checked
      }))} name="switch-secondary" />\r
      </div>;
  }
}`,...(V=(T=u.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var A,O,_;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>\r
      <Switch label="Deshabilitado (off)" disabled checked={false} name="disabled-off" />\r
      <Switch label="Deshabilitado (on)" disabled checked={true} color="success" name="disabled-on" />\r
    </div>
}`,...(_=(O=f.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var G,J,H;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(true);
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>\r
        <span>Wi-Fi</span>\r
        <Switch checked={checked} onChange={e => setChecked(e.target.checked)} color="info" name="wifi" />\r
        <span style={{
        color: checked ? '#10b981' : '#6b7280'
      }}>\r
          {checked ? 'Conectado' : 'Desconectado'}\r
        </span>\r
      </div>;
  }
}`,...(H=(J=p.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var L,$,K;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [settings, setSettings] = useState({
      notifications: true,
      autoSave: false,
      darkMode: true,
      soundEffects: false,
      analytics: true
    });
    const updateSetting = key => e => {
      setSettings(prev => ({
        ...prev,
        [key]: e.target.checked
      }));
    };
    return <div style={{
      width: '320px',
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>\r
        <h3 style={{
        margin: '0 0 1.5rem 0'
      }}>Configuración</h3>\r
        \r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>\r
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>\r
            <div>\r
              <div style={{
              fontWeight: '500',
              marginBottom: '0.25rem'
            }}>Notificaciones</div>\r
              <div style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>Recibir alertas y mensajes</div>\r
            </div>\r
            <Switch checked={settings.notifications} onChange={updateSetting('notifications')} color="primary" name="notifications" />\r
          </div>\r
          \r
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>\r
            <div>\r
              <div style={{
              fontWeight: '500',
              marginBottom: '0.25rem'
            }}>Guardado automático</div>\r
              <div style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>Guardar cambios automáticamente</div>\r
            </div>\r
            <Switch checked={settings.autoSave} onChange={updateSetting('autoSave')} color="success" name="autoSave" />\r
          </div>\r
          \r
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>\r
            <div>\r
              <div style={{
              fontWeight: '500',
              marginBottom: '0.25rem'
            }}>Modo oscuro</div>\r
              <div style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>Interfaz con tema oscuro</div>\r
            </div>\r
            <Switch checked={settings.darkMode} onChange={updateSetting('darkMode')} color="secondary" name="darkMode" />\r
          </div>\r
          \r
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>\r
            <div>\r
              <div style={{
              fontWeight: '500',
              marginBottom: '0.25rem'
            }}>Efectos de sonido</div>\r
              <div style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>Reproducir sonidos de la interfaz</div>\r
            </div>\r
            <Switch checked={settings.soundEffects} onChange={updateSetting('soundEffects')} color="warning" name="soundEffects" />\r
          </div>\r
          \r
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>\r
            <div>\r
              <div style={{
              fontWeight: '500',
              marginBottom: '0.25rem'
            }}>Analytics</div>\r
              <div style={{
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>Compartir datos de uso</div>\r
            </div>\r
            <Switch checked={settings.analytics} onChange={updateSetting('analytics')} color="info" name="analytics" />\r
          </div>\r
        </div>\r
        \r
        <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>\r
          <strong>Estado actual:</strong>\r
          <pre style={{
          margin: '0.5rem 0 0 0',
          fontSize: '0.75rem'
        }}>\r
            {JSON.stringify(settings, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  }
}`,...(K=($=y.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      width: '300px'
    }}>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <strong>Preferencias de usuario:</strong>\r
        </div>\r
        \r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>\r
          <Switch label="Recibir emails promocionales" name="marketingEmails" form={mockForm} color="primary" />\r
          <Switch label="Notificaciones push" name="pushNotifications" form={mockForm} color="info" defaultChecked={true} />\r
          <Switch label="Compartir perfil público" name="publicProfile" form={mockForm} color="success" />\r
        </div>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Datos del formulario:</strong>\r
          <pre>{JSON.stringify(formData, null, 2)}</pre>\r
        </div>\r
      </div>;
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const de=["Default","WithColor","Sizes","Colors","Disabled","WithoutLabel","SettingsPanel","WithReactHookForm"];export{u as Colors,m as Default,f as Disabled,y as SettingsPanel,h as Sizes,g as WithColor,v as WithReactHookForm,p as WithoutLabel,de as __namedExportsOrder,ce as default};
