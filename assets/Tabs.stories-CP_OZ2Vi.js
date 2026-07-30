import{i as e,s as t}from"./preload-helper-B-BVgx5s.js";import{N as n}from"./iframe-C0E5N8tr.js";import{t as r}from"./jsx-runtime-D-WwFckC.js";import{A as i,Q as a,i as o,m as s,t as c}from"./lucide-react-9hgq_g-6.js";import{i as l,n as u,r as d,t as f}from"./dist-cmfH2-lj.js";var p,m,h,g=e((()=>{u(),p=f([`inline-flex`,`gap-2`,`p-1`,`transition-all`],{variants:{orientation:{horizontal:`flex-row`,vertical:`flex-col w-fit`},fullWidth:{true:`w-full`,false:`w-fit`}},defaultVariants:{orientation:`horizontal`,fullWidth:!1}}),m=f([`inline-flex`,`items-center`,`justify-center`,`gap-2`,`font-medium`,`transition-all`,`cursor-pointer`,`select-none`,`disabled:opacity-50`,`disabled:pointer-events-none`,`whitespace-nowrap`],{variants:{variant:{solid:``,soft:``,outline:``,underline:``},size:{sm:`px-3 py-1.5 text-sm`,md:`px-4 py-2 text-base`,lg:`px-5 py-3 text-lg`},rounded:{none:`rounded-none`,sm:`rounded`,md:`rounded-lg`,full:`rounded-full`},active:{true:``,false:``},fullWidth:{true:`flex-1`,false:``}},compoundVariants:[{variant:`solid`,active:!0,class:`bg-primary-base text-white`},{variant:`solid`,active:!1,class:`bg-transparent text-text-body hover:bg-primary-light`},{variant:`soft`,active:!0,class:`bg-primary-light text-primary-base`},{variant:`soft`,active:!1,class:`text-text-body hover:bg-bg-hover`},{variant:`outline`,active:!0,class:`border border-primary-base text-primary-base bg-bg-base`},{variant:`outline`,active:!1,class:`border border-transparent text-text-body hover:border-border-default`},{variant:`underline`,active:!0,class:`border-b-2 border-primary-base text-primary-base rounded-none`},{variant:`underline`,active:!1,class:`border-b-2 border-transparent text-text-body hover:border-border-default rounded-none`}],defaultVariants:{variant:`solid`,size:`md`,rounded:`md`,active:!1,fullWidth:!1}}),h=f([`mt-4`,`outline-none`])})),_,v,y,b=e((()=>{_=t(n(),1),l(),g(),v=r(),y=(0,_.forwardRef)(({items:e,value:t,defaultValue:n,onValueChange:r,variant:i=`solid`,size:a=`md`,rounded:o=`md`,orientation:s=`horizontal`,fullWidth:c=!1,className:l,...u},f)=>{let g=(0,_.useMemo)(()=>e.find(e=>!e.disabled)?.value??``,[e]),[y,b]=(0,_.useState)(n??g),x=t??y;(0,_.useEffect)(()=>{!n&&!t&&b(g)},[g,n,t]);let S=e=>{t===void 0&&b(e),r?.(e)},C=e.find(e=>e.value===x);return(0,v.jsxs)(`div`,{ref:f,className:d(`flex gap-4`,s===`vertical`?`flex-row`:`flex-col`,l),...u,children:[(0,v.jsx)(`div`,{role:`tablist`,"aria-orientation":s,className:p({orientation:s,fullWidth:c}),children:e.map(e=>{let t=x===e.value;return(0,v.jsxs)(`button`,{role:`tab`,type:`button`,disabled:e.disabled,"aria-selected":t,"aria-controls":`tabpanel-${e.value}`,id:`tab-${e.value}`,onClick:()=>S(e.value),className:m({variant:i,size:a,rounded:o,active:t,fullWidth:c}),children:[e.icon&&(0,v.jsx)(`span`,{className:`flex items-center`,children:e.icon}),(0,v.jsx)(`span`,{children:e.label})]},e.value)})}),(0,v.jsx)(`div`,{role:`tabpanel`,id:`tabpanel-${x}`,"aria-labelledby":`tab-${x}`,className:h(),children:C?.content})]})}),y.displayName=`Tabs`,y.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| "solid"\r
| "soft"\r
| "outline"\r
| "underline"`,elements:[{name:`literal`,value:`"solid"`},{name:`literal`,value:`"soft"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"underline"`}]},description:``,defaultValue:{value:`"solid"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "sm"\r
| "md"\r
| "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},rounded:{required:!1,tsType:{name:`union`,raw:`| "none"\r
| "sm"\r
| "md"\r
| "full"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"full"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`| "horizontal"\r
| "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:``,defaultValue:{value:`"horizontal"`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]}})),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{c(),b(),x=r(),S={title:`Components/Tabs`,component:y,tags:[`autodocs`],args:{variant:`solid`,size:`md`,rounded:`md`,orientation:`horizontal`,fullWidth:!1,defaultValue:`home`,items:[{label:`Home`,value:`home`,content:(0,x.jsx)(`div`,{children:`Home Content`})},{label:`Profile`,value:`profile`,content:(0,x.jsx)(`div`,{children:`Profile Content`})},{label:`Settings`,value:`settings`,content:(0,x.jsx)(`div`,{children:`Settings Content`})}]},argTypes:{variant:{control:`select`,options:[`solid`,`soft`,`outline`,`underline`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},rounded:{control:`select`,options:[`none`,`sm`,`md`,`full`]},orientation:{control:`radio`,options:[`horizontal`,`vertical`]},fullWidth:{control:`boolean`},items:{control:!1},onValueChange:{action:`changed`}}},C={},w={args:{variant:`solid`}},T={args:{variant:`soft`}},E={args:{variant:`outline`}},D={args:{variant:`underline`}},O={args:{size:`sm`}},k={args:{size:`md`}},A={args:{size:`lg`}},j={args:{fullWidth:!0}},M={args:{orientation:`vertical`}},N={args:{rounded:`full`}},P={args:{defaultValue:`home`,items:[{label:`Home`,value:`home`,icon:(0,x.jsx)(i,{size:16}),content:(0,x.jsx)(`div`,{children:`Home Content`})},{label:`Profile`,value:`profile`,icon:(0,x.jsx)(o,{size:16}),content:(0,x.jsx)(`div`,{children:`Profile Content`})},{label:`Notifications`,value:`notifications`,icon:(0,x.jsx)(a,{size:16}),content:(0,x.jsx)(`div`,{children:`Notifications Content`})},{label:`Settings`,value:`settings`,icon:(0,x.jsx)(s,{size:16}),content:(0,x.jsx)(`div`,{children:`Settings Content`})}]}},F={args:{defaultValue:`home`,items:[{label:`Home`,value:`home`,content:(0,x.jsx)(`div`,{children:`Home Content`})},{label:`Profile`,value:`profile`,content:(0,x.jsx)(`div`,{children:`Profile Content`})},{label:`Settings`,value:`settings`,disabled:!0,content:(0,x.jsx)(`div`,{children:`Settings Content`})}]}},I={render:()=>{let e=[{label:`Home`,value:`home`,content:(0,x.jsx)(`div`,{children:`Home Content`})},{label:`Profile`,value:`profile`,content:(0,x.jsx)(`div`,{children:`Profile Content`})},{label:`Settings`,value:`settings`,content:(0,x.jsx)(`div`,{children:`Settings Content`})}];return(0,x.jsxs)(`div`,{className:`space-y-8`,children:[(0,x.jsx)(y,{items:e,variant:`solid`}),(0,x.jsx)(y,{items:e,variant:`soft`}),(0,x.jsx)(y,{items:e,variant:`outline`}),(0,x.jsx)(y,{items:e,variant:`underline`})]})}},L={args:{variant:`outline`,rounded:`full`,fullWidth:!0,defaultValue:`dashboard`,items:[{label:`Dashboard`,value:`dashboard`,icon:(0,x.jsx)(i,{size:16}),content:(0,x.jsx)(`div`,{className:`p-4`,children:`Dashboard Content`})},{label:`Profile`,value:`profile`,icon:(0,x.jsx)(o,{size:16}),content:(0,x.jsx)(`div`,{className:`p-4`,children:`Profile Content`})},{label:`Notifications`,value:`notifications`,icon:(0,x.jsx)(a,{size:16}),content:(0,x.jsx)(`div`,{className:`p-4`,children:`Notifications Content`})},{label:`Settings`,value:`settings`,icon:(0,x.jsx)(s,{size:16}),disabled:!0,content:(0,x.jsx)(`div`,{className:`p-4`,children:`Settings Content`})}]}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "solid"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "soft"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "underline"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: "full"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "home",
    items: [{
      label: "Home",
      value: "home",
      icon: <Home size={16} />,
      content: <div>Home Content</div>
    }, {
      label: "Profile",
      value: "profile",
      icon: <User size={16} />,
      content: <div>Profile Content</div>
    }, {
      label: "Notifications",
      value: "notifications",
      icon: <Bell size={16} />,
      content: <div>Notifications Content</div>
    }, {
      label: "Settings",
      value: "settings",
      icon: <Settings size={16} />,
      content: <div>Settings Content</div>
    }]
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "home",
    items: [{
      label: "Home",
      value: "home",
      content: <div>Home Content</div>
    }, {
      label: "Profile",
      value: "profile",
      content: <div>Profile Content</div>
    }, {
      label: "Settings",
      value: "settings",
      disabled: true,
      content: <div>Settings Content</div>
    }]
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      label: "Home",
      value: "home",
      content: <div>Home Content</div>
    }, {
      label: "Profile",
      value: "profile",
      content: <div>Profile Content</div>
    }, {
      label: "Settings",
      value: "settings",
      content: <div>Settings Content</div>
    }];
    return <div className="space-y-8">\r
        <Tabs items={items} variant="solid" />\r
\r
        <Tabs items={items} variant="soft" />\r
\r
        <Tabs items={items} variant="outline" />\r
\r
        <Tabs items={items} variant="underline" />\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    rounded: "full",
    fullWidth: true,
    defaultValue: "dashboard",
    items: [{
      label: "Dashboard",
      value: "dashboard",
      icon: <Home size={16} />,
      content: <div className="p-4">Dashboard Content</div>
    }, {
      label: "Profile",
      value: "profile",
      icon: <User size={16} />,
      content: <div className="p-4">Profile Content</div>
    }, {
      label: "Notifications",
      value: "notifications",
      icon: <Bell size={16} />,
      content: <div className="p-4">Notifications Content</div>
    }, {
      label: "Settings",
      value: "settings",
      icon: <Settings size={16} />,
      disabled: true,
      content: <div className="p-4">Settings Content</div>
    }]
  }
}`,...L.parameters?.docs?.source}}},R=[`Playground`,`Solid`,`Soft`,`Outline`,`Underline`,`Small`,`Medium`,`Large`,`FullWidth`,`Vertical`,`Rounded`,`WithIcons`,`DisabledTab`,`Variants`,`AllFeatures`]}))();export{L as AllFeatures,F as DisabledTab,j as FullWidth,A as Large,k as Medium,E as Outline,C as Playground,N as Rounded,O as Small,T as Soft,w as Solid,D as Underline,I as Variants,M as Vertical,P as WithIcons,R as __namedExportsOrder,S as default};