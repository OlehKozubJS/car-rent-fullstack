"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[929,40,44,979,506],{5929:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>r});var l=n(2791),a=n(8040),o=n(3329);const r=()=>{const[e,t]=(0,l.useState)(0);return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{position:"relative",height:"50px"},children:(0,o.jsx)(a.DraggableComponent,{onChange:e=>{let{valueX:n}=e;n>=0&&n<=180&&t(n)},valueX:e,valueY:0})}),(0,o.jsx)("p",{children:e})]})}},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>s});var l=n(2791),a=n(1317),o=n(1506),r=n(3329);const s=e=>{let{valueY:t,valueX:n,onChange:s}=e;const[u,c]=(0,l.useState)(!1),[i,g]=(0,l.useState)(t),[p,v]=(0,l.useState)(n);return(0,l.useEffect)((0,a.nM)("mousemove",(e=>{let{clientY:l,clientX:a}=e;u&&s({valueY:t+l-i,valueX:n+a-p})})),[u]),(0,l.useEffect)((0,a.nM)("mouseup",(()=>{c(!1)})),[u]),(0,r.jsx)(o.DraggableComponentStyle,{onMouseDown:e=>{let{clientY:t,clientX:n}=e;c(!0),g(t),v(n)},top:t,left:n})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>r});var l=n(2791),a=n(4044),o=n(3329);const r=()=>{const[e,t]=(0,l.useState)(200),[n,r]=(0,l.useState)(0);return(0,o.jsxs)("section",{children:[(0,o.jsx)(a.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:l}=e;n>=200&&t(n),l>=0&&r(l)}}),(0,o.jsxs)("p",{children:["valueY=",e]}),(0,o.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>o});var l,a=n(168);const o=n(9716).Z.div(l||(l=(0,a.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>l.DraggableComponent,DraggableComponentField:()=>a.DraggableComponentField});var l=n(4044),a=n(7979)}}]);
//# sourceMappingURL=929.59988dfe.chunk.js.map