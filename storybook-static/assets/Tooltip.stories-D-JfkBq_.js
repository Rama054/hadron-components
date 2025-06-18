import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BZISi7jw.js";import{r as Ke}from"./index-CZbnLx9J.js";import{P as a}from"./index-Co38GRlK.js";import{B as r}from"./Button-kmOhRj6m.js";import{f as O,v as Je,e as V,c as Ae,d as Ze,w as eo}from"./index-KKouTENB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./Spinner-DKwzja_x.js";import"./iconBase-BcoVWJ97.js";function o({content:n,children:j,placement:m="top",trigger:l="hover",delay:X=200,offset:_=8,disabled:$=!1,className:Le,style:Oe,arrow:C=!0,maxWidth:Me="250px",color:He,...Ne}){const[c,G]=i.useState(!1),[M,Fe]=i.useState({x:0,y:0,placement:m}),H=i.useRef(null),N=i.useRef(null),g=i.useRef(null),T=i.useRef(!1),h=i.useCallback(()=>{if(!H.current||!N.current)return;const t=H.current.getBoundingClientRect(),x=N.current,Q=x.offsetWidth,U=x.offsetHeight,w=Q>0?Q:150,y=U>0?U:32,b={width:window.innerWidth,height:window.innerHeight,scrollX:window.scrollX,scrollY:window.scrollY};let p,s,F=m;const v=_+(C?4:0);switch(m){case"top":p=t.left+t.width/2-w/2,s=t.top-y-v;break;case"bottom":p=t.left+t.width/2-w/2,s=t.bottom+v;break;case"left":p=t.left-w-v,s=t.top+t.height/2-y/2;break;case"right":p=t.right+v,s=t.top+t.height/2-y/2;break;default:p=t.left,s=t.top}const u=12;p<u?p=u:p+w>b.width-u&&(p=b.width-w-u),s<u?m==="top"?(F="bottom",s=t.bottom+v):s=u:s+y>b.height-u&&(m==="bottom"?(F="top",s=t.top-y-v):s=b.height-y-u),Fe({x:p+b.scrollX,y:s+b.scrollY,placement:F})},[m,_,C]),f=i.useCallback(()=>{$||!n||(clearTimeout(g.current),g.current=setTimeout(()=>{G(!0)},l==="hover"?X:0))},[$,n,X,l]),d=i.useCallback(()=>{clearTimeout(g.current),g.current=setTimeout(()=>{T.current||G(!1)},100)},[]),Ve=i.useCallback(()=>{l==="hover"&&(T.current=!0,f())},[l,f]),Xe=i.useCallback(()=>{l==="hover"&&(T.current=!1,d())},[l,d]),_e=i.useCallback(()=>{l==="click"&&(c?d():f())},[l,c,f,d]),$e=i.useCallback(()=>{l==="focus"&&f()},[l,f]),Ge=i.useCallback(()=>{l==="focus"&&d()},[l,d]),Ye=i.useCallback(()=>{l==="hover"&&(T.current=!0,clearTimeout(g.current))},[l]),Qe=i.useCallback(()=>{l==="hover"&&(T.current=!1,d())},[l,d]);i.useEffect(()=>{c&&requestAnimationFrame(()=>{h(),setTimeout(()=>{h()},10)})},[c,h]),i.useEffect(()=>{const t=()=>{c&&h()},x=()=>{c&&h()};return window.addEventListener("scroll",t,!0),window.addEventListener("resize",x),()=>{window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",x),clearTimeout(g.current)}},[c,h]),i.useEffect(()=>{const t=x=>{x.key==="Escape"&&c&&d()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[c,d]);const Ue=e.jsx("span",{ref:H,onMouseEnter:Ve,onMouseLeave:Xe,onClick:_e,onFocus:$e,onBlur:Ge,className:"q-tooltip-trigger",...Ne,children:j}),Y=c&&n&&e.jsxs("div",{ref:N,className:`q-tooltip ${Le||""}`,style:{position:"absolute",left:M.x,top:M.y,maxWidth:Me,zIndex:9999,...Oe},"data-placement":M.placement,"data-color":He,"data-arrow":C,onMouseEnter:Ye,onMouseLeave:Qe,role:"tooltip","aria-hidden":!c,children:[C&&e.jsx("div",{className:"q-tooltip-arrow"}),e.jsx("div",{className:"q-tooltip-content",children:n})]});return e.jsxs(e.Fragment,{children:[Ue,typeof document<"u"&&Y&&Ke.createPortal(Y,document.body)]})}o.propTypes={content:a.node.isRequired,children:a.node.isRequired,placement:a.oneOf(["top","bottom","left","right"]),trigger:a.oneOf(["hover","click","focus"]),delay:a.number,offset:a.number,disabled:a.bool,className:a.string,style:a.object,arrow:a.bool,maxWidth:a.string,color:a.string};o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{placement:{defaultValue:{value:"'top'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},trigger:{defaultValue:{value:"'hover'",computed:!1},description:"",type:{name:"enum",value:[{value:"'hover'",computed:!1},{value:"'click'",computed:!1},{value:"'focus'",computed:!1}]},required:!1},delay:{defaultValue:{value:"200",computed:!1},description:"",type:{name:"number"},required:!1},offset:{defaultValue:{value:"8",computed:!1},description:"",type:{name:"number"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},arrow:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},maxWidth:{defaultValue:{value:"'250px'",computed:!1},description:"",type:{name:"string"},required:!1},content:{description:"",type:{name:"node"},required:!0},children:{description:"",type:{name:"node"},required:!0},className:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"object"},required:!1},color:{description:"",type:{name:"string"},required:!1}}};const uo={title:"Components/Tooltip",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"]},trigger:{control:"select",options:["hover","click","focus"]},color:{control:"select",options:["primary","secondary","success","warning","danger","info"]}}},I={args:{content:"Este es un tooltip básico",placement:"top",children:e.jsx(r,{children:"Hover me"})}},k={render:n=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"2rem",padding:"3rem",alignItems:"center",justifyItems:"center"},children:[e.jsx("div",{}),e.jsx(o,{content:"Tooltip arriba",placement:"top",children:e.jsx(r,{children:"Top"})}),e.jsx("div",{}),e.jsx(o,{content:"Tooltip izquierda",placement:"left",children:e.jsx(r,{children:"Left"})}),e.jsx("div",{style:{textAlign:"center",color:"#666"},children:"Hover en cualquier botón"}),e.jsx(o,{content:"Tooltip derecha",placement:"right",children:e.jsx(r,{children:"Right"})}),e.jsx("div",{}),e.jsx(o,{content:"Tooltip abajo",placement:"bottom",children:e.jsx(r,{children:"Bottom"})}),e.jsx("div",{})]})},B={render:n=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(o,{content:"Aparece al hacer hover",trigger:"hover",children:e.jsx(r,{variant:"outline",children:"Hover"})}),e.jsx(o,{content:"Aparece al hacer click",trigger:"click",children:e.jsx(r,{variant:"outline",children:"Click"})}),e.jsx(o,{content:"Aparece al hacer focus",trigger:"focus",children:e.jsx("button",{style:{padding:"0.5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",background:"white",cursor:"pointer"},children:"Focus (Tab)"})})]})},z={render:n=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(o,{content:"Primary tooltip",color:"primary",children:e.jsx(r,{color:"primary",children:"Primary"})}),e.jsx(o,{content:"Success tooltip",color:"success",children:e.jsx(r,{color:"success",children:"Success"})}),e.jsx(o,{content:"Warning tooltip",color:"warning",children:e.jsx(r,{color:"warning",children:"Warning"})}),e.jsx(o,{content:"Danger tooltip",color:"danger",children:e.jsx(r,{color:"danger",children:"Danger"})}),e.jsx(o,{content:"Info tooltip",color:"info",children:e.jsx(r,{color:"info",children:"Info"})}),e.jsx(o,{content:"Secondary tooltip",color:"secondary",children:e.jsx(r,{color:"secondary",children:"Secondary"})})]})},R={render:n=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(o,{content:"Información adicional sobre este elemento",children:e.jsx(O,{size:24,style:{color:"#3b82f6",cursor:"pointer"}})}),e.jsx(o,{content:"¿Necesitas ayuda? Haz click para más detalles",trigger:"click",children:e.jsx(Je,{size:24,style:{color:"#8b5cf6",cursor:"pointer"}})}),e.jsx(o,{content:"¡Advertencia! Procede con cuidado",color:"warning",children:e.jsx(V,{size:24,style:{color:"#f59e0b",cursor:"pointer"}})}),e.jsx(o,{content:"Operación completada exitosamente",color:"success",children:e.jsx(Ae,{size:24,style:{color:"#10b981",cursor:"pointer"}})}),e.jsx(o,{content:"Cerrar o cancelar acción",color:"danger",children:e.jsx(Ze,{size:24,style:{color:"#ef4444",cursor:"pointer"}})}),e.jsx(o,{content:"¡Me gusta este contenido!",color:"danger",placement:"bottom",children:e.jsx(eo,{size:24,style:{color:"#ec4899",cursor:"pointer"}})})]})},S={render:n=>e.jsxs("div",{style:{display:"flex",gap:"2rem",justifyContent:"center"},children:[e.jsx(o,{content:"Este es un tooltip con contenido más largo que demuestra cómo se adapta el componente cuando el texto es extenso",maxWidth:"200px",children:e.jsx(r,{children:"Contenido largo"})}),e.jsx(o,{content:"Tooltip con contenido muy extenso que incluye múltiples líneas de texto para demostrar el comportamiento del word-wrap y el max-width del componente",maxWidth:"300px",placement:"bottom",children:e.jsx(r,{children:"Contenido muy largo"})})]})},E={render:n=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{content:"Tooltip con flecha",arrow:!0,children:e.jsx(r,{variant:"outline",children:"Con flecha"})}),e.jsx(o,{content:"Tooltip sin flecha",arrow:!1,children:e.jsx(r,{variant:"outline",children:"Sin flecha"})})]})},W={render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{content:"Información sobre este input",children:e.jsx("input",{type:"text",placeholder:"Input con tooltip",style:{padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"}})}),e.jsx(o,{content:"Selecciona una opción",placement:"bottom",children:e.jsxs("select",{style:{padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"},children:[e.jsx("option",{children:"Opción 1"}),e.jsx("option",{children:"Opción 2"}),e.jsx("option",{children:"Opción 3"})]})})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(o,{content:"Marca esta casilla para aceptar",children:e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox"}),"Acepto términos"]})}),e.jsx(o,{content:"Texto con información adicional",placement:"right",children:e.jsx("span",{style:{textDecoration:"underline",cursor:"help"},children:"Texto con tooltip"})})]})]})},q={render:n=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{content:"Sin delay",delay:0,children:e.jsx(r,{variant:"outline",children:"Inmediato"})}),e.jsx(o,{content:"Delay normal",delay:200,children:e.jsx(r,{variant:"outline",children:"Normal (200ms)"})}),e.jsx(o,{content:"Delay largo",delay:500,children:e.jsx(r,{variant:"outline",children:"Lento (500ms)"})})]})},D={render:n=>e.jsxs("div",{style:{width:"400px",padding:"2rem",border:"1px solid #e2e8f0",borderRadius:"8px",backgroundColor:"white"},children:[e.jsx("h3",{style:{marginTop:0},children:"Formulario de registro"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:["Nombre completo",e.jsx(o,{content:"Ingresa tu nombre y apellido",children:e.jsx(O,{size:16,style:{color:"#6b7280",cursor:"help"}})})]}),e.jsx("input",{type:"text",style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"}})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:["Email",e.jsx(o,{content:"Utilizaremos este email para enviarte confirmaciones",placement:"right",children:e.jsx(O,{size:16,style:{color:"#6b7280",cursor:"help"}})})]}),e.jsx("input",{type:"email",style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"}})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"},children:["Contraseña",e.jsx(o,{content:"La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números",maxWidth:"250px",color:"warning",children:e.jsx(V,{size:16,style:{color:"#f59e0b",cursor:"help"}})})]}),e.jsx("input",{type:"password",style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"}})]}),e.jsx("div",{style:{marginTop:"1rem"},children:e.jsx(o,{content:"Al registarte, aceptas nuestros términos y condiciones",placement:"top",children:e.jsx(r,{style:{width:"100%"},children:"Registrarse"})})})]})]})},P={render:n=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{content:"Este tooltip está habilitado",disabled:!1,children:e.jsx(r,{children:"Tooltip habilitado"})}),e.jsx(o,{content:"Este tooltip está deshabilitado",disabled:!0,children:e.jsx(r,{variant:"outline",children:"Tooltip deshabilitado"})})]})},A={name:"Debug - Centrado",render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4rem",padding:"4rem",backgroundColor:"#f8fafc",borderRadius:"8px"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0",color:"#374151"},children:"Debug de Centrado"}),e.jsx("p",{style:{margin:0,color:"#6b7280"},children:"Los tooltips deben aparecer perfectamente centrados"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"3rem",alignItems:"center",justifyItems:"center",padding:"2rem",backgroundColor:"white",borderRadius:"8px",border:"1px solid #e2e8f0",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:0,right:0,height:"1px",backgroundColor:"#e2e8f0",zIndex:0}}),e.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:"50%",width:"1px",backgroundColor:"#e2e8f0",zIndex:0}}),e.jsx(o,{content:"Icono info",color:"info",placement:"top",children:e.jsx("div",{style:{width:"20px",height:"20px",backgroundColor:"#0ea5e9",borderRadius:"50%",cursor:"pointer",position:"relative",zIndex:1}})}),e.jsx(o,{content:"Icono warning",color:"warning",placement:"top",children:e.jsx("div",{style:{width:"16px",height:"16px",backgroundColor:"#f59e0b",borderRadius:"50%",cursor:"pointer",position:"relative",zIndex:1}})}),e.jsx(o,{content:"Botón centrado",color:"primary",placement:"top",children:e.jsx("button",{style:{padding:"0.5rem 1rem",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",position:"relative",zIndex:1},children:"Centro"})}),e.jsx(o,{content:"Elemento ancho",color:"success",placement:"top",children:e.jsx("div",{style:{width:"80px",height:"30px",backgroundColor:"#10b981",borderRadius:"4px",cursor:"pointer",position:"relative",zIndex:1}})}),e.jsx(o,{content:"Muy pequeño",color:"danger",placement:"top",children:e.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#ef4444",borderRadius:"50%",cursor:"pointer",position:"relative",zIndex:1}})})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"4rem",alignItems:"center",justifyItems:"center",padding:"3rem",backgroundColor:"white",borderRadius:"8px",border:"1px solid #e2e8f0"},children:[e.jsx("div",{}),e.jsx(o,{content:"Top",placement:"top",color:"blue",children:e.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:"#3b82f6",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"0.75rem",fontWeight:"bold"},children:"T"})}),e.jsx("div",{}),e.jsx(o,{content:"Left",placement:"left",color:"purple",children:e.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:"#8b5cf6",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"0.75rem",fontWeight:"bold"},children:"L"})}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx("span",{style:{fontSize:"0.875rem",color:"#6b7280"},children:"Centro"})}),e.jsx(o,{content:"Right",placement:"right",color:"pink",children:e.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:"#ec4899",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"0.75rem",fontWeight:"bold"},children:"R"})}),e.jsx("div",{}),e.jsx(o,{content:"Bottom",placement:"bottom",color:"green",children:e.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:"#22c55e",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"0.75rem",fontWeight:"bold"},children:"B"})}),e.jsx("div",{})]})]})},L={name:"Mejoras - Centrado y Espaciado",render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem",padding:"3rem",backgroundColor:"#f8fafc",borderRadius:"8px"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h3",{style:{margin:"0 0 1rem 0",color:"#374151"},children:"Problemas Solucionados"}),e.jsx("p",{style:{margin:0,color:"#6b7280"},children:"✅ Flecha del mismo color | ✅ Centrado perfecto | ✅ Espaciado adecuado"})]}),e.jsxs("div",{style:{display:"flex",gap:"2rem",justifyContent:"center",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{margin:"0 0 1rem 0",fontSize:"0.875rem",color:"#6b7280"},children:"Iconos pequeños"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{content:"Información adicional",color:"info",children:e.jsx(O,{size:20,style:{color:"#0ea5e9",cursor:"pointer"}})}),e.jsx(o,{content:"Advertencia importante",color:"warning",placement:"bottom",children:e.jsx(V,{size:16,style:{color:"#f59e0b",cursor:"pointer"}})}),e.jsx(o,{content:"Operación exitosa",color:"success",placement:"right",children:e.jsx(Ae,{size:18,style:{color:"#10b981",cursor:"pointer"}})})]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{margin:"0 0 1rem 0",fontSize:"0.875rem",color:"#6b7280"},children:"Botones grandes"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(o,{content:"Botón primario con tooltip centrado",color:"primary",children:e.jsx(r,{size:"lg",children:"Grande"})}),e.jsx(o,{content:"Botón secundario",color:"secondary",placement:"bottom",children:e.jsx(r,{variant:"outline",size:"lg",children:"Outline"})})]})]})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{margin:"0 0 2rem 0",fontSize:"0.875rem",color:"#6b7280"},children:"Todos los colores con flechas del mismo color"}),e.jsx("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[{color:"primary",label:"Primary"},{color:"success",label:"Success"},{color:"warning",label:"Warning"},{color:"danger",label:"Danger"},{color:"info",label:"Info"},{color:"secondary",label:"Secondary"}].map(({color:j,label:m})=>e.jsx(o,{content:`Tooltip ${m} con flecha del mismo color`,color:j,placement:"top",children:e.jsx("div",{style:{padding:"0.5rem 1rem",borderRadius:"6px",backgroundColor:`var(--q-color-${j}, #6b7280)`,color:"white",cursor:"pointer",fontSize:"0.875rem",fontWeight:"500"},children:m})},j))})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:"2rem",alignItems:"center",padding:"2rem",backgroundColor:"white",borderRadius:"8px",border:"1px solid #e2e8f0"},children:[e.jsx(o,{content:"Espaciado perfecto izquierda",placement:"left",color:"purple",children:e.jsx(r,{variant:"outline",children:"Left"})}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{content:"Centrado vertical y horizontal perfecto",placement:"top",color:"emerald",children:e.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",backgroundColor:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer",fontWeight:"bold"},children:"✓"})}),e.jsx("p",{style:{margin:"1rem 0 0 0",fontSize:"0.75rem",color:"#6b7280"},children:"Elemento circular"})]}),e.jsx(o,{content:"Espaciado perfecto derecha",placement:"right",color:"pink",children:e.jsx(r,{variant:"outline",children:"Right"})})]})]})};var K,J,Z;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    content: 'Este es un tooltip básico',
    placement: 'top',
    children: <Button>Hover me</Button>
  }
}`,...(Z=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var ee,oe,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    padding: '3rem',
    alignItems: 'center',
    justifyItems: 'center'
  }}>\r
      <div></div>\r
      <Tooltip content="Tooltip arriba" placement="top">\r
        <Button>Top</Button>\r
      </Tooltip>\r
      <div></div>\r
      \r
      <Tooltip content="Tooltip izquierda" placement="left">\r
        <Button>Left</Button>\r
      </Tooltip>\r
      \r
      <div style={{
      textAlign: 'center',
      color: '#666'
    }}>\r
        Hover en cualquier botón\r
      </div>\r
      \r
      <Tooltip content="Tooltip derecha" placement="right">\r
        <Button>Right</Button>\r
      </Tooltip>\r
      \r
      <div></div>\r
      <Tooltip content="Tooltip abajo" placement="bottom">\r
        <Button>Bottom</Button>\r
      </Tooltip>\r
      <div></div>\r
    </div>
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ie,ne;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <Tooltip content="Aparece al hacer hover" trigger="hover">\r
        <Button variant="outline">Hover</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Aparece al hacer click" trigger="click">\r
        <Button variant="outline">Click</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Aparece al hacer focus" trigger="focus">\r
        <button style={{
        padding: '0.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        background: 'white',
        cursor: 'pointer'
      }}>\r
          Focus (Tab)\r
        </button>\r
      </Tooltip>\r
    </div>
}`,...(ne=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var le,se,ae;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <Tooltip content="Primary tooltip" color="primary">\r
        <Button color="primary">Primary</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Success tooltip" color="success">\r
        <Button color="success">Success</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Warning tooltip" color="warning">\r
        <Button color="warning">Warning</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Danger tooltip" color="danger">\r
        <Button color="danger">Danger</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Info tooltip" color="info">\r
        <Button color="info">Info</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Secondary tooltip" color="secondary">\r
        <Button color="secondary">Secondary</Button>\r
      </Tooltip>\r
    </div>
}`,...(ae=(se=z.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ce,de,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Tooltip content="Información adicional sobre este elemento">\r
        <PiInfo size={24} style={{
        color: '#3b82f6',
        cursor: 'pointer'
      }} />\r
      </Tooltip>\r
      \r
      <Tooltip content="¿Necesitas ayuda? Haz click para más detalles" trigger="click">\r
        <PiQuestion size={24} style={{
        color: '#8b5cf6',
        cursor: 'pointer'
      }} />\r
      </Tooltip>\r
      \r
      <Tooltip content="¡Advertencia! Procede con cuidado" color="warning">\r
        <PiWarning size={24} style={{
        color: '#f59e0b',
        cursor: 'pointer'
      }} />\r
      </Tooltip>\r
      \r
      <Tooltip content="Operación completada exitosamente" color="success">\r
        <PiCheck size={24} style={{
        color: '#10b981',
        cursor: 'pointer'
      }} />\r
      </Tooltip>\r
      \r
      <Tooltip content="Cerrar o cancelar acción" color="danger">\r
        <PiX size={24} style={{
        color: '#ef4444',
        cursor: 'pointer'
      }} />\r
      </Tooltip>\r
      \r
      <Tooltip content="¡Me gusta este contenido!" color="danger" placement="bottom">\r
        <PiHeart size={24} style={{
        color: '#ec4899',
        cursor: 'pointer'
      }} />\r
      </Tooltip>\r
    </div>
}`,...(pe=(de=R.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,xe;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center'
  }}>\r
      <Tooltip content="Este es un tooltip con contenido más largo que demuestra cómo se adapta el componente cuando el texto es extenso" maxWidth="200px">\r
        <Button>Contenido largo</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Tooltip con contenido muy extenso que incluye múltiples líneas de texto para demostrar el comportamiento del word-wrap y el max-width del componente" maxWidth="300px" placement="bottom">\r
        <Button>Contenido muy largo</Button>\r
      </Tooltip>\r
    </div>
}`,...(xe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var ge,he,fe;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
      <Tooltip content="Tooltip con flecha" arrow={true}>\r
        <Button variant="outline">Con flecha</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Tooltip sin flecha" arrow={false}>\r
        <Button variant="outline">Sin flecha</Button>\r
      </Tooltip>\r
    </div>
}`,...(fe=(he=E.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ye,be,ve;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '1rem'
    }}>\r
        <Tooltip content="Información sobre este input">\r
          <input type="text" placeholder="Input con tooltip" style={{
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }} />\r
        </Tooltip>\r
        \r
        <Tooltip content="Selecciona una opción" placement="bottom">\r
          <select style={{
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}>\r
            <option>Opción 1</option>\r
            <option>Opción 2</option>\r
            <option>Opción 3</option>\r
          </select>\r
        </Tooltip>\r
      </div>\r
      \r
      <div style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
        <Tooltip content="Marca esta casilla para aceptar">\r
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer'
        }}>\r
            <input type="checkbox" />\r
            Acepto términos\r
          </label>\r
        </Tooltip>\r
        \r
        <Tooltip content="Texto con información adicional" placement="right">\r
          <span style={{
          textDecoration: 'underline',
          cursor: 'help'
        }}>\r
            Texto con tooltip\r
          </span>\r
        </Tooltip>\r
      </div>\r
    </div>
}`,...(ve=(be=W.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var je,Te,we;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
      <Tooltip content="Sin delay" delay={0}>\r
        <Button variant="outline">Inmediato</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Delay normal" delay={200}>\r
        <Button variant="outline">Normal (200ms)</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Delay largo" delay={500}>\r
        <Button variant="outline">Lento (500ms)</Button>\r
      </Tooltip>\r
    </div>
}`,...(we=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Ce,Ie,ke;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '400px',
    padding: '2rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white'
  }}>\r
      <h3 style={{
      marginTop: 0
    }}>Formulario de registro</h3>\r
      \r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>\r
        <div>\r
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.5rem'
        }}>\r
            Nombre completo\r
            <Tooltip content="Ingresa tu nombre y apellido">\r
              <PiInfo size={16} style={{
              color: '#6b7280',
              cursor: 'help'
            }} />\r
            </Tooltip>\r
          </label>\r
          <input type="text" style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }} />\r
        </div>\r
        \r
        <div>\r
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.5rem'
        }}>\r
            Email\r
            <Tooltip content="Utilizaremos este email para enviarte confirmaciones" placement="right">\r
              <PiInfo size={16} style={{
              color: '#6b7280',
              cursor: 'help'
            }} />\r
            </Tooltip>\r
          </label>\r
          <input type="email" style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }} />\r
        </div>\r
        \r
        <div>\r
          <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.5rem'
        }}>\r
            Contraseña\r
            <Tooltip content="La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y números" maxWidth="250px" color="warning">\r
              <PiWarning size={16} style={{
              color: '#f59e0b',
              cursor: 'help'
            }} />\r
            </Tooltip>\r
          </label>\r
          <input type="password" style={{
          width: '100%',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }} />\r
        </div>\r
        \r
        <div style={{
        marginTop: '1rem'
      }}>\r
          <Tooltip content="Al registarte, aceptas nuestros términos y condiciones" placement="top">\r
            <Button style={{
            width: '100%'
          }}>\r
              Registrarse\r
            </Button>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </div>
}`,...(ke=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Be,ze,Re;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
      <Tooltip content="Este tooltip está habilitado" disabled={false}>\r
        <Button>Tooltip habilitado</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Este tooltip está deshabilitado" disabled={true}>\r
        <Button variant="outline">Tooltip deshabilitado</Button>\r
      </Tooltip>\r
    </div>
}`,...(Re=(ze=P.parameters)==null?void 0:ze.docs)==null?void 0:Re.source}}};var Se,Ee,We;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Debug - Centrado',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    padding: '4rem',
    backgroundColor: '#f8fafc',
    borderRadius: '8px'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <h3 style={{
        margin: '0 0 1rem 0',
        color: '#374151'
      }}>Debug de Centrado</h3>\r
        <p style={{
        margin: 0,
        color: '#6b7280'
      }}>Los tooltips deben aparecer perfectamente centrados</p>\r
      </div>\r
      \r
      {/* Grid de prueba con guías visuales */}\r
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '3rem',
      alignItems: 'center',
      justifyItems: 'center',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      position: 'relative'
    }}>\r
        {/* Líneas de guía */}\r
        <div style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: '#e2e8f0',
        zIndex: 0
      }} />\r
        \r
        <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '50%',
        width: '1px',
        backgroundColor: '#e2e8f0',
        zIndex: 0
      }} />\r
        \r
        {/* Iconos pequeños */}\r
        <Tooltip content="Icono info" color="info" placement="top">\r
          <div style={{
          width: '20px',
          height: '20px',
          backgroundColor: '#0ea5e9',
          borderRadius: '50%',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 1
        }} />\r
        </Tooltip>\r
        \r
        <Tooltip content="Icono warning" color="warning" placement="top">\r
          <div style={{
          width: '16px',
          height: '16px',
          backgroundColor: '#f59e0b',
          borderRadius: '50%',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 1
        }} />\r
        </Tooltip>\r
        \r
        {/* Botón centro */}\r
        <Tooltip content="Botón centrado" color="primary" placement="top">\r
          <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 1
        }}>\r
            Centro\r
          </button>\r
        </Tooltip>\r
        \r
        {/* Elemento rectangular */}\r
        <Tooltip content="Elemento ancho" color="success" placement="top">\r
          <div style={{
          width: '80px',
          height: '30px',
          backgroundColor: '#10b981',
          borderRadius: '4px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 1
        }} />\r
        </Tooltip>\r
        \r
        {/* Elemento muy pequeño */}\r
        <Tooltip content="Muy pequeño" color="danger" placement="top">\r
          <div style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#ef4444',
          borderRadius: '50%',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 1
        }} />\r
        </Tooltip>\r
      </div>\r
      \r
      {/* Prueba con todas las direcciones */}\r
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '4rem',
      alignItems: 'center',
      justifyItems: 'center',
      padding: '3rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    }}>\r
        <div></div>\r
        <Tooltip content="Top" placement="top" color="blue">\r
          <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#3b82f6',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}>\r
            T\r
          </div>\r
        </Tooltip>\r
        <div></div>\r
        \r
        <Tooltip content="Left" placement="left" color="purple">\r
          <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#8b5cf6',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}>\r
            L\r
          </div>\r
        </Tooltip>\r
        \r
        <div style={{
        textAlign: 'center'
      }}>\r
          <span style={{
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>Centro</span>\r
        </div>\r
        \r
        <Tooltip content="Right" placement="right" color="pink">\r
          <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#ec4899',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}>\r
            R\r
          </div>\r
        </Tooltip>\r
        \r
        <div></div>\r
        <Tooltip content="Bottom" placement="bottom" color="green">\r
          <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#22c55e',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}>\r
            B\r
          </div>\r
        </Tooltip>\r
        <div></div>\r
      </div>\r
    </div>
}`,...(We=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:We.source}}};var qe,De,Pe;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Mejoras - Centrado y Espaciado',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    padding: '3rem',
    backgroundColor: '#f8fafc',
    borderRadius: '8px'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <h3 style={{
        margin: '0 0 1rem 0',
        color: '#374151'
      }}>Problemas Solucionados</h3>\r
        <p style={{
        margin: 0,
        color: '#6b7280'
      }}>✅ Flecha del mismo color | ✅ Centrado perfecto | ✅ Espaciado adecuado</p>\r
      </div>\r
      \r
      {/* Iconos pequeños para probar centrado */}\r
      <div style={{
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      alignItems: 'center'
    }}>\r
        <div style={{
        textAlign: 'center'
      }}>\r
          <p style={{
          margin: '0 0 1rem 0',
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>Iconos pequeños</p>\r
          <div style={{
          display: 'flex',
          gap: '1rem'
        }}>\r
            <Tooltip content="Información adicional" color="info">\r
              <PiInfo size={20} style={{
              color: '#0ea5e9',
              cursor: 'pointer'
            }} />\r
            </Tooltip>\r
            \r
            <Tooltip content="Advertencia importante" color="warning" placement="bottom">\r
              <PiWarning size={16} style={{
              color: '#f59e0b',
              cursor: 'pointer'
            }} />\r
            </Tooltip>\r
            \r
            <Tooltip content="Operación exitosa" color="success" placement="right">\r
              <PiCheck size={18} style={{
              color: '#10b981',
              cursor: 'pointer'
            }} />\r
            </Tooltip>\r
          </div>\r
        </div>\r
        \r
        <div style={{
        textAlign: 'center'
      }}>\r
          <p style={{
          margin: '0 0 1rem 0',
          fontSize: '0.875rem',
          color: '#6b7280'
        }}>Botones grandes</p>\r
          <div style={{
          display: 'flex',
          gap: '1rem'
        }}>\r
            <Tooltip content="Botón primario con tooltip centrado" color="primary">\r
              <Button size="lg">Grande</Button>\r
            </Tooltip>\r
            \r
            <Tooltip content="Botón secundario" color="secondary" placement="bottom">\r
              <Button variant="outline" size="lg">Outline</Button>\r
            </Tooltip>\r
          </div>\r
        </div>\r
      </div>\r
      \r
      {/* Demostración de colores con flechas */}\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <p style={{
        margin: '0 0 2rem 0',
        fontSize: '0.875rem',
        color: '#6b7280'
      }}>Todos los colores con flechas del mismo color</p>\r
        <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>\r
          {[{
          color: 'primary',
          label: 'Primary'
        }, {
          color: 'success',
          label: 'Success'
        }, {
          color: 'warning',
          label: 'Warning'
        }, {
          color: 'danger',
          label: 'Danger'
        }, {
          color: 'info',
          label: 'Info'
        }, {
          color: 'secondary',
          label: 'Secondary'
        }].map(({
          color,
          label
        }) => <Tooltip key={color} content={\`Tooltip \${label} con flecha del mismo color\`} color={color} placement="top">\r
              <div style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            backgroundColor: \`var(--q-color-\${color}, #6b7280)\`,
            color: 'white',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>\r
                {label}\r
              </div>\r
            </Tooltip>)}\r
        </div>\r
      </div>\r
      \r
      {/* Espaciado y posicionamiento */}\r
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: '2rem',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    }}>\r
        <Tooltip content="Espaciado perfecto izquierda" placement="left" color="purple">\r
          <Button variant="outline">Left</Button>\r
        </Tooltip>\r
        \r
        <div style={{
        textAlign: 'center'
      }}>\r
          <Tooltip content="Centrado vertical y horizontal perfecto" placement="top" color="emerald">\r
            <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>\r
              ✓\r
            </div>\r
          </Tooltip>\r
          <p style={{
          margin: '1rem 0 0 0',
          fontSize: '0.75rem',
          color: '#6b7280'
        }}>Elemento circular</p>\r
        </div>\r
        \r
        <Tooltip content="Espaciado perfecto derecha" placement="right" color="pink">\r
          <Button variant="outline">Right</Button>\r
        </Tooltip>\r
      </div>\r
    </div>
}`,...(Pe=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};const xo=["Default","Placements","Triggers","Colors","WithIcons","LongContent","WithoutArrow","InteractiveElements","DelayVariations","InForm","Disabled","CenteringDebug","ImprovementsDemo"];export{A as CenteringDebug,z as Colors,I as Default,q as DelayVariations,P as Disabled,L as ImprovementsDemo,D as InForm,W as InteractiveElements,S as LongContent,k as Placements,B as Triggers,R as WithIcons,E as WithoutArrow,xo as __namedExportsOrder,uo as default};
