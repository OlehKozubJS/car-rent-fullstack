"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[411,157,471,134,91,363,766],{411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(791),o=n(157),a=n(329);const l=()=>{const[e,t]=(0,s.useState)("Logic gates"),[n,l]=(0,s.useState)(0),[r,u]=(0,s.useState)(200),[c,i]=(0,s.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.PageChooser,{componentNames:["Logic gates","Simplest custom range","Draggable component"],currentComponentName:e,onChange:e=>{t(e)}}),"Logic gates"===e&&(0,a.jsx)(o.LogicGates,{}),"Simplest custom range"===e&&(0,a.jsx)(o.SimplestCustomRange,{onChange:e=>{l(e)},value:n}),"Draggable component"===e&&(0,a.jsx)(o.DraggableComponent,{valueY:r,valueX:c,onChange:e=>{let{valueY:t,valueX:n}=e;t>=200&&u(t),n>=0&&i(n)}}),(0,a.jsx)("p",{children:n}),(0,a.jsxs)("p",{children:["valueY=",r]}),(0,a.jsxs)("p",{children:["valueX=",c]})]})}},471:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r});var s=n(791),o=n(317),a=n(766),l=n(329);const r=e=>{let{valueY:t,valueX:n,onChange:r}=e;const[u,c]=(0,s.useState)(!1),[i,g]=(0,s.useState)(t),[p,h]=(0,s.useState)(n),d=e=>{let{clientY:t,clientX:n}=e;c(!0),g(t),h(n)};return(0,s.useEffect)((0,o.nM)("mousedown",d),[u]),(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:s,clientX:o}=e;u&&r({valueY:t+s-i,valueX:n+o-p})})),[u]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[u]),(0,l.jsx)(a.DraggableComponentStyle,{onMouseDown:d,top:t,left:n})}},134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>a});var s=n(791),o=n(329);const a=()=>{const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),[l,r]=(0,s.useState)(!1),[u,c]=(0,s.useState)(0),[i,g]=(0,s.useState)(0),[p,h]=(0,s.useState)(!1),d=(e,t)=>!(e||t);return(0,s.useEffect)((()=>{const t=d(e,n),s=d(e,t),o=d(t,n),a=d(s,o),l=d(a,a);h(l)}),[e,n,l]),(0,o.jsxs)("div",{children:["This is test page",(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:n&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",n?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:l&&(()=>{r(!1)})||(()=>{r(!0)}),children:["C: ",l?"true":"false"]}),(0,o.jsx)("p",{children:p?"true":"false"})]}),(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=u+1;c(2===e?-1:e)},children:["D: ",u]}),(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=i+1;g(2===e?-1:e)},children:["E: ",i]}),(0,o.jsx)("p",{children:(m=u,x=i,m<=x?m:x)}),(0,o.jsx)("p",{children:((e,t)=>e>=t?e:t)(u,i)})]});var m,x}},91:(e,t,n)=>{n.r(t),n.d(t,{PageChooser:()=>o});var s=n(329);const o=e=>{let{componentNames:t,currentComponentName:n,onChange:o}=e;const a=e=>{let{target:t}=e;o(t.value)};return(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{children:t.map((e=>(0,s.jsx)("li",{children:(0,s.jsxs)("label",{htmlFor:e,children:[(0,s.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:a,checked:n===e}),(0,s.jsx)("span",{children:e})]})},e)))})})}},363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>r});var s=n(791),o=n(317),a=n(766),l=n(329);const r=e=>{let{value:t,onChange:n}=e;const[r,u]=(0,s.useState)(!1),[c,i]=(0,s.useState)(0);return(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:s}=e;if(r){const e=t+s-c;e>=0&&e<=450&&n(e)}})),[r]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{u(!1)})),[r]),(0,l.jsx)(a.RangeField,{children:(0,l.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;u(!0),i(t)},left:t})})}},766:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>i,RangeDial:()=>c,RangeField:()=>u});var s,o,a,l=n(168),r=n(716);const u=r.Z.div(s||(s=(0,l.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),c=r.Z.div(o||(o=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t})),i=r.Z.div(a||(a=(0,l.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))},157:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>l.DraggableComponent,LogicGates:()=>s.LogicGates,PageChooser:()=>a.PageChooser,SimplestCustomRange:()=>o.SimplestCustomRange});var s=n(134),o=n(363),a=n(91),l=n(471)}}]);
//# sourceMappingURL=411.949f590e.chunk.js.map