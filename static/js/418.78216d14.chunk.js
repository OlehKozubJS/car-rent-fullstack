"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[418,928,216,111,555,589,944,338,516,390,566,319,364,401,42,631,551,788,60,26,499,4,562,746,729,880,493,171,255,234,367,873,543,871,924],{1928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(7689),l=a(1555),s=a(3329);const n=()=>(0,s.jsx)(r.Z5,{children:(0,s.jsxs)(r.AW,{path:"/",element:(0,s.jsx)(l.TestPageLayout,{}),children:[(0,s.jsxs)(r.AW,{path:"tests",element:(0,s.jsx)(r.j3,{}),children:[(0,s.jsx)(r.AW,{path:"dateAndTime",element:(0,s.jsx)(l.DateAndTimeTest,{})}),(0,s.jsx)(r.AW,{path:"fibonacci",elemnt:(0,s.jsx)(l.FibonacciTest,{})}),(0,s.jsx)(r.AW,{path:"primeNumbers",element:(0,s.jsx)(l.PrimeNumbersTest,{})}),(0,s.jsx)(r.AW,{path:"squares",element:(0,s.jsx)(l.SquaresTest,{})}),(0,s.jsx)(r.AW,{path:"fontsAndSVGimages",element:(0,s.jsx)(l.FontsAndSVGimagesTest,{})}),(0,s.jsx)(r.AW,{path:"carFilter",element:(0,s.jsx)(l.CarFilterTest,{})})]}),(0,s.jsx)(r.AW,{path:"stars",element:(0,s.jsx)(l.StarsEffectTest,{})}),(0,s.jsx)(r.AW,{path:"moir",element:(0,s.jsx)(l.MoirTest,{})})]})})},1216:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r,l,s=a(168),n=a(2791),d=a(9716),i=a(3329);const o=d.Z.section(r||(r=(0,s.Z)(["\n  height: 500px;\n  background-color: black;\n  position: relative;\n"]))),c=d.Z.div(l||(l=(0,s.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: ","px;\n  height: ","px;\n\n  border-radius: 50%;\n  background-image: radial-gradient(at center, white, white, black);\n"])),(e=>{let{top:t=0}=e;return t}),(e=>{let{left:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t})),u=()=>{const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[l,s]=(0,n.useState)(0),[d,u]=(0,n.useState)(0),h=e=>Math.floor(Math.random()*e),m=()=>{s(h(500)),u(h(1e3)),t(h(100))},C=()=>{r(a>=e?0:a+1)};return(0,n.useEffect)((()=>{const e=setTimeout(m,1e3);return()=>{clearTimeout(e)}}),[e]),(0,n.useEffect)((()=>{const e=setTimeout(C,50);return()=>{clearTimeout(e)}}),[e,a]),(0,i.jsx)("div",{style:{fontFamily:"Montserrat-Regular"},children:(0,i.jsx)(o,{children:(0,i.jsx)(c,{top:l,left:d,size:a})})})}},2111:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(9924)},418:(e,t,a)=>{a.r(t),a.d(t,{TestPageOne:()=>r.default,TestPageTwo:()=>l.default});var r=a(1928),l=a(1216)},8944:(e,t,a)=>{a.r(t),a.d(t,{CarFilterTest:()=>l});var r=a(3329);const l=()=>{let e="",t=0,a=0,l=0,s=0;const n=e=>e.target.value;return(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car brand (make)"}),(0,r.jsx)("label",{htmlFor:"carMakeInput",children:(0,r.jsx)("input",{id:"carMakeInput",type:"text",placeholder:"Enter car make name or its part",onChange:t=>{e=n(t)},style:{width:"200px"}})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car rental price"}),(0,r.jsx)("label",{htmlFor:"minCarRentalPriceInput",children:(0,r.jsx)("input",{id:"minCarRentalPriceInput",type:"number",placeholder:"From",onChange:e=>{t=n(e)}})}),(0,r.jsx)("label",{htmlFor:"maxCarRentalPriceInput",children:(0,r.jsx)("input",{id:"maxCarRentalPriceInput",type:"number",placeholder:"To",onChange:e=>{a=n(e)}})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car mileage"}),(0,r.jsx)("label",{htmlFor:"minCarMileageInput",children:(0,r.jsx)("input",{id:"minCarMileageInput",type:"number",placeholder:"From",onChange:e=>{l=n(e)}})}),(0,r.jsx)("label",{htmlFor:"maxCarMileageInput",children:(0,r.jsx)("input",{id:"maxCarMileageInput",type:"number",placeholder:"To",onChange:e=>{s=n(e)}})})]}),(0,r.jsx)("button",{type:"submit",children:"Find car"})]})}},8589:(e,t,a)=>{a.r(t),a.d(t,{CarFilterTest:()=>r.CarFilterTest});var r=a(8944)},2516:(e,t,a)=>{a.r(t),a.d(t,{DateAndTimeTest:()=>n});var r=a(2791),l=a(5390),s=a(3329);const n=()=>{const[e,t]=(0,r.useState)(0),[a,n]=(0,r.useState)(new Date);return(0,r.useEffect)((0,l.handleInterval)((()=>{n(new Date)}),1e3),[]),(0,r.useEffect)((0,l.handleInterval)((()=>{t(e+1)}),500),[e]),(0,s.jsxs)("div",{children:[String(a),(0,s.jsx)("p",{children:e})]})}},5390:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(873)},9338:(e,t,a)=>{a.r(t),a.d(t,{DateAndTimeTest:()=>r.DateAndTimeTest});var r=a(2516)},3319:(e,t,a)=>{a.r(t),a.d(t,{FibonacciTest:()=>n});var r=a(2791),l=a(2364),s=a(3329);const n=()=>{const[e,t]=(0,r.useState)([0,1]);return(0,r.useEffect)((0,l.handleTimeOut)((()=>{e.length<16&&t([...e,e[e.length-1]+e[e.length-2]])}),1e3),[e]),(0,s.jsx)("p",{children:e.join(", ")})}},2364:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(873)},9566:(e,t,a)=>{a.r(t),a.d(t,{FibonacciTest:()=>r.FibonacciTest});var r=a(3319)},8042:(e,t,a)=>{a.r(t),a.d(t,{FontsAndSVGimagesTest:()=>s});var r=a(7631),l=a(3329);const s=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{style:{fontFamily:"manrope-regular"},children:"Regular"}),(0,l.jsx)("span",{style:{fontFamily:"manrope-medium"},children:"Medium"}),(0,l.jsx)("span",{style:{fontFamily:"manrope-semibold"},children:"Semibold"}),(0,l.jsx)("span",{style:{fontFamily:"montserrat-regular"},children:"Regular"}),(0,l.jsx)("span",{style:{fontFamily:"montserrat-semibold"},children:"Semibold"}),(0,l.jsx)("div",{style:{backgroundColor:"black"},children:(0,l.jsx)(r.SVGimage,{name:"fav"})})]})},7631:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(873)},6401:(e,t,a)=>{a.r(t),a.d(t,{FontsAndSVGimagesTest:()=>r.FontsAndSVGimagesTest});var r=a(8042)},7788:(e,t,a)=>{a.r(t),a.d(t,{MoirTest:()=>u});var r,l=a(168),s=a(2791),n=a(6060),d=a(873),i=a(9716),o=a(3329);const c=i.Z.div(r||(r=(0,l.Z)(["\n  position: relative;\n"]))),u=()=>{const[e,t]=(0,s.useState)(0),[a,r]=(0,s.useState)(0),[l,i]=(0,s.useState)(0);return(0,s.useEffect)((0,d.useKeyboard)("w",(()=>{t(e-5)})),[e]),(0,s.useEffect)((0,d.useKeyboard)("s",(()=>{t(e+5)})),[e]),(0,s.useEffect)((0,d.useKeyboard)("a",(()=>{r(a-5)})),[a]),(0,s.useEffect)((0,d.useKeyboard)("d",(()=>{r(a+5)})),[a]),(0,s.useEffect)((0,d.useKeyboard)("q",(()=>{i(l-5)})),[l]),(0,s.useEffect)((0,d.useKeyboard)("e",(()=>{i(l+5)})),[l]),(0,o.jsxs)(c,{children:[(0,o.jsx)(n.StripedSquare,{top:e,left:a,angle:l,height:100,width:100}),(0,o.jsx)(n.StripedSquare,{top:0,left:0,angle:0,height:500,width:500})]})}},6060:(e,t,a)=>{a.r(t),a.d(t,{StripedSquare:()=>n});a(2791);var r=a(873),l=a(7026),s=a(3329);const n=e=>{let{height:t,width:a,top:n,left:d,angle:i}=e,o=[];return(0,r.useMultiple)(t/5,1,(e=>{o=[...o,(0,s.jsx)(l.StripeStyleBase,{color:e%2===0?"rgba(0, 0, 250, 0.5)":"none",width:a,stripeHeight:5},e+1)]})),(0,s.jsx)(l.SquareStyleBase,{top:n,left:d,angle:i,height:t,width:a,children:o})}},7026:(e,t,a)=>{a.r(t),a.d(t,{SquareStyleBase:()=>d,StripeStyleBase:()=>i});var r,l,s=a(168),n=a(9716);const d=n.Z.div(r||(r=(0,s.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  transform: rotate(\n    ","deg\n  );\n\n  height: ","px;\n\n  width: ","px;\n\n  display: flex;\n  flex-direction: column;\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{angle:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t})),i=n.Z.div(l||(l=(0,s.Z)(["\n  height: ","px;\n\n  width: ","px;\n\n  background: ",";\n"])),(e=>{let{stripeHeight:t}=e;return t}),(e=>{let{width:t}=e;return t}),(e=>{let{color:t}=e;return t}))},8551:(e,t,a)=>{a.r(t),a.d(t,{MoirTest:()=>r.MoirTest});var r=a(7788)},4:(e,t,a)=>{a.r(t),a.d(t,{PageNavigationTest:()=>l});var r=a(3329);const l=e=>{let{pages:t,onChange:a,currentPageName:l}=e;const s=e=>{a(t.find((t=>{let{name:a}=t;return e.target.value===a})))};return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{children:t.map((e=>{let{name:t}=e;return(0,r.jsx)("li",{children:(0,r.jsxs)("label",{htmlFor:t,children:[(0,r.jsx)("input",{id:t,name:"pageSwitcher",type:"radio",onChange:s,value:t,checked:l===t}),(0,r.jsx)("span",{children:t})]})},t)}))})})}},6499:(e,t,a)=>{a.r(t),a.d(t,{PageNavigationTest:()=>r.PageNavigationTest});var r=a(4)},3746:(e,t,a)=>{a.r(t),a.d(t,{PrimeNumbersTest:()=>n});var r=a(2791),l=a(729),s=a(3329);const n=()=>{const[e,t]=(0,r.useState)([2]);return(0,r.useEffect)((0,l.handleInterval)((()=>{let a=e[e.length-1];if(a>=100)return;let r=a;for(;;){r+=1;if(e.every((e=>r/e!==Math.floor(r/e))))break}t([...e,r])}),1e3),[e]),(0,s.jsx)("p",{children:e.join(", ")})}},729:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(873)},562:(e,t,a)=>{a.r(t),a.d(t,{PrimeNumbersTest:()=>r.PrimeNumbersTest});var r=a(3746)},493:(e,t,a)=>{a.r(t),a.d(t,{SquaresTest:()=>s});var r=a(2791),l=a(3329);const s=()=>{const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{e.length<10&&t([...e,Math.pow(e.length,2)])}),[e]),(0,l.jsx)("p",{children:e.join(", ")})}},4880:(e,t,a)=>{a.r(t),a.d(t,{SquaresTest:()=>r.SquaresTest});var r=a(493)},7255:(e,t,a)=>{a.r(t),a.d(t,{StarsEffectTest:()=>u});var r,l,s=a(168),n=a(2791),d=a(9716),i=a(3329);const o=d.Z.section(r||(r=(0,s.Z)(["\n  height: 500px;\n  background-color: black;\n  position: relative;\n"]))),c=d.Z.div(l||(l=(0,s.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: ","px;\n  height: ","px;\n\n  border-radius: 50%;\n  background-image: radial-gradient(at center, white, white, black);\n"])),(e=>{let{top:t=0}=e;return t}),(e=>{let{left:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t})),u=()=>{const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[l,s]=(0,n.useState)(0),[d,u]=(0,n.useState)(0),h=e=>Math.floor(Math.random()*e),m=()=>{s(h(500)),u(h(1e3)),t(h(100))},C=()=>{r(a>=e?0:a+1)};return(0,n.useEffect)((()=>{const e=setTimeout(m,1e3);return()=>{clearTimeout(e)}}),[e]),(0,n.useEffect)((()=>{const e=setTimeout(C,50);return()=>{clearTimeout(e)}}),[e,a]),(0,i.jsx)("div",{style:{fontFamily:"Montserrat-Regular"},children:(0,i.jsx)(o,{children:(0,i.jsx)(c,{top:l,left:d,size:a})})})}},5171:(e,t,a)=>{a.r(t),a.d(t,{StarsEffectTest:()=>r.StarsEffectTest});var r=a(7255)},3367:(e,t,a)=>{a.r(t),a.d(t,{TestPageLayout:()=>n});var r=a(1087),l=a(7689),s=a(3329);const n=()=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.OL,{to:"tests",children:"Various tests"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.OL,{to:"stars",children:"Stars effect test"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.OL,{to:"moir",children:"Moir test"})})]}),(0,s.jsx)("div",{children:(0,s.jsx)(l.j3,{})})]})},5234:(e,t,a)=>{a.r(t),a.d(t,{TestPageLayout:()=>r.TestPageLayout});var r=a(3367)},873:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,useKeyboard:()=>l.useKeyboard,useMultiple:()=>s.useMultiple,vanillaReducer:()=>r.vanillaReducer});var r=a(2111),l=a(543),s=a(9871)},1555:(e,t,a)=>{a.r(t),a.d(t,{CarFilterTest:()=>r.CarFilterTest,DateAndTimeTest:()=>n.DateAndTimeTest,FibonacciTest:()=>l.FibonacciTest,FontsAndSVGimagesTest:()=>d.FontsAndSVGimagesTest,MoirTest:()=>h.MoirTest,PageNavigationTest:()=>c.PageNavigationTest,PrimeNumbersTest:()=>s.PrimeNumbersTest,SquaresTest:()=>i.SquaresTest,StarsEffectTest:()=>o.StarsEffectTest,TestPageLayout:()=>u.TestPageLayout});var r=a(8589),l=a(9566),s=a(562),n=a(9338),d=a(6401),i=a(4880),o=a(5171),c=a(6499),u=a(5234),h=a(8551)},543:(e,t,a)=>{a.r(t),a.d(t,{useKeyboard:()=>r});const r=(e,t)=>()=>{const a=a=>{let{type:r,key:l}=a;"keydown"===r&&l===e&&t()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}}},9871:(e,t,a)=>{a.r(t),a.d(t,{useMultiple:()=>r});const r=(e,t,a)=>{for(let r=1;r<e;r+=t)a(r)}},9924:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>s.Pc,CarGallery:()=>s.iq,CarModal:()=>s.qd,SVGimage:()=>d.V,carModel:()=>l.Ws,carsLocalData:()=>r.A,getCarModel:()=>l.cP,getSelectedCars:()=>l.Bz,handleEventListener:()=>l.nM,handleInterval:()=>l.HZ,handleTimeOut:()=>l.s2,makesLocalData:()=>r.R,selectedCars:()=>l.nI,setCarModel:()=>l.aM,setSelectedCars:()=>l.Ng,vanillaReducer:()=>n.YH});var r=a(1133),l=a(1317),s=a(4163),n=a(6229),d=a(839)}}]);
//# sourceMappingURL=418.78216d14.chunk.js.map