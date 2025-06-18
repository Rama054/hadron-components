import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-BZISi7jw.js";import{B as P}from"./Badge-D5c-vvXp.js";import{G as g}from"./iconBase-BcoVWJ97.js";import{y as ke}from"./index-KKouTENB.js";import{I as Me}from"./Input-EG79Y93F.js";import{P as Pe}from"./Paginator-BGz3D5vn.js";import{B as j}from"./Button-kmOhRj6m.js";import{C as $}from"./Checkbox-DI5489kg.js";import{u as f}from"./useThemeMode-8InCWCg3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./Spinner-DKwzja_x.js";import"./index-BngtbI9A.js";function Re(a){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"},child:[]},{tag:"path",attr:{d:"M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"},child:[]}]})(a)}function Ee(a){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 16h2V7h3l-4-5-4 5h3z"},child:[]},{tag:"path",attr:{d:"M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2z"},child:[]}]})(a)}function Ie(a){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"},child:[]}]})(a)}function Ne(a){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z"},child:[]}]})(a)}function Ae(a){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m6 20 4-4H7V4H5v12H2zm5-12h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5z"},child:[]}]})(a)}function Ue(a){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4 2 8h3z"},child:[]}]})(a)}function He(a){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"},child:[]}]})(a)}function We(a){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"},child:[]},{tag:"path",attr:{d:"M9 10h2v8H9zm4 0h2v8h-2z"},child:[]}]})(a)}function p({headerButtons:a,noDataMessage:c,data:o,paginator:d=!1,rows:l,rowClick:n,filterPlaceholder:u,columns:R,selectedRows:b,height:be,title:ve="Tabla de datos",filter:ye=!1}){const[I,je]=m.useState(""),[v,W]=m.useState(null),[h,V]=m.useState(null),[N,q]=m.useState([]),[F,Se]=m.useState(!1),Te=()=>{const t=!F;Se(t),t?b.current=new Set(["ALL"]):b.current.clear(),q(t?o.map(r=>r.id):[])},ze=t=>{const r=new Set(N);r.has(t)?(r.delete(t),b.current.delete(t)):(r.add(t),b.current.add(t)),q(Array.from(r))},E=(t,r)=>r.split(".").reduce((s,i)=>s==null?void 0:s[i],t)||"-",Ce=t=>{v===t?(V(h==="asc"?"desc":h==="desc"?null:"asc"),h==="desc"&&W(null)):(W(t),V("asc"))},A=m.useMemo(()=>o.filter(t=>R.some(r=>(r.searchFields||[r.field]).some(i=>{const H=E(t,i);return H==null?void 0:H.toString().toLowerCase().includes(I.toLowerCase())}))),[I,o]),_=m.useMemo(()=>!v||!h?A:[...A].sort((t,r)=>{const s=E(t,v),i=E(r,v);return typeof s=="number"&&typeof i=="number"?h==="asc"?s-i:i-s:h==="asc"?s.toString().localeCompare(i.toString()):i.toString().localeCompare(s.toString())}),[A,v,h]),[U,Be]=m.useState(1),we=t=>{Be(t)},De=(t,r)=>{t.target.dataset.role==="checkbox"||t.target.parentElement.dataset.role==="checkbox"||n&&n(r)};return e.jsxs("div",{className:"q-datatable",children:[e.jsxs("div",{className:"q-datatable-header",children:[e.jsxs("div",{className:"q-datatable-title",children:[e.jsx("span",{children:ve}),e.jsx(P,{color:"primary",content:o.length,variant:"soft"})]}),e.jsxs("div",{className:"q-datatable-actions",children:[ye&&e.jsx(Me,{placeholder:u,value:I,onChange:t=>je(t.target.value),appendIcon:e.jsx(ke,{size:16})}),a&&a]})]}),e.jsx("div",{className:"q-datatable-body",style:{maxHeight:be},children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[b&&e.jsx("th",{className:"q-datatable-checkbox-column",children:e.jsx($,{label:"",checked:F,onChange:Te,size:"sm",color:"primary"})}),R.map(({field:t,header:r,sorteable:s})=>e.jsx("th",{className:v===t?"sortActive":void 0,style:{cursor:s?"pointer":"default"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"5px"},children:[e.jsx("span",{children:r}),s&&e.jsx(j,{onClick:()=>s&&Ce(t),variant:"ghost",color:"azure",children:v===t?h==="asc"?e.jsx(Ue,{size:16}):e.jsx(Ae,{size:16}):e.jsx(He,{size:16})})]})},t))]})}),e.jsx("tbody",{children:(()=>{const t=d?_.slice((U-1)*l,U*l):_;return t.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:R.length+(b?1:0),style:{textAlign:"center",padding:"10px"},children:c||"No hay datos para mostrar"})}):t.map((r,s)=>e.jsxs("tr",{style:{cursor:n?"pointer":"default"},onClick:i=>n&&De(i,r),className:N.includes(r.id)?"selected":void 0,children:[b&&e.jsx("td",{className:"q-datatable-checkbox-column","data-role":"checkbox",children:e.jsx($,{label:"",checked:N.includes(r.id),onChange:()=>ze(r.id),size:"sm",color:"primary"})}),R.map(i=>e.jsx("td",{children:i.body?i.body(r):E(r,i.field)},i.field))]},s))})()})]})}),e.jsx("div",{className:"q-datatable-footer",children:d&&e.jsx(Pe,{currentPage:U,maxVisible:7,totalPages:Math.ceil([...o].length/l),onPageChange:we})})]})}p.__docgenInfo={description:"",methods:[],displayName:"Datatable",props:{paginator:{defaultValue:{value:"false",computed:!1},required:!1},title:{defaultValue:{value:'"Tabla de datos"',computed:!1},required:!1},filter:{defaultValue:{value:"false",computed:!1},required:!1}}};const x=[{id:1,nombre:"Juan",apellido:"Pérez",email:"juan.perez@hotmail.com",telefono:"+54 9 11 2345-6789",status:"activo",empresa:{nombre:"TechCorp"}},{id:2,nombre:"María",apellido:"González",email:"maria.gonzalez@example.com",telefono:"+54 9 11 9876-5432",status:"inactivo",empresa:{nombre:"SoftSolutions"}},{id:3,nombre:"Carlos",apellido:"Ramírez",email:"carlos.ramirez@example.com",telefono:"+34 600 123 456",status:"activo",empresa:{nombre:"Innovatech"}},{id:4,nombre:"Laura",apellido:"Fernández",email:"laura.fernandez@example.com",telefono:"+1 305 678 9012",status:"activo",empresa:{nombre:"NextGen"}},{id:5,nombre:"Diego",apellido:"López",email:"diego.lopez@example.com",telefono:"+52 55 4321 8765",status:"inactivo",empresa:{nombre:"CyberWorks"}},{id:6,nombre:"Ana",apellido:"Martínez",email:"pepita.martinez@example.com",telefono:"+33 7 89 56 34 12",status:"activo",empresa:{nombre:"DevHub"}},{id:7,nombre:"Ricardo",apellido:"Sánchez",email:"ricardo.sanchez@example.com",telefono:"+49 151 23456789",status:"activo",empresa:{nombre:"ByteWave"}},{id:8,nombre:"Elena",apellido:"Díaz",email:"elena.diaz@example.com",telefono:"+39 320 987 6543",status:"inactivo",empresa:{nombre:"CodeLab"}},{id:9,nombre:"Roberto",apellido:"Torres",email:"roberto.torres@example.com",telefono:"+55 11 99876-5432",status:"activo",empresa:{nombre:"TechNova"}},{id:10,nombre:"Gabriela",apellido:"Hernández",email:"gabriela.hernandez@example.com",telefono:"+44 7911 123456",status:"inactivo",empresa:{nombre:"DataSync"}},{id:11,nombre:"Santiago",apellido:"Méndez",email:"santiago.mendez@example.com",telefono:"+1 415 234 5678",status:"activo",empresa:{nombre:"CloudSphere"}},{id:12,nombre:"Valeria",apellido:"Castro",email:"valeria.castro@example.com",telefono:"+34 612 345 678",status:"activo",empresa:{nombre:"NexaTech"}},{id:13,nombre:"Fernando",apellido:"Ortega",email:"fernando.ortega@example.com",telefono:"+57 320 876 5432",status:"inactivo",empresa:{nombre:"QuantumSoft"}},{id:14,nombre:"Isabel",apellido:"Morales",email:"isabel.morales@example.com",telefono:"+351 912 345 678",status:"activo",empresa:{nombre:"ByteFlow"}},{id:15,nombre:"Oscar",apellido:"Rojas",email:"oscar.rojas@example.com",telefono:"+506 7012 3456",status:"inactivo",empresa:{nombre:"MetaDev"}},{id:16,nombre:"Carla",apellido:"Jiménez",email:"carla.jimenez@example.com",telefono:"+34 689 432 123",status:"activo",empresa:{nombre:"SynergyTech"}},{id:17,nombre:"Luis",apellido:"Navarro",email:"luis.navarro@example.com",telefono:"+58 412 345 6789",status:"activo",empresa:{nombre:"ZettaSoft"}},{id:18,nombre:"Mónica",apellido:"Paredes",email:"monica.paredes@example.com",telefono:"+502 5123 4567",status:"inactivo",empresa:{nombre:"NovaCode"}},{id:19,nombre:"Esteban",apellido:"Cabrera",email:"esteban.cabrera@example.com",telefono:"+593 987 654 321",status:"activo",empresa:{nombre:"XenonWorks"}},{id:20,nombre:"Silvia",apellido:"Vargas",email:"silvia.vargas@example.com",telefono:"+54 9 261 654 9876",status:"activo",empresa:{nombre:"BitFusion"}},{id:21,nombre:"Joaquín",apellido:"Molina",email:"joaquin.molina@example.com",telefono:"+1 917 456 7890",status:"inactivo",empresa:{nombre:"DataLink"}},{id:22,nombre:"Paula",apellido:"Reyes",email:"paula.reyes@example.com",telefono:"+57 314 789 1234",status:"activo",empresa:{nombre:"CodeNet"}},{id:23,nombre:"Martín",apellido:"Suárez",email:"martin.suarez@example.com",telefono:"+56 9 7654 3210",status:"activo",empresa:{nombre:"CyberLink"}},{id:24,nombre:"Julieta",apellido:"Peña",email:"julieta.pena@example.com",telefono:"+52 998 765 4321",status:"inactivo",empresa:{nombre:"Innovex"}},{id:25,nombre:"Rodrigo",apellido:"Guzmán",email:"rodrigo.guzman@example.com",telefono:"+34 678 345 210",status:"activo",empresa:{nombre:"BlueTech"}},{id:26,nombre:"Daniela",apellido:"Ramos",email:"daniela.ramos@example.com",telefono:"+351 964 321 678",status:"activo",empresa:{nombre:"AI Solutions"}},{id:27,nombre:"Ezequiel",apellido:"Domínguez",email:"ezequiel.dominguez@example.com",telefono:"+54 9 341 765 4321",status:"inactivo",empresa:{nombre:"CloudNest"}},{id:28,nombre:"Camila",apellido:"Salazar",email:"camila.salazar@example.com",telefono:"+506 6012 3456",status:"activo",empresa:{nombre:"ByteSync"}}],ea={title:"Components/DataTable",component:p,parameters:{docs:{description:{component:`
El componente DataTable es una tabla avanzada diseñada para dashboards minimalistas. 
Ofrece funcionalidades como ordenamiento, búsqueda, paginación y selección múltiple.

### Características principales:
- **Búsqueda en tiempo real** con filtrado por múltiples campos
- **Ordenamiento** por columnas con indicadores visuales
- **Paginación** integrada con el componente Paginator
- **Selección múltiple** con checkbox y selección de todos
- **Personalización de celdas** mediante funciones de renderizado
- **Diseño responsivo** y minimalista
- **Soporte para temas** claro y oscuro

### Uso básico:
\`\`\`jsx
import DataTable from './DataTable';

const columns = [
    { field: 'name', header: 'Nombre', sorteable: true },
    { field: 'email', header: 'Email', sorteable: true },
    { field: 'status', header: 'Estado', body: (row) => <Badge>{row.status}</Badge> }
];

<DataTable 
    data={users} 
    columns={columns}
    title="Usuarios"
    filter={true}
    paginator={true}
    rows={10}
/>
\`\`\`
                `}}},argTypes:{data:{description:"Array de objetos con los datos a mostrar",control:{type:"object"}},columns:{description:"Configuración de columnas con field, header, sorteable, body y searchFields",control:{type:"object"}},title:{control:{type:"text"},description:"Título de la tabla que aparece en el header"},filter:{control:{type:"boolean"},description:"Habilita el campo de búsqueda en tiempo real"},filterPlaceholder:{control:{type:"text"},description:"Placeholder del campo de búsqueda"},paginator:{control:{type:"boolean"},description:"Habilita la paginación en la tabla"},rows:{control:{type:"number"},description:"Número de filas por página cuando la paginación está activa"},height:{control:{type:"text"},description:'Altura máxima de la tabla (ej: "500px"). Habilita scroll vertical'},selectedRows:{description:"Ref para manejar las filas seleccionadas (useRef)",control:{type:"object"}},rowClick:{description:"Función callback al hacer click en una fila",action:"clicked"},headerButtons:{description:"Componentes React para mostrar en el header (botones de acción)",control:{type:"object"}},noDataMessage:{control:{type:"text"},description:"Mensaje cuando no hay datos para mostrar"}}},y=[{searchFields:["nombre","apellido","email"],field:"nombre",header:"Nombre",sorteable:!0,body:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("span",{style:{fontWeight:"600"},children:[a.nombre," ",a.apellido]}),e.jsx("span",{style:{fontSize:"0.75rem",opacity:.7},children:a.email})]})},{field:"telefono",header:"Teléfono",sorteable:!0},{field:"status",header:"Estado",sorteable:!0,body:a=>e.jsx(P,{color:a.status==="inactivo"?"danger":"success",content:a.status,variant:"soft"})},{field:"empresa.nombre",header:"Empresa"}],S=()=>{const{toggleTheme:a}=f();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:a,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Tabla Básica"}),e.jsx(p,{data:x,columns:y,title:"Lista de Usuarios"})]})]})};S.parameters={docs:{description:{story:"Tabla básica sin funcionalidades adicionales. Muestra solo los datos con formato minimalista."}}};const T=()=>{const{toggleTheme:a}=f();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:a,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Con Búsqueda"}),e.jsx(p,{data:x,columns:y,title:"Usuarios del Sistema",filter:!0,filterPlaceholder:"Buscar por nombre, email o teléfono..."})]})]})};T.parameters={docs:{description:{story:"Tabla con búsqueda en tiempo real. Busca en múltiples campos usando `searchFields` en las columnas."}}};const z=()=>{const{toggleTheme:a}=f();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:a,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Con Paginación"}),e.jsx(p,{data:x,columns:y,title:"Usuarios Registrados",paginator:!0,rows:5,filter:!0,filterPlaceholder:"Buscar usuarios..."})]})]})};z.parameters={docs:{description:{story:"Tabla con paginación integrada. Usa el componente Paginator para navegar entre páginas."}}};const C=()=>{const{toggleTheme:a}=f(),c=m.useRef(new Set),[o,d]=m.useState(0),l=()=>{const u=Array.from(c.current);console.log("Filas seleccionadas:",u),d(u.length),alert(`${u.length} filas seleccionadas. Ver consola para detalles.`)},n=e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(j,{onClick:l,color:"primary",size:"sm",leftIcon:e.jsx(Ee,{}),children:"Exportar Seleccionados"}),o>0&&e.jsx(P,{color:"primary",content:`${o} seleccionados`})]});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:a,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Con Selección Múltiple"}),e.jsx(p,{data:x,columns:y,title:"Gestión de Usuarios",selectedRows:c,filter:!0,filterPlaceholder:"Buscar...",paginator:!0,rows:10,headerButtons:n})]})]})};C.parameters={docs:{description:{story:`Tabla con selección múltiple usando checkboxes. 
            - Usa un \`useRef\` para mantener las filas seleccionadas
            - Incluye selección de todos los elementos
            - Muestra contador de elementos seleccionados`}}};const B=()=>{const{toggleTheme:a}=f(),[c,o]=m.useState(null),d=[...y,{field:"actions",header:"Acciones",body:n=>e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx(j,{size:"sm",variant:"ghost",color:"info",onClick:u=>{u.stopPropagation(),alert(`Editar: ${n.nombre} ${n.apellido}`)},children:e.jsx(Re,{size:16})}),e.jsx(j,{size:"sm",variant:"ghost",color:"danger",onClick:u=>{u.stopPropagation(),confirm(`¿Eliminar a ${n.nombre} ${n.apellido}?`)&&alert("Usuario eliminado")},children:e.jsx(We,{size:16})})]})}],l=e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(j,{color:"primary",size:"sm",leftIcon:e.jsx(Ie,{}),children:"Nuevo Usuario"}),e.jsx(j,{variant:"outline",color:"secondary",size:"sm",leftIcon:e.jsx(Ne,{}),children:"Actualizar"})]});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:a,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Con Acciones por Fila"}),e.jsx(p,{data:x,columns:d,title:"Administración de Usuarios",filter:!0,filterPlaceholder:"Buscar usuarios...",paginator:!0,rows:8,headerButtons:l,rowClick:n=>{o(n),console.log("Fila clickeada:",n)}}),c&&e.jsxs("div",{style:{marginTop:"16px",padding:"16px",backgroundColor:"var(--hadr-selected)",borderRadius:"8px"},children:[e.jsx("strong",{children:"Usuario seleccionado:"})," ",c.nombre," ",c.apellido]})]})]})};B.parameters={docs:{description:{story:`Tabla con acciones por fila y botones en el header.
            - Botones de acción individuales por fila
            - Botones globales en el header
            - Manejo de eventos con \`rowClick\``}}};const w=()=>{const{toggleTheme:a}=f(),c=[{field:"nombre",header:"Usuario",sorteable:!0,body:o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsxs("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:"var(--hadr-color-primary-light)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"600",color:"var(--hadr-color-primary)"},children:[o.nombre.charAt(0),o.apellido.charAt(0)]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:"600"},children:[o.nombre," ",o.apellido]}),e.jsx("div",{style:{fontSize:"0.75rem",opacity:.7},children:o.email})]})]})},{field:"empresa",header:"Información de Empresa",body:o=>e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"600"},children:o.empresa.nombre}),e.jsxs("div",{style:{fontSize:"0.75rem",opacity:.7},children:[o.empresa.departamento," • ",o.empresa.cargo]})]})},{field:"metrics",header:"Métricas",body:o=>{const d=Math.floor(Math.random()*100),l=d>70?"success":d>40?"warning":"danger";return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"100px",height:"8px",backgroundColor:"var(--hadr-border-color)",borderRadius:"4px",overflow:"hidden"},children:e.jsx("div",{style:{width:`${d}%`,height:"100%",backgroundColor:`var(--hadr-color-${l})`,transition:"width 0.3s ease"}})}),e.jsxs("span",{style:{fontSize:"0.875rem",fontWeight:"600"},children:[d,"%"]})]})}},{field:"status",header:"Estado",sorteable:!0,body:o=>e.jsx(P,{color:o.status==="inactivo"?"danger":"success",content:o.status,variant:"soft"})}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:a,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Tabla Personalizada para Dashboard"}),e.jsx(p,{data:x,columns:c,title:"Panel de Empleados",filter:!0,filterPlaceholder:"Buscar empleados...",paginator:!0,rows:6,height:"600px"})]})]})};w.parameters={docs:{description:{story:`Ejemplo avanzado con estilos personalizados para dashboard.
            - Avatares con iniciales
            - Barras de progreso
            - Información jerárquica
            - Renderizado personalizado con \`body\` en columnas`}}};const D=()=>{const{toggleTheme:a}=f();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:a,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Estado Vacío"}),e.jsx(p,{data:[],columns:y,title:"Sin Resultados",filter:!0,filterPlaceholder:"Buscar...",noDataMessage:"No se encontraron usuarios en el sistema"})]})]})};D.parameters={docs:{description:{story:"Estado vacío de la tabla con mensaje personalizado usando `noDataMessage`."}}};const k=()=>{const{toggleTheme:a}=f();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:a,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Altura Fija con Scroll"}),e.jsx(p,{data:x,columns:y,title:"Tabla con Scroll",height:"400px",filter:!0,filterPlaceholder:"Buscar..."})]})]})};k.parameters={docs:{description:{story:"Tabla con altura fija y scroll vertical. Útil para espacios limitados en dashboards."}}};const M=a=>{const c=m.useRef(new Set),d=[{searchFields:["nombre","apellido","email"],field:"nombre",header:"Nombre",sorteable:!0,body:l=>`${l.nombre} ${l.apellido}`},{field:"email",header:"Email",sorteable:!0},{field:"telefono",header:"Teléfono",sorteable:!0},{searchFields:["status"],body:l=>e.jsx(P,{color:l.status==="inactivo"?"danger":"success",content:l.status,variant:"soft"}),header:"Status",sorteable:!0,field:"status"},{field:"empresa.nombre",header:"Empresa"}];return e.jsx("div",{style:{padding:"24px"},children:e.jsx(p,{...a,selectedRows:a.selectedRows?c:void 0,data:x,columns:d})})};M.args={title:"Tabla Interactiva",filter:!0,filterPlaceholder:"Buscar...",paginator:!0,rows:10,height:"500px",selectedRows:!0,noDataMessage:"No hay datos disponibles"};S.__docgenInfo={description:"",methods:[],displayName:"Default"};T.__docgenInfo={description:"",methods:[],displayName:"WithSearch"};z.__docgenInfo={description:"",methods:[],displayName:"WithPagination"};C.__docgenInfo={description:"",methods:[],displayName:"WithSelection"};B.__docgenInfo={description:"",methods:[],displayName:"WithActions"};w.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};D.__docgenInfo={description:"",methods:[],displayName:"EmptyState"};k.__docgenInfo={description:"",methods:[],displayName:"FixedHeight"};M.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var L,G,O;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
