(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{5042:function(){},8314:function(e,t,n){"use strict";var r=n(1811);function u(){}function l(){}l.resetWarningCache=u,e.exports=function(){function e(e,t,n,u,l,o){if(o!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:u};return n.PropTypes=n,n}},4404:function(e,t,n){"use strict";e.exports=n(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2058:function(e,t,n){"use strict";var r,u,l;l=function(e,t,n,r){function u(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}Object.defineProperty(e,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(e,{BlockMath:()=>f,InlineMath:()=>s}),t=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(t),n=u(n),r=u(r);let o=(e,u)=>{let{displayMode:l}=u,o=n=>{let{children:u,errorColor:o,math:i,renderError:c}=n,a=null!=i?i:u,{html:f,error:s}=(0,t.useMemo)(()=>{try{return{html:r.default.renderToString(a,{displayMode:l,errorColor:o,throwOnError:!!c}),error:void 0}}catch(e){if(e instanceof r.default.ParseError||e instanceof TypeError)return{error:e};throw e}},[a,o,c]);return s?c?c(s):t.default.createElement(e,{html:"".concat(s.message)}):t.default.createElement(e,{html:f})};return o.propTypes={children:n.default.string,errorColor:n.default.string,math:n.default.string,renderError:n.default.func},o},i={html:n.default.string.isRequired},c=e=>{let{html:n}=e;return t.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};c.propTypes=i;let a=e=>{let{html:n}=e;return t.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:n}})};a.propTypes=i;let f=o(c,{displayMode:!0}),s=o(a,{displayMode:!1})},"object"==typeof e.exports?l(t,n(4090),n(4404),n(7837)):(r=[t,n(4090),n(4404),n(7837)],void 0===(u=l.apply(t,r))||(e.exports=u))},3726:function(e,t,n){"use strict";n.d(t,{G:function(){return i},Z:function(){return u},c:function(){return o},k:function(){return r},s:function(){return l}});let r=9e9,u=1/(4*Math.PI*9e9),l={vacuum:1,air:1,water:81.6},o=299792458,i=66743e-15},7141:function(e,t,n){"use strict";n.d(t,{A6:function(){return m},Dl:function(){return i},R3:function(){return p},b7:function(){return f},c8:function(){return h},p_:function(){return c},sy:function(){return s},yC:function(){return d}});var r=n(8183),u=n(3726);let l=r.pIu([[-1,-2,0,0,0,0,0],[1,3,0,0,0,0,0],[0,-1,1,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,1,0],[0,0,0,0,0,0,1]]),o=r.JBn(l),i={geometrized:{name:"Geometrized",f:o,b:l,units:["c","G","kg","A","K","cd","mol"],consts:[u.c,u.G,1,1,1,1,1]},geometrizedMass:{name:"Geometrized with Mass",f:o,b:l,units:["c","G","M","A","K","cd","mol"],consts:[u.c,u.G,1,1,1,1,1]}},c=["s","m","kg","A","K","cd","mol"],a=[null,null,null,null,null,null,null];function f(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a;return n[e]=t,n}let s=[0,1,0,0,0,0,0],p=[1,0,0,0,0,0,0];function d(e,t,n){let u=r.p4s(r.pIu(t)),l=i[e][n];return r.p4s(r.JpY(l,u)).toArray()}function y(e,t,n,r){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[null,null,null,null,null,null,null],l=d(n,t,"f").reduce((e,t,r)=>{var l;return e*(null!==(l=u[r])&&void 0!==l?l:i[n].consts[r])**t},1);return"f"===r&&(l=1/l),l*e}function h(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[null,null,null,null,null,null,null];return y(e,t,n,"f",r)}function m(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[null,null,null,null,null,null,null];return d(n,t,"f"),y(e,t,n,"b",r)}}}]);