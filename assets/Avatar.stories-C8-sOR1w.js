import{i as e,s as t}from"./preload-helper-B-BVgx5s.js";import{N as n}from"./iframe-C0E5N8tr.js";import{t as r}from"./jsx-runtime-D-WwFckC.js";import{f as i,i as a,t as o}from"./lucide-react-9hgq_g-6.js";import{i as s,n as c,r as l,t as u}from"./dist-cmfH2-lj.js";var d,f=e((()=>{c(),d=u([`relative`,`inline-flex`,`items-center`,`justify-center`,`overflow-hidden`,`font-semibold`,`select-none`,`shrink-0`],{variants:{size:{xs:`w-8 h-8 text-xs`,sm:`w-10 h-10 text-sm`,md:`w-12 h-12 text-base`,lg:`w-16 h-16 text-lg`,xl:`w-20 h-20 text-xl`},rounded:{none:`rounded-none`,sm:`rounded`,md:`rounded-lg`,full:`rounded-full`},background:{primary:`bg-primary-base text-white`,secondary:`bg-bg-hover text-text-heading`,success:`bg-success-base text-white`,warning:`bg-warning-base text-white`,error:`bg-error-base text-white`,info:`bg-info-base text-white`},border:{true:`border-2 border-white shadow`,false:``}},defaultVariants:{size:`md`,rounded:`full`,background:`primary`,border:!1}})})),p,m,h,g=e((()=>{p=t(n(),1),s(),o(),f(),m=r(),h=(0,p.forwardRef)(({src:e,alt:t,name:n,icon:r,size:i=`md`,rounded:o=`full`,background:s=`primary`,status:c,border:u=!1,className:f,imageProps:h,...g},_)=>{let[v,y]=(0,p.useState)(!1),b=(0,p.useMemo)(()=>{if(!n)return``;let e=n.trim().split(/\s+/);return e.length===1?e[0].slice(0,2).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()},[n]),x={online:`bg-success-base`,offline:`bg-text-muted`,away:`bg-warning-base`,busy:`bg-error-base`},S={xs:`w-2 h-2`,sm:`w-2.5 h-2.5`,md:`w-3 h-3`,lg:`w-4 h-4`,xl:`w-5 h-5`};return(0,m.jsxs)(`div`,{ref:_,className:l(d({size:i,rounded:o,background:s,border:u}),f),...g,children:[e&&!v?(0,m.jsx)(`img`,{src:e,alt:t??n??`Avatar`,className:`w-full h-full object-cover`,onError:()=>y(!0),...h}):b?(0,m.jsx)(`span`,{children:b}):r||(0,m.jsx)(a,{className:l({"w-4 h-4":i===`xs`,"w-5 h-5":i===`sm`,"w-6 h-6":i===`md`,"w-8 h-8":i===`lg`,"w-10 h-10":i===`xl`})}),c&&(0,m.jsx)(`span`,{className:l(`absolute bottom-0 right-0 rounded-full border-2 border-white`,x[c],S[i])})]})}),h.displayName=`Avatar`,h.__docgenInfo={description:``,methods:[],displayName:`Avatar`,props:{src:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`| "xs"\r
| "sm"\r
| "md"\r
| "lg"\r
| "xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},rounded:{required:!1,tsType:{name:`union`,raw:`| "none"\r
| "sm"\r
| "md"\r
| "full"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"full"`}]},description:``,defaultValue:{value:`"full"`,computed:!1}},background:{required:!1,tsType:{name:`union`,raw:`| "primary"\r
| "secondary"\r
| "success"\r
| "warning"\r
| "error"\r
| "info"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"info"`}]},description:``,defaultValue:{value:`"primary"`,computed:!1}},status:{required:!1,tsType:{name:`union`,raw:`| "online"\r
| "offline"\r
| "away"\r
| "busy"`,elements:[{name:`literal`,value:`"online"`},{name:`literal`,value:`"offline"`},{name:`literal`,value:`"away"`},{name:`literal`,value:`"busy"`}]},description:``},border:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},imageProps:{required:!1,tsType:{name:`ImgHTMLAttributes`,elements:[{name:`HTMLImageElement`}],raw:`ImgHTMLAttributes<HTMLImageElement>`},description:``}},composes:[`HTMLAttributes`]}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{o(),g(),_=r(),v={title:`Components/Avatar`,component:h,tags:[`autodocs`],args:{name:`John Doe`,size:`md`,rounded:`full`,background:`primary`,border:!1},argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},rounded:{control:`select`,options:[`none`,`sm`,`md`,`full`]},background:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`error`,`info`]},status:{control:`select`,options:[void 0,`online`,`offline`,`away`,`busy`]},border:{control:`boolean`},icon:{control:!1}}},y={},b={args:{src:`https://i.pravatar.cc/300`,alt:`User Avatar`}},x={args:{name:`John Doe`}},S={args:{name:`Taylor`}},C={args:{icon:(0,_.jsx)(a,{size:24}),name:void 0}},w={args:{icon:(0,_.jsx)(i,{size:24}),background:`success`,name:void 0}},T={args:{src:`https://i.pravatar.cc/301`,status:`online`}},E={args:{src:`https://i.pravatar.cc/302`,status:`offline`}},D={args:{src:`https://i.pravatar.cc/303`,status:`away`}},O={args:{src:`https://i.pravatar.cc/304`,status:`busy`}},k={args:{src:`https://i.pravatar.cc/305`,border:!0}},A={args:{src:`https://i.pravatar.cc/306`,rounded:`md`}},j={render:()=>(0,_.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,_.jsx)(h,{name:`XS`,size:`xs`}),(0,_.jsx)(h,{name:`SM`,size:`sm`}),(0,_.jsx)(h,{name:`MD`,size:`md`}),(0,_.jsx)(h,{name:`LG`,size:`lg`}),(0,_.jsx)(h,{name:`XL`,size:`xl`})]})},M={render:()=>(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,_.jsx)(h,{name:`P`,background:`primary`}),(0,_.jsx)(h,{name:`S`,background:`secondary`}),(0,_.jsx)(h,{name:`S`,background:`success`}),(0,_.jsx)(h,{name:`W`,background:`warning`}),(0,_.jsx)(h,{name:`E`,background:`error`}),(0,_.jsx)(h,{name:`I`,background:`info`})]})},N={render:()=>(0,_.jsxs)(`div`,{className:`flex gap-6`,children:[(0,_.jsx)(h,{src:`https://i.pravatar.cc/310`,status:`online`}),(0,_.jsx)(h,{src:`https://i.pravatar.cc/311`,status:`away`}),(0,_.jsx)(h,{src:`https://i.pravatar.cc/312`,status:`busy`}),(0,_.jsx)(h,{src:`https://i.pravatar.cc/313`,status:`offline`})]})},P={render:()=>(0,_.jsxs)(`div`,{className:`flex gap-4`,children:[(0,_.jsx)(h,{name:`John Doe`}),(0,_.jsx)(h,{name:`Taylor`,background:`success`}),(0,_.jsx)(h,{icon:(0,_.jsx)(a,{size:22}),background:`warning`}),(0,_.jsx)(h,{background:`error`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "User Avatar"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: "John Doe"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Taylor"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <User size={24} />,
    name: undefined
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <ShieldCheck size={24} />,
    background: "success",
    name: undefined
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/301",
    status: "online"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/302",
    status: "offline"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/303",
    status: "away"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/304",
    status: "busy"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/305",
    border: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://i.pravatar.cc/306",
    rounded: "md"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Avatar name="XS" size="xs" />\r
      <Avatar name="SM" size="sm" />\r
      <Avatar name="MD" size="md" />\r
      <Avatar name="LG" size="lg" />\r
      <Avatar name="XL" size="xl" />\r
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Avatar name="P" background="primary" />\r
      <Avatar name="S" background="secondary" />\r
      <Avatar name="S" background="success" />\r
      <Avatar name="W" background="warning" />\r
      <Avatar name="E" background="error" />\r
      <Avatar name="I" background="info" />\r
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">\r
      <Avatar src="https://i.pravatar.cc/310" status="online" />\r
\r
      <Avatar src="https://i.pravatar.cc/311" status="away" />\r
\r
      <Avatar src="https://i.pravatar.cc/312" status="busy" />\r
\r
      <Avatar src="https://i.pravatar.cc/313" status="offline" />\r
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Avatar name="John Doe" />\r
\r
      <Avatar name="Taylor" background="success" />\r
\r
      <Avatar icon={<User size={22} />} background="warning" />\r
\r
      <Avatar background="error" />\r
    </div>
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`Image`,`Initials`,`SingleName`,`Icon`,`CustomIcon`,`Online`,`Offline`,`Away`,`Busy`,`WithBorder`,`RoundedSquare`,`Sizes`,`BackgroundColors`,`StatusExamples`,`Fallbacks`]}))();export{D as Away,M as BackgroundColors,O as Busy,w as CustomIcon,P as Fallbacks,C as Icon,b as Image,x as Initials,E as Offline,T as Online,y as Playground,A as RoundedSquare,S as SingleName,j as Sizes,N as StatusExamples,k as WithBorder,F as __namedExportsOrder,v as default};