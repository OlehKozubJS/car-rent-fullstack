"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[929,40,44,979,506],{5929:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>s});var a=n(2791),l=n(8040),o=n(3329);const s=()=>{const[e,t]=(0,a.useState)(0);return(0,o.jsxs)("div",{children:["This is animation test",(0,o.jsx)(l.DraggableComponent,{onChange:e=>{let{valueX:n}=e;t(n)},valueX:e,valueY:250})]})}},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r});var a=n(2791),l=n(1317),o=n(1506),s=n(3329);const r=e=>{let{valueY:t,valueX:n,onChange:r}=e;const[u,c]=(0,a.useState)(!1),[g,i]=(0,a.useState)(t),[p,v]=(0,a.useState)(n),d=e=>{let{clientY:t,clientX:n}=e;c(!0),i(t),v(n)};return(0,a.useEffect)((0,l.nM)("mousedown",d),[u]),(0,a.useEffect)((0,l.nM)("mousemove",(e=>{let{clientY:a,clientX:l}=e;u&&r({valueY:t+a-g,valueX:n+l-p})})),[u]),(0,a.useEffect)((0,l.nM)("mouseup",(()=>{c(!1)})),[u]),(0,s.jsx)(o.DraggableComponentStyle,{onMouseDown:d,top:t,left:n})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>s});var a=n(2791),l=n(4044),o=n(3329);const s=()=>{const[e,t]=(0,a.useState)(200),[n,s]=(0,a.useState)(0);return(0,o.jsxs)("section",{children:[(0,o.jsx)(l.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:a}=e;n>=200&&t(n),a>=0&&s(a)}}),(0,o.jsxs)("p",{children:["valueY=",e]}),(0,o.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>o});var a,l=n(168);const o=n(9716).Z.div(a||(a=(0,l.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>a.DraggableComponent,DraggableComponentField:()=>l.DraggableComponentField});var a=n(4044),l=n(7979)}}]);
//# sourceMappingURL=929.e02f53ab.chunk.js.map