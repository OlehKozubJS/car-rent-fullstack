"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[929,40,44,979,506],{5929:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>r});var l=n(2791),o=n(8040),a=n(3329);const r=()=>{const[e,t]=(0,l.useState)(0),n=e=>{let{valueX:n}=e;n>=0&&n<=180&&t(n)};return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{position:"relative",height:"50px"},children:(0,a.jsx)(o.DraggableComponent,{onChange:n,valueX:e,valueY:0,height:50,width:150,backgroundColor:"red"})}),(0,a.jsx)("div",{style:{position:"relative",height:"50px"},children:(0,a.jsx)(o.DraggableComponent,{onChange:n,valueX:e,valueY:0,height:50,width:150,backgroundColor:"red"})}),(0,a.jsx)("div",{style:{position:"relative",height:"50px"},children:(0,a.jsx)(o.DraggableComponent,{onChange:n,valueX:e,valueY:0,height:50,width:150,backgroundColor:"red"})}),(0,a.jsx)("p",{children:e}),(0,a.jsx)("div",{})]})}},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>i});var l=n(2791),o=n(1317),a=n(1506),r=n(3329);const i=e=>{let{onChange:t,valueY:n,valueX:i,height:s,width:u,backgroundColor:g}=e;const[h,d]=(0,l.useState)(!1),[c,p]=(0,l.useState)(n),[v,C]=(0,l.useState)(i);return(0,l.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:l,clientX:o}=e;h&&t({valueY:n+l-c,valueX:i+o-v})})),[h]),(0,l.useEffect)((0,o.nM)("mouseup",(()=>{d(!1)})),[h]),(0,r.jsx)(a.DraggableComponentStyle,{onMouseDown:e=>{let{clientY:t,clientX:n}=e;d(!0),p(t),C(n)},top:n,left:i,height:s,width:u,backgroundColor:g})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>r});var l=n(2791),o=n(4044),a=n(3329);const r=()=>{const[e,t]=(0,l.useState)(200),[n,r]=(0,l.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:l}=e;n>=200&&t(n),l>=0&&r(l)}}),(0,a.jsxs)("p",{children:["valueY=",e]}),(0,a.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>a});var l,o=n(168);const a=n(9716).Z.div(l||(l=(0,o.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  height: ","px;\n\n  width: ","px;\n\n  background-color: ",";\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{backgroundColor:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>l.DraggableComponent,DraggableComponentField:()=>o.DraggableComponentField});var l=n(4044),o=n(7979)}}]);
//# sourceMappingURL=929.14c8b3b1.chunk.js.map