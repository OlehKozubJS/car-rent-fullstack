"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[82,929,808,40,44,979,506],{5929:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>s});var o=n(2791),r=n(6808),a=n(3329);const l=e=>t=>{let{valueX:n}=t;n>=0&&n<=180&&e(n)},s=()=>{const[e,t]=(0,o.useState)(0),[n,s]=(0,o.useState)(0),[i,u]=(0,o.useState)(0),[c,g]=(0,o.useState)(0),d=l(t),h=l(s),p=l(u),v=l(g);return(0,a.jsxs)("div",{children:[(0,a.jsx)(r.AnimationTestController,{onChange:d,value:e,color:"red"}),(0,a.jsx)(r.AnimationTestController,{onChange:h,value:n,color:"green"}),(0,a.jsx)(r.AnimationTestController,{onChange:p,value:i,color:"blue"}),(0,a.jsx)(r.AnimationTestController,{onChange:v,value:c,color:"cyan"}),(0,a.jsxs)("p",{children:["transform: rotate: ",e]}),(0,a.jsxs)("p",{children:["transfrom: rotateY: ",n]}),(0,a.jsxs)("p",{children:["transform: rotateX: ",i]}),(0,a.jsxs)("p",{children:["transform: perspective: ",c]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{height:"250px",width:"250px",border:"5px solid rgb(150, 250, 250)",backgroundColor:"red",transformOrigin:"center",transform:"perspective(".concat(c,") rotate(").concat(e,"deg)")},children:"Hello"})})]})}},6808:(e,t,n)=>{n.r(t),n.d(t,{AnimationTestController:()=>a});n(2791);var o=n(8040),r=n(3329);const a=e=>{let{onChange:t,value:n,color:a}=e;return(0,r.jsx)("div",{style:{position:"relative",height:"25px"},children:(0,r.jsx)(o.DraggableComponent,{onChange:t,valueX:n,valueY:0,height:25,width:50,backgroundColor:a})})}},2082:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>o.AnimationTest});var o=n(5929)},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>s});var o=n(2791),r=n(1317),a=n(1506),l=n(3329);const s=e=>{let{onChange:t,valueY:n,valueX:s,height:i,width:u,backgroundColor:c}=e;const[g,d]=(0,o.useState)(!1),[h,p]=(0,o.useState)(n),[v,C]=(0,o.useState)(s);return(0,o.useEffect)((0,r.nM)("mousemove",(e=>{let{clientY:o,clientX:r}=e;g&&t({valueY:n+o-h,valueX:s+r-v})})),[g]),(0,o.useEffect)((0,r.nM)("mouseup",(()=>{d(!1)})),[g]),(0,l.jsx)(a.DraggableComponentStyle,{onMouseDown:e=>{let{clientY:t,clientX:n}=e;d(!0),p(t),C(n)},top:n,left:s,height:i,width:u,backgroundColor:c})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>l});var o=n(2791),r=n(4044),a=n(3329);const l=()=>{const[e,t]=(0,o.useState)(200),[n,l]=(0,o.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(r.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:o}=e;n>=200&&t(n),o>=0&&l(o)}}),(0,a.jsxs)("p",{children:["valueY=",e]}),(0,a.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>a});var o,r=n(168);const a=n(9716).Z.div(o||(o=(0,r.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  height: ","px;\n\n  width: ","px;\n\n  background-color: ",";\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{backgroundColor:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>o.DraggableComponent,DraggableComponentField:()=>r.DraggableComponentField});var o=n(4044),r=n(7979)}}]);
//# sourceMappingURL=82.29c51cf2.chunk.js.map