"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[157,925,966,359,167,542,110,754,40,44,979,506,287,98,5,999,969,82,504],{1966:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelector:()=>r});var o=t(2791),s=t(4359),a=t(3329);const r=e=>{let{componentNames:n,initialComponentName:t,onChange:r}=e;const[l,i]=(0,o.useState)(t),c=e=>{const n=e.target.value;i(n),r(n)};return(0,a.jsx)(s.ComponentSelectorContainerStyleBase,{children:n.map((e=>(0,a.jsxs)(s.ComponentSelectorButtonStyleBase,{htmlFor:e,isactive:(l===e).toString(),children:[(0,a.jsx)(s.ComponentSelectorRadioButtonStyleBase,{id:e,name:"chooseComponentRadio",type:"radio",value:e,checked:l===e,onChange:c}),(0,a.jsx)(s.ComponentSelectorRadioButtonTextStyleBase,{children:e})]},e)))})}},4359:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelectorButtonStyleBase:()=>u,ComponentSelectorContainerStyleBase:()=>c,ComponentSelectorRadioButtonStyleBase:()=>p,ComponentSelectorRadioButtonTextStyleBase:()=>d});var o,s,a,r,l=t(168),i=t(9716);const c=i.Z.nav(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  column-gap: 18px;\n\n  margin-bottom: 10px;\n"]))),u=i.Z.label(s||(s=(0,l.Z)(["\n  height: 36px;\n\n  display: flex;\n  padding: 12px;\n  justify-content: center;\n  align-items: center;\n\n  border: none;\n  border-radius: 12px;\n  background-color: ",';\n\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n\n  font-family: "Manrope-SemiBold", sans-serif;\n\n  &:hover {\n    background-color: rgb(68, 11, 205);\n  }\n'])),(e=>{let{isactive:n}=e;return"true"===n?"rgb(112, 52, 255)":"rgba(138, 138, 137, 1)"})),p=i.Z.input(a||(a=(0,l.Z)(["\n  display: none;\n"]))),d=i.Z.span(r||(r=(0,l.Z)(["\n  display: inline;\n"])))},8925:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelector:()=>o.ComponentSelector});var o=t(1966)},6542:(e,n,t)=>{t.r(n),t.d(n,{CustomRange:()=>l});var o=t(2791),s=t(1317),a=t(7754),r=t(3329);const l=e=>{let{value:n,onChange:t}=e;const[l,i]=(0,o.useState)(!1),[c,u]=(0,o.useState)(0);return(0,o.useEffect)((0,s.nM)("mousemove",(e=>{let{clientX:o}=e;if(l){const e=n+o-c;e>=0&&e<=450&&t(e)}})),[l]),(0,o.useEffect)((0,s.nM)("mouseup",(()=>{i(!1)})),[l]),(0,r.jsx)(a.RangeField,{children:(0,r.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:n}=e;i(!0),u(n)},left:n})})}},1110:(e,n,t)=>{t.r(n),t.d(n,{CustomRangeField:()=>r});var o=t(2791),s=t(6542),a=t(3329);const r=()=>{const[e,n]=(0,o.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(s.CustomRange,{onChange:e=>{n(e)},value:e}),(0,a.jsx)("p",{children:e})]})}},7754:(e,n,t)=>{t.r(n),t.d(n,{RangeDial:()=>i,RangeField:()=>l});var o,s,a=t(168),r=t(9716);const l=r.Z.div(o||(o=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),i=r.Z.div(s||(s=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:n}=e;return n}))},9167:(e,n,t)=>{t.r(n),t.d(n,{CustomRangeField:()=>o.CustomRangeField});var o=t(1110)},4044:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponent:()=>l});var o=t(2791),s=t(1317),a=t(1506),r=t(3329);const l=e=>{let{valueY:n,valueX:t,onChange:l}=e;const[i,c]=(0,o.useState)(!1),[u,p]=(0,o.useState)(n),[d,g]=(0,o.useState)(t),x=e=>{let{clientY:n,clientX:t}=e;c(!0),p(n),g(t)};return(0,o.useEffect)((0,s.nM)("mousedown",x),[i]),(0,o.useEffect)((0,s.nM)("mousemove",(e=>{let{clientY:o,clientX:s}=e;i&&l({valueY:n+o-u,valueX:t+s-d})})),[i]),(0,o.useEffect)((0,s.nM)("mouseup",(()=>{c(!1)})),[i]),(0,r.jsx)(a.DraggableComponentStyle,{onMouseDown:x,top:n,left:t})}},7979:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentField:()=>r});var o=t(2791),s=t(4044),a=t(3329);const r=()=>{const[e,n]=(0,o.useState)(200),[t,r]=(0,o.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(s.DraggableComponent,{valueY:e,valueX:t,onChange:e=>{let{valueY:t,valueX:o}=e;t>=200&&n(t),o>=0&&r(o)}}),(0,a.jsxs)("p",{children:["valueY=",e]}),(0,a.jsxs)("p",{children:["valueX=",t]})]})}},1506:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentStyle:()=>a});var o,s=t(168);const a=t(9716).Z.div(o||(o=(0,s.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:n}=e;return n}),(e=>{let{left:n}=e;return n}))},8040:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentField:()=>o.DraggableComponentField});var o=t(7979)},5098:(e,n,t)=>{t.r(n),t.d(n,{LogicGates:()=>a});var o=t(2791),s=t(3329);const a=()=>{const[e,n]=(0,o.useState)(!1),[t,a]=(0,o.useState)(!1),[r,l]=(0,o.useState)(!1),[i,c]=(0,o.useState)(0),[u,p]=(0,o.useState)(0),[d,g]=(0,o.useState)(!1),x=(e,n)=>!(e||n);return(0,o.useEffect)((()=>{const n=x(e,t),o=x(e,n),s=x(n,t),a=x(o,s),r=x(a,a);g(r)}),[e,t,r]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("button",{type:"button",onClick:e&&(()=>{n(!1)})||(()=>{n(!0)}),children:["A: ",e?"true":"false"]}),(0,s.jsxs)("button",{type:"button",onClick:t&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",t?"true":"false"]}),(0,s.jsxs)("button",{type:"button",onClick:r&&(()=>{l(!1)})||(()=>{l(!0)}),children:["C: ",r?"true":"false"]}),(0,s.jsx)("p",{children:d?"true":"false"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("button",{type:"button",onClick:()=>{const e=i+1;c(2===e?-1:e)},children:["D: ",i]}),(0,s.jsxs)("button",{type:"button",onClick:()=>{const e=u+1;p(2===e?-1:e)},children:["E: ",u]}),(0,s.jsx)("p",{children:(m=i,h=u,m<=h?m:h)}),(0,s.jsx)("p",{children:((e,n)=>e>=n?e:n)(i,u)})]})]});var m,h}},9287:(e,n,t)=>{t.r(n),t.d(n,{LogicGates:()=>o.LogicGates});var o=t(5098)},3999:(e,n,t)=>{t.r(n),t.d(n,{NavigationTest:()=>r});var o=t(2791),s=t(7689),a=t(3329);const r=()=>{const[e,n]=(0,o.useState)("test");return(0,a.jsxs)("section",{children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),n(e.currentTarget.elements.pageNameInput.value),e.currentTarget.reset()},children:[(0,a.jsx)("input",{name:"pageNameInput",type:"text",placeholder:"Enter page name"}),(0,a.jsx)("button",{type:"submit",children:"Enter"})]}),(0,a.jsx)(s.Fg,{to:"/".concat(e)})]})}},6005:(e,n,t)=>{t.r(n),t.d(n,{NavigationTest:()=>o.NavigationTest});var o=t(3999)},8082:(e,n,t)=>{t.r(n),t.d(n,{RecursionFunctionTest:()=>s});var o=t(3329);const s=()=>{const e=n=>0===n?0:3*n*(n-1)+1+e(n-1);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["Square of 0: ",e(0)]}),(0,o.jsxs)("p",{children:["Square of 1: ",e(1)]}),(0,o.jsxs)("p",{children:["Square of 2: ",e(2)]}),(0,o.jsxs)("p",{children:["Square of 3: ",e(3)]}),(0,o.jsxs)("p",{children:["Square of 4: ",e(4)]}),(0,o.jsxs)("p",{children:["Square of 5: ",e(5)]}),(0,o.jsxs)("p",{children:["Square of 6: ",e(6)]}),(0,o.jsxs)("p",{children:["Square of 7: ",e(7)]}),(0,o.jsxs)("p",{children:["Square of 8: ",e(8)]}),(0,o.jsxs)("p",{children:["Square of 9: ",e(9)]}),(0,o.jsxs)("p",{children:["Square of 10: ",e(10)]})]})}},5969:(e,n,t)=>{t.r(n),t.d(n,{RecursionFunctionTest:()=>o.RecursionFunctionTest});var o=t(8082)},9504:(e,n,t)=>{t.r(n),t.d(n,{TestPage:()=>p});var o=t(2791),s=t(8925),a=t(9287),r=t(9167),l=t(8040),i=t(5969),c=t(6005),u=t(3329);const p=()=>{const[e,n]=(0,o.useState)("Logic gates");return(0,u.jsxs)("section",{children:[(0,u.jsx)(s.ComponentSelector,{componentNames:["Logic gates","Simplest custom range","Draggable component","Navigation test","Recursion"],initialComponentName:"Logic gates",onChange:e=>{n(e)}}),"Logic gates"===e&&(0,u.jsx)(a.LogicGates,{}),"Simplest custom range"===e&&(0,u.jsx)(r.CustomRangeField,{}),"Draggable component"===e&&(0,u.jsx)(l.DraggableComponentField,{}),"Navigation test"===e&&(0,u.jsx)(c.NavigationTest,{}),"Recursion"===e&&(0,u.jsx)(i.RecursionFunctionTest,{})]})}},157:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o=t(9504).TestPage}}]);
//# sourceMappingURL=157.7351ac4c.chunk.js.map