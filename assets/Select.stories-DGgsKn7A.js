import{i as e,s as t}from"./preload-helper-B-BVgx5s.js";import{N as n}from"./iframe-C0E5N8tr.js";import{t as r}from"./jsx-runtime-D-WwFckC.js";import{J as i,X as a,g as o,n as s,t as c}from"./lucide-react-9hgq_g-6.js";import{i as l,n as u,r as d,t as f}from"./dist-cmfH2-lj.js";var p,m=e((()=>{u(),p=f([`relative`,`flex`,`items-center`,`justify-between`,`transition-all duration-200`,`cursor-pointer`,`select-none`,`border`,`outline-none`,`disabled:opacity-50`,`disabled:pointer-events-none`],{variants:{variant:{default:[`bg-surface-primary`,`border-border-primary`,`text-text-base`,`hover:border-primary-base`,`focus-within:border-primary-base`].join(` `),outline:[`bg-transparent`,`border-border-primary`,`text-text-primary`,`hover:border-primary-base`].join(` `),filled:[`bg-surface-secondary`,`border-transparent`,`text-text-primary`,`hover:bg-surface-tertiary`].join(` `),ghost:[`bg-transparent`,`border-transparent`,`text-text-primary`,`hover:bg-surface-secondary`].join(` `),error:[`bg-surface-primary`,`border-error-base`,`text-text-primary`,`focus-within:border-error-base`].join(` `)},size:{xs:`h-8 px-2 text-xs`,sm:`h-9 px-3 text-sm`,md:`h-11 px-4 text-base`,lg:`h-12 px-4 text-lg`,xl:`h-14 px-5 text-xl`},rounded:{none:`rounded-none`,sm:`rounded`,md:`rounded-lg`,full:`rounded-full`},fullWidth:{true:`w-full`,false:`w-fit min-w-[220px]`},disabled:{true:`cursor-not-allowed opacity-60`,false:``}},defaultVariants:{variant:`default`,size:`md`,rounded:`md`,fullWidth:!1,disabled:!1}})})),h,g,_,v=e((()=>{h=t(n(),1),l(),c(),m(),g=r(),_=(0,h.forwardRef)(({label:e,placeholder:t=`Select...`,options:n,value:r,onChange:c,helperText:l,error:u,disabled:f=!1,searchable:m=!1,clearable:_=!1,variant:v=u?`error`:`default`,size:y=`md`,rounded:b=`md`,fullWidth:x=!1,className:S,...C},w)=>{let T=(0,h.useRef)(null),[E,D]=(0,h.useState)(!1),[O,k]=(0,h.useState)(``),A=(0,h.useMemo)(()=>n.find(e=>e.value===r),[n,r]),j=(0,h.useMemo)(()=>!m||!O.trim()?n:n.filter(e=>e.label.toLowerCase().includes(O.toLowerCase())),[n,O,m]);(0,h.useEffect)(()=>{let e=e=>{T.current&&!T.current.contains(e.target)&&D(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let M=e=>{e.disabled||(c?.(e.value),D(!1),k(``))},N=e=>{e.stopPropagation(),c?.(``),k(``)};return(0,g.jsxs)(`div`,{ref:w,className:d(`flex flex-col gap-1`,x&&`w-full`),...C,children:[e&&(0,g.jsx)(`label`,{className:`text-sm font-medium`,children:e}),(0,g.jsxs)(`div`,{ref:T,className:`relative`,children:[(0,g.jsxs)(`button`,{type:`button`,disabled:f,onClick:()=>!f&&D(e=>!e),className:p({variant:v,size:y,rounded:b,fullWidth:x,disabled:f,className:d(S)}),children:[(0,g.jsx)(`span`,{className:d(`truncate flex-1 text-left`,!A&&`text-text-secondary`),children:A?.label??t}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[_&&A&&(0,g.jsx)(`button`,{type:`button`,onClick:N,children:(0,g.jsx)(s,{size:16})}),(0,g.jsx)(i,{size:18,className:d(`transition-transform`,E&&`rotate-180`)})]})]}),E&&(0,g.jsxs)(`div`,{className:`absolute z-50 mt-2 w-full rounded-lg border border-border-primary bg-white shadow-lg`,children:[m&&(0,g.jsxs)(`div`,{className:`relative p-2`,children:[(0,g.jsx)(o,{size:16,className:`absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary`}),(0,g.jsx)(`input`,{autoFocus:!0,value:O,onChange:e=>k(e.target.value),placeholder:`Search...`,className:`w-full rounded-md border border-border-primary py-2 pl-9 pr-3 outline-none`})]}),(0,g.jsxs)(`ul`,{className:`max-h-60 overflow-auto py-1`,children:[j.length===0&&(0,g.jsx)(`li`,{className:`px-4 py-3 text-sm text-text-secondary`,children:`No options found.`}),j.map(e=>{let t=e.value===r;return(0,g.jsxs)(`li`,{onClick:()=>M(e),className:d(`flex cursor-pointer items-center justify-between px-4 py-2 transition-colors`,e.disabled&&`cursor-not-allowed opacity-50`,!e.disabled&&`hover:bg-primary-extraLight`),children:[(0,g.jsx)(`span`,{children:e.label}),t&&(0,g.jsx)(a,{size:16,className:`text-primary-base`})]},e.value)})]})]})]}),(l||u)&&(0,g.jsx)(`span`,{className:d(`text-xs`,u?`text-error-base`:`text-text-secondary`),children:u??l})]})}),_.displayName=`Select`,_.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{label:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Select..."`,computed:!1}},options:{required:!0,tsType:{name:`Array`,elements:[{name:`SelectOption`}],raw:`SelectOption[]`},description:``},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | number) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`value`}],return:{name:`void`}}},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},searchable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},clearable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},rounded:{required:!1,tsType:{name:`union`,raw:`"none" | "sm" | "md" | "full"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"full"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`| "default"\r
| "outline"\r
| "filled"\r
| "ghost"\r
| "error"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"filled"`},{name:`literal`,value:`"ghost"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`error ? "error" : "default"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "xs"\r
| "sm"\r
| "md"\r
| "lg"\r
| "xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}}},composes:[`Omit`]}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{y=t(n(),1),v(),b=r(),x=[{label:`Nepal`,value:`np`},{label:`India`,value:`in`},{label:`Japan`,value:`jp`},{label:`Australia`,value:`au`},{label:`United States`,value:`us`},{label:`Canada`,value:`ca`}],S=e=>{let[t,n]=(0,y.useState)(``);return(0,b.jsx)(_,{...e,value:t,onChange:n})},C={title:`Components/Select`,component:_,tags:[`autodocs`],render:e=>(0,b.jsx)(S,{...e}),args:{label:`Country`,placeholder:`Select Country`,options:x,variant:`default`,size:`md`,rounded:`md`,fullWidth:!1,searchable:!1,clearable:!1,disabled:!1,helperText:``,error:``},argTypes:{variant:{control:`select`,options:[`default`,`outline`,`filled`,`ghost`,`error`]},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},rounded:{control:`select`,options:[`none`,`sm`,`md`,`full`]},searchable:{control:`boolean`},clearable:{control:`boolean`},disabled:{control:`boolean`},fullWidth:{control:`boolean`}}},w={},T={},E={args:{variant:`outline`}},D={args:{variant:`filled`}},O={args:{variant:`ghost`}},k={args:{error:`Country is required.`}},A={args:{searchable:!0}},j={args:{clearable:!0,searchable:!0}},M={args:{disabled:!0}},N={args:{fullWidth:!0}},P={render:()=>(0,b.jsxs)(`div`,{className:`space-y-4 w-72`,children:[(0,b.jsx)(_,{size:`xs`,label:`XS`,options:x}),(0,b.jsx)(_,{size:`sm`,label:`SM`,options:x}),(0,b.jsx)(_,{size:`md`,label:`MD`,options:x}),(0,b.jsx)(_,{size:`lg`,label:`LG`,options:x}),(0,b.jsx)(_,{size:`xl`,label:`XL`,options:x})]})},F={render:()=>(0,b.jsxs)(`div`,{className:`space-y-4 w-72`,children:[(0,b.jsx)(_,{variant:`default`,label:`Default`,options:x}),(0,b.jsx)(_,{variant:`outline`,label:`Outline`,options:x}),(0,b.jsx)(_,{variant:`filled`,label:`Filled`,options:x}),(0,b.jsx)(_,{variant:`ghost`,label:`Ghost`,options:x}),(0,b.jsx)(_,{variant:`error`,label:`Error`,error:`Required`,options:x})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "filled"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Country is required."
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    clearable: true,
    searchable: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-72">\r
      <Select size="xs" label="XS" options={options} />\r
\r
      <Select size="sm" label="SM" options={options} />\r
\r
      <Select size="md" label="MD" options={options} />\r
\r
      <Select size="lg" label="LG" options={options} />\r
\r
      <Select size="xl" label="XL" options={options} />\r
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-72">\r
      <Select variant="default" label="Default" options={options} />\r
\r
      <Select variant="outline" label="Outline" options={options} />\r
\r
      <Select variant="filled" label="Filled" options={options} />\r
\r
      <Select variant="ghost" label="Ghost" options={options} />\r
\r
      <Select variant="error" label="Error" error="Required" options={options} />\r
    </div>
}`,...F.parameters?.docs?.source}}},I=[`Playground`,`Default`,`Outline`,`Filled`,`Ghost`,`Error`,`Searchable`,`Clearable`,`Disabled`,`FullWidth`,`Sizes`,`Variants`]}))();export{j as Clearable,T as Default,M as Disabled,k as Error,D as Filled,N as FullWidth,O as Ghost,E as Outline,w as Playground,A as Searchable,P as Sizes,F as Variants,I as __namedExportsOrder,C as default};