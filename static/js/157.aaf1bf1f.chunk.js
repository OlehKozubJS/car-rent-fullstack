"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[157,471,134,91,363,766],{471:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r});var s=n(791),o=n(317),a=n(766),l=n(329);const r=e=>{let{value:t,onChange:n}=e;const[r,u]=(0,s.useState)(!1),[c,i]=(0,s.useState)(0),[d,g]=(0,s.useState)(0),h=e=>{let{clientX:t}=e;u(!0),g(t)};return(0,s.useEffect)((0,o.nM)("mousedown",h),[r]),(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:s,clientX:o}=e;n(t+s-c),n(t+o-d)})),[r]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{u(!1)})),[r]),(0,l.jsx)(a.RangeField,{children:(0,l.jsx)(a.RangeDial,{onMouseDown:h,left:t})})}},134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>a});var s=n(791),o=n(329);const a=()=>{const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),[l,r]=(0,s.useState)(!1),[u,c]=(0,s.useState)(!1),i=(e,t)=>!(e||t);return(0,s.useEffect)((()=>{const t=i(e,n),s=i(e,t),o=i(t,n),a=i(s,o),l=i(a,a);c(l)}),[e,n,l]),(0,o.jsxs)("div",{children:["This is test page",(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:n&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",n?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:l&&(()=>{r(!1)})||(()=>{r(!0)}),children:["C: ",l?"true":"false"]}),(0,o.jsx)("p",{children:u?"true":"false"})]})}},91:(e,t,n)=>{n.r(t),n.d(t,{PageChooser:()=>o});var s=n(329);const o=e=>{let{componentNames:t,currentComponentName:n,onChange:o}=e;const a=e=>{let{target:t}=e;o(t.value)};return(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{children:t.map((e=>(0,s.jsx)("li",{children:(0,s.jsxs)("label",{htmlFor:e,children:[(0,s.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:a,checked:n===e}),(0,s.jsx)("span",{children:e})]})},e)))})})}},363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>r});var s=n(791),o=n(317),a=n(766),l=n(329);const r=e=>{let{value:t,onChange:n}=e;const[r,u]=(0,s.useState)(!1),[c,i]=(0,s.useState)(0);return(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:s}=e;if(r){const e=t+s-c;e>=0&&e<=450&&n(e)}})),[r]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{u(!1)})),[r]),(0,l.jsx)(a.RangeField,{children:(0,l.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;u(!0),i(t)},left:t})})}},766:(e,t,n)=>{n.r(t),n.d(t,{RangeDial:()=>u,RangeField:()=>r});var s,o,a=n(168),l=n(716);const r=l.Z.div(s||(s=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),u=l.Z.div(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t}))},157:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>l.DraggableComponent,LogicGates:()=>s.LogicGates,PageChooser:()=>a.PageChooser,SimplestCustomRange:()=>o.SimplestCustomRange});var s=n(134),o=n(363),a=n(91),l=n(471)}}]);
//# sourceMappingURL=157.aaf1bf1f.chunk.js.map