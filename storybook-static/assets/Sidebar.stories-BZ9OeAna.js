import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BZISi7jw.js";import{P as n}from"./index-Co38GRlK.js";import{B as s}from"./Button-kmOhRj6m.js";import{d as J,r as G,b as W,s as Z,x as Q}from"./index-KKouTENB.js";import{G as Y}from"./iconBase-BcoVWJ97.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-DKwzja_x.js";function p({children:r,color:a,open:i=!1,position:F="left",size:K="320px",onClose:d,className:S,style:j,showCloseButton:X=!0,...$}){const h=l.useRef(null);l.useEffect(()=>{const u=t=>{t.key==="Escape"&&i&&(d==null||d())};return document.addEventListener("keydown",u),i?(document.body.style.overflow="hidden",setTimeout(()=>{var o;const t=(o=h.current)==null?void 0:o.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');t!=null&&t.length&&t[0].focus()},100)):document.body.style.overflow="",()=>{document.body.style.overflow="",document.removeEventListener("keydown",u)}},[i,d]),l.useEffect(()=>{const u=t=>{if(!i||!h.current)return;const o=h.current.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');if(!o.length)return;const q=o[0],O=o[o.length-1];t.key==="Tab"&&(t.shiftKey?document.activeElement===q&&(t.preventDefault(),O.focus()):document.activeElement===O&&(t.preventDefault(),q.focus()))};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[i]);let C="q-sidebar-root",y={"--sidebar-size":K,"--background-sidebar":a};return j&&(y={...y,...j}),S&&(C+=` ${S}`),e.jsxs("div",{className:C,style:y,"data-open":i,"data-position":F,...$,children:[e.jsx("div",{className:"q-sidebar-overlay",onClick:d,"aria-hidden":"true"}),e.jsxs("div",{className:"q-sidebar",ref:h,role:"dialog","aria-modal":"true","aria-label":"Sidebar",children:[X&&e.jsx(s,{variant:"ghost",radius:"full",size:"sm",onClick:d,className:"q-sidebar-close","aria-label":"Cerrar sidebar",children:e.jsx(J,{size:20})}),e.jsx("div",{className:"q-sidebar-content",children:r})]})]})}p.propTypes={children:n.node.isRequired,color:n.string,open:n.bool,position:n.oneOf(["left","right","top","bottom"]),size:n.string,onClose:n.func,className:n.string,style:n.object,showCloseButton:n.bool};p.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{open:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},position:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'top'",computed:!1},{value:"'bottom'",computed:!1}]},required:!1},size:{defaultValue:{value:'"320px"',computed:!1},description:"",type:{name:"string"},required:!1},showCloseButton:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"node"},required:!0},color:{description:"",type:{name:"string"},required:!1},onClose:{description:"",type:{name:"func"},required:!1},className:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"object"},required:!1}}};function ee(r){return Y({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Menu_Burger"},child:[{tag:"path",attr:{d:"M3.563,4.063c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001Z"},child:[]},{tag:"path",attr:{d:"M3.563,12.501c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"},child:[]},{tag:"path",attr:{d:"M3.563,20.939c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002Z"},child:[]}]}]})(r)}const pe={title:"Components/Sidebar",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{position:{control:"select",options:["left","right","top","bottom"]}}},re=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h2",{style:{margin:"0 0 1rem 0",color:"#333"},children:"Menú Principal"}),e.jsxs("nav",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem",textDecoration:"none",color:"#333",borderRadius:"8px",transition:"background-color 0.2s"},onMouseEnter:r=>r.target.style.backgroundColor="#f0f0f0",onMouseLeave:r=>r.target.style.backgroundColor="transparent",children:[e.jsx(G,{size:20}),"Inicio"]}),e.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem",textDecoration:"none",color:"#333",borderRadius:"8px"},onMouseEnter:r=>r.target.style.backgroundColor="#f0f0f0",onMouseLeave:r=>r.target.style.backgroundColor="transparent",children:[e.jsx(W,{size:20}),"Perfil"]}),e.jsxs("a",{href:"#",style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem",textDecoration:"none",color:"#333",borderRadius:"8px"},onMouseEnter:r=>r.target.style.backgroundColor="#f0f0f0",onMouseLeave:r=>r.target.style.backgroundColor="transparent",children:[e.jsx(Z,{size:20}),"Configuración"]})]}),e.jsx("div",{style:{marginTop:"auto",paddingTop:"2rem"},children:e.jsxs(s,{variant:"ghost",color:"danger",style:{width:"100%",justifyContent:"flex-start"},children:[e.jsx(Q,{size:20}),"Cerrar sesión"]})})]}),v=r=>{const[a,i]=l.useState(!1);return e.jsxs("div",{style:{minHeight:"400px",position:"relative"},children:[e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"Página Principal"}),e.jsx("p",{children:"Este es el contenido principal de la página."}),e.jsxs(s,{onClick:()=>i(!0),children:[e.jsx(ee,{size:20}),"Abrir Sidebar"]}),e.jsxs("div",{style:{marginTop:"2rem"},children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),e.jsx(p,{...r,open:a,onClose:()=>i(!1),children:e.jsx(re,{})})]})},c=v.bind({});c.args={position:"left",size:"320px"};const m=v.bind({});m.args={position:"right",size:"280px"};const x={render:r=>{const[a,i]=l.useState(!1);return e.jsxs("div",{style:{minHeight:"400px",position:"relative"},children:[e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"Sidebar Superior"}),e.jsx("p",{children:"Este sidebar se desliza desde arriba."}),e.jsx(s,{onClick:()=>i(!0),children:"Abrir Sidebar Superior"})]}),e.jsx(p,{...r,open:a,onClose:()=>i(!1),children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem",padding:"1rem"},children:[e.jsx("h3",{style:{margin:0},children:"Notificaciones"}),e.jsx("div",{style:{padding:"0.5rem 1rem",backgroundColor:"#f0f0f0",borderRadius:"8px"},children:"3 nuevas notificaciones"}),e.jsx(s,{size:"sm",children:"Ver todas"})]})})]})},args:{position:"top",size:"200px"}},g=v.bind({});g.args={position:"left",size:"300px",color:"#1e293b"};const f=v.bind({});f.args={position:"left",size:"320px",showCloseButton:!1};const b={render:r=>{const[a,i]=l.useState(!1);return e.jsxs("div",{style:{minHeight:"400px",position:"relative"},children:[e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"Sidebar Estrecho"}),e.jsx("p",{children:"Un sidebar más estrecho ideal para navegación con iconos."}),e.jsx(s,{onClick:()=>i(!0),children:"Abrir Sidebar"})]}),e.jsx(p,{...r,open:a,onClose:()=>i(!1),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",paddingTop:"1rem"},children:[e.jsx(s,{variant:"ghost",size:"lg",style:{width:"48px",height:"48px",padding:0},children:e.jsx(G,{size:24})}),e.jsx(s,{variant:"ghost",size:"lg",style:{width:"48px",height:"48px",padding:0},children:e.jsx(W,{size:24})}),e.jsx(s,{variant:"ghost",size:"lg",style:{width:"48px",height:"48px",padding:0},children:e.jsx(Z,{size:24})})]})})]})},args:{position:"left",size:"80px"}};var z,B,E;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div style={{
    minHeight: '400px',
    position: 'relative'
  }}>\r
      <div style={{
      padding: '2rem'
    }}>\r
        <h1>Página Principal</h1>\r
        <p>Este es el contenido principal de la página.</p>\r
        \r
        <Button onClick={() => setIsOpen(true)}>\r
          <CiMenuBurger size={20} />\r
          Abrir Sidebar\r
        </Button>\r
        \r
        <div style={{
        marginTop: '2rem'
      }}>\r
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
        </div>\r
      </div>\r
      \r
      <Sidebar {...args} open={isOpen} onClose={() => setIsOpen(false)}>\r
        <SidebarContent />\r
      </Sidebar>\r
    </div>;
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,k,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div style={{
    minHeight: '400px',
    position: 'relative'
  }}>\r
      <div style={{
      padding: '2rem'
    }}>\r
        <h1>Página Principal</h1>\r
        <p>Este es el contenido principal de la página.</p>\r
        \r
        <Button onClick={() => setIsOpen(true)}>\r
          <CiMenuBurger size={20} />\r
          Abrir Sidebar\r
        </Button>\r
        \r
        <div style={{
        marginTop: '2rem'
      }}>\r
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
        </div>\r
      </div>\r
      \r
      <Sidebar {...args} open={isOpen} onClose={() => setIsOpen(false)}>\r
        <SidebarContent />\r
      </Sidebar>\r
    </div>;
}`,...(P=(k=m.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var w,T,D;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      minHeight: '400px',
      position: 'relative'
    }}>\r
        <div style={{
        padding: '2rem'
      }}>\r
          <h1>Sidebar Superior</h1>\r
          <p>Este sidebar se desliza desde arriba.</p>\r
          \r
          <Button onClick={() => setIsOpen(true)}>\r
            Abrir Sidebar Superior\r
          </Button>\r
        </div>\r
        \r
        <Sidebar {...args} open={isOpen} onClose={() => setIsOpen(false)}>\r
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          padding: '1rem'
        }}>\r
            <h3 style={{
            margin: 0
          }}>Notificaciones</h3>\r
            <div style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px'
          }}>\r
              3 nuevas notificaciones\r
            </div>\r
            <Button size="sm">Ver todas</Button>\r
          </div>\r
        </Sidebar>\r
      </div>;
  },
  args: {
    position: 'top',
    size: '200px'
  }
}`,...(D=(T=x.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var M,H,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div style={{
    minHeight: '400px',
    position: 'relative'
  }}>\r
      <div style={{
      padding: '2rem'
    }}>\r
        <h1>Página Principal</h1>\r
        <p>Este es el contenido principal de la página.</p>\r
        \r
        <Button onClick={() => setIsOpen(true)}>\r
          <CiMenuBurger size={20} />\r
          Abrir Sidebar\r
        </Button>\r
        \r
        <div style={{
        marginTop: '2rem'
      }}>\r
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
        </div>\r
      </div>\r
      \r
      <Sidebar {...args} open={isOpen} onClose={() => setIsOpen(false)}>\r
        <SidebarContent />\r
      </Sidebar>\r
    </div>;
}`,...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,N,R;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <div style={{
    minHeight: '400px',
    position: 'relative'
  }}>\r
      <div style={{
      padding: '2rem'
    }}>\r
        <h1>Página Principal</h1>\r
        <p>Este es el contenido principal de la página.</p>\r
        \r
        <Button onClick={() => setIsOpen(true)}>\r
          <CiMenuBurger size={20} />\r
          Abrir Sidebar\r
        </Button>\r
        \r
        <div style={{
        marginTop: '2rem'
      }}>\r
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
        </div>\r
      </div>\r
      \r
      <Sidebar {...args} open={isOpen} onClose={() => setIsOpen(false)}>\r
        <SidebarContent />\r
      </Sidebar>\r
    </div>;
}`,...(R=(N=f.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var U,V,_;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      minHeight: '400px',
      position: 'relative'
    }}>\r
        <div style={{
        padding: '2rem'
      }}>\r
          <h1>Sidebar Estrecho</h1>\r
          <p>Un sidebar más estrecho ideal para navegación con iconos.</p>\r
          \r
          <Button onClick={() => setIsOpen(true)}>\r
            Abrir Sidebar\r
          </Button>\r
        </div>\r
        \r
        <Sidebar {...args} open={isOpen} onClose={() => setIsOpen(false)}>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '1rem'
        }}>\r
            <Button variant="ghost" size="lg" style={{
            width: '48px',
            height: '48px',
            padding: 0
          }}>\r
              <PiHouse size={24} />\r
            </Button>\r
            <Button variant="ghost" size="lg" style={{
            width: '48px',
            height: '48px',
            padding: 0
          }}>\r
              <PiUser size={24} />\r
            </Button>\r
            <Button variant="ghost" size="lg" style={{
            width: '48px',
            height: '48px',
            padding: 0
          }}>\r
              <PiGear size={24} />\r
            </Button>\r
          </div>\r
        </Sidebar>\r
      </div>;
  },
  args: {
    position: 'left',
    size: '80px'
  }
}`,...(_=(V=b.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const ue=["Default","RightSidebar","TopSidebar","WithCustomColor","WithoutCloseButton","NarrowSidebar"];export{c as Default,b as NarrowSidebar,m as RightSidebar,x as TopSidebar,g as WithCustomColor,f as WithoutCloseButton,ue as __namedExportsOrder,pe as default};
