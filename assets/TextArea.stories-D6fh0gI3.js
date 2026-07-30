import{i as e,s as t}from"./preload-helper-B-BVgx5s.js";import{N as n}from"./iframe-C0E5N8tr.js";import{t as r}from"./jsx-runtime-D-WwFckC.js";import{g as i,t as a,w as o}from"./lucide-react-9hgq_g-6.js";import{i as s,n as c,r as l,t as u}from"./dist-cmfH2-lj.js";import{n as d,t as f}from"./Text-BZJuTOrO.js";var p,m=e((()=>{c(),p=u([`transition-all`,`outline-none`,`border`,`placeholder:text-text-disabled`,`focus:ring-2`],{variants:{variant:{default:`bg-bg-base border-border-default`,outline:`bg-transparent border-border-default`,filled:`bg-bg-hover border-transparent`,ghost:`border-transparent bg-transparent`},state:{default:``,error:`border-border-error focus:border-border-error`,success:`border-success-base focus:border-success-base`,warning:`border-warning-base focus:border-warning-base`},size:{sm:`p-2 text-sm`,md:`p-3 text-base`,lg:`p-4 text-lg`},rounded:{none:`rounded-none`,sm:`rounded`,md:`rounded-md`,lg:`rounded-lg`,full:`rounded-2xl`},resize:{none:`resize-none`,vertical:`resize-y`,horizontal:`resize-x`,both:`resize`},fullWidth:{true:`w-full`,false:`w-fit`}},defaultVariants:{variant:`default`,state:`default`,size:`md`,rounded:`md`,resize:`vertical`,fullWidth:!0}})})),h,g,_,v=e((()=>{h=t(n(),1),s(),m(),d(),g=r(),_=(0,h.forwardRef)(({label:e,helperText:t,error:n,variant:r=`default`,state:i=`default`,size:a=`md`,rounded:o=`md`,resize:s=`vertical`,fullWidth:c=!0,className:u,startAdornment:d,endAdornment:m,rows:h=4,required:_,...v},y)=>{let b=n?`error`:i;return(0,g.jsxs)(`div`,{className:l(`space-y-2`,c&&`w-full`),children:[e&&(0,g.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,g.jsx)(f,{content:e,variant:`body`,weight:`medium`}),_&&(0,g.jsx)(`span`,{className:`text-error-base`,children:`*`})]}),(0,g.jsxs)(`div`,{className:`relative`,children:[d&&(0,g.jsx)(`div`,{className:`absolute left-3 top-3`,children:d}),(0,g.jsx)(`textarea`,{ref:y,rows:h,className:p({variant:r,state:b,size:a,rounded:o,resize:s,fullWidth:c,className:l(d&&`pl-10`,m&&`pr-10`,u)}),...v}),m&&(0,g.jsx)(`div`,{className:`absolute right-3 top-3`,children:m})]}),n?(0,g.jsx)(f,{variant:`error`,size:`xs`,content:n}):t&&(0,g.jsx)(f,{variant:`body`,size:`xs`,content:t})]})}),_.displayName=`TextArea`,_.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| "default"\r
| "outline"\r
| "filled"\r
| "ghost"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"filled"`},{name:`literal`,value:`"ghost"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`| "default"\r
| "error"\r
| "success"\r
| "warning"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "sm"\r
| "md"\r
| "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},rounded:{required:!1,tsType:{name:`union`,raw:`"none" | "sm" | "md" | "lg" | "full"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"full"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},resize:{required:!1,tsType:{name:`union`,raw:`"none" | "vertical" | "horizontal" | "both"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"vertical"`},{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"both"`}]},description:``,defaultValue:{value:`"vertical"`,computed:!1}},startAdornment:{required:!1,tsType:{name:`ReactNode`},description:``},endAdornment:{required:!1,tsType:{name:`ReactNode`},description:``},rows:{defaultValue:{value:`4`,computed:!1},required:!1}},composes:[`Omit`]}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{a(),v(),y=r(),b={title:`Components/TextArea`,component:_,tags:[`autodocs`],args:{label:`Description`,placeholder:`Write something...`,variant:`default`,state:`default`,size:`md`,rounded:`md`,resize:`vertical`,rows:4,fullWidth:!0},argTypes:{variant:{control:`select`,options:[`default`,`outline`,`filled`,`ghost`]},state:{control:`select`,options:[`default`,`success`,`warning`,`error`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},rounded:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},resize:{control:`select`,options:[`none`,`vertical`,`horizontal`,`both`]},rows:{control:{type:`number`}},fullWidth:{control:`boolean`},disabled:{control:`boolean`},required:{control:`boolean`},startAdornment:{control:!1},endAdornment:{control:!1}}},x={},S={args:{variant:`outline`}},C={args:{variant:`filled`}},w={args:{variant:`ghost`}},T={args:{state:`success`,helperText:`Looks good!`}},E={args:{state:`warning`,helperText:`Please review this field.`}},D={args:{state:`error`,error:`Description is required.`}},O={args:{disabled:!0,value:`This textarea is disabled.`}},k={args:{required:!0}},A={args:{startAdornment:(0,y.jsx)(i,{size:18}),placeholder:`Search notes...`}},j={args:{endAdornment:(0,y.jsx)(o,{size:18}),placeholder:`Email description...`}},M={args:{rows:8}},N={args:{resize:`none`}},P={args:{resize:`horizontal`}},F={args:{resize:`vertical`}},I={args:{resize:`both`}},L={args:{rounded:`full`}},R={render:()=>(0,y.jsxs)(`div`,{className:`space-y-4`,children:[(0,y.jsx)(_,{size:`sm`,placeholder:`Small TextArea`}),(0,y.jsx)(_,{size:`md`,placeholder:`Medium TextArea`}),(0,y.jsx)(_,{size:`lg`,placeholder:`Large TextArea`})]})},z={render:()=>(0,y.jsxs)(`div`,{className:`space-y-4`,children:[(0,y.jsx)(_,{variant:`default`,placeholder:`Default`}),(0,y.jsx)(_,{variant:`outline`,placeholder:`Outline`}),(0,y.jsx)(_,{variant:`filled`,placeholder:`Filled`}),(0,y.jsx)(_,{variant:`ghost`,placeholder:`Ghost`})]})},B={render:()=>(0,y.jsxs)(`div`,{className:`space-y-4`,children:[(0,y.jsx)(_,{state:`success`,helperText:`Everything looks good.`}),(0,y.jsx)(_,{state:`warning`,helperText:`Please double-check.`}),(0,y.jsx)(_,{state:`error`,error:`This field is required.`})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "filled"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success",
    helperText: "Looks good!"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    state: "warning",
    helperText: "Please review this field."
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    error: "Description is required."
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "This textarea is disabled."
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    startAdornment: <Search size={18} />,
    placeholder: "Search notes..."
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    endAdornment: <Mail size={18} />,
    placeholder: "Email description..."
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 8
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    resize: "none"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    resize: "horizontal"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    resize: "vertical"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    resize: "both"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: "full"
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <TextArea size="sm" placeholder="Small TextArea" />\r
\r
      <TextArea size="md" placeholder="Medium TextArea" />\r
\r
      <TextArea size="lg" placeholder="Large TextArea" />\r
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <TextArea variant="default" placeholder="Default" />\r
\r
      <TextArea variant="outline" placeholder="Outline" />\r
\r
      <TextArea variant="filled" placeholder="Filled" />\r
\r
      <TextArea variant="ghost" placeholder="Ghost" />\r
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <TextArea state="success" helperText="Everything looks good." />\r
\r
      <TextArea state="warning" helperText="Please double-check." />\r
\r
      <TextArea state="error" error="This field is required." />\r
    </div>
}`,...B.parameters?.docs?.source}}},V=[`Default`,`Outline`,`Filled`,`Ghost`,`Success`,`Warning`,`Error`,`Disabled`,`Required`,`WithStartAdornment`,`WithEndAdornment`,`LargeRows`,`ResizeNone`,`ResizeHorizontal`,`ResizeVertical`,`ResizeBoth`,`RoundedFull`,`Sizes`,`Variants`,`States`]}))();export{x as Default,O as Disabled,D as Error,C as Filled,w as Ghost,M as LargeRows,S as Outline,k as Required,I as ResizeBoth,P as ResizeHorizontal,N as ResizeNone,F as ResizeVertical,L as RoundedFull,R as Sizes,B as States,T as Success,z as Variants,E as Warning,j as WithEndAdornment,A as WithStartAdornment,V as __namedExportsOrder,b as default};