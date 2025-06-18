import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as w}from"./useThemeMode-8InCWCg3.js";import{r as l}from"./index-BZISi7jw.js";import{P as r}from"./index-Co38GRlK.js";import{B as p}from"./Button-kmOhRj6m.js";import{A as X}from"./Avatar-B347mshv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-DKwzja_x.js";const y=l.createContext();let x=null;const C=new Set,Y=o=>{C.forEach(d=>{d!==o&&d.setIsOpen(!1)})};function $({children:o,disabled:d=!1}){const[t,i]=l.useState(!1),u=l.useRef(null),s=l.useRef({setIsOpen:i});return s.current.setIsOpen=i,l.useEffect(()=>(C.add(s.current),()=>{C.delete(s.current),x===s.current&&(x=null)}),[]),l.useEffect(()=>{t?(Y(s.current),x=s.current):x===s.current&&(x=null)},[t]),l.useEffect(()=>{const a=c=>{c.key==="Escape"&&t&&i(!1)};return t&&document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[t]),e.jsx(y.Provider,{value:{isOpen:t,setIsOpen:i,disabled:d},children:e.jsx("div",{className:"q-dropdown-menu",ref:u,children:o})})}function K({children:o,asChild:d=!1}){const{isOpen:t,setIsOpen:i,disabled:u}=l.useContext(y);l.useEffect(()=>{function c(m){m.target.closest(".q-dropdown-menu")||i(!1)}return t&&document.addEventListener("click",c),()=>document.removeEventListener("click",c)},[t,i]);const a={onClick:c=>{c.stopPropagation(),u||i(!t)},"aria-expanded":t,"aria-haspopup":"menu",disabled:u};return d?e.jsx("div",{className:"q-dropdown-trigger",...a,children:o}):e.jsx("button",{className:"q-dropdown-trigger",...a,children:o})}function H({children:o,align:d="start",side:t="bottom",sideOffset:i=8,alignOffset:u=0,className:s}){const{isOpen:a}=l.useContext(y),c=l.useRef(null);if(l.useEffect(()=>{if(a&&c.current){const v=c.current.querySelector('[role="menuitem"]');v&&v.focus()}},[a]),!a)return null;let m="q-dropdown-content";return s&&(m+=` ${s}`),e.jsx("div",{ref:c,className:m,"data-align":d,"data-side":t,style:{"--side-offset":`${i}px`,"--align-offset":`${u}px`},role:"menu",children:o})}function J({children:o,icon:d,onClick:t,disabled:i=!1,destructive:u=!1,className:s,...a}){const{setIsOpen:c}=l.useContext(y),m=h=>{h.preventDefault(),i||(c(!1),t&&t(h))},v=h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),m(h))};let T="q-dropdown-item";return s&&(T+=` ${s}`),i&&(T+=" q-dropdown-item-disabled"),u&&(T+=" q-dropdown-item-destructive"),e.jsxs("div",{className:T,onClick:m,onKeyDown:v,role:"menuitem",tabIndex:i?-1:0,"aria-disabled":i,...a,children:[d&&e.jsx("span",{className:"q-dropdown-item-icon",children:d}),e.jsx("span",{className:"q-dropdown-item-text",children:o})]})}function G({children:o,className:d,...t}){let i="q-dropdown-label";return d&&(i+=` ${d}`),e.jsx("div",{className:i,...t,children:o})}function Q({className:o}){let d="q-dropdown-separator";return o&&(d+=` ${o}`),e.jsx("div",{className:d,role:"separator"})}$.propTypes={children:r.node.isRequired,disabled:r.bool};K.propTypes={children:r.node.isRequired,asChild:r.bool};H.propTypes={children:r.node.isRequired,align:r.oneOf(["start","center","end"]),side:r.oneOf(["top","bottom","left","right"]),sideOffset:r.number,alignOffset:r.number,className:r.string};J.propTypes={children:r.node.isRequired,icon:r.node,onClick:r.func,disabled:r.bool,destructive:r.bool,className:r.string};G.propTypes={children:r.node.isRequired,className:r.string};Q.propTypes={className:r.string};const n={Root:$,Trigger:K,Content:H,Item:J,Label:G,Separator:Q},se={title:"Components/DropdownMenu",component:n.Root},D=()=>{const{toggleTheme:o}=w();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Basic Dropdown"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",children:"Open Menu"})}),e.jsxs(n.Content,{children:[e.jsx(n.Label,{children:"Actions"}),e.jsx(n.Item,{icon:"📝",children:"Edit"}),e.jsx(n.Item,{icon:"📋",children:"Copy"}),e.jsx(n.Item,{icon:"🗑️",destructive:!0,children:"Delete"})]})]}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{children:"Options"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{icon:"⚙️",children:"Settings"}),e.jsx(n.Item,{icon:"👤",children:"Profile"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"🚪",children:"Logout"})]})]})]})]})]})},g=()=>{const{toggleTheme:o}=w();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Alignment Options"}),e.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center",alignItems:"flex-start"},children:[e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",children:"Align Start"})}),e.jsxs(n.Content,{align:"start",children:[e.jsx(n.Item,{children:"Aligned to start"}),e.jsx(n.Item,{children:"Second item"}),e.jsx(n.Item,{children:"Third item"})]})]}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",children:"Align Center"})}),e.jsxs(n.Content,{align:"center",children:[e.jsx(n.Item,{children:"Centered alignment"}),e.jsx(n.Item,{children:"Second item"}),e.jsx(n.Item,{children:"Third item"})]})]}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",children:"Align End"})}),e.jsxs(n.Content,{align:"end",children:[e.jsx(n.Item,{children:"Aligned to end"}),e.jsx(n.Item,{children:"Second item"}),e.jsx(n.Item,{children:"Third item"})]})]})]})]}),e.jsxs("div",{style:{marginTop:"100px"},children:[e.jsx("h3",{children:"Side Positioning"}),e.jsxs("div",{style:{display:"flex",gap:"16px",justifyContent:"center"},children:[e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",children:"Top Side"})}),e.jsxs(n.Content,{side:"top",children:[e.jsx(n.Item,{children:"Opens above"}),e.jsx(n.Item,{children:"Second item"})]})]}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",children:"Right Side"})}),e.jsxs(n.Content,{side:"right",children:[e.jsx(n.Item,{children:"Opens to right"}),e.jsx(n.Item,{children:"Second item"})]})]})]})]})]})},M=()=>{const{toggleTheme:o}=w();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Menu with Icons"}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",rightIcon:"▼",children:"File"})}),e.jsxs(n.Content,{children:[e.jsx(n.Label,{children:"File Operations"}),e.jsx(n.Item,{icon:"📄",children:"New File"}),e.jsx(n.Item,{icon:"📁",children:"Open Folder"}),e.jsx(n.Item,{icon:"💾",children:"Save"}),e.jsx(n.Item,{icon:"📤",children:"Export"}),e.jsx(n.Separator,{}),e.jsx(n.Label,{children:"Recent"}),e.jsx(n.Item,{icon:"📋",children:"Document.pdf"}),e.jsx(n.Item,{icon:"📊",children:"Spreadsheet.xlsx"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"🚪",destructive:!0,children:"Close Project"})]})]})]})]})},I=()=>{const{toggleTheme:o}=w();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"User Profile Menu"}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx("div",{style:{cursor:"pointer"},children:e.jsx(X,{src:"https://i.pravatar.cc/250?u=user",alt:"User Avatar",size:"md",status:"online"})})}),e.jsxs(n.Content,{align:"end",children:[e.jsx(n.Label,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsx("span",{style:{fontWeight:600},children:"John Doe"}),e.jsx("span",{style:{fontSize:"0.75rem",opacity:.7},children:"john@example.com"})]})}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"👤",children:"Profile"}),e.jsx(n.Item,{icon:"⚙️",children:"Settings"}),e.jsx(n.Item,{icon:"🛡️",children:"Privacy"}),e.jsx(n.Item,{icon:"💳",children:"Billing"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"❓",children:"Help & Support"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"🚪",destructive:!0,children:"Sign out"})]})]})]})]})},j=()=>{const{toggleTheme:o}=w();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Dashboard Context Menus"}),e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"ghost",size:"sm",children:"⋯"})}),e.jsxs(n.Content,{children:[e.jsx(n.Label,{children:"Row Actions"}),e.jsx(n.Item,{icon:"👁️",children:"View Details"}),e.jsx(n.Item,{icon:"✏️",children:"Edit"}),e.jsx(n.Item,{icon:"📋",children:"Duplicate"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"📤",children:"Export"}),e.jsx(n.Item,{icon:"📧",children:"Share"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"🗑️",destructive:!0,children:"Delete"})]})]}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",size:"sm",rightIcon:"▼",children:"Chart Options"})}),e.jsxs(n.Content,{children:[e.jsx(n.Label,{children:"View Options"}),e.jsx(n.Item,{icon:"📊",children:"Bar Chart"}),e.jsx(n.Item,{icon:"📈",children:"Line Chart"}),e.jsx(n.Item,{icon:"🥧",children:"Pie Chart"}),e.jsx(n.Separator,{}),e.jsx(n.Label,{children:"Time Range"}),e.jsx(n.Item,{icon:"📅",children:"Last 7 days"}),e.jsx(n.Item,{icon:"📅",children:"Last 30 days"}),e.jsx(n.Item,{icon:"📅",children:"Last 90 days"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"💾",children:"Save View"})]})]}),e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"soft",size:"sm",color:"secondary",leftIcon:"🔍",children:"Filters"})}),e.jsxs(n.Content,{children:[e.jsx(n.Label,{children:"Filter by Status"}),e.jsx(n.Item,{icon:"✅",children:"Active"}),e.jsx(n.Item,{icon:"⏸️",children:"Pending"}),e.jsx(n.Item,{icon:"❌",children:"Inactive"}),e.jsx(n.Separator,{}),e.jsx(n.Label,{children:"Filter by Type"}),e.jsx(n.Item,{icon:"📁",children:"Projects"}),e.jsx(n.Item,{icon:"✅",children:"Tasks"}),e.jsx(n.Item,{icon:"👥",children:"Teams"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"🔄",children:"Reset Filters"})]})]})]})]})]})},f=()=>{const{toggleTheme:o}=w();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsx("button",{onClick:o,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Item States"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",children:"Item States"})}),e.jsxs(n.Content,{children:[e.jsx(n.Label,{children:"Menu Items"}),e.jsx(n.Item,{icon:"✅",children:"Normal Item"}),e.jsx(n.Item,{icon:"⏸️",disabled:!0,children:"Disabled Item"}),e.jsx(n.Item,{icon:"⚠️",destructive:!0,children:"Destructive Item"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{icon:"❌",destructive:!0,disabled:!0,children:"Disabled Destructive"})]})]}),e.jsxs(n.Root,{disabled:!0,children:[e.jsx(n.Trigger,{children:e.jsx(p,{variant:"outline",disabled:!0,children:"Disabled Menu"})}),e.jsx(n.Content,{children:e.jsx(n.Item,{children:"This won't show"})})]})]})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"Positioning"};M.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};I.__docgenInfo={description:"",methods:[],displayName:"UserMenu"};j.__docgenInfo={description:"",methods:[],displayName:"DashboardActions"};f.__docgenInfo={description:"",methods:[],displayName:"States"};var b,S,R;D.parameters={...D.parameters,docs:{...(b=D.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
                <h3>Basic Dropdown</h3>\r
                <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start'
      }}>\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline">Open Menu</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content>\r
                            <DropdownMenu.Label>Actions</DropdownMenu.Label>\r
                            <DropdownMenu.Item icon="📝">Edit</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="📋">Copy</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="🗑️" destructive>Delete</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button>Options</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content>\r
                            <DropdownMenu.Item icon="⚙️">Settings</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="👤">Profile</DropdownMenu.Item>\r
                            <DropdownMenu.Separator />\r
                            <DropdownMenu.Item icon="🚪">Logout</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
                </div>\r
            </div>\r
        </div>;
}`,...(R=(S=D.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var L,B,O;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
                <h3>Alignment Options</h3>\r
                <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline">Align Start</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content align="start">\r
                            <DropdownMenu.Item>Aligned to start</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Third item</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline">Align Center</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content align="center">\r
                            <DropdownMenu.Item>Centered alignment</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Third item</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline">Align End</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content align="end">\r
                            <DropdownMenu.Item>Aligned to end</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Third item</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
                </div>\r
            </div>\r
\r
            <div style={{
      marginTop: '100px'
    }}>\r
                <h3>Side Positioning</h3>\r
                <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center'
      }}>\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline">Top Side</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content side="top">\r
                            <DropdownMenu.Item>Opens above</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline">Right Side</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content side="right">\r
                            <DropdownMenu.Item>Opens to right</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Second item</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
                </div>\r
            </div>\r
        </div>;
}`,...(O=(B=g.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var k,A,P;M.parameters={...M.parameters,docs:{...(k=M.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
                <h3>Menu with Icons</h3>\r
                <DropdownMenu.Root>\r
                    <DropdownMenu.Trigger>\r
                        <Button variant="outline" rightIcon="▼">File</Button>\r
                    </DropdownMenu.Trigger>\r
                    <DropdownMenu.Content>\r
                        <DropdownMenu.Label>File Operations</DropdownMenu.Label>\r
                        <DropdownMenu.Item icon="📄">New File</DropdownMenu.Item>\r
                        <DropdownMenu.Item icon="📁">Open Folder</DropdownMenu.Item>\r
                        <DropdownMenu.Item icon="💾">Save</DropdownMenu.Item>\r
                        <DropdownMenu.Item icon="📤">Export</DropdownMenu.Item>\r
                        <DropdownMenu.Separator />\r
                        <DropdownMenu.Label>Recent</DropdownMenu.Label>\r
                        <DropdownMenu.Item icon="📋">Document.pdf</DropdownMenu.Item>\r
                        <DropdownMenu.Item icon="📊">Spreadsheet.xlsx</DropdownMenu.Item>\r
                        <DropdownMenu.Separator />\r
                        <DropdownMenu.Item icon="🚪" destructive>Close Project</DropdownMenu.Item>\r
                    </DropdownMenu.Content>\r
                </DropdownMenu.Root>\r
            </div>\r
        </div>;
}`,...(P=(A=M.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var E,N,q;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
                <h3>User Profile Menu</h3>\r
                <DropdownMenu.Root>\r
                    <DropdownMenu.Trigger asChild>\r
                        <div style={{
            cursor: 'pointer'
          }}>\r
                            <Avatar src="https://i.pravatar.cc/250?u=user" alt="User Avatar" size="md" status="online" />\r
                        </div>\r
                    </DropdownMenu.Trigger>\r
                    <DropdownMenu.Content align="end">\r
                        <DropdownMenu.Label>\r
                            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>\r
                                <span style={{
                fontWeight: 600
              }}>John Doe</span>\r
                                <span style={{
                fontSize: '0.75rem',
                opacity: 0.7
              }}>john@example.com</span>\r
                            </div>\r
                        </DropdownMenu.Label>\r
                        <DropdownMenu.Separator />\r
                        <DropdownMenu.Item icon="👤">Profile</DropdownMenu.Item>\r
                        <DropdownMenu.Item icon="⚙️">Settings</DropdownMenu.Item>\r
                        <DropdownMenu.Item icon="🛡️">Privacy</DropdownMenu.Item>\r
                        <DropdownMenu.Item icon="💳">Billing</DropdownMenu.Item>\r
                        <DropdownMenu.Separator />\r
                        <DropdownMenu.Item icon="❓">Help & Support</DropdownMenu.Item>\r
                        <DropdownMenu.Separator />\r
                        <DropdownMenu.Item icon="🚪" destructive>Sign out</DropdownMenu.Item>\r
                    </DropdownMenu.Content>\r
                </DropdownMenu.Root>\r
            </div>\r
        </div>;
}`,...(q=(N=I.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var F,_,z;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
                <h3>Dashboard Context Menus</h3>\r
                <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>\r
                    \r
                    {/* Table Row Actions */}\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="ghost" size="sm">⋯</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content>\r
                            <DropdownMenu.Label>Row Actions</DropdownMenu.Label>\r
                            <DropdownMenu.Item icon="👁️">View Details</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="✏️">Edit</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="📋">Duplicate</DropdownMenu.Item>\r
                            <DropdownMenu.Separator />\r
                            <DropdownMenu.Item icon="📤">Export</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="📧">Share</DropdownMenu.Item>\r
                            <DropdownMenu.Separator />\r
                            <DropdownMenu.Item icon="🗑️" destructive>Delete</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
\r
                    {/* Chart Options */}\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline" size="sm" rightIcon="▼">Chart Options</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content>\r
                            <DropdownMenu.Label>View Options</DropdownMenu.Label>\r
                            <DropdownMenu.Item icon="📊">Bar Chart</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="📈">Line Chart</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="🥧">Pie Chart</DropdownMenu.Item>\r
                            <DropdownMenu.Separator />\r
                            <DropdownMenu.Label>Time Range</DropdownMenu.Label>\r
                            <DropdownMenu.Item icon="📅">Last 7 days</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="📅">Last 30 days</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="📅">Last 90 days</DropdownMenu.Item>\r
                            <DropdownMenu.Separator />\r
                            <DropdownMenu.Item icon="💾">Save View</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
\r
                    {/* Filter Menu */}\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="soft" size="sm" color="secondary" leftIcon="🔍">Filters</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content>\r
                            <DropdownMenu.Label>Filter by Status</DropdownMenu.Label>\r
                            <DropdownMenu.Item icon="✅">Active</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="⏸️">Pending</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="❌">Inactive</DropdownMenu.Item>\r
                            <DropdownMenu.Separator />\r
                            <DropdownMenu.Label>Filter by Type</DropdownMenu.Label>\r
                            <DropdownMenu.Item icon="📁">Projects</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="✅">Tasks</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="👥">Teams</DropdownMenu.Item>\r
                            <DropdownMenu.Separator />\r
                            <DropdownMenu.Item icon="🔄">Reset Filters</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
                </div>\r
            </div>\r
        </div>;
}`,...(z=(_=j.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var U,W,V;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
                <h3>Item States</h3>\r
                <div style={{
        display: 'flex',
        gap: '16px'
      }}>\r
                    <DropdownMenu.Root>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline">Item States</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content>\r
                            <DropdownMenu.Label>Menu Items</DropdownMenu.Label>\r
                            <DropdownMenu.Item icon="✅">Normal Item</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="⏸️" disabled>Disabled Item</DropdownMenu.Item>\r
                            <DropdownMenu.Item icon="⚠️" destructive>Destructive Item</DropdownMenu.Item>\r
                            <DropdownMenu.Separator />\r
                            <DropdownMenu.Item icon="❌" destructive disabled>Disabled Destructive</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
\r
                    <DropdownMenu.Root disabled>\r
                        <DropdownMenu.Trigger>\r
                            <Button variant="outline" disabled>Disabled Menu</Button>\r
                        </DropdownMenu.Trigger>\r
                        <DropdownMenu.Content>\r
                            <DropdownMenu.Item>This won't show</DropdownMenu.Item>\r
                        </DropdownMenu.Content>\r
                    </DropdownMenu.Root>\r
                </div>\r
            </div>\r
        </div>;
}`,...(V=(W=f.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const le=["Default","Positioning","WithIcons","UserMenu","DashboardActions","States"];export{j as DashboardActions,D as Default,g as Positioning,f as States,I as UserMenu,M as WithIcons,le as __namedExportsOrder,se as default};
