"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[411,157,471,134,91,363,766],{411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(791),o=n(157),a=n(329);const l=()=>{const[e,t]=(0,s.useState)("Logic gates"),[n,l]=(0,s.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.PageChooser,{componentNames:["Logic gates","Simplest custom range"],currentComponentName:e,onChange:e=>{t(e)}}),"Logic gates"===e&&(0,a.jsx)(o.LogicGates,{}),"Simplest custom range"===e&&(0,a.jsx)(o.SimplestCustomRange,{onChange:e=>{l(e)},value:n}),(0,a.jsx)("p",{children:n})]})}},471:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r});var s=n(791),o=n(317),a=n(766),l=n(329);const r=e=>{let{value:t,onChange:n}=e;const[r,c]=(0,s.useState)(!1),[u,i]=(0,s.useState)(0),[g,d]=(0,s.useState)(0),h=e=>{let{clientY:t,clientX:n}=e;c(!0),i(t),d(n)};return(0,s.useEffect)((0,o.nM)("mousedown",h),[r]),(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:s,clientX:o}=e;r&&n({valueY:t+s-u,valueX:t+o-g})})),[r]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[r]),(0,l.jsx)(a.RangeField,{children:(0,l.jsx)(a.RangeDial,{onMouseDown:h,left:t})})}},134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>a});var s=n(791),o=n(329);const a=()=>{const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),[l,r]=(0,s.useState)(!1),[c,u]=(0,s.useState)(!1),i=(e,t)=>!(e||t);return(0,s.useEffect)((()=>{const t=i(e,n),s=i(e,t),o=i(t,n),a=i(s,o),l=i(a,a);u(l)}),[e,n,l]),(0,o.jsxs)("div",{children:["This is test page",(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:n&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",n?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:l&&(()=>{r(!1)})||(()=>{r(!0)}),children:["C: ",l?"true":"false"]}),(0,o.jsx)("p",{children:c?"true":"false"})]})}},91:(e,t,n)=>{n.r(t),n.d(t,{PageChooser:()=>o});var s=n(329);const o=e=>{let{componentNames:t,currentComponentName:n,onChange:o}=e;const a=e=>{let{target:t}=e;o(t.value)};return(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{children:t.map((e=>(0,s.jsx)("li",{children:(0,s.jsxs)("label",{htmlFor:e,children:[(0,s.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:a,checked:n===e}),(0,s.jsx)("span",{children:e})]})},e)))})})}},363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>r});var s=n(791),o=n(317),a=n(766),l=n(329);const r=e=>{let{value:t,onChange:n}=e;const[r,c]=(0,s.useState)(!1),[u,i]=(0,s.useState)(0);return(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:s}=e;if(r){const e=t+s-u;e>=0&&e<=450&&n(e)}})),[r]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[r]),(0,l.jsx)(a.RangeField,{children:(0,l.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;c(!0),i(t)},left:t})})}},766:(e,t,n)=>{n.r(t),n.d(t,{RangeDial:()=>c,RangeField:()=>r});var s,o,a=n(168),l=n(716);const r=l.Z.div(s||(s=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),c=l.Z.div(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t}))},157:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>l.DraggableComponent,LogicGates:()=>s.LogicGates,PageChooser:()=>a.PageChooser,SimplestCustomRange:()=>o.SimplestCustomRange});var s=n(134),o=n(363),a=n(91),l=n(471)}}]);
//# sourceMappingURL=411.0eed6c57.chunk.js.map