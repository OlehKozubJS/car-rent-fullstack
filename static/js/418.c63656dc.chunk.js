"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[418,928,216,111,555,589,944,338,516,390,566,319,364,401,42,631,562,746,729,880,493,873,924],{1928:(e,a,r)=>{r.r(a),r.d(a,{default:()=>l});r(1555);var t=r(3329);const l=()=>(0,t.jsx)("div",{})},1216:(e,a,r)=>{r.r(a),r.d(a,{default:()=>C});var t,l,s=r(168),n=r(2791),d=r(9716),i=(r(839),r(3329));const c=d.Z.section(t||(t=(0,s.Z)(["\n  height: 500px;\n  background-color: black;\n  position: relative;\n"]))),o=d.Z.div(l||(l=(0,s.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: ","px;\n  height: ","px;\n\n  border-radius: 50%;\n  background-image: radial-gradient(at center, white, white, black);\n"])),(e=>{let{top:a=0}=e;return a}),(e=>{let{left:a=0}=e;return a}),(e=>{let{size:a=0}=e;return a}),(e=>{let{size:a=0}=e;return a})),C=()=>{const[e,a]=(0,n.useState)(0),[r,t]=(0,n.useState)(0),[l,s]=(0,n.useState)(0),[d,C]=(0,n.useState)(0),u=e=>Math.floor(Math.random()*e),m=()=>{s(u(500)),C(u(1e3)),a(u(100))},h=()=>{t(r>=e?0:r+1)};return(0,n.useEffect)((()=>{const e=setTimeout(m,1e3);return()=>{clearTimeout(e)}}),[e]),(0,n.useEffect)((()=>{const e=setTimeout(h,50);return()=>{clearTimeout(e)}}),[e,r]),(0,i.jsx)("div",{style:{fontFamily:"Montserrat-Regular"},children:(0,i.jsx)(c,{children:(0,i.jsx)(o,{top:l,left:d,size:r})})})}},2111:(e,a,r)=>{r.r(a),r.d(a,{CarFilter:()=>t.CarFilter,CarGallery:()=>t.CarGallery,CarModal:()=>t.CarModal,SVGimage:()=>t.SVGimage,carModel:()=>t.carModel,carsLocalData:()=>t.carsLocalData,getCarModel:()=>t.getCarModel,getSelectedCars:()=>t.getSelectedCars,handleEventListener:()=>t.handleEventListener,handleInterval:()=>t.handleInterval,handleTimeOut:()=>t.handleTimeOut,makesLocalData:()=>t.makesLocalData,selectedCars:()=>t.selectedCars,setCarModel:()=>t.setCarModel,setSelectedCars:()=>t.setSelectedCars,vanillaReducer:()=>t.vanillaReducer});var t=r(9924)},418:(e,a,r)=>{r.r(a),r.d(a,{TestPageOne:()=>t.default,TestPageTwo:()=>l.default});var t=r(1928),l=r(1216)},8944:(e,a,r)=>{r.r(a),r.d(a,{CarFilterTest:()=>l});var t=r(3329);const l=()=>{let e="",a=0,r=0,l=0,s=0;const n=e=>e.target.value;return(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Car brand (make)"}),(0,t.jsx)("label",{htmlFor:"carMakeInput",children:(0,t.jsx)("input",{id:"carMakeInput",type:"text",placeholder:"Enter car make name or its part",onChange:a=>{e=n(a)},style:{width:"200px"}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Car rental price"}),(0,t.jsx)("label",{htmlFor:"minCarRentalPriceInput",children:(0,t.jsx)("input",{id:"minCarRentalPriceInput",type:"number",placeholder:"From",onChange:e=>{a=n(e)}})}),(0,t.jsx)("label",{htmlFor:"maxCarRentalPriceInput",children:(0,t.jsx)("input",{id:"maxCarRentalPriceInput",type:"number",placeholder:"To",onChange:e=>{r=n(e)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Car mileage"}),(0,t.jsx)("label",{htmlFor:"minCarMileageInput",children:(0,t.jsx)("input",{id:"minCarMileageInput",type:"number",placeholder:"From",onChange:e=>{l=n(e)}})}),(0,t.jsx)("label",{htmlFor:"maxCarMileageInput",children:(0,t.jsx)("input",{id:"maxCarMileageInput",type:"number",placeholder:"To",onChange:e=>{s=n(e)}})})]}),(0,t.jsx)("button",{type:"submit",children:"Find car"})]})}},8589:(e,a,r)=>{r.r(a),r.d(a,{CarFilterTest:()=>t.CarFilterTest});var t=r(8944)},2516:(e,a,r)=>{r.r(a),r.d(a,{DateAndTimeTest:()=>n});var t=r(2791),l=r(5390),s=r(3329);const n=()=>{const[e,a]=(0,t.useState)(0),[r,n]=(0,t.useState)(new Date);return(0,t.useEffect)((0,l.handleInterval)((()=>{n(new Date)}),1e3),[]),(0,t.useEffect)((0,l.handleInterval)((()=>{a(e+1)}),500),[e]),(0,s.jsxs)("div",{children:[String(r),(0,s.jsx)("p",{children:e})]})}},5390:(e,a,r)=>{r.r(a),r.d(a,{CarFilter:()=>t.CarFilter,CarGallery:()=>t.CarGallery,CarModal:()=>t.CarModal,SVGimage:()=>t.SVGimage,carModel:()=>t.carModel,carsLocalData:()=>t.carsLocalData,getCarModel:()=>t.getCarModel,getSelectedCars:()=>t.getSelectedCars,handleEventListener:()=>t.handleEventListener,handleInterval:()=>t.handleInterval,handleTimeOut:()=>t.handleTimeOut,makesLocalData:()=>t.makesLocalData,selectedCars:()=>t.selectedCars,setCarModel:()=>t.setCarModel,setSelectedCars:()=>t.setSelectedCars,vanillaReducer:()=>t.vanillaReducer});var t=r(873)},9338:(e,a,r)=>{r.r(a),r.d(a,{DateAndTimeTest:()=>t.DateAndTimeTest});var t=r(2516)},3319:(e,a,r)=>{r.r(a),r.d(a,{FibonacciTest:()=>n});var t=r(2791),l=r(2364),s=r(3329);const n=()=>{const[e,a]=(0,t.useState)([0,1]);return(0,t.useEffect)((0,l.handleTimeOut)((()=>{e.length<16&&a([...e,e[e.length-1]+e[e.length-2]])}),1e3),[e]),(0,s.jsx)("p",{children:e.join(", ")})}},2364:(e,a,r)=>{r.r(a),r.d(a,{CarFilter:()=>t.CarFilter,CarGallery:()=>t.CarGallery,CarModal:()=>t.CarModal,SVGimage:()=>t.SVGimage,carModel:()=>t.carModel,carsLocalData:()=>t.carsLocalData,getCarModel:()=>t.getCarModel,getSelectedCars:()=>t.getSelectedCars,handleEventListener:()=>t.handleEventListener,handleInterval:()=>t.handleInterval,handleTimeOut:()=>t.handleTimeOut,makesLocalData:()=>t.makesLocalData,selectedCars:()=>t.selectedCars,setCarModel:()=>t.setCarModel,setSelectedCars:()=>t.setSelectedCars,vanillaReducer:()=>t.vanillaReducer});var t=r(873)},9566:(e,a,r)=>{r.r(a),r.d(a,{FibonacciTest:()=>t.FibonacciTest});var t=r(3319)},8042:(e,a,r)=>{r.r(a),r.d(a,{FontsAndSVGimagesTest:()=>s});var t=r(7631),l=r(3329);const s=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{style:{fontFamily:"manrope-regular"},children:"Regular"}),(0,l.jsx)("span",{style:{fontFamily:"manrope-medium"},children:"Medium"}),(0,l.jsx)("span",{style:{fontFamily:"manrope-semibold"},children:"Semibold"}),(0,l.jsx)("span",{style:{fontFamily:"montserrat-regular"},children:"Regular"}),(0,l.jsx)("span",{style:{fontFamily:"montserrat-semibold"},children:"Semibold"}),(0,l.jsx)("div",{style:{backgroundColor:"black"},children:(0,l.jsx)(t.SVGimage,{name:"fav"})})]})},7631:(e,a,r)=>{r.r(a),r.d(a,{CarFilter:()=>t.CarFilter,CarGallery:()=>t.CarGallery,CarModal:()=>t.CarModal,SVGimage:()=>t.SVGimage,carModel:()=>t.carModel,carsLocalData:()=>t.carsLocalData,getCarModel:()=>t.getCarModel,getSelectedCars:()=>t.getSelectedCars,handleEventListener:()=>t.handleEventListener,handleInterval:()=>t.handleInterval,handleTimeOut:()=>t.handleTimeOut,makesLocalData:()=>t.makesLocalData,selectedCars:()=>t.selectedCars,setCarModel:()=>t.setCarModel,setSelectedCars:()=>t.setSelectedCars,vanillaReducer:()=>t.vanillaReducer});var t=r(873)},6401:(e,a,r)=>{r.r(a),r.d(a,{FontsAndSVGimagesTest:()=>t.FontsAndSVGimagesTest});var t=r(8042)},3746:(e,a,r)=>{r.r(a),r.d(a,{PrimeNumbersTest:()=>n});var t=r(2791),l=r(729),s=r(3329);const n=()=>{const[e,a]=(0,t.useState)([2]);return(0,t.useEffect)((0,l.handleInterval)((()=>{let r=e[e.length-1];if(r>=100)return;let t=r;for(;;){t+=1;if(e.every((e=>t/e!==Math.floor(t/e))))break}a([...e,t])}),1e3),[e]),(0,s.jsx)("p",{children:e.join(", ")})}},729:(e,a,r)=>{r.r(a),r.d(a,{CarFilter:()=>t.CarFilter,CarGallery:()=>t.CarGallery,CarModal:()=>t.CarModal,SVGimage:()=>t.SVGimage,carModel:()=>t.carModel,carsLocalData:()=>t.carsLocalData,getCarModel:()=>t.getCarModel,getSelectedCars:()=>t.getSelectedCars,handleEventListener:()=>t.handleEventListener,handleInterval:()=>t.handleInterval,handleTimeOut:()=>t.handleTimeOut,makesLocalData:()=>t.makesLocalData,selectedCars:()=>t.selectedCars,setCarModel:()=>t.setCarModel,setSelectedCars:()=>t.setSelectedCars,vanillaReducer:()=>t.vanillaReducer});var t=r(873)},562:(e,a,r)=>{r.r(a),r.d(a,{PrimeNumbersTest:()=>t.PrimeNumbersTest});var t=r(3746)},493:(e,a,r)=>{r.r(a),r.d(a,{SquaresTest:()=>s});var t=r(2791),l=r(3329);const s=()=>{const[e,a]=(0,t.useState)([]);return(0,t.useEffect)((()=>{e.length<10&&a([...e,Math.pow(e.length,2)])}),[e]),(0,l.jsx)("p",{children:e.join(", ")})}},4880:(e,a,r)=>{r.r(a),r.d(a,{SquaresTest:()=>t.SquaresTest});var t=r(493)},873:(e,a,r)=>{r.r(a),r.d(a,{CarFilter:()=>t.CarFilter,CarGallery:()=>t.CarGallery,CarModal:()=>t.CarModal,SVGimage:()=>t.SVGimage,carModel:()=>t.carModel,carsLocalData:()=>t.carsLocalData,getCarModel:()=>t.getCarModel,getSelectedCars:()=>t.getSelectedCars,handleEventListener:()=>t.handleEventListener,handleInterval:()=>t.handleInterval,handleTimeOut:()=>t.handleTimeOut,makesLocalData:()=>t.makesLocalData,selectedCars:()=>t.selectedCars,setCarModel:()=>t.setCarModel,setSelectedCars:()=>t.setSelectedCars,vanillaReducer:()=>t.vanillaReducer});var t=r(2111)},1555:(e,a,r)=>{r.r(a),r.d(a,{CarFilterTest:()=>t.CarFilterTest,DateAndTimeTest:()=>n.DateAndTimeTest,FibonacciTest:()=>l.FibonacciTest,FontsAndSVGimagesTest:()=>d.FontsAndSVGimagesTest,PrimeNumbersTest:()=>s.PrimeNumbersTest,SquaresTest:()=>i.SquaresTest});var t=r(8589),l=r(9566),s=r(562),n=r(9338),d=r(6401),i=r(4880)},9924:(e,a,r)=>{r.r(a),r.d(a,{CarFilter:()=>s.Pc,CarGallery:()=>s.iq,CarModal:()=>s.qd,SVGimage:()=>d.V,carModel:()=>l.Ws,carsLocalData:()=>t.A,getCarModel:()=>l.cP,getSelectedCars:()=>l.Bz,handleEventListener:()=>l.nM,handleInterval:()=>l.HZ,handleTimeOut:()=>l.s2,makesLocalData:()=>t.R,selectedCars:()=>l.nI,setCarModel:()=>l.aM,setSelectedCars:()=>l.Ng,vanillaReducer:()=>n.YH});var t=r(1133),l=r(1317),s=r(8784),n=r(6229),d=r(839)}}]);
//# sourceMappingURL=418.c63656dc.chunk.js.map