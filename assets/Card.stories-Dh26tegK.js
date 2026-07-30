import{i as e,s as t}from"./preload-helper-B-BVgx5s.js";import{N as n}from"./iframe-C0E5N8tr.js";import{t as r}from"./jsx-runtime-D-WwFckC.js";import{i,n as a,r as o,t as s}from"./dist-cmfH2-lj.js";import{t as c}from"./Text-BZJuTOrO.js";import{t as l}from"./Text-CrOoH7jE.js";var u,d=e((()=>{a(),u=s([`transition-all duration-200`,`border`,`overflow-hidden`,`bg-surface-primary`],{variants:{variant:{default:[`border-border-primary`,`bg-surface-primary`].join(` `),outline:[`bg-transparent`,`border-border-primary`].join(` `),ghost:[`border-transparent`,`bg-surface-secondary`].join(` `),primary:[`border-primary-base`,`bg-primary-extraLight`].join(` `),success:[`border-success-base`,`bg-success-bg`].join(` `),warning:[`border-warning-base`,`bg-warning-bg`].join(` `),error:[`border-error-base`,`bg-error-bg`].join(` `)},padding:{none:`p-0`,sm:`p-3`,md:`p-5`,lg:`p-8`},rounded:{none:`rounded-none`,sm:`rounded`,md:`rounded-lg`,full:`rounded-3xl`},shadow:{none:`shadow-none`,sm:`shadow-sm`,md:`shadow-md`,lg:`shadow-lg`},fullWidth:{true:`w-full`,false:`w-fit`}},defaultVariants:{variant:`default`,padding:`md`,rounded:`md`,shadow:`sm`,fullWidth:!1}})})),f,p,m,h=e((()=>{f=t(n(),1),i(),d(),p=r(),m=(0,f.forwardRef)(({children:e,className:t,variant:n=`default`,padding:r=`md`,rounded:i=`md`,shadow:a=`sm`,fullWidth:s=!1,...c},l)=>(0,p.jsx)(`div`,{ref:l,className:u({variant:n,padding:r,rounded:i,shadow:a,fullWidth:s,className:o(t)}),...c,children:e})),m.displayName=`Card`,m.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`| "default"\r
| "outline"\r
| "ghost"\r
| "primary"\r
| "success"\r
| "warning"\r
| "error"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"ghost"`},{name:`literal`,value:`"primary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`| "none"\r
| "sm"\r
| "md"\r
| "lg"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},rounded:{required:!1,tsType:{name:`union`,raw:`"none" | "sm" | "md" | "full"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"full"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},shadow:{required:!1,tsType:{name:`union`,raw:`"none" | "sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"sm"`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{h(),l(),g=r(),_={title:`Components/Card`,component:m,tags:[`autodocs`],args:{variant:`default`,padding:`md`,rounded:`md`,shadow:`sm`,fullWidth:!1},argTypes:{variant:{control:`select`,options:[`default`,`outline`,`ghost`,`primary`,`success`,`warning`,`error`]},padding:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},rounded:{control:`select`,options:[`none`,`sm`,`md`,`full`]},shadow:{control:`select`,options:[`none`,`sm`,`md`,`lg`]},fullWidth:{control:`boolean`}}},v={render:e=>(0,g.jsx)(m,{...e,children:(0,g.jsx)(c,{content:`This is a reusable Card component.`,weight:`medium`})})},y={render:()=>(0,g.jsx)(m,{children:(0,g.jsx)(c,{content:`Default Card`})})},b={render:()=>(0,g.jsx)(m,{variant:`outline`,children:(0,g.jsx)(c,{content:`Outline Card`})})},x={render:()=>(0,g.jsx)(m,{variant:`ghost`,children:(0,g.jsx)(c,{content:`Ghost Card`})})},S={render:()=>(0,g.jsx)(m,{variant:`primary`,children:(0,g.jsx)(c,{content:`Primary Card`})})},C={render:()=>(0,g.jsx)(m,{variant:`success`,children:(0,g.jsx)(c,{content:`Success Card`})})},w={render:()=>(0,g.jsx)(m,{variant:`warning`,children:(0,g.jsx)(c,{content:`Warning Card`})})},T={render:()=>(0,g.jsx)(m,{variant:`error`,children:(0,g.jsx)(c,{content:`Error Card`})})},E={render:()=>(0,g.jsxs)(`div`,{className:`flex gap-5`,children:[(0,g.jsx)(m,{shadow:`none`,children:(0,g.jsx)(c,{content:`None`})}),(0,g.jsx)(m,{shadow:`sm`,children:(0,g.jsx)(c,{content:`Small`})}),(0,g.jsx)(m,{shadow:`md`,children:(0,g.jsx)(c,{content:`Medium`})}),(0,g.jsx)(m,{shadow:`lg`,children:(0,g.jsx)(c,{content:`Large`})})]})},D={render:()=>(0,g.jsxs)(`div`,{className:`flex gap-5`,children:[(0,g.jsx)(m,{padding:`sm`,children:(0,g.jsx)(c,{content:`Small Padding`})}),(0,g.jsx)(m,{padding:`md`,children:(0,g.jsx)(c,{content:`Medium Padding`})}),(0,g.jsx)(m,{padding:`lg`,children:(0,g.jsx)(c,{content:`Large Padding`})})]})},O={render:()=>(0,g.jsx)(m,{fullWidth:!0,children:(0,g.jsx)(c,{content:`This card takes full width.`})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>\r
      <Text content="This is a reusable Card component." weight="medium" />\r
    </Card>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Card>\r
      <Text content="Default Card" />\r
    </Card>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="outline">\r
      <Text content="Outline Card" />\r
    </Card>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="ghost">\r
      <Text content="Ghost Card" />\r
    </Card>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="primary">\r
      <Text content="Primary Card" />\r
    </Card>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="success">\r
      <Text content="Success Card" />\r
    </Card>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="warning">\r
      <Text content="Warning Card" />\r
    </Card>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="error">\r
      <Text content="Error Card" />\r
    </Card>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-5">\r
      <Card shadow="none">\r
        <Text content="None" />\r
      </Card>\r
\r
      <Card shadow="sm">\r
        <Text content="Small" />\r
      </Card>\r
\r
      <Card shadow="md">\r
        <Text content="Medium" />\r
      </Card>\r
\r
      <Card shadow="lg">\r
        <Text content="Large" />\r
      </Card>\r
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-5">\r
      <Card padding="sm">\r
        <Text content="Small Padding" />\r
      </Card>\r
\r
      <Card padding="md">\r
        <Text content="Medium Padding" />\r
      </Card>\r
\r
      <Card padding="lg">\r
        <Text content="Large Padding" />\r
      </Card>\r
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Card fullWidth>\r
      <Text content="This card takes full width." />\r
    </Card>
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`Default`,`Outline`,`Ghost`,`Primary`,`Success`,`Warning`,`Error`,`Shadows`,`Padding`,`FullWidth`]}))();export{y as Default,T as Error,O as FullWidth,x as Ghost,b as Outline,D as Padding,v as Playground,S as Primary,E as Shadows,C as Success,w as Warning,k as __namedExportsOrder,_ as default};