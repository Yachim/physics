(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{5042:function(){},1887:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,728))},8314:function(e,t,n){"use strict";var r=n(1811);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,u,a){if(a!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:o};return n.PropTypes=n,n}},4404:function(e,t,n){"use strict";e.exports=n(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2058:function(e,t,n){"use strict";var r,o,u;u=function(e,t,n,r){function o(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}Object.defineProperty(e,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(e,{BlockMath:()=>s,InlineMath:()=>f}),t=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(t),n=o(n),r=o(r);let a=(e,o)=>{let{displayMode:u}=o,a=n=>{let{children:o,errorColor:a,math:i,renderError:c}=n,l=null!=i?i:o,{html:s,error:f}=(0,t.useMemo)(()=>{try{return{html:r.default.renderToString(l,{displayMode:u,errorColor:a,throwOnError:!!c}),error:void 0}}catch(e){if(e instanceof r.default.ParseError||e instanceof TypeError)return{error:e};throw e}},[l,a,c]);return f?c?c(f):t.default.createElement(e,{html:"".concat(f.message)}):t.default.createElement(e,{html:s})};return a.propTypes={children:n.default.string,errorColor:n.default.string,math:n.default.string,renderError:n.default.func},a},i={html:n.default.string.isRequired},c=e=>{let{html:n}=e;return t.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};c.propTypes=i;let l=e=>{let{html:n}=e;return t.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};l.propTypes=i;let s=a(c,{displayMode:!0}),f=a(l,{displayMode:!1})},"object"==typeof e.exports?u(t,n(4090),n(4404),n(7837)):(r=[t,n(4090),n(4404),n(7837)],void 0===(o=u.apply(t,r))||(e.exports=o))},728:function(e,t,n){"use strict";n.r(t),n.d(t,{ResistanceCalculator:function(){return s}});var r=n(6093),o=n(3827),u=n(6881),a=n(4090),i=n(2058);function c(){let e=(0,r._)(["R = "," Omega"],["R = ","\\ \\Omega"]);return c=function(){return e},e}function l(){let e=(0,r._)(["R_"," = "]);return l=function(){return e},e}function s(){let[e,t]=(0,a.useState)("parallel"),[n,r]=(0,a.useState)([0]),s=(0,a.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return"parallel"===t?"serial":"parallel"},[e]),f=(0,a.useCallback)(()=>1/(0,u.P0)(n.map(e=>1/e)),[n]),p=(0,a.useCallback)(()=>(0,u.P0)(n),[n]),d=(0,a.useCallback)(()=>"parallel"===e?f():p(),[e,f,p]);return(0,o.jsx)("div",{className:"w-full flex justify-center",children:(0,o.jsxs)("div",{className:" flex flex-col gap-2",children:[(0,o.jsxs)("p",{className:"flex gap-2",children:[(0,u.kC)(e)," connection",(0,o.jsxs)("button",{onClick:()=>t(s),children:["Switch to ",s()]})]}),(0,o.jsx)(i.BlockMath,{math:String.raw(c(),(0,u.gZ)(d()))}),n.map((e,t)=>(0,o.jsxs)("label",{className:"flex gap-2",children:[(0,o.jsx)(i.InlineMath,{math:String.raw(l(),t+1)}),(0,o.jsx)("input",{type:"number",value:e,onChange:e=>r(n=>(n[t]=+e.target.value,[...n]))}),(0,o.jsx)("button",{onClick:()=>r(e=>(e.splice(t,1),[...e])),children:"Remove"})]},t)),(0,o.jsx)("button",{onClick:()=>r(e=>[...e,0]),children:"Add resistor"})]})})}},6881:function(e,t,n){"use strict";n.d(t,{CY:function(){return p},P0:function(){return f},SK:function(){return d},Xk:function(){return b},gZ:function(){return s},io:function(){return m},jE:function(){return g},kC:function(){return y},ok:function(){return h}});var r=n(6093),o=n(8183);function u(){let e=(0,r._)([" cdot 10^{","}"],[" \\cdot 10^{","}"]);return u=function(){return e},e}function a(){let e=(0,r._)(["",""]);return a=function(){return e},e}function i(){let e=(0,r._)(["",""]);return i=function(){return e},e}function c(){let e=(0,r._)(["","",""]);return c=function(){return e},e}function l(e){return Math.floor(100*e)/100}function s(e){if(0===e)return"0";if(1===e)return"1";let t=Math.floor(Math.log10(Math.abs(e))),n=e/Math.pow(10,t),r=String.raw(u(),t);return 1===t?(n*=10,String.raw(a(),l(n))):-1===t?(n/=10,String.raw(i(),l(n))):(0===t&&(r=""),String.raw(c(),l(n),r))}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce((e,t)=>e+t,t)}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.pIu([0,0]);return e.reduce((e,t)=>o.IHx(e,t),t)}function d(e){let t=e.toArray()[0],n=e.toArray()[1];return"[".concat(s(t),", ").concat(s(n),"]")}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(e)*Math.abs(e)**(1/t)}function y(e){return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function g(e,t){let n=Math.atan2(t,e);return 0===e&&0===t&&(n=0),[Math.sqrt(e**2+t**2),n]}function m(e,t){return[e*Math.cos(t),e*Math.sin(t)]}function b(e){return e-2*Math.PI*Math.floor(e/(2*Math.PI))}},6093:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return r}})}},function(e){e.O(0,[639,250,183,749,971,69,744],function(){return e(e.s=1887)}),_N_E=e.O()}]);