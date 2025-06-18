import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x,R as T}from"./index-BZISi7jw.js";import{P as r}from"./index-Co38GRlK.js";import{n as I,o as Y,p as H,q as Z}from"./index-KKouTENB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";function A({children:i,name:t,columns:s={sm:1,md:2,lg:3},color:c="primary",radius:p="md",multiple:n=!1,form:u,onChange:m,className:R,defaultValue:b=n?[]:"",...y}){const[d,g]=x.useState(b),Q=o=>{let l;n?l=d.includes(o)?d.filter(U=>U!==o):[...d,o]:l=o,g(l),u&&(u.setValue(t,l),u.trigger(t)),m&&m(l)};let V="q-radio-cards-root";return R&&(V+=` ${R}`),e.jsxs("div",{className:V,"data-color":c,"data-radius":p,...Object.fromEntries(Object.entries(s).map(([o,l])=>[`data-columns-${o}`,l])),...y,children:[e.jsx("input",{type:"hidden",name:t,value:JSON.stringify(d)}),T.Children.toArray(i).map((o,l)=>T.cloneElement(o,{key:l,selected:n?d.includes(o.props.value):d===o.props.value,onSelect:()=>Q(o.props.value),color:c,radius:p}))]})}function K({children:i,value:t,title:s,description:c,icon:p,selected:n,onSelect:u,disabled:m=!1,color:R,radius:b,...y}){let d="q-radio-cards-item";return n&&(d+=" selected"),m&&(d+=" disabled"),e.jsxs("div",{className:d,onClick:m?void 0:u,"data-color":R,"data-radius":b,tabIndex:m?-1:0,role:"button","aria-pressed":n,"aria-disabled":m,onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&!m&&(g.preventDefault(),u())},...y,children:[p&&e.jsx("div",{className:"q-radio-cards-icon",children:p}),e.jsxs("div",{className:"q-radio-cards-content",children:[s&&e.jsx("div",{className:"q-radio-cards-title",children:s}),c&&e.jsx("div",{className:"q-radio-cards-description",children:c}),!s&&!c&&i]}),e.jsx("input",{type:"radio",name:`radio-card-${t}`,value:t,checked:n,onChange:()=>{},tabIndex:-1,"aria-hidden":"true"})]})}A.propTypes={children:r.node.isRequired,name:r.string.isRequired,columns:r.object,color:r.string,radius:r.oneOf(["none","sm","md","lg","full"]),multiple:r.bool,form:r.object,onChange:r.func,className:r.string,defaultValue:r.oneOfType([r.string,r.number,r.array])};K.propTypes={children:r.node,value:r.oneOfType([r.string,r.number]).isRequired,title:r.string,description:r.string,icon:r.node,selected:r.bool,onSelect:r.func,disabled:r.bool,color:r.string,radius:r.string};const a={Root:A,Item:K},oe={title:"Components/RadioCards",component:a.Root,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","danger","info"]},radius:{control:"select",options:["none","sm","md","lg","full"]}}},S=i=>{const[t,s]=x.useState("");return e.jsxs("div",{style:{width:"600px"},children:[e.jsxs(a.Root,{...i,name:"payment-method",onChange:s,children:[e.jsx(a.Item,{value:"credit-card",title:"Tarjeta de crédito",description:"Pago con tarjeta de crédito o débito",icon:e.jsx(I,{size:24})}),e.jsx(a.Item,{value:"bank",title:"Transferencia bancaria",description:"Transferencia directa desde tu cuenta",icon:e.jsx(Y,{size:24})}),e.jsx(a.Item,{value:"wallet",title:"Billetera digital",description:"Pago con billetera virtual",icon:e.jsx(H,{size:24})}),e.jsx(a.Item,{value:"cash",title:"Efectivo",description:"Pago en efectivo al recibir",icon:e.jsx(Z,{size:24}),disabled:!0})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Valor seleccionado:"})," ",t||"Ninguno"]})]})},v=S.bind({});v.args={columns:{sm:1,md:2},color:"primary",radius:"md"};const C=S.bind({});C.args={columns:{sm:1,md:2},color:"success",radius:"md"};const f=S.bind({});f.args={columns:{sm:1},color:"info",radius:"lg"};const j={render:i=>{const[t,s]=x.useState("");return e.jsxs("div",{style:{width:"800px"},children:[e.jsxs(a.Root,{...i,name:"plan-selection",onChange:s,children:[e.jsx(a.Item,{value:"basic",title:"Plan Básico",description:"Ideal para uso personal"}),e.jsx(a.Item,{value:"pro",title:"Plan Pro",description:"Para equipos pequeños"}),e.jsx(a.Item,{value:"enterprise",title:"Plan Enterprise",description:"Para grandes organizaciones"}),e.jsx(a.Item,{value:"custom",title:"Plan Personalizado",description:"Solución a medida"}),e.jsx(a.Item,{value:"trial",title:"Prueba Gratuita",description:"30 días gratis"}),e.jsx(a.Item,{value:"student",title:"Plan Estudiante",description:"Descuento especial"})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Plan seleccionado:"})," ",t||"Ninguno"]})]})},args:{columns:{sm:1,md:2,lg:3},color:"warning",radius:"md"}},h={render:i=>{const[t,s]=x.useState("");return e.jsxs("div",{style:{width:"400px"},children:[e.jsxs(a.Root,{...i,name:"size-selection",onChange:s,children:[e.jsx(a.Item,{value:"xs",children:"XS"}),e.jsx(a.Item,{value:"sm",children:"SM"}),e.jsx(a.Item,{value:"md",children:"MD"}),e.jsx(a.Item,{value:"lg",children:"LG"}),e.jsx(a.Item,{value:"xl",children:"XL"})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Talla seleccionada:"})," ",t||"Ninguna"]})]})},args:{columns:{sm:3,md:5},color:"secondary",radius:"full"}},P={render:i=>{const[t,s]=x.useState({}),c={setValue:(p,n)=>{s(u=>({...u,[p]:n}))},trigger:()=>{}};return e.jsxs("div",{style:{width:"500px"},children:[e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx("strong",{children:"Selecciona tu método de pago preferido:"})}),e.jsxs(a.Root,{...i,name:"paymentMethod",form:c,children:[e.jsx(a.Item,{value:"visa",title:"Visa",description:"Tarjeta Visa",icon:e.jsx(I,{size:20})}),e.jsx(a.Item,{value:"mastercard",title:"Mastercard",description:"Tarjeta Mastercard",icon:e.jsx(I,{size:20})}),e.jsx(a.Item,{value:"paypal",title:"PayPal",description:"Cuenta PayPal",icon:e.jsx(H,{size:20})})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("strong",{children:"Formulario:"}),e.jsx("pre",{children:JSON.stringify(t,null,2)})]})]})},args:{columns:{sm:1,md:2},color:"danger",radius:"sm"}};var k,z,w;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState('');
  return <div style={{
    width: '600px'
  }}>\r
      <RadioCards.Root {...args} name="payment-method" onChange={setSelectedValue}>\r
        <RadioCards.Item value="credit-card" title="Tarjeta de crédito" description="Pago con tarjeta de crédito o débito" icon={<PiCreditCard size={24} />} />\r
        <RadioCards.Item value="bank" title="Transferencia bancaria" description="Transferencia directa desde tu cuenta" icon={<PiBank size={24} />} />\r
        <RadioCards.Item value="wallet" title="Billetera digital" description="Pago con billetera virtual" icon={<PiWallet size={24} />} />\r
        <RadioCards.Item value="cash" title="Efectivo" description="Pago en efectivo al recibir" icon={<PiCurrencyDollar size={24} />} disabled />\r
      </RadioCards.Root>\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Valor seleccionado:</strong> {selectedValue || 'Ninguno'}\r
      </div>\r
    </div>;
}`,...(w=(z=v.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var N,D,q;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState('');
  return <div style={{
    width: '600px'
  }}>\r
      <RadioCards.Root {...args} name="payment-method" onChange={setSelectedValue}>\r
        <RadioCards.Item value="credit-card" title="Tarjeta de crédito" description="Pago con tarjeta de crédito o débito" icon={<PiCreditCard size={24} />} />\r
        <RadioCards.Item value="bank" title="Transferencia bancaria" description="Transferencia directa desde tu cuenta" icon={<PiBank size={24} />} />\r
        <RadioCards.Item value="wallet" title="Billetera digital" description="Pago con billetera virtual" icon={<PiWallet size={24} />} />\r
        <RadioCards.Item value="cash" title="Efectivo" description="Pago en efectivo al recibir" icon={<PiCurrencyDollar size={24} />} disabled />\r
      </RadioCards.Root>\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Valor seleccionado:</strong> {selectedValue || 'Ninguno'}\r
      </div>\r
    </div>;
}`,...(q=(D=C.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var E,B,F;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState('');
  return <div style={{
    width: '600px'
  }}>\r
      <RadioCards.Root {...args} name="payment-method" onChange={setSelectedValue}>\r
        <RadioCards.Item value="credit-card" title="Tarjeta de crédito" description="Pago con tarjeta de crédito o débito" icon={<PiCreditCard size={24} />} />\r
        <RadioCards.Item value="bank" title="Transferencia bancaria" description="Transferencia directa desde tu cuenta" icon={<PiBank size={24} />} />\r
        <RadioCards.Item value="wallet" title="Billetera digital" description="Pago con billetera virtual" icon={<PiWallet size={24} />} />\r
        <RadioCards.Item value="cash" title="Efectivo" description="Pago en efectivo al recibir" icon={<PiCurrencyDollar size={24} />} disabled />\r
      </RadioCards.Root>\r
      \r
      <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}>\r
        <strong>Valor seleccionado:</strong> {selectedValue || 'Ninguno'}\r
      </div>\r
    </div>;
}`,...(F=(B=f.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,O,W;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState('');
    return <div style={{
      width: '800px'
    }}>\r
        <RadioCards.Root {...args} name="plan-selection" onChange={setSelectedValue}>\r
          <RadioCards.Item value="basic" title="Plan Básico" description="Ideal para uso personal" />\r
          <RadioCards.Item value="pro" title="Plan Pro" description="Para equipos pequeños" />\r
          <RadioCards.Item value="enterprise" title="Plan Enterprise" description="Para grandes organizaciones" />\r
          <RadioCards.Item value="custom" title="Plan Personalizado" description="Solución a medida" />\r
          <RadioCards.Item value="trial" title="Prueba Gratuita" description="30 días gratis" />\r
          <RadioCards.Item value="student" title="Plan Estudiante" description="Descuento especial" />\r
        </RadioCards.Root>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Plan seleccionado:</strong> {selectedValue || 'Ninguno'}\r
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
}`,...(W=(O=j.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var G,L,X;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState('');
    return <div style={{
      width: '400px'
    }}>\r
        <RadioCards.Root {...args} name="size-selection" onChange={setSelectedValue}>\r
          <RadioCards.Item value="xs">XS</RadioCards.Item>\r
          <RadioCards.Item value="sm">SM</RadioCards.Item>\r
          <RadioCards.Item value="md">MD</RadioCards.Item>\r
          <RadioCards.Item value="lg">LG</RadioCards.Item>\r
          <RadioCards.Item value="xl">XL</RadioCards.Item>\r
        </RadioCards.Root>\r
        \r
        <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>\r
          <strong>Talla seleccionada:</strong> {selectedValue || 'Ninguna'}\r
        </div>\r
      </div>;
  },
  args: {
    columns: {
      sm: 3,
      md: 5
    },
    color: 'secondary',
    radius: 'full'
  }
}`,...(X=(L=h.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var J,_,$;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
          <strong>Selecciona tu método de pago preferido:</strong>\r
        </div>\r
        \r
        <RadioCards.Root {...args} name="paymentMethod" form={mockForm}>\r
          <RadioCards.Item value="visa" title="Visa" description="Tarjeta Visa" icon={<PiCreditCard size={20} />} />\r
          <RadioCards.Item value="mastercard" title="Mastercard" description="Tarjeta Mastercard" icon={<PiCreditCard size={20} />} />\r
          <RadioCards.Item value="paypal" title="PayPal" description="Cuenta PayPal" icon={<PiWallet size={20} />} />\r
        </RadioCards.Root>\r
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
}`,...($=(_=P.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const de=["Default","WithColor","SingleColumn","ThreeColumns","SimpleCards","WithReactHookForm"];export{v as Default,h as SimpleCards,f as SingleColumn,j as ThreeColumns,C as WithColor,P as WithReactHookForm,de as __namedExportsOrder,oe as default};
