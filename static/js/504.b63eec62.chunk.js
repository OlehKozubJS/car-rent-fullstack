"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[504,51,201,338,543,925,966,359,167,542,110,754,40,44,979,506,91,569,645,957,724,904,287,98,5,999,969,82],{4201:(e,n,t)=>{t.r(n),t.d(n,{Cells:()=>a});var r=t(8543),o=t(3329);const a=()=>{let e=[];for(let n=1;n<=2500;n+=1)e=[...e,(0,o.jsx)(r.CellStyleBase,{isActive:!1},n)];return e}},2338:(e,n,t)=>{t.r(n),t.d(n,{CellularAutomaton:()=>l});var r=t(2791),o=t(8543),a=(t(4201),t(3329));const s=()=>{let e=[];for(let n=1;n<=2500;n+=1)e=[...e,!1];return e},l=()=>{const[e,n]=(0,r.useState)(s);return(0,a.jsx)(o.CellularFieldStyleBase,{children:(0,a.jsx)(o.CellStyleBase,{})})}},8543:(e,n,t)=>{t.r(n),t.d(n,{CellStyleBase:()=>i,CellularFieldStyleBase:()=>l});var r,o,a=t(168),s=t(9716);const l=s.Z.div(r||(r=(0,a.Z)(["\n  box-sizing: content-box;\n  height: 500px;\n  width: 500px;\n\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(0, 0, 0);\n\n  display: flex;\n  flex-wrap: wrap;\n"]))),i=s.Z.div(o||(o=(0,a.Z)(["\n  height: 10px;\n  width: 10px;\n\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(0, 0, 0);\n\n  background-color: ",";\n\n  font-size: 9px;\n  color: ",";\n"])),(e=>{let{isActive:n}=e;return n?"rgb(0, 0, 0)":"rgb(255, 255, 255)"}),(e=>{let{isActive:n}=e;return n?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}))},3051:(e,n,t)=>{t.r(n),t.d(n,{CellularAutomaton:()=>r.CellularAutomaton});var r=t(2338)},1966:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelector:()=>s});var r=t(2791),o=t(4359),a=t(3329);const s=e=>{let{componentNames:n,initialComponentName:t,onChange:s}=e;const[l,i]=(0,r.useState)(t),c=e=>{const n=e.target.value;i(n),s(n)};return(0,a.jsx)(o.ComponentSelectorContainerStyleBase,{children:n.map((e=>(0,a.jsxs)(o.ComponentSelectorButtonStyleBase,{htmlFor:e,isactive:(l===e).toString(),children:[(0,a.jsx)(o.ComponentSelectorRadioButtonStyleBase,{id:e,name:"chooseComponentRadio",type:"radio",value:e,checked:l===e,onChange:c}),(0,a.jsx)(o.ComponentSelectorRadioButtonTextStyleBase,{children:e})]},e)))})}},4359:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelectorButtonStyleBase:()=>u,ComponentSelectorContainerStyleBase:()=>c,ComponentSelectorRadioButtonStyleBase:()=>d,ComponentSelectorRadioButtonTextStyleBase:()=>p});var r,o,a,s,l=t(168),i=t(9716);const c=i.Z.nav(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n\n  margin-bottom: 10px;\n"]))),u=i.Z.label(o||(o=(0,l.Z)(["\n  height: 24px;\n\n  display: flex;\n  padding-inline: 24px;\n  justify-content: center;\n  align-items: center;\n\n  border: none;\n  border-radius: 12px;\n  background-color: ",';\n\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n\n  font-family: "Manrope-SemiBold", sans-serif;\n\n  &:hover {\n    background-color: rgb(68, 11, 205);\n  }\n'])),(e=>{let{isactive:n}=e;return"true"===n?"rgb(112, 52, 255)":"rgba(138, 138, 137, 1)"})),d=i.Z.input(a||(a=(0,l.Z)(["\n  display: none;\n"]))),p=i.Z.span(s||(s=(0,l.Z)(["\n  display: inline;\n"])))},8925:(e,n,t)=>{t.r(n),t.d(n,{ComponentSelector:()=>r.ComponentSelector});var r=t(1966)},6542:(e,n,t)=>{t.r(n),t.d(n,{CustomRange:()=>l});var r=t(2791),o=t(1317),a=t(7754),s=t(3329);const l=e=>{let{value:n,onChange:t}=e;const[l,i]=(0,r.useState)(!1),[c,u]=(0,r.useState)(0);return(0,r.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:r}=e;if(l){const e=n+r-c;e>=0&&e<=450&&t(e)}})),[l]),(0,r.useEffect)((0,o.nM)("mouseup",(()=>{i(!1)})),[l]),(0,s.jsx)(a.RangeField,{children:(0,s.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:n}=e;i(!0),u(n)},left:n})})}},1110:(e,n,t)=>{t.r(n),t.d(n,{CustomRangeField:()=>s});var r=t(2791),o=t(6542),a=t(3329);const s=()=>{const[e,n]=(0,r.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.CustomRange,{onChange:e=>{n(e)},value:e}),(0,a.jsx)("p",{children:e})]})}},7754:(e,n,t)=>{t.r(n),t.d(n,{RangeDial:()=>i,RangeField:()=>l});var r,o,a=t(168),s=t(9716);const l=s.Z.div(r||(r=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),i=s.Z.div(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:n}=e;return n}))},9167:(e,n,t)=>{t.r(n),t.d(n,{CustomRangeField:()=>r.CustomRangeField});var r=t(1110)},4044:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponent:()=>l});var r=t(2791),o=t(1317),a=t(1506),s=t(3329);const l=e=>{let{valueY:n,valueX:t,onChange:l}=e;const[i,c]=(0,r.useState)(!1),[u,d]=(0,r.useState)(n),[p,g]=(0,r.useState)(t),x=e=>{let{clientY:n,clientX:t}=e;c(!0),d(n),g(t)};return(0,r.useEffect)((0,o.nM)("mousedown",x),[i]),(0,r.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:r,clientX:o}=e;i&&l({valueY:n+r-u,valueX:t+o-p})})),[i]),(0,r.useEffect)((0,o.nM)("mouseup",(()=>{c(!1)})),[i]),(0,s.jsx)(a.DraggableComponentStyle,{onMouseDown:x,top:n,left:t})}},7979:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentField:()=>s});var r=t(2791),o=t(4044),a=t(3329);const s=()=>{const[e,n]=(0,r.useState)(200),[t,s]=(0,r.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.DraggableComponent,{valueY:e,valueX:t,onChange:e=>{let{valueY:t,valueX:r}=e;t>=200&&n(t),r>=0&&s(r)}}),(0,a.jsxs)("p",{children:["valueY=",e]}),(0,a.jsxs)("p",{children:["valueX=",t]})]})}},1506:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentStyle:()=>a});var r,o=t(168);const a=t(9716).Z.div(r||(r=(0,o.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{top:n}=e;return n}),(e=>{let{left:n}=e;return n}))},8040:(e,n,t)=>{t.r(n),t.d(n,{DraggableComponentField:()=>r.DraggableComponentField});var r=t(7979)},2569:(e,n,t)=>{t.r(n),t.d(n,{GradientHover:()=>l});var r=t(2791),o=t(3904),a=t(5724),s=t(3329);const l=()=>{const[e,n]=(0,r.useState)(!1),[t,l]=(0,r.useState)({}),[i,c]=(0,r.useState)(-40),u=()=>{i>=t.offsetWidth+40?(c(-40),n(!1)):c(i+5)};return(0,r.useEffect)((()=>{const n=setInterval(u,5);return e||clearInterval(n),()=>{clearInterval(n)}}),[e,i]),(0,s.jsx)(a.GradientHoverStyleBase,{onMouseOver:e=>{l(e.target.parentNode),n(!0)},backgroundimage:(0,o.setLinearGradient)(i)})}},4645:(e,n,t)=>{t.r(n),t.d(n,{GradientHoverField:()=>s});var r=t(2569),o=t(3957),a=t(3329);const s=()=>(0,a.jsx)("div",{children:(0,a.jsxs)(o.GradientHoverFieldStyleBase,{children:["Gradient hover",(0,a.jsx)(r.GradientHover,{})]})})},3957:(e,n,t)=>{t.r(n),t.d(n,{GradientHoverFieldStyleBase:()=>a});var r,o=t(168);const a=t(9716).Z.div(r||(r=(0,o.Z)(["\n  height: 150px;\n  width: 800px;\n\n  background-color: black;\n  color: white;\n\n  position: relative;\n"])))},5724:(e,n,t)=>{t.r(n),t.d(n,{GradientHoverStyleBase:()=>a});var r,o=t(168);const a=t(9716).Z.div(r||(r=(0,o.Z)(["\n  position: absolute;\n\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n\n  background: none;\n  color: white;\n  background-image: ",";\n"])),(e=>{let{backgroundimage:n}=e;return n}))},4091:(e,n,t)=>{t.r(n),t.d(n,{GradientHover:()=>r.GradientHover,GradientHoverField:()=>o.GradientHoverField});var r=t(2569),o=t(4645)},3904:(e,n,t)=>{t.r(n),t.d(n,{setLinearGradient:()=>r});const r=e=>"linear-gradient(\n    to right,\n  rgba(255, 255, 255, 0),\n  rgba(255, 255, 255, 0)\n    ".concat(e,"px,\n  rgba(255, 255, 255, 1)\n    ").concat(e+20,"px,\n  rgba(255, 255, 255, 1)\n    ").concat(e+20,"px,\n  rgba(255, 255, 255, 0)\n    ").concat(e+40,"px\n  );")},5098:(e,n,t)=>{t.r(n),t.d(n,{LogicGates:()=>a});var r=t(2791),o=t(3329);const a=()=>{const[e,n]=(0,r.useState)(!1),[t,a]=(0,r.useState)(!1),[s,l]=(0,r.useState)(!1),[i,c]=(0,r.useState)(0),[u,d]=(0,r.useState)(0),[p,g]=(0,r.useState)(!1),x=(e,n)=>!(e||n);return(0,r.useEffect)((()=>{const n=x(e,t),r=x(e,n),o=x(n,t),a=x(r,o),s=x(a,a);g(s)}),[e,t,s]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{n(!1)})||(()=>{n(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:t&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",t?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:s&&(()=>{l(!1)})||(()=>{l(!0)}),children:["C: ",s?"true":"false"]}),(0,o.jsx)("p",{children:p?"true":"false"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=i+1;c(2===e?-1:e)},children:["D: ",i]}),(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=u+1;d(2===e?-1:e)},children:["E: ",u]}),(0,o.jsx)("p",{children:(v=i,h=u,v<=h?v:h)}),(0,o.jsx)("p",{children:((e,n)=>e>=n?e:n)(i,u)})]})]});var v,h}},9287:(e,n,t)=>{t.r(n),t.d(n,{LogicGates:()=>r.LogicGates});var r=t(5098)},3999:(e,n,t)=>{t.r(n),t.d(n,{NavigationTest:()=>s});var r=t(2791),o=t(7689),a=t(3329);const s=()=>{const[e,n]=(0,r.useState)("test");return(0,a.jsxs)("section",{children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),n(e.currentTarget.elements.pageNameInput.value),e.currentTarget.reset()},children:[(0,a.jsx)("input",{name:"pageNameInput",type:"text",placeholder:"Enter page name"}),(0,a.jsx)("button",{type:"submit",children:"Enter"})]}),(0,a.jsx)(o.Fg,{to:"/".concat(e)})]})}},6005:(e,n,t)=>{t.r(n),t.d(n,{NavigationTest:()=>r.NavigationTest});var r=t(3999)},8082:(e,n,t)=>{t.r(n),t.d(n,{RecursionFunctionTest:()=>o});var r=t(3329);const o=()=>{const e=n=>0===n?0:3*n*(n-1)+1+e(n-1);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["Square of 0: ",e(0)]}),(0,r.jsxs)("p",{children:["Square of 1: ",e(1)]}),(0,r.jsxs)("p",{children:["Square of 2: ",e(2)]}),(0,r.jsxs)("p",{children:["Square of 3: ",e(3)]}),(0,r.jsxs)("p",{children:["Square of 4: ",e(4)]}),(0,r.jsxs)("p",{children:["Square of 5: ",e(5)]}),(0,r.jsxs)("p",{children:["Square of 6: ",e(6)]}),(0,r.jsxs)("p",{children:["Square of 7: ",e(7)]}),(0,r.jsxs)("p",{children:["Square of 8: ",e(8)]}),(0,r.jsxs)("p",{children:["Square of 9: ",e(9)]}),(0,r.jsxs)("p",{children:["Square of 10: ",e(10)]})]})}},5969:(e,n,t)=>{t.r(n),t.d(n,{RecursionFunctionTest:()=>r.RecursionFunctionTest});var r=t(8082)},9504:(e,n,t)=>{t.r(n),t.d(n,{TestPage:()=>g});var r=t(2791),o=t(8925),a=t(9287),s=t(9167),l=t(8040),i=t(5969),c=t(6005),u=t(4091),d=t(3051),p=t(3329);const g=()=>{const[e,n]=(0,r.useState)("Cellular automaton");return(0,p.jsxs)("section",{children:[(0,p.jsx)(o.ComponentSelector,{componentNames:["Logic gates","Simplest custom range","Draggable component","Navigation test","Recursion","Gradient hover","Cellular automaton"],initialComponentName:e,onChange:e=>{n(e)}}),"Logic gates"===e&&(0,p.jsx)(a.LogicGates,{}),"Simplest custom range"===e&&(0,p.jsx)(s.CustomRangeField,{}),"Draggable component"===e&&(0,p.jsx)(l.DraggableComponentField,{}),"Navigation test"===e&&(0,p.jsx)(c.NavigationTest,{}),"Recursion"===e&&(0,p.jsx)(i.RecursionFunctionTest,{}),"Gradient hover"===e&&(0,p.jsx)(u.GradientHoverField,{}),"Cellular automaton"===e&&(0,p.jsx)(d.CellularAutomaton,{})]})}}}]);
//# sourceMappingURL=504.b63eec62.chunk.js.map