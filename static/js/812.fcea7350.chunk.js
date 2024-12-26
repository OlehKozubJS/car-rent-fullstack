"use strict";(self.webpackChunkcar_rent_fullstack=self.webpackChunkcar_rent_fullstack||[]).push([[812,78,727,418,928,216,111,555,589,944,338,516,390,566,319,364,401,42,631,551,788,60,499,4,562,746,729,880,493,171,255,234,367,873,924],{2078:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(2791),l=a(9924),n=a(3329);const s=e=>{let{cars:t,onFavouriteClick:a}=e;const[s,d]=(0,r.useState)(!1),[i,o]=(0,r.useState)(null);return(0,n.jsxs)("section",{children:[s&&(0,n.jsx)(l.CarModal,{car:i,onClose:()=>{d(!1)}}),(0,n.jsx)(l.CarGallery,{cars:t,onLearnMoreClick:e=>{o(e),d(!0)},onFavouriteClick:a})]})}},727:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(2791),l=a(9924),n=a(3329);const s=e=>{let{cars:t,onFavouriteClick:a}=e;const[s,d]=(0,r.useState)(!1),[i,o]=(0,r.useState)(null);return(0,n.jsxs)("section",{children:[s&&(0,n.jsx)(l.CarModal,{car:i,onClose:()=>{d(!1)}}),(0,n.jsx)(l.CarFilter,{}),(0,n.jsx)(l.CarGallery,{cars:t,onLearnMoreClick:e=>{o(e),d(!0)},onFavouriteClick:a})]})}},1928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(7689),l=a(1555),n=a(3329);const s=()=>(0,n.jsx)(r.Z5,{children:(0,n.jsxs)(r.AW,{path:"/",element:(0,n.jsx)(l.TestPageLayout,{}),children:[(0,n.jsx)(r.AW,{path:"tests",element:(0,n.jsxs)("div",{children:[(0,n.jsx)(l.CarFilterTest,{}),(0,n.jsx)(l.DateAndTimeTest,{}),(0,n.jsx)(l.FibonacciTest,{}),(0,n.jsx)(l.FontsAndSVGimagesTest,{}),(0,n.jsx)(l.PrimeNumbersTest,{}),(0,n.jsx)(l.SquaresTest,{})]})}),(0,n.jsx)(r.AW,{path:"stars",element:(0,n.jsx)(l.StarsEffectTest,{})}),(0,n.jsx)(r.AW,{path:"moir",element:(0,n.jsx)(l.MoirTest,{})})]})})},1216:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r,l,n=a(168),s=a(2791),d=a(9716),i=a(3329);const o=d.Z.section(r||(r=(0,n.Z)(["\n  height: 500px;\n  background-color: black;\n  position: relative;\n"]))),c=d.Z.div(l||(l=(0,n.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: ","px;\n  height: ","px;\n\n  border-radius: 50%;\n  background-image: radial-gradient(at center, white, white, black);\n"])),(e=>{let{top:t=0}=e;return t}),(e=>{let{left:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t})),u=()=>{const[e,t]=(0,s.useState)(0),[a,r]=(0,s.useState)(0),[l,n]=(0,s.useState)(0),[d,u]=(0,s.useState)(0),h=e=>Math.floor(Math.random()*e),C=()=>{n(h(500)),u(h(1e3)),t(h(100))},m=()=>{r(a>=e?0:a+1)};return(0,s.useEffect)((()=>{const e=setTimeout(C,1e3);return()=>{clearTimeout(e)}}),[e]),(0,s.useEffect)((()=>{const e=setTimeout(m,50);return()=>{clearTimeout(e)}}),[e,a]),(0,i.jsx)("div",{style:{fontFamily:"Montserrat-Regular"},children:(0,i.jsx)(o,{children:(0,i.jsx)(c,{top:l,left:d,size:a})})})}},2111:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(9924)},418:(e,t,a)=>{a.r(t),a.d(t,{TestPageOne:()=>r.default,TestPageTwo:()=>l.default});var r=a(1928),l=a(1216)},8944:(e,t,a)=>{a.r(t),a.d(t,{CarFilterTest:()=>l});var r=a(3329);const l=()=>{let e="",t=0,a=0,l=0,n=0;const s=e=>e.target.value;return(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car brand (make)"}),(0,r.jsx)("label",{htmlFor:"carMakeInput",children:(0,r.jsx)("input",{id:"carMakeInput",type:"text",placeholder:"Enter car make name or its part",onChange:t=>{e=s(t)},style:{width:"200px"}})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car rental price"}),(0,r.jsx)("label",{htmlFor:"minCarRentalPriceInput",children:(0,r.jsx)("input",{id:"minCarRentalPriceInput",type:"number",placeholder:"From",onChange:e=>{t=s(e)}})}),(0,r.jsx)("label",{htmlFor:"maxCarRentalPriceInput",children:(0,r.jsx)("input",{id:"maxCarRentalPriceInput",type:"number",placeholder:"To",onChange:e=>{a=s(e)}})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Car mileage"}),(0,r.jsx)("label",{htmlFor:"minCarMileageInput",children:(0,r.jsx)("input",{id:"minCarMileageInput",type:"number",placeholder:"From",onChange:e=>{l=s(e)}})}),(0,r.jsx)("label",{htmlFor:"maxCarMileageInput",children:(0,r.jsx)("input",{id:"maxCarMileageInput",type:"number",placeholder:"To",onChange:e=>{n=s(e)}})})]}),(0,r.jsx)("button",{type:"submit",children:"Find car"})]})}},8589:(e,t,a)=>{a.r(t),a.d(t,{CarFilterTest:()=>r.CarFilterTest});var r=a(8944)},2516:(e,t,a)=>{a.r(t),a.d(t,{DateAndTimeTest:()=>s});var r=a(2791),l=a(5390),n=a(3329);const s=()=>{const[e,t]=(0,r.useState)(0),[a,s]=(0,r.useState)(new Date);return(0,r.useEffect)((0,l.handleInterval)((()=>{s(new Date)}),1e3),[]),(0,r.useEffect)((0,l.handleInterval)((()=>{t(e+1)}),500),[e]),(0,n.jsxs)("div",{children:[String(a),(0,n.jsx)("p",{children:e})]})}},5390:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(873)},9338:(e,t,a)=>{a.r(t),a.d(t,{DateAndTimeTest:()=>r.DateAndTimeTest});var r=a(2516)},3319:(e,t,a)=>{a.r(t),a.d(t,{FibonacciTest:()=>s});var r=a(2791),l=a(2364),n=a(3329);const s=()=>{const[e,t]=(0,r.useState)([0,1]);return(0,r.useEffect)((0,l.handleTimeOut)((()=>{e.length<16&&t([...e,e[e.length-1]+e[e.length-2]])}),1e3),[e]),(0,n.jsx)("p",{children:e.join(", ")})}},2364:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(873)},9566:(e,t,a)=>{a.r(t),a.d(t,{FibonacciTest:()=>r.FibonacciTest});var r=a(3319)},8042:(e,t,a)=>{a.r(t),a.d(t,{FontsAndSVGimagesTest:()=>n});var r=a(7631),l=a(3329);const n=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{style:{fontFamily:"manrope-regular"},children:"Regular"}),(0,l.jsx)("span",{style:{fontFamily:"manrope-medium"},children:"Medium"}),(0,l.jsx)("span",{style:{fontFamily:"manrope-semibold"},children:"Semibold"}),(0,l.jsx)("span",{style:{fontFamily:"montserrat-regular"},children:"Regular"}),(0,l.jsx)("span",{style:{fontFamily:"montserrat-semibold"},children:"Semibold"}),(0,l.jsx)("div",{style:{backgroundColor:"black"},children:(0,l.jsx)(r.SVGimage,{name:"fav"})})]})},7631:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(873)},6401:(e,t,a)=>{a.r(t),a.d(t,{FontsAndSVGimagesTest:()=>r.FontsAndSVGimagesTest});var r=a(8042)},7788:(e,t,a)=>{a.r(t),a.d(t,{MoirTest:()=>c});var r,l=a(168),n=a(2791),s=a(6060),d=(a(873),a(9716)),i=a(3329);const o=d.Z.div(r||(r=(0,l.Z)(["\n  position: relative;\n"]))),c=()=>{const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[l,d]=(0,n.useState)(0);return(0,n.useEffect)((()=>{const a=a=>{"keydown"===a.type&&"w"===a.key&&t(e-5),"keydown"===a.type&&"s"===a.key&&t(e+5)};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}}),[e]),(0,n.useEffect)((()=>{const e=e=>{"keydown"===e.type&&"a"===e.key&&r(a-5),"keydown"===e.type&&"d"===e.key&&r(a+5)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[a]),(0,n.useEffect)((()=>{const e=e=>{"keydown"===e.type&&"q"===e.key&&d(l-5),"keydown"===e.type&&"e"===e.key&&d(l+5)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[l]),(0,i.jsxs)(o,{children:[(0,i.jsx)(s.StripedSquare,{top:e,left:a,angle:l,height:100,width:100}),(0,i.jsx)(s.StripedSquare,{top:0,left:0,angle:0,height:500,width:1e3})]})}},6060:(e,t,a)=>{a.r(t),a.d(t,{StripedSquare:()=>u});var r,l,n=a(168),s=a(2791),d=a(9716),i=a(3329);const o=d.Z.div(r||(r=(0,n.Z)(["\n  position: absolute;\n\n  top: ","px;\n\n  left: ","px;\n\n  transform: rotate(\n    ","deg\n  );\n\n  height: ","px;\n\n  width: ","px;\n\n  display: flex;\n  flex-direction: column;\n"])),(e=>{let{top:t}=e;return t}),(e=>{let{left:t}=e;return t}),(e=>{let{angle:t}=e;return t}),(e=>{let{height:t}=e;return t}),(e=>{let{width:t}=e;return t})),c=d.Z.div(l||(l=(0,n.Z)(["\n  height: 5px;\n\n  width: ","px;\n\n  background: ",";\n"])),(e=>{let{width:t}=e;return t}),(e=>{let{color:t}=e;return t})),u=e=>{let{height:t,width:a,top:r,left:l,angle:n}=e;const[d,u]=(0,s.useState)([]);return(0,s.useEffect)((()=>{d.length>=t/5||u([...d,(0,i.jsx)(c,{color:d.length%2===0?"rgba(0, 0, 250, 0.5)":"none"},d.length+1)])}),[d]),(0,i.jsx)(o,{top:r,left:l,angle:n,height:t,width:a,children:d})}},8551:(e,t,a)=>{a.r(t),a.d(t,{MoirTest:()=>r.MoirTest});var r=a(7788)},4:(e,t,a)=>{a.r(t),a.d(t,{PageNavigationTest:()=>l});var r=a(3329);const l=e=>{let{pages:t,onChange:a,currentPageName:l}=e;const n=e=>{a(t.find((t=>{let{name:a}=t;return e.target.value===a})))};return(0,r.jsx)("nav",{children:(0,r.jsx)("ul",{children:t.map((e=>{let{name:t}=e;return(0,r.jsx)("li",{children:(0,r.jsxs)("label",{htmlFor:t,children:[(0,r.jsx)("input",{id:t,name:"pageSwitcher",type:"radio",onChange:n,value:t,checked:l===t}),(0,r.jsx)("span",{children:t})]})},t)}))})})}},6499:(e,t,a)=>{a.r(t),a.d(t,{PageNavigationTest:()=>r.PageNavigationTest});var r=a(4)},3746:(e,t,a)=>{a.r(t),a.d(t,{PrimeNumbersTest:()=>s});var r=a(2791),l=a(729),n=a(3329);const s=()=>{const[e,t]=(0,r.useState)([2]);return(0,r.useEffect)((0,l.handleInterval)((()=>{let a=e[e.length-1];if(a>=100)return;let r=a;for(;;){r+=1;if(e.every((e=>r/e!==Math.floor(r/e))))break}t([...e,r])}),1e3),[e]),(0,n.jsx)("p",{children:e.join(", ")})}},729:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(873)},562:(e,t,a)=>{a.r(t),a.d(t,{PrimeNumbersTest:()=>r.PrimeNumbersTest});var r=a(3746)},493:(e,t,a)=>{a.r(t),a.d(t,{SquaresTest:()=>n});var r=a(2791),l=a(3329);const n=()=>{const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{e.length<10&&t([...e,Math.pow(e.length,2)])}),[e]),(0,l.jsx)("p",{children:e.join(", ")})}},4880:(e,t,a)=>{a.r(t),a.d(t,{SquaresTest:()=>r.SquaresTest});var r=a(493)},7255:(e,t,a)=>{a.r(t),a.d(t,{StarsEffectTest:()=>u});var r,l,n=a(168),s=a(2791),d=a(9716),i=a(3329);const o=d.Z.section(r||(r=(0,n.Z)(["\n  height: 500px;\n  background-color: black;\n  position: relative;\n"]))),c=d.Z.div(l||(l=(0,n.Z)(["\n  position: absolute;\n  top: ","px;\n  left: ","px;\n  width: ","px;\n  height: ","px;\n\n  border-radius: 50%;\n  background-image: radial-gradient(at center, white, white, black);\n"])),(e=>{let{top:t=0}=e;return t}),(e=>{let{left:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t}),(e=>{let{size:t=0}=e;return t})),u=()=>{const[e,t]=(0,s.useState)(0),[a,r]=(0,s.useState)(0),[l,n]=(0,s.useState)(0),[d,u]=(0,s.useState)(0),h=e=>Math.floor(Math.random()*e),C=()=>{n(h(500)),u(h(1e3)),t(h(100))},m=()=>{r(a>=e?0:a+1)};return(0,s.useEffect)((()=>{const e=setTimeout(C,1e3);return()=>{clearTimeout(e)}}),[e]),(0,s.useEffect)((()=>{const e=setTimeout(m,50);return()=>{clearTimeout(e)}}),[e,a]),(0,i.jsx)("div",{style:{fontFamily:"Montserrat-Regular"},children:(0,i.jsx)(o,{children:(0,i.jsx)(c,{top:l,left:d,size:a})})})}},5171:(e,t,a)=>{a.r(t),a.d(t,{StarsEffectTest:()=>r.StarsEffectTest});var r=a(7255)},3367:(e,t,a)=>{a.r(t),a.d(t,{TestPageLayout:()=>s});var r=a(1087),l=a(7689),n=a(3329);const s=()=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(r.OL,{to:"tests",children:"Various tests"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r.OL,{to:"stars",children:"Stars effect test"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r.OL,{to:"moir",children:"Moir test"})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(l.j3,{})})]})},5234:(e,t,a)=>{a.r(t),a.d(t,{TestPageLayout:()=>r.TestPageLayout});var r=a(3367)},873:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>r.CarFilter,CarGallery:()=>r.CarGallery,CarModal:()=>r.CarModal,SVGimage:()=>r.SVGimage,carModel:()=>r.carModel,carsLocalData:()=>r.carsLocalData,getCarModel:()=>r.getCarModel,getSelectedCars:()=>r.getSelectedCars,handleEventListener:()=>r.handleEventListener,handleInterval:()=>r.handleInterval,handleTimeOut:()=>r.handleTimeOut,makesLocalData:()=>r.makesLocalData,selectedCars:()=>r.selectedCars,setCarModel:()=>r.setCarModel,setSelectedCars:()=>r.setSelectedCars,vanillaReducer:()=>r.vanillaReducer});var r=a(2111)},1555:(e,t,a)=>{a.r(t),a.d(t,{CarFilterTest:()=>r.CarFilterTest,DateAndTimeTest:()=>s.DateAndTimeTest,FibonacciTest:()=>l.FibonacciTest,FontsAndSVGimagesTest:()=>d.FontsAndSVGimagesTest,MoirTest:()=>h.MoirTest,PageNavigationTest:()=>c.PageNavigationTest,PrimeNumbersTest:()=>n.PrimeNumbersTest,SquaresTest:()=>i.SquaresTest,StarsEffectTest:()=>o.StarsEffectTest,TestPageLayout:()=>u.TestPageLayout});var r=a(8589),l=a(9566),n=a(562),s=a(9338),d=a(6401),i=a(4880),o=a(5171),c=a(6499),u=a(5234),h=a(8551)},9924:(e,t,a)=>{a.r(t),a.d(t,{CarFilter:()=>n.Pc,CarGallery:()=>n.iq,CarModal:()=>n.qd,SVGimage:()=>d.V,carModel:()=>l.Ws,carsLocalData:()=>r.A,getCarModel:()=>l.cP,getSelectedCars:()=>l.Bz,handleEventListener:()=>l.nM,handleInterval:()=>l.HZ,handleTimeOut:()=>l.s2,makesLocalData:()=>r.R,selectedCars:()=>l.nI,setCarModel:()=>l.aM,setSelectedCars:()=>l.Ng,vanillaReducer:()=>s.YH});var r=a(1133),l=a(1317),n=a(4163),s=a(6229),d=a(839)},4812:(e,t,a)=>{a.r(t),a.d(t,{FavouriteCarsPage:()=>n.default,MainPage:()=>r.default,TestPageOne:()=>l.TestPageOne,TestPageTwo:()=>l.TestPageTwo});var r=a(727),l=a(418),n=a(2078)}}]);
//# sourceMappingURL=812.fcea7350.chunk.js.map