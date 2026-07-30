import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BXqPYJMY.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{i,n as a,r as o,t as s}from"./dist-BVFsKm1K.js";var c,l,u=e((()=>{a(),c=s([`relative`,`inline-flex`,`items-center`,`rounded-full`,`transition-all`,`duration-200`,`cursor-pointer`,`shrink-0`],{variants:{variant:{primary:``,secondary:``,success:``,warning:``,error:``},size:{sm:`w-9 h-5`,md:`w-11 h-6`,lg:`w-14 h-7`},checked:{true:``,false:``}},defaultVariants:{variant:`primary`,size:`md`,checked:!1}}),l=s([`absolute`,`rounded-full`,`bg-white`,`shadow`,`transition-all`,`duration-200`],{variants:{size:{sm:`w-4 h-4`,md:`w-5 h-5`,lg:`w-6 h-6`},checked:{false:`translate-x-0.5`,true:``}},compoundVariants:[{size:`sm`,checked:!0,class:`translate-x-4`},{size:`md`,checked:!0,class:`translate-x-5`},{size:`lg`,checked:!0,class:`translate-x-7`}],defaultVariants:{size:`md`,checked:!1}})})),d,f,p,m=e((()=>{d=t(n(),1),i(),u(),f=r(),p=(0,d.forwardRef)(({label:e,helperText:t,error:n,variant:r=`primary`,size:i=`md`,checked:a,defaultChecked:s,disabled:u,fullWidth:p=!1,className:m,onChange:h,id:g,..._},v)=>{let y=a!==void 0,[b,x]=(0,d.useState)(s??!1),S=y?a:b;return(0,f.jsxs)(`div`,{className:o(`flex flex-col gap-1`,p&&`w-full`),children:[(0,f.jsxs)(`label`,{htmlFor:g,className:o(`inline-flex items-center gap-3 cursor-pointer select-none`,u&&`opacity-50 cursor-not-allowed`),children:[(0,f.jsx)(`input`,{ref:v,id:g,type:`checkbox`,className:`sr-only`,checked:a,defaultChecked:s,disabled:u,onChange:e=>{y||x(e.target.checked),h?.(e)},..._}),(0,f.jsx)(`span`,{className:o(c({variant:r,size:i,checked:S}),m),children:(0,f.jsx)(`span`,{className:l({size:i,checked:S})})}),e&&(0,f.jsx)(`span`,{className:`text-text-body`,children:e})]}),(t||n)&&(0,f.jsx)(`span`,{className:o(`ml-14 text-xs`,n?`text-error-base`:`text-text-muted`),children:n??t})]})}),p.displayName=`Switch`,p.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{label:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| "primary"\r
| "secondary"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"primary"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "sm"\r
| "md"\r
| "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{h=t(n(),1),m(),g=r(),_=e=>{let[t,n]=(0,h.useState)(!1);return(0,g.jsx)(p,{...e,checked:t,onChange:e=>n(e.target.checked)})},v={title:`Components/Switch`,component:p,tags:[`autodocs`],render:e=>(0,g.jsx)(_,{...e}),args:{label:`Enable Notifications`,variant:`primary`,size:`md`,disabled:!1,helperText:``,error:``,fullWidth:!1},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`error`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},fullWidth:{control:`boolean`},helperText:{control:`text`},error:{control:`text`}}},y={},b={},x={args:{variant:`secondary`}},S={args:{variant:`success`}},C={args:{variant:`warning`}},w={args:{variant:`error`}},T={args:{disabled:!0}},E={args:{helperText:`Enable or disable notifications.`}},D={args:{variant:`error`,error:`Something went wrong.`}},O={render:()=>(0,g.jsxs)(`div`,{className:`space-y-4`,children:[(0,g.jsx)(p,{label:`Small`,size:`sm`,defaultChecked:!0}),(0,g.jsx)(p,{label:`Medium`,size:`md`,defaultChecked:!0}),(0,g.jsx)(p,{label:`Large`,size:`lg`,defaultChecked:!0})]})},k={render:()=>(0,g.jsxs)(`div`,{className:`space-y-4`,children:[(0,g.jsx)(p,{label:`Primary`,variant:`primary`,defaultChecked:!0}),(0,g.jsx)(p,{label:`Secondary`,variant:`secondary`,defaultChecked:!0}),(0,g.jsx)(p,{label:`Success`,variant:`success`,defaultChecked:!0}),(0,g.jsx)(p,{label:`Warning`,variant:`warning`,defaultChecked:!0}),(0,g.jsx)(p,{label:`Error`,variant:`error`,defaultChecked:!0})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: "Enable or disable notifications."
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    error: "Something went wrong."
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Switch label="Small" size="sm" defaultChecked />\r
      <Switch label="Medium" size="md" defaultChecked />\r
      <Switch label="Large" size="lg" defaultChecked />\r
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Switch label="Primary" variant="primary" defaultChecked />\r
      <Switch label="Secondary" variant="secondary" defaultChecked />\r
      <Switch label="Success" variant="success" defaultChecked />\r
      <Switch label="Warning" variant="warning" defaultChecked />\r
      <Switch label="Error" variant="error" defaultChecked />\r
    </div>
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`Primary`,`Secondary`,`Success`,`Warning`,`Error`,`Disabled`,`HelperText`,`ErrorMessage`,`Sizes`,`Variants`]}))();export{T as Disabled,w as Error,D as ErrorMessage,E as HelperText,y as Playground,b as Primary,x as Secondary,O as Sizes,S as Success,k as Variants,C as Warning,A as __namedExportsOrder,v as default};