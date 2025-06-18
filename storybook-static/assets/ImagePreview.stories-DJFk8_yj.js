import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-BZISi7jw.js";import{F as pe,a as me,b as he,c as ue,d as ge,e as xe,f as fe}from"./index-C4TOJt4K.js";import{P as i}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";function r({src:h,alt:u="",preview:g=!1,width:J,height:K,className:j,hoverIcon:Q=e.jsx(xe,{}),objectFit:ee="cover",radius:ae="md",...re}){const[o,w]=n.useState(!1),[s,l]=n.useState({rotation:0,scale:1,translateX:0,translateY:0}),[I,y]=n.useState(!1),[_,te]=n.useState({x:0,y:0});n.useEffect(()=>{o&&l({rotation:0,scale:1,translateX:0,translateY:0})},[o]),n.useEffect(()=>{const a=b=>{b.key==="Escape"&&o&&w(!1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o]),n.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[o]);const ie=()=>{l(a=>({...a,rotation:a.rotation-90}))},se=()=>{l(a=>({...a,rotation:a.rotation+90}))},q=()=>{l(a=>({...a,scale:Math.min(a.scale*1.25,5)}))},R=()=>{l(a=>({...a,scale:Math.max(a.scale/1.25,.25)}))},F=()=>{w(!1)},oe=a=>{s.scale>1&&(y(!0),te({x:a.clientX-s.translateX,y:a.clientY-s.translateY}))},ne=a=>{I&&s.scale>1&&l(b=>({...b,translateX:a.clientX-_.x,translateY:a.clientY-_.y}))},C=()=>{y(!1)},le=a=>{a.preventDefault(),a.deltaY<0?q():R()},de=()=>({transform:`translate(${s.translateX}px, ${s.translateY}px) rotate(${s.rotation}deg) scale(${s.scale})`,cursor:s.scale>1?I?"grabbing":"grab":"default"});let P="hadr-image-preview";j&&(P+=` ${j}`);const ce={width:J,height:K,objectFit:ee};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:P,"data-radius":ae,children:[e.jsx("img",{src:h,alt:u,style:ce,...re}),g&&e.jsx("div",{className:"hadr-image-preview__overlay",onClick:()=>w(!0),children:e.jsx("div",{className:"hadr-image-preview__icon",children:Q})})]}),o&&e.jsxs("div",{className:"hadr-image-preview__modal",children:[e.jsx("div",{className:"hadr-image-preview__backdrop",onClick:F}),e.jsxs("div",{className:"hadr-image-preview__controls",children:[e.jsx("button",{onClick:ie,className:"hadr-image-preview__control-btn",title:"Rotar izquierda",children:e.jsx(pe,{})}),e.jsx("button",{onClick:se,className:"hadr-image-preview__control-btn",title:"Rotar derecha",children:e.jsx(me,{})}),e.jsx("button",{onClick:q,className:"hadr-image-preview__control-btn",title:"Acercar",children:e.jsx(he,{})}),e.jsx("button",{onClick:R,className:"hadr-image-preview__control-btn",title:"Alejar",children:e.jsx(ue,{})}),e.jsx("button",{onClick:F,className:"hadr-image-preview__control-btn hadr-image-preview__control-btn--close",title:"Cerrar",children:e.jsx(ge,{})})]}),e.jsx("div",{className:"hadr-image-preview__content",onMouseDown:oe,onMouseMove:ne,onMouseUp:C,onMouseLeave:C,onWheel:le,children:e.jsx("img",{src:h,alt:u,style:de(),draggable:!1})})]})]})}r.propTypes={src:i.string.isRequired,alt:i.string,preview:i.bool,width:i.oneOfType([i.string,i.number]),height:i.oneOfType([i.string,i.number]),className:i.string,hoverIcon:i.node,objectFit:i.oneOf(["cover","contain","fill","none","scale-down"]),radius:i.oneOf(["none","sm","md","lg","full"])};r.__docgenInfo={description:"",methods:[],displayName:"ImagePreview",props:{alt:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},preview:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},hoverIcon:{defaultValue:{value:"<FiEye />",computed:!1},description:"",type:{name:"node"},required:!1},objectFit:{defaultValue:{value:'"cover"',computed:!1},description:"",type:{name:"enum",value:[{value:"'cover'",computed:!1},{value:"'contain'",computed:!1},{value:"'fill'",computed:!1},{value:"'none'",computed:!1},{value:"'scale-down'",computed:!1}]},required:!1},radius:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'full'",computed:!1}]},required:!1},src:{description:"",type:{name:"string"},required:!0},width:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},height:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const _e={title:"Components/ImagePreview",component:r,parameters:{layout:"padded"},argTypes:{src:{control:"text",description:"URL de la imagen"},alt:{control:"text",description:"Texto alternativo para la imagen"},preview:{control:"boolean",description:"Habilita la funcionalidad de vista previa"},width:{control:"text",description:"Ancho de la imagen"},height:{control:"text",description:"Alto de la imagen"},objectFit:{control:"select",options:["cover","contain","fill","none","scale-down"],description:"Cómo se ajusta la imagen en su contenedor"},radius:{control:"select",options:["none","sm","md","lg","full"],description:"Radio de borde de la imagen"}}},t="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",x={args:{src:t,alt:"Imagen de ejemplo",preview:!1,width:"200px",height:"150px"}},f={args:{src:t,alt:"Imagen con vista previa",preview:!0,width:"200px",height:"150px"}},v={args:{src:t,alt:"Imagen con icono personalizado",preview:!0,width:"200px",height:"150px",hoverIcon:e.jsx(fe,{})}},d=()=>e.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Pequeña"}),e.jsx(r,{src:t,alt:"Imagen pequeña",width:"100px",height:"100px",preview:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Mediana"}),e.jsx(r,{src:t,alt:"Imagen mediana",width:"200px",height:"150px",preview:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Grande"}),e.jsx(r,{src:t,alt:"Imagen grande",width:"300px",height:"200px",preview:!0})]})]}),c=()=>e.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Sin radio"}),e.jsx(r,{src:t,alt:"Sin radio",width:"150px",height:"150px",radius:"none",preview:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Radio pequeño"}),e.jsx(r,{src:t,alt:"Radio pequeño",width:"150px",height:"150px",radius:"sm",preview:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Radio mediano"}),e.jsx(r,{src:t,alt:"Radio mediano",width:"150px",height:"150px",radius:"md",preview:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Radio grande"}),e.jsx(r,{src:t,alt:"Radio grande",width:"150px",height:"150px",radius:"lg",preview:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Radio completo"}),e.jsx(r,{src:t,alt:"Radio completo",width:"150px",height:"150px",radius:"full",preview:!0})]})]}),p=()=>e.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Cover"}),e.jsx(r,{src:t,alt:"Object fit cover",width:"150px",height:"100px",objectFit:"cover",preview:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Contain"}),e.jsx(r,{src:t,alt:"Object fit contain",width:"150px",height:"100px",objectFit:"contain",preview:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Fill"}),e.jsx(r,{src:t,alt:"Object fit fill",width:"150px",height:"100px",objectFit:"fill",preview:!0})]})]}),m=()=>{const h=["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80","https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80","https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80","https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80","https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"16px",padding:"16px"},children:h.map((u,g)=>e.jsx(r,{src:u,alt:`Imagen de galería ${g+1}`,width:"100%",height:"150px",preview:!0,radius:"md"},g))})};d.__docgenInfo={description:"",methods:[],displayName:"DifferentSizes"};c.__docgenInfo={description:"",methods:[],displayName:"DifferentRadius"};p.__docgenInfo={description:"",methods:[],displayName:"ObjectFitVariations"};m.__docgenInfo={description:"",methods:[],displayName:"Gallery"};var S,D,N;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Imagen de ejemplo",
    preview: false,
    width: "200px",
    height: "150px"
  }
}`,...(N=(D=x.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var O,M,k;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Imagen con vista previa",
    preview: true,
    width: "200px",
    height: "150px"
  }
}`,...(k=(M=f.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var E,W,T;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    src: sampleImage,
    alt: "Imagen con icono personalizado",
    preview: true,
    width: "200px",
    height: "150px",
    hoverIcon: <FiCamera />
  }
}`,...(T=(W=v.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var V,Y,X;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  alignItems: 'flex-start'
}}>\r
        <div>\r
            <h4>Pequeña</h4>\r
            <ImagePreview src={sampleImage} alt="Imagen pequeña" width="100px" height="100px" preview={true} />\r
        </div>\r
        <div>\r
            <h4>Mediana</h4>\r
            <ImagePreview src={sampleImage} alt="Imagen mediana" width="200px" height="150px" preview={true} />\r
        </div>\r
        <div>\r
            <h4>Grande</h4>\r
            <ImagePreview src={sampleImage} alt="Imagen grande" width="300px" height="200px" preview={true} />\r
        </div>\r
    </div>`,...(X=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var G,$,z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap'
}}>\r
        <div>\r
            <h4>Sin radio</h4>\r
            <ImagePreview src={sampleImage} alt="Sin radio" width="150px" height="150px" radius="none" preview={true} />\r
        </div>\r
        <div>\r
            <h4>Radio pequeño</h4>\r
            <ImagePreview src={sampleImage} alt="Radio pequeño" width="150px" height="150px" radius="sm" preview={true} />\r
        </div>\r
        <div>\r
            <h4>Radio mediano</h4>\r
            <ImagePreview src={sampleImage} alt="Radio mediano" width="150px" height="150px" radius="md" preview={true} />\r
        </div>\r
        <div>\r
            <h4>Radio grande</h4>\r
            <ImagePreview src={sampleImage} alt="Radio grande" width="150px" height="150px" radius="lg" preview={true} />\r
        </div>\r
        <div>\r
            <h4>Radio completo</h4>\r
            <ImagePreview src={sampleImage} alt="Radio completo" width="150px" height="150px" radius="full" preview={true} />\r
        </div>\r
    </div>`,...(z=($=c.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var A,H,L;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap'
}}>\r
        <div>\r
            <h4>Cover</h4>\r
            <ImagePreview src={sampleImage} alt="Object fit cover" width="150px" height="100px" objectFit="cover" preview={true} />\r
        </div>\r
        <div>\r
            <h4>Contain</h4>\r
            <ImagePreview src={sampleImage} alt="Object fit contain" width="150px" height="100px" objectFit="contain" preview={true} />\r
        </div>\r
        <div>\r
            <h4>Fill</h4>\r
            <ImagePreview src={sampleImage} alt="Object fit fill" width="150px" height="100px" objectFit="fill" preview={true} />\r
        </div>\r
    </div>`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var Z,U,B;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const images = ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"];
  return <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    padding: '16px'
  }}>\r
            {images.map((src, index) => <ImagePreview key={index} src={src} alt={\`Imagen de galería \${index + 1}\`} width="100%" height="150px" preview={true} radius="md" />)}\r
        </div>;
}`,...(B=(U=m.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};const qe=["Default","WithPreview","CustomHoverIcon","DifferentSizes","DifferentRadius","ObjectFitVariations","Gallery"];export{v as CustomHoverIcon,x as Default,c as DifferentRadius,d as DifferentSizes,m as Gallery,p as ObjectFitVariations,f as WithPreview,qe as __namedExportsOrder,_e as default};
