"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[929,808,40,44,979,506],{5929:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>l});var r=n(2791),o=n(6808),a=n(3329);const l=()=>{const[e,t]=(0,r.useState)(0),[n,l]=(0,r.useState)(0),[s,i]=(0,r.useState)(0),[c,u]=(0,r.useState)(500);return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.AnimationTestController,{onChange:e=>t(e),value:e,range:180,color:"red"}),(0,a.jsx)(o.AnimationTestController,{onChange:e=>l(e),value:n,range:180,color:"green"}),(0,a.jsx)(o.AnimationTestController,{onChange:e=>i(e),value:s,range:180,color:"blue"}),(0,a.jsx)(o.AnimationTestController,{onChange:e=>u(e),value:c,range:500,color:"cyan"}),(0,a.jsx)("button",{type:"button",onClick:()=>{t(0),l(0),i(0),u(500)},children:"Reset"}),(0,a.jsxs)("p",{children:["transform: rotate: ",e]}),(0,a.jsxs)("p",{children:["transfrom: rotateY: ",n]}),(0,a.jsxs)("p",{children:["transform: rotateX: ",s]}),(0,a.jsxs)("p",{children:["transform: perspective: ",c]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{height:"250px",width:"250px",border:"5px solid rgb(150, 250, 250)",backgroundColor:"red",transformOrigin:"center",transform:"perspective(".concat(c,"px) rotate(").concat(e,"deg) rotateY(").concat(n,"deg) rotateX(").concat(s,"deg)")},children:"Hello"})})]})}},6808:(e,t,n)=>{n.r(t),n.d(t,{AnimationTestController:()=>a});var r=n(8040),o=n(3329);const a=e=>{let{onChange:t,value:n,range:a,color:l}=e;return(0,o.jsx)("div",{style:{position:"relative",height:"50px"},children:(0,o.jsx)(r.DraggableComponent,{onChange:e=>{let{valueX:n}=e;n>=0&&n<=a&&t(n)},valueX:n,valueY:0,height:50,width:50,backgroundColor:l})})}},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>s});var r=n(2791),o=n(1317),a=n(1506),l=n(3329);const s=e=>{let{onChange:t,valueY:n,valueX:s,height:i,width:c,backgroundColor:u}=e;const[g,d]=(0,r.useState)(!1),[h,p]=(0,r.useState)(n),[v,C]=(0,r.useState)(s);return(0,r.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:r,clientX:o}=e;g&&t({valueY:n+r-h,valueX:s+o-v})})),[g]),(0,r.useEffect)((0,o.nM)("mouseup",(()=>{d(!1)})),[g]),(0,l.jsx)(a.DraggableComponentStyle,{onMouseDown:e=>{let{clientY:t,clientX:n}=e;d(!0),p(t),C(n)},top:n,left:s,height:i,width:c,backgroundColor:u})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>l});var r=n(2791),o=n(4044),a=n(3329);const l=()=>{const[e,t]=(0,r.useState)(200),[n,l]=(0,r.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:r}=e;n>=200&&t(n),r>=0&&l(r)}}),(0,a.jsxs)("p",{children:["valueY=",e]}),(0,a.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>a});var r,o=n(168);const a=n(9716).Z.div(r||(r=(0,o.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  height: ","px;\n\n  width: ","px;\n\n  background-color: ",";\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{backgroundColor:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r.DraggableComponent,DraggableComponentField:()=>o.DraggableComponentField});var r=n(4044),o=n(7979)}}]);
//# sourceMappingURL=929.5d8cbb89.chunk.js.map