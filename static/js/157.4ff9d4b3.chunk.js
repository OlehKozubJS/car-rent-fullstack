"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[157,309,40,44,979,506,134,546,363,766,504],{6309:(e,t,n)=>{n.r(t),n.d(t,{ComponentChooser:()=>o});n(9716);var s=n(3329);const o=e=>{let{componentNames:t,currentComponentName:n,onChange:o}=e;const r=e=>{let{target:t}=e;o(t.value)};return(0,s.jsx)("nav",{children:t.map((e=>(0,s.jsxs)("label",{htmlFor:e,children:[(0,s.jsx)("input",{id:e,name:"chooseComponentRadio",type:"radio",value:e,onChange:r,checked:n===e}),(0,s.jsx)("span",{children:e})]},e)))})}},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>l});var s=n(2791),o=n(1317),r=n(1506),a=n(3329);const l=e=>{let{valueY:t,valueX:n,onChange:l}=e;const[u,c]=(0,s.useState)(!1),[i,p]=(0,s.useState)(t),[d,g]=(0,s.useState)(n),h=e=>{let{clientY:t,clientX:n}=e;c(!0),p(t),g(n)};return(0,s.useEffect)((0,o.nM)("mousedown",h),[u]),(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:s,clientX:o}=e;u&&l({valueY:t+s-i,valueX:n+o-d})})),[u]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[u]),(0,a.jsx)(r.DraggableComponentStyle,{onMouseDown:h,top:t,left:n})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>a});var s=n(2791),o=n(4044),r=n(3329);const a=()=>{const[e,t]=(0,s.useState)(200),[n,a]=(0,s.useState)(0);return(0,r.jsxs)("section",{children:[(0,r.jsx)(o.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:s}=e;n>=200&&t(n),s>=0&&a(s)}}),(0,r.jsxs)("p",{children:["valueY=",e]}),(0,r.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>r});var s,o=n(168);const r=n(9716).Z.div(s||(s=(0,o.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>s.DraggableComponentField});var s=n(7979)},8134:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>r});var s=n(2791),o=n(3329);const r=()=>{const[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),[a,l]=(0,s.useState)(!1),[u,c]=(0,s.useState)(0),[i,p]=(0,s.useState)(0),[d,g]=(0,s.useState)(!1),h=(e,t)=>!(e||t);return(0,s.useEffect)((()=>{const t=h(e,n),s=h(e,t),o=h(t,n),r=h(s,o),a=h(r,r);g(a)}),[e,n,a]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:n&&(()=>{r(!1)})||(()=>{r(!0)}),children:["B: ",n?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:a&&(()=>{l(!1)})||(()=>{l(!0)}),children:["C: ",a?"true":"false"]}),(0,o.jsx)("p",{children:d?"true":"false"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=u+1;c(2===e?-1:e)},children:["D: ",u]}),(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=i+1;p(2===e?-1:e)},children:["E: ",i]}),(0,o.jsx)("p",{children:(x=u,j=i,x<=j?x:j)}),(0,o.jsx)("p",{children:((e,t)=>e>=t?e:t)(u,i)})]})]});var x,j}},4546:(e,t,n)=>{n.r(t),n.d(t,{RecursionFunctionTest:()=>o});var s=n(3329);const o=()=>{const e=t=>0===t?0:3*t*(t-1)+1+e(t-1);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Square of 0: ",e(0)]}),(0,s.jsxs)("p",{children:["Square of 1: ",e(1)]}),(0,s.jsxs)("p",{children:["Square of 2: ",e(2)]}),(0,s.jsxs)("p",{children:["Square of 3: ",e(3)]}),(0,s.jsxs)("p",{children:["Square of 4: ",e(4)]}),(0,s.jsxs)("p",{children:["Square of 5: ",e(5)]}),(0,s.jsxs)("p",{children:["Square of 6: ",e(6)]}),(0,s.jsxs)("p",{children:["Square of 7: ",e(7)]}),(0,s.jsxs)("p",{children:["Square of 8: ",e(8)]}),(0,s.jsxs)("p",{children:["Square of 9: ",e(9)]}),(0,s.jsxs)("p",{children:["Square of 10: ",e(10)]})]})}},5363:(e,t,n)=>{n.r(t),n.d(t,{SimplestCustomRange:()=>l});var s=n(2791),o=n(1317),r=n(7766),a=n(3329);const l=e=>{let{value:t,onChange:n}=e;const[l,u]=(0,s.useState)(!1),[c,i]=(0,s.useState)(0);return(0,s.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:s}=e;if(l){const e=t+s-c;e>=0&&e<=450&&n(e)}})),[l]),(0,s.useEffect)((0,o.nM)("mouseup",(()=>{u(!1)})),[l]),(0,a.jsx)(r.RangeField,{children:(0,a.jsx)(r.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;u(!0),i(t)},left:t})})}},7766:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>i,RangeDial:()=>c,RangeField:()=>u});var s,o,r,a=n(168),l=n(9716);const u=l.Z.div(s||(s=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),c=l.Z.div(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t})),i=l.Z.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))},9504:(e,t,n)=>{n.r(t),n.d(t,{TestPage:()=>p});var s=n(2791),o=n(7689),r=n(8134),a=n(5363),l=n(6309),u=n(8040),c=n(4546),i=n(3329);const p=()=>{const[e,t]=(0,s.useState)("Logic gates"),[n,p]=(0,s.useState)(0),[d,g]=(0,s.useState)(200),[h,x]=(0,s.useState)(0),[j,m]=(0,s.useState)("test");return(0,i.jsxs)("section",{children:[(0,i.jsx)(l.ComponentChooser,{componentNames:["Logic gates","Simplest custom range","Draggable component"],currentComponentName:e,onChange:e=>{t(e)}}),"Logic gates"===e&&(0,i.jsx)(r.LogicGates,{}),"Simplest custom range"===e&&(0,i.jsx)(a.SimplestCustomRange,{onChange:e=>{p(e)},value:n}),"Draggable component"===e&&(0,i.jsx)(u.DraggableComponentField,{}),(0,i.jsx)("p",{children:n}),(0,i.jsxs)("p",{children:["valueY=",d]}),(0,i.jsxs)("p",{children:["valueX=",h]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),m(e.currentTarget.elements.pageNameInput.value),e.currentTarget.reset()},children:[(0,i.jsx)("input",{name:"pageNameInput",type:"text",placeholder:"Enter page name"}),(0,i.jsx)("button",{type:"submit",children:"Enter"})]}),(0,i.jsx)(o.Fg,{to:"/".concat(j)})]}),(0,i.jsx)(c.RecursionFunctionTest,{})]})}},157:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n(9504).TestPage}}]);
//# sourceMappingURL=157.4ff9d4b3.chunk.js.map