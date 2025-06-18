import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BZISi7jw.js";import{d as C}from"./index-KKouTENB.js";import{B as l}from"./Button-kmOhRj6m.js";import{u as v}from"./useThemeMode-8InCWCg3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";import"./Spinner-DKwzja_x.js";import"./index-Co38GRlK.js";const h=s.createContext();function M({children:n,open:o,onOpenChange:t}){const[g,p]=s.useState(!1),a={isOpen:o!==void 0?o:g,setIsOpen:i=>{t?t(i):p(i)}};return s.useEffect(()=>{const i=u=>{u.key==="Escape"&&a.setIsOpen(!1)},c=u=>{u.target.classList.contains("q-modal-overlay")&&a.setIsOpen(!1)},d=u=>{u.target.getAttribute("data-close")!==null&&a.setIsOpen(!1)};return document.addEventListener("keydown",i),document.addEventListener("click",c),document.addEventListener("click",d),()=>{document.removeEventListener("keydown",i),document.removeEventListener("click",c),document.removeEventListener("click",d)}},[a]),e.jsx(h.Provider,{value:a,children:e.jsx("div",{className:"q-modal-root",children:n})})}function T({children:n}){const{isOpen:o,setIsOpen:t}=s.useContext(h);return e.jsx("div",{className:"q-modal-trigger",onClick:()=>t(!o),children:n})}function O({children:n,title:o}){const{isOpen:t,setIsOpen:g}=s.useContext(h),[p,a]=s.useState(!1),[i,c]=s.useState(!1);return s.useEffect(()=>{if(t){c(!0);const d=setTimeout(()=>a(!0),10);return()=>clearTimeout(d)}else{a(!1);const d=setTimeout(()=>c(!1),200);return()=>clearTimeout(d)}},[t]),i?e.jsx("div",{className:`q-modal-overlay ${p?"q-modal-overlay-open":""}`,children:e.jsxs("div",{className:`q-modal-content ${p?"q-modal-content-open":""}`,style:{width:"500px"},children:[e.jsxs("div",{className:"q-modal-header",children:[o&&e.jsx("span",{children:o}),e.jsx(l,{className:"q-modal-close",radius:"full",variant:"ghost",color:"secondary",onClick:()=>g(!1),children:e.jsx(C,{size:20})})]}),e.jsx("div",{className:"q-modal-content-body",children:n})]})}):null}function k({children:n}){return e.jsx("div",{className:"q-modal-footer",children:n})}const r={Root:M,Trigger:T,Content:O,Footer:k},w={title:"Components/Modal",component:r},m=()=>{const{toggleTheme:n}=v(),[o,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:n,children:"cambiar"}),e.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",height:"150vh"},children:[e.jsxs(r.Root,{children:[e.jsx(r.Trigger,{children:e.jsx(l,{children:"Abri modal"})}),e.jsxs(r.Content,{title:"Title super mega largo tan ",children:[e.jsx("p",{children:"Modal Content"}),e.jsxs(r.Footer,{children:[e.jsx(l,{"data-close":!0,children:"Cerrar"}),e.jsx(l,{children:"Accion"})]})]})]}),e.jsx(l,{onClick:()=>t(!0),children:"Abrir modal no trigger"}),e.jsxs(r.Root,{open:o,onOpenChange:t,children:[e.jsx(r.Trigger,{children:e.jsx(l,{children:"Abri modal owo"})}),e.jsxs(r.Content,{title:"Title super mega largo tan ",children:[e.jsx("p",{children:"Modal Content"}),e.jsxs(r.Footer,{children:[e.jsx(l,{onClick:()=>t(!1),children:"Cerrar"}),e.jsx(l,{children:"Accion"})]})]})]})]})]})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};var x,f,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const [open, setOpen] = useState(false);
  return <>\r
            <button onClick={toggleTheme}>cambiar</button>\r
            <div style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      height: "150vh"
    }}>\r
                <Modal.Root>\r
                    <Modal.Trigger>\r
                        <Button>Abri modal</Button>\r
                    </Modal.Trigger>\r
                    <Modal.Content title="Title super mega largo tan ">\r
                        <p>Modal Content</p>\r
                        <Modal.Footer>\r
                            <Button data-close>Cerrar</Button>\r
                            <Button>Accion</Button>\r
                        </Modal.Footer>\r
                    </Modal.Content>\r
                </Modal.Root>\r
\r
\r
                <Button onClick={() => setOpen(true)}>Abrir modal no trigger</Button>\r
\r
\r
                <Modal.Root open={open} onOpenChange={setOpen}>\r
                    <Modal.Trigger>\r
                        <Button>Abri modal owo</Button>\r
                    </Modal.Trigger>\r
                    <Modal.Content title="Title super mega largo tan ">\r
                        <p>Modal Content</p>\r
                        <Modal.Footer>\r
                            <Button onClick={() => setOpen(false)}>Cerrar</Button>\r
                            <Button>Accion</Button>\r
                        </Modal.Footer>\r
                    </Modal.Content>\r
                </Modal.Root>\r
            </div>\r
        </>;
}`,...(j=(f=m.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const F=["Default"];export{m as Default,F as __namedExportsOrder,w as default};
