(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[349],{5042:function(){},1495:function(t,n,e){Promise.resolve().then(e.t.bind(e,1749,23)),Promise.resolve().then(e.t.bind(e,5250,23)),Promise.resolve().then(e.bind(e,2235))},2235:function(t,n,e){"use strict";e.r(n),e.d(n,{SphericalConductor:function(){return h}});var r=e(6093),u=e(3827),o=e(2148),i=e(3726),c=e(9037),a=e(6881),l=e(8183),f=e(7881);function s(){let t=(0,r._)(["$\boldsymbol{E} = ","$"],["$\\boldsymbol{E} = ","$"]);return s=function(){return t},t}function d(){let t=(0,r._)(["$E = "," NC^{-1}$"],["$E = ","\\ NC^{-1}$"]);return d=function(){return t},t}function h(t){var n;return(0,u.jsx)(o.V,{...t,bbox:null!==(n=t.bbox)&&void 0!==n?n:[-16,9,16,-9],initFn:t=>{let n=t.create("input",[-15,8,1,"$r_c =\\ $"]),e=t.create("input",[-15,7,2e-5,"$\\sigma =\\ $"]),r=t.create("point",[5/Math.SQRT2,5/Math.SQRT2],{name:""});function u(){let t=(0,c.L)(r),u=l.KOy(t),o=l.csF(t,u),a=(+n.Value())**2*+e.Value()/(u**2*i.Zy);return l.JpY(o,a)}function o(){return l.KOy((0,c.L)(r))>+n.Value()}t.create("circle",[[0,0],()=>[+n.Value(),0]],{fillColor:"#0072b2"}),t.create("text",[-15,6,()=>{if(!o())return"Move the point outside the sphere.";let t=u();return String.raw(s(),(0,a.SK)(t))}],{color:()=>o()?"black":"red"}),t.create("text",[-15,5,()=>o()?String.raw(d(),(0,a.gZ)(l.KOy(u()))):""]),t.create("arrow",[r,()=>{if(!o())return[r.X(),r.Y()];let t=u();return f.tS(t).divide(l.KOy(t)).add((0,c.L)(r)).done().toArray()}],{color:"orange",lastArrow:{type:2}})}})}},2148:function(t,n,e){"use strict";e.d(n,{V:function(){return i}});var r=e(3827),u=e(6205),o=e(4090);function i(t){let{bbox:n,axis:e,initFn:i}=t,c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=u.ZP.JSXGraph.initBoard(c.current,{axis:null==e||e,boundingBox:null!=n?n:[-8,4.5,8,-4.5],showCopyright:!1,keepAspectRatio:!0});return i&&i(t),()=>u.ZP.JSXGraph.freeBoard(t)},[n,i,e]),(0,r.jsx)("div",{className:"w-full aspect-video",ref:c})}u.ZP.Options.text.useMathJax=!0},3726:function(t,n,e){"use strict";e.d(n,{ZG:function(){return o},Zy:function(){return u},k:function(){return r},qg:function(){return i}});let r=9e9,u=1/(4*Math.PI*9e9),o={vacuum:1,air:1,water:81.6},i={silver:159e-10,copper:168e-10,gold:244e-10,aluminium:265e-10,zinc:59e-9}},9037:function(t,n,e){"use strict";e.d(n,{L:function(){return u}});var r=e(8183);function u(t){return r.pIu([t.X(),t.Y()])}},6881:function(t,n,e){"use strict";e.d(n,{CY:function(){return i},P0:function(){return o},SK:function(){return c},gZ:function(){return u},kC:function(){return l},ok:function(){return a}});var r=e(8183);function u(t){if(0===t)return"0";let n=Math.floor(Math.log10(Math.abs(t))),e=t/Math.pow(10,n);return"".concat(e.toFixed(2)," \\cdot 10^{").concat(n,"}")}function o(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.reduce((t,n)=>t+n,n)}function i(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.pIu([0,0]);return t.reduce((t,n)=>r.IHx(t,n),n)}function c(t){let n=t.toArray()[0],e=t.toArray()[1];return"[".concat(u(n),", ").concat(u(e),"]")}function a(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(t)*Math.abs(t)**(1/n)}function l(t){return t.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}}},function(t){t.O(0,[186,143,41,410,250,183,205,787,881,971,69,744],function(){return t(t.s=1495)}),_N_E=t.O()}]);