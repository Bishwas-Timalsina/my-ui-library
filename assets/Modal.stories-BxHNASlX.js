import{i as e,s as t}from"./preload-helper-B-BVgx5s.js";import{N as n}from"./iframe-C0E5N8tr.js";import{t as r}from"./jsx-runtime-D-WwFckC.js";import{n as i,t as a}from"./dist-cmfH2-lj.js";var o,s=e((()=>{i(),o=a([`relative`,`bg-white`,`rounded-xl`,`shadow-xl`,`overflow-hidden`,`transition-all`],{variants:{size:{sm:`w-full max-w-sm`,md:`w-full max-w-md`,lg:`w-full max-w-lg`,xl:`w-full max-w-xl`},variant:{default:`border border-border-default`,danger:`border border-error-base`,success:`border border-success-base`}},defaultVariants:{size:`md`,variant:`default`}})})),c,l,u,d=e((()=>{c=t(n(),1),s(),l=r(),u=(0,c.forwardRef)(({open:e=!1,onClose:t,title:n,footer:r,children:i,size:a=`md`,variant:s=`default`,closeOnOverlayClick:c=!0,className:u,...d},f)=>e?(0,l.jsx)(`div`,{className:`\r
                    fixed\r
                    inset-0\r
                    z-50\r
                    flex\r
                    items-center\r
                    justify-center\r
                    bg-black/50\r
                    p-4\r
                `,onClick:()=>{c&&t?.()},children:(0,l.jsxs)(`div`,{ref:f,className:o({size:a,variant:s,className:u}),onClick:e=>e.stopPropagation(),...d,children:[n&&(0,l.jsxs)(`div`,{className:`\r
                                    flex\r
                                    items-center\r
                                    justify-between\r
                                    border-b\r
                                    px-6\r
                                    py-4\r
                                `,children:[(0,l.jsx)(`h2`,{className:`\r
                                        text-lg\r
                                        font-semibold\r
                                    `,children:n}),(0,l.jsx)(`button`,{type:`button`,onClick:t,className:`\r
                                        text-gray-500\r
                                        hover:text-gray-900\r
                                    `,children:`✕`})]}),(0,l.jsx)(`div`,{className:`\r
px-6\r
                            py-5\r
                        `,children:i}),r&&(0,l.jsx)(`div`,{className:`\r
                                    flex\r
                                    justify-end\r
                                    gap-3\r
                                    border-t\r
                                    bg-gray-50\r
                                    px-6\r
                                    py-4\r
                                `,children:r})]})}):null),u.displayName=`Modal`,u.__docgenInfo={description:``,methods:[],displayName:`Modal`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`| "sm"\r
| "md"\r
| "lg"\r
| "xl"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`| "default"\r
| "danger"\r
| "success"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"danger"`},{name:`literal`,value:`"success"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`HTMLAttributes`]}})),f,p,m,h,g,_,v,y,b;e((()=>{f=t(n(),1),d(),p=r(),m={title:`Components/Modal`,component:u,tags:[`autodocs`],args:{title:`Modal Title`,size:`md`,variant:`default`,open:!0},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},variant:{control:`select`,options:[`default`,`danger`,`success`]},closeOnOverlayClick:{control:`boolean`}}},h={args:{children:`This is a modal component.`}},g={args:{title:`Confirm Action`,children:`Are you sure you want to continue?`,footer:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{children:`Cancel`}),(0,p.jsx)(`button`,{children:`Confirm`})]})}},_={render:()=>(0,p.jsxs)(`div`,{className:`space-y-5`,children:[(0,p.jsx)(u,{open:!0,title:`Small`,size:`sm`,children:`Small Modal`}),(0,p.jsx)(u,{open:!0,title:`Medium`,size:`md`,children:`Medium Modal`}),(0,p.jsx)(u,{open:!0,title:`Large`,size:`lg`,children:`Large Modal`}),(0,p.jsx)(u,{open:!0,title:`Extra Large`,size:`xl`,children:`Extra Large Modal`})]})},v={render:()=>(0,p.jsxs)(`div`,{className:`space-y-5`,children:[(0,p.jsx)(u,{open:!0,title:`Default`,variant:`default`,children:`Default Modal`}),(0,p.jsx)(u,{open:!0,title:`Success`,variant:`success`,children:`Success Modal`}),(0,p.jsx)(u,{open:!0,title:`Danger`,variant:`danger`,children:`Danger Modal`})]})},y={render:()=>{let[e,t]=(0,f.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`button`,{onClick:()=>t(!0),children:`Open Modal`}),(0,p.jsx)(u,{open:e,onClose:()=>t(!1),title:`Controlled Modal`,children:`Modal controlled by state.`})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: "This is a modal component."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Confirm Action",
    children: "Are you sure you want to continue?",
    footer: <>\r
        <button>Cancel</button>\r
\r
        <button>Confirm</button>\r
      </>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-5">\r
      <Modal open title="Small" size="sm">\r
        Small Modal\r
      </Modal>\r
\r
      <Modal open title="Medium" size="md">\r
        Medium Modal\r
      </Modal>\r
\r
      <Modal open title="Large" size="lg">\r
        Large Modal\r
      </Modal>\r
\r
      <Modal open title="Extra Large" size="xl">\r
        Extra Large Modal\r
      </Modal>\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-5">\r
      <Modal open title="Default" variant="default">\r
        Default Modal\r
      </Modal>\r
\r
      <Modal open title="Success" variant="success">\r
        Success Modal\r
      </Modal>\r
\r
      <Modal open title="Danger" variant="danger">\r
        Danger Modal\r
      </Modal>\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <button onClick={() => setOpen(true)}>Open Modal</button>\r
\r
        <Modal open={open} onClose={() => setOpen(false)} title="Controlled Modal">\r
          Modal controlled by state.\r
        </Modal>\r
      </>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`WithFooter`,`Sizes`,`Variants`,`Controlled`]}))();export{y as Controlled,h as Playground,_ as Sizes,v as Variants,g as WithFooter,b as __namedExportsOrder,m as default};