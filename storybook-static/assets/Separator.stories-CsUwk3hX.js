import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as a}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";function e({color:o,width:k="1px",size:i,orientation:l="horizontal",className:m,style:g,...E}){const V=()=>l==="vertical"?i||"1rem":i||"100%";let h="q-separator",x={"--separator-width":k,"--separator-size":V()};return g&&(x={...x,...g}),m&&(h+=` ${m}`),r.jsx("span",{className:h,"data-orientation":l,"data-color":o,style:x,role:"separator","aria-orientation":l,...E})}e.propTypes={color:a.string,width:a.string,size:a.string,orientation:a.oneOf(["horizontal","vertical"]),className:a.string,style:a.object};e.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{width:{defaultValue:{value:"'1px'",computed:!1},description:"",type:{name:"string"},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},description:"",type:{name:"enum",value:[{value:"'horizontal'",computed:!1},{value:"'vertical'",computed:!1}]},required:!1},color:{description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"object"},required:!1}}};const W={title:"Components/Separator",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","danger","info"]},orientation:{control:"select",options:["horizontal","vertical"]}}},s={args:{orientation:"horizontal"},render:o=>r.jsxs("div",{style:{width:"300px"},children:[r.jsx("p",{children:"Contenido antes del separador"}),r.jsx(e,{...o}),r.jsx("p",{children:"Contenido después del separador"})]})},n={args:{orientation:"vertical",size:"100px"},render:o=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",height:"120px"},children:[r.jsx("div",{children:"Contenido izquierda"}),r.jsx(e,{...o}),r.jsx("div",{children:"Contenido derecha"})]})},t={render:o=>r.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsxs("div",{children:[r.jsx("p",{children:"Separador primary"}),r.jsx(e,{color:"primary"})]}),r.jsxs("div",{children:[r.jsx("p",{children:"Separador success"}),r.jsx(e,{color:"success"})]}),r.jsxs("div",{children:[r.jsx("p",{children:"Separador warning"}),r.jsx(e,{color:"warning"})]}),r.jsxs("div",{children:[r.jsx("p",{children:"Separador danger"}),r.jsx(e,{color:"danger"})]})]})},d={render:o=>r.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsxs("div",{children:[r.jsx("p",{children:"Separador fino (1px)"}),r.jsx(e,{width:"1px"})]}),r.jsxs("div",{children:[r.jsx("p",{children:"Separador medio (2px)"}),r.jsx(e,{width:"2px",color:"primary"})]}),r.jsxs("div",{children:[r.jsx("p",{children:"Separador grueso (4px)"}),r.jsx(e,{width:"4px",color:"success"})]}),r.jsxs("div",{children:[r.jsx("p",{children:"Separador personalizado (50% ancho)"}),r.jsx(e,{size:"50%",color:"warning"})]})]})},c={render:o=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[r.jsx("a",{href:"#",style:{textDecoration:"none",color:"#333"},children:"Inicio"}),r.jsx(e,{orientation:"vertical",size:"20px",color:"secondary"}),r.jsx("a",{href:"#",style:{textDecoration:"none",color:"#333"},children:"Productos"}),r.jsx(e,{orientation:"vertical",size:"20px",color:"secondary"}),r.jsx("a",{href:"#",style:{textDecoration:"none",color:"#333"},children:"Servicios"}),r.jsx(e,{orientation:"vertical",size:"20px",color:"secondary"}),r.jsx("a",{href:"#",style:{textDecoration:"none",color:"#333"},children:"Contacto"})]})},p={render:o=>r.jsxs("div",{style:{width:"300px",padding:"1.5rem",backgroundColor:"white",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[r.jsx("h3",{style:{margin:"0 0 1rem 0"},children:"Información del usuario"}),r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("strong",{children:"Nombre:"})," Juan Pérez"]}),r.jsx(e,{color:"primary"}),r.jsxs("div",{style:{margin:"1rem 0"},children:[r.jsx("strong",{children:"Email:"})," juan@example.com"]}),r.jsx(e,{}),r.jsxs("div",{style:{marginTop:"1rem"},children:[r.jsx("strong",{children:"Teléfono:"})," +1 234 567 890"]})]})};var u,v,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <div style={{
    width: '300px'
  }}>\r
      <p>Contenido antes del separador</p>\r
      <Separator {...args} />\r
      <p>Contenido después del separador</p>\r
    </div>
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,j,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    size: '100px'
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    height: '120px'
  }}>\r
      <div>Contenido izquierda</div>\r
      <Separator {...args} />\r
      <div>Contenido derecha</div>\r
    </div>
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,z,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <div>\r
        <p>Separador primary</p>\r
        <Separator color="primary" />\r
      </div>\r
      \r
      <div>\r
        <p>Separador success</p>\r
        <Separator color="success" />\r
      </div>\r
      \r
      <div>\r
        <p>Separador warning</p>\r
        <Separator color="warning" />\r
      </div>\r
      \r
      <div>\r
        <p>Separador danger</p>\r
        <Separator color="danger" />\r
      </div>\r
    </div>
}`,...(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var b,D,I;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <div>\r
        <p>Separador fino (1px)</p>\r
        <Separator width="1px" />\r
      </div>\r
      \r
      <div>\r
        <p>Separador medio (2px)</p>\r
        <Separator width="2px" color="primary" />\r
      </div>\r
      \r
      <div>\r
        <p>Separador grueso (4px)</p>\r
        <Separator width="4px" color="success" />\r
      </div>\r
      \r
      <div>\r
        <p>Separador personalizado (50% ancho)</p>\r
        <Separator size="50%" color="warning" />\r
      </div>\r
    </div>
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var q,N,T;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px'
  }}>\r
      <a href="#" style={{
      textDecoration: 'none',
      color: '#333'
    }}>Inicio</a>\r
      <Separator orientation="vertical" size="20px" color="secondary" />\r
      <a href="#" style={{
      textDecoration: 'none',
      color: '#333'
    }}>Productos</a>\r
      <Separator orientation="vertical" size="20px" color="secondary" />\r
      <a href="#" style={{
      textDecoration: 'none',
      color: '#333'
    }}>Servicios</a>\r
      <Separator orientation="vertical" size="20px" color="secondary" />\r
      <a href="#" style={{
      textDecoration: 'none',
      color: '#333'
    }}>Contacto</a>\r
    </div>
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var P,R,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '300px',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}>\r
      <h3 style={{
      margin: '0 0 1rem 0'
    }}>Información del usuario</h3>\r
      \r
      <div style={{
      marginBottom: '1rem'
    }}>\r
        <strong>Nombre:</strong> Juan Pérez\r
      </div>\r
      \r
      <Separator color="primary" />\r
      \r
      <div style={{
      margin: '1rem 0'
    }}>\r
        <strong>Email:</strong> juan@example.com\r
      </div>\r
      \r
      <Separator />\r
      \r
      <div style={{
      marginTop: '1rem'
    }}>\r
        <strong>Teléfono:</strong> +1 234 567 890\r
      </div>\r
    </div>
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const $=["Default","Vertical","WithColors","DifferentSizes","InNavigation","InCards"];export{s as Default,d as DifferentSizes,p as InCards,c as InNavigation,n as Vertical,t as WithColors,$ as __namedExportsOrder,W as default};
