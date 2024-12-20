"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[768,649,464,1,112,981],{78:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(791),a=n(610),l=n(329);const s=e=>{let{cars:t,onFavouriteClick:n}=e;const[s,i]=(0,r.useState)(!1),[o,c]=(0,r.useState)(null);return(0,l.jsxs)("section",{children:[s&&(0,l.jsx)(a.CarModal,{car:o,onClose:()=>{i(!1)}}),(0,l.jsx)(a.CarGallery,{cars:t,onLearnMoreClick:e=>{c(e),i(!0)},onFavouriteClick:n})]})}},727:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(791),a=n(610),l=n(329);const s=e=>{let{cars:t,onFavouriteClick:n}=e;const[s,i]=(0,r.useState)(!1),[o,c]=(0,r.useState)(null);return(0,l.jsxs)("section",{children:[s&&(0,l.jsx)(a.CarModal,{car:o,onClose:()=>{i(!1)}}),(0,l.jsx)(a.CarFilter,{}),(0,l.jsx)(a.CarGallery,{cars:t,onLearnMoreClick:e=>{c(e),i(!0)},onFavouriteClick:n})]})}},957:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(791),a=n(610),l=n(839),s=n(329);const i=()=>{const[e,t]=(0,r.useState)(0),[n,i]=(0,r.useState)([0,1]),[o,c]=(0,r.useState)([2]),[u,d]=(0,r.useState)(new Date);(0,r.useEffect)((0,a.handleInterval)((()=>{d(new Date)}),1e3),[]),(0,r.useEffect)((0,a.handleInterval)((()=>{t(e+1)}),500),[e]),(0,r.useEffect)((0,a.handleTimeOut)((()=>{n.length<16&&i([...n,n[n.length-1]+n[n.length-2]])}),1e3),[n]),(0,r.useEffect)((0,a.handleInterval)((()=>{let e=o[o.length-1];if(e>=100)return;let t=e;for(;;){t+=1;if(o.every((e=>t/e!==Math.floor(t/e))))break}c([...o,t])}),1e3),[o]);const[h,p]=(0,r.useState)([]);(0,r.useEffect)((()=>{h.length<10&&p([...h,Math.pow(h.length,2)])}),[h]);let m="",x=0,f=0,j=0,g=0;const C=e=>e.target.value;return(0,s.jsxs)("div",{children:[String(u),(0,s.jsx)("p",{children:e}),(0,s.jsx)("p",{children:n.join(", ")}),(0,s.jsx)("p",{children:o.join(", ")}),(0,s.jsx)("p",{children:h.join(", ")}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Car brand (make)"}),(0,s.jsx)("label",{htmlFor:"carMakeInput",children:(0,s.jsx)("input",{id:"carMakeInput",type:"text",placeholder:"Enter car make name or its part",onChange:e=>{m=C(e)},style:{width:"200px"}})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Car rental price"}),(0,s.jsx)("label",{htmlFor:"minCarRentalPriceInput",children:(0,s.jsx)("input",{id:"minCarRentalPriceInput",type:"number",placeholder:"From",onChange:e=>{x=C(e)}})}),(0,s.jsx)("label",{htmlFor:"maxCarRentalPriceInput",children:(0,s.jsx)("input",{id:"maxCarRentalPriceInput",type:"number",placeholder:"To",onChange:e=>{f=C(e)}})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Car mileage"}),(0,s.jsx)("label",{htmlFor:"minCarMileageInput",children:(0,s.jsx)("input",{id:"minCarMileageInput",type:"number",placeholder:"From",onChange:e=>{j=C(e)}})}),(0,s.jsx)("label",{htmlFor:"maxCarMileageInput",children:(0,s.jsx)("input",{id:"maxCarMileageInput",type:"number",placeholder:"To",onChange:e=>{g=C(e)}})})]}),(0,s.jsx)("button",{type:"submit",children:"Find car"})]}),(0,s.jsx)("span",{style:{fontFamily:"manrope-regular"},children:"Regular"}),(0,s.jsx)("span",{style:{fontFamily:"manrope-medium"},children:"Medium"}),(0,s.jsx)("span",{style:{fontFamily:"manrope-semibold"},children:"Semibold"}),(0,s.jsx)("span",{style:{fontFamily:"montserrat-regular"},children:"Regular"}),(0,s.jsx)("span",{style:{fontFamily:"montserrat-semibold"},children:"Semibold"}),(0,s.jsx)("div",{style:{backgroundColor:"black"},children:(0,s.jsx)(l.V,{name:"fav"})})]})}},167:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r,a,l=n(168),s=n(791),i=n(716),o=(n(839),n(329));const c=i.Z.section(r||(r=(0,l.Z)(["\n  height: 500px;\n  background-color: black;\n  position: relative;\n"]))),u=i.Z.div(a||(a=(0,l.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: ","px;\n  height: ","px;\n\n  border-radius: 50%;\n  background-image: radial-gradient(at center, white, white, black);\n"])),(e=>{let{top:t=0}=e;return t}),(e=>{let{left:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t})),d=()=>{const[e,t]=(0,s.useState)(0),[n,r]=(0,s.useState)(0),[a,l]=(0,s.useState)(0),[i,d]=(0,s.useState)(0),h=e=>Math.floor(Math.random()*e),p=()=>{l(h(500)),d(h(1e3)),t(h(100))},m=()=>{r(n>=e?0:n+1)};return(0,s.useEffect)((()=>{const e=setTimeout(p,1e3);return()=>{clearTimeout(e)}}),[e]),(0,s.useEffect)((()=>{const e=setTimeout(m,50);return()=>{clearTimeout(e)}}),[e,n]),(0,o.jsx)("div",{style:{fontFamily:"Montserrat-Regular"},children:(0,o.jsx)(c,{children:(0,o.jsx)(u,{top:a,left:i,size:n})})})}},812:(e,t,n)=>{n.r(t),n.d(t,{FavouriteCarsPage:()=>s.default,MainPage:()=>r.default,TestPageOne:()=>a.default,TestPageTwo:()=>l.default});var r=n(727),a=n(957),l=n(167),s=n(78)}}]);
//# sourceMappingURL=768.4e0fcf97.chunk.js.map