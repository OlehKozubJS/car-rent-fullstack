"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[157,925,966,359,167,542,110,754,40,44,979,506,91,569,724,904,287,98,5,999,969,82,504],{1966:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelector:()=>s});var o=t(2791),r=t(4359),a=t(3329);const s=e=>{let{componentNames:n,initialComponentName:t,onChange:s}=e;const[i,l]=(0,o.useState)(t),c=e=>{const n=e.target.value;l(n),s(n)};return(0,a.jsx)(r.ComponentSelectorContainerStyleBase,{children:n.map((e=>(0,a.jsxs)(r.ComponentSelectorButtonStyleBase,{htmlFor:e,isactive:(i===e).toString(),children:[(0,a.jsx)(r.ComponentSelectorRadioButtonStyleBase,{id:e,name:"chooseComponentRadio",type:"radio",value:e,checked:i===e,onChange:c}),(0,a.jsx)(r.ComponentSelectorRadioButtonTextStyleBase,{children:e})]},e)))})}},4359:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelectorButtonStyleBase:()=>u,ComponentSelectorContainerStyleBase:()=>c,ComponentSelectorRadioButtonStyleBase:()=>d,ComponentSelectorRadioButtonTextStyleBase:()=>p});var o,r,a,s,i=t(168),l=t(9716);const c=l.Z.nav(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n\n  margin-bottom: 10px;\n"]))),u=l.Z.label(r||(r=(0,i.Z)(["\n  height: 24px;\n\n  display: flex;\n  padding-inline: 24px;\n  justify-content: center;\n  align-items: center;\n\n  border: none;\n  border-radius: 12px;\n  background-color: ",';\n\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n\n  font-family: "Manrope-SemiBold", sans-serif;\n\n  &:hover {\n    background-color: rgb(68, 11, 205);\n  }\n'])),(e=>{let{isactive:n}=e;return"true"===n?"rgb(112, 52, 255)":"rgba(138, 138, 137, 1)"})),d=l.Z.input(a||(a=(0,i.Z)(["\n  display: none;\n"]))),p=l.Z.span(s||(s=(0,i.Z)(["\n  display: inline;\n"])))},8925:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelector:()=>o.ComponentSelector});var o=t(1966)},6542:(e,n,t)=>{t.r(n),t.d(n,{CustomRange:()=>i});var o=t(2791),r=t(1317),a=t(7754),s=t(3329);const i=e=>{let{value:n,onChange:t}=e;const[i,l]=(0,o.useState)(!1),[c,u]=(0,o.useState)(0);return(0,o.useEffect)((0,r.nM)("mousemove",(e=>{let{clientX:o}=e;if(i){const e=n+o-c;e>=0&&e<=450&&t(e)}})),[i]),(0,o.useEffect)((0,r.nM)("mouseup",(()=>{l(!1)})),[i]),(0,s.jsx)(a.RangeField,{children:(0,s.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:n}=e;l(!0),u(n)},left:n})})}},1110:(e,n,t)=>{t.r(n),t.d(n,{CustomRangeField:()=>s});var o=t(2791),r=t(6542),a=t(3329);const s=()=>{const[e,n]=(0,o.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(r.CustomRange,{onChange:e=>{n(e)},value:e}),(0,a.jsx)("p",{children:e})]})}},7754:(e,n,t)=>{t.r(n),t.d(n,{RangeDial:()=>l,RangeField:()=>i});var o,r,a=t(168),s=t(9716);const i=s.Z.div(o||(o=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),l=s.Z.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:n}=e;return n}))},9167:(e,n,t)=>{t.r(n),t.d(n,{CustomRangeField:()=>o.CustomRangeField});var o=t(1110)},4044:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponent:()=>i});var o=t(2791),r=t(1317),a=t(1506),s=t(3329);const i=e=>{let{valueY:n,valueX:t,onChange:i}=e;const[l,c]=(0,o.useState)(!1),[u,d]=(0,o.useState)(n),[p,g]=(0,o.useState)(t),x=e=>{let{clientY:n,clientX:t}=e;c(!0),d(n),g(t)};return(0,o.useEffect)((0,r.nM)("mousedown",x),[l]),(0,o.useEffect)((0,r.nM)("mousemove",(e=>{let{clientY:o,clientX:r}=e;l&&i({valueY:n+o-u,valueX:t+r-p})})),[l]),(0,o.useEffect)((0,r.nM)("mouseup",(()=>{c(!1)})),[l]),(0,s.jsx)(a.DraggableComponentStyle,{onMouseDown:x,top:n,left:t})}},7979:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentField:()=>s});var o=t(2791),r=t(4044),a=t(3329);const s=()=>{const[e,n]=(0,o.useState)(200),[t,s]=(0,o.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(r.DraggableComponent,{valueY:e,valueX:t,onChange:e=>{let{valueY:t,valueX:o}=e;t>=200&&n(t),o>=0&&s(o)}}),(0,a.jsxs)("p",{children:["valueY=",e]}),(0,a.jsxs)("p",{children:["valueX=",t]})]})}},1506:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentStyle:()=>a});var o,r=t(168);const a=t(9716).Z.div(o||(o=(0,r.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:n}=e;return n}),(e=>{let{left:n}=e;return n}))},8040:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentField:()=>o.DraggableComponentField});var o=t(7979)},2569:(e,n,t)=>{t.r(n),t.d(n,{GradientHover:()=>l});var o=t(2791),r=t(1317),a=t(3904),s=t(5724),i=t(3329);const l=()=>{const[e,n]=(0,o.useState)(!1),[t,l]=(0,o.useState)(-40);return(0,o.useEffect)((0,r.nM)(r.nM,100),[e]),(0,i.jsx)("div",{children:(0,i.jsxs)(s.GradientHoverTestComponentStyleBase,{onMouseOver:()=>{n(!0)},children:["Gradient hover",(0,i.jsx)(s.GradientHoverGradientComponentStyleBase,{backgroundimage:(0,a.setLinearGradient)(t)})]})})}},5724:(e,n,t)=>{t.r(n),t.d(n,{GradientHoverGradientComponentStyleBase:()=>l,GradientHoverTestComponentStyleBase:()=>i});var o,r,a=t(168),s=t(7745);const i=s.ZP.div(o||(o=(0,a.Z)(["\n  height: 250px;\n  width: 400px;\n\n  background-color: black;\n  color: white;\n\n  position: relative;\n"]))),l=s.ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n\n  background: none;\n  color: white;\n  background-image: ",";\n"])),(e=>{let{backgroundimage:n}=e;return n}))},4091:(e,n,t)=>{t.r(n),t.d(n,{GradientHover:()=>o.GradientHover});var o=t(2569)},3904:(e,n,t)=>{t.r(n),t.d(n,{setLinearGradient:()=>o});const o=e=>"linear-gradient(\n    to right,\n  rgba(255, 255, 255, 0),\n  rgba(255, 255, 255, 0)\n    ".concat(e,"px,\n  rgba(255, 255, 255, 1)\n    ").concat(e+20,"px,\n  rgba(255, 255, 255, 1)\n    ").concat(e+20,"px,\n  rgba(255, 255, 255, 0)\n    ").concat(e+40,"px\n  );")},5098:(e,n,t)=>{t.r(n),t.d(n,{LogicGates:()=>a});var o=t(2791),r=t(3329);const a=()=>{const[e,n]=(0,o.useState)(!1),[t,a]=(0,o.useState)(!1),[s,i]=(0,o.useState)(!1),[l,c]=(0,o.useState)(0),[u,d]=(0,o.useState)(0),[p,g]=(0,o.useState)(!1),x=(e,n)=>!(e||n);return(0,o.useEffect)((()=>{const n=x(e,t),o=x(e,n),r=x(n,t),a=x(o,r),s=x(a,a);g(s)}),[e,t,s]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{type:"button",onClick:e&&(()=>{n(!1)})||(()=>{n(!0)}),children:["A: ",e?"true":"false"]}),(0,r.jsxs)("button",{type:"button",onClick:t&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",t?"true":"false"]}),(0,r.jsxs)("button",{type:"button",onClick:s&&(()=>{i(!1)})||(()=>{i(!0)}),children:["C: ",s?"true":"false"]}),(0,r.jsx)("p",{children:p?"true":"false"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{type:"button",onClick:()=>{const e=l+1;c(2===e?-1:e)},children:["D: ",l]}),(0,r.jsxs)("button",{type:"button",onClick:()=>{const e=u+1;d(2===e?-1:e)},children:["E: ",u]}),(0,r.jsx)("p",{children:(h=l,v=u,h<=v?h:v)}),(0,r.jsx)("p",{children:((e,n)=>e>=n?e:n)(l,u)})]})]});var h,v}},9287:(e,n,t)=>{t.r(n),t.d(n,{LogicGates:()=>o.LogicGates});var o=t(5098)},3999:(e,n,t)=>{t.r(n),t.d(n,{NavigationTest:()=>s});var o=t(2791),r=t(7689),a=t(3329);const s=()=>{const[e,n]=(0,o.useState)("test");return(0,a.jsxs)("section",{children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),n(e.currentTarget.elements.pageNameInput.value),e.currentTarget.reset()},children:[(0,a.jsx)("input",{name:"pageNameInput",type:"text",placeholder:"Enter page name"}),(0,a.jsx)("button",{type:"submit",children:"Enter"})]}),(0,a.jsx)(r.Fg,{to:"/".concat(e)})]})}},6005:(e,n,t)=>{t.r(n),t.d(n,{NavigationTest:()=>o.NavigationTest});var o=t(3999)},8082:(e,n,t)=>{t.r(n),t.d(n,{RecursionFunctionTest:()=>r});var o=t(3329);const r=()=>{const e=n=>0===n?0:3*n*(n-1)+1+e(n-1);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["Square of 0: ",e(0)]}),(0,o.jsxs)("p",{children:["Square of 1: ",e(1)]}),(0,o.jsxs)("p",{children:["Square of 2: ",e(2)]}),(0,o.jsxs)("p",{children:["Square of 3: ",e(3)]}),(0,o.jsxs)("p",{children:["Square of 4: ",e(4)]}),(0,o.jsxs)("p",{children:["Square of 5: ",e(5)]}),(0,o.jsxs)("p",{children:["Square of 6: ",e(6)]}),(0,o.jsxs)("p",{children:["Square of 7: ",e(7)]}),(0,o.jsxs)("p",{children:["Square of 8: ",e(8)]}),(0,o.jsxs)("p",{children:["Square of 9: ",e(9)]}),(0,o.jsxs)("p",{children:["Square of 10: ",e(10)]})]})}},5969:(e,n,t)=>{t.r(n),t.d(n,{RecursionFunctionTest:()=>o.RecursionFunctionTest});var o=t(8082)},9504:(e,n,t)=>{t.r(n),t.d(n,{TestPage:()=>p});var o=t(2791),r=t(8925),a=t(9287),s=t(9167),i=t(8040),l=t(5969),c=t(6005),u=t(4091),d=t(3329);const p=()=>{const[e,n]=(0,o.useState)("Gradient hover");return(0,d.jsxs)("section",{children:[(0,d.jsx)(r.ComponentSelector,{componentNames:["Logic gates","Simplest custom range","Draggable component","Navigation test","Recursion","Gradient hover"],initialComponentName:e,onChange:e=>{n(e)}}),"Logic gates"===e&&(0,d.jsx)(a.LogicGates,{}),"Simplest custom range"===e&&(0,d.jsx)(s.CustomRangeField,{}),"Draggable component"===e&&(0,d.jsx)(i.DraggableComponentField,{}),"Navigation test"===e&&(0,d.jsx)(c.NavigationTest,{}),"Recursion"===e&&(0,d.jsx)(l.RecursionFunctionTest,{}),"Gradient hover"===e&&(0,d.jsx)(u.GradientHover,{})]})}},157:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o=t(9504).TestPage}}]);
//# sourceMappingURL=157.25c1d304.chunk.js.map