"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[957,924],{957:(e,a,l)=>{l.r(a),l.d(a,{default:()=>i});var n=l(791),t=l(924),r=l(839),s=l(329);const i=()=>{const[e,a]=(0,n.useState)(0),[l,i]=(0,n.useState)([0,1]),[d,c]=(0,n.useState)([2]),[h,o]=(0,n.useState)(new Date);(0,n.useEffect)((0,t.handleInterval)((()=>{o(new Date)}),1e3),[]),(0,n.useEffect)((0,t.handleInterval)((()=>{a(e+1)}),500),[e]),(0,n.useEffect)((0,t.handleTimeOut)((()=>{l.length<16&&i([...l,l[l.length-1]+l[l.length-2]])}),1e3),[l]),(0,n.useEffect)((0,t.handleInterval)((()=>{let e=d[d.length-1];if(e>=100)return;let a=e;for(;;){a+=1;if(d.every((e=>a/e!==Math.floor(a/e))))break}c([...d,a])}),1e3),[d]);const[u,m]=(0,n.useState)([]);(0,n.useEffect)((()=>{u.length<10&&m([...u,Math.pow(u.length,2)])}),[u]);let p="",x=0,j=0,f=0,C=0;const g=e=>e.target.value;return(0,s.jsxs)("div",{children:[String(h),(0,s.jsx)("p",{children:e}),(0,s.jsx)("p",{children:l.join(", ")}),(0,s.jsx)("p",{children:d.join(", ")}),(0,s.jsx)("p",{children:u.join(", ")}),(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Car brand (make)"}),(0,s.jsx)("label",{htmlFor:"carMakeInput",children:(0,s.jsx)("input",{id:"carMakeInput",type:"text",placeholder:"Enter car make name or its part",onChange:e=>{p=g(e)},style:{width:"200px"}})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Car rental price"}),(0,s.jsx)("label",{htmlFor:"minCarRentalPriceInput",children:(0,s.jsx)("input",{id:"minCarRentalPriceInput",type:"number",placeholder:"From",onChange:e=>{x=g(e)}})}),(0,s.jsx)("label",{htmlFor:"maxCarRentalPriceInput",children:(0,s.jsx)("input",{id:"maxCarRentalPriceInput",type:"number",placeholder:"To",onChange:e=>{j=g(e)}})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Car mileage"}),(0,s.jsx)("label",{htmlFor:"minCarMileageInput",children:(0,s.jsx)("input",{id:"minCarMileageInput",type:"number",placeholder:"From",onChange:e=>{f=g(e)}})}),(0,s.jsx)("label",{htmlFor:"maxCarMileageInput",children:(0,s.jsx)("input",{id:"maxCarMileageInput",type:"number",placeholder:"To",onChange:e=>{C=g(e)}})})]}),(0,s.jsx)("button",{type:"submit",children:"Find car"})]}),(0,s.jsx)("span",{style:{fontFamily:"manrope-regular"},children:"Regular"}),(0,s.jsx)("span",{style:{fontFamily:"manrope-medium"},children:"Medium"}),(0,s.jsx)("span",{style:{fontFamily:"manrope-semibold"},children:"Semibold"}),(0,s.jsx)("span",{style:{fontFamily:"montserrat-regular"},children:"Regular"}),(0,s.jsx)("span",{style:{fontFamily:"montserrat-semibold"},children:"Semibold"}),(0,s.jsx)("div",{style:{backgroundColor:"black"},children:(0,s.jsx)(r.V,{name:"fav"})})]})}},924:(e,a,l)=>{l.r(a),l.d(a,{CarFilter:()=>r.Pc,CarGallery:()=>r.iq,CarModal:()=>r.qd,carModel:()=>t.Ws,carsLocalData:()=>n.A,getCarModel:()=>t.cP,getSelectedCars:()=>t.Bz,handleEventListener:()=>t.nM,handleInterval:()=>t.HZ,handleTimeOut:()=>t.s2,makesLocalData:()=>n.R,selectedCars:()=>t.nI,setCarModel:()=>t.aM,setSelectedCars:()=>t.Ng});var n=l(133),t=l(317),r=l(784)}}]);
//# sourceMappingURL=957.63ea2728.chunk.js.map