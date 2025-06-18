import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BZISi7jw.js";import{d as Pe}from"./index-KKouTENB.js";import{P as s}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";function p({value:r=[],onChange:i,onAdd:a,onRemove:o,label:n,placeholder:h="Escribe y presiona Enter...",disabled:u=!1,error:f=!1,helpText:O,chipColor:Ce="primary",chipVariant:be="solid",chipRadius:xe="md",maxChips:j,allowDuplicates:ye=!1,separator:m="enter",trimValues:Se=!0,validateChip:w,className:P,name:De,id:Ee,"aria-label":Te,"aria-describedby":Ve,...je}){const[Re,k]=l.useState(""),[d,I]=l.useState(r||[]),[Ne,A]=l.useState(!1),$=l.useRef(null);l.useEffect(()=>{JSON.stringify(r)!==JSON.stringify(d)&&I(r||[])},[r]),l.useEffect(()=>{i&&JSON.stringify(d)!==JSON.stringify(r)&&i(d)},[d,i]);const v=t=>{const c=Se?t.trim():t;if(!c||!ye&&d.includes(c)||j&&d.length>=j||w&&!w(c))return;const g=[...d,c];I(g),k(""),a&&a(c,g)},F=t=>{if(u)return;const c=d[t],g=d.filter((N,we)=>we!==t);I(g),o&&o(c,g,t)},_e=t=>{const c=t.target.value;switch(t.key){case"Enter":(m==="enter"||m.includes("enter"))&&(t.preventDefault(),v(c));break;case",":(m==="comma"||m.includes("comma"))&&(t.preventDefault(),v(c));break;case"Tab":(m==="tab"||m.includes("tab"))&&c.trim()&&(t.preventDefault(),v(c));break;case"Backspace":!c&&d.length>0&&F(d.length-1);break;case" ":(m==="space"||m.includes("space"))&&(t.preventDefault(),v(c));break}},qe=t=>{A(!1),(m==="blur"||m.includes("blur"))&&t.target.value.trim()&&v(t.target.value)},Oe=t=>{(m==="paste"||m.includes("paste"))&&(t.preventDefault(),t.clipboardData.getData("text").split(/[,\n\t]/).filter(N=>N.trim()).forEach(N=>{v(N)}))},Ie=()=>{!u&&$.current&&$.current.focus()};let C="hadr-chips";u&&(C+=" hadr-chips--disabled"),f&&(C+=" hadr-chips--error"),Ne&&(C+=" hadr-chips--focused"),P&&(C+=` ${P}`);const R=Ee||`chips-${Math.random().toString(36).substr(2,9)}`,W=O?`${R}-help`:void 0,J=f?`${R}-error`:void 0,$e=[Ve,W,J].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:"hadr-chips-wrapper",children:[n&&e.jsx("label",{htmlFor:R,className:"hadr-chips__label",children:n}),e.jsx("div",{className:C,onClick:Ie,"data-testid":"chips-container",children:e.jsxs("div",{className:"hadr-chips__content",children:[d.map((t,c)=>e.jsxs("div",{className:"hadr-chips__chip","data-color":Ce,"data-variant":be,"data-radius":xe,children:[e.jsx("span",{className:"hadr-chips__chip-text",children:t}),!u&&e.jsx("button",{type:"button",className:"hadr-chips__chip-remove",onClick:g=>{g.stopPropagation(),F(c)},"aria-label":`Eliminar ${t}`,tabIndex:-1,children:e.jsx(Pe,{size:20})})]},`${t}-${c}`)),e.jsx("input",{ref:$,type:"text",id:R,name:De,value:Re,onChange:t=>k(t.target.value),onKeyDown:_e,onFocus:()=>A(!0),onBlur:qe,onPaste:Oe,placeholder:d.length===0?h:"",disabled:u||j&&d.length>=j,className:"hadr-chips__input","aria-label":Te,"aria-describedby":$e,"aria-invalid":f,...je})]})}),O&&!f&&e.jsx("div",{id:W,className:"hadr-chips__help-text",children:O}),f&&e.jsx("div",{id:J,className:"hadr-chips__error-text",children:typeof f=="string"?f:"Este campo contiene errores"})]})}p.propTypes={value:s.arrayOf(s.string),onChange:s.func,onAdd:s.func,onRemove:s.func,label:s.string,placeholder:s.string,disabled:s.bool,error:s.oneOfType([s.bool,s.string]),helpText:s.string,chipColor:s.oneOf(["primary","secondary","success","warning","danger","info"]),chipVariant:s.oneOf(["solid","outline","soft","ghost"]),chipRadius:s.oneOf(["none","sm","md","lg","full"]),maxChips:s.number,allowDuplicates:s.bool,separator:s.oneOfType([s.oneOf(["enter","comma","tab","space","blur","paste"]),s.arrayOf(s.oneOf(["enter","comma","tab","space","blur","paste"]))]),trimValues:s.bool,validateChip:s.func,className:s.string,name:s.string,id:s.string,"aria-label":s.string,"aria-describedby":s.string};p.__docgenInfo={description:"",methods:[],displayName:"Chips",props:{value:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},placeholder:{defaultValue:{value:'"Escribe y presiona Enter..."',computed:!1},description:"",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"union",value:[{name:"bool"},{name:"string"}]},required:!1},chipColor:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'danger'",computed:!1},{value:"'info'",computed:!1}]},required:!1},chipVariant:{defaultValue:{value:"'solid'",computed:!1},description:"",type:{name:"enum",value:[{value:"'solid'",computed:!1},{value:"'outline'",computed:!1},{value:"'soft'",computed:!1},{value:"'ghost'",computed:!1}]},required:!1},chipRadius:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'full'",computed:!1}]},required:!1},allowDuplicates:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},separator:{defaultValue:{value:"'enter'",computed:!1},description:"",type:{name:"union",value:[{name:"enum",value:[{value:"'enter'",computed:!1},{value:"'comma'",computed:!1},{value:"'tab'",computed:!1},{value:"'space'",computed:!1},{value:"'blur'",computed:!1},{value:"'paste'",computed:!1}]},{name:"arrayOf",value:{name:"enum",value:[{value:"'enter'",computed:!1},{value:"'comma'",computed:!1},{value:"'tab'",computed:!1},{value:"'space'",computed:!1},{value:"'blur'",computed:!1},{value:"'paste'",computed:!1}]}}]},required:!1},trimValues:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onAdd:{description:"",type:{name:"func"},required:!1},onRemove:{description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!1},helpText:{description:"",type:{name:"string"},required:!1},maxChips:{description:"",type:{name:"number"},required:!1},validateChip:{description:"",type:{name:"func"},required:!1},className:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},"aria-label":{description:"",type:{name:"string"},required:!1},"aria-describedby":{description:"",type:{name:"string"},required:!1}}};const Ue={title:"Components/Chips",component:p,parameters:{layout:"padded"},argTypes:{value:{control:"object",description:"Array de valores iniciales"},label:{control:"text",description:"Etiqueta del campo"},placeholder:{control:"text",description:"Texto de placeholder"},disabled:{control:"boolean",description:"Estado deshabilitado"},error:{control:"text",description:"Estado de error o mensaje"},helpText:{control:"text",description:"Texto de ayuda"},chipColor:{control:"select",options:["primary","secondary","success","warning","danger","info"],description:"Color de los chips"},chipVariant:{control:"select",options:["solid","outline","soft","ghost"],description:"Variante visual de los chips"},chipRadius:{control:"select",options:["none","sm","md","lg","full"],description:"Radio de borde de los chips"},maxChips:{control:"number",description:"Número máximo de chips permitidos"},allowDuplicates:{control:"boolean",description:"Permite valores duplicados"},separator:{control:"select",options:["enter","comma","tab","space","blur","paste"],description:"Tecla o acción que crea un chip"},trimValues:{control:"boolean",description:"Elimina espacios en blanco de los valores"}}},_={args:{label:"Etiquetas",placeholder:"Escribe y presiona Enter...",value:[]}},q={args:{label:"Tecnologías",placeholder:"Agregar tecnología...",value:["React","TypeScript","Sass"],chipColor:"primary"}},b=()=>{const[r,i]=l.useState({primary:["React","Vue"],secondary:["JavaScript","CSS"],success:["Completado","Aprobado"],warning:["Pendiente","Revisar"],danger:["Error","Rechazado"],info:["Info","Nota"]});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.entries(r).map(([a,o])=>e.jsx(p,{label:`Color: ${a}`,value:o,chipColor:a,onChange:n=>i(h=>({...h,[a]:n})),placeholder:`Agregar chip ${a}...`},a))})},x=()=>{const[r,i]=l.useState({solid:["Solid","Chip"],outline:["Outline","Chip"],soft:["Soft","Chip"],ghost:["Ghost","Chip"]});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.entries(r).map(([a,o])=>e.jsx(p,{label:`Variante: ${a}`,value:o,chipVariant:a,chipColor:"primary",onChange:n=>i(h=>({...h,[a]:n})),placeholder:`Agregar chip ${a}...`},a))})},y=()=>{const[r,i]=l.useState({none:["Sin","Radio"],sm:["Radio","Pequeño"],md:["Radio","Mediano"],lg:["Radio","Grande"],full:["Radio","Completo"]});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Object.entries(r).map(([a,o])=>e.jsx(p,{label:`Radio: ${a}`,value:o,chipRadius:a,chipColor:"primary",onChange:n=>i(h=>({...h,[a]:n})),placeholder:`Agregar chip ${a}...`},a))})},S=()=>{const[r,i]=l.useState(["admin@example.com"]),[a,o]=l.useState(["javascript"]),n=u=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u),h=u=>u.length>=3&&/^[a-zA-Z]+$/.test(u);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(p,{label:"Emails (validación de formato)",value:r,onChange:i,validateChip:n,placeholder:"ejemplo@correo.com",helpText:"Solo acepta emails válidos",chipColor:"info"}),e.jsx(p,{label:"Tags (mínimo 3 caracteres, solo letras)",value:a,onChange:o,validateChip:h,placeholder:"javascript, react, vue...",helpText:"Mínimo 3 caracteres, solo letras",chipColor:"success"})]})},D=()=>{const[r,i]=l.useState(["Enter"]),[a,o]=l.useState(["Comma"]),[n,h]=l.useState(["Tab"]),[u,f]=l.useState(["Space"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(p,{label:"Separador: Enter",value:r,onChange:i,separator:"enter",placeholder:"Presiona Enter para crear chip",helpText:"Presiona Enter para agregar"}),e.jsx(p,{label:"Separador: Coma",value:a,onChange:o,separator:"comma",placeholder:"Escribe y usa coma para crear chip",helpText:"Usa coma (,) para agregar"}),e.jsx(p,{label:"Separador: Tab",value:n,onChange:h,separator:"tab",placeholder:"Presiona Tab para crear chip",helpText:"Presiona Tab para agregar"}),e.jsx(p,{label:"Separador: Espacio",value:u,onChange:f,separator:"space",placeholder:"Usa espacio para crear chip",helpText:"Usa espacio para agregar"})]})},E=()=>{const[r,i]=l.useState(["Uno","Dos"]),[a,o]=l.useState(["Único"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(p,{label:"Máximo 5 chips",value:r,onChange:i,maxChips:5,placeholder:"Máximo 5 chips...",helpText:`${r.length}/5 chips usados`,chipColor:"warning"}),e.jsx(p,{label:"Sin duplicados",value:a,onChange:o,allowDuplicates:!1,placeholder:"Sin valores duplicados...",helpText:"No se permiten valores duplicados",chipColor:"secondary"})]})},T=()=>{const[r,i]=l.useState(["Normal"]),[a]=l.useState(["Deshabilitado","Solo lectura"]),[o,n]=l.useState(["Error"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(p,{label:"Estado normal",value:r,onChange:i,placeholder:"Estado normal...",helpText:"Campo en estado normal"}),e.jsx(p,{label:"Estado deshabilitado",value:a,disabled:!0,placeholder:"Campo deshabilitado...",helpText:"Campo deshabilitado"}),e.jsx(p,{label:"Estado de error",value:o,onChange:n,error:"Este campo contiene errores",placeholder:"Campo con error...",chipColor:"danger"})]})},V=()=>{const[r,i]=l.useState({skills:["React","JavaScript"],interests:["Web Development"],tags:[]}),a=o=>{o.preventDefault(),alert(`Datos del formulario:
`+JSON.stringify(r,null,2))};return e.jsxs("form",{onSubmit:a,style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px"},children:[e.jsx("h3",{children:"Formulario con Chips"}),e.jsx(p,{label:"Habilidades técnicas",name:"skills",value:r.skills,onChange:o=>i(n=>({...n,skills:o})),placeholder:"Agregar habilidad...",helpText:"Presiona Enter para agregar cada habilidad",chipColor:"primary"}),e.jsx(p,{label:"Intereses",name:"interests",value:r.interests,onChange:o=>i(n=>({...n,interests:o})),placeholder:"Agregar interés...",chipColor:"secondary",maxChips:10}),e.jsx(p,{label:"Tags opcionales",name:"tags",value:r.tags,onChange:o=>i(n=>({...n,tags:o})),placeholder:"Agregar tag...",chipColor:"info",chipVariant:"outline"}),e.jsx("button",{type:"submit",style:{padding:"10px 20px",marginTop:"10px"},children:"Ver datos del formulario"})]})};b.__docgenInfo={description:"",methods:[],displayName:"DifferentColors"};x.__docgenInfo={description:"",methods:[],displayName:"DifferentVariants"};y.__docgenInfo={description:"",methods:[],displayName:"DifferentRadius"};S.__docgenInfo={description:"",methods:[],displayName:"WithValidation"};D.__docgenInfo={description:"",methods:[],displayName:"DifferentSeparators"};E.__docgenInfo={description:"",methods:[],displayName:"WithLimitations"};T.__docgenInfo={description:"",methods:[],displayName:"States"};V.__docgenInfo={description:"",methods:[],displayName:"FormIntegration"};var M,U,L;_.parameters={..._.parameters,docs:{...(M=_.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Etiquetas",
    placeholder: "Escribe y presiona Enter...",
    value: []
  }
}`,...(L=(U=_.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var z,B,G;q.parameters={...q.parameters,docs:{...(z=q.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Tecnologías",
    placeholder: "Agregar tecnología...",
    value: ['React', 'TypeScript', 'Sass'],
    chipColor: 'primary'
  }
}`,...(G=(B=q.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,K,Z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    primary: ['React', 'Vue'],
    secondary: ['JavaScript', 'CSS'],
    success: ['Completado', 'Aprobado'],
    warning: ['Pendiente', 'Revisar'],
    danger: ['Error', 'Rechazado'],
    info: ['Info', 'Nota']
  });
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            {Object.entries(values).map(([color, chipValues]) => <Chips key={color} label={\`Color: \${color}\`} value={chipValues} chipColor={color} onChange={newValues => setValues(prev => ({
      ...prev,
      [color]: newValues
    }))} placeholder={\`Agregar chip \${color}...\`} />)}\r
        </div>;
}`,...(Z=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var X,Q,Y;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    solid: ['Solid', 'Chip'],
    outline: ['Outline', 'Chip'],
    soft: ['Soft', 'Chip'],
    ghost: ['Ghost', 'Chip']
  });
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            {Object.entries(values).map(([variant, chipValues]) => <Chips key={variant} label={\`Variante: \${variant}\`} value={chipValues} chipVariant={variant} chipColor="primary" onChange={newValues => setValues(prev => ({
      ...prev,
      [variant]: newValues
    }))} placeholder={\`Agregar chip \${variant}...\`} />)}\r
        </div>;
}`,...(Y=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,ae,se;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const [values, setValues] = useState({
    none: ['Sin', 'Radio'],
    sm: ['Radio', 'Pequeño'],
    md: ['Radio', 'Mediano'],
    lg: ['Radio', 'Grande'],
    full: ['Radio', 'Completo']
  });
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            {Object.entries(values).map(([radius, chipValues]) => <Chips key={radius} label={\`Radio: \${radius}\`} value={chipValues} chipRadius={radius} chipColor="primary" onChange={newValues => setValues(prev => ({
      ...prev,
      [radius]: newValues
    }))} placeholder={\`Agregar chip \${radius}...\`} />)}\r
        </div>;
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,te,oe;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [emails, setEmails] = useState(['admin@example.com']);
  const [tags, setTags] = useState(['javascript']);
  const validateEmail = value => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(value);
  };
  const validateTag = value => {
    return value.length >= 3 && /^[a-zA-Z]+$/.test(value);
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            <Chips label="Emails (validación de formato)" value={emails} onChange={setEmails} validateChip={validateEmail} placeholder="ejemplo@correo.com" helpText="Solo acepta emails válidos" chipColor="info" />\r
            \r
            <Chips label="Tags (mínimo 3 caracteres, solo letras)" value={tags} onChange={setTags} validateChip={validateTag} placeholder="javascript, react, vue..." helpText="Mínimo 3 caracteres, solo letras" chipColor="success" />\r
        </div>;
}`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,le,ne;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [enterChips, setEnterChips] = useState(['Enter']);
  const [commaChips, setCommaChips] = useState(['Comma']);
  const [tabChips, setTabChips] = useState(['Tab']);
  const [spaceChips, setSpaceChips] = useState(['Space']);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            <Chips label="Separador: Enter" value={enterChips} onChange={setEnterChips} separator="enter" placeholder="Presiona Enter para crear chip" helpText="Presiona Enter para agregar" />\r
            \r
            <Chips label="Separador: Coma" value={commaChips} onChange={setCommaChips} separator="comma" placeholder="Escribe y usa coma para crear chip" helpText="Usa coma (,) para agregar" />\r
            \r
            <Chips label="Separador: Tab" value={tabChips} onChange={setTabChips} separator="tab" placeholder="Presiona Tab para crear chip" helpText="Presiona Tab para agregar" />\r
            \r
            <Chips label="Separador: Espacio" value={spaceChips} onChange={setSpaceChips} separator="space" placeholder="Usa espacio para crear chip" helpText="Usa espacio para agregar" />\r
        </div>;
}`,...(ne=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var pe,ce,de;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [limitedChips, setLimitedChips] = useState(['Uno', 'Dos']);
  const [noDuplicates, setNoDuplicates] = useState(['Único']);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            <Chips label="Máximo 5 chips" value={limitedChips} onChange={setLimitedChips} maxChips={5} placeholder="Máximo 5 chips..." helpText={\`\${limitedChips.length}/5 chips usados\`} chipColor="warning" />\r
            \r
            <Chips label="Sin duplicados" value={noDuplicates} onChange={setNoDuplicates} allowDuplicates={false} placeholder="Sin valores duplicados..." helpText="No se permiten valores duplicados" chipColor="secondary" />\r
        </div>;
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,he;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [normalChips, setNormalChips] = useState(['Normal']);
  const [disabledChips] = useState(['Deshabilitado', 'Solo lectura']);
  const [errorChips, setErrorChips] = useState(['Error']);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            <Chips label="Estado normal" value={normalChips} onChange={setNormalChips} placeholder="Estado normal..." helpText="Campo en estado normal" />\r
            \r
            <Chips label="Estado deshabilitado" value={disabledChips} disabled={true} placeholder="Campo deshabilitado..." helpText="Campo deshabilitado" />\r
            \r
            <Chips label="Estado de error" value={errorChips} onChange={setErrorChips} error="Este campo contiene errores" placeholder="Campo con error..." chipColor="danger" />\r
        </div>;
}`,...(he=(me=T.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,ge,ve;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [formData, setFormData] = useState({
    skills: ['React', 'JavaScript'],
    interests: ['Web Development'],
    tags: []
  });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Datos del formulario:\\n' + JSON.stringify(formData, null, 2));
  };
  return <form onSubmit={handleSubmit} style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '400px'
  }}>\r
            <h3>Formulario con Chips</h3>\r
            \r
            <Chips label="Habilidades técnicas" name="skills" value={formData.skills} onChange={skills => setFormData(prev => ({
      ...prev,
      skills
    }))} placeholder="Agregar habilidad..." helpText="Presiona Enter para agregar cada habilidad" chipColor="primary" />\r
            \r
            <Chips label="Intereses" name="interests" value={formData.interests} onChange={interests => setFormData(prev => ({
      ...prev,
      interests
    }))} placeholder="Agregar interés..." chipColor="secondary" maxChips={10} />\r
            \r
            <Chips label="Tags opcionales" name="tags" value={formData.tags} onChange={tags => setFormData(prev => ({
      ...prev,
      tags
    }))} placeholder="Agregar tag..." chipColor="info" chipVariant="outline" />\r
            \r
            <button type="submit" style={{
      padding: '10px 20px',
      marginTop: '10px'
    }}>\r
                Ver datos del formulario\r
            </button>\r
        </form>;
}`,...(ve=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};const Le=["Default","WithInitialValues","DifferentColors","DifferentVariants","DifferentRadius","WithValidation","DifferentSeparators","WithLimitations","States","FormIntegration"];export{_ as Default,b as DifferentColors,y as DifferentRadius,D as DifferentSeparators,x as DifferentVariants,V as FormIntegration,T as States,q as WithInitialValues,E as WithLimitations,S as WithValidation,Le as __namedExportsOrder,Ue as default};
