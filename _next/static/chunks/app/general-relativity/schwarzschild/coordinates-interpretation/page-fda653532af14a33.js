(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{5042:function(){},4528:function(t,e,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,7318))},8314:function(t,e,n){"use strict";var r=n(1811);function u(){}function a(){}a.resetWarningCache=u,t.exports=function(){function t(t,e,n,u,a,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:u};return n.PropTypes=n,n}},4404:function(t,e,n){"use strict";t.exports=n(8314)()},1811:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2058:function(t,e,n){"use strict";var r,u,a;a=function(t,e,n,r){function u(t){return t&&t.__esModule?t:{default:t}}function a(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(a=function(t){return t?n:e})(t)}Object.defineProperty(t,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(t,{BlockMath:()=>c,InlineMath:()=>f}),e=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=a(e);if(n&&n.has(t))return n.get(t);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var l=u?Object.getOwnPropertyDescriptor(t,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}(e),n=u(n),r=u(r);let i=(t,u)=>{let{displayMode:a}=u,i=n=>{let{children:u,errorColor:i,math:l,renderError:o}=n,s=null!=l?l:u,{html:c,error:f}=(0,e.useMemo)(()=>{try{return{html:r.default.renderToString(s,{displayMode:a,errorColor:i,throwOnError:!!o}),error:void 0}}catch(t){if(t instanceof r.default.ParseError||t instanceof TypeError)return{error:t};throw t}},[s,i,o]);return f?o?o(f):e.default.createElement(t,{html:"".concat(f.message)}):e.default.createElement(t,{html:c})};return i.propTypes={children:n.default.string,errorColor:n.default.string,math:n.default.string,renderError:n.default.func},i},l={html:n.default.string.isRequired},o=t=>{let{html:n}=t;return e.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};o.propTypes=l;let s=t=>{let{html:n}=t;return e.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};s.propTypes=l;let c=i(o,{displayMode:!0}),f=i(s,{displayMode:!1})},"object"==typeof t.exports?a(e,n(4090),n(4404),n(7837)):(r=[e,n(4090),n(4404),n(7837)],void 0===(u=a.apply(e,r))||(t.exports=u))},7318:function(t,e,n){"use strict";n.r(e),n.d(e,{PerpendicularDistanceCalculator:function(){return d},TimeDilationCalculator:function(){return f}});var r=n(6093),u=n(3827),a=n(6881),i=n(7141),l=n(4090),o=n(2058);function s(){let t=(0,r._)(["	au = ",""],["\\tau = ",""]);return s=function(){return t},t}function c(){let t=(0,r._)(["\n                    \begin{align*}\n                        Delta r &= "," m, \\\n                        L_0 &= "," m = ","Delta r m.\n                    end{align*}\n                "],["\n                    \\begin{align*}\n                        \\Delta r &= ","\\ m, \\\\\n                        L_0 &= ","\\ m = ","\\Delta r\\ m.\n                    \\end{align*}\n                "]);return c=function(){return t},t}function f(){let[t,e]=(0,l.useState)(0),[n,r]=(0,l.useState)(0),[a,c]=(0,l.useState)(0),f=(0,l.useMemo)(()=>(0,i.c8)(n,i.sy,"geometrizedMass",(0,i.b7)(2,t)),[n,t]),d=(0,l.useMemo)(()=>(0,i.c8)(a,i.R3,"geometrizedMass",(0,i.b7)(2,t)),[a,t]),h=(0,l.useMemo)(()=>Math.sqrt(1-2/f)*d,[f,d]),p=(0,l.useMemo)(()=>(0,i.A6)(h,i.R3,"geometrizedMass",(0,i.b7)(2,t)),[h,t]);return(0,u.jsxs)("div",{className:"grid grid-cols-[auto_auto] gap-2",children:[(0,u.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,u.jsx)(o.InlineMath,{math:"M\\ (kg)"}),":"]}),(0,u.jsx)("input",{type:"number",value:t,onChange:t=>e(+t.target.value),className:"justify-self-start"}),(0,u.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,u.jsx)(o.InlineMath,{math:"r\\ (m)"}),":"]}),(0,u.jsx)("input",{type:"number",value:n,onChange:t=>r(+t.target.value),className:"justify-self-start"}),(0,u.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,u.jsx)(o.InlineMath,{math:"t\\ "})," (any units):"]}),(0,u.jsx)("input",{type:"number",value:a,onChange:t=>c(+t.target.value),className:"justify-self-start"}),(0,u.jsx)("div",{className:"col-span-2",children:(0,u.jsx)(o.BlockMath,{math:String.raw(s(),p)})})]})}function d(){let[t,e]=(0,l.useState)(0),[n,r]=(0,l.useState)(0),[s,f]=(0,l.useState)(0),d=(0,l.useMemo)(()=>(0,i.c8)(s,i.sy,"geometrizedMass",(0,i.b7)(2,t)),[s,t]),h=(0,l.useMemo)(()=>(0,i.c8)(n,i.sy,"geometrizedMass",(0,i.b7)(2,t)),[n,t]),p=(0,l.useMemo)(()=>2*Math.acosh(Math.sqrt(d/2)),[d]),m=(0,l.useMemo)(()=>2*Math.acosh(Math.sqrt(h/2)),[h]),g=(0,l.useMemo)(()=>Math.sinh(p)+p,[p]),M=(0,l.useMemo)(()=>Math.sinh(m)+m,[m]),y=(0,l.useMemo)(()=>g-M,[g,M]),j=(0,l.useMemo)(()=>(0,i.A6)(y,i.sy,"geometrizedMass",(0,i.b7)(2,t)),[y,t]),b=(0,l.useMemo)(()=>s-n,[s,n]);return(0,u.jsxs)("div",{className:"grid grid-cols-[auto_auto] gap-2",children:[(0,u.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,u.jsx)(o.InlineMath,{math:"M\\ (kg)"}),":"]}),(0,u.jsx)("input",{type:"number",value:t,onChange:t=>e(+t.target.value),className:"justify-self-start"}),(0,u.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,u.jsx)(o.InlineMath,{math:"r_0\\ (m)"}),":"]}),(0,u.jsx)("input",{type:"number",value:n,onChange:t=>r(+t.target.value),className:"justify-self-start"}),(0,u.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,u.jsx)(o.InlineMath,{math:"r\\ (m)"}),":"]}),(0,u.jsx)("input",{type:"number",value:s,onChange:t=>f(+t.target.value),className:"justify-self-start"}),(0,u.jsx)("div",{className:"col-span-2",children:(0,u.jsx)(o.BlockMath,{math:String.raw(c(),(0,a.gZ)(b),(0,a.gZ)(j),(0,a.gZ)(j/b))})})]})}},3726:function(t,e,n){"use strict";n.d(e,{G:function(){return l},Z:function(){return u},c:function(){return i},k:function(){return r},s:function(){return a}});let r=9e9,u=1/(4*Math.PI*9e9),a={vacuum:1,air:1,water:81.6},i=299792458,l=66743e-15},6881:function(t,e,n){"use strict";n.d(e,{CY:function(){return m},P0:function(){return p},SK:function(){return g},Xk:function(){return _},gZ:function(){return h},io:function(){return b},jE:function(){return j},kC:function(){return y},nt:function(){return x},ok:function(){return M},uZ:function(){return v}});var r=n(6093),u=n(8183);function a(){let t=(0,r._)([" cdot 10^{","}"],[" \\cdot 10^{","}"]);return a=function(){return t},t}function i(){let t=(0,r._)(["",""]);return i=function(){return t},t}function l(){let t=(0,r._)(["",""]);return l=function(){return t},t}function o(){let t=(0,r._)(["","",""]);return o=function(){return t},t}function s(){let t=(0,r._)(["+",""]);return s=function(){return t},t}function c(){let t=(0,r._)(["",""]);return c=function(){return t},t}function f(){let t=(0,r._)(["","^",""]);return f=function(){return t},t}function d(t){return Math.floor(100*t)/100}function h(t){if(0===t)return"0";if(1===t)return"1";let e=Math.floor(Math.log10(Math.abs(t))),n=t/Math.pow(10,e),r=String.raw(a(),e);return 1===e?(n*=10,String.raw(i(),d(n))):-1===e?(n/=10,String.raw(l(),d(n))):(0===e&&(r=""),String.raw(o(),d(n),r))}function p(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.reduce((t,e)=>t+e,e)}function m(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.pIu([0,0]);return t.reduce((t,e)=>u.IHx(t,e),e)}function g(t){let e=t.toArray()[0],n=t.toArray()[1];return"[".concat(h(e),", ").concat(h(n),"]")}function M(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(t)*Math.abs(t)**(1/e)}function y(t){return t.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function j(t,e){let n=Math.atan2(e,t);return 0===t&&0===e&&(n=0),[Math.sqrt(t**2+e**2),n]}function b(t,e){return[t*Math.cos(e),t*Math.sin(e)]}function v(t,e,n){return Math.min(Math.max(t,e),n)}function _(t){return t-2*Math.PI*Math.floor(t/(2*Math.PI))}function x(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",n=!1;return t.map((t,r)=>{if(0===t)return"";let u="";return(1!==t||0===r)&&(u=h(t)),t>0&&n&&(u=String.raw(s(),u)),1===r?u+=String.raw(c(),e):0!==r&&(u+=String.raw(f(),e,r)),n=!0,u}).join("")}},7141:function(t,e,n){"use strict";n.d(e,{A6:function(){return v},BM:function(){return g},Dl:function(){return l},F0:function(){return f},IB:function(){return p},OQ:function(){return j},R3:function(){return h},b7:function(){return c},c8:function(){return b},hH:function(){return M},lr:function(){return _},p_:function(){return o},sy:function(){return d},vU:function(){return m},yC:function(){return y}});var r=n(8183),u=n(3726);let a=r.pIu([[-1,-2,0,0,0,0,0],[1,3,0,0,0,0,0],[0,-1,1,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,1,0],[0,0,0,0,0,0,1]]),i=r.JBn(a),l={geometrized:{name:"Geometrized",f:i,b:a,units:["c","G","kg","A","K","cd","mol"],consts:[u.c,u.G,1,1,1,1,1]},geometrizedMass:{name:"Geometrized with Mass",f:i,b:a,units:["c","G","M","A","K","cd","mol"],consts:[u.c,u.G,1,1,1,1,1]}},o=["s","m","kg","A","K","cd","mol"],s=[null,null,null,null,null,null,null];function c(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;return n[t]=e,n}let f=[-1,1,0,0,0,0,0],d=[0,1,0,0,0,0,0],h=[1,0,0,0,0,0,0],p=[-1,0,0,0,0,0,0],m=[0,0,1,0,0,0,0],g=[-2,2,1,0,0,0,0],M=[-1,2,1,0,0,0,0];function y(t,e,n){let u=r.p4s(r.pIu(e)),a=l[t][n];return r.p4s(r.JpY(a,u)).toArray()}function j(t,e,n,r){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[null,null,null,null,null,null,null],a=y(n,e,"f").reduce((t,e,r)=>{var a;return t*(null!==(a=u[r])&&void 0!==a?a:l[n].consts[r])**e},1);return"f"===r&&(a=1/a),a*t}function b(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[null,null,null,null,null,null,null];return j(t,e,n,"f",r)}function v(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[null,null,null,null,null,null,null];return j(t,e,n,"b",r)}function _(t,e){return t.map((t,n)=>{if(0===t)return"";let r=o[n];return"si"!==e&&(r=l[e].units[n]),1!==t&&(r+="^{".concat(t,"}")),r+"\\ "}).join("")}},6093:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,{_:function(){return r}})}},function(t){t.O(0,[639,250,749,183,971,69,744],function(){return t(t.s=4528)}),_N_E=t.O()}]);