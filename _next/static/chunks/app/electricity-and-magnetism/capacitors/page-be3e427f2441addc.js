(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{5042:function(){},4722:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,7803))},8314:function(e,t,n){"use strict";var r=n(1811);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,l){if(l!==r){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},4404:function(e,t,n){"use strict";e.exports=n(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2058:function(e,t,n){"use strict";var r,o,a;a=function(e,t,n,r){function o(e){return e&&e.__esModule?e:{default:e}}function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}Object.defineProperty(e,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(e,{BlockMath:()=>s,InlineMath:()=>f}),t=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(r,l,u):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(t),n=o(n),r=o(r);let l=(e,o)=>{let{displayMode:a}=o,l=n=>{let{children:o,errorColor:l,math:u,renderError:c}=n,i=null!=u?u:o,{html:s,error:f}=(0,t.useMemo)(()=>{try{return{html:r.default.renderToString(i,{displayMode:a,errorColor:l,throwOnError:!!c}),error:void 0}}catch(e){if(e instanceof r.default.ParseError||e instanceof TypeError)return{error:e};throw e}},[i,l,c]);return f?c?c(f):t.default.createElement(e,{html:"".concat(f.message)}):t.default.createElement(e,{html:s})};return l.propTypes={children:n.default.string,errorColor:n.default.string,math:n.default.string,renderError:n.default.func},l},u={html:n.default.string.isRequired},c=e=>{let{html:n}=e;return t.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};c.propTypes=u;let i=e=>{let{html:n}=e;return t.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};i.propTypes=u;let s=l(c,{displayMode:!0}),f=l(i,{displayMode:!1})},"object"==typeof e.exports?a(t,n(4090),n(4404),n(7837)):(r=[t,n(4090),n(4404),n(7837)],void 0===(o=a.apply(t,r))||(e.exports=o))},7803:function(e,t,n){"use strict";n.r(t),n.d(t,{CapacitanceCalculator:function(){return s}});var r=n(6093),o=n(3827),a=n(6881),l=n(4090),u=n(2058);function c(){let e=(0,r._)(["C = "," F"],["C = ","\\ F"]);return c=function(){return e},e}function i(){let e=(0,r._)(["C_"," = "]);return i=function(){return e},e}function s(){let[e,t]=(0,l.useState)("parallel"),[n,r]=(0,l.useState)([0]),s=(0,l.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return"parallel"===t?"serial":"parallel"},[e]),f=(0,l.useCallback)(()=>(0,a.P0)(n),[n]),p=(0,l.useCallback)(()=>1/(0,a.P0)(n.map(e=>1/e)),[n]),d=(0,l.useCallback)(()=>"parallel"===e?f():p(),[e,p,f]);return(0,o.jsx)("div",{className:"w-full flex justify-center",children:(0,o.jsxs)("div",{className:" flex flex-col gap-2",children:[(0,o.jsxs)("p",{className:"flex gap-2",children:[(0,a.kC)(e)," connection",(0,o.jsxs)("button",{onClick:()=>t(s),children:["Switch to ",s()]})]}),(0,o.jsx)(u.BlockMath,{math:String.raw(c(),(0,a.gZ)(d()))}),n.map((e,t)=>(0,o.jsxs)("label",{className:"flex gap-2",children:[(0,o.jsx)(u.InlineMath,{math:String.raw(i(),t+1)}),(0,o.jsx)("input",{type:"number",value:e,onChange:e=>r(n=>(n[t]=+e.target.value,[...n]))}),(0,o.jsx)("button",{onClick:()=>r(e=>(e.splice(t),[...e])),children:"Remove"})]},t)),(0,o.jsx)("button",{onClick:()=>r(e=>[...e,0]),children:"Add condensator"})]})})}},6881:function(e,t,n){"use strict";n.d(t,{CY:function(){return l},P0:function(){return a},SK:function(){return u},gZ:function(){return o},kC:function(){return i},ok:function(){return c}});var r=n(8183);function o(e){if(0===e)return"0";let t=Math.floor(Math.log10(Math.abs(e))),n=e/Math.pow(10,t);return"".concat(n.toFixed(2)," \\cdot 10^{").concat(t,"}")}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce((e,t)=>e+t,t)}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.pIu([0,0]);return e.reduce((e,t)=>r.IHx(e,t),t)}function u(e){let t=e.toArray()[0],n=e.toArray()[1];return"[".concat(o(t),", ").concat(o(n),"]")}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(e)*Math.abs(e)**(1/t)}function i(e){return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}}},function(e){e.O(0,[639,250,183,787,971,69,744],function(){return e(e.s=4722)}),_N_E=e.O()}]);