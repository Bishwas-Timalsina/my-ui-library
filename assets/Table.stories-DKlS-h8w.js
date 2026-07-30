import{i as e,s as t}from"./preload-helper-B-BVgx5s.js";import{N as n}from"./iframe-C0E5N8tr.js";import{t as r}from"./jsx-runtime-D-WwFckC.js";import{i,n as a,r as o,t as s}from"./dist-cmfH2-lj.js";import{t as c}from"./Button-Dnnzis6W.js";import{t as l}from"./Button-SFM6e5AD.js";import{n as u,t as d}from"./Badge-CBwj6WMv.js";var f,p,m,h,g,_=e((()=>{a(),f=s([`w-full`,`overflow-x-auto`,`rounded-lg`],{variants:{responsive:{true:`overflow-x-auto`,false:`overflow-visible`}},defaultVariants:{responsive:!0}}),p=s([`w-full`,`border-collapse`,`text-left`],{variants:{variant:{default:`border border-border-default`,bordered:`border border-border-default`,minimal:`border-0`}},defaultVariants:{variant:`default`}}),m=s([`bg-bg-hover`,`text-text-heading`,`font-semibold`],{variants:{sticky:{true:`sticky top-0 z-10`,false:``}},defaultVariants:{sticky:!1}}),h=s([`transition-colors`,`border-b`,`border-border-muted`],{variants:{hoverable:{true:`hover:bg-primary-extraLight cursor-pointer`,false:``},striped:{true:`even:bg-bg-light`,false:``}},defaultVariants:{hoverable:!0,striped:!1}}),g=s([],{variants:{size:{sm:`px-3 py-2 text-sm`,md:`px-4 py-3 text-base`,lg:`px-5 py-4 text-lg`},align:{left:`text-left`,center:`text-center`,right:`text-right`}},defaultVariants:{size:`md`,align:`left`}})}));function v({columns:e,data:t,rowKey:n,loading:r=!1,emptyText:i=`No data available`,variant:a=`default`,size:s=`md`,hoverable:c=!0,striped:l=!1,stickyHeader:u=!1,responsive:d=!0,onRowClick:_,className:v,...y},x){let S=(e,t)=>typeof n==`function`?n(e):typeof n==`string`?String(e[n]):t;return(0,b.jsx)(`div`,{ref:x,className:o(f({responsive:d}),v),...y,children:(0,b.jsxs)(`table`,{className:p({variant:a}),children:[(0,b.jsx)(`thead`,{className:m({sticky:u}),children:(0,b.jsx)(`tr`,{children:e.map(e=>(0,b.jsx)(`th`,{style:{width:e.width},className:g({size:s,align:e.align}),children:e.title},String(e.key)))})}),(0,b.jsx)(`tbody`,{children:r?(0,b.jsx)(`tr`,{children:(0,b.jsx)(`td`,{colSpan:e.length,className:`text-center py-10 text-text-muted`,children:`Loading...`})}):t.length===0?(0,b.jsx)(`tr`,{children:(0,b.jsx)(`td`,{colSpan:e.length,className:`text-center py-10 text-text-muted`,children:i})}):t.map((t,n)=>(0,b.jsx)(`tr`,{onClick:()=>_?.(t,n),className:h({hoverable:!!_&&c,striped:l}),children:e.map(e=>{let r=t[e.key];return(0,b.jsx)(`td`,{className:g({size:s,align:e.align}),children:e.render?e.render(r,t,n):String(r??``)},String(e.key))})},S(t,n)))})]})})}var y,b,x,S=e((()=>{y=t(n(),1),i(),_(),b=r(),x=(0,y.forwardRef)(v),x.__docgenInfo={description:``,methods:[],displayName:`Table`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`TableColumn`,elements:[{name:`T`}],raw:`TableColumn<T>`}],raw:`TableColumn<T>[]`},description:``},data:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},rowKey:{required:!1,tsType:{name:`union`,raw:`keyof T | ((record: T) => string)`,elements:[{name:`T`},{name:`unknown`}]},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},emptyText:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`"No data available"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`| "default"\r
| "bordered"\r
| "minimal"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"bordered"`},{name:`literal`,value:`"minimal"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "sm"\r
| "md"\r
| "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},hoverable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},striped:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},stickyHeader:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},responsive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},onRowClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(\r
    record: T,\r
    index: number,\r
) => void`,signature:{arguments:[{type:{name:`T`},name:`record`},{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]}})),C=e((()=>{})),w=e((()=>{u(),C()})),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{S(),w(),l(),T=r(),E=[{id:1,name:`John Doe`,email:`john@example.com`,role:`Admin`,status:`Active`},{id:2,name:`Jane Smith`,email:`jane@example.com`,role:`Teacher`,status:`Inactive`},{id:3,name:`Alex Johnson`,email:`alex@example.com`,role:`Student`,status:`Active`}],D=[{key:`id`,title:`ID`,width:80,align:`center`},{key:`name`,title:`Name`},{key:`email`,title:`Email`},{key:`role`,title:`Role`,align:`center`},{key:`status`,title:`Status`,align:`center`,render:e=>(0,T.jsx)(d,{label:String(e),variant:e===`Active`?`success`:`error`})},{key:`action`,title:`Action`,align:`center`,render:()=>(0,T.jsx)(c,{size:`sm`,label:`View`})}],O=e=>(0,T.jsx)(x,{...e}),k={title:`Components/Table`,component:O,tags:[`autodocs`],args:{columns:D,data:E,rowKey:`id`,variant:`default`,size:`md`,hoverable:!0,striped:!1,responsive:!0,stickyHeader:!1,loading:!1,emptyText:`No data available`},argTypes:{variant:{control:`select`,options:[`default`,`bordered`,`minimal`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},hoverable:{control:`boolean`},striped:{control:`boolean`},responsive:{control:`boolean`},stickyHeader:{control:`boolean`},loading:{control:`boolean`},onRowClick:{action:`rowClicked`}}},A={},j={},M={args:{variant:`bordered`}},N={args:{variant:`minimal`}},P={args:{size:`sm`}},F={args:{size:`md`}},I={args:{size:`lg`}},L={args:{striped:!0}},R={args:{loading:!0}},z={args:{data:[]}},B={render:e=>(0,T.jsx)(`div`,{className:`h-72 overflow-y-auto`,children:(0,T.jsx)(O,{...e,stickyHeader:!0})})},V={args:{onRowClick:e=>{alert(`Clicked: ${e.name}`)}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bordered"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "minimal"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div className="h-72 overflow-y-auto">\r
      <UserTable {...args} stickyHeader />\r
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    onRowClick: row => {
      alert(\`Clicked: \${row.name}\`);
    }
  }
}`,...V.parameters?.docs?.source}}},H=[`Playground`,`Default`,`Bordered`,`Minimal`,`Small`,`Medium`,`Large`,`Striped`,`Loading`,`Empty`,`StickyHeader`,`ClickableRows`]}))();export{M as Bordered,V as ClickableRows,j as Default,z as Empty,I as Large,R as Loading,F as Medium,N as Minimal,A as Playground,P as Small,B as StickyHeader,L as Striped,H as __namedExportsOrder,k as default};