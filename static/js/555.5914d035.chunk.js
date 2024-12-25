"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[555,111,589,944,338,516,390,566,319,364,401,42,631,551,788,60,499,4,562,746,729,880,493,171,255,234,367,873,924],{2111:(e,a,t)=>{t.r(a),t.d(a,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=t(9924)},8944:(e,a,t)=>{t.r(a),t.d(a,{CarFilterTest:()=>l});var r=t(3329);const l=()=>{let e="",a=0,t=0,l=0,n=0;const s=e=>e.target.value;return(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car brand (make)"}),(0,r.jsx)("label",{htmlFor:"carMakeInput",children:(0,r.jsx)("input",{id:"carMakeInput",type:"text",placeholder:"Enter car make name or its part",onChange:a=>{e=s(a)},style:{width:"200px"}})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car rental price"}),(0,r.jsx)("label",{htmlFor:"minCarRentalPriceInput",children:(0,r.jsx)("input",{id:"minCarRentalPriceInput",type:"number",placeholder:"From",onChange:e=>{a=s(e)}})}),(0,r.jsx)("label",{htmlFor:"maxCarRentalPriceInput",children:(0,r.jsx)("input",{id:"maxCarRentalPriceInput",type:"number",placeholder:"To",onChange:e=>{t=s(e)}})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car mileage"}),(0,r.jsx)("label",{htmlFor:"minCarMileageInput",children:(0,r.jsx)("input",{id:"minCarMileageInput",type:"number",placeholder:"From",onChange:e=>{l=s(e)}})}),(0,r.jsx)("label",{htmlFor:"maxCarMileageInput",children:(0,r.jsx)("input",{id:"maxCarMileageInput",type:"number",placeholder:"To",onChange:e=>{n=s(e)}})})]}),(0,r.jsx)("button",{type:"submit",children:"Find car"})]})}},8589:(e,a,t)=>{t.r(a),t.d(a,{CarFilterTest:()=>r.CarFilterTest});var r=t(8944)},2516:(e,a,t)=>{t.r(a),t.d(a,{DateAndTimeTest:()=>s});var r=t(2791),l=t(5390),n=t(3329);const s=()=>{const[e,a]=(0,r.useState)(0),[t,s]=(0,r.useState)(new Date);return(0,r.useEffect)((0,l.handleInterval)((()=>{s(new Date)}),1e3),[]),(0,r.useEffect)((0,l.handleInterval)((()=>{a(e+1)}),500),[e]),(0,n.jsxs)("div",{children:[String(t),(0,n.jsx)("p",{children:e})]})}},5390:(e,a,t)=>{t.r(a),t.d(a,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=t(873)},9338:(e,a,t)=>{t.r(a),t.d(a,{DateAndTimeTest:()=>r.DateAndTimeTest});var r=t(2516)},3319:(e,a,t)=>{t.r(a),t.d(a,{FibonacciTest:()=>s});var r=t(2791),l=t(2364),n=t(3329);const s=()=>{const[e,a]=(0,r.useState)([0,1]);return(0,r.useEffect)((0,l.handleTimeOut)((()=>{e.length<16&&a([...e,e[e.length-1]+e[e.length-2]])}),1e3),[e]),(0,n.jsx)("p",{children:e.join(", ")})}},2364:(e,a,t)=>{t.r(a),t.d(a,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=t(873)},9566:(e,a,t)=>{t.r(a),t.d(a,{FibonacciTest:()=>r.FibonacciTest});var r=t(3319)},8042:(e,a,t)=>{t.r(a),t.d(a,{FontsAndSVGimagesTest:()=>n});var r=t(7631),l=t(3329);const n=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{style:{fontFamily:"manrope-regular"},children:"Regular"}),(0,l.jsx)("span",{style:{fontFamily:"manrope-medium"},children:"Medium"}),(0,l.jsx)("span",{style:{fontFamily:"manrope-semibold"},children:"Semibold"}),(0,l.jsx)("span",{style:{fontFamily:"montserrat-regular"},children:"Regular"}),(0,l.jsx)("span",{style:{fontFamily:"montserrat-semibold"},children:"Semibold"}),(0,l.jsx)("div",{style:{backgroundColor:"black"},children:(0,l.jsx)(r.SVGimage,{name:"fav"})})]})},7631:(e,a,t)=>{t.r(a),t.d(a,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=t(873)},6401:(e,a,t)=>{t.r(a),t.d(a,{FontsAndSVGimagesTest:()=>r.FontsAndSVGimagesTest});var r=t(8042)},7788:(e,a,t)=>{t.r(a),t.d(a,{MoirTest:()=>o});var r,l=t(168),n=t(2791),s=t(9716),d=t(6060),i=t(3329);const c=s.Z.div(r||(r=(0,l.Z)(["\n  postion: relative;\n"]))),o=()=>{const[e,a]=(0,n.useState)(200),[t,r]=(0,n.useState)(200);return(0,n.useEffect)((()=>{const t=t=>{"keydown"===t.type&&"w"===t.key&&a(e-1),"keydown"===t.type&&"s"===t.key&&a(e+1)};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}),[e]),(0,n.useEffect)((()=>{const a=a=>{"keydown"===a.type&&"a"===a.key&&r(e-1),"keydown"===a.type&&"d"===a.key&&r(e+1)};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}}),[]),(0,i.jsxs)(c,{children:[(0,i.jsx)(d.StripedSquare,{top:e,left:t}),(0,i.jsx)(d.StripedSquare,{top:300,left:300})]})}},6060:(e,a,t)=>{t.r(a),t.d(a,{StripedSquare:()=>u});var r,l,n=t(168),s=t(2791),d=t(9716),i=t(3329);const c=d.Z.div(r||(r=(0,n.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n\n  height: 250px;\n  width: 250px;\n\n  display: flex;\n  flex-direction: column;\n"])),(e=>{let{top:a}=e;return a}),(e=>{let{left:a}=e;return a})),o=d.Z.div(l||(l=(0,n.Z)(["\n  height: 10px;\n  width: 250px;\n  background: ",";\n"])),(e=>{let{color:a}=e;return a})),u=e=>{let{top:a,left:t}=e;const[r,l]=(0,s.useState)([]);return(0,s.useEffect)((()=>{r.length>=25||l([...r,(0,i.jsx)(o,{color:r.length%2===0?"rgba(0, 0, 250, 0.5)":"none"},r.length+1)])}),[r]),(0,i.jsx)(c,{top:a,left:t,children:r})}},8551:(e,a,t)=>{t.r(a),t.d(a,{MoirTest:()=>r.MoirTest});var r=t(7788)},4:(e,a,t)=>{t.r(a),t.d(a,{PageNavigationTest:()=>l});var r=t(3329);const l=e=>{let{pages:a,onChange:t,currentPageName:l}=e;const n=e=>{t(a.find((a=>{let{name:t}=a;return e.target.value===t})))};return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{children:a.map((e=>{let{name:a}=e;return(0,r.jsx)("li",{children:(0,r.jsxs)("label",{htmlFor:a,children:[(0,r.jsx)("input",{id:a,name:"pageSwitcher",type:"radio",onChange:n,value:a,checked:l===a}),(0,r.jsx)("span",{children:a})]})},a)}))})})}},6499:(e,a,t)=>{t.r(a),t.d(a,{PageNavigationTest:()=>r.PageNavigationTest});var r=t(4)},3746:(e,a,t)=>{t.r(a),t.d(a,{PrimeNumbersTest:()=>s});var r=t(2791),l=t(729),n=t(3329);const s=()=>{const[e,a]=(0,r.useState)([2]);return(0,r.useEffect)((0,l.handleInterval)((()=>{let t=e[e.length-1];if(t>=100)return;let r=t;for(;;){r+=1;if(e.every((e=>r/e!==Math.floor(r/e))))break}a([...e,r])}),1e3),[e]),(0,n.jsx)("p",{children:e.join(", ")})}},729:(e,a,t)=>{t.r(a),t.d(a,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=t(873)},562:(e,a,t)=>{t.r(a),t.d(a,{PrimeNumbersTest:()=>r.PrimeNumbersTest});var r=t(3746)},493:(e,a,t)=>{t.r(a),t.d(a,{SquaresTest:()=>n});var r=t(2791),l=t(3329);const n=()=>{const[e,a]=(0,r.useState)([]);return(0,r.useEffect)((()=>{e.length<10&&a([...e,Math.pow(e.length,2)])}),[e]),(0,l.jsx)("p",{children:e.join(", ")})}},4880:(e,a,t)=>{t.r(a),t.d(a,{SquaresTest:()=>r.SquaresTest});var r=t(493)},7255:(e,a,t)=>{t.r(a),t.d(a,{StarsEffectTest:()=>u});var r,l,n=t(168),s=t(2791),d=t(9716),i=t(3329);const c=d.Z.section(r||(r=(0,n.Z)(["\n  height: 500px;\n  background-color: black;\n  position: relative;\n"]))),o=d.Z.div(l||(l=(0,n.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: ","px;\n  height: ","px;\n\n  border-radius: 50%;\n  background-image: radial-gradient(at center, white, white, black);\n"])),(e=>{let{top:a=0}=e;return a}),(e=>{let{left:a=0}=e;return a}),(e=>{let{size:a=0}=e;return a}),(e=>{let{size:a=0}=e;return a})),u=()=>{const[e,a]=(0,s.useState)(0),[t,r]=(0,s.useState)(0),[l,n]=(0,s.useState)(0),[d,u]=(0,s.useState)(0),h=e=>Math.floor(Math.random()*e),C=()=>{n(h(500)),u(h(1e3)),a(h(100))},m=()=>{r(t>=e?0:t+1)};return(0,s.useEffect)((()=>{const e=setTimeout(C,1e3);return()=>{clearTimeout(e)}}),[e]),(0,s.useEffect)((()=>{const e=setTimeout(m,50);return()=>{clearTimeout(e)}}),[e,t]),(0,i.jsx)("div",{style:{fontFamily:"Montserrat-Regular"},children:(0,i.jsx)(c,{children:(0,i.jsx)(o,{top:l,left:d,size:t})})})}},5171:(e,a,t)=>{t.r(a),t.d(a,{StarsEffectTest:()=>r.StarsEffectTest});var r=t(7255)},3367:(e,a,t)=>{t.r(a),t.d(a,{TestPageLayout:()=>s});var r=t(1087),l=t(7689),n=t(3329);const s=()=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(r.OL,{to:"tests",children:"Various tests"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r.OL,{to:"stars",children:"Stars effect test"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r.OL,{to:"moir",children:"Moir test"})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(l.j3,{})})]})},5234:(e,a,t)=>{t.r(a),t.d(a,{TestPageLayout:()=>r.TestPageLayout});var r=t(3367)},873:(e,a,t)=>{t.r(a),t.d(a,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=t(2111)},1555:(e,a,t)=>{t.r(a),t.d(a,{CarFilterTest:()=>r.CarFilterTest,DateAndTimeTest:()=>s.DateAndTimeTest,FibonacciTest:()=>l.FibonacciTest,FontsAndSVGimagesTest:()=>d.FontsAndSVGimagesTest,MoirTest:()=>h.MoirTest,PageNavigationTest:()=>o.PageNavigationTest,PrimeNumbersTest:()=>n.PrimeNumbersTest,SquaresTest:()=>i.SquaresTest,StarsEffectTest:()=>c.StarsEffectTest,TestPageLayout:()=>u.TestPageLayout});var r=t(8589),l=t(9566),n=t(562),s=t(9338),d=t(6401),i=t(4880),c=t(5171),o=t(6499),u=t(5234),h=t(8551)},9924:(e,a,t)=>{t.r(a),t.d(a,{CarFilter:()=>n.Pc,CarGallery:()=>n.iq,CarModal:()=>n.qd,SVGimage:()=>d.V,carModel:()=>l.Ws,carsLocalData:()=>r.A,getCarModel:()=>l.cP,getSelectedCars:()=>l.Bz,handleEventListener:()=>l.nM,handleInterval:()=>l.HZ,handleTimeOut:()=>l.s2,makesLocalData:()=>r.R,selectedCars:()=>l.nI,setCarModel:()=>l.aM,setSelectedCars:()=>l.Ng,vanillaReducer:()=>s.YH});var r=t(1133),l=t(1317),n=t(4163),s=t(6229),d=t(839)}}]);
//# sourceMappingURL=555.5914d035.chunk.js.map