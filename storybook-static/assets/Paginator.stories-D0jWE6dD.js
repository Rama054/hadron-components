import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BZISi7jw.js";import{P as a}from"./Paginator-BGz3D5vn.js";import{u as m}from"./useThemeMode-8InCWCg3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BngtbI9A.js";import"./iconBase-BcoVWJ97.js";import"./index-Co38GRlK.js";const j={title:"Components/Paginator",component:a},r=()=>{const[n,l]=c.useState(1),o=P=>{l(P)},{toggleTheme:i}=m();return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:i,children:"cambiar"}),e.jsx(a,{currentPage:n,maxVisible:7,totalPages:8,onPageChange:o}),e.jsx(a,{currentPage:n,color:"danger",maxVisible:7,totalPages:8,onPageChange:o}),e.jsx(a,{currentPage:n,color:"success",maxVisible:7,totalPages:8,onPageChange:o}),e.jsx(a,{currentPage:n,color:"indigo",maxVisible:7,totalPages:8,onPageChange:o}),e.jsx(a,{currentPage:n,color:"blue",maxVisible:7,totalPages:8,onPageChange:o}),e.jsx(a,{currentPage:n,color:"orange",maxVisible:7,totalPages:8,onPageChange:o}),e.jsx(a,{currentPage:n,color:"lime",maxVisible:7,totalPages:8,onPageChange:o}),e.jsx(a,{currentPage:n,color:"lime",radius:"full",maxVisible:7,totalPages:8,onPageChange:o}),e.jsx(a,{currentPage:n,color:"lime",radius:"none",maxVisible:7,totalPages:8,onPageChange:o})]})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var g,t,s;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = page => {
    setCurrentPage(page);
  };
  const {
    toggleTheme
  } = useThemeMode();
  return <>\r
        <button onClick={toggleTheme}>cambiar</button>\r
        <Paginator currentPage={currentPage} maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        <Paginator currentPage={currentPage} color="danger" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        <Paginator currentPage={currentPage} color="success" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        <Paginator currentPage={currentPage} color="indigo" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        <Paginator currentPage={currentPage} color="blue" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        <Paginator currentPage={currentPage} color="orange" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        <Paginator currentPage={currentPage} color="lime" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        <Paginator currentPage={currentPage} color="lime" radius="full" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        <Paginator currentPage={currentPage} color="lime" radius="none" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />\r
        </>;
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const f=["Default"];export{r as Default,f as __namedExportsOrder,j as default};
