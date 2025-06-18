import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as a}from"./useThemeMode-8InCWCg3.js";import{C as r}from"./Checkbox-DI5489kg.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";const N={title:"Components/Checkbox",component:r,argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},color:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info"]}}},o=()=>{const{toggleTheme:t}=a();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Basic Checkboxes"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{label:"Accept terms and conditions"}),e.jsx(r,{label:"Subscribe to newsletter",checked:!0}),e.jsx(r,{label:"Disabled option",disabled:!0}),e.jsx(r,{label:"Disabled checked",checked:!0,disabled:!0})]})]})]})},l=()=>{const{toggleTheme:t}=a();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Size Variants"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{label:"Small checkbox",size:"sm",checked:!0}),e.jsx(r,{label:"Medium checkbox (default)",size:"md",checked:!0}),e.jsx(r,{label:"Large checkbox",size:"lg",checked:!0})]})]})]})},s=()=>{const{toggleTheme:t}=a(),_=["primary","secondary","success","warning","danger","info"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Color Variants"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:_.map(d=>e.jsx(r,{label:`${d.charAt(0).toUpperCase()+d.slice(1)} checkbox`,color:d,checked:!0},d))})]})]})},c=()=>{const{toggleTheme:t}=a();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Indeterminate State"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{label:"Indeterminate checkbox",indeterminate:!0}),e.jsx(r,{label:"Indeterminate primary",indeterminate:!0,color:"primary"}),e.jsx(r,{label:"Indeterminate success",indeterminate:!0,color:"success"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"With Help Text"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{label:"Marketing emails",helpText:"Receive updates about new products and features"}),e.jsx(r,{label:"Required field",helpText:"This field is required to continue",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Error State"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{label:"Accept terms",errorText:"You must accept the terms to continue",required:!0}),e.jsx(r,{label:"Privacy policy",errorText:"Please review and accept our privacy policy",helpText:"Read our privacy policy for more information"})]})]})]})},n=()=>{const{toggleTheme:t}=a();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:t,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Registration Form"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(r,{label:"I agree to the Terms of Service",helpText:"By checking this box, you agree to our terms and conditions",required:!0}),e.jsx(r,{label:"Subscribe to our newsletter",helpText:"Get updates about new features and products"}),e.jsx(r,{label:"Enable two-factor authentication",helpText:"Recommended for better security",color:"success"}),e.jsx(r,{label:"Share usage analytics",helpText:"Help us improve by sharing anonymous usage data",color:"info"})]})]})]})},i=t=>e.jsx("div",{style:{padding:"24px"},children:e.jsx(r,{...t})});i.args={label:"Interactive checkbox",color:"primary",size:"md",checked:!1,disabled:!1,indeterminate:!1,helpText:"This is a help text",errorText:""};o.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Sizes"};s.__docgenInfo={description:"",methods:[],displayName:"Colors"};c.__docgenInfo={description:"",methods:[],displayName:"States"};n.__docgenInfo={description:"",methods:[],displayName:"FormExample"};i.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var p,x,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
                <h3>Basic Checkboxes</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Checkbox label="Accept terms and conditions" />\r
                    <Checkbox label="Subscribe to newsletter" checked />\r
                    <Checkbox label="Disabled option" disabled />\r
                    <Checkbox label="Disabled checked" checked disabled />\r
                </div>\r
            </div>\r
        </div>;
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var m,u,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
                <h3>Size Variants</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Checkbox label="Small checkbox" size="sm" checked />\r
                    <Checkbox label="Medium checkbox (default)" size="md" checked />\r
                    <Checkbox label="Large checkbox" size="lg" checked />\r
                </div>\r
            </div>\r
        </div>;
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,y,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
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
                <h3>Color Variants</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    {colors.map(color => <Checkbox key={color} label={\`\${color.charAt(0).toUpperCase() + color.slice(1)} checkbox\`} color={color} checked />)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,T,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
                <h3>Indeterminate State</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Checkbox label="Indeterminate checkbox" indeterminate />\r
                    <Checkbox label="Indeterminate primary" indeterminate color="primary" />\r
                    <Checkbox label="Indeterminate success" indeterminate color="success" />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>With Help Text</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Checkbox label="Marketing emails" helpText="Receive updates about new products and features" />\r
                    <Checkbox label="Required field" helpText="This field is required to continue" required />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Error State</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>\r
                    <Checkbox label="Accept terms" errorText="You must accept the terms to continue" required />\r
                    <Checkbox label="Privacy policy" errorText="Please review and accept our privacy policy" helpText="Read our privacy policy for more information" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var j,C,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
                <h3>Registration Form</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px'
      }}>\r
                    <Checkbox label="I agree to the Terms of Service" helpText="By checking this box, you agree to our terms and conditions" required />\r
                    <Checkbox label="Subscribe to our newsletter" helpText="Get updates about new features and products" />\r
                    <Checkbox label="Enable two-factor authentication" helpText="Recommended for better security" color="success" />\r
                    <Checkbox label="Share usage analytics" helpText="Help us improve by sharing anonymous usage data" color="info" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,w,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <div style={{
    padding: '24px'
  }}>\r
            <Checkbox {...args} />\r
        </div>;
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const F=["Default","Sizes","Colors","States","FormExample","Interactive"];export{s as Colors,o as Default,n as FormExample,i as Interactive,l as Sizes,c as States,F as __namedExportsOrder,N as default};
