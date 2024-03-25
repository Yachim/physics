(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{5042:function(){},683:function(e,t,r){Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.bind(r,2593))},8314:function(e,t,r){"use strict";var n=r(1811);function a(){}function u(){}u.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,u,o){if(o!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:a};return r.PropTypes=r,r}},4404:function(e,t,r){"use strict";e.exports=r(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2058:function(e,t,r){"use strict";var n,a,u;u=function(e,t,r,n){function a(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}Object.defineProperty(e,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(e,{BlockMath:()=>c,InlineMath:()=>f}),t=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(t),r=a(r),n=a(n);let o=(e,a)=>{let{displayMode:u}=a,o=r=>{let{children:a,errorColor:o,math:i,renderError:s}=r,l=null!=i?i:a,{html:c,error:f}=(0,t.useMemo)(()=>{try{return{html:n.default.renderToString(l,{displayMode:u,errorColor:o,throwOnError:!!s}),error:void 0}}catch(e){if(e instanceof n.default.ParseError||e instanceof TypeError)return{error:e};throw e}},[l,o,s]);return f?s?s(f):t.default.createElement(e,{html:"".concat(f.message)}):t.default.createElement(e,{html:c})};return o.propTypes={children:r.default.string,errorColor:r.default.string,math:r.default.string,renderError:r.default.func},o},i={html:r.default.string.isRequired},s=e=>{let{html:r}=e;return t.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:r}})};s.propTypes=i;let l=e=>{let{html:r}=e;return t.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:r}})};l.propTypes=i;let c=o(s,{displayMode:!0}),f=o(l,{displayMode:!1})},"object"==typeof e.exports?u(t,r(4090),r(4404),r(7837)):(n=[t,r(4090),r(4404),r(7837)],void 0===(a=u.apply(t,n))||(e.exports=a))},2593:function(e,t,r){"use strict";r.r(t),r.d(t,{ForceMagnitude:function(){return y},ForceVectors:function(){return v}});var n=r(6093),a=r(3827),u=r(8183),o=r(7881),i=r(2148),s=r(5545),l=r(3726),c=r(6881),f=r(4090),p=r(2058);function d(){let e=(0,n._)(["\n          \begin{align*}\n            epsilon_r &= "," \\\n            F_e &= "," N  ",".\n          end{align*}\n        "],["\n          \\begin{align*}\n            \\epsilon_r &= "," \\\\\n            F_e &= ","\\ N  ",".\n          \\end{align*}\n        "]);return d=function(){return e},e}function h(){let e=(0,n._)(["$\boldsymbol{F}_"," = [",", ","]$"],["$\\boldsymbol{F}_"," = [",",\\ ","]$"]);return h=function(){return e},e}function g(){let e=(0,n._)(["$F_"," = "," N$"],["$F_"," = ","\\ N$"]);return g=function(){return e},e}function y(e){let{initialQ1:t,initialQ2:r,initialR:n}=e,[u,o]=(0,f.useState)(t),[i,h]=(0,f.useState)(r),[g,y]=(0,f.useState)(n),[v,b]=(0,f.useState)("vacuum"),m=(0,f.useMemo)(()=>u*i,[u,i]),M=(0,f.useMemo)(()=>l.s[v],[v]),_=(0,f.useMemo)(()=>(0,s.gi)(u,i,g,M),[u,i,g,M]);return(0,a.jsxs)("div",{className:"grid grid-cols-[auto_auto] gap-2",children:[(0,a.jsx)("label",{className:"justify-self-end",children:(0,a.jsx)(p.InlineMath,{math:"q_1 ="})}),(0,a.jsx)("input",{value:u,onChange:e=>o(+e.target.value),className:"justify-self-start",type:"number"}),(0,a.jsx)("label",{className:"justify-self-end",children:(0,a.jsx)(p.InlineMath,{math:"q_2 ="})}),(0,a.jsx)("input",{value:i,onChange:e=>h(+e.target.value),className:"justify-self-start",type:"number"}),(0,a.jsx)("label",{className:"justify-self-end",children:(0,a.jsx)(p.InlineMath,{math:"r ="})}),(0,a.jsx)("input",{value:g,onChange:e=>y(+e.target.value),className:"justify-self-start",type:"number"}),(0,a.jsx)("label",{className:"justify-self-end",children:"Material:"}),(0,a.jsx)("select",{value:v,onChange:e=>b(e.target.value),className:"justify-self-start",children:Object.keys(l.s).map((e,t)=>(0,a.jsx)("option",{value:e,children:(0,c.kC)(e)},t))}),(0,a.jsx)("div",{className:"col-span-2 flex flex-col items-center",children:(0,a.jsx)(p.BlockMath,{math:String.raw(d(),M,(0,c.gZ)(_),0===m?"":m<0?"&\\textrm{Attractive}":"&\\textrm{Repulsive}")})})]})}function v(e){var t;return(0,a.jsx)(i.V,{id:"force-vectors",...e,bbox:null!==(t=e.bbox)&&void 0!==t?t:[-.02,.34,.6,-.02],initFn:e=>{let t=[[0,0,1e-8],[.2,0,-.00000003],[.2,.15,2e-8]],r=e.create("input",[.02,.3,1e-8,"$q_1 =\\ $"]),n=e.create("input",[.02,.28,-.00000003,"$q_2 =\\ $"]),a=e.create("input",[.02,.26,2e-8,"$q_3 =\\ $"]),i=e.create("input",[.02,.24,500,"Scale: "]),l=e.create("point",[0,0],{visible:()=>0!=+r.Value(),color:()=>0>+r.Value()?"red":"green",name:"1"}),f=e.create("point",[.2,0],{visible:()=>0!=+n.Value(),color:()=>0>+n.Value()?"red":"green",name:"2"}),p=e.create("point",[.2,.15],{visible:()=>0!=+a.Value(),color:()=>0>+a.Value()?"red":"green",name:"3"});function d(e,t){let[r,n]=e,a=u.pIu([r.X(),r.Y()]),i=+n.Value(),l=o.tS(u.pIu([0,0]));return t.forEach(e=>{let[t,r]=e,n=u.pIu([t.X(),t.Y()]);l=l.add((0,s.s1)(i,+r.Value(),a,n))}),l.done()}function y(e,t){let r=d(e,t),[n]=e;return n.X()+r.toArray()[0]*+i.Value()}function v(e,t){let r=d(e,t),[n]=e;return n.Y()+r.toArray()[1]*+i.Value()}let b=e.create("point",[()=>y([l,r],[[f,n],[p,a]]),()=>v([l,r],[[f,n],[p,a]])],{visible:!1}),m=e.create("point",[()=>y([f,n],[[l,r],[p,a]]),()=>v([f,n],[[l,r],[p,a]])],{visible:!1}),M=e.create("point",[()=>y([p,a],[[l,r],[f,n]]),()=>v([p,a],[[l,r],[f,n]])],{visible:!1});function _(e,t,r){let n=d(e,t),a=n.toArray()[0],u=n.toArray()[1];return String.raw(h(),r,(0,c.gZ)(a),(0,c.gZ)(u))}function x(e,t,r){let n=u.KOy(d(e,t));return String.raw(g(),r,(0,c.gZ)(n))}e.create("arrow",[l,b],{lastArrow:{type:2}}),e.create("arrow",[f,m],{lastArrow:{type:2}}),e.create("arrow",[p,M],{lastArrow:{type:2}}),e.create("text",[.45,.3,()=>_([l,r],[[f,n],[p,a]],1)]),e.create("text",[.45,.25,()=>_([f,n],[[l,r],[p,a]],2)]),e.create("text",[.45,.2,()=>_([p,a],[[l,r],[f,n]],3)]),e.create("text",[.45,.28,()=>x([l,r],[[f,n],[p,a]],1)]),e.create("text",[.45,.23,()=>x([f,n],[[l,r],[p,a]],2)]),e.create("text",[.45,.18,()=>x([p,a],[[l,r],[f,n]],3)]);let j=[[l,r],[f,n],[p,a]];e.create("button",[.02,.22,"Reset",()=>{j.forEach((e,r)=>{let[n,a]=e;n.moveTo([t[r][0],t[r][1]]),a.set(t[r][2].toString())}),i.set("500")}])}})}},2148:function(e,t,r){"use strict";r.d(t,{V:function(){return o}});var n=r(3827),a=r(6205),u=r(4090);function o(e){let{id:t,bbox:r,axis:o,initFn:i}=e;return(0,u.useRef)(null),(0,u.useEffect)(()=>{let e=a.ZP.JSXGraph.initBoard(t,{renderer:"canvas",axis:null==o||o,boundingBox:null!=r?r:[-8,4.5,8,-4.5],showCopyright:!1,keepAspectRatio:!0});return i&&i(e),()=>a.ZP.JSXGraph.freeBoard(e)},[r,i,o,t]),(0,n.jsx)("div",{className:"w-full aspect-video",id:t})}a.ZP.Options.text.useMathJax=!0},5545:function(e,t,r){"use strict";r.d(t,{a8:function(){return s},gi:function(){return u},s1:function(){return o}});var n=r(3726),a=r(8183);function u(e,t,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return n.k/a*Math.abs(e*t)/r**2}function o(e,t,r,u){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=a.$XF(r,u),s=a.Rxh(a.KOy(i)),l=a.csF(i,s);return a.JpY(n.k/o*e*t/s**2,l)}function i(e){var t=Math.pow(Math.abs(e),1/3);return e<0?-t:t}function s(e,t,r,n){if(1e-8>Math.abs(e)){if(e=t,t=r,r=n,1e-8>Math.abs(e))return(e=t,t=r,1e-8>Math.abs(e))?[]:[-t/e];var a,u=t*t-4*e*r;return 1e-8>Math.abs(u)?[-t/(2*e)]:u>0?[(-t+Math.sqrt(u))/(2*e),(-t-Math.sqrt(u))/(2*e)]:[]}var o=(3*e*r-t*t)/(3*e*e),s=(2*t*t*t-9*e*t*r+27*e*e*n)/(27*e*e*e);if(1e-8>Math.abs(o))a=[i(-s)];else if(1e-8>Math.abs(s))a=[0].concat(o<0?[Math.sqrt(-o),-Math.sqrt(-o)]:[]);else{var u=s*s/4+o*o*o/27;if(1e-8>Math.abs(u))a=[-1.5*s/o,3*s/o];else if(u>0){var l=i(-s/2-Math.sqrt(u));a=[l-o/(3*l)]}else{var l=2*Math.sqrt(-o/3),c=Math.acos(3*s/o/l)/3,f=2*Math.PI/3;a=[l*Math.cos(c),l*Math.cos(c-f),l*Math.cos(c-2*f)]}}for(var p=0;p<a.length;p++)a[p]-=t/(3*e);return a}},3726:function(e,t,r){"use strict";r.d(t,{G:function(){return i},Z:function(){return a},c:function(){return o},k:function(){return n},s:function(){return u}});let n=9e9,a=1/(4*Math.PI*9e9),u={vacuum:1,air:1,water:81.6},o=299792458,i=66743e-15},6881:function(e,t,r){"use strict";r.d(t,{CY:function(){return c},P0:function(){return l},SK:function(){return f},gZ:function(){return s},kC:function(){return d},ok:function(){return p}});var n=r(6093),a=r(8183);function u(){let e=(0,n._)([" cdot 10^{","}"],[" \\cdot 10^{","}"]);return u=function(){return e},e}function o(){let e=(0,n._)(["",""]);return o=function(){return e},e}function i(){let e=(0,n._)(["","",""]);return i=function(){return e},e}function s(e){if(0===e)return"0";if(1===e)return"1";let t=Math.floor(Math.log10(Math.abs(e))),r=Math.floor(e/Math.pow(10,t)*100)/100,n=String.raw(u(),t);return 1===t?String.raw(o(),10*r):(0===t&&(n=""),String.raw(i(),r,n))}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce((e,t)=>e+t,t)}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.pIu([0,0]);return e.reduce((e,t)=>a.IHx(e,t),t)}function f(e){let t=e.toArray()[0],r=e.toArray()[1];return"[".concat(s(t),", ").concat(s(r),"]")}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(e)*Math.abs(e)**(1/t)}function d(e){return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}}},function(e){e.O(0,[639,186,143,41,410,250,183,769,881,971,69,744],function(){return e(e.s=683)}),_N_E=e.O()}]);