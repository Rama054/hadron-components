import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as r}from"./useThemeMode-8InCWCg3.js";import{I as l}from"./Input-EG79Y93F.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-KKouTENB.js";import"./iconBase-BcoVWJ97.js";import"./Button-kmOhRj6m.js";import"./Spinner-DKwzja_x.js";import"./index-Co38GRlK.js";const X={title:"Components/Input",component:l,argTypes:{type:{control:{type:"select"},options:["text","password","email","number","tel","url","search"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","filled","ghost"]},radius:{control:{type:"select"},options:["none","sm","md","lg","full"]},color:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info"]}}},o=()=>{const{toggleTheme:t}=r();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"500px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Basic Inputs"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{label:"Name",placeholder:"Enter your name"}),e.jsx(l,{label:"Email",type:"email",placeholder:"Enter your email"}),e.jsx(l,{label:"Password",type:"password",placeholder:"Enter your password"}),e.jsx(l,{label:"Phone",type:"tel",placeholder:"+1 (555) 123-4567"})]})]})]})},n=()=>{const{toggleTheme:t}=r();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"500px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Size Variants"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{label:"Small Input",size:"sm",placeholder:"Small size input"}),e.jsx(l,{label:"Medium Input (Default)",size:"md",placeholder:"Medium size input"}),e.jsx(l,{label:"Large Input",size:"lg",placeholder:"Large size input"})]})]})]})},s=()=>{const{toggleTheme:t}=r();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"500px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Style Variants"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{label:"Default Variant",variant:"default",placeholder:"Default border style"}),e.jsx(l,{label:"Filled Variant",variant:"filled",placeholder:"Filled background style"}),e.jsx(l,{label:"Ghost Variant",variant:"ghost",placeholder:"Minimal underline style"})]})]})]})},p=()=>{const{toggleTheme:t}=r();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"500px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Icons and Addons"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{label:"Search",type:"search",placeholder:"Search anything...",prependIcon:"🔍"}),e.jsx(l,{label:"Website URL",type:"url",placeholder:"example.com",prependText:"https://",appendText:".com"}),e.jsx(l,{label:"Price",type:"number",placeholder:"0.00",prependText:"$",appendText:"USD"}),e.jsx(l,{label:"Email with validation",type:"email",placeholder:"user@example.com",prependIcon:"📧",appendIcon:"✅"})]})]})]})},d=()=>{const{toggleTheme:t}=r();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"500px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Input States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{label:"Normal State",placeholder:"Type something...",helpText:"This is a help text to guide the user"}),e.jsx(l,{label:"Loading State",placeholder:"Processing...",loading:!0,helpText:"Input is currently processing"}),e.jsx(l,{label:"Disabled State",placeholder:"Cannot edit",disabled:!0,helpText:"This field is disabled"}),e.jsx(l,{label:"Required Field",placeholder:"Enter required value",required:!0,helpText:"This field is required"}),e.jsx(l,{label:"Error State",placeholder:"Invalid input",errorText:"This field contains an error",helpText:"Please correct the error above"})]})]})]})},c=()=>{const{toggleTheme:t}=r(),L=["primary","secondary","success","warning","danger","info"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"500px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Color Variants"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:L.map(i=>e.jsx(l,{label:`${i.charAt(0).toUpperCase()+i.slice(1)} Input`,placeholder:`${i} colored input`,color:i},i))})]})]})},h=()=>{const{toggleTheme:t}=r();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Registration Form"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx(l,{label:"First Name",placeholder:"John",required:!0}),e.jsx(l,{label:"Last Name",placeholder:"Doe",required:!0}),e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(l,{label:"Email Address",type:"email",placeholder:"john.doe@example.com",prependIcon:"📧",required:!0,helpText:"We'll use this for account notifications"})}),e.jsx(l,{label:"Password",type:"password",placeholder:"Enter password",required:!0,helpText:"At least 8 characters"}),e.jsx(l,{label:"Confirm Password",type:"password",placeholder:"Confirm password",required:!0}),e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(l,{label:"Website (Optional)",type:"url",placeholder:"your-website",prependText:"https://",appendText:".com",helpText:"Your personal or company website"})})]})]})]})},m=()=>{const{toggleTheme:t}=r();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Dashboard Controls"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx(l,{label:"Search Users",type:"search",placeholder:"Search by name or email...",prependIcon:"🔍",size:"sm"}),e.jsx(l,{label:"Filter by Date",type:"date",size:"sm"}),e.jsx(l,{label:"Budget Range",type:"number",placeholder:"0",prependText:"$",appendText:"USD",size:"sm"}),e.jsx(l,{label:"API Endpoint",type:"url",placeholder:"api/v1/endpoint",prependText:"https://api.example.com/",size:"sm",variant:"filled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Settings Form"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(l,{label:"Organization Name",placeholder:"Acme Corporation",prependIcon:"🏢"}),e.jsx(l,{label:"Contact Email",type:"email",placeholder:"contact@acme.com",prependIcon:"📧",helpText:"Primary contact for system notifications"}),e.jsx(l,{label:"Slack Webhook URL",type:"url",placeholder:"hooks.slack.com/...",prependText:"https://",helpText:"Optional: Receive notifications in Slack"})]})]})]})},a=t=>e.jsx("div",{style:{padding:"24px",maxWidth:"400px"},children:e.jsx(l,{...t})});a.args={label:"Interactive Input",type:"text",placeholder:"Type something...",size:"md",variant:"default",radius:"md",helpText:"This is a help text",errorText:"",disabled:!1,loading:!1,required:!1};o.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Sizes"};s.__docgenInfo={description:"",methods:[],displayName:"Variants"};p.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};d.__docgenInfo={description:"",methods:[],displayName:"States"};c.__docgenInfo={description:"",methods:[],displayName:"Colors"};h.__docgenInfo={description:"",methods:[],displayName:"FormExample"};m.__docgenInfo={description:"",methods:[],displayName:"DashboardInputs"};a.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var x,u,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '500px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Basic Inputs</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Input label="Name" placeholder="Enter your name" />\r
                    <Input label="Email" type="email" placeholder="Enter your email" />\r
                    <Input label="Password" type="password" placeholder="Enter your password" />\r
                    <Input label="Phone" type="tel" placeholder="+1 (555) 123-4567" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '500px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Size Variants</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Input label="Small Input" size="sm" placeholder="Small size input" />\r
                    <Input label="Medium Input (Default)" size="md" placeholder="Medium size input" />\r
                    <Input label="Large Input" size="lg" placeholder="Large size input" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,v,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '500px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Style Variants</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Input label="Default Variant" variant="default" placeholder="Default border style" />\r
                    <Input label="Filled Variant" variant="filled" placeholder="Filled background style" />\r
                    <Input label="Ghost Variant" variant="ghost" placeholder="Minimal underline style" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var j,D,S;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '500px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Icons and Addons</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Input label="Search" type="search" placeholder="Search anything..." prependIcon="🔍" />\r
                    <Input label="Website URL" type="url" placeholder="example.com" prependText="https://" appendText=".com" />\r
                    <Input label="Price" type="number" placeholder="0.00" prependText="$" appendText="USD" />\r
                    <Input label="Email with validation" type="email" placeholder="user@example.com" prependIcon="📧" appendIcon="✅" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var w,C,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '500px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Input States</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Input label="Normal State" placeholder="Type something..." helpText="This is a help text to guide the user" />\r
                    <Input label="Loading State" placeholder="Processing..." loading helpText="Input is currently processing" />\r
                    <Input label="Disabled State" placeholder="Cannot edit" disabled helpText="This field is disabled" />\r
                    <Input label="Required Field" placeholder="Enter required value" required helpText="This field is required" />\r
                    <Input label="Error State" placeholder="Invalid input" errorText="This field contains an error" helpText="Please correct the error above" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var z,W,E;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '500px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Color Variants</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    {colors.map(color => <Input key={color} label={\`\${color.charAt(0).toUpperCase() + color.slice(1)} Input\`} placeholder={\`\${color} colored input\`} color={color} />)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var _,q,N;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Registration Form</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
      }}>\r
                    <Input label="First Name" placeholder="John" required />\r
                    <Input label="Last Name" placeholder="Doe" required />\r
                    <div style={{
          gridColumn: '1 / -1'
        }}>\r
                        <Input label="Email Address" type="email" placeholder="john.doe@example.com" prependIcon="📧" required helpText="We'll use this for account notifications" />\r
                    </div>\r
                    <Input label="Password" type="password" placeholder="Enter password" required helpText="At least 8 characters" />\r
                    <Input label="Confirm Password" type="password" placeholder="Confirm password" required />\r
                    <div style={{
          gridColumn: '1 / -1'
        }}>\r
                        <Input label="Website (Optional)" type="url" placeholder="your-website" prependText="https://" appendText=".com" helpText="Your personal or company website" />\r
                    </div>\r
                </div>\r
            </div>\r
        </div>;
}`,...(N=(q=h.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var P,F,M;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Dashboard Controls</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
      }}>\r
                    <Input label="Search Users" type="search" placeholder="Search by name or email..." prependIcon="🔍" size="sm" />\r
                    <Input label="Filter by Date" type="date" size="sm" />\r
                    <Input label="Budget Range" type="number" placeholder="0" prependText="$" appendText="USD" size="sm" />\r
                    <Input label="API Endpoint" type="url" placeholder="api/v1/endpoint" prependText="https://api.example.com/" size="sm" variant="filled" />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Settings Form</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Input label="Organization Name" placeholder="Acme Corporation" prependIcon="🏢" />\r
                    <Input label="Contact Email" type="email" placeholder="contact@acme.com" prependIcon="📧" helpText="Primary contact for system notifications" />\r
                    <Input label="Slack Webhook URL" type="url" placeholder="hooks.slack.com/..." prependText="https://" helpText="Optional: Receive notifications in Slack" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,R,A;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <div style={{
    padding: '24px',
    maxWidth: '400px'
  }}>\r
            <Input {...args} />\r
        </div>;
}`,...(A=(R=a.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const Z=["Default","Sizes","Variants","WithIcons","States","Colors","FormExample","DashboardInputs","Interactive"];export{c as Colors,m as DashboardInputs,o as Default,h as FormExample,a as Interactive,n as Sizes,d as States,s as Variants,p as WithIcons,Z as __namedExportsOrder,X as default};
