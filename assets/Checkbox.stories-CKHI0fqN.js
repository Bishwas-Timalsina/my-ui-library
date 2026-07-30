import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BXqPYJMY.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{S as i,X as a,t as o}from"./lucide-react-B8GO83KC.js";import{i as s,n as c,r as l,t as u}from"./dist-BVFsKm1K.js";var d,f=e((()=>{c(),d=u([`flex`,`items-center`,`justify-center`,`border`,`transition-all`,`duration-200`,`rounded`,`shrink-0`,`select-none`],{variants:{variant:{primary:`border-primary-base`,secondary:`border-border-default`,success:`border-success-base`,warning:`border-warning-base`,error:`border-error-base`},size:{sm:`w-4 h-4`,md:`w-5 h-5`,lg:`w-6 h-6`}},defaultVariants:{variant:`primary`,size:`md`}})})),p,m,h,g=e((()=>{p=t(n(),1),s(),o(),f(),m=r(),h=(0,p.forwardRef)(({label:e,helperText:t,error:n,variant:r=`primary`,size:o=`md`,checked:s,defaultChecked:c,disabled:u,indeterminate:f=!1,fullWidth:h=!1,className:g,onChange:_,id:v,...y},b)=>{let x=(0,p.useRef)(null),S=s!==void 0,[C,w]=(0,p.useState)(c??!1),T=S?s:C;return(0,p.useEffect)(()=>{x.current&&(x.current.indeterminate=f)},[f]),(0,m.jsxs)(`div`,{className:l(`flex flex-col gap-1`,h&&`w-full`),children:[(0,m.jsxs)(`label`,{htmlFor:v,className:l(`inline-flex items-center gap-3 cursor-pointer`,u&&`opacity-50 cursor-not-allowed`),children:[(0,m.jsx)(`input`,{ref:e=>{x.current=e,typeof b==`function`?b(e):b&&(b.current=e)},id:v,type:`checkbox`,className:`sr-only`,checked:s,defaultChecked:c,disabled:u,onChange:e=>{S||w(e.target.checked),_?.(e)},...y}),(0,m.jsx)(`span`,{className:l(d({variant:r,size:o}),T&&r===`primary`&&`bg-primary-base border-primary-base text-white`,T&&r===`secondary`&&`bg-primary-light border-primary-base text-primary-base`,T&&r===`success`&&`bg-success-base border-success-base text-white`,T&&r===`warning`&&`bg-warning-base border-warning-base text-white`,T&&r===`error`&&`bg-error-base border-error-base text-white`,g),children:f?(0,m.jsx)(i,{className:l({"w-3 h-3":o===`sm`,"w-4 h-4":o===`md`,"w-5 h-5":o===`lg`})}):(0,m.jsx)(a,{className:l(`transition-all duration-150`,T?`opacity-100 scale-100`:`opacity-0 scale-50`,{"w-3 h-3":o===`sm`,"w-4 h-4":o===`md`,"w-5 h-5":o===`lg`})})}),e&&(0,m.jsx)(`span`,{className:`text-text-body`,children:e})]}),(t||n)&&(0,m.jsx)(`span`,{className:l(`ml-8 text-xs`,n?`text-error-base`:`text-text-muted`),children:n??t})]})}),h.displayName=`Checkbox`,h.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{label:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| "primary"\r
| "secondary"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"primary"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "sm"\r
| "md"\r
| "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},indeterminate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{_=t(n(),1),g(),v=r(),y=e=>{let[t,n]=(0,_.useState)(!1);return(0,v.jsx)(h,{...e,checked:t,onChange:e=>n(e.target.checked)})},b={title:`Components/Checkbox`,component:h,tags:[`autodocs`],render:e=>(0,v.jsx)(y,{...e}),args:{label:`Accept Terms & Conditions`,variant:`primary`,size:`md`,disabled:!1,helperText:``,error:``,fullWidth:!1},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`error`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},fullWidth:{control:`boolean`}}},x={},S={},C={args:{variant:`secondary`}},w={args:{variant:`success`}},T={args:{variant:`warning`}},E={args:{variant:`error`}},D={args:{disabled:!0}},O={args:{helperText:`You can change this later.`}},k={args:{error:`This field is required.`,variant:`error`}},A={render:()=>(0,v.jsxs)(`div`,{className:`space-y-4`,children:[(0,v.jsx)(h,{label:`Small`,size:`sm`}),(0,v.jsx)(h,{label:`Medium`,size:`md`}),(0,v.jsx)(h,{label:`Large`,size:`lg`})]})},j={render:()=>(0,v.jsxs)(`div`,{className:`space-y-4`,children:[(0,v.jsx)(h,{label:`Primary`,variant:`primary`}),(0,v.jsx)(h,{label:`Secondary`,variant:`secondary`}),(0,v.jsx)(h,{label:`Success`,variant:`success`}),(0,v.jsx)(h,{label:`Warning`,variant:`warning`}),(0,v.jsx)(h,{label:`Error`,variant:`error`})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: "You can change this later."
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    error: "This field is required.",
    variant: "error"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Checkbox label="Small" size="sm" />\r
      <Checkbox label="Medium" size="md" />\r
      <Checkbox label="Large" size="lg" />\r
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Checkbox label="Primary" variant="primary" />\r
      <Checkbox label="Secondary" variant="secondary" />\r
      <Checkbox label="Success" variant="success" />\r
      <Checkbox label="Warning" variant="warning" />\r
      <Checkbox label="Error" variant="error" />\r
    </div>
}`,...j.parameters?.docs?.source}}},M=[`Playground`,`Primary`,`Secondary`,`Success`,`Warning`,`Error`,`Disabled`,`HelperText`,`ErrorMessage`,`Sizes`,`Variants`]}))();export{D as Disabled,E as Error,k as ErrorMessage,O as HelperText,x as Playground,S as Primary,C as Secondary,A as Sizes,w as Success,j as Variants,T as Warning,M as __namedExportsOrder,b as default};