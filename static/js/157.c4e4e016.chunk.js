"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[157,471,134,91,363,766],{471:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r});var o=n(791),s=n(317),a=n(766),l=n(329);const r=e=>{let{valueY:t,valueX:n,onChange:r}=e;const[u,c]=(0,o.useState)(!1),[i,p]=(0,o.useState)(t),[g,d]=(0,o.useState)(n),h=e=>{let{clientY:t,clientX:n}=e;c(!0),p(t),d(n)};return(0,o.useEffect)((0,s.nM)("mousedown",h),[u]),(0,o.useEffect)((0,s.nM)("mousemove",(e=>{let{clientY:o,clientX:s}=e;u&&r({valueY:t+o-i,valueX:n+s-g})})),[u]),(0,o.useEffect)((0,s.nM)("mouseup",(()=>{c(!1)})),[u]),(0,l.jsx)(a.DraggableComponentStyle,{onMouseDown:h,top:t,left:n})}},134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>a});var o=n(791),s=n(329);const a=()=>{const[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)(!1),[l,r]=(0,o.useState)(!1),[u,c]=(0,o.useState)(0),[i,p]=(0,o.useState)(0),[g,d]=(0,o.useState)(!1),h=(e,t)=>!(e||t);return(0,o.useEffect)((()=>{const t=h(e,n),o=h(e,t),s=h(t,n),a=h(o,s),l=h(a,a);d(l)}),[e,n,l]),(0,s.jsxs)("div",{children:["This is test page",(0,s.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,s.jsxs)("button",{type:"button",onClick:n&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",n?"true":"false"]}),(0,s.jsxs)("button",{type:"button",onClick:l&&(()=>{r(!1)})||(()=>{r(!0)}),children:["C: ",l?"true":"false"]}),(0,s.jsx)("p",{children:g?"true":"false"})]})}},91:(e,t,n)=>{n.r(t),n.d(t,{PageChooser:()=>s});var o=n(329);const s=e=>{let{componentNames:t,currentComponentName:n,onChange:s}=e;const a=e=>{let{target:t}=e;s(t.value)};return(0,o.jsx)("nav",{children:(0,o.jsx)("ul",{children:t.map((e=>(0,o.jsx)("li",{children:(0,o.jsxs)("label",{htmlFor:e,children:[(0,o.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:a,checked:n===e}),(0,o.jsx)("span",{children:e})]})},e)))})})}},363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>r});var o=n(791),s=n(317),a=n(766),l=n(329);const r=e=>{let{value:t,onChange:n}=e;const[r,u]=(0,o.useState)(!1),[c,i]=(0,o.useState)(0);return(0,o.useEffect)((0,s.nM)("mousemove",(e=>{let{clientX:o}=e;if(r){const e=t+o-c;e>=0&&e<=450&&n(e)}})),[r]),(0,o.useEffect)((0,s.nM)("mouseup",(()=>{u(!1)})),[r]),(0,l.jsx)(a.RangeField,{children:(0,l.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;u(!0),i(t)},left:t})})}},766:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>i,RangeDial:()=>c,RangeField:()=>u});var o,s,a,l=n(168),r=n(716);const u=r.Z.div(o||(o=(0,l.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),c=r.Z.div(s||(s=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t})),i=r.Z.div(a||(a=(0,l.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))},157:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>l.DraggableComponent,LogicGates:()=>o.LogicGates,PageChooser:()=>a.PageChooser,SimplestCustomRange:()=>s.SimplestCustomRange});var o=n(134),s=n(363),a=n(91),l=n(471)}}]);
//# sourceMappingURL=157.c4e4e016.chunk.js.map