"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[504,471,134,91,546,363,766],{471:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r});var s=n(791),o=n(317),a=n(766),l=n(329);const r=e=>{let{valueY:t,valueX:n,onChange:r}=e;const[u,c]=(0,s.useState)(!1),[i,p]=(0,s.useState)(t),[d,g]=(0,s.useState)(n),h=e=>{let{clientY:t,clientX:n}=e;c(!0),p(t),g(n)};return(0,s.useEffect)((0,o.nM)("mousedown",h),[u]),(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:s,clientX:o}=e;u&&r({valueY:t+s-i,valueX:n+o-d})})),[u]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[u]),(0,l.jsx)(a.DraggableComponentStyle,{onMouseDown:h,top:t,left:n})}},134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>a});var s=n(791),o=n(329);const a=()=>{const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),[l,r]=(0,s.useState)(!1),[u,c]=(0,s.useState)(0),[i,p]=(0,s.useState)(0),[d,g]=(0,s.useState)(!1),h=(e,t)=>!(e||t);return(0,s.useEffect)((()=>{const t=h(e,n),s=h(e,t),o=h(t,n),a=h(s,o),l=h(a,a);g(l)}),[e,n,l]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:n&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",n?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:l&&(()=>{r(!1)})||(()=>{r(!0)}),children:["C: ",l?"true":"false"]}),(0,o.jsx)("p",{children:d?"true":"false"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=u+1;c(2===e?-1:e)},children:["D: ",u]}),(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=i+1;p(2===e?-1:e)},children:["E: ",i]}),(0,o.jsx)("p",{children:(x=u,m=i,x<=m?x:m)}),(0,o.jsx)("p",{children:((e,t)=>e>=t?e:t)(u,i)})]})]});var x,m}},91:(e,t,n)=>{n.r(t),n.d(t,{PageChooser:()=>o});var s=n(329);const o=e=>{let{componentNames:t,currentComponentName:n,onChange:o}=e;const a=e=>{let{target:t}=e;o(t.value)};return(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{children:t.map((e=>(0,s.jsx)("li",{children:(0,s.jsxs)("label",{htmlFor:e,children:[(0,s.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:a,checked:n===e}),(0,s.jsx)("span",{children:e})]})},e)))})})}},546:(e,t,n)=>{n.r(t),n.d(t,{RecursionFunctionTest:()=>o});var s=n(329);const o=()=>{const e=t=>t<=1?t:t+e(t-1);return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:e(7)})})}},363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>r});var s=n(791),o=n(317),a=n(766),l=n(329);const r=e=>{let{value:t,onChange:n}=e;const[r,u]=(0,s.useState)(!1),[c,i]=(0,s.useState)(0);return(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:s}=e;if(r){const e=t+s-c;e>=0&&e<=450&&n(e)}})),[r]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{u(!1)})),[r]),(0,l.jsx)(a.RangeField,{children:(0,l.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;u(!0),i(t)},left:t})})}},766:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>i,RangeDial:()=>c,RangeField:()=>u});var s,o,a,l=n(168),r=n(716);const u=r.Z.div(s||(s=(0,l.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),c=r.Z.div(o||(o=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t})),i=r.Z.div(a||(a=(0,l.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))},504:(e,t,n)=>{n.r(t),n.d(t,{TestPage:()=>p});var s=n(791),o=n(689),a=n(134),l=n(363),r=n(91),u=n(471),c=n(546),i=n(329);const p=()=>{const[e,t]=(0,s.useState)("Logic gates"),[n,p]=(0,s.useState)(0),[d,g]=(0,s.useState)(200),[h,x]=(0,s.useState)(0),[m,j]=(0,s.useState)("test");return(0,i.jsxs)("section",{children:[(0,i.jsx)(r.PageChooser,{componentNames:["Logic gates","Simplest custom range","Draggable component"],currentComponentName:e,onChange:e=>{t(e)}}),"Logic gates"===e&&(0,i.jsx)(a.LogicGates,{}),"Simplest custom range"===e&&(0,i.jsx)(l.SimplestCustomRange,{onChange:e=>{p(e)},value:n}),"Draggable component"===e&&(0,i.jsx)(u.DraggableComponent,{valueY:d,valueX:h,onChange:e=>{let{valueY:t,valueX:n}=e;t>=200&&g(t),n>=0&&x(n)}}),(0,i.jsx)("p",{children:n}),(0,i.jsxs)("p",{children:["valueY=",d]}),(0,i.jsxs)("p",{children:["valueX=",h]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),j(e.currentTarget.elements.pageNameInput.value),e.currentTarget.reset()},children:[(0,i.jsx)("input",{name:"pageNameInput",type:"text",placeholder:"Enter page name"}),(0,i.jsx)("button",{type:"submit",children:"Enter"})]}),(0,i.jsx)(o.Fg,{to:"/".concat(m)})]}),(0,i.jsx)(c.RecursionFunctionTest,{})]})}}}]);
//# sourceMappingURL=504.8981b979.chunk.js.map