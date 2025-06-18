import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Button-kmOhRj6m.js";import{u as s}from"./useThemeMode-8InCWCg3.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-DKwzja_x.js";import"./index-Co38GRlK.js";const J={title:"Components/Button",component:r,argTypes:{variant:{control:{type:"select"},options:["solid","outline","soft","ghost"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},color:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info"]}}},u=["primary","secondary","success","warning","danger","info"],l=()=>{const{toggleTheme:o}=s();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Solid Variant (Default)"}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:u.map(t=>e.jsx(r,{color:t,variant:"solid",children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Disabled State"}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:u.map(t=>e.jsx(r,{color:t,disabled:!0,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]})]})},a=()=>{const{toggleTheme:o}=s();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Outline Variant"}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:u.map(t=>e.jsx(r,{variant:"outline",color:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Soft Variant"}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:u.map(t=>e.jsx(r,{variant:"soft",color:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Ghost Variant"}),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:u.map(t=>e.jsx(r,{variant:"ghost",color:t,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]})]})},d=()=>{const{toggleTheme:o}=s(),t=["xs","sm","md","lg","xl"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Size Variants"}),e.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:t.map(i=>e.jsx(r,{size:i,color:"primary",children:i.toUpperCase()},i))})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Icon Buttons"}),e.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:t.map(i=>e.jsx(r,{size:i,color:"primary",children:"⚙️"},i))})]})]})},c=()=>{const{toggleTheme:o}=s();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Left Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{color:"primary",leftIcon:"📁",children:"Open File"}),e.jsx(r,{color:"success",leftIcon:"💾",variant:"outline",children:"Save"}),e.jsx(r,{color:"danger",leftIcon:"🗑️",variant:"soft",children:"Delete"}),e.jsx(r,{color:"info",leftIcon:"📧",variant:"ghost",children:"Send Email"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Right Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{color:"primary",rightIcon:"→",children:"Next"}),e.jsx(r,{color:"secondary",rightIcon:"↗️",variant:"outline",children:"External Link"}),e.jsx(r,{color:"success",rightIcon:"✓",variant:"soft",children:"Confirm"}),e.jsx(r,{color:"warning",rightIcon:"⚠️",variant:"ghost",children:"Warning"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Icon Only"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{color:"primary",children:"⚙️"}),e.jsx(r,{color:"secondary",variant:"outline",children:"❤️"}),e.jsx(r,{color:"success",variant:"soft",children:"✓"}),e.jsx(r,{color:"danger",variant:"ghost",children:"✕"})]})]})]})},p=()=>{const{toggleTheme:o}=s();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Loading States"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{color:"primary",children:"Normal"}),e.jsx(r,{color:"primary",loading:!0,children:"Loading"}),e.jsx(r,{color:"primary",loading:!0,leftIcon:"📁",children:"Loading with Icon"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Full Width"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:[e.jsx(r,{color:"primary",fullWidth:!0,children:"Full Width Button"}),e.jsx(r,{color:"secondary",variant:"outline",fullWidth:!0,children:"Full Width Outline"}),e.jsx(r,{color:"success",variant:"soft",fullWidth:!0,leftIcon:"✓",children:"Full Width with Icon"})]})]})]})},h=()=>{const{toggleTheme:o}=s(),t=["none","sm","md","lg","full"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Border Radius"}),e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:t.map(i=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{color:"primary",radius:i,children:"Button"}),e.jsx("div",{style:{fontSize:"12px",marginTop:"8px",textTransform:"capitalize"},children:i})]},i))})]})]})},x=()=>{const{toggleTheme:o}=s();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Dashboard Actions"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{color:"primary",leftIcon:"📊",children:"Generate Report"}),e.jsx(r,{color:"success",variant:"outline",leftIcon:"💾",children:"Export Data"}),e.jsx(r,{color:"info",variant:"soft",leftIcon:"🔄",children:"Refresh"}),e.jsx(r,{color:"warning",variant:"ghost",leftIcon:"⚙️",children:"Settings"}),e.jsx(r,{color:"danger",variant:"outline",size:"sm",children:"🗑️"}),e.jsx(r,{color:"secondary",variant:"ghost",size:"sm",children:"📝"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Toolbar Actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px",padding:"12px",backgroundColor:"var(--hadr-selected)",borderRadius:"8px"},children:[e.jsx(r,{size:"sm",variant:"ghost",color:"secondary",children:"📁"}),e.jsx(r,{size:"sm",variant:"ghost",color:"secondary",children:"💾"}),e.jsx(r,{size:"sm",variant:"ghost",color:"secondary",children:"📋"}),e.jsx(r,{size:"sm",variant:"ghost",color:"secondary",children:"✂️"}),e.jsx("div",{style:{width:"1px",backgroundColor:"var(--hadr-border-color)",margin:"0 8px"}}),e.jsx(r,{size:"sm",variant:"ghost",color:"secondary",children:"↶"}),e.jsx(r,{size:"sm",variant:"ghost",color:"secondary",children:"↷"})]})]})]})},n=o=>e.jsx("div",{style:{padding:"24px"},children:e.jsx(r,{...o})});n.args={children:"Interactive Button",variant:"solid",color:"primary",size:"md",radius:"md",disabled:!1,loading:!1,fullWidth:!1};l.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Variants"};d.__docgenInfo={description:"",methods:[],displayName:"Sizes"};c.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};p.__docgenInfo={description:"",methods:[],displayName:"States"};h.__docgenInfo={description:"",methods:[],displayName:"Radius"};x.__docgenInfo={description:"",methods:[],displayName:"DashboardActions"};n.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var g,m,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
                <h3>Solid Variant (Default)</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    {colors.map(color => <Button key={color} color={color} variant="solid">\r
                            {color.charAt(0).toUpperCase() + color.slice(1)}\r
                        </Button>)}\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Disabled State</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    {colors.map(color => <Button key={color} color={color} disabled>\r
                            {color.charAt(0).toUpperCase() + color.slice(1)}\r
                        </Button>)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(v=(m=l.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var y,f,j;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
                <h3>Outline Variant</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    {colors.map(color => <Button key={color} variant="outline" color={color}>\r
                            {color.charAt(0).toUpperCase() + color.slice(1)}\r
                        </Button>)}\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Soft Variant</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    {colors.map(color => <Button key={color} variant="soft" color={color}>\r
                            {color.charAt(0).toUpperCase() + color.slice(1)}\r
                        </Button>)}\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Ghost Variant</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    {colors.map(color => <Button key={color} variant="ghost" color={color}>\r
                            {color.charAt(0).toUpperCase() + color.slice(1)}\r
                        </Button>)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var B,T,I;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Size Variants</h3>\r
                <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>\r
                    {sizes.map(size => <Button key={size} size={size} color="primary">\r
                            {size.toUpperCase()}\r
                        </Button>)}\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Icon Buttons</h3>\r
                <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>\r
                    {sizes.map(size => <Button key={size} size={size} color="primary">\r
                            ⚙️\r
                        </Button>)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var w,b,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Left Icons</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    <Button color="primary" leftIcon="📁">Open File</Button>\r
                    <Button color="success" leftIcon="💾" variant="outline">Save</Button>\r
                    <Button color="danger" leftIcon="🗑️" variant="soft">Delete</Button>\r
                    <Button color="info" leftIcon="📧" variant="ghost">Send Email</Button>\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Right Icons</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    <Button color="primary" rightIcon="→">Next</Button>\r
                    <Button color="secondary" rightIcon="↗️" variant="outline">External Link</Button>\r
                    <Button color="success" rightIcon="✓" variant="soft">Confirm</Button>\r
                    <Button color="warning" rightIcon="⚠️" variant="ghost">Warning</Button>\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Icon Only</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    <Button color="primary">⚙️</Button>\r
                    <Button color="secondary" variant="outline">❤️</Button>\r
                    <Button color="success" variant="soft">✓</Button>\r
                    <Button color="danger" variant="ghost">✕</Button>\r
                </div>\r
            </div>\r
        </div>;
}`,...(W=(b=c.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var z,C,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Loading States</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>\r
                    <Button color="primary">Normal</Button>\r
                    <Button color="primary" loading>Loading</Button>\r
                    <Button color="primary" loading leftIcon="📁">Loading with Icon</Button>\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Full Width</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        maxWidth: '400px'
      }}>\r
                    <Button color="primary" fullWidth>Full Width Button</Button>\r
                    <Button color="secondary" variant="outline" fullWidth>Full Width Outline</Button>\r
                    <Button color="success" variant="soft" fullWidth leftIcon="✓">Full Width with Icon</Button>\r
                </div>\r
            </div>\r
        </div>;
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,k,A;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const radiusOptions = ['none', 'sm', 'md', 'lg', 'full'];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Border Radius</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>\r
                    {radiusOptions.map(radius => <div key={radius} style={{
          textAlign: 'center'
        }}>\r
                            <Button color="primary" radius={radius}>Button</Button>\r
                            <div style={{
            fontSize: '12px',
            marginTop: '8px',
            textTransform: 'capitalize'
          }}>\r
                                {radius}\r
                            </div>\r
                        </div>)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(A=(k=h.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var _,R,V;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Dashboard Actions</h3>\r
                <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>\r
                    <Button color="primary" leftIcon="📊">Generate Report</Button>\r
                    <Button color="success" variant="outline" leftIcon="💾">Export Data</Button>\r
                    <Button color="info" variant="soft" leftIcon="🔄">Refresh</Button>\r
                    <Button color="warning" variant="ghost" leftIcon="⚙️">Settings</Button>\r
                    <Button color="danger" variant="outline" size="sm">🗑️</Button>\r
                    <Button color="secondary" variant="ghost" size="sm">📝</Button>\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Toolbar Actions</h3>\r
                <div style={{
        display: 'flex',
        gap: '8px',
        padding: '12px',
        backgroundColor: 'var(--hadr-selected)',
        borderRadius: '8px'
      }}>\r
                    <Button size="sm" variant="ghost" color="secondary">📁</Button>\r
                    <Button size="sm" variant="ghost" color="secondary">💾</Button>\r
                    <Button size="sm" variant="ghost" color="secondary">📋</Button>\r
                    <Button size="sm" variant="ghost" color="secondary">✂️</Button>\r
                    <div style={{
          width: '1px',
          backgroundColor: 'var(--hadr-border-color)',
          margin: '0 8px'
        }}></div>\r
                    <Button size="sm" variant="ghost" color="secondary">↶</Button>\r
                    <Button size="sm" variant="ghost" color="secondary">↷</Button>\r
                </div>\r
            </div>\r
        </div>;
}`,...(V=(R=x.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var N,O,U;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <div style={{
    padding: '24px'
  }}>\r
            <Button {...args} />\r
        </div>;
}`,...(U=(O=n.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const K=["Default","Variants","Sizes","WithIcons","States","Radius","DashboardActions","Interactive"];export{x as DashboardActions,l as Default,n as Interactive,h as Radius,d as Sizes,p as States,a as Variants,c as WithIcons,K as __namedExportsOrder,J as default};
