"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[504,471,134,91,363,766],{471:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r});var s=n(791),o=n(317),l=n(766),a=n(329);const r=e=>{let{valueY:t,valueX:n,onChange:r}=e;const[u,c]=(0,s.useState)(!1),[i,p]=(0,s.useState)(t),[d,g]=(0,s.useState)(n),h=e=>{let{clientY:t,clientX:n}=e;c(!0),p(t),g(n)};return(0,s.useEffect)((0,o.nM)("mousedown",h),[u]),(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:s,clientX:o}=e;u&&r({valueY:t+s-i,valueX:n+o-d})})),[u]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[u]),(0,a.jsx)(l.DraggableComponentStyle,{onMouseDown:h,top:t,left:n})}},134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>l});var s=n(791),o=n(329);const l=()=>{const[e,t]=(0,s.useState)(!1),[n,l]=(0,s.useState)(!1),[a,r]=(0,s.useState)(!1),[u,c]=(0,s.useState)(0),[i,p]=(0,s.useState)(0),[d,g]=(0,s.useState)(!1),h=(e,t)=>!(e||t);return(0,s.useEffect)((()=>{const t=h(e,n),s=h(e,t),o=h(t,n),l=h(s,o),a=h(l,l);g(a)}),[e,n,a]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:n&&(()=>{l(!1)})||(()=>{l(!0)}),children:["B: ",n?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:a&&(()=>{r(!1)})||(()=>{r(!0)}),children:["C: ",a?"true":"false"]}),(0,o.jsx)("p",{children:d?"true":"false"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=u+1;c(2===e?-1:e)},children:["D: ",u]}),(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=i+1;p(2===e?-1:e)},children:["E: ",i]}),(0,o.jsx)("p",{children:(x=u,m=i,x<=m?x:m)}),(0,o.jsx)("p",{children:((e,t)=>e>=t?e:t)(u,i)})]})]});var x,m}},91:(e,t,n)=>{n.r(t),n.d(t,{PageChooser:()=>o});var s=n(329);const o=e=>{let{componentNames:t,currentComponentName:n,onChange:o}=e;const l=e=>{let{target:t}=e;o(t.value)};return(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{children:t.map((e=>(0,s.jsx)("li",{children:(0,s.jsxs)("label",{htmlFor:e,children:[(0,s.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:l,checked:n===e}),(0,s.jsx)("span",{children:e})]})},e)))})})}},363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>r});var s=n(791),o=n(317),l=n(766),a=n(329);const r=e=>{let{value:t,onChange:n}=e;const[r,u]=(0,s.useState)(!1),[c,i]=(0,s.useState)(0);return(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:s}=e;if(r){const e=t+s-c;e>=0&&e<=450&&n(e)}})),[r]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{u(!1)})),[r]),(0,a.jsx)(l.RangeField,{children:(0,a.jsx)(l.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;u(!0),i(t)},left:t})})}},766:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>i,RangeDial:()=>c,RangeField:()=>u});var s,o,l,a=n(168),r=n(716);const u=r.Z.div(s||(s=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),c=r.Z.div(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t})),i=r.Z.div(l||(l=(0,a.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))},504:(e,t,n)=>{n.r(t),n.d(t,{TestPage:()=>i});var s=n(791),o=n(689),l=n(134),a=n(363),r=n(91),u=n(471),c=n(329);const i=()=>{const[e,t]=(0,s.useState)("Logic gates"),[n,i]=(0,s.useState)(0),[p,d]=(0,s.useState)(200),[g,h]=(0,s.useState)(0),[x,m]=(0,s.useState)(!1);return(0,c.jsxs)("section",{children:[(0,c.jsx)(r.PageChooser,{componentNames:["Logic gates","Simplest custom range","Draggable component"],currentComponentName:e,onChange:e=>{t(e)}}),"Logic gates"===e&&(0,c.jsx)(l.LogicGates,{}),"Simplest custom range"===e&&(0,c.jsx)(a.SimplestCustomRange,{onChange:e=>{i(e)},value:n}),"Draggable component"===e&&(0,c.jsx)(u.DraggableComponent,{valueY:p,valueX:g,onChange:e=>{let{valueY:t,valueX:n}=e;t>=200&&d(t),n>=0&&h(n)}}),(0,c.jsx)("p",{children:n}),(0,c.jsxs)("p",{children:["valueY=",p]}),(0,c.jsxs)("p",{children:["valueX=",g]}),(0,c.jsxs)("form",{children:[(0,c.jsx)("input",{placeholder:""}),(0,c.jsx)("button",{type:"submit",onClick:()=>{m(!0)},children:"Enter"})]}),x&&(0,c.jsx)(o.Fg,{to:"/"})]})}}}]);
//# sourceMappingURL=504.966c5333.chunk.js.map