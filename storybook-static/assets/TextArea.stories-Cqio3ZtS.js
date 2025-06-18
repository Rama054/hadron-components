import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BZISi7jw.js";import{P as t}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";const o=u.forwardRef(({label:n,placeholder:a,helpText:l,errorText:r,id:d,name:i,color:m="primary",size:z="md",radius:s="md",resize:F="vertical",disabled:p=!1,required:R=!1,rows:fe=4,maxLength:c,showCharacterCount:ve=!1,className:V,form:Ce,...E},be)=>{const k=d||`textarea-${i||Math.random().toString(36).substr(2,9)}`;let y="q-textarea-container";V&&(y+=` ${V}`),r&&(y+=" q-textarea-error"),p&&(y+=" q-textarea-disabled");const A=E.value?String(E.value).length:0,ye=c&&A>=c*.8,je=c&&A>c;return e.jsxs("div",{className:y,children:[n&&e.jsxs("label",{htmlFor:k,className:"q-textarea-label",children:[n,R&&e.jsx("span",{className:"q-textarea-required",children:"*"})]}),e.jsxs("div",{className:"q-textarea-wrapper","data-color":m,"data-size":z,"data-radius":s,"data-resize":F,children:[e.jsx("textarea",{ref:be,id:k,name:i,placeholder:a,disabled:p,required:R,rows:fe,maxLength:c,className:"q-textarea",...E}),ve&&c&&e.jsxs("div",{className:`q-textarea-counter ${je?"over-limit":ye?"near-limit":""}`,children:[A," / ",c]})]}),(l||r)&&e.jsxs("div",{className:"q-textarea-help-container",children:[l&&!r&&e.jsx("small",{className:"q-textarea-help-text",children:l}),r&&e.jsx("small",{className:"q-textarea-error-text",children:r})]})]})});o.displayName="TextArea";o.propTypes={label:t.string,placeholder:t.string,helpText:t.string,errorText:t.string,id:t.string,name:t.string,color:t.string,size:t.oneOf(["sm","md","lg"]),radius:t.oneOf(["none","sm","md","lg","full"]),resize:t.oneOf(["none","vertical","horizontal","both"]),disabled:t.bool,required:t.bool,rows:t.number,maxLength:t.number,showCharacterCount:t.bool,className:t.string,form:t.object};o.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{color:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},radius:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'full'",computed:!1}]},required:!1},resize:{defaultValue:{value:"'vertical'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'vertical'",computed:!1},{value:"'horizontal'",computed:!1},{value:"'both'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},rows:{defaultValue:{value:"4",computed:!1},description:"",type:{name:"number"},required:!1},showCharacterCount:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},helpText:{description:"",type:{name:"string"},required:!1},errorText:{description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},maxLength:{description:"",type:{name:"number"},required:!1},className:{description:"",type:{name:"string"},required:!1},form:{description:"",type:{name:"object"},required:!1}}};const qe={title:"Components/TextArea",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","danger","info"]},size:{control:"select",options:["sm","md","lg"]},radius:{control:"select",options:["none","sm","md","lg","full"]},resize:{control:"select",options:["none","vertical","horizontal","both"]}}},b=n=>{const[a,l]=u.useState("");return e.jsxs("div",{style:{width:"400px"},children:[e.jsx(o,{...n,value:a,onChange:r=>l(r.target.value)}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Caracteres escritos:"})," ",a.length]})]})},g=b.bind({});g.args={label:"Comentarios",placeholder:"Escribe tus comentarios aquí...",name:"comments"};const h=b.bind({});h.args={label:"Descripción del proyecto",placeholder:"Describe tu proyecto...",helpText:"Proporciona una descripción detallada de tu proyecto",name:"description"};const x=b.bind({});x.args={label:"Mensaje",placeholder:"Tu mensaje...",errorText:"Este campo es obligatorio",name:"message"};const f=b.bind({});f.args={label:"Feedback",placeholder:"Tu feedback es importante...",required:!0,name:"feedback"};const v=b.bind({});v.args={label:"Campo deshabilitado",placeholder:"No puedes escribir aquí",disabled:!0,value:"Contenido predefinido",name:"disabled"};const j={render:n=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(o,{size:"sm",label:"Tamaño pequeño",placeholder:"TextArea pequeño...",name:"small"}),e.jsx(o,{size:"md",label:"Tamaño mediano",placeholder:"TextArea mediano...",name:"medium"}),e.jsx(o,{size:"lg",label:"Tamaño grande",placeholder:"TextArea grande...",name:"large"})]})},C={render:n=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(o,{color:"primary",label:"Primary",placeholder:"Color primary...",name:"primary"}),e.jsx(o,{color:"success",label:"Success",placeholder:"Color success...",name:"success"}),e.jsx(o,{color:"warning",label:"Warning",placeholder:"Color warning...",name:"warning"}),e.jsx(o,{color:"danger",label:"Danger",placeholder:"Color danger...",name:"danger"})]})},T={render:n=>e.jsxs("div",{style:{width:"500px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[e.jsx(o,{resize:"none",label:"Sin redimensión",placeholder:"No se puede redimensionar...",name:"none"}),e.jsx(o,{resize:"vertical",label:"Vertical",placeholder:"Solo vertical...",name:"vertical"}),e.jsx(o,{resize:"horizontal",label:"Horizontal",placeholder:"Solo horizontal...",name:"horizontal"}),e.jsx(o,{resize:"both",label:"Ambas direcciones",placeholder:"Ambas direcciones...",name:"both"})]})},w={render:n=>{const[a,l]=u.useState("");return e.jsx("div",{style:{width:"400px"},children:e.jsx(o,{label:"Post en redes sociales",placeholder:"¿Qué está pasando?",value:a,onChange:r=>l(r.target.value),maxLength:280,showCharacterCount:!0,helpText:"Máximo 280 caracteres",name:"social-post"})})}},S={render:n=>{const[a,l]=u.useState({title:"",summary:"",content:"",tags:""}),r=d=>i=>{l(m=>({...m,[d]:i.target.value}))};return e.jsxs("div",{style:{width:"600px"},children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h3",{children:"Crear nuevo artículo"}),e.jsx("p",{children:"Completa todos los campos para publicar tu artículo"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("input",{type:"text",placeholder:"Título del artículo",value:a.title,onChange:r("title"),style:{padding:"0.75rem",borderRadius:"8px",border:"1px solid #ccc",fontSize:"1.1rem"}}),e.jsx(o,{label:"Resumen",placeholder:"Escribe un breve resumen...",value:a.summary,onChange:r("summary"),rows:3,maxLength:200,showCharacterCount:!0,helpText:"Resumen que aparecerá en la vista previa",name:"summary"}),e.jsx(o,{label:"Contenido principal",placeholder:"Escribe el contenido completo del artículo...",value:a.content,onChange:r("content"),rows:8,helpText:"Contenido detallado del artículo",name:"content"}),e.jsx(o,{label:"Tags",placeholder:"Etiquetas separadas por comas...",value:a.tags,onChange:r("tags"),rows:2,helpText:"Ejemplo: javascript, react, tutorial",name:"tags"})]}),e.jsxs("div",{style:{marginTop:"1.5rem",padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx("strong",{children:"Vista previa del formulario:"}),e.jsx("pre",{style:{fontSize:"0.75rem",marginTop:"0.5rem",overflow:"auto"},children:JSON.stringify(a,null,2)})]})]})}},D={render:n=>{const[a,l]=u.useState({name:"",email:"",subject:"",message:""}),[r,d]=u.useState({}),i=s=>F=>{l(p=>({...p,[s]:F.target.value})),r[s]&&d(p=>({...p,[s]:""}))},m=()=>{const s={};return a.name.trim()||(s.name="El nombre es obligatorio"),a.email.trim()||(s.email="El email es obligatorio"),a.message.trim()||(s.message="El mensaje es obligatorio"),a.message.length<10&&(s.message="El mensaje debe tener al menos 10 caracteres"),d(s),Object.keys(s).length===0},z=s=>{s.preventDefault(),m()&&alert("Formulario enviado correctamente!")};return e.jsxs("div",{style:{width:"500px"},children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h3",{children:"Contacto"}),e.jsx("p",{children:"Envíanos tu mensaje y te responderemos pronto"})]}),e.jsxs("form",{onSubmit:z,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Tu nombre",value:a.name,onChange:i("name"),style:{width:"100%",padding:"0.75rem",borderRadius:"8px",border:`1px solid ${r.name?"#ef4444":"#ccc"}`,outline:"none"}}),r.name&&e.jsx("small",{style:{color:"#ef4444"},children:r.name})]}),e.jsxs("div",{children:[e.jsx("input",{type:"email",placeholder:"Tu email",value:a.email,onChange:i("email"),style:{width:"100%",padding:"0.75rem",borderRadius:"8px",border:`1px solid ${r.email?"#ef4444":"#ccc"}`,outline:"none"}}),r.email&&e.jsx("small",{style:{color:"#ef4444"},children:r.email})]}),e.jsx("input",{type:"text",placeholder:"Asunto (opcional)",value:a.subject,onChange:i("subject"),style:{padding:"0.75rem",borderRadius:"8px",border:"1px solid #ccc",outline:"none"}}),e.jsx(o,{label:"Mensaje",placeholder:"Escribe tu mensaje aquí...",value:a.message,onChange:i("message"),errorText:r.message,required:!0,rows:6,maxLength:1e3,showCharacterCount:!0,name:"message"}),e.jsx("button",{type:"submit",style:{padding:"0.75rem 1.5rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"1rem",fontWeight:"500"},children:"Enviar mensaje"})]})]})}},q={render:n=>{const[a,l]=u.useState({}),r={register:d=>({name:d,onChange:i=>l(m=>({...m,[d]:i.target.value})),onBlur:()=>{},ref:()=>{}})};return e.jsxs("div",{style:{width:"400px"},children:[e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx("strong",{children:"Formulario con React Hook Form:"})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(o,{...r.register("review"),label:"Reseña del producto",placeholder:"Comparte tu experiencia...",helpText:"Tu opinión nos ayuda a mejorar",rows:5}),e.jsx(o,{...r.register("suggestions"),label:"Sugerencias",placeholder:"¿Qué podríamos mejorar?",rows:3})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Datos del formulario:"}),e.jsx("pre",{style:{fontSize:"0.75rem",marginTop:"0.5rem"},children:JSON.stringify(a,null,2)})]})]})}};var N,O,W;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <div style={{
    width: '400px'
  }}>\r
      <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Caracteres escritos:</strong> {value.length}\r
      </div>\r
    </div>;
}`,...(W=(O=g.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var B,H,P;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <div style={{
    width: '400px'
  }}>\r
      <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Caracteres escritos:</strong> {value.length}\r
      </div>\r
    </div>;
}`,...(P=(H=h.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var $,L,M;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <div style={{
    width: '400px'
  }}>\r
      <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Caracteres escritos:</strong> {value.length}\r
      </div>\r
    </div>;
}`,...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var _,J,Q;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <div style={{
    width: '400px'
  }}>\r
      <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Caracteres escritos:</strong> {value.length}\r
      </div>\r
    </div>;
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var I,G,K;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  return <div style={{
    width: '400px'
  }}>\r
      <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Caracteres escritos:</strong> {value.length}\r
      </div>\r
    </div>;
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var U,X,Y;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>\r
      <TextArea size="sm" label="Tamaño pequeño" placeholder="TextArea pequeño..." name="small" />\r
      \r
      <TextArea size="md" label="Tamaño mediano" placeholder="TextArea mediano..." name="medium" />\r
      \r
      <TextArea size="lg" label="Tamaño grande" placeholder="TextArea grande..." name="large" />\r
    </div>
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>\r
      <TextArea color="primary" label="Primary" placeholder="Color primary..." name="primary" />\r
      \r
      <TextArea color="success" label="Success" placeholder="Color success..." name="success" />\r
      \r
      <TextArea color="warning" label="Warning" placeholder="Color warning..." name="warning" />\r
      \r
      <TextArea color="danger" label="Danger" placeholder="Color danger..." name="danger" />\r
    </div>
}`,...(re=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,te;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '500px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  }}>\r
      <TextArea resize="none" label="Sin redimensión" placeholder="No se puede redimensionar..." name="none" />\r
      \r
      <TextArea resize="vertical" label="Vertical" placeholder="Solo vertical..." name="vertical" />\r
      \r
      <TextArea resize="horizontal" label="Horizontal" placeholder="Solo horizontal..." name="horizontal" />\r
      \r
      <TextArea resize="both" label="Ambas direcciones" placeholder="Ambas direcciones..." name="both" />\r
    </div>
}`,...(te=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var se,le,ne;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      width: '400px'
    }}>\r
        <TextArea label="Post en redes sociales" placeholder="¿Qué está pasando?" value={value} onChange={e => setValue(e.target.value)} maxLength={280} showCharacterCount helpText="Máximo 280 caracteres" name="social-post" />\r
      </div>;
  }
}`,...(ne=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,de,me;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = useState({
      title: '',
      summary: '',
      content: '',
      tags: ''
    });
    const updateField = field => e => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    return <div style={{
      width: '600px'
    }}>\r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h3>Crear nuevo artículo</h3>\r
          <p>Completa todos los campos para publicar tu artículo</p>\r
        </div>\r
        \r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>\r
          <input type="text" placeholder="Título del artículo" value={formData.title} onChange={updateField('title')} style={{
          padding: '0.75rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1.1rem'
        }} />\r
          \r
          <TextArea label="Resumen" placeholder="Escribe un breve resumen..." value={formData.summary} onChange={updateField('summary')} rows={3} maxLength={200} showCharacterCount helpText="Resumen que aparecerá en la vista previa" name="summary" />\r
          \r
          <TextArea label="Contenido principal" placeholder="Escribe el contenido completo del artículo..." value={formData.content} onChange={updateField('content')} rows={8} helpText="Contenido detallado del artículo" name="content" />\r
          \r
          <TextArea label="Tags" placeholder="Etiquetas separadas por comas..." value={formData.tags} onChange={updateField('tags')} rows={2} helpText="Ejemplo: javascript, react, tutorial" name="tags" />\r
        </div>\r
        \r
        <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>\r
          <strong>Vista previa del formulario:</strong>\r
          <pre style={{
          fontSize: '0.75rem',
          marginTop: '0.5rem',
          overflow: 'auto'
        }}>\r
            {JSON.stringify(formData, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  }
}`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,ue,pe;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [errors, setErrors] = useState({});
    const updateField = field => e => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
      if (errors[field]) {
        setErrors(prev => ({
          ...prev,
          [field]: ''
        }));
      }
    };
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
      if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
      if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';
      if (formData.message.length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = e => {
      e.preventDefault();
      if (validateForm()) {
        alert('Formulario enviado correctamente!');
      }
    };
    return <div style={{
      width: '500px'
    }}>\r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h3>Contacto</h3>\r
          <p>Envíanos tu mensaje y te responderemos pronto</p>\r
        </div>\r
        \r
        <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>\r
          <div>\r
            <input type="text" placeholder="Tu nombre" value={formData.name} onChange={updateField('name')} style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: \`1px solid \${errors.name ? '#ef4444' : '#ccc'}\`,
            outline: 'none'
          }} />\r
            {errors.name && <small style={{
            color: '#ef4444'
          }}>{errors.name}</small>}\r
          </div>\r
          \r
          <div>\r
            <input type="email" placeholder="Tu email" value={formData.email} onChange={updateField('email')} style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: \`1px solid \${errors.email ? '#ef4444' : '#ccc'}\`,
            outline: 'none'
          }} />\r
            {errors.email && <small style={{
            color: '#ef4444'
          }}>{errors.email}</small>}\r
          </div>\r
          \r
          <input type="text" placeholder="Asunto (opcional)" value={formData.subject} onChange={updateField('subject')} style={{
          padding: '0.75rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          outline: 'none'
        }} />\r
          \r
          <TextArea label="Mensaje" placeholder="Escribe tu mensaje aquí..." value={formData.message} onChange={updateField('message')} errorText={errors.message} required rows={6} maxLength={1000} showCharacterCount name="message" />\r
          \r
          <button type="submit" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500'
        }}>\r
            Enviar mensaje\r
          </button>\r
        </form>\r
      </div>;
  }
}`,...(pe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,he,xe;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = useState({});
    const mockForm = {
      register: name => ({
        name,
        onChange: e => setFormData(prev => ({
          ...prev,
          [name]: e.target.value
        })),
        onBlur: () => {},
        ref: () => {}
      })
    };
    return <div style={{
      width: '400px'
    }}>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <strong>Formulario con React Hook Form:</strong>\r
        </div>\r
        \r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>\r
          <TextArea {...mockForm.register('review')} label="Reseña del producto" placeholder="Comparte tu experiencia..." helpText="Tu opinión nos ayuda a mejorar" rows={5} />\r
          \r
          <TextArea {...mockForm.register('suggestions')} label="Sugerencias" placeholder="¿Qué podríamos mejorar?" rows={3} />\r
        </div>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Datos del formulario:</strong>\r
          <pre style={{
          fontSize: '0.75rem',
          marginTop: '0.5rem'
        }}>\r
            {JSON.stringify(formData, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  }
}`,...(xe=(he=q.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};const ze=["Default","WithHelp","WithError","Required","Disabled","Sizes","Colors","ResizeOptions","WithCharacterCount","LongForm","ContactForm","WithReactHookForm"];export{C as Colors,D as ContactForm,g as Default,v as Disabled,S as LongForm,f as Required,T as ResizeOptions,j as Sizes,w as WithCharacterCount,x as WithError,h as WithHelp,q as WithReactHookForm,ze as __namedExportsOrder,qe as default};
