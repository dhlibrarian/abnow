(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{1211:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(6317)}])},9539:function(t,e,n){"use strict";var r=n(5893),o=n(6868),i=n(7294),a=n(934),l=n(2049),s=n(7606),c=n(2404),d=n(3382);let u=t=>{let{content:e,navigation:n}=t,[u,g]=(0,i.useState)();return(0,i.useEffect)(()=>{let t=document.createElement("html");t.innerHTML=(0,c.uS)(e);let n=Object.values(t.getElementsByTagName("h2")).map(t=>{let{textContent:e}=t;return{path:"#".concat((0,d.getSlug)(e)),text:e||""}});g(n)},[e]),(0,r.jsx)(l.Z,{children:(0,r.jsx)(a.Z,{containerType:"wide",children:(0,r.jsxs)(o.vs,{aside:!0,children:[n&&(0,r.jsx)(o.CH,{children:(0,r.jsx)(o.AH,{children:(0,r.jsx)(s.Z,{items:{primary:[{path:"/works",text:"Works"},{path:"/metadata",text:"Metadata"},{path:"/map",text:"Map"},{path:"/about",text:"About"}],about:[{path:"/about",text:"About"},{path:"/about/documentation",text:"Documentation"},{path:"/about/example",text:"Markdown Example"},{path:"/about/history",text:"Project History"}]}[n],subNavigation:u,orientation:"vertical"})})}),(0,r.jsx)(o.S4,{children:e})]})})})};e.Z=u},6868:function(t,e,n){"use strict";n.d(e,{AH:function(){return i},CH:function(){return a},S4:function(){return l},vs:function(){return s}});var r=n(9332),o=n(2121);let i=(0,r.zo)("div",{position:"fixed",width:"275px",paddingTop:"calc($gr4 + $gr3)",marginTop:"-$gr4",maxHeight:"calc(100% - $gr5 - ".concat(o.J9,"px)"),overflow:"scroll","@xs":{position:"relative",width:"100%",maxHeight:"auto",paddingTop:"0",marginTop:"0"}}),a=(0,r.zo)("aside",{width:"275px","@xs":{position:"relative",width:"100%",marginTop:"0",paddingBottom:"$gr2",borderBottom:"1px solid $slate6"}}),l=(0,r.zo)("div",{flexShrink:1,width:"calc(100% - 275px)","@xs":{width:"100%"}}),s=(0,r.zo)("div",{position:"relative",width:"100%",padding:"$gr4 0",display:"flex",variants:{aside:{true:{"@xs":{flexDirection:"column"}}}},"@md":{padding:"$gr2 0"}})},1674:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5893);n(7294);var o=n(9332);let i=(0,o.zo)("h2",{variants:{isHidden:{true:{position:"absolute",visibility:"hidden"}}},"&[data-level=h1]":{margin:"$gr4 0",color:"$slate12",fontSize:"$gr8",fontWeight:"800",fontFamily:"$bookTight","@sm":{fontSize:"$gr7"}},"&[data-level=h2]":{margin:"$gr5 0 $gr4",color:"$slate11",fontSize:"$gr7",fontWeight:"200",fontFamily:"$bookTight","@sm":{fontSize:"$gr5"}},"&[data-level=h3]":{margin:"$gr5 0 $gr3",color:"$slate12",fontSize:"$gr5",fontWeight:"800",fontFamily:"$bookTight","@sm":{fontSize:"$gr4"}},"&[data-level=h4]":{},"&[data-level=h5]":{},"&[data-level=h6]":{}}),a=t=>{let{as:e="h2",css:n={},id:o,isHidden:a=!1,children:l}=t;return(0,r.jsx)(i,{as:e,isHidden:a,"data-level":e,css:n,id:o,children:(0,r.jsx)(r.Fragment,{children:l})})};var l=a},2094:function(t,e,n){"use strict";n.d(e,{a:function(){return j}});var r=n(5893);n(7294);var o=n(640),i=n.n(o),a=n(7795),l=n(2121);let s={plain:{color:"var(--colors-indigo12)",fontSize:.9*l.hO,fontFamily:"Menlo, monospace"},styles:[{types:["boolean","string"],style:{color:"var(--colors-indigo10)"}},{types:["operator"],style:{color:"var(--colors-indigo11)"}},{types:["punctuation"],style:{color:"var(--colors-indigo8)"}}]};var c=n(9332),d=n(2765);let u=(0,c.zo)("div",{position:"relative",button:{position:"absolute",marginTop:"-$gr2",right:"$gr3"}}),g=(0,c.zo)("pre",{backgroundColor:"$indigo3",padding:"$gr3",borderRadius:"5px",lineHeight:"1.382em",overflowX:"scroll",overflowY:"visible",boxShadow:"inset 1px 1px 2px  ".concat(d.Eh.indigoA3),zIndex:"0"}),h=(0,c.zo)("code",{backgroundColor:"$indigo3",padding:"3px $gr1",borderRadius:"5px",fontSize:"$gr3",color:"$indigo11",boxShadow:"1px 1px 1px  ".concat(d.Eh.indigoA6)});var p=n(2990),x=n(2469);let f=t=>{let{children:e,language:n}=t;return(0,r.jsx)(a.ZP,{...a.lG,theme:s,code:e,language:n,children:t=>{let{style:n,tokens:o,getLineProps:a,getTokenProps:l}=t;return(0,r.jsxs)(u,{children:[(0,r.jsxs)(p.O,{buttonSize:"tiny",buttonType:"primary","aria-label":"Copy Code",onClick:()=>{i()(e)},css:{display:"flex",alignItems:"center"},children:["Copy\xa0",(0,r.jsx)(x.TIy,{})]}),(0,r.jsx)(g,{style:n,children:o.map((t,e)=>(0,r.jsx)("div",{...a({line:t,key:e}),children:t.map((t,n)=>(0,r.jsx)("span",{...l({token:t,key:n})},e))},e))})]})}})};var v=n(1674),m=n(3382);let b=t=>{let{children:e}=t;return(0,r.jsx)($,{children:e})},$=(0,c.zo)("blockquote",{fontWeight:"300",color:"$slate11",padding:"$gr1 0"});function j(t){return{h1:t=>{let{children:e}=t;return(0,r.jsx)(v.Z,{as:"h1",children:e})},h2:t=>{let{children:e}=t;return(0,r.jsx)(v.Z,{as:"h2",id:(0,m.getSlug)(e),children:e})},h3:t=>{let{children:e}=t;return(0,r.jsx)(v.Z,{as:"h3",children:e})},code:t=>{let{children:e}=t;return(0,r.jsx)(h,{children:e})},blockquote:t=>{let{children:e}=t;return(0,r.jsx)(b,{children:e})},pre:t=>{var e;let{children:n}=t,o=n.props.children,i=null===(e=n.props.className)||void 0===e?void 0:e.replace("language-","");return(0,r.jsx)(f,{language:i,children:o.trim()})},...t}}},3382:function(t,e,n){"use strict";let r=n(1304),o={lower:!0,strict:!0,trim:!0};function i(t){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.substring(0,e)}(r(t,o),100)}t.exports={getSlug:i,getUniqueSlug:function(t,e){var n;let r=i(t),o=(n=e[r])?n+1:1;return{slug:o>1?"".concat(r,"-").concat(o):r,allSlugs:{...e,[r]:o}}}}},6317:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=n(2094),i=n(9539);let a=t=>{let{children:e}=t;return(0,r.jsx)(i.Z,{content:e})};function l(t){let e=Object.assign({h1:"h1",p:"p"},(0,o.a)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Page Not Found"}),"\n",(0,r.jsx)(e.p,{children:"404 Error"})]})}e.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,Object.assign({},t,{children:(0,r.jsx)(l,t)}))}}},function(t){t.O(0,[774,27,409,448,118,870,888,179],function(){return t(t.s=1211)}),_N_E=t.O()}]);