\r
            <div>\r
                <h3>Tabla Básica</h3>\r
                <Datatable data={data} columns={basicColumns} title="Lista de Usuarios" />\r
            </div>\r
        </div>;
}`,...(O=(G=S.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var J,Q,X;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
\r
            <div>\r
                <h3>Con Búsqueda</h3>\r
                <Datatable data={data} columns={basicColumns} title="Usuarios del Sistema" filter={true} filterPlaceholder="Buscar por nombre, email o teléfono..." />\r
            </div>\r
        </div>;
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,K,Y;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
\r
            <div>\r
                <h3>Con Paginación</h3>\r
                <Datatable data={data} columns={basicColumns} title="Usuarios Registrados" paginator={true} rows={5} filter={true} filterPlaceholder="Buscar usuarios..." />\r
            </div>\r
        </div>;
}`,...(Y=(K=z.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var ee,ae,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const selectedRowsRef = useRef(new Set());
  const [selectedCount, setSelectedCount] = useState(0);
  const handleShowSelected = () => {
    const selected = Array.from(selectedRowsRef.current);
    console.log('Filas seleccionadas:', selected);
    setSelectedCount(selected.length);
    alert(\`\${selected.length} filas seleccionadas. Ver consola para detalles.\`);
  };
  const headerButtons = <div style={{
    display: 'flex',
    gap: '8px'
  }}>\r
            <Button onClick={handleShowSelected} color="primary" size="sm" leftIcon={<BiExport />}>\r
                Exportar Seleccionados\r
            </Button>\r
            {selectedCount > 0 && <Badge color="primary" content={\`\${selectedCount} seleccionados\`} />}\r
        </div>;
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
\r
            <div>\r
                <h3>Con Selección Múltiple</h3>\r
                <Datatable data={data} columns={basicColumns} title="Gestión de Usuarios" selectedRows={selectedRowsRef} filter={true} filterPlaceholder="Buscar..." paginator={true} rows={10} headerButtons={headerButtons} />\r
            </div>\r
        </div>;
}`,...(te=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,re,se;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const [selectedUser, setSelectedUser] = useState(null);
  const columnsWithActions = [...basicColumns, {
    field: 'actions',
    header: 'Acciones',
    body: row => <div style={{
      display: 'flex',
      gap: '4px'
    }}>\r
                    <Button size="sm" variant="ghost" color="info" onClick={e => {
        e.stopPropagation();
        alert(\`Editar: \${row.nombre} \${row.apellido}\`);
      }}>\r
                        <BiEdit size={16} />\r
                    </Button>\r
                    <Button size="sm" variant="ghost" color="danger" onClick={e => {
        e.stopPropagation();
        if (confirm(\`¿Eliminar a \${row.nombre} \${row.apellido}?\`)) {
          alert('Usuario eliminado');
        }
      }}>\r
                        <BiTrash size={16} />\r
                    </Button>\r
                </div>
  }];
  const headerButtons = <div style={{
    display: 'flex',
    gap: '8px'
  }}>\r
            <Button color="primary" size="sm" leftIcon={<BiPlus />}>\r
                Nuevo Usuario\r
            </Button>\r
            <Button variant="outline" color="secondary" size="sm" leftIcon={<BiRefresh />}>\r
                Actualizar\r
            </Button>\r
        </div>;
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
\r
            <div>\r
                <h3>Con Acciones por Fila</h3>\r
                <Datatable data={data} columns={columnsWithActions} title="Administración de Usuarios" filter={true} filterPlaceholder="Buscar usuarios..." paginator={true} rows={8} headerButtons={headerButtons} rowClick={row => {
        setSelectedUser(row);
        console.log('Fila clickeada:', row);
      }} />\r
                {selectedUser && <div style={{
        marginTop: '16px',
        padding: '16px',
        backgroundColor: 'var(--hadr-selected)',
        borderRadius: '8px'
      }}>\r
                        <strong>Usuario seleccionado:</strong> {selectedUser.nombre} {selectedUser.apellido}\r
                    </div>}\r
            </div>\r
        </div>;
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,ne;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const customColumns = [{
    field: 'nombre',
    header: 'Usuario',
    sorteable: true,
    body: data => <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>\r
                    <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        background: 'var(--hadr-color-primary-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        color: 'var(--hadr-color-primary)'
      }}>\r
                        {data.nombre.charAt(0)}{data.apellido.charAt(0)}\r
                    </div>\r
                    <div>\r
                        <div style={{
          fontWeight: '600'
        }}>{data.nombre} {data.apellido}</div>\r
                        <div style={{
          fontSize: '0.75rem',
          opacity: 0.7
        }}>{data.email}</div>\r
                    </div>\r
                </div>
  }, {
    field: 'empresa',
    header: 'Información de Empresa',
    body: data => <div>\r
                    <div style={{
        fontWeight: '600'
      }}>{data.empresa.nombre}</div>\r
                    <div style={{
        fontSize: '0.75rem',
        opacity: 0.7
      }}>\r
                        {data.empresa.departamento} • {data.empresa.cargo}\r
                    </div>\r
                </div>
  }, {
    field: 'metrics',
    header: 'Métricas',
    body: data => {
      const productivity = Math.floor(Math.random() * 100);
      const color = productivity > 70 ? 'success' : productivity > 40 ? 'warning' : 'danger';
      return <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>\r
                        <div style={{
          width: '100px',
          height: '8px',
          backgroundColor: 'var(--hadr-border-color)',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>\r
                            <div style={{
            width: \`\${productivity}%\`,
            height: '100%',
            backgroundColor: \`var(--hadr-color-\${color})\`,
            transition: 'width 0.3s ease'
          }} />\r
                        </div>\r
                        <span style={{
          fontSize: '0.875rem',
          fontWeight: '600'
        }}>{productivity}%</span>\r
                    </div>;
    }
  }, {
    field: 'status',
    header: 'Estado',
    sorteable: true,
    body: data => <Badge color={data.status === 'inactivo' ? 'danger' : 'success'} content={data.status} variant="soft" />
  }];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
\r
            <div>\r
                <h3>Tabla Personalizada para Dashboard</h3>\r
                <Datatable data={data} columns={customColumns} title="Panel de Empleados" filter={true} filterPlaceholder="Buscar empleados..." paginator={true} rows={6} height="600px" />\r
            </div>\r
        </div>;
}`,...(ne=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var de,ce,me;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
\r
            <div>\r
                <h3>Estado Vacío</h3>\r
                <Datatable data={[]} columns={basicColumns} title="Sin Resultados" filter={true} filterPlaceholder="Buscar..." noDataMessage="No se encontraron usuarios en el sistema" />\r
            </div>\r
        </div>;
}`,...(me=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ue,he;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
\r
            <div>\r
                <h3>Altura Fija con Scroll</h3>\r
                <Datatable data={data} columns={basicColumns} title="Tabla con Scroll" height="400px" filter={true} filterPlaceholder="Buscar..." />\r
            </div>\r
        </div>;
}`,...(he=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,fe,xe;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const selectedRowsRef = useRef(new Set());
  const handleBadge = data => <Badge color={data.status === 'inactivo' ? 'danger' : 'success'} content={data.status} variant="soft" />;
  const columns = [{
    searchFields: ["nombre", "apellido", "email"],
    field: "nombre",
    header: 'Nombre',
    sorteable: true,
    body: data => \`\${data.nombre} \${data.apellido}\`
  }, {
    field: 'email',
    header: 'Email',
    sorteable: true
  }, {
    field: 'telefono',
    header: 'Teléfono',
    sorteable: true
  }, {
    searchFields: ["status"],
    body: handleBadge,
    header: 'Status',
    sorteable: true,
    field: 'status'
  }, {
    field: 'empresa.nombre',
    header: 'Empresa'
  }];
  return <div style={{
    padding: '24px'
  }}>\r
            <Datatable {...args} selectedRows={args.selectedRows ? selectedRowsRef : undefined} data={data} columns={columns} />\r
        </div>;
}`,...(xe=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};const aa=["Default","WithSearch","WithPagination","WithSelection","WithActions","CustomStyling","EmptyState","FixedHeight","Interactive"];export{w as CustomStyling,S as Default,D as EmptyState,k as FixedHeight,M as Interactive,B as WithActions,z as WithPagination,T as WithSearch,C as WithSelection,aa as __namedExportsOrder,ea as default};
