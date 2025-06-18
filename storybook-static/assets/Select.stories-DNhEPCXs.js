import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BZISi7jw.js";import{P as s}from"./index-Co38GRlK.js";import{l as Ie,m as Pe}from"./index-I48yvNyK.js";import{C as Me}from"./Checkbox-DI5489kg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";const We=({options:r,filter:l,onFilterChange:t,template:d,selectedValue:n,onChange:f,color:i,shouldResetFilter:m,multiple:k})=>{const[S,V]=u.useState(""),A=g=>{const v=g.target.value;V(v),t(v)};u.useEffect(()=>{m&&V("")},[m]);const C=g=>k?Array.isArray(n)&&n.some(v=>v.value===g.value):(n==null?void 0:n.value)===g.value;return e.jsxs("div",{className:"q-select-dropdown",children:[l&&e.jsx("div",{className:"q-select-filter-container",children:e.jsx("input",{type:"text",className:"q-select-filter-input",placeholder:"Buscar...",value:S,onChange:A})}),e.jsx("div",{className:"q-select-options",children:r.length>0?r.map((g,v)=>e.jsxs("div",{className:`q-select-option ${C(g)?"selected":""}`,onClick:()=>f(g),role:"option","aria-selected":C(g),children:[k&&e.jsx("div",{className:"q-select-checkbox-wrapper",onClick:T=>T.stopPropagation(),children:e.jsx(Me,{checked:C(g),onChange:()=>f(g),size:"sm",color:i})}),e.jsx("span",{className:"q-select-option-label",children:d?d(g):g.label})]},v)):e.jsx("div",{className:"q-select-option disabled",children:"No hay resultados"})})]})};function x({options:r=[],label:l,template:t,radius:d="md",color:n="primary",size:f="md",name:i,form:m,filter:k=!1,multiple:S=!1,disabled:V=!1,placeholder:A="Seleccionar...",defaultValue:C,className:g,...v}){const T=u.useRef(null),[R,B]=u.useState(!1),[c,L]=u.useState(()=>S?Array.isArray(C)?C.map(a=>r.find(p=>p.value===a)).filter(Boolean):[]:C&&r.find(a=>a.value===C)||null),[Ne,H]=u.useState(r),[we,ze]=u.useState(0),U=m?m.register(i):{},ke=a=>{if(S){const p=Array.isArray(c)?c:[],h=p.some(y=>y.value===a.value);let o;if(h?o=p.filter(y=>y.value!==a.value):o=[...p,a],L(o),m){const y=o.map(j=>j.value);m.setValue(i,y),m.trigger(i)}if(v.onChange){const y=o.map(j=>j.value);v.onChange(y)}}else B(!1),L(a),m&&(m.setValue(i,a.value),m.trigger(i)),v.onChange&&v.onChange(a.value)},Ae=(a,p)=>{if(p.stopPropagation(),S&&Array.isArray(c)){const h=c.filter(o=>o.value!==a.value);if(L(h),m){const o=h.map(y=>y.value);m.setValue(i,o),m.trigger(i)}if(v.onChange){const o=h.map(y=>y.value);v.onChange(o)}}},Re=()=>{if(!S||!Array.isArray(c)||c.length===0)return null;const a=2,p=c.slice(0,a),h=c.length-a;return e.jsxs("div",{className:"q-select-chips",children:[p.map((o,y)=>e.jsxs("div",{className:"q-select-chip",children:[e.jsx("span",{className:"q-select-chip-label",children:t?t(o):o.label}),e.jsx("button",{type:"button",className:"q-select-chip-remove",onClick:j=>Ae(o,j),"aria-label":`Eliminar ${o.label}`,children:e.jsx(Pe,{size:14})})]},y)),h>0&&e.jsxs("div",{className:"q-select-chip q-select-chip-more",children:["+",h]})]})},_=a=>a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),Fe=a=>{const p=_(a),h=r.filter(o=>_(o.label).split(" ").some(j=>j.startsWith(p)));H(h)},$=()=>{B(!1),H(r),ze(a=>a+1)},De=()=>{V||B(!R)},Oe=()=>S?(Array.isArray(c)?c:[]).length===0?e.jsx("span",{className:"q-select-placeholder-text",children:A}):e.jsx("div",{className:"q-select-selected-container",children:Re()}):c?e.jsx("span",{className:"q-select-placeholder-text",children:t?t(c):c.label}):e.jsx("span",{className:"q-select-placeholder-text",children:A}),Ee=()=>{if(S){const a=Array.isArray(c)?c:[];return JSON.stringify(a.map(p=>p.value))}else return(c==null?void 0:c.value)||""};u.useEffect(()=>{H(r)},[r]),u.useEffect(()=>{const a=h=>{const o=document.querySelector(".q-select-dropdown");T.current&&T.current.contains(h.target)||o&&!o.contains(h.target)&&$()},p=h=>{h.key==="Escape"&&$()};return document.addEventListener("mousedown",a),document.addEventListener("keydown",p),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",p)}},[]);let J="q-select-root";return g&&(J+=` ${g}`),V&&(J+=" q-select-disabled"),console.log(R),e.jsxs("div",{className:J,ref:T,"data-radius":d,"data-color":n,"data-size":f,...v,children:[l&&e.jsx("label",{htmlFor:i,className:"q-select-label",children:l}),e.jsxs("button",{type:"button",className:"q-select-trigger",onClick:De,disabled:V,"aria-expanded":R,"aria-haspopup":"listbox",children:[e.jsx("div",{className:"q-select-placeholder",children:Oe()}),e.jsx(Ie,{size:20})]}),e.jsx("input",{type:"hidden",name:i,ref:U.ref,value:Ee(),...U}),R&&e.jsx(We,{selectedValue:c,template:t,options:Ne,filter:k,onFilterChange:Fe,onChange:ke,color:n,shouldResetFilter:we,multiple:S})]})}x.propTypes={options:s.arrayOf(s.shape({value:s.oneOfType([s.string,s.number]).isRequired,label:s.string.isRequired})).isRequired,label:s.string,template:s.func,radius:s.oneOf(["none","sm","md","lg","full"]),color:s.string,size:s.oneOf(["sm","md","lg"]),name:s.string,form:s.object,filter:s.bool,multiple:s.bool,disabled:s.bool,placeholder:s.string,defaultValue:s.oneOfType([s.string,s.number,s.arrayOf(s.oneOfType([s.string,s.number]))]),className:s.string,onChange:s.func};x.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0}}}},required:!1},radius:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'full'",computed:!1}]},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},filter:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},multiple:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'"Seleccionar..."',computed:!1},description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1},template:{description:"",type:{name:"func"},required:!1},name:{description:"",type:{name:"string"},required:!1},form:{description:"",type:{name:"object"},required:!1},defaultValue:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"},{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"number"}]}}]},required:!1},className:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1}}};const Ke={title:"Components/Select",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","danger","info"]},radius:{control:"select",options:["none","sm","md","lg","full"]},size:{control:"select",options:["sm","md","lg"]},multiple:{control:"boolean",description:"Permite seleccionar múltiples opciones"}}},b=[{value:"us",label:"Estados Unidos"},{value:"ca",label:"Canadá"},{value:"mx",label:"México"},{value:"ar",label:"Argentina"},{value:"br",label:"Brasil"},{value:"cl",label:"Chile"},{value:"co",label:"Colombia"},{value:"pe",label:"Perú"},{value:"uy",label:"Uruguay"},{value:"py",label:"Paraguay"}],W=r=>{const[l,t]=u.useState(""),d=n=>{console.log("Template onChange:",n),t(n)};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(x,{...r,options:b,onChange:d}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Valor seleccionado:"})," ",String(l)||"Ninguno"]})]})},q=W.bind({});q.args={label:"Selecciona un país",placeholder:"Elige una opción...",name:"country"};const N=W.bind({});N.args={label:"País de origen",placeholder:"Seleccionar...",color:"success",name:"country"};const w=W.bind({});w.args={label:"Buscar país",placeholder:"Escribe para buscar...",filter:!0,color:"info",name:"country"};const F={render:r=>{const[l,t]=u.useState(""),[d,n]=u.useState("Componente cargado"),f=i=>{console.log("Select onChange triggered with:",i),t(i),n(`Seleccionado: ${i}`)};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx("h4",{children:"Test del filtro"}),e.jsx(x,{...r,options:b,onChange:f,filter:!0}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Debug:"})," ",String(d)||"Ninguna selección"]}),e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#666"},children:"Instrucciones: Abre el select y escribe en el campo de filtro para buscar países."}),e.jsxs("div",{style:{marginTop:"0.5rem",fontSize:"0.75rem",color:"#999"},children:["Países disponibles: ",b.length]})]})},args:{label:"Test del filtro",placeholder:"Selecciona y filtra...",name:"filterTest"}},D={render:r=>{const[l,t]=u.useState([]),d=n=>{console.log("Multiple onChange:",n),t(n)};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(x,{...r,options:b,onChange:d,multiple:!0}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Valores seleccionados:"}),e.jsx("div",{style:{fontSize:"0.875rem",marginTop:"0.25rem"},children:Array.isArray(l)&&l.length>0?l.join(", "):"Ninguno"})]})]})},args:{label:"Selecciona múltiples países",placeholder:"Elige varios países...",name:"countries"}},O={render:r=>{const[l,t]=u.useState([]),d=n=>{t(n)};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(x,{...r,options:b,onChange:d,multiple:!0,filter:!0}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsxs("strong",{children:["Países seleccionados (",Array.isArray(l)?l.length:0,"):"]}),e.jsx("div",{style:{fontSize:"0.875rem",marginTop:"0.25rem",maxHeight:"100px",overflowY:"auto"},children:Array.isArray(l)&&l.length>0?l.map((n,f)=>{var i;return e.jsxs("div",{style:{padding:"2px 0"},children:["• ",((i=b.find(m=>m.value===n))==null?void 0:i.label)||n]},f)}):e.jsx("div",{children:"No hay países seleccionados"})})]})]})},args:{label:"Buscar y seleccionar múltiples",placeholder:"Busca y selecciona países...",color:"success",name:"multipleCountries"}},E={render:r=>{const[l,t]=u.useState(["ar","br","mx"]),d=n=>{t(n)};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(x,{...r,options:b,onChange:d,multiple:!0,defaultValue:["ar","br","mx"]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Estado actual:"}),e.jsx("pre",{style:{fontSize:"0.75rem",margin:"0.5rem 0 0 0",overflow:"auto"},children:JSON.stringify(l,null,2)})]})]})},args:{label:"Con valores predeterminados",placeholder:"Valores por defecto...",color:"warning",name:"defaultMultiple"}},z=W.bind({});z.args={label:"Campo deshabilitado",placeholder:"No disponible",disabled:!0,name:"country"};const I={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(x,{...r,size:"sm",label:"Tamaño pequeño",options:b.slice(0,3),name:"country-sm"}),e.jsx(x,{...r,size:"md",label:"Tamaño mediano",options:b.slice(0,3),name:"country-md"}),e.jsx(x,{...r,size:"lg",label:"Tamaño grande",options:b.slice(0,3),name:"country-lg"})]}),args:{color:"primary"}},P={render:r=>{const[l,t]=u.useState(""),d=[{value:"1",label:"Juan Pérez",email:"juan@example.com",avatar:"👨"},{value:"2",label:"María García",email:"maria@example.com",avatar:"👩"},{value:"3",label:"Carlos López",email:"carlos@example.com",avatar:"👨‍💼"},{value:"4",label:"Ana Martínez",email:"ana@example.com",avatar:"👩‍💼"}],n=f=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"1.2em"},children:f.avatar}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"500"},children:f.label}),e.jsx("div",{style:{fontSize:"0.75rem",opacity:.7},children:f.email})]})]});return e.jsxs("div",{style:{width:"350px"},children:[e.jsx(x,{...r,options:d,template:n,onChange:t,filter:!0}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Usuario seleccionado:"})," ",l||"Ninguno"]})]})},args:{label:"Asignar usuario",placeholder:"Buscar usuario...",color:"secondary",name:"assignedUser"}},M={render:r=>{const[l,t]=u.useState({}),d={register:n=>({name:n,onChange:()=>{},onBlur:()=>{},ref:()=>{}}),setValue:(n,f)=>{t(i=>({...i,[n]:f}))},trigger:()=>{}};return e.jsxs("div",{style:{width:"300px"},children:[e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx("strong",{children:"Formulario con React Hook Form:"})}),e.jsx(x,{...r,options:b,form:d}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Datos del formulario:"}),e.jsx("pre",{children:JSON.stringify(l,null,2)})]})]})},args:{label:"País de residencia",placeholder:"Selecciona tu país...",name:"residence",color:"warning"}};var K,G,Y;q.parameters={...q.parameters,docs:{...(K=q.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = value => {
    console.log('Template onChange:', value);
    setSelectedValue(value);
  };
  return <div style={{
    width: '300px'
  }}>\r
      <Select {...args} options={countries} onChange={handleChange} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Valor seleccionado:</strong> {String(selectedValue) || 'Ninguno'}\r
      </div>\r
    </div>;
}`,...(Y=(G=q.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var Q,X,Z;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = value => {
    console.log('Template onChange:', value);
    setSelectedValue(value);
  };
  return <div style={{
    width: '300px'
  }}>\r
      <Select {...args} options={countries} onChange={handleChange} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Valor seleccionado:</strong> {String(selectedValue) || 'Ninguno'}\r
      </div>\r
    </div>;
}`,...(Z=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = value => {
    console.log('Template onChange:', value);
    setSelectedValue(value);
  };
  return <div style={{
    width: '300px'
  }}>\r
      <Select {...args} options={countries} onChange={handleChange} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Valor seleccionado:</strong> {String(selectedValue) || 'Ninguno'}\r
      </div>\r
    </div>;
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,se,le;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState('');
    const [debugInfo, setDebugInfo] = useState('Componente cargado');
    const handleChange = value => {
      console.log('Select onChange triggered with:', value);
      setSelectedValue(value);
      setDebugInfo(\`Seleccionado: \${value}\`);
    };
    return <div style={{
      width: '300px'
    }}>\r
        <h4>Test del filtro</h4>\r
        <Select {...args} options={countries} onChange={handleChange} filter={true} />\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Debug:</strong> {String(debugInfo) || 'Ninguna selección'}\r
        </div>\r
        \r
        <div style={{
        marginTop: '0.5rem',
        fontSize: '0.75rem',
        color: '#666'
      }}>\r
          Instrucciones: Abre el select y escribe en el campo de filtro para buscar países.\r
        </div>\r
        \r
        <div style={{
        marginTop: '0.5rem',
        fontSize: '0.75rem',
        color: '#999'
      }}>\r
          Países disponibles: {countries.length}\r
        </div>\r
      </div>;
  },
  args: {
    label: 'Test del filtro',
    placeholder: 'Selecciona y filtra...',
    name: 'filterTest'
  }
}`,...(le=(se=F.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var te,oe,ie;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState([]);
    const handleChange = values => {
      console.log('Multiple onChange:', values);
      setSelectedValues(values);
    };
    return <div style={{
      width: '300px'
    }}>\r
        <Select {...args} options={countries} onChange={handleChange} multiple={true} />\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Valores seleccionados:</strong>\r
          <div style={{
          fontSize: '0.875rem',
          marginTop: '0.25rem'
        }}>\r
            {Array.isArray(selectedValues) && selectedValues.length > 0 ? selectedValues.join(', ') : 'Ninguno'}\r
          </div>\r
        </div>\r
      </div>;
  },
  args: {
    label: 'Selecciona múltiples países',
    placeholder: 'Elige varios países...',
    name: 'countries'
  }
}`,...(ie=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,de,ue;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState([]);
    const handleChange = values => {
      setSelectedValues(values);
    };
    return <div style={{
      width: '300px'
    }}>\r
        <Select {...args} options={countries} onChange={handleChange} multiple={true} filter={true} />\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Países seleccionados ({Array.isArray(selectedValues) ? selectedValues.length : 0}):</strong>\r
          <div style={{
          fontSize: '0.875rem',
          marginTop: '0.25rem',
          maxHeight: '100px',
          overflowY: 'auto'
        }}>\r
            {Array.isArray(selectedValues) && selectedValues.length > 0 ? selectedValues.map((value, index) => <div key={index} style={{
            padding: '2px 0'
          }}>\r
                    • {countries.find(c => c.value === value)?.label || value}\r
                  </div>) : <div>No hay países seleccionados</div>}\r
          </div>\r
        </div>\r
      </div>;
  },
  args: {
    label: 'Buscar y seleccionar múltiples',
    placeholder: 'Busca y selecciona países...',
    color: 'success',
    name: 'multipleCountries'
  }
}`,...(ue=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ge;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState(['ar', 'br', 'mx']);
    const handleChange = values => {
      setSelectedValues(values);
    };
    return <div style={{
      width: '300px'
    }}>\r
        <Select {...args} options={countries} onChange={handleChange} multiple={true} defaultValue={['ar', 'br', 'mx']} />\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Estado actual:</strong>\r
          <pre style={{
          fontSize: '0.75rem',
          margin: '0.5rem 0 0 0',
          overflow: 'auto'
        }}>\r
            {JSON.stringify(selectedValues, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  },
  args: {
    label: 'Con valores predeterminados',
    placeholder: 'Valores por defecto...',
    color: 'warning',
    name: 'defaultMultiple'
  }
}`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,fe,ve;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = value => {
    console.log('Template onChange:', value);
    setSelectedValue(value);
  };
  return <div style={{
    width: '300px'
  }}>\r
      <Select {...args} options={countries} onChange={handleChange} />\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Valor seleccionado:</strong> {String(selectedValue) || 'Ninguno'}\r
      </div>\r
    </div>;
}`,...(ve=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ye,xe,be;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Select {...args} size="sm" label="Tamaño pequeño" options={countries.slice(0, 3)} name="country-sm" />\r
      <Select {...args} size="md" label="Tamaño mediano" options={countries.slice(0, 3)} name="country-md" />\r
      <Select {...args} size="lg" label="Tamaño grande" options={countries.slice(0, 3)} name="country-lg" />\r
    </div>,
  args: {
    color: 'primary'
  }
}`,...(be=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var Se,Ce,je;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState('');
    const users = [{
      value: '1',
      label: 'Juan Pérez',
      email: 'juan@example.com',
      avatar: '👨'
    }, {
      value: '2',
      label: 'María García',
      email: 'maria@example.com',
      avatar: '👩'
    }, {
      value: '3',
      label: 'Carlos López',
      email: 'carlos@example.com',
      avatar: '👨‍💼'
    }, {
      value: '4',
      label: 'Ana Martínez',
      email: 'ana@example.com',
      avatar: '👩‍💼'
    }];
    const userTemplate = user => <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>\r
        <span style={{
        fontSize: '1.2em'
      }}>{user.avatar}</span>\r
        <div>\r
          <div style={{
          fontWeight: '500'
        }}>{user.label}</div>\r
          <div style={{
          fontSize: '0.75rem',
          opacity: 0.7
        }}>{user.email}</div>\r
        </div>\r
      </div>;
    return <div style={{
      width: '350px'
    }}>\r
        <Select {...args} options={users} template={userTemplate} onChange={setSelectedValue} filter />\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Usuario seleccionado:</strong> {selectedValue || 'Ninguno'}\r
        </div>\r
      </div>;
  },
  args: {
    label: 'Asignar usuario',
    placeholder: 'Buscar usuario...',
    color: 'secondary',
    name: 'assignedUser'
  }
}`,...(je=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Ve,Te,qe;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: args => {
    const [formData, setFormData] = useState({});
    const mockForm = {
      register: name => ({
        name,
        onChange: () => {},
        onBlur: () => {},
        ref: () => {}
      }),
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
          <strong>Formulario con React Hook Form:</strong>\r
        </div>\r
        \r
        <Select {...args} options={countries} form={mockForm} />\r
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
  },
  args: {
    label: 'País de residencia',
    placeholder: 'Selecciona tu país...',
    name: 'residence',
    color: 'warning'
  }
}`,...(qe=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};const Ge=["Default","WithColor","WithFilter","FilterTest","Multiple","MultipleWithFilter","MultipleWithDefaultValues","Disabled","Sizes","WithTemplate","WithReactHookForm"];export{q as Default,z as Disabled,F as FilterTest,D as Multiple,E as MultipleWithDefaultValues,O as MultipleWithFilter,I as Sizes,N as WithColor,w as WithFilter,M as WithReactHookForm,P as WithTemplate,Ge as __namedExportsOrder,Ke as default};
