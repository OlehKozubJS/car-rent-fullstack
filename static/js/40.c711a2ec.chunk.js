"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[40,44,979,506],{4044:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponent:()=>u});var a=t(2791),o=t(1317),s=t(1506),l=t(3329);const u=e=>{let{valueY:n,valueX:t,onChange:u}=e;const[r,c]=(0,a.useState)(!1),[p,g]=(0,a.useState)(n),[m,i]=(0,a.useState)(t),h=e=>{let{clientY:n,clientX:t}=e;c(!0),g(n),i(t)};return(0,a.useEffect)((0,o.nM)("mousedown",h),[r]),(0,a.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:a,clientX:o}=e;r&&u({valueY:n+a-p,valueX:t+o-m})})),[r]),(0,a.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[r]),(0,l.jsx)(s.DraggableComponentStyle,{onMouseDown:h,top:n,left:t})}},7979:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentField:()=>l});var a=t(2791),o=t(4044),s=t(3329);const l=()=>{const[e,n]=(0,a.useState)(200),[t,l]=(0,a.useState)(0);return(0,s.jsxs)("section",{children:[(0,s.jsx)(ComponentChooser,{componentNames:["Logic gates","Simplest custom range","Draggable component"],currentComponentName:componentName,onChange:chooseComponent}),"Logic gates"===componentName&&(0,s.jsx)(LogicGates,{}),"Simplest custom range"===componentName&&(0,s.jsx)(SimplestCustomRange,{onChange:handleRangeValue,value:rangeValue}),"Draggable component"===componentName&&(0,s.jsx)(o.DraggableComponent,{valueY:e,valueX:t,onChange:e=>{let{valueY:t,valueX:a}=e;t>=200&&n(t),a>=0&&l(a)}}),(0,s.jsx)("p",{children:rangeValue}),(0,s.jsxs)("p",{children:["valueY=",e]}),(0,s.jsxs)("p",{children:["valueX=",t]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:handlePagePath,children:[(0,s.jsx)("input",{name:"pageNameInput",type:"text",placeholder:"Enter page name"}),(0,s.jsx)("button",{type:"submit",children:"Enter"})]}),(0,s.jsx)(Navigate,{to:"/".concat(pagePath)})]}),(0,s.jsx)(RecursionFunctionTest,{})]})}},1506:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentStyle:()=>s});var a,o=t(168);const s=t(9716).Z.div(a||(a=(0,o.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:n}=e;return n}),(e=>{let{left:n}=e;return n}))},8040:(e,n,t)=>{t.r(n);t(7979)}}]);
//# sourceMappingURL=40.c711a2ec.chunk.js.map