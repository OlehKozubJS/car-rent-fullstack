"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[474,808,40,44,979,506],{6808:(e,t,n)=>{n.r(t),n.d(t,{AnimationTestController:()=>l});var o=n(8040),r=n(3329);const l=e=>{let{onChange:t,value:n,range:l,color:a}=e;return(0,r.jsx)("div",{style:{position:"relative",height:"50px"},children:(0,r.jsx)(o.DraggableComponent,{onChange:e=>{let{valueX:n}=e;n>=0&&n<=l&&t(n)},valueX:n,valueY:0,height:50,width:50,backgroundColor:a})})}},1474:(e,t,n)=>{n.r(t),n.d(t,{AnimationTestControllers:()=>a});var o=n(2791),r=n(6808),l=n(3329);const a=()=>{const[e,t]=(0,o.useState)(0),[n,a]=(0,o.useState)(0),[s,u]=(0,o.useState)(0),[i,c]=(0,o.useState)(500);return(0,o.useEffect)((()=>{}),[e,n,s,i]),(0,l.jsxs)("div",{children:[(0,l.jsx)(r.AnimationTestController,{onChange:e=>t(e),value:e,range:180,color:"red"}),(0,l.jsx)(r.AnimationTestController,{onChange:e=>a(e),value:n,range:180,color:"green"}),(0,l.jsx)(r.AnimationTestController,{onChange:e=>u(e),value:s,range:180,color:"blue"}),(0,l.jsx)(r.AnimationTestController,{onChange:e=>c(e),value:i,range:500,color:"cyan"}),(0,l.jsx)("button",{type:"button",onClick:()=>{t(0),a(0),u(0),c(500)},style:{backgroundColor:"rgb(250, 225, 225)"},children:"Reset"}),(0,l.jsxs)("p",{children:["transform: rotate: ",e]}),(0,l.jsxs)("p",{children:["transfrom: rotateY: ",n]}),(0,l.jsxs)("p",{children:["transform: rotateX: ",s]}),(0,l.jsxs)("p",{children:["transform: perspective: ",i]})]})}},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>s});var o=n(2791),r=n(1317),l=n(1506),a=n(3329);const s=e=>{let{onChange:t,valueY:n,valueX:s,height:u,width:i,backgroundColor:c}=e;const[g,h]=(0,o.useState)(!1),[d,p]=(0,o.useState)(n),[C,v]=(0,o.useState)(s);return(0,o.useEffect)((0,r.nM)("mousemove",(e=>{let{clientY:o,clientX:r}=e;g&&t({valueY:n+o-d,valueX:s+r-C})})),[g]),(0,o.useEffect)((0,r.nM)("mouseup",(()=>{h(!1)})),[g]),(0,a.jsx)(l.DraggableComponentStyle,{onMouseDown:e=>{let{clientY:t,clientX:n}=e;h(!0),p(t),v(n)},top:n,left:s,height:u,width:i,backgroundColor:c})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>a});var o=n(2791),r=n(4044),l=n(3329);const a=()=>{const[e,t]=(0,o.useState)(200),[n,a]=(0,o.useState)(0);return(0,l.jsxs)("section",{children:[(0,l.jsx)(r.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:o}=e;n>=200&&t(n),o>=0&&a(o)}}),(0,l.jsxs)("p",{children:["valueY=",e]}),(0,l.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>l});var o,r=n(168);const l=n(9716).Z.div(o||(o=(0,r.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  height: ","px;\n\n  width: ","px;\n\n  background-color: ",";\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{backgroundColor:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>o.DraggableComponent,DraggableComponentField:()=>r.DraggableComponentField});var o=n(4044),r=n(7979)}}]);
//# sourceMappingURL=474.9702502c.chunk.js.map