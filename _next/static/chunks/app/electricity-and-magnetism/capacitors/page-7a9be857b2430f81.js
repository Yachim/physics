(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{5042:function(){},4722:function(t,e,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,7803))},8314:function(t,e,n){"use strict";var r=n(1811);function u(){}function o(){}o.resetWarningCache=u,t.exports=function(){function t(t,e,n,u,o,i){if(i!==r){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:u};return n.PropTypes=n,n}},4404:function(t,e,n){"use strict";t.exports=n(8314)()},1811:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2058:function(t,e,n){"use strict";var r,u,o;o=function(t,e,n,r){function u(t){return t&&t.__esModule?t:{default:t}}function o(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(o=function(t){return t?n:e})(t)}Object.defineProperty(t,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(t,{BlockMath:()=>f,InlineMath:()=>s}),e=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=o(e);if(n&&n.has(t))return n.get(t);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var a=u?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}(e),n=u(n),r=u(r);let i=(t,u)=>{let{displayMode:o}=u,i=n=>{let{children:u,errorColor:i,math:a,renderError:c}=n,l=null!=a?a:u,{html:f,error:s}=(0,e.useMemo)(()=>{try{return{html:r.default.renderToString(l,{displayMode:o,errorColor:i,throwOnError:!!c}),error:void 0}}catch(t){if(t instanceof r.default.ParseError||t instanceof TypeError)return{error:t};throw t}},[l,i,c]);return s?c?c(s):e.default.createElement(t,{html:"".concat(s.message)}):e.default.createElement(t,{html:f})};return i.propTypes={children:n.default.string,errorColor:n.default.string,math:n.default.string,renderError:n.default.func},i},a={html:n.default.string.isRequired},c=t=>{let{html:n}=t;return e.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};c.propTypes=a;let l=t=>{let{html:n}=t;return e.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};l.propTypes=a;let f=i(c,{displayMode:!0}),s=i(l,{displayMode:!1})},"object"==typeof t.exports?o(e,n(4090),n(4404),n(7837)):(r=[e,n(4090),n(4404),n(7837)],void 0===(u=o.apply(e,r))||(t.exports=u))},7803:function(t,e,n){"use strict";n.r(e),n.d(e,{CapacitanceCalculator:function(){return f}});var r=n(6093),u=n(3827),o=n(6881),i=n(4090),a=n(2058);function c(){let t=(0,r._)(["C = "," F"],["C = ","\\ F"]);return c=function(){return t},t}function l(){let t=(0,r._)(["C_"," = "]);return l=function(){return t},t}function f(){let[t,e]=(0,i.useState)("parallel"),[n,r]=(0,i.useState)([0]),f=(0,i.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return"parallel"===e?"serial":"parallel"},[t]),s=(0,i.useCallback)(()=>(0,o.P0)(n),[n]),p=(0,i.useCallback)(()=>1/(0,o.P0)(n.map(t=>1/t)),[n]),d=(0,i.useCallback)(()=>"parallel"===t?s():p(),[t,p,s]);return(0,u.jsx)("div",{className:"w-full flex justify-center",children:(0,u.jsxs)("div",{className:" flex flex-col gap-2",children:[(0,u.jsxs)("p",{className:"flex gap-2",children:[(0,o.kC)(t)," connection",(0,u.jsxs)("button",{onClick:()=>e(f),children:["Switch to ",f()]})]}),(0,u.jsx)(a.BlockMath,{math:String.raw(c(),(0,o.gZ)(d()))}),n.map((t,e)=>(0,u.jsxs)("label",{className:"flex gap-2",children:[(0,u.jsx)(a.InlineMath,{math:String.raw(l(),e+1)}),(0,u.jsx)("input",{type:"number",value:t,onChange:t=>r(n=>(n[e]=+t.target.value,[...n]))}),(0,u.jsx)("button",{onClick:()=>r(t=>(t.splice(e,1),[...t])),children:"Remove"})]},e)),(0,u.jsx)("button",{onClick:()=>r(t=>[...t,0]),children:"Add condensator"})]})})}},6881:function(t,e,n){"use strict";n.d(e,{CY:function(){return g},P0:function(){return h},SK:function(){return y},Xk:function(){return j},gZ:function(){return d},io:function(){return v},jE:function(){return _},kC:function(){return b},nt:function(){return k},ok:function(){return m},uZ:function(){return M}});var r=n(6093),u=n(8183);function o(){let t=(0,r._)([" cdot 10^{","}"],[" \\cdot 10^{","}"]);return o=function(){return t},t}function i(){let t=(0,r._)(["",""]);return i=function(){return t},t}function a(){let t=(0,r._)(["",""]);return a=function(){return t},t}function c(){let t=(0,r._)(["","",""]);return c=function(){return t},t}function l(){let t=(0,r._)(["+",""]);return l=function(){return t},t}function f(){let t=(0,r._)(["",""]);return f=function(){return t},t}function s(){let t=(0,r._)(["","^",""]);return s=function(){return t},t}function p(t){return Math.floor(100*t)/100}function d(t){if(0===t)return"0";if(1===t)return"1";let e=Math.floor(Math.log10(Math.abs(t))),n=t/Math.pow(10,e),r=String.raw(o(),e);return 1===e?(n*=10,String.raw(i(),p(n))):-1===e?(n/=10,String.raw(a(),p(n))):(0===e&&(r=""),String.raw(c(),p(n),r))}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.reduce((t,e)=>t+e,e)}function g(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.pIu([0,0]);return t.reduce((t,e)=>u.IHx(t,e),e)}function y(t){let e=t.toArray()[0],n=t.toArray()[1];return"[".concat(d(e),", ").concat(d(n),"]")}function m(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(t)*Math.abs(t)**(1/e)}function b(t){return t.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function _(t,e){let n=Math.atan2(e,t);return 0===t&&0===e&&(n=0),[Math.sqrt(t**2+e**2),n]}function v(t,e){return[t*Math.cos(e),t*Math.sin(e)]}function M(t,e,n){return Math.min(Math.max(t,e),n)}function j(t){return t-2*Math.PI*Math.floor(t/(2*Math.PI))}function k(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",n=!1;return t.map((t,r)=>{if(0===t)return"";let u="";return(1!==t||0===r)&&(u=d(t)),t>0&&n&&(u=String.raw(l(),u)),1===r?u+=String.raw(f(),e):0!==r&&(u+=String.raw(s(),e,r)),n=!0,u}).join("")}},6093:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,{_:function(){return r}})}},function(t){t.O(0,[639,250,749,183,971,69,744],function(){return t(t.s=4722)}),_N_E=t.O()}]);