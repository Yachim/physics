(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1522],{5042:function(){},9895:function(e,n,t){Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,2762))},8314:function(e,n,t){"use strict";var r=t(1811);function l(){}function u(){}u.resetWarningCache=l,e.exports=function(){function e(e,n,t,l,u,a){if(a!==r){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:l};return t.PropTypes=t,t}},4404:function(e,n,t){"use strict";e.exports=t(8314)()},1811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2058:function(e,n,t){"use strict";var r,l,u;u=function(e,n,t,r){function l(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(u=function(e){return e?t:n})(e)}Object.defineProperty(e,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(e,{BlockMath:()=>c,InlineMath:()=>f}),n=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=u(n);if(t&&t.has(e))return t.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=l?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(n),t=l(t),r=l(r);let a=(e,l)=>{let{displayMode:u}=l,a=t=>{let{children:l,errorColor:a,math:o,renderError:i}=t,s=null!=o?o:l,{html:c,error:f}=(0,n.useMemo)(()=>{try{return{html:r.default.renderToString(s,{displayMode:u,errorColor:a,throwOnError:!!i}),error:void 0}}catch(e){if(e instanceof r.default.ParseError||e instanceof TypeError)return{error:e};throw e}},[s,a,i]);return f?i?i(f):n.default.createElement(e,{html:"".concat(f.message)}):n.default.createElement(e,{html:c})};return a.propTypes={children:t.default.string,errorColor:t.default.string,math:t.default.string,renderError:t.default.func},a},o={html:t.default.string.isRequired},i=e=>{let{html:t}=e;return n.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:t}})};i.propTypes=o;let s=e=>{let{html:t}=e;return n.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:t}})};s.propTypes=o;let c=a(i,{displayMode:!0}),f=a(s,{displayMode:!1})},"object"==typeof e.exports?u(n,t(4090),t(4404),t(7837)):(r=[n,t(4090),t(4404),t(7837)],void 0===(l=u.apply(n,r))||(e.exports=l))},2762:function(e,n,t){"use strict";t.r(n),t.d(n,{UnitConverter:function(){return i}});var r=t(3827),l=t(4090),u=t(2058),a=t(5313),o=t(7141);function i(){var e;let n=null!==(e=(0,a.useSearchParams)().get("system"))&&void 0!==e?e:"";Object.keys(o.Dl).includes(n)||(n="geometrized");let[t,i]=(0,l.useState)(n),[s,c]=(0,l.useState)("f"),[f,p]=(0,l.useState)([0,0,0,0,0,0,0]),d=(0,l.useMemo)(()=>(0,o.lr)(f,"f"===s?"si":t),[s,t,f]),m=(0,l.useMemo)(()=>(0,o.yC)(t,f,s),[t,f,s]),h=(0,l.useMemo)(()=>(0,o.lr)(m,"b"===s?"si":t),[s,t,m]),[y,v]=(0,l.useState)([null,null,null,null,null,null,null]),[g,b]=(0,l.useState)(0);return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsxs)("label",{className:"flex gap-2",children:["System:",(0,r.jsx)("select",{value:t,onChange:e=>i(e.target.value),children:Object.keys(o.Dl).map((e,n)=>(0,r.jsx)("option",{value:e,children:o.Dl[e].name},n))})]}),(0,r.jsxs)("p",{className:"flex gap-2",children:["Conversion: ","SI ".concat("f"===s?"→":"←"," ").concat(o.Dl[t].name),(0,r.jsx)("button",{onClick:()=>c(e=>"f"===e?"b":"f"),children:"Switch"})]}),(0,r.jsx)("div",{className:"flex gap-2",children:f.map((e,n)=>(0,r.jsxs)("label",{className:"flex gap-1",children:[(0,r.jsx)("input",{className:"w-20",type:"number",value:e,onChange:e=>p(t=>(t[n]=+e.target.value,[...t]))}),(0,r.jsx)(u.InlineMath,{math:("f"===s?o.p_[n]:o.Dl[t].units[n])+"^x"})]},n))}),(0,r.jsxs)("p",{children:["Units: ",(0,r.jsx)(u.InlineMath,{math:""===h?"1":h})]}),(0,r.jsx)("p",{children:"Extra constants:"}),(0,r.jsx)("div",{className:"flex gap-2",children:y.map((e,n)=>(0,r.jsx)("label",{className:"flex gap-1",children:(0,r.jsx)("input",{className:"w-20",type:"number",value:null!=e?e:"",onChange:e=>v(t=>(t[n]=""===e.target.value?null:+e.target.value,[...t]))})},n))}),(0,r.jsxs)("label",{className:"mt-3",children:["Value: ",(0,r.jsx)("input",{type:"number",value:g,onChange:e=>b(+e.target.value)})," ",(0,r.jsx)(u.InlineMath,{math:d})]}),(0,r.jsxs)("p",{children:["Converted value: ",(0,o.OQ)(g,"f"===s?f:m,t,s,y)," ",(0,r.jsx)(u.InlineMath,{math:h})]})]})}},3726:function(e,n,t){"use strict";t.d(n,{G:function(){return o},Z:function(){return l},c:function(){return a},k:function(){return r},s:function(){return u}});let r=9e9,l=1/(4*Math.PI*9e9),u={vacuum:1,air:1,water:81.6},a=299792458,o=66743e-15},7141:function(e,n,t){"use strict";t.d(n,{A6:function(){return O},BM:function(){return g},Dl:function(){return s},F0:function(){return d},IB:function(){return y},OQ:function(){return j},R3:function(){return h},b7:function(){return p},c8:function(){return _},hH:function(){return b},lr:function(){return M},p_:function(){return c},sy:function(){return m},vU:function(){return v},yC:function(){return x}});var r=t(8183),l=t(3726);let u=r.pIu([[-1,0,0,0,0,0,0],[1,1,0,0,0,0,0],[0,0,1,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,1,0],[0,0,0,0,0,0,1]]),a=r.JBn(u),o=r.pIu([[-1,-2,0,0,0,0,0],[1,3,0,0,0,0,0],[0,-1,1,0,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,1,0],[0,0,0,0,0,0,1]]),i=r.JBn(o),s={specialRelativity:{name:"Special Relativity",f:a,b:u,units:["c","m","kg","A","K","cd","mol"],consts:[l.c,1,1,1,1,1,1]},geometrized:{name:"Geometrized",f:i,b:o,units:["c","G","kg","A","K","cd","mol"],consts:[l.c,l.G,1,1,1,1,1]},geometrizedMass:{name:"Geometrized with Mass",f:i,b:o,units:["c","G","M","A","K","cd","mol"],consts:[l.c,l.G,1,1,1,1,1]}},c=["s","m","kg","A","K","cd","mol"],f=[null,null,null,null,null,null,null];function p(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;return t[e]=n,t}let d=[-1,1,0,0,0,0,0],m=[0,1,0,0,0,0,0],h=[1,0,0,0,0,0,0],y=[-1,0,0,0,0,0,0],v=[0,0,1,0,0,0,0],g=[-2,2,1,0,0,0,0],b=[-1,2,1,0,0,0,0];function x(e,n,t){let l=r.p4s(r.pIu(n)),u=s[e][t];return r.p4s(r.JpY(u,l)).toArray()}function j(e,n,t,r){let l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[null,null,null,null,null,null,null],u=x(t,n,"f").reduce((e,n,r)=>{var u;return e*(null!==(u=l[r])&&void 0!==u?u:s[t].consts[r])**n},1);return"f"===r&&(u=1/u),u*e}function _(e,n,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[null,null,null,null,null,null,null];return j(e,n,t,"f",r)}function O(e,n,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[null,null,null,null,null,null,null];return j(e,n,t,"b",r)}function M(e,n){return e.map((e,t)=>{if(0===e)return"";let r=c[t];return"si"!==n&&(r=s[n].units[t]),1!==e&&(r+="^{".concat(e,"}")),r+"\\ "}).join("")}}},function(e){e.O(0,[9639,5250,8183,2971,8069,1744],function(){return e(e.s=9895)}),_N_E=e.O()}]);