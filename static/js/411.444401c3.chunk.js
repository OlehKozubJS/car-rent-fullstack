"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[411,157,134,363,766],{411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var s=n(791),a=n(157),l=n(329);const o=()=>{const[e,t]=(0,s.useState)(""),[n,o]=(0,s.useState)(0),i=e=>{let{target:n}=e;t(n.value)};return(0,l.jsxs)("section",{children:[(0,l.jsx)("ul",{children:["Simplest custom range","Logic gates"].map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)("label",{htmlFor:e,children:[(0,l.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:i}),(0,l.jsx)("span",{children:e})]})},e)))}),"Simplest custom range"===e&&(0,l.jsx)(a.SimplestCustomRange,{onChange:e=>{o(e)},value:n}),"Logic gates"===e&&(0,l.jsx)(a.LogicGates,{}),(0,l.jsx)("p",{children:n})]})}},134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>l});var s=n(791),a=n(329);const l=()=>{const[e,t]=(0,s.useState)(!1),[n,l]=(0,s.useState)(!1),[o,i]=(0,s.useState)(!1),[r,u]=(0,s.useState)(!1),c=(e,t)=>!(e||t);return(0,s.useEffect)((()=>{const t=c(e,n),s=c(e,t),a=c(t,n),l=c(s,a),o=c(l,l);u(o)}),[e,n,o]),(0,a.jsxs)("div",{children:["This is test page",(0,a.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,a.jsxs)("button",{type:"button",onClick:n&&(()=>{l(!1)})||(()=>{l(!0)}),children:["B: ",n?"true":"false"]}),(0,a.jsxs)("button",{type:"button",onClick:o&&(()=>{i(!1)})||(()=>{i(!0)}),children:["C: ",o?"true":"false"]}),(0,a.jsx)("p",{children:r?"true":"false"})]})}},363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>i});var s=n(791),a=n(317),l=n(766),o=n(329);const i=e=>{let{value:t,onChange:n}=e;const[i,r]=(0,s.useState)(!1),[u,c]=(0,s.useState)(0);return(0,s.useEffect)((0,a.nM)("mousemove",(e=>{let{clientX:s}=e;if(i){const e=t+s-u;e>=0&&e<=450&&n(e)}})),[i]),(0,s.useEffect)((0,a.nM)("mouseup",(()=>{r(!1)})),[i]),(0,o.jsx)(l.RangeField,{children:(0,o.jsx)(l.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;r(!0),c(t)},left:t})})}},766:(e,t,n)=>{n.r(t),n.d(t,{RangeDial:()=>r,RangeField:()=>i});var s,a,l=n(168),o=n(716);const i=o.Z.div(s||(s=(0,l.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),r=o.Z.div(a||(a=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t}))},157:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>s.LogicGates,SimplestCustomRange:()=>a.SimplestCustomRange});var s=n(134),a=n(363)}}]);
//# sourceMappingURL=411.444401c3.chunk.js.map