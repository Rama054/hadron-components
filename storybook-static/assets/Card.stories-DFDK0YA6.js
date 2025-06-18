import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as a}from"./index-Co38GRlK.js";import{B as d}from"./Button-kmOhRj6m.js";import{A as Q}from"./Avatar-B347mshv.js";import{B as J}from"./Badge-D5c-vvXp.js";import{u as c}from"./useThemeMode-8InCWCg3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BZISi7jw.js";import"./Spinner-DKwzja_x.js";function _({children:i,maxWidth:t,className:o="",color:s,variant:n="default",padding:E="md",radius:G="lg",shadow:q="sm",hoverable:$=!1,...L}){let u=`q-card-root ${o}`.trim();return $&&(u+=" q-card-hoverable"),r.jsx("div",{className:u,"data-color":s,"data-variant":n,"data-padding":E,"data-radius":G,"data-shadow":q,style:{maxWidth:t},...L,children:i})}function V({children:i,className:t="",divider:o=!0,...s}){let n=`q-card-header ${t}`.trim();return o||(n+=" q-card-header-no-divider"),r.jsx("div",{className:n,...s,children:i})}function O({children:i,className:t="",...o}){let s=`q-card-body ${t}`.trim();return r.jsx("div",{className:s,...o,children:i})}function U({children:i,className:t="",divider:o=!0,...s}){let n=`q-card-footer ${t}`.trim();return o||(n+=" q-card-footer-no-divider"),r.jsx("div",{className:n,...s,children:i})}_.propTypes={children:a.node,maxWidth:a.string,className:a.string,color:a.string,variant:a.oneOf(["default","outlined","filled","ghost"]),padding:a.oneOf(["none","sm","md","lg","xl"]),radius:a.oneOf(["none","sm","md","lg","xl"]),shadow:a.oneOf(["none","sm","md","lg","xl"]),hoverable:a.bool};V.propTypes={children:a.node,className:a.string,divider:a.bool};O.propTypes={children:a.node,className:a.string};U.propTypes={children:a.node,className:a.string,divider:a.bool};const e={Root:_,Header:V,Body:O,Footer:U},dr={title:"Components/Card",component:e.Root,argTypes:{variant:{control:{type:"select"},options:["default","outlined","filled","ghost"]},padding:{control:{type:"select"},options:["none","sm","md","lg","xl"]},radius:{control:{type:"select"},options:["none","sm","md","lg","xl"]},shadow:{control:{type:"select"},options:["none","sm","md","lg","xl"]},color:{control:{type:"select"},options:["primary","secondary","success","warning","danger","info"]}}},h=()=>{const{toggleTheme:i}=c();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[r.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Basic Cards"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px"},children:[r.jsx(e.Root,{maxWidth:"300px",children:r.jsx(e.Body,{children:"This is a simple card with just body content. Perfect for displaying basic information in a clean, minimal way."})}),r.jsxs(e.Root,{maxWidth:"300px",children:[r.jsx(e.Header,{children:r.jsx("h3",{style:{margin:0,fontSize:"1.125rem"},children:"Card with Header"})}),r.jsx(e.Body,{children:"This card includes a header section with a title. Great for organizing content with clear sections."})]}),r.jsxs(e.Root,{maxWidth:"300px",children:[r.jsx(e.Header,{children:r.jsx("h3",{style:{margin:0,fontSize:"1.125rem"},children:"Complete Card"})}),r.jsx(e.Body,{children:"This card has all sections: header, body, and footer. Perfect for forms, detailed information, or action cards."}),r.jsxs(e.Footer,{children:[r.jsx(d,{size:"sm",variant:"outline",color:"secondary",children:"Cancel"}),r.jsx(d,{size:"sm",color:"primary",children:"Save"})]})]})]})]})]})},p=()=>{const{toggleTheme:i}=c();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[r.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Card Variants"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[r.jsxs("div",{style:{textAlign:"center"},children:[r.jsxs(e.Root,{variant:"default",maxWidth:"250px",children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:"Default"})}),r.jsx(e.Body,{children:"Standard card with background and border."})]}),r.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Default"})]}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsxs(e.Root,{variant:"outlined",maxWidth:"250px",children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:"Outlined"})}),r.jsx(e.Body,{children:"Emphasized border, no shadow."})]}),r.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Outlined"})]}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsxs(e.Root,{variant:"filled",maxWidth:"250px",children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:"Filled"})}),r.jsx(e.Body,{children:"Subtle background fill."})]}),r.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Filled"})]}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsxs(e.Root,{variant:"ghost",maxWidth:"250px",children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:"Ghost"})}),r.jsx(e.Body,{children:"Minimal styling, transparent."})]}),r.jsx("div",{style:{fontSize:"12px",marginTop:"8px"},children:"Ghost"})]})]})]})]})},m=()=>{const{toggleTheme:i}=c();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[r.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Padding Variants"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:["none","sm","md","lg","xl"].map(t=>r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(e.Root,{padding:t,maxWidth:"200px",children:r.jsxs(e.Body,{children:["Padding: ",t]})}),r.jsx("div",{style:{fontSize:"12px",marginTop:"8px",textTransform:"capitalize"},children:t})]},t))})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Shadow Variants"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:["none","sm","md","lg","xl"].map(t=>r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(e.Root,{shadow:t,maxWidth:"200px",children:r.jsxs(e.Body,{children:["Shadow: ",t]})}),r.jsx("div",{style:{fontSize:"12px",marginTop:"8px",textTransform:"capitalize"},children:t})]},t))})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Radius Variants"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:["none","sm","md","lg","xl"].map(t=>r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx(e.Root,{radius:t,maxWidth:"200px",children:r.jsxs(e.Body,{children:["Radius: ",t]})}),r.jsx("div",{style:{fontSize:"12px",marginTop:"8px",textTransform:"capitalize"},children:t})]},t))})]})]})},x=()=>{const{toggleTheme:i}=c(),t=["primary","secondary","success","warning","danger","info"];return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[r.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Color Variants"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:t.map(o=>r.jsxs(e.Root,{color:o,maxWidth:"200px",children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0,textTransform:"capitalize"},children:o})}),r.jsxs(e.Body,{children:["Card with ",o," color theme applied to background and borders."]})]},o))})]})]})},g=()=>{const{toggleTheme:i}=c();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[r.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Hoverable Cards"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px"},children:[r.jsxs(e.Root,{hoverable:!0,maxWidth:"300px",children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:"Hoverable Card"})}),r.jsx(e.Body,{children:"This card has hover effects. Try hovering over it to see the elevation and border changes."}),r.jsx(e.Footer,{children:r.jsx(d,{size:"sm",variant:"ghost",color:"primary",children:"Learn More"})})]}),r.jsxs(e.Root,{hoverable:!0,variant:"outlined",maxWidth:"300px",children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:"Outlined + Hover"})}),r.jsx(e.Body,{children:"Combines outlined variant with hover effects for a subtle but interactive feel."}),r.jsx(e.Footer,{children:r.jsx(d,{size:"sm",variant:"outline",color:"secondary",children:"Action"})})]})]})]})]})},y=()=>{const{toggleTheme:i}=c();return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[r.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),r.jsxs("div",{children:[r.jsx("h3",{children:"Dashboard Examples"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px"},children:[r.jsxs(e.Root,{hoverable:!0,children:[r.jsx(e.Header,{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[r.jsx("h4",{style:{margin:0},children:"Total Revenue"}),r.jsx(J,{color:"success",content:"+12%",size:"xs"})]})}),r.jsxs(e.Body,{children:[r.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold",color:"var(--hadr-color-success)"},children:"$45,231"}),r.jsx("div",{style:{fontSize:"0.875rem",color:"var(--hadr-text-muted)",marginTop:"4px"},children:"vs last month"})]})]}),r.jsxs(e.Root,{children:[r.jsx(e.Header,{divider:!1,children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",width:"100%"},children:[r.jsx(Q,{src:"https://i.pravatar.cc/250?u=profile",alt:"User",size:"md",status:"online"}),r.jsxs("div",{children:[r.jsx("h4",{style:{margin:0,fontSize:"1rem"},children:"Sarah Wilson"}),r.jsx("div",{style:{fontSize:"0.875rem",color:"var(--hadr-text-muted)"},children:"Product Manager"})]})]})}),r.jsx(e.Body,{children:r.jsx("div",{style:{fontSize:"0.875rem",lineHeight:"1.5"},children:"Managing the design system and component library. Available for project discussions."})}),r.jsxs(e.Footer,{children:[r.jsx(d,{size:"sm",variant:"ghost",color:"secondary",children:"Message"}),r.jsx(d,{size:"sm",variant:"outline",color:"primary",children:"View Profile"})]})]}),r.jsxs(e.Root,{variant:"outlined",children:[r.jsx(e.Header,{children:r.jsx("h4",{style:{margin:0},children:"Quick Actions"})}),r.jsx(e.Body,{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(d,{variant:"ghost",color:"primary",leftIcon:"📊",fullWidth:!0,children:"Generate Report"}),r.jsx(d,{variant:"ghost",color:"secondary",leftIcon:"👥",fullWidth:!0,children:"Manage Users"}),r.jsx(d,{variant:"ghost",color:"success",leftIcon:"💾",fullWidth:!0,children:"Export Data"}),r.jsx(d,{variant:"ghost",color:"warning",leftIcon:"⚙️",fullWidth:!0,children:"Settings"})]})})]}),r.jsxs(e.Root,{color:"warning",variant:"filled",children:[r.jsx(e.Header,{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("span",{children:"⚠️"}),r.jsx("h4",{style:{margin:0},children:"System Update"})]})}),r.jsx(e.Body,{children:"A new version is available. Please update your system to ensure optimal performance and security."}),r.jsxs(e.Footer,{children:[r.jsx(d,{size:"sm",variant:"ghost",color:"warning",children:"Later"}),r.jsx(d,{size:"sm",color:"warning",children:"Update Now"})]})]})]})]})]})},l=i=>r.jsx("div",{style:{padding:"24px"},children:r.jsxs(e.Root,{...i,children:[r.jsx(e.Header,{children:r.jsx("h3",{style:{margin:0},children:"Interactive Card"})}),r.jsx(e.Body,{children:"This is a customizable card component. Use the controls to experiment with different variants, padding, shadows, and other properties."}),r.jsxs(e.Footer,{children:[r.jsx(d,{size:"sm",variant:"outline",color:"secondary",children:"Cancel"}),r.jsx(d,{size:"sm",color:"primary",children:"Confirm"})]})]})});l.args={variant:"default",padding:"md",radius:"lg",shadow:"sm",hoverable:!1,maxWidth:"400px"};h.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"Variants"};m.__docgenInfo={description:"",methods:[],displayName:"Sizing"};x.__docgenInfo={description:"",methods:[],displayName:"Colors"};g.__docgenInfo={description:"",methods:[],displayName:"Interactive"};y.__docgenInfo={description:"",methods:[],displayName:"DashboardCards"};l.__docgenInfo={description:"",methods:[],displayName:"CustomCard"};var v,f,C;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
                <h3>Basic Cards</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>\r
                    <Card.Root maxWidth="300px">\r
                        <Card.Body>\r
                            This is a simple card with just body content. Perfect for displaying basic information in a clean, minimal way.\r
                        </Card.Body>\r
                    </Card.Root>\r
\r
                    <Card.Root maxWidth="300px">\r
                        <Card.Header>\r
                            <h3 style={{
              margin: 0,
              fontSize: '1.125rem'
            }}>Card with Header</h3>\r
                        </Card.Header>\r
                        <Card.Body>\r
                            This card includes a header section with a title. Great for organizing content with clear sections.\r
                        </Card.Body>\r
                    </Card.Root>\r
\r
                    <Card.Root maxWidth="300px">\r
                        <Card.Header>\r
                            <h3 style={{
              margin: 0,
              fontSize: '1.125rem'
            }}>Complete Card</h3>\r
                        </Card.Header>\r
                        <Card.Body>\r
                            This card has all sections: header, body, and footer. Perfect for forms, detailed information, or action cards.\r
                        </Card.Body>\r
                        <Card.Footer>\r
                            <Button size="sm" variant="outline" color="secondary">Cancel</Button>\r
                            <Button size="sm" color="primary">Save</Button>\r
                        </Card.Footer>\r
                    </Card.Root>\r
                </div>\r
            </div>\r
        </div>;
}`,...(C=(f=h.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var j,T,B;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
                <h3>Card Variants</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>\r
                    <div style={{
          textAlign: 'center'
        }}>\r
                        <Card.Root variant="default" maxWidth="250px">\r
                            <Card.Header>\r
                                <h4 style={{
                margin: 0
              }}>Default</h4>\r
                            </Card.Header>\r
                            <Card.Body>\r
                                Standard card with background and border.\r
                            </Card.Body>\r
                        </Card.Root>\r
                        <div style={{
            fontSize: '12px',
            marginTop: '8px'
          }}>Default</div>\r
                    </div>\r
\r
                    <div style={{
          textAlign: 'center'
        }}>\r
                        <Card.Root variant="outlined" maxWidth="250px">\r
                            <Card.Header>\r
                                <h4 style={{
                margin: 0
              }}>Outlined</h4>\r
                            </Card.Header>\r
                            <Card.Body>\r
                                Emphasized border, no shadow.\r
                            </Card.Body>\r
                        </Card.Root>\r
                        <div style={{
            fontSize: '12px',
            marginTop: '8px'
          }}>Outlined</div>\r
                    </div>\r
\r
                    <div style={{
          textAlign: 'center'
        }}>\r
                        <Card.Root variant="filled" maxWidth="250px">\r
                            <Card.Header>\r
                                <h4 style={{
                margin: 0
              }}>Filled</h4>\r
                            </Card.Header>\r
                            <Card.Body>\r
                                Subtle background fill.\r
                            </Card.Body>\r
                        </Card.Root>\r
                        <div style={{
            fontSize: '12px',
            marginTop: '8px'
          }}>Filled</div>\r
                    </div>\r
\r
                    <div style={{
          textAlign: 'center'
        }}>\r
                        <Card.Root variant="ghost" maxWidth="250px">\r
                            <Card.Header>\r
                                <h4 style={{
                margin: 0
              }}>Ghost</h4>\r
                            </Card.Header>\r
                            <Card.Body>\r
                                Minimal styling, transparent.\r
                            </Card.Body>\r
                        </Card.Root>\r
                        <div style={{
            fontSize: '12px',
            marginTop: '8px'
          }}>Ghost</div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>;
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var b,z,w;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
                <h3>Padding Variants</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>\r
                    {['none', 'sm', 'md', 'lg', 'xl'].map(padding => <div key={padding} style={{
          textAlign: 'center'
        }}>\r
                            <Card.Root padding={padding} maxWidth="200px">\r
                                <Card.Body>\r
                                    Padding: {padding}\r
                                </Card.Body>\r
                            </Card.Root>\r
                            <div style={{
            fontSize: '12px',
            marginTop: '8px',
            textTransform: 'capitalize'
          }}>{padding}</div>\r
                        </div>)}\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Shadow Variants</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>\r
                    {['none', 'sm', 'md', 'lg', 'xl'].map(shadow => <div key={shadow} style={{
          textAlign: 'center'
        }}>\r
                            <Card.Root shadow={shadow} maxWidth="200px">\r
                                <Card.Body>\r
                                    Shadow: {shadow}\r
                                </Card.Body>\r
                            </Card.Root>\r
                            <div style={{
            fontSize: '12px',
            marginTop: '8px',
            textTransform: 'capitalize'
          }}>{shadow}</div>\r
                        </div>)}\r
                </div>\r
            </div>\r
\r
            <div>\r
                <h3>Radius Variants</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>\r
                    {['none', 'sm', 'md', 'lg', 'xl'].map(radius => <div key={radius} style={{
          textAlign: 'center'
        }}>\r
                            <Card.Root radius={radius} maxWidth="200px">\r
                                <Card.Body>\r
                                    Radius: {radius}\r
                                </Card.Body>\r
                            </Card.Root>\r
                            <div style={{
            fontSize: '12px',
            marginTop: '8px',
            textTransform: 'capitalize'
          }}>{radius}</div>\r
                        </div>)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(w=(z=m.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var R,S,H;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>\r
                    {colors.map(color => <Card.Root key={color} color={color} maxWidth="200px">\r
                            <Card.Header>\r
                                <h4 style={{
              margin: 0,
              textTransform: 'capitalize'
            }}>{color}</h4>\r
                            </Card.Header>\r
                            <Card.Body>\r
                                Card with {color} color theme applied to background and borders.\r
                            </Card.Body>\r
                        </Card.Root>)}\r
                </div>\r
            </div>\r
        </div>;
}`,...(H=(S=x.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var W,D,A;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
                <h3>Hoverable Cards</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>\r
                    <Card.Root hoverable maxWidth="300px">\r
                        <Card.Header>\r
                            <h4 style={{
              margin: 0
            }}>Hoverable Card</h4>\r
                        </Card.Header>\r
                        <Card.Body>\r
                            This card has hover effects. Try hovering over it to see the elevation and border changes.\r
                        </Card.Body>\r
                        <Card.Footer>\r
                            <Button size="sm" variant="ghost" color="primary">Learn More</Button>\r
                        </Card.Footer>\r
                    </Card.Root>\r
\r
                    <Card.Root hoverable variant="outlined" maxWidth="300px">\r
                        <Card.Header>\r
                            <h4 style={{
              margin: 0
            }}>Outlined + Hover</h4>\r
                        </Card.Header>\r
                        <Card.Body>\r
                            Combines outlined variant with hover effects for a subtle but interactive feel.\r
                        </Card.Body>\r
                        <Card.Footer>\r
                            <Button size="sm" variant="outline" color="secondary">Action</Button>\r
                        </Card.Footer>\r
                    </Card.Root>\r
                </div>\r
            </div>\r
        </div>;
}`,...(A=(D=g.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var I,k,F;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
                <h3>Dashboard Examples</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>\r
                    \r
                    {/* Stats Card */}\r
                    <Card.Root hoverable>\r
                        <Card.Header>\r
                            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}>\r
                                <h4 style={{
                margin: 0
              }}>Total Revenue</h4>\r
                                <Badge color="success" content="+12%" size="xs" />\r
                            </div>\r
                        </Card.Header>\r
                        <Card.Body>\r
                            <div style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'var(--hadr-color-success)'
            }}>\r
                                $45,231\r
                            </div>\r
                            <div style={{
              fontSize: '0.875rem',
              color: 'var(--hadr-text-muted)',
              marginTop: '4px'
            }}>\r
                                vs last month\r
                            </div>\r
                        </Card.Body>\r
                    </Card.Root>\r
\r
                    {/* User Profile Card */}\r
                    <Card.Root>\r
                        <Card.Header divider={false}>\r
                            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%'
            }}>\r
                                <Avatar src="https://i.pravatar.cc/250?u=profile" alt="User" size="md" status="online" />\r
                                <div>\r
                                    <h4 style={{
                  margin: 0,
                  fontSize: '1rem'
                }}>Sarah Wilson</h4>\r
                                    <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--hadr-text-muted)'
                }}>Product Manager</div>\r
                                </div>\r
                            </div>\r
                        </Card.Header>\r
                        <Card.Body>\r
                            <div style={{
              fontSize: '0.875rem',
              lineHeight: '1.5'
            }}>\r
                                Managing the design system and component library. Available for project discussions.\r
                            </div>\r
                        </Card.Body>\r
                        <Card.Footer>\r
                            <Button size="sm" variant="ghost" color="secondary">Message</Button>\r
                            <Button size="sm" variant="outline" color="primary">View Profile</Button>\r
                        </Card.Footer>\r
                    </Card.Root>\r
\r
                    {/* Quick Actions */}\r
                    <Card.Root variant="outlined">\r
                        <Card.Header>\r
                            <h4 style={{
              margin: 0
            }}>Quick Actions</h4>\r
                        </Card.Header>\r
                        <Card.Body>\r
                            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>\r
                                <Button variant="ghost" color="primary" leftIcon="📊" fullWidth>Generate Report</Button>\r
                                <Button variant="ghost" color="secondary" leftIcon="👥" fullWidth>Manage Users</Button>\r
                                <Button variant="ghost" color="success" leftIcon="💾" fullWidth>Export Data</Button>\r
                                <Button variant="ghost" color="warning" leftIcon="⚙️" fullWidth>Settings</Button>\r
                            </div>\r
                        </Card.Body>\r
                    </Card.Root>\r
\r
                    {/* Notification Card */}\r
                    <Card.Root color="warning" variant="filled">\r
                        <Card.Header>\r
                            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>\r
                                <span>⚠️</span>\r
                                <h4 style={{
                margin: 0
              }}>System Update</h4>\r
                            </div>\r
                        </Card.Header>\r
                        <Card.Body>\r
                            A new version is available. Please update your system to ensure optimal performance and security.\r
                        </Card.Body>\r
                        <Card.Footer>\r
                            <Button size="sm" variant="ghost" color="warning">Later</Button>\r
                            <Button size="sm" color="warning">Update Now</Button>\r
                        </Card.Footer>\r
                    </Card.Root>\r
\r
                </div>\r
            </div>\r
        </div>;
}`,...(F=(k=y.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var M,N,P;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <div style={{
    padding: '24px'
  }}>\r
            <Card.Root {...args}>\r
                <Card.Header>\r
                    <h3 style={{
          margin: 0
        }}>Interactive Card</h3>\r
                </Card.Header>\r
                <Card.Body>\r
                    This is a customizable card component. Use the controls to experiment with different variants, padding, shadows, and other properties.\r
                </Card.Body>\r
                <Card.Footer>\r
                    <Button size="sm" variant="outline" color="secondary">Cancel</Button>\r
                    <Button size="sm" color="primary">Confirm</Button>\r
                </Card.Footer>\r
            </Card.Root>\r
        </div>;
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const or=["Default","Variants","Sizing","Colors","Interactive","DashboardCards","CustomCard"];export{x as Colors,l as CustomCard,y as DashboardCards,h as Default,g as Interactive,m as Sizing,p as Variants,or as __namedExportsOrder,dr as default};
