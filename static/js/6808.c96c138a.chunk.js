"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[6808,8040,4044,7979,1506],{6808:(e,t,n)=>{n.r(t),n.d(t,{AnimationTestController:()=>a});var l=n(8040),o=n(3329);const a=e=>{let{onChange:t,value:n,range:a,color:r}=e;return(0,o.jsx)("div",{style:{position:"relative",height:"50px"},children:(0,o.jsx)(l.DraggableComponent,{onChange:e=>{let{valueX:n}=e;n>=0&&n<=a&&t(n)},valueX:n,valueY:0,height:50,width:50,backgroundColor:r})})}},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>u});var l=n(2791),o=n(1317),a=n(1506),r=n(3329);const u=e=>{let{onChange:t,valueY:n,valueX:u,height:s,width:g,backgroundColor:i}=e;const[c,h]=(0,l.useState)(!1),[p,d]=(0,l.useState)(n),[v,C]=(0,l.useState)(u);return(0,l.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:l,clientX:o}=e;c&&t({valueY:n+l-p,valueX:u+o-v})})),[c]),(0,l.useEffect)((0,o.nM)("mouseup",(()=>{h(!1)})),[c]),(0,r.jsx)(a.DraggableComponentStyle,{onMouseDown:e=>{let{clientY:t,clientX:n}=e;h(!0),d(t),C(n)},top:n,left:u,height:s,width:g,backgroundColor:i})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>r});var l=n(2791),o=n(4044),a=n(3329);const r=()=>{const[e,t]=(0,l.useState)(200),[n,r]=(0,l.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:l}=e;n>=200&&t(n),l>=0&&r(l)}}),(0,a.jsxs)("p",{children:["valueY=",e]}),(0,a.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>a});var l,o=n(168);const a=n(9716).Z.div(l||(l=(0,o.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  height: ","px;\n\n  width: ","px;\n\n  background-color: ",";\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{backgroundColor:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>l.DraggableComponent,DraggableComponentField:()=>o.DraggableComponentField});var l=n(4044),o=n(7979)}}]);
//# sourceMappingURL=6808.c96c138a.chunk.js.map