"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[82,929,808,40,44,979,506],{5929:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>a});var o=n(2791),l=n(6808),r=n(3329);const a=()=>{const[e,t]=(0,o.useState)(0),[n,a]=(0,o.useState)(0),[s,u]=(0,o.useState)(0),[i,c]=(0,o.useState)(0);return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.AnimationTestController,{onChange:e=>{let{valueX:n}=e;n>=0&&n<=180&&t(n)},value:e,color:"red"}),(0,r.jsx)(l.AnimationTestController,{onChange:e=>{let{valueX:t}=e;t>=0&&t<=180&&a(t)},value:n,color:"green"}),(0,r.jsx)(l.AnimationTestController,{onChange:e=>{let{valueX:t}=e;t>=0&&t<=180&&u(t)},value:s,color:"blue"}),(0,r.jsx)(l.AnimationTestController,{onChange:e=>{let{valueX:t}=e;t>=0&&t<=180&&c(t)},value:i,color:"cyan"}),(0,r.jsxs)("p",{children:["transform: rotate: ",e]}),(0,r.jsxs)("p",{children:["transfrom: rotateY: ",n]}),(0,r.jsxs)("p",{children:["transform: rotateX: ",s]}),(0,r.jsxs)("p",{children:["transform: perspective: ",i]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{})})]})}},6808:(e,t,n)=>{n.r(t),n.d(t,{AnimationTestController:()=>r});n(2791);var o=n(8040),l=n(3329);const r=e=>{let{onChange:t,value:n,color:r}=e;return(0,l.jsx)("div",{style:{position:"relative",height:"25px"},children:(0,l.jsx)(o.DraggableComponent,{onChange:t,valueX:n,valueY:0,height:25,width:50,backgroundColor:r})})}},2082:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>o.AnimationTest});var o=n(5929)},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>s});var o=n(2791),l=n(1317),r=n(1506),a=n(3329);const s=e=>{let{onChange:t,valueY:n,valueX:s,height:u,width:i,backgroundColor:c}=e;const[g,h]=(0,o.useState)(!1),[d,v]=(0,o.useState)(n),[p,C]=(0,o.useState)(s);return(0,o.useEffect)((0,l.nM)("mousemove",(e=>{let{clientY:o,clientX:l}=e;g&&t({valueY:n+o-d,valueX:s+l-p})})),[g]),(0,o.useEffect)((0,l.nM)("mouseup",(()=>{h(!1)})),[g]),(0,a.jsx)(r.DraggableComponentStyle,{onMouseDown:e=>{let{clientY:t,clientX:n}=e;h(!0),v(t),C(n)},top:n,left:s,height:u,width:i,backgroundColor:c})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>a});var o=n(2791),l=n(4044),r=n(3329);const a=()=>{const[e,t]=(0,o.useState)(200),[n,a]=(0,o.useState)(0);return(0,r.jsxs)("section",{children:[(0,r.jsx)(l.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:o}=e;n>=200&&t(n),o>=0&&a(o)}}),(0,r.jsxs)("p",{children:["valueY=",e]}),(0,r.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>r});var o,l=n(168);const r=n(9716).Z.div(o||(o=(0,l.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  height: ","px;\n\n  width: ","px;\n\n  background-color: ",";\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{backgroundColor:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>o.DraggableComponent,DraggableComponentField:()=>l.DraggableComponentField});var o=n(4044),l=n(7979)}}]);
//# sourceMappingURL=82.37349d6b.chunk.js.map