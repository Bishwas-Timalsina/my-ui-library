import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BXqPYJMY.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{M as i,g as a,t as o,w as s}from"./lucide-react-B8GO83KC.js";import{i as c,n as l,r as u,t as d}from"./dist-BVFsKm1K.js";import{t as f}from"./Text-HWnfekmA.js";import{t as p}from"./Text-DQV05JqJ.js";var m,h=e((()=>{l(),m=d([`w-full`,`transition-all duration-200`,`border`,`outline-none`,`placeholder:text-text-disabled`,`disabled:pointer-events-none`,`disabled:opacity-60`,`read-only:bg-bg-disabled`,`rounded-md`],{variants:{variant:{default:[`bg-bg-base`,`border-border-default`,`text-text-body`,`hover:border-border-focus`].join(` `),outline:[`bg-transparent`,`border-primary-base`,`text-text-body`,`hover:border-primary-hover`].join(` `),filled:[`bg-bg-hover`,`border-transparent`,`text-text-body`,`hover:bg-primary-extraLight`].join(` `),ghost:[`bg-transparent`,`border-transparent`,`text-text-body`,`hover:bg-bg-hover`].join(` `)},size:{sm:`h-9 px-3 text-sm`,md:`h-11 px-4 text-base`,lg:`h-13 px-5 text-lg`},rounded:{none:`rounded-none`,sm:`rounded`,md:`rounded-md`,lg:`rounded-lg`,full:`rounded-full`},state:{default:``,error:[`border-border-error`,`focus:border-border-error`,`focus:ring-error-base/20`].join(` `),success:[`border-success-base`,`focus:border-success-base`,`focus:ring-success-base/20`].join(` `),warning:[`border-warning-base`,`focus:border-warning-base`,`focus:ring-warning-base/20`].join(` `)},fullWidth:{true:`w-full`,false:`w-fit`}},defaultVariants:{variant:`default`,size:`md`,rounded:`md`,state:`default`,fullWidth:!0}})})),g,_,v,y=e((()=>{g=t(n(),1),c(),h(),p(),_=r(),v=(0,g.forwardRef)(({label:e,helperText:t,error:n,variant:r=`default`,state:i=`default`,inputSize:a=`md`,rounded:o=`md`,fullWidth:s=!0,rightIcon:c,leftIcon:l,className:d,disabled:p,required:h,id:v,...y},b)=>{let x=(0,g.useId)(),S=v??x;return(0,_.jsxs)(`div`,{className:u(`flex flex-col gap-2`,s?`w-full`:`w-fit`),children:[e&&(0,_.jsxs)(`label`,{htmlFor:S,className:`flex items-center gap-1`,children:[(0,_.jsx)(f,{variant:`body`,size:`sm`,weight:`medium`,children:e}),h&&(0,_.jsx)(f,{variant:`error`,children:`*`})]}),(0,_.jsxs)(`div`,{className:`relative flex items-center`,children:[l&&(0,_.jsx)(`span`,{className:`absolute left-3 flex items-center text-text-muted`,children:l}),(0,_.jsx)(`input`,{ref:b,id:S,disabled:p,"aria-invalid":i===`error`,"aria-describedby":n?`${S}-error`:t?`${S}-helper`:void 0,className:m({variant:r,state:i,size:a,rounded:o,fullWidth:s,className:u(l&&`pl-10`,c&&`pr-10`,d)}),...y}),c&&(0,_.jsx)(`span`,{className:`absolute right-3 flex items-center text-text-muted`,children:c})]}),n?(0,_.jsx)(f,{id:`${S}-error`,variant:`error`,size:`xs`,children:n}):t?(0,_.jsx)(f,{id:`${S}-helper`,variant:`disabled`,size:`xs`,children:t}):null]})}),v.displayName=`Input`,v.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "outline" | "filled" | "ghost"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"filled"`},{name:`literal`,value:`"ghost"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`| "default"\r
| "error"\r
| "success"\r
| "warning"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},inputSize:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},rounded:{required:!1,tsType:{name:`union`,raw:`"none" | "sm" | "md" | "lg" | "full"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"full"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}}})),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{o(),y(),b=r(),x={title:`Components/Input`,component:v,tags:[`autodocs`],args:{label:`Email`,placeholder:`Enter your email`,variant:`default`,state:`default`,inputSize:`md`,rounded:`md`,fullWidth:!0,disabled:!1,required:!1},argTypes:{variant:{control:`select`,options:[`default`,`outline`,`filled`,`ghost`]},state:{control:`select`,options:[`default`,`error`,`success`,`warning`]},inputSize:{control:`select`,options:[`sm`,`md`,`lg`]},rounded:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},fullWidth:{control:`boolean`},disabled:{control:`boolean`},required:{control:`boolean`}}},S={},C={},w={args:{variant:`outline`}},T={args:{variant:`filled`}},E={args:{variant:`ghost`}},D={args:{state:`error`,error:`Email is required`}},O={args:{state:`success`,helperText:`Looks good!`}},k={args:{state:`warning`,helperText:`Double-check this value.`}},A={args:{disabled:!0}},j={args:{required:!0}},M={args:{leftIcon:(0,b.jsx)(s,{size:18})}},N={args:{rightIcon:(0,b.jsx)(i,{size:18}),type:`password`}},P={args:{leftIcon:(0,b.jsx)(a,{size:18}),placeholder:`Search...`,label:`Search`}},F={render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 w-96`,children:[(0,b.jsx)(v,{label:`Small`,inputSize:`sm`,placeholder:`Small input`}),(0,b.jsx)(v,{label:`Medium`,inputSize:`md`,placeholder:`Medium input`}),(0,b.jsx)(v,{label:`Large`,inputSize:`lg`,placeholder:`Large input`})]})},I={render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 w-96`,children:[(0,b.jsx)(v,{label:`Default`}),(0,b.jsx)(v,{label:`Success`,state:`success`,helperText:`Looks good!`}),(0,b.jsx)(v,{label:`Warning`,state:`warning`,helperText:`Needs attention.`}),(0,b.jsx)(v,{label:`Error`,state:`error`,error:`This field is required.`})]})},L={render:()=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 w-96`,children:[(0,b.jsx)(v,{variant:`default`,label:`Default`}),(0,b.jsx)(v,{variant:`outline`,label:`Outline`}),(0,b.jsx)(v,{variant:`filled`,label:`Filled`}),(0,b.jsx)(v,{variant:`ghost`,label:`Ghost`})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "filled"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    error: "Email is required"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success",
    helperText: "Looks good!"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    state: "warning",
    helperText: "Double-check this value."
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <Mail size={18} />
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    rightIcon: <Eye size={18} />,
    type: "password"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <Search size={18} />,
    placeholder: "Search...",
    label: "Search"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">\r
      <Input label="Small" inputSize="sm" placeholder="Small input" />\r
      <Input label="Medium" inputSize="md" placeholder="Medium input" />\r
      <Input label="Large" inputSize="lg" placeholder="Large input" />\r
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">\r
      <Input label="Default" />\r
\r
      <Input label="Success" state="success" helperText="Looks good!" />\r
\r
      <Input label="Warning" state="warning" helperText="Needs attention." />\r
\r
      <Input label="Error" state="error" error="This field is required." />\r
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">\r
      <Input variant="default" label="Default" />\r
      <Input variant="outline" label="Outline" />\r
      <Input variant="filled" label="Filled" />\r
      <Input variant="ghost" label="Ghost" />\r
    </div>
}`,...L.parameters?.docs?.source}}},R=[`Playground`,`Default`,`Outline`,`Filled`,`Ghost`,`Error`,`Success`,`Warning`,`Disabled`,`Required`,`WithPrefix`,`WithSuffix`,`SearchInput`,`Sizes`,`States`,`Variants`]}))();export{C as Default,A as Disabled,D as Error,T as Filled,E as Ghost,w as Outline,S as Playground,j as Required,P as SearchInput,F as Sizes,I as States,O as Success,L as Variants,k as Warning,M as WithPrefix,N as WithSuffix,R as __namedExportsOrder,x as default};