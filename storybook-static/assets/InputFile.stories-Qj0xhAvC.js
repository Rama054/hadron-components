import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as d}from"./useThemeMode-8InCWCg3.js";import{r as B}from"./index-BZISi7jw.js";import{d as _,e as be,f as je,g as Fe,h as De,i as Se,j as Ie,k as ze,l as Ce,m as Me}from"./index-BngtbI9A.js";import{l as ke,m as we}from"./index-KKouTENB.js";import{B as qe}from"./Button-kmOhRj6m.js";import{P as o}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iconBase-BcoVWJ97.js";import"./Spinner-DKwzja_x.js";function t({label:i,name:m,id:p,multiple:F=!1,helpText:D,errorText:S,accept:z,disabled:C=!1,maxFiles:x=null,maxSize:u=null,className:q,onFilesChange:I,...ce}){const[n,N]=B.useState([]),[me,M]=B.useState(!1),k=l=>{const r=["bytes","KB","MB","GB"];let a=0,s=l;for(;s>=1024&&a<r.length-1;)s/=1024,a++;return`${s.toFixed(1)} ${r[a]}`},xe=l=>{const r=[],a=[];return Array.from(l).forEach(s=>{if(u&&s.size>u){a.push(`${s.name} exceeds maximum size of ${k(u)}`);return}if(x&&n.length+r.length>=x){a.push(`Maximum ${x} files allowed`);return}r.push({id:Math.random().toString(36).substr(2,9),type:s.type.split("/")[0],extension:s.name.split(".").pop().toLowerCase(),url:URL.createObjectURL(s),size:k(s.size),name:s.name,file:s})}),{validFiles:r,errors:a}},W=l=>{const{validFiles:r,errors:a}=xe(l);a.length>0&&console.warn("File validation errors:",a);const s=F?[...n,...r]:r;N(s),I&&I(s.map(Te=>Te.file))},ue=l=>{l.preventDefault(),l.target.files&&l.target.files.length>0&&W(l.target.files)},he=l=>{l.preventDefault(),l.stopPropagation(),M(!0)},ge=l=>{l.preventDefault(),l.stopPropagation(),M(!1)},fe=l=>{l.preventDefault(),l.stopPropagation()},ye=l=>{l.preventDefault(),l.stopPropagation(),M(!1),l.dataTransfer.files&&l.dataTransfer.files.length>0&&W(l.dataTransfer.files)},ve=l=>{const r=n.filter(a=>a.id!==l);N(r),I&&I(r.map(a=>a.file))},w=p||`file-input-${Math.random().toString(36).substr(2,9)}`;let U="q-input-file-root";return q&&(U+=` ${q}`),e.jsxs("div",{className:U,children:[i&&e.jsx("label",{className:"q-input-file-label",htmlFor:w,children:i}),e.jsx("div",{className:`q-input-file-dropzone ${me?"q-dropzone-active":""} ${C?"q-dropzone-disabled":""}`,onDragEnter:he,onDragLeave:ge,onDragOver:fe,onDrop:ye,children:e.jsxs("label",{htmlFor:w,className:"q-dropzone-label",children:[e.jsxs("div",{className:"q-dropzone-content",children:[e.jsx(ke,{size:32,className:"q-dropzone-icon"}),e.jsxs("div",{className:"q-dropzone-text",children:[e.jsxs("p",{className:"q-dropzone-primary",children:["Drop files here or ",e.jsx("span",{className:"q-dropzone-link",children:"click to browse"})]}),e.jsxs("p",{className:"q-dropzone-secondary",children:[z&&`Supported formats: ${z}`,u&&` • Max size: ${k(u)}`,x&&` • Max files: ${x}`]})]})]}),e.jsx("input",{type:"file",id:w,name:m,accept:z,multiple:F,disabled:C,onChange:ue,className:"q-file-input",...ce})]})}),D&&e.jsx("p",{className:"q-input-help-text",children:D}),S&&e.jsx("p",{className:"q-input-error-text",children:S}),n.length>0&&e.jsx("div",{className:"q-files-summary",children:e.jsxs("span",{className:"q-files-count",children:[n.length," file",n.length!==1?"s":""," selected"]})}),n.length>0&&e.jsx("div",{className:"q-files-preview",children:n.map(l=>e.jsxs("div",{className:"q-file-item",children:[e.jsx("div",{className:"q-file-preview",children:l.type==="image"?e.jsx("img",{src:l.url,alt:l.name,className:"q-file-image"}):e.jsx("div",{className:"q-file-icon-container",children:e.jsx(Ne,{type:l.extension})})}),e.jsxs("div",{className:"q-file-info",children:[e.jsxs("div",{className:"q-file-details",children:[e.jsx("span",{className:"q-file-name",title:l.name,children:l.name}),e.jsx("span",{className:"q-file-size",children:l.size})]}),e.jsx(qe,{variant:"ghost",size:"sm",color:"danger",onClick:()=>ve(l.id),disabled:C,children:e.jsx(we,{size:16})})]})]},l.id))})]})}const Ne=({type:i})=>{const m={image:Me,video:Ce,audio:ze,zip:Ie,json:Se,txt:De,code:Fe,word:je,xls:be,pdf:_,default:_},p={image:["image","png","jpg","jpeg","gif","webp","svg"],video:["video","mp4","avi","mov","wmv","flv","webm"],audio:["audio","mp3","wav","flac","aac"],zip:["zip","rar","tar","7z","gz"],json:["json"],txt:["txt"],pdf:["pdf"],code:["js","html","css","yml","yaml","xml","sql","sh","php","py","java","c","cpp","cs","go","rb","swift","ts","jsx","tsx"],word:["doc","docx"],xls:["xls","xlsx","csv"]},F=Object.keys(p).find(S=>p[S].includes(i))||"default",D=m[F];return e.jsx(D,{size:24})};t.propTypes={label:o.string,name:o.string,id:o.string,multiple:o.bool,helpText:o.string,errorText:o.string,accept:o.string,disabled:o.bool,maxFiles:o.number,maxSize:o.number,className:o.string,onFilesChange:o.func};t.__docgenInfo={description:"",methods:[],displayName:"InputFile",props:{multiple:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},maxFiles:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},maxSize:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"number"},required:!1},label:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},id:{description:"",type:{name:"string"},required:!1},helpText:{description:"",type:{name:"string"},required:!1},errorText:{description:"",type:{name:"string"},required:!1},accept:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},onFilesChange:{description:"",type:{name:"func"},required:!1}}};const Re={title:"Components/InputFile",component:t,argTypes:{multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},h=()=>{const{toggleTheme:i}=d();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Basic File Upload"}),e.jsx(t,{label:"Upload Document",helpText:"Select a file to upload"})]})]})},g=()=>{const{toggleTheme:i}=d();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Multiple Files"}),e.jsx(t,{label:"Upload Multiple Files",multiple:!0,helpText:"You can select multiple files at once"})]})]})},f=()=>{const{toggleTheme:i}=d();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"File Type Restrictions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{label:"Images Only",accept:"image/*",multiple:!0,helpText:"Only image files are allowed"}),e.jsx(t,{label:"Documents Only",accept:".pdf,.doc,.docx,.txt",helpText:"PDF, Word documents, and text files only"}),e.jsx(t,{label:"Spreadsheets",accept:".xlsx,.xls,.csv",helpText:"Excel and CSV files only"})]})]})]})},y=()=>{const{toggleTheme:i}=d();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"File Size and Count Limits"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{label:"Max 5 Files",multiple:!0,maxFiles:5,helpText:"Maximum 5 files allowed"}),e.jsx(t,{label:"Max 10MB per file",multiple:!0,maxSize:10*1024*1024,helpText:"Each file must be smaller than 10MB"}),e.jsx(t,{label:"Profile Picture",accept:"image/*",maxSize:2*1024*1024,helpText:"Upload a profile picture (max 2MB)"})]})]})]})},v=()=>{const{toggleTheme:i}=d();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Different States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{label:"Normal State",helpText:"Drag and drop files or click to browse"}),e.jsx(t,{label:"Disabled State",disabled:!0,helpText:"This upload is currently disabled"}),e.jsx(t,{label:"With Error",errorText:"File upload failed. Please try again.",helpText:"There was an error uploading your file"})]})]})]})},T=()=>{const{toggleTheme:i}=d();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Project Submission Form"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{label:"Project Documentation",accept:".pdf,.doc,.docx",multiple:!0,maxFiles:3,helpText:"Upload project documentation (PDF or Word, max 3 files)"}),e.jsx(t,{label:"Design Assets",accept:"image/*,.sketch,.fig,.ai",multiple:!0,maxSize:50*1024*1024,helpText:"Upload design files (images, Sketch, Figma, etc.)"}),e.jsx(t,{label:"Source Code Archive",accept:".zip,.tar,.gz,.rar",maxSize:100*1024*1024,helpText:"Upload compressed source code (max 100MB)"})]})]})]})},b=()=>{const{toggleTheme:i}=d();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"800px"},children:[e.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"Dashboard File Management"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[e.jsx(t,{label:"Bulk Data Import",accept:".csv,.xlsx,.json",multiple:!0,maxFiles:10,helpText:"Import data files (CSV, Excel, JSON)"}),e.jsx(t,{label:"User Avatars",accept:"image/*",multiple:!0,maxSize:5*1024*1024,helpText:"Upload user profile pictures"}),e.jsx(t,{label:"Report Templates",accept:".html,.pdf,.docx",multiple:!0,helpText:"Upload custom report templates"}),e.jsx(t,{label:"System Backup",accept:".zip,.tar,.gz",maxSize:500*1024*1024,helpText:"Upload system backup files"})]})]})]})},j=()=>{const{toggleTheme:i}=d(),m=p=>{console.log("Files changed:",p)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"600px"},children:[e.jsx("button",{onClick:i,style:{width:"fit-content"},children:"Toggle Theme"}),e.jsxs("div",{children:[e.jsx("h3",{children:"With Change Callback"}),e.jsx(t,{label:"Files with Callback",multiple:!0,onFilesChange:m,helpText:"Check the console to see file changes"}),e.jsx("p",{style:{fontSize:"0.875rem",color:"var(--hadr-text-muted)"},children:"Open browser console to see the callback in action"})]})]})},c=i=>e.jsx("div",{style:{padding:"24px",maxWidth:"600px"},children:e.jsx(t,{...i})});c.args={label:"Interactive File Upload",multiple:!1,disabled:!1,accept:"",helpText:"Upload your files here",errorText:"",maxFiles:null,maxSize:null};h.__docgenInfo={description:"",methods:[],displayName:"Default"};g.__docgenInfo={description:"",methods:[],displayName:"Multiple"};f.__docgenInfo={description:"",methods:[],displayName:"WithRestrictions"};y.__docgenInfo={description:"",methods:[],displayName:"WithLimits"};v.__docgenInfo={description:"",methods:[],displayName:"States"};T.__docgenInfo={description:"",methods:[],displayName:"FormIntegration"};b.__docgenInfo={description:"",methods:[],displayName:"DashboardUploads"};j.__docgenInfo={description:"",methods:[],displayName:"WithCallback"};c.__docgenInfo={description:"",methods:[],displayName:"Interactive"};var P,L,O;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Basic File Upload</h3>\r
                <InputFile label="Upload Document" helpText="Select a file to upload" />\r
            </div>\r
        </div>;
}`,...(O=(L=h.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var E,$,A;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Multiple Files</h3>\r
                <InputFile label="Upload Multiple Files" multiple helpText="You can select multiple files at once" />\r
            </div>\r
        </div>;
}`,...(A=($=g.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var R,V,J;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>File Type Restrictions</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>\r
                    <InputFile label="Images Only" accept="image/*" multiple helpText="Only image files are allowed" />\r
                    \r
                    <InputFile label="Documents Only" accept=".pdf,.doc,.docx,.txt" helpText="PDF, Word documents, and text files only" />\r
                    \r
                    <InputFile label="Spreadsheets" accept=".xlsx,.xls,.csv" helpText="Excel and CSV files only" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(J=(V=f.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var Y,G,H;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>File Size and Count Limits</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>\r
                    <InputFile label="Max 5 Files" multiple maxFiles={5} helpText="Maximum 5 files allowed" />\r
                    \r
                    <InputFile label="Max 10MB per file" multiple maxSize={10 * 1024 * 1024} // 10MB
        helpText="Each file must be smaller than 10MB" />\r
                    \r
                    <InputFile label="Profile Picture" accept="image/*" maxSize={2 * 1024 * 1024} // 2MB
        helpText="Upload a profile picture (max 2MB)" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Different States</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>\r
                    <InputFile label="Normal State" helpText="Drag and drop files or click to browse" />\r
                    \r
                    <InputFile label="Disabled State" disabled helpText="This upload is currently disabled" />\r
                    \r
                    <InputFile label="With Error" errorText="File upload failed. Please try again." helpText="There was an error uploading your file" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,le;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Project Submission Form</h3>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>\r
                    <InputFile label="Project Documentation" accept=".pdf,.doc,.docx" multiple maxFiles={3} helpText="Upload project documentation (PDF or Word, max 3 files)" />\r
                    \r
                    <InputFile label="Design Assets" accept="image/*,.sketch,.fig,.ai" multiple maxSize={50 * 1024 * 1024} // 50MB
        helpText="Upload design files (images, Sketch, Figma, etc.)" />\r
                    \r
                    <InputFile label="Source Code Archive" accept=".zip,.tar,.gz,.rar" maxSize={100 * 1024 * 1024} // 100MB
        helpText="Upload compressed source code (max 100MB)" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(le=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var te,ie,se;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '800px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>Dashboard File Management</h3>\r
                <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px'
      }}>\r
                    <InputFile label="Bulk Data Import" accept=".csv,.xlsx,.json" multiple maxFiles={10} helpText="Import data files (CSV, Excel, JSON)" />\r
                    \r
                    <InputFile label="User Avatars" accept="image/*" multiple maxSize={5 * 1024 * 1024} // 5MB
        helpText="Upload user profile pictures" />\r
                    \r
                    <InputFile label="Report Templates" accept=".html,.pdf,.docx" multiple helpText="Upload custom report templates" />\r
                    \r
                    <InputFile label="System Backup" accept=".zip,.tar,.gz" maxSize={500 * 1024 * 1024} // 500MB
        helpText="Upload system backup files" />\r
                </div>\r
            </div>\r
        </div>;
}`,...(se=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ae,re,oe;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const {
    toggleTheme
  } = useThemeMode();
  const handleFilesChange = files => {
    console.log('Files changed:', files);
    // Here you would typically handle the files
    // e.g., upload to server, validate, etc.
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <button onClick={toggleTheme} style={{
      width: 'fit-content'
    }}>Toggle Theme</button>\r
            \r
            <div>\r
                <h3>With Change Callback</h3>\r
                <InputFile label="Files with Callback" multiple onFilesChange={handleFilesChange} helpText="Check the console to see file changes" />\r
                <p style={{
        fontSize: '0.875rem',
        color: 'var(--hadr-text-muted)'
      }}>\r
                    Open browser console to see the callback in action\r
                </p>\r
            </div>\r
        </div>;
}`,...(oe=(re=j.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,de,pe;c.parameters={...c.parameters,docs:{...(ne=c.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  return <div style={{
    padding: '24px',
    maxWidth: '600px'
  }}>\r
            <InputFile {...args} />\r
        </div>;
}`,...(pe=(de=c.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Ve=["Default","Multiple","WithRestrictions","WithLimits","States","FormIntegration","DashboardUploads","WithCallback","Interactive"];export{b as DashboardUploads,h as Default,T as FormIntegration,c as Interactive,g as Multiple,v as States,j as WithCallback,y as WithLimits,f as WithRestrictions,Ve as __namedExportsOrder,Re as default};
