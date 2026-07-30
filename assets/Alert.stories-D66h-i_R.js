import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{N as n}from"./iframe-BXqPYJMY.js";import{t as r}from"./jsx-runtime-f3rHp9ZU.js";import{I as i,O as a,R as o,n as s,o as c,t as l,u,v as d}from"./lucide-react-B8GO83KC.js";import{i as f,n as p,r as m,t as h}from"./dist-BVFsKm1K.js";import{t as g}from"./Text-HWnfekmA.js";import{t as _}from"./Text-DQV05JqJ.js";import{t as v}from"./Button-D8DllA1y.js";import{t as y}from"./Button-CmKiASb6.js";var b,x=e((()=>{p(),b=h([`flex`,`items-start`,`p-2`,`gap-4`,`border`,`transition-all`,`w-fit`],{variants:{variant:{info:``,success:``,warning:``,error:``},appearance:{solid:``,soft:``,outline:``},rounded:{sm:`rounded`,md:`rounded-lg`,lg:`rounded-xl`},fullWidth:{true:`w-full`,false:`w-fit`}},compoundVariants:[{variant:`info`,appearance:`solid`,class:`bg-info-base border-info-base text-white`},{variant:`info`,appearance:`soft`,class:`bg-info-bg border-info-base text-info-base`},{variant:`info`,appearance:`outline`,class:`bg-transparent border-info-base text-info-base`},{variant:`success`,appearance:`solid`,class:`bg-success-base border-success-base text-white`},{variant:`success`,appearance:`soft`,class:`bg-success-bg border-success-base text-success-base`},{variant:`success`,appearance:`outline`,class:`bg-transparent border-success-base text-success-base`},{variant:`warning`,appearance:`solid`,class:`bg-warning-base border-warning-base text-white`},{variant:`warning`,appearance:`soft`,class:`bg-warning-bg border-warning-base text-warning-base`},{variant:`warning`,appearance:`outline`,class:`bg-transparent border-warning-base text-warning-base`},{variant:`error`,appearance:`solid`,class:`bg-error-base border-error-base text-white`},{variant:`error`,appearance:`soft`,class:`bg-error-bg border-error-base text-error-base`},{variant:`error`,appearance:`outline`,class:`bg-transparent border-error-base text-error-base`}],defaultVariants:{variant:`info`,appearance:`soft`,rounded:`md`,fullWidth:!1}})})),S,C,w,T=e((()=>{S=t(n(),1),f(),l(),_(),x(),C=r(),w=(0,S.forwardRef)(({title:e,description:t,variant:n=`info`,appearance:r=`soft`,icon:l,closable:u=!1,onClose:d,action:f,rounded:p=`md`,fullWidth:h=!1,className:_,...v},y)=>{let x={info:(0,C.jsx)(a,{size:22}),success:(0,C.jsx)(i,{size:22}),warning:(0,C.jsx)(c,{size:22}),error:(0,C.jsx)(o,{size:22})};return(0,C.jsxs)(`div`,{ref:y,role:`alert`,className:m(b({variant:n,appearance:r,rounded:p,fullWidth:h}),_),...v,children:[(0,C.jsx)(`div`,{className:`flex-shrink-0 mt-0.5`,children:l??x[n]}),(0,C.jsxs)(`div`,{className:`flex-1 min-w-0 space-y-1`,children:[e&&(0,C.jsx)(g,{content:e,weight:`semibold`,variant:r===`solid`?`reverse`:`heading`}),t&&(0,C.jsx)(g,{content:t,size:`sm`,variant:r===`solid`?`reverse`:`body`}),f&&(0,C.jsx)(`div`,{className:`pt-2`,children:f})]}),u&&(0,C.jsx)(`button`,{type:`button`,"aria-label":`Close Alert`,onClick:d,className:m(`rounded-md p-1 transition-colors`,r===`solid`?`hover:bg-white/20`:`hover:bg-black/10`),children:(0,C.jsx)(s,{size:18})})]})}),w.displayName=`Alert`,w.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{title:{required:!1,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| "info"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:`literal`,value:`"info"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"info"`,computed:!1}},appearance:{required:!1,tsType:{name:`union`,raw:`| "solid"\r
| "soft"\r
| "outline"`,elements:[{name:`literal`,value:`"solid"`},{name:`literal`,value:`"soft"`},{name:`literal`,value:`"outline"`}]},description:``,defaultValue:{value:`"soft"`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:``},closable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},action:{required:!1,tsType:{name:`ReactNode`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},rounded:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}}},composes:[`HTMLAttributes`]}})),E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{l(),T(),y(),E=r(),D={title:`Components/Alert`,component:w,tags:[`autodocs`],args:{title:`Information`,description:`This is an alert message.`,variant:`info`,appearance:`soft`,rounded:`md`,fullWidth:!1,closable:!1},argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]},appearance:{control:`select`,options:[`soft`,`solid`,`outline`]},rounded:{control:`select`,options:[`sm`,`md`,`lg`]},fullWidth:{control:`boolean`},closable:{control:`boolean`},icon:{control:!1},action:{control:!1},onClose:{action:`closed`}}},O={},k={args:{variant:`info`,title:`Information`,description:`This is an informational alert.`}},A={args:{variant:`success`,title:`Success`,description:`Your profile has been updated successfully.`}},j={args:{variant:`warning`,title:`Warning`,description:`Your subscription will expire soon.`}},M={args:{variant:`error`,title:`Error`,description:`Something went wrong.`}},N={args:{appearance:`solid`,variant:`success`,title:`Solid Alert`,description:`Solid appearance example.`}},P={args:{appearance:`outline`,variant:`warning`,title:`Outline Alert`,description:`Outline appearance example.`}},F={args:{appearance:`soft`,variant:`info`,title:`Soft Alert`,description:`Soft appearance example.`}},I={args:{closable:!0,variant:`error`,title:`Dismissible Alert`,description:`Click the close icon.`}},L={args:{icon:(0,E.jsx)(u,{size:22}),variant:`success`,title:`Protected`,description:`Your account is secured.`}},R={args:{variant:`warning`,title:`Network Error`,description:`Please try again.`,action:(0,E.jsx)(v,{label:`Retry`,size:`sm`,icon:(0,E.jsx)(d,{size:16})})}},z={args:{fullWidth:!0,title:`Full Width Alert`,description:`This alert stretches to the container width.`}},B={render:()=>(0,E.jsxs)(`div`,{className:`space-y-4`,children:[(0,E.jsx)(w,{variant:`info`,title:`Information`,description:`This is an informational alert.`}),(0,E.jsx)(w,{variant:`success`,title:`Success`,description:`Operation completed successfully.`}),(0,E.jsx)(w,{variant:`warning`,title:`Warning`,description:`Please review your settings.`}),(0,E.jsx)(w,{variant:`error`,title:`Error`,description:`Something went wrong.`})]})},V={render:()=>(0,E.jsxs)(`div`,{className:`space-y-4`,children:[(0,E.jsx)(w,{appearance:`soft`,title:`Soft`,description:`Soft appearance.`}),(0,E.jsx)(w,{appearance:`outline`,title:`Outline`,description:`Outline appearance.`}),(0,E.jsx)(w,{appearance:`solid`,variant:`success`,title:`Solid`,description:`Solid appearance.`})]})},H={render:()=>(0,E.jsx)(w,{variant:`success`,appearance:`soft`,title:`Deployment Successful`,description:`Your application has been deployed successfully.`,closable:!0,icon:(0,E.jsx)(u,{size:22}),action:(0,E.jsx)(v,{label:`View`,size:`sm`})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informational alert."
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success",
    description: "Your profile has been updated successfully."
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning",
    description: "Your subscription will expire soon."
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong."
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "solid",
    variant: "success",
    title: "Solid Alert",
    description: "Solid appearance example."
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "outline",
    variant: "warning",
    title: "Outline Alert",
    description: "Outline appearance example."
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: "soft",
    variant: "info",
    title: "Soft Alert",
    description: "Soft appearance example."
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    closable: true,
    variant: "error",
    title: "Dismissible Alert",
    description: "Click the close icon."
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Shield size={22} />,
    variant: "success",
    title: "Protected",
    description: "Your account is secured."
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Network Error",
    description: "Please try again.",
    action: <Button label="Retry" size="sm" icon={<RefreshCcw size={16} />} />
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    title: "Full Width Alert",
    description: "This alert stretches to the container width."
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Alert variant="info" title="Information" description="This is an informational alert." />\r
\r
      <Alert variant="success" title="Success" description="Operation completed successfully." />\r
\r
      <Alert variant="warning" title="Warning" description="Please review your settings." />\r
\r
      <Alert variant="error" title="Error" description="Something went wrong." />\r
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Alert appearance="soft" title="Soft" description="Soft appearance." />\r
\r
      <Alert appearance="outline" title="Outline" description="Outline appearance." />\r
\r
      <Alert appearance="solid" variant="success" title="Solid" description="Solid appearance." />\r
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="success" appearance="soft" title="Deployment Successful" description="Your application has been deployed successfully." closable icon={<Shield size={22} />} action={<Button label="View" size="sm" />} />
}`,...H.parameters?.docs?.source}}},U=[`Playground`,`Info`,`Success`,`Warning`,`Error`,`Solid`,`Outline`,`Soft`,`Closable`,`CustomIcon`,`WithAction`,`FullWidth`,`Variants`,`Appearances`,`AllFeatures`]}))();export{H as AllFeatures,V as Appearances,I as Closable,L as CustomIcon,M as Error,z as FullWidth,k as Info,P as Outline,O as Playground,F as Soft,N as Solid,A as Success,B as Variants,j as Warning,R as WithAction,U as __namedExportsOrder,D as default};