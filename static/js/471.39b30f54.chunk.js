"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[471,766],{471:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>u});var o=n(791),l=n(317),a=n(766),r=n(329);const u=e=>{let{valueY:t,valueX:n,onChange:u}=e;const[s,c]=(0,o.useState)(!1),[i,p]=(0,o.useState)(t),[g,f]=(0,o.useState)(n),b=e=>{let{clientY:t,clientX:n}=e;c(!0),p(t),f(n)};return(0,o.useEffect)((0,l.nM)("mousedown",b),[s]),(0,o.useEffect)((0,l.nM)("mousemove",(e=>{let{clientY:o,clientX:l}=e;s&&u({valueY:t+o-i,valueX:n+l-g})})),[s]),(0,o.useEffect)((0,l.nM)("mouseup",(()=>{c(!1)})),[s]),(0,r.jsx)(a.DraggableComponentStyle,{onMouseDown:b,top:t,left:n})}},766:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>i,RangeDial:()=>c,RangeField:()=>s});var o,l,a,r=n(168),u=n(716);const s=u.Z.div(o||(o=(0,r.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),c=u.Z.div(l||(l=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t})),i=u.Z.div(a||(a=(0,r.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}))}}]);
//# sourceMappingURL=471.39b30f54.chunk.js.map