"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[504,82,929,808,51,201,338,543,150,285,609,925,966,359,167,542,110,754,40,44,979,506,91,569,645,957,724,904,287,98,5,999,969,38],{5929:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>l});var r=n(2791),o=n(6808),a=n(3329);const l=()=>{const[e,t]=(0,r.useState)(0),[n,l]=(0,r.useState)(0),[s,i]=(0,r.useState)(0),[c,d]=(0,r.useState)(500);return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.AnimationTestController,{onChange:e=>t(e),value:e,range:180,color:"red"}),(0,a.jsx)(o.AnimationTestController,{onChange:e=>l(e),value:n,range:180,color:"green"}),(0,a.jsx)(o.AnimationTestController,{onChange:e=>i(e),value:s,range:180,color:"blue"}),(0,a.jsx)(o.AnimationTestController,{onChange:e=>d(e),value:c,range:500,color:"cyan"}),(0,a.jsx)("button",{type:"button",onClick:()=>{t(0),l(0),i(0),d(500)},children:"Reset"}),(0,a.jsxs)("p",{children:["transform: rotate: ",e]}),(0,a.jsxs)("p",{children:["transfrom: rotateY: ",n]}),(0,a.jsxs)("p",{children:["transform: rotateX: ",s]}),(0,a.jsxs)("p",{children:["transform: perspective: ",c]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{height:"250px",width:"250px",border:"5px solid rgb(150, 250, 250)",backgroundColor:"red",transformOrigin:"center",transform:"perspective(".concat(c,"px) rotate(").concat(e,"deg) rotateY(").concat(n,"deg) rotateX(").concat(s,"deg)")},children:"Hello"})})]})}},6808:(e,t,n)=>{n.r(t),n.d(t,{AnimationTestController:()=>a});var r=n(8040),o=n(3329);const a=e=>{let{onChange:t,value:n,range:a,color:l}=e;return(0,o.jsx)("div",{style:{position:"relative",height:"50px"},children:(0,o.jsx)(r.DraggableComponent,{onChange:e=>{let{valueX:n}=e;n>=0&&n<=a&&t(n)},valueX:n,valueY:0,height:50,width:50,backgroundColor:l})})}},2082:(e,t,n)=>{n.r(t),n.d(t,{AnimationTest:()=>r.AnimationTest});var r=n(5929)},4201:(e,t,n)=>{n.r(t),n.d(t,{Cells:()=>a});var r=n(8543),o=n(3329);const a=()=>{let e=[];for(let t=1;t<=2500;t+=1)e=[...e,(0,o.jsx)(r.CellStyleBase,{isActive:!1},t)];return e}},2338:(e,t,n)=>{n.r(t),n.d(t,{CellularAutomaton:()=>l});var r=n(2791),o=n(8543),a=(n(4201),n(3329));const l=()=>{const[e,t]=(0,r.useState)((()=>{let e=[];for(let t=1;t<=2500;t+=1)e=[...e,!1];return e})());return(0,a.jsx)(o.CellularFieldStyleBase,{onClick:n=>{let{target:r}=n;t(e.map(((e,t)=>Number(r.dataset.number)===t?!e:e)))},children:e.map(((e,t)=>(0,a.jsx)(o.CellStyleBase,{"data-number":t,isActive:e},t)))})}},8543:(e,t,n)=>{n.r(t),n.d(t,{CellStyleBase:()=>i,CellularFieldStyleBase:()=>s});var r,o,a=n(168),l=n(9716);const s=l.Z.div(r||(r=(0,a.Z)(["\n  box-sizing: content-box;\n  height: 500px;\n  width: 500px;\n\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(0, 0, 0);\n\n  display: flex;\n  flex-wrap: wrap;\n"]))),i=l.Z.div(o||(o=(0,a.Z)(["\n  height: 10px;\n  width: 10px;\n\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(0, 0, 0);\n\n  background-color: ",";\n\n  font-size: 9px;\n  color: ",";\n"])),(e=>{let{isActive:t}=e;return t?"rgb(0, 0, 0)":"rgb(255, 255, 255)"}),(e=>{let{isActive:t}=e;return t?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}))},3051:(e,t,n)=>{n.r(t),n.d(t,{CellularAutomaton:()=>r.CellularAutomaton});var r=n(2338)},2285:(e,t,n)=>{n.r(t),n.d(t,{CellularAutomatonLite:()=>l});var r=n(2791),o=n(3609),a=n(3329);const l=()=>{const[e,t]=(0,r.useState)([]);return(0,a.jsx)(o.CellularFieldStyleBase,{onClick:n=>{const{cellY:r,cellX:l}=(e=>{const{clientY:t,clientX:n,currentTarget:r}=e,{top:o,left:a}=r.getBoundingClientRect(),l=t-o,s=n-a;return{cellY:l-l%10,cellX:s-s%10}})(n);((e,t,n)=>e.some((e=>e.props.top===t&&e.props.left===n)))(e,r,l)?t(((e,t,n)=>e.filter((e=>!(e.props.top===t&&e.props.left===n))))(e,r,l)):t([...e,(0,a.jsx)(o.CellStyleBase,{top:r,left:l,isActive:!0},"".concat(r,", ").concat(l))])},children:e.map((e=>e))})}},3609:(e,t,n)=>{n.r(t),n.d(t,{CellStyleBase:()=>i,CellularFieldStyleBase:()=>s});var r,o,a=n(168),l=n(9716);const s=l.Z.div(r||(r=(0,a.Z)(["\n  box-sizing: content-box;\n  height: 500px;\n  width: 500px;\n\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(0, 0, 0);\n\n  display: flex;\n  flex-wrap: wrap;\n\n  position: relative;\n"]))),i=l.Z.div(o||(o=(0,a.Z)(["\n  position: absolute;\n\n  height: 10px;\n  width: 10px;\n\n  top: ","px;\n\n  left: ","px;\n\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgb(0, 0, 0);\n\n  background-color: ",";\n\n  font-size: 9px;\n\n  color: ",";\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{isActive:t}=e;return t?"rgb(0, 0, 0)":"rgb(255, 255, 255)"}),(e=>{let{isActive:t}=e;return t?"rgb(255, 255, 255)":"rgb(0, 0, 0)"}))},1150:(e,t,n)=>{n.r(t),n.d(t,{CellularAutomatonLite:()=>r.CellularAutomatonLite});var r=n(2285)},1966:(e,t,n)=>{n.r(t),n.d(t,{ComponentSelector:()=>l});var r=n(2791),o=n(4359),a=n(3329);const l=e=>{let{componentNames:t,initialComponentName:n,onChange:l}=e;const[s,i]=(0,r.useState)(n),c=e=>{const t=e.target.value;i(t),l(t)};return(0,a.jsx)(o.ComponentSelectorContainerStyleBase,{children:t.map((e=>(0,a.jsxs)(o.ComponentSelectorButtonStyleBase,{htmlFor:e,isactive:(s===e).toString(),children:[(0,a.jsx)(o.ComponentSelectorRadioButtonStyleBase,{id:e,name:"chooseComponentRadio",type:"radio",value:e,checked:s===e,onChange:c}),(0,a.jsx)(o.ComponentSelectorRadioButtonTextStyleBase,{children:e})]},e)))})}},4359:(e,t,n)=>{n.r(t),n.d(t,{ComponentSelectorButtonStyleBase:()=>d,ComponentSelectorContainerStyleBase:()=>c,ComponentSelectorRadioButtonStyleBase:()=>u,ComponentSelectorRadioButtonTextStyleBase:()=>p});var r,o,a,l,s=n(168),i=n(9716);const c=i.Z.nav(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n\n  margin-bottom: 10px;\n"]))),d=i.Z.label(o||(o=(0,s.Z)(["\n  height: 24px;\n\n  display: flex;\n  padding-inline: 24px;\n  justify-content: center;\n  align-items: center;\n\n  border: none;\n  border-radius: 12px;\n  background-color: ",';\n\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n\n  font-family: "Manrope-SemiBold", sans-serif;\n\n  &:hover {\n    background-color: rgb(68, 11, 205);\n  }\n'])),(e=>{let{isactive:t}=e;return"true"===t?"rgb(112, 52, 255)":"rgba(138, 138, 137, 1)"})),u=i.Z.input(a||(a=(0,s.Z)(["\n  display: none;\n"]))),p=i.Z.span(l||(l=(0,s.Z)(["\n  display: inline;\n"])))},8925:(e,t,n)=>{n.r(t),n.d(t,{ComponentSelector:()=>r.ComponentSelector});var r=n(1966)},6542:(e,t,n)=>{n.r(t),n.d(t,{CustomRange:()=>s});var r=n(2791),o=n(1317),a=n(7754),l=n(3329);const s=e=>{let{value:t,onChange:n}=e;const[s,i]=(0,r.useState)(!1),[c,d]=(0,r.useState)(0);return(0,r.useEffect)((0,o.nM)("mousemove",(e=>{let{clientX:r}=e;if(s){const e=t+r-c;e>=0&&e<=450&&n(e)}})),[s]),(0,r.useEffect)((0,o.nM)("mouseup",(()=>{i(!1)})),[s]),(0,l.jsx)(a.RangeField,{children:(0,l.jsx)(a.RangeDial,{onMouseDown:e=>{let{clientX:t}=e;i(!0),d(t)},left:t})})}},1110:(e,t,n)=>{n.r(t),n.d(t,{CustomRangeField:()=>l});var r=n(2791),o=n(6542),a=n(3329);const l=()=>{const[e,t]=(0,r.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.CustomRange,{onChange:e=>{t(e)},value:e}),(0,a.jsx)("p",{children:e})]})}},7754:(e,t,n)=>{n.r(t),n.d(t,{RangeDial:()=>i,RangeField:()=>s});var r,o,a=n(168),l=n(9716);const s=l.Z.div(r||(r=(0,a.Z)(["\n  width: 500px;\n  height: 50px;\n  background-color: rgb(200, 200, 250);\n\n  position: relative;\n"]))),i=l.Z.div(o||(o=(0,a.Z)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 50px;\n  height: 50px;\n  background-color: rgb(100, 100, 250);\n"])),(e=>{let{left:t}=e;return t}))},9167:(e,t,n)=>{n.r(t),n.d(t,{CustomRangeField:()=>r.CustomRangeField});var r=n(1110)},4044:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>s});var r=n(2791),o=n(1317),a=n(1506),l=n(3329);const s=e=>{let{onChange:t,valueY:n,valueX:s,height:i,width:c,backgroundColor:d}=e;const[u,p]=(0,r.useState)(!1),[g,x]=(0,r.useState)(n),[h,v]=(0,r.useState)(s);return(0,r.useEffect)((0,o.nM)("mousemove",(e=>{let{clientY:r,clientX:o}=e;u&&t({valueY:n+r-g,valueX:s+o-h})})),[u]),(0,r.useEffect)((0,o.nM)("mouseup",(()=>{p(!1)})),[u]),(0,l.jsx)(a.DraggableComponentStyle,{onMouseDown:e=>{let{clientY:t,clientX:n}=e;p(!0),x(t),v(n)},top:n,left:s,height:i,width:c,backgroundColor:d})}},7979:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentField:()=>l});var r=n(2791),o=n(4044),a=n(3329);const l=()=>{const[e,t]=(0,r.useState)(200),[n,l]=(0,r.useState)(0);return(0,a.jsxs)("section",{children:[(0,a.jsx)(o.DraggableComponent,{valueY:e,valueX:n,onChange:e=>{let{valueY:n,valueX:r}=e;n>=200&&t(n),r>=0&&l(r)}}),(0,a.jsxs)("p",{children:["valueY=",e]}),(0,a.jsxs)("p",{children:["valueX=",n]})]})}},1506:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponentStyle:()=>a});var r,o=n(168);const a=n(9716).Z.div(r||(r=(0,o.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  height: ","px;\n\n  width: ","px;\n\n  background-color: ",";\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{backgroundColor:t}=e;return t}))},8040:(e,t,n)=>{n.r(t),n.d(t,{DraggableComponent:()=>r.DraggableComponent,DraggableComponentField:()=>o.DraggableComponentField});var r=n(4044),o=n(7979)},2569:(e,t,n)=>{n.r(t),n.d(t,{GradientHover:()=>s});var r=n(2791),o=n(3904),a=n(5724),l=n(3329);const s=()=>{const[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)({}),[i,c]=(0,r.useState)(-40),d=()=>{i>=n.offsetWidth+40?(c(-40),t(!1)):c(i+5)};return(0,r.useEffect)((()=>{const t=setInterval(d,5);return e||clearInterval(t),()=>{clearInterval(t)}}),[e,i]),(0,l.jsx)(a.GradientHoverStyleBase,{onMouseOver:e=>{s(e.target.parentNode),t(!0)},backgroundimage:(0,o.setLinearGradient)(i)})}},4645:(e,t,n)=>{n.r(t),n.d(t,{GradientHoverField:()=>l});var r=n(2569),o=n(3957),a=n(3329);const l=()=>(0,a.jsx)("div",{children:(0,a.jsxs)(o.GradientHoverFieldStyleBase,{children:["Gradient hover",(0,a.jsx)(r.GradientHover,{})]})})},3957:(e,t,n)=>{n.r(t),n.d(t,{GradientHoverFieldStyleBase:()=>a});var r,o=n(168);const a=n(9716).Z.div(r||(r=(0,o.Z)(["\n  height: 150px;\n  width: 800px;\n\n  background-color: black;\n  color: white;\n\n  position: relative;\n"])))},5724:(e,t,n)=>{n.r(t),n.d(t,{GradientHoverStyleBase:()=>a});var r,o=n(168);const a=n(9716).Z.div(r||(r=(0,o.Z)(["\n  position: absolute;\n\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n\n  background: none;\n  color: white;\n  background-image: ",";\n"])),(e=>{let{backgroundimage:t}=e;return t}))},4091:(e,t,n)=>{n.r(t),n.d(t,{GradientHover:()=>r.GradientHover,GradientHoverField:()=>o.GradientHoverField});var r=n(2569),o=n(4645)},3904:(e,t,n)=>{n.r(t),n.d(t,{setLinearGradient:()=>r});const r=e=>"linear-gradient(\n    to right,\n  rgba(255, 255, 255, 0),\n  rgba(255, 255, 255, 0)\n    ".concat(e,"px,\n  rgba(255, 255, 255, 1)\n    ").concat(e+20,"px,\n  rgba(255, 255, 255, 1)\n    ").concat(e+20,"px,\n  rgba(255, 255, 255, 0)\n    ").concat(e+40,"px\n  );")},5098:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>a});var r=n(2791),o=n(3329);const a=()=>{const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!1),[l,s]=(0,r.useState)(!1),[i,c]=(0,r.useState)(0),[d,u]=(0,r.useState)(0),[p,g]=(0,r.useState)(!1),x=(e,t)=>!(e||t);return(0,r.useEffect)((()=>{const t=x(e,n),r=x(e,t),o=x(t,n),a=x(r,o),l=x(a,a);g(l)}),[e,n,l]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:e&&(()=>{t(!1)})||(()=>{t(!0)}),children:["A: ",e?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:n&&(()=>{a(!1)})||(()=>{a(!0)}),children:["B: ",n?"true":"false"]}),(0,o.jsxs)("button",{type:"button",onClick:l&&(()=>{s(!1)})||(()=>{s(!0)}),children:["C: ",l?"true":"false"]}),(0,o.jsx)("p",{children:p?"true":"false"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=i+1;c(2===e?-1:e)},children:["D: ",i]}),(0,o.jsxs)("button",{type:"button",onClick:()=>{const e=d+1;u(2===e?-1:e)},children:["E: ",d]}),(0,o.jsx)("p",{children:(h=i,v=d,h<=v?h:v)}),(0,o.jsx)("p",{children:((e,t)=>e>=t?e:t)(i,d)})]})]});var h,v}},9287:(e,t,n)=>{n.r(t),n.d(t,{LogicGates:()=>r.LogicGates});var r=n(5098)},3999:(e,t,n)=>{n.r(t),n.d(t,{NavigationTest:()=>l});var r=n(2791),o=n(7689),a=n(3329);const l=()=>{const[e,t]=(0,r.useState)("test");return(0,a.jsxs)("section",{children:[(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t(e.currentTarget.elements.pageNameInput.value),e.currentTarget.reset()},children:[(0,a.jsx)("input",{name:"pageNameInput",type:"text",placeholder:"Enter page name"}),(0,a.jsx)("button",{type:"submit",children:"Enter"})]}),(0,a.jsx)(o.Fg,{to:"/".concat(e)})]})}},6005:(e,t,n)=>{n.r(t),n.d(t,{NavigationTest:()=>r.NavigationTest});var r=n(3999)},8082:(e,t,n)=>{n.r(t),n.d(t,{RecursionFunctionTest:()=>o});var r=n(3329);const o=()=>{const e=t=>0===t?0:3*t*(t-1)+1+e(t-1);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["Square of 0: ",e(0)]}),(0,r.jsxs)("p",{children:["Square of 1: ",e(1)]}),(0,r.jsxs)("p",{children:["Square of 2: ",e(2)]}),(0,r.jsxs)("p",{children:["Square of 3: ",e(3)]}),(0,r.jsxs)("p",{children:["Square of 4: ",e(4)]}),(0,r.jsxs)("p",{children:["Square of 5: ",e(5)]}),(0,r.jsxs)("p",{children:["Square of 6: ",e(6)]}),(0,r.jsxs)("p",{children:["Square of 7: ",e(7)]}),(0,r.jsxs)("p",{children:["Square of 8: ",e(8)]}),(0,r.jsxs)("p",{children:["Square of 9: ",e(9)]}),(0,r.jsxs)("p",{children:["Square of 10: ",e(10)]})]})}},5969:(e,t,n)=>{n.r(t),n.d(t,{RecursionFunctionTest:()=>r.RecursionFunctionTest});var r=n(8082)},9504:(e,t,n)=>{n.r(t),n.d(t,{TestPage:()=>h});var r=n(2791),o=n(8925),a=n(9287),l=n(9167),s=n(8040),i=n(5969),c=n(6005),d=n(4091),u=n(3051),p=n(1150),g=n(2082),x=n(3329);const h=()=>{const[e,t]=(0,r.useState)("Animation test");return(0,x.jsxs)("section",{children:[(0,x.jsx)(o.ComponentSelector,{componentNames:["Logic gates","Simplest custom range","Draggable component","Navigation test","Recursion","Gradient hover","Cellular automaton","Cellular automaton lite","Animation test"],initialComponentName:e,onChange:e=>{t(e)}}),"Logic gates"===e&&(0,x.jsx)(a.LogicGates,{}),"Simplest custom range"===e&&(0,x.jsx)(l.CustomRangeField,{}),"Draggable component"===e&&(0,x.jsx)(s.DraggableComponentField,{}),"Navigation test"===e&&(0,x.jsx)(c.NavigationTest,{}),"Recursion"===e&&(0,x.jsx)(i.RecursionFunctionTest,{}),"Gradient hover"===e&&(0,x.jsx)(d.GradientHoverField,{}),"Cellular automaton"===e&&(0,x.jsx)(u.CellularAutomaton,{}),"Cellular automaton lite"===e&&(0,x.jsx)(p.CellularAutomatonLite,{}),"Animation test"===e&&(0,x.jsx)(g.AnimationTest,{})]})}}}]);
//# sourceMappingURL=504.961b2794.chunk.js.map