import{_ as c,i as j,m as p,a as k,b as R,j as o}from"./colors-DUWFvP72.js";import{j as $,o as G,p as T,d as y,g as S,s as F,u as M,F as N,C as P,T as f,D}from"./App-DVeftLKR.js";import{g as L,m as _}from"./index-DGwp89xd.js";const w=["className","component","disableGutters","fixed","maxWidth","classes"],z=j(),B=$("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,s[`maxWidth${p(String(i.maxWidth))}`],i.fixed&&s.fixed,i.disableGutters&&s.disableGutters]}}),U=t=>T({props:t,name:"MuiContainer",defaultTheme:z}),E=(t,s)=>{const i=n=>S(s,n),{classes:u,fixed:x,disableGutters:m,maxWidth:e}=t,a={root:["root",e&&`maxWidth${p(String(e))}`,x&&"fixed",m&&"disableGutters"]};return y(a,i,u)};function H(t={}){const{createStyledComponent:s=B,useThemeProps:i=U,componentName:u="MuiContainer"}=t,x=s(({theme:e,ownerState:a})=>c({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:a})=>a.fixed&&Object.keys(e.breakpoints.values).reduce((n,r)=>{const l=r,d=e.breakpoints.values[l];return d!==0&&(n[e.breakpoints.up(l)]={maxWidth:`${d}${e.breakpoints.unit}`}),n},{}),({theme:e,ownerState:a})=>c({},a.maxWidth==="xs"&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[e.breakpoints.up(a.maxWidth)]:{maxWidth:`${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`}}));return k.forwardRef(function(a,n){const r=i(a),{className:l,component:d="div",disableGutters:g=!1,fixed:b=!1,maxWidth:C="lg"}=r,W=R(r,w),h=c({},r,{component:d,disableGutters:g,fixed:b,maxWidth:C}),v=E(h,u);return o.jsx(x,c({as:d,ownerState:h,className:G(v.root,l),ref:n},W))})}const O=H({createStyledComponent:F("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,s[`maxWidth${p(String(i.maxWidth))}`],i.fixed&&s.fixed,i.disableGutters&&s.disableGutters]}}),useThemeProps:t=>M({props:t,name:"MuiContainer"})}),q=O;function K(){return o.jsx(q,{sx:{height:"100%"},children:o.jsxs(N,{flexDirection:"column",children:[o.jsx("iframe",{src:L,width:"100%",height:"50%",style:{maxHeight:"60%",maxWidth:"100%"},frameBorder:"0",allowFullScreen:!0}),o.jsxs(P,{flexDirection:"column",children:[o.jsx(f,{sx:{mt:2},variant:"h4",color:"error",children:"404 Not Found"}),o.jsx(D,{variant:"middle"}),o.jsx(f,{variant:"h4",sx:{color:t=>t.palette.info.main},children:_[404]})]})]})})}export{K as default};
