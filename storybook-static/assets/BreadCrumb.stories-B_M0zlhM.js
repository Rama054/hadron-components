import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ue,r as w}from"./index-BZISi7jw.js";import{P as o}from"./index-Co38GRlK.js";import{f as te,g as pe,h as q,i as T,j as N,k as be}from"./index-I48yvNyK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";function l({items:n=[],separator:i,size:t="md",color:c="primary",showHome:m=!0,homeIcon:s,className:u,onItemClick:d,...de}){const C=(r,a)=>{d&&!r.disabled&&d(r,a)},P=r=>r===n.length-1?null:e.jsx("span",{className:"q-breadcrumb-separator",children:i||e.jsx(te,{size:14})},`separator-${r}`),le=(r,a)=>{const k=a===n.length-1,ce=r.href||r.onClick||d;if(r.template)return e.jsx("span",{className:`q-breadcrumb-item ${k?"q-breadcrumb-current":""} ${r.disabled?"q-breadcrumb-disabled":""}`,onClick:()=>C(r,a),children:r.template(r,a,k)},a);const S=e.jsxs(e.Fragment,{children:[r.icon&&e.jsx("span",{className:"q-breadcrumb-icon",children:r.icon}),e.jsx("span",{className:"q-breadcrumb-label",children:r.label})]});return ce&&!k&&!r.disabled?r.href?e.jsx("a",{href:r.href,className:`q-breadcrumb-item q-breadcrumb-link ${r.disabled?"q-breadcrumb-disabled":""}`,onClick:me=>{r.onClick&&(me.preventDefault(),r.onClick(r,a)),C(r,a)},target:r.target,rel:r.target==="_blank"?"noopener noreferrer":void 0,children:S},a):e.jsx("button",{type:"button",className:`q-breadcrumb-item q-breadcrumb-button ${r.disabled?"q-breadcrumb-disabled":""}`,onClick:()=>{r.onClick&&r.onClick(r,a),C(r,a)},disabled:r.disabled,children:S},a):e.jsx("span",{className:`q-breadcrumb-item ${k?"q-breadcrumb-current":""} ${r.disabled?"q-breadcrumb-disabled":""}`,children:S},a)};let R="q-breadcrumb";return u&&(R+=` ${u}`),!n||n.length===0?null:e.jsx("nav",{className:R,"data-size":t,"data-color":c,"aria-label":"Breadcrumb",...de,children:e.jsxs("ol",{className:"q-breadcrumb-list",children:[m&&n.length>0&&n[0].label!=="Home"&&e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"q-breadcrumb-list-item",children:e.jsxs("button",{type:"button",className:"q-breadcrumb-item q-breadcrumb-button q-breadcrumb-home",onClick:()=>C({label:"Home",isHome:!0},-1),children:[s&&e.jsx("span",{className:"q-breadcrumb-icon",children:s}),e.jsx("span",{className:"q-breadcrumb-label",children:"Home"})]})}),P(-1)]}),n.map((r,a)=>e.jsxs(ue.Fragment,{children:[e.jsx("li",{className:"q-breadcrumb-list-item",children:le(r,a)}),P(a)]},a))]})})}l.propTypes={items:o.arrayOf(o.shape({label:o.string.isRequired,href:o.string,onClick:o.func,icon:o.node,template:o.func,disabled:o.bool,target:o.oneOf(["_blank","_self","_parent","_top"])})).isRequired,separator:o.node,size:o.oneOf(["sm","md","lg"]),color:o.string,showHome:o.bool,homeIcon:o.node,className:o.string,onItemClick:o.func};l.__docgenInfo={description:"",methods:[],displayName:"BreadCrumb",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},href:{name:"string",required:!1},onClick:{name:"func",required:!1},icon:{name:"node",required:!1},template:{name:"func",required:!1},disabled:{name:"bool",required:!1},target:{name:"enum",value:[{value:"'_blank'",computed:!1},{value:"'_self'",computed:!1},{value:"'_parent'",computed:!1},{value:"'_top'",computed:!1}],required:!1}}}},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},description:"",type:{name:"string"},required:!1},showHome:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},separator:{description:"",type:{name:"node"},required:!1},homeIcon:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1},onItemClick:{description:"",type:{name:"func"},required:!1}}};const ke={title:"Components/BreadCrumb",component:l,parameters:{layout:"centered",docs:{description:{component:"Componente de navegación breadcrumb que muestra la jerarquía de páginas y permite navegación."}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del breadcrumb"},color:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info"],description:"Color del breadcrumb"},showHome:{control:{type:"boolean"},description:"Mostrar enlace de inicio automáticamente"}}},ie=[{label:"Dashboard",href:"/dashboard"},{label:"Usuarios",href:"/users"},{label:"Perfil"}],p=[{label:"Dashboard",icon:e.jsx(q,{size:16}),href:"/dashboard"},{label:"Proyectos",icon:e.jsx(T,{size:16}),href:"/projects"},{label:"Documentos",icon:e.jsx(N,{size:16}),href:"/documents"},{label:"Archivo.pdf"}],v=n=>{const[i,t]=w.useState(""),c=(m,s)=>{t(`Clicked: ${m.label} (index: ${s})`)};return e.jsxs("div",{style:{width:"1000px",padding:"1rem"},children:[e.jsx(l,{...n,onItemClick:c}),i&&e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"0.875rem"},children:[e.jsx("strong",{children:"Evento:"})," ",i]})]})},b=v.bind({});b.args={items:ie};const g=v.bind({});g.args={items:p,color:"primary"};const h=v.bind({});h.args={items:p,separator:e.jsx(be,{size:14}),color:"success"};const f=v.bind({});f.args={items:ie,showHome:!1,color:"secondary"};const x=v.bind({});x.args={items:[{label:"Proyectos",href:"/projects"},{label:"Frontend",href:"/frontend"},{label:"Componentes"}],homeIcon:e.jsx(q,{size:16}),color:"info"};const y={render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"1500px",padding:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.875rem",color:"#666"},children:"Pequeño"}),e.jsx(l,{...n,size:"sm",items:p})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.875rem",color:"#666"},children:"Mediano"}),e.jsx(l,{...n,size:"md",items:p})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.875rem",color:"#666"},children:"Grande"}),e.jsx(l,{...n,size:"lg",items:p})]})]}),args:{color:"primary"}},I={render:n=>{const[i,t]=w.useState([]),c=(s,u,d)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.25rem 0.5rem",borderRadius:"4px",backgroundColor:d?"#e3f2fd":"transparent",border:d?"1px solid #2196f3":"none"},children:[s.icon,e.jsx("span",{style:{fontWeight:d?"600":"400",color:d?"#1976d2":"inherit"},children:s.label}),s.count&&e.jsx("span",{style:{backgroundColor:"#ff4444",color:"white",borderRadius:"10px",padding:"0.125rem 0.375rem",fontSize:"0.625rem",fontWeight:"600"},children:s.count})]}),m=[{label:"Dashboard",icon:e.jsx(q,{size:16}),template:c,onClick:()=>t(["Dashboard"])},{label:"Proyectos",icon:e.jsx(T,{size:16}),count:12,template:c,onClick:()=>t(["Dashboard","Proyectos"])},{label:"Hadron UI",icon:e.jsx(N,{size:16}),template:c}];return e.jsxs("div",{style:{width:"700px",padding:"1rem"},children:[e.jsx("h4",{children:"Breadcrumb con Templates Personalizados"}),e.jsx(l,{...n,items:m,separator:e.jsx(pe,{size:12}),showHome:!1}),i.length>0&&e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f0f9ff",borderRadius:"4px",border:"1px solid #0ea5e9"},children:[e.jsx("strong",{children:"Navegación:"})," ",i.join(" → ")]})]})},args:{color:"info"}},j={render:n=>{const[i,t]=w.useState(["Dashboard","Usuarios","Perfil"]),c=s=>s.map((u,d)=>({label:u,icon:d===0?e.jsx(q,{size:16}):d===s.length-1?e.jsx(N,{size:16}):e.jsx(T,{size:16}),onClick:()=>{t(s.slice(0,d+1))}})),m=()=>{const s=["Configuración","Notificaciones","Avanzado","Seguridad"],u=s[Math.floor(Math.random()*s.length)];t([...i,u])};return e.jsxs("div",{style:{width:"600px",padding:"1rem"},children:[e.jsx("h4",{children:"Breadcrumb Interactivo"}),e.jsx(l,{...n,items:c(i),showHome:!1}),e.jsxs("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"},children:[e.jsx("button",{onClick:m,style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Agregar Nivel"}),e.jsx("button",{onClick:()=>t(["Dashboard"]),style:{padding:"0.5rem 1rem",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Reset"})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"0.5rem",backgroundColor:"#f5f5f5",borderRadius:"4px",fontSize:"0.875rem"},children:[e.jsx("strong",{children:"Ruta actual:"})," ",i.join(" / ")]})]})},args:{color:"primary",separator:e.jsx(te,{size:14})}},z={render:n=>{const i=["primary","secondary","success","warning","danger","info"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"600px",padding:"1rem"},children:i.map(t=>e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"0.875rem",color:"#666",textTransform:"capitalize"},children:t}),e.jsx(l,{...n,color:t,items:p})]},t))})},args:{}};var D,H,B;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [clickedItem, setClickedItem] = useState('');
  const handleItemClick = (item, index) => {
    setClickedItem(\`Clicked: \${item.label} (index: \${index})\`);
  };
  return <div style={{
    width: '1000px',
    padding: '1rem'
  }}>\r
            <BreadCrumb {...args} onItemClick={handleItemClick} />\r
            \r
            {clickedItem && <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      fontSize: '0.875rem'
    }}>\r
                    <strong>Evento:</strong> {clickedItem}\r
                </div>}\r
        </div>;
}`,...(B=(H=b.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var $,W,_;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [clickedItem, setClickedItem] = useState('');
  const handleItemClick = (item, index) => {
    setClickedItem(\`Clicked: \${item.label} (index: \${index})\`);
  };
  return <div style={{
    width: '1000px',
    padding: '1rem'
  }}>\r
            <BreadCrumb {...args} onItemClick={handleItemClick} />\r
            \r
            {clickedItem && <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      fontSize: '0.875rem'
    }}>\r
                    <strong>Evento:</strong> {clickedItem}\r
                </div>}\r
        </div>;
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var L,F,E;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [clickedItem, setClickedItem] = useState('');
  const handleItemClick = (item, index) => {
    setClickedItem(\`Clicked: \${item.label} (index: \${index})\`);
  };
  return <div style={{
    width: '1000px',
    padding: '1rem'
  }}>\r
            <BreadCrumb {...args} onItemClick={handleItemClick} />\r
            \r
            {clickedItem && <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      fontSize: '0.875rem'
    }}>\r
                    <strong>Evento:</strong> {clickedItem}\r
                </div>}\r
        </div>;
}`,...(E=(F=h.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var M,A,O;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [clickedItem, setClickedItem] = useState('');
  const handleItemClick = (item, index) => {
    setClickedItem(\`Clicked: \${item.label} (index: \${index})\`);
  };
  return <div style={{
    width: '1000px',
    padding: '1rem'
  }}>\r
            <BreadCrumb {...args} onItemClick={handleItemClick} />\r
            \r
            {clickedItem && <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      fontSize: '0.875rem'
    }}>\r
                    <strong>Evento:</strong> {clickedItem}\r
                </div>}\r
        </div>;
}`,...(O=(A=f.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var U,V,G;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [clickedItem, setClickedItem] = useState('');
  const handleItemClick = (item, index) => {
    setClickedItem(\`Clicked: \${item.label} (index: \${index})\`);
  };
  return <div style={{
    width: '1000px',
    padding: '1rem'
  }}>\r
            <BreadCrumb {...args} onItemClick={handleItemClick} />\r
            \r
            {clickedItem && <div style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      fontSize: '0.875rem'
    }}>\r
                    <strong>Evento:</strong> {clickedItem}\r
                </div>}\r
        </div>;
}`,...(G=(V=x.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '1500px',
    padding: '1rem'
  }}>\r
            <div>\r
                <h4 style={{
        margin: '0 0 0.5rem 0',
        fontSize: '0.875rem',
        color: '#666'
      }}>Pequeño</h4>\r
                <BreadCrumb {...args} size="sm" items={itemsWithIcons} />\r
            </div>\r
            <div>\r
                <h4 style={{
        margin: '0 0 0.5rem 0',
        fontSize: '0.875rem',
        color: '#666'
      }}>Mediano</h4>\r
                <BreadCrumb {...args} size="md" items={itemsWithIcons} />\r
            </div>\r
            <div>\r
                <h4 style={{
        margin: '0 0 0.5rem 0',
        fontSize: '0.875rem',
        color: '#666'
      }}>Grande</h4>\r
                <BreadCrumb {...args} size="lg" items={itemsWithIcons} />\r
            </div>\r
        </div>,
  args: {
    color: 'primary'
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [navigation, setNavigation] = useState([]);
    const customTemplate = (item, index, isLast) => {
      return <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        backgroundColor: isLast ? '#e3f2fd' : 'transparent',
        border: isLast ? '1px solid #2196f3' : 'none'
      }}>\r
                    {item.icon}\r
                    <span style={{
          fontWeight: isLast ? '600' : '400',
          color: isLast ? '#1976d2' : 'inherit'
        }}>\r
                        {item.label}\r
                    </span>\r
                    {item.count && <span style={{
          backgroundColor: '#ff4444',
          color: 'white',
          borderRadius: '10px',
          padding: '0.125rem 0.375rem',
          fontSize: '0.625rem',
          fontWeight: '600'
        }}>\r
                            {item.count}\r
                        </span>}\r
                </div>;
    };
    const templateItems = [{
      label: 'Dashboard',
      icon: <IoHome size={16} />,
      template: customTemplate,
      onClick: () => setNavigation(['Dashboard'])
    }, {
      label: 'Proyectos',
      icon: <IoFolder size={16} />,
      count: 12,
      template: customTemplate,
      onClick: () => setNavigation(['Dashboard', 'Proyectos'])
    }, {
      label: 'Hadron UI',
      icon: <IoDocument size={16} />,
      template: customTemplate
    }];
    return <div style={{
      width: '700px',
      padding: '1rem'
    }}>\r
                <h4>Breadcrumb con Templates Personalizados</h4>\r
                <BreadCrumb {...args} items={templateItems} separator={<IoPlay size={12} />} showHome={false} />\r
                \r
                {navigation.length > 0 && <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f0f9ff',
        borderRadius: '4px',
        border: '1px solid #0ea5e9'
      }}>\r
                        <strong>Navegación:</strong> {navigation.join(' → ')}\r
                    </div>}\r
            </div>;
  },
  args: {
    color: 'info'
  }
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    const [currentPath, setCurrentPath] = useState(['Dashboard', 'Usuarios', 'Perfil']);
    const buildItems = path => {
      return path.map((item, index) => ({
        label: item,
        icon: index === 0 ? <IoHome size={16} /> : index === path.length - 1 ? <IoDocument size={16} /> : <IoFolder size={16} />,
        onClick: () => {
          // Navegar hacia atrás eliminando elementos después del clickeado
          setCurrentPath(path.slice(0, index + 1));
        }
      }));
    };
    const addLevel = () => {
      const newLevels = ['Configuración', 'Notificaciones', 'Avanzado', 'Seguridad'];
      const randomLevel = newLevels[Math.floor(Math.random() * newLevels.length)];
      setCurrentPath([...currentPath, randomLevel]);
    };
    return <div style={{
      width: '600px',
      padding: '1rem'
    }}>\r
                <h4>Breadcrumb Interactivo</h4>\r
                <BreadCrumb {...args} items={buildItems(currentPath)} showHome={false} />\r
                \r
                <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '0.5rem'
      }}>\r
                    <button onClick={addLevel} style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>\r
                        Agregar Nivel\r
                    </button>\r
                    <button onClick={() => setCurrentPath(['Dashboard'])} style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>\r
                        Reset\r
                    </button>\r
                </div>\r
                \r
                <div style={{
        marginTop: '1rem',
        padding: '0.5rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        fontSize: '0.875rem'
      }}>\r
                    <strong>Ruta actual:</strong> {currentPath.join(' / ')}\r
                </div>\r
            </div>;
  },
  args: {
    color: 'primary',
    separator: <IoChevronForward size={14} />
  }
}`,...(ne=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,se,oe;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '600px',
      padding: '1rem'
    }}>\r
                {colors.map(color => <div key={color}>\r
                        <h4 style={{
          margin: '0 0 0.5rem 0',
          fontSize: '0.875rem',
          color: '#666',
          textTransform: 'capitalize'
        }}>\r
                            {color}\r
                        </h4>\r
                        <BreadCrumb {...args} color={color} items={itemsWithIcons} />\r
                    </div>)}\r
            </div>;
  },
  args: {}
}`,...(oe=(se=z.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const ye=["Default","WithIcons","WithCustomSeparator","WithoutHome","WithCustomHomeIcon","Sizes","WithTemplate","Interactive","Colors"];export{z as Colors,b as Default,j as Interactive,y as Sizes,x as WithCustomHomeIcon,h as WithCustomSeparator,g as WithIcons,I as WithTemplate,f as WithoutHome,ye as __namedExportsOrder,ke as default};
