import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as a}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";function t({radius:r="md",width:i="100%",height:P="20px",variant:O="rectangular",className:m,style:g,...E}){let c="q-skeleton",h={"--skeleton-width":i,"--skeleton-height":P};return m&&(c+=" "+m),g&&(h={...h,...g}),e.jsx("div",{className:c,"data-radius":r,"data-variant":O,style:h,"aria-label":"Cargando...",role:"status",...E})}t.propTypes={radius:a.oneOf(["none","sm","md","lg","full"]),width:a.string,height:a.string,variant:a.oneOf(["rectangular","circular","text"]),className:a.string,style:a.object};t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{radius:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'full'",computed:!1}]},required:!1},width:{defaultValue:{value:"'100%'",computed:!1},description:"",type:{name:"string"},required:!1},height:{defaultValue:{value:"'20px'",computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:"'rectangular'",computed:!1},description:"",type:{name:"enum",value:[{value:"'rectangular'",computed:!1},{value:"'circular'",computed:!1},{value:"'text'",computed:!1}]},required:!1},className:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"object"},required:!1}}};const F={title:"Components/Skeleton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["rectangular","circular","text"]},radius:{control:"select",options:["none","sm","md","lg","full"]}}},s={args:{width:"200px",height:"20px"}},d={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Rectangular"}),e.jsx(t,{variant:"rectangular",width:"200px",height:"100px"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Circular"}),e.jsx(t,{variant:"circular",width:"60px",height:"60px"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Text"}),e.jsx(t,{variant:"text",width:"300px"})]})]})},l={render:r=>e.jsxs("div",{style:{width:"300px",padding:"1.5rem",border:"1px solid #e2e8f0",borderRadius:"12px",backgroundColor:"white"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[e.jsx(t,{variant:"circular",width:"60px",height:"60px"}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{variant:"text",width:"120px",height:"20px",style:{marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",width:"80px",height:"16px"})]})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx(t,{variant:"text",width:"100%",height:"16px",style:{marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",width:"100%",height:"16px",style:{marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",width:"60%",height:"16px"})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(t,{variant:"rectangular",width:"80px",height:"36px",radius:"md"}),e.jsx(t,{variant:"rectangular",width:"80px",height:"36px",radius:"md"})]})]})},n={render:r=>e.jsx("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"1rem"},children:[1,2,3].map(i=>e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"1rem",border:"1px solid #e2e8f0",borderRadius:"8px",backgroundColor:"white"},children:[e.jsx(t,{variant:"rectangular",width:"80px",height:"80px",radius:"md"}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{variant:"text",width:"100%",height:"18px",style:{marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",width:"100%",height:"14px",style:{marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",width:"70%",height:"14px",style:{marginBottom:"1rem"}}),e.jsx(t,{variant:"text",width:"50px",height:"12px"})]})]},i))})},o={render:r=>e.jsxs("div",{style:{width:"600px",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(t,{variant:"text",width:"200px",height:"32px"}),e.jsx(t,{variant:"rectangular",width:"120px",height:"40px",radius:"md"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"},children:[1,2,3].map(i=>e.jsxs("div",{style:{padding:"1.5rem",border:"1px solid #e2e8f0",borderRadius:"12px",backgroundColor:"white"},children:[e.jsx(t,{variant:"text",width:"60%",height:"16px",style:{marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",width:"80px",height:"28px",style:{marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",width:"40%",height:"14px"})]},i))}),e.jsxs("div",{style:{padding:"1.5rem",border:"1px solid #e2e8f0",borderRadius:"12px",backgroundColor:"white"},children:[e.jsx(t,{variant:"text",width:"150px",height:"20px",style:{marginBottom:"1rem"}}),e.jsx(t,{variant:"rectangular",width:"100%",height:"200px",radius:"md"})]})]})},x={render:r=>e.jsx("div",{style:{width:"500px"},children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid #e2e8f0",borderRadius:"8px",backgroundColor:"white"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 80px",gap:"1rem",padding:"0.75rem 0",borderBottom:"1px solid #e2e8f0",marginBottom:"1rem"},children:[e.jsx(t,{variant:"text",width:"60px",height:"16px"}),e.jsx(t,{variant:"text",width:"80px",height:"16px"}),e.jsx(t,{variant:"text",width:"70px",height:"16px"}),e.jsx(t,{variant:"text",width:"60px",height:"16px"})]}),[1,2,3,4,5].map(i=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 80px",gap:"1rem",padding:"0.75rem 0",alignItems:"center"},children:[e.jsx(t,{variant:"text",width:"90%",height:"16px"}),e.jsx(t,{variant:"text",width:"70%",height:"16px"}),e.jsx(t,{variant:"text",width:"60%",height:"16px"}),e.jsx(t,{variant:"rectangular",width:"60px",height:"24px",radius:"sm"})]},i))]})})},p={render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Avatar"}),e.jsx(t,{className:"q-skeleton-avatar"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Title"}),e.jsx(t,{className:"q-skeleton-title"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Text Lines"}),e.jsx(t,{className:"q-skeleton-text"}),e.jsx(t,{className:"q-skeleton-text"}),e.jsx(t,{className:"q-skeleton-text"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Button"}),e.jsx(t,{className:"q-skeleton-button"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Card"}),e.jsx(t,{className:"q-skeleton-card"})]})]})};var v,u,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    width: '200px',
    height: '20px'
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,w,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>\r
      <div>\r
        <h4>Rectangular</h4>\r
        <Skeleton variant="rectangular" width="200px" height="100px" />\r
      </div>\r
      \r
      <div>\r
        <h4>Circular</h4>\r
        <Skeleton variant="circular" width="60px" height="60px" />\r
      </div>\r
      \r
      <div>\r
        <h4>Text</h4>\r
        <Skeleton variant="text" width="300px" />\r
      </div>\r
    </div>
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var k,S,b;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '300px',
    padding: '1.5rem',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    backgroundColor: 'white'
  }}>\r
      {/* Avatar */}\r
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    }}>\r
        <Skeleton variant="circular" width="60px" height="60px" />\r
        <div style={{
        flex: 1
      }}>\r
          <Skeleton variant="text" width="120px" height="20px" style={{
          marginBottom: '0.5rem'
        }} />\r
          <Skeleton variant="text" width="80px" height="16px" />\r
        </div>\r
      </div>\r
      \r
      {/* Content */}\r
      <div style={{
      marginBottom: '1rem'
    }}>\r
        <Skeleton variant="text" width="100%" height="16px" style={{
        marginBottom: '0.5rem'
      }} />\r
        <Skeleton variant="text" width="100%" height="16px" style={{
        marginBottom: '0.5rem'
      }} />\r
        <Skeleton variant="text" width="60%" height="16px" />\r
      </div>\r
      \r
      {/* Actions */}\r
      <div style={{
      display: 'flex',
      gap: '0.5rem'
    }}>\r
        <Skeleton variant="rectangular" width="80px" height="36px" radius="md" />\r
        <Skeleton variant="rectangular" width="80px" height="36px" radius="md" />\r
      </div>\r
    </div>
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,B,q;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {[1, 2, 3].map(item => <div key={item} style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      backgroundColor: 'white'
    }}>\r
          {/* Image */}\r
          <Skeleton variant="rectangular" width="80px" height="80px" radius="md" />\r
          \r
          {/* Content */}\r
          <div style={{
        flex: 1
      }}>\r
            <Skeleton variant="text" width="100%" height="18px" style={{
          marginBottom: '0.5rem'
        }} />\r
            <Skeleton variant="text" width="100%" height="14px" style={{
          marginBottom: '0.5rem'
        }} />\r
            <Skeleton variant="text" width="70%" height="14px" style={{
          marginBottom: '1rem'
        }} />\r
            <Skeleton variant="text" width="50px" height="12px" />\r
          </div>\r
        </div>)}\r
    </div>
}`,...(q=(B=n.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var T,N,R;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>\r
      {/* Header */}\r
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>\r
        <Skeleton variant="text" width="200px" height="32px" />\r
        <Skeleton variant="rectangular" width="120px" height="40px" radius="md" />\r
      </div>\r
      \r
      {/* Stats Cards */}\r
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem'
    }}>\r
        {[1, 2, 3].map(item => <div key={item} style={{
        padding: '1.5rem',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        backgroundColor: 'white'
      }}>\r
            <Skeleton variant="text" width="60%" height="16px" style={{
          marginBottom: '0.5rem'
        }} />\r
            <Skeleton variant="text" width="80px" height="28px" style={{
          marginBottom: '0.5rem'
        }} />\r
            <Skeleton variant="text" width="40%" height="14px" />\r
          </div>)}\r
      </div>\r
      \r
      {/* Chart */}\r
      <div style={{
      padding: '1.5rem',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      backgroundColor: 'white'
    }}>\r
        <Skeleton variant="text" width="150px" height="20px" style={{
        marginBottom: '1rem'
      }} />\r
        <Skeleton variant="rectangular" width="100%" height="200px" radius="md" />\r
      </div>\r
    </div>
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var D,I,A;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '500px'
  }}>\r
      <div style={{
      padding: '1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      backgroundColor: 'white'
    }}>\r
        {/* Table Header */}\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 80px',
        gap: '1rem',
        padding: '0.75rem 0',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '1rem'
      }}>\r
          <Skeleton variant="text" width="60px" height="16px" />\r
          <Skeleton variant="text" width="80px" height="16px" />\r
          <Skeleton variant="text" width="70px" height="16px" />\r
          <Skeleton variant="text" width="60px" height="16px" />\r
        </div>\r
        \r
        {/* Table Rows */}\r
        {[1, 2, 3, 4, 5].map(item => <div key={item} style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 80px',
        gap: '1rem',
        padding: '0.75rem 0',
        alignItems: 'center'
      }}>\r
            <Skeleton variant="text" width="90%" height="16px" />\r
            <Skeleton variant="text" width="70%" height="16px" />\r
            <Skeleton variant="text" width="60%" height="16px" />\r
            <Skeleton variant="rectangular" width="60px" height="24px" radius="sm" />\r
          </div>)}\r
      </div>\r
    </div>
}`,...(A=(I=x.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var V,_,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>\r
      <div>\r
        <h4>Avatar</h4>\r
        <Skeleton className="q-skeleton-avatar" />\r
      </div>\r
      \r
      <div>\r
        <h4>Title</h4>\r
        <Skeleton className="q-skeleton-title" />\r
      </div>\r
      \r
      <div>\r
        <h4>Text Lines</h4>\r
        <Skeleton className="q-skeleton-text" />\r
        <Skeleton className="q-skeleton-text" />\r
        <Skeleton className="q-skeleton-text" />\r
      </div>\r
      \r
      <div>\r
        <h4>Button</h4>\r
        <Skeleton className="q-skeleton-button" />\r
      </div>\r
      \r
      <div>\r
        <h4>Card</h4>\r
        <Skeleton className="q-skeleton-card" />\r
      </div>\r
    </div>
}`,...(L=(_=p.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const G=["Default","Variants","ProfileCard","ArticleList","Dashboard","Table","UtilityClasses"];export{n as ArticleList,o as Dashboard,s as Default,l as ProfileCard,x as Table,p as UtilityClasses,d as Variants,G as __namedExportsOrder,F as default};
