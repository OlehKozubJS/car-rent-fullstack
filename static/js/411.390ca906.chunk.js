"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[411,157,134,91,363,766],{411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var s=n(791),o=n(157),a=n(329);const r=()=>{const[e,t]=(0,s.useState)("Simplest custom range"),[n,r]=(0,s.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.PageChooser,{componentNames:["Simplest custom range","Logic gates"],currentComponentName:e,onChange:e=>{t(e)}}),"Simplest custom range"===e&&(0,a.jsx)(o.SimplestCustomRange,{onChange:e=>{r(e)},value:n}),"Logic gates"===e&&(0,a.jsx)(o.LogicGates,{}),(0,a.jsx)("p",{children:n})]})}},134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>a});var s=n(791),o=n(329);const a=()=>{const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),[r,l]=(0,s.useState)(!1),[c,i]=(0,s.useState)(!1),u=(e,t)=>!(e||t);return(0,s.useEffect)((()=>{const t=u(e,n),s=u(e,t),o=u(t,n),a=u(s,o),r=u(a,a);i(r)}),[e,n,r]),(0,o.jsxs)("div",{children:["This is test page",(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:n&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",n?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:r&&(()=>{l(!1)})||(()=>{l(!0)}),children:["C: ",r?"true":"false"]}),(0,o.jsx)("p",{children:c?"true":"false"})]})}},91:(e,t,n)=>{n.r(t),n.d(t,{PageChooser:()=>o});var s=n(329);const o=e=>{let{componentNames:t,currentComponentName:n,onChange:o}=e;const a=e=>{let{target:t}=e;o(t.value)};return(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{children:t.map((e=>(0,s.jsx)("li",{children:(0,s.jsxs)("label",{htmlFor:e,children:[(0,s.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:a,checked:n===e}),(0,s.jsx)("span",{children:e})]})},e)))})})}},363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>l});var s=n(791),o=n(317),a=n(766),r=n(329);const l=e=>{let{value:t,onChange:n}=e;const[l,c]=(0,s.useState)(!1),[i,u]=(0,s.useState)(0);return(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:s}=e;if(l){const e=t+s-i;e>=0&&e<=450&&n(e)}})),[l]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[l]),(0,r.jsx)(a.RangeField,{children:(0,r.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;c(!0),u(t)},left:t})})}},766:(e,t,n)=>{n.r(t),n.d(t,{RangeDial:()=>c,RangeField:()=>l});var s,o,a=n(168),r=n(716);const l=r.Z.div(s||(s=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),c=r.Z.div(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t}))},157:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>s.LogicGates,PageChooser:()=>a.PageChooser,SimplestCustomRange:()=>o.SimplestCustomRange});var s=n(134),o=n(363),a=n(91)}}]);
//# sourceMappingURL=411.390ca906.chunk.js.map