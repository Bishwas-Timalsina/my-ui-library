import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BXqPYJMY.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{i,n as a,r as o,t as s}from"./dist-BVFsKm1K.js";var c,l=e((()=>{a(),c=s([`flex`,`items-center`,`justify-center`,`rounded-full`,`border`,`transition-all`,`duration-200`,`shrink-0`,`select-none`],{variants:{variant:{primary:`border-primary-base`,secondary:`border-border-default`,success:`border-success-base`,warning:`border-warning-base`,error:`border-error-base`},size:{sm:`w-4 h-4`,md:`w-5 h-5`,lg:`w-6 h-6`}},defaultVariants:{variant:`primary`,size:`md`}})})),u,d,f,p=e((()=>{u=t(n(),1),i(),l(),d=r(),f=(0,u.forwardRef)(({label:e,helperText:t,error:n,variant:r=`primary`,size:i=`md`,checked:a,defaultChecked:s,disabled:l,fullWidth:f=!1,className:p,onChange:m,id:h,...g},_)=>{let v=a!==void 0,[y,b]=(0,u.useState)(s??!1),x=v?a:y;return(0,d.jsxs)(`div`,{className:o(`flex flex-col gap-1`,f&&`w-full`),children:[(0,d.jsxs)(`label`,{htmlFor:h,className:o(`inline-flex items-center gap-3 cursor-pointer`,l&&`opacity-50 cursor-not-allowed`),children:[(0,d.jsx)(`input`,{ref:_,id:h,type:`radio`,className:`sr-only`,checked:a,defaultChecked:s,disabled:l,onChange:e=>{v||b(!0),m?.(e)},...g}),(0,d.jsx)(`span`,{className:o(c({variant:r,size:i}),x&&r===`primary`&&`border-primary-base`,x&&r===`secondary`&&`border-primary-base`,x&&r===`success`&&`border-success-base`,x&&r===`warning`&&`border-warning-base`,x&&r===`error`&&`border-error-base`,p),children:(0,d.jsx)(`span`,{className:o(`rounded-full transition-all duration-150`,x?`scale-100 opacity-100`:`scale-0 opacity-0`,{"w-2 h-2":i===`sm`,"w-2.5 h-2.5":i===`md`,"w-3 h-3":i===`lg`},r===`primary`&&`bg-primary-base`,r===`secondary`&&`bg-primary-base`,r===`success`&&`bg-success-base`,r===`warning`&&`bg-warning-base`,r===`error`&&`bg-error-base`)})}),e&&(0,d.jsx)(`span`,{className:`text-text-body`,children:e})]}),(t||n)&&(0,d.jsx)(`span`,{className:o(`ml-8 text-xs`,n?`text-error-base`:`text-text-muted`),children:n??t})]})}),f.displayName=`Radio`,f.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{label:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| "primary"\r
| "secondary"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"primary"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "sm"\r
| "md"\r
| "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{m=t(n(),1),p(),h=r(),g=e=>{let[t,n]=(0,m.useState)(`option1`);return(0,h.jsxs)(`div`,{className:`space-y-3`,children:[(0,h.jsx)(f,{...e,name:`storybook-radio`,label:`Option 1`,value:`option1`,checked:t===`option1`,onChange:()=>n(`option1`)}),(0,h.jsx)(f,{...e,name:`storybook-radio`,label:`Option 2`,value:`option2`,checked:t===`option2`,onChange:()=>n(`option2`)}),(0,h.jsx)(f,{...e,name:`storybook-radio`,label:`Option 3`,value:`option3`,checked:t===`option3`,onChange:()=>n(`option3`)})]})},_={title:`Components/Radio`,component:f,tags:[`autodocs`],render:e=>(0,h.jsx)(g,{...e}),args:{variant:`primary`,size:`md`,disabled:!1,helperText:``,error:``,fullWidth:!1},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`error`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},fullWidth:{control:`boolean`},helperText:{control:`text`},error:{control:`text`}}},v={},y={},b={args:{variant:`secondary`}},x={args:{variant:`success`}},S={args:{variant:`warning`}},C={args:{variant:`error`}},w={args:{disabled:!0}},T={args:{helperText:`Choose one option.`}},E={args:{error:`Please select an option.`,variant:`error`}},D={render:()=>(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(f,{label:`Small`,name:`sizes`,size:`sm`,defaultChecked:!0}),(0,h.jsx)(f,{label:`Medium`,name:`sizes`,size:`md`}),(0,h.jsx)(f,{label:`Large`,name:`sizes`,size:`lg`})]})},O={render:()=>(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(f,{label:`Primary`,name:`variants`,variant:`primary`,defaultChecked:!0}),(0,h.jsx)(f,{label:`Secondary`,name:`variants`,variant:`secondary`}),(0,h.jsx)(f,{label:`Success`,name:`variants`,variant:`success`}),(0,h.jsx)(f,{label:`Warning`,name:`variants`,variant:`warning`}),(0,h.jsx)(f,{label:`Error`,name:`variants`,variant:`error`})]})},k={render:()=>{let[e,t]=(0,m.useState)(`react`);return(0,h.jsxs)(`div`,{className:`space-y-3`,children:[(0,h.jsx)(f,{label:`React`,name:`framework`,value:`react`,checked:e===`react`,onChange:()=>t(`react`)}),(0,h.jsx)(f,{label:`Vue`,name:`framework`,value:`vue`,checked:e===`vue`,onChange:()=>t(`vue`)}),(0,h.jsx)(f,{label:`Angular`,name:`framework`,value:`angular`,checked:e===`angular`,onChange:()=>t(`angular`)}),(0,h.jsx)(f,{label:`Svelte`,name:`framework`,value:`svelte`,checked:e===`svelte`,onChange:()=>t(`svelte`)})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: "Choose one option."
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Please select an option.",
    variant: "error"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Radio label="Small" name="sizes" size="sm" defaultChecked />\r
\r
      <Radio label="Medium" name="sizes" size="md" />\r
\r
      <Radio label="Large" name="sizes" size="lg" />\r
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Radio label="Primary" name="variants" variant="primary" defaultChecked />\r
\r
      <Radio label="Secondary" name="variants" variant="secondary" />\r
\r
      <Radio label="Success" name="variants" variant="success" />\r
\r
      <Radio label="Warning" name="variants" variant="warning" />\r
\r
      <Radio label="Error" name="variants" variant="error" />\r
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("react");
    return <div className="space-y-3">\r
        <Radio label="React" name="framework" value="react" checked={value === "react"} onChange={() => setValue("react")} />\r
\r
        <Radio label="Vue" name="framework" value="vue" checked={value === "vue"} onChange={() => setValue("vue")} />\r
\r
        <Radio label="Angular" name="framework" value="angular" checked={value === "angular"} onChange={() => setValue("angular")} />\r
\r
        <Radio label="Svelte" name="framework" value="svelte" checked={value === "svelte"} onChange={() => setValue("svelte")} />\r
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`Primary`,`Secondary`,`Success`,`Warning`,`Error`,`Disabled`,`HelperText`,`ErrorMessage`,`Sizes`,`Variants`,`RadioGroup`]}))();export{w as Disabled,C as Error,E as ErrorMessage,T as HelperText,v as Playground,y as Primary,k as RadioGroup,b as Secondary,D as Sizes,x as Success,O as Variants,S as Warning,A as __namedExportsOrder,_ as default};