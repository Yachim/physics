(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{4528:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,7318))},7318:function(e,t,n){"use strict";n.r(t),n.d(t,{PerpendicularDistanceCalculator:function(){return m},TimeDilationCalculator:function(){return f}});var s=n(6093),a=n(3827),r=n(6881),u=n(7141),i=n(4090),l=n(2058);function o(){let e=(0,s._)(["	au = ",""],["\\tau = ",""]);return o=function(){return e},e}function c(){let e=(0,s._)(["\n                    \begin{align*}\n                        Delta r &= "," m, \\\n                        L_0 &= "," m = ","Delta r m.\n                    end{align*}\n                "],["\n                    \\begin{align*}\n                        \\Delta r &= ","\\ m, \\\\\n                        L_0 &= ","\\ m = ","\\Delta r\\ m.\n                    \\end{align*}\n                "]);return c=function(){return e},e}function f(){let[e,t]=(0,i.useState)(0),[n,s]=(0,i.useState)(0),[r,c]=(0,i.useState)(0),f=(0,i.useMemo)(()=>(0,u.c8)(n,u.sy,"geometrizedMass",(0,u.b7)(2,e)),[n,e]),m=(0,i.useMemo)(()=>(0,u.c8)(r,u.R3,"geometrizedMass",(0,u.b7)(2,e)),[r,e]),h=(0,i.useMemo)(()=>Math.sqrt(1-2/f)*m,[f,m]),g=(0,i.useMemo)(()=>(0,u.A6)(h,u.R3,"geometrizedMass",(0,u.b7)(2,e)),[h,e]);return(0,a.jsxs)("div",{className:"grid grid-cols-[auto_auto] gap-2",children:[(0,a.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,a.jsx)(l.InlineMath,{math:"M\\ (kg)"}),":"]}),(0,a.jsx)("input",{type:"number",value:e,onChange:e=>t(+e.target.value),className:"justify-self-start"}),(0,a.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,a.jsx)(l.InlineMath,{math:"r\\ (m)"}),":"]}),(0,a.jsx)("input",{type:"number",value:n,onChange:e=>s(+e.target.value),className:"justify-self-start"}),(0,a.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,a.jsx)(l.InlineMath,{math:"t\\ "})," (any units):"]}),(0,a.jsx)("input",{type:"number",value:r,onChange:e=>c(+e.target.value),className:"justify-self-start"}),(0,a.jsx)("div",{className:"col-span-2",children:(0,a.jsx)(l.BlockMath,{math:String.raw(o(),g)})})]})}function m(){let[e,t]=(0,i.useState)(0),[n,s]=(0,i.useState)(0),[o,f]=(0,i.useState)(0),m=(0,i.useMemo)(()=>(0,u.c8)(o,u.sy,"geometrizedMass",(0,u.b7)(2,e)),[o,e]),h=(0,i.useMemo)(()=>(0,u.c8)(n,u.sy,"geometrizedMass",(0,u.b7)(2,e)),[n,e]),g=(0,i.useMemo)(()=>2*Math.acosh(Math.sqrt(m/2)),[m]),d=(0,i.useMemo)(()=>2*Math.acosh(Math.sqrt(h/2)),[h]),M=(0,i.useMemo)(()=>Math.sinh(g)+g,[g]),j=(0,i.useMemo)(()=>Math.sinh(d)+d,[d]),p=(0,i.useMemo)(()=>M-j,[M,j]),b=(0,i.useMemo)(()=>(0,u.A6)(p,u.sy,"geometrizedMass",(0,u.b7)(2,e)),[p,e]),x=(0,i.useMemo)(()=>o-n,[o,n]);return(0,a.jsxs)("div",{className:"grid grid-cols-[auto_auto] gap-2",children:[(0,a.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,a.jsx)(l.InlineMath,{math:"M\\ (kg)"}),":"]}),(0,a.jsx)("input",{type:"number",value:e,onChange:e=>t(+e.target.value),className:"justify-self-start"}),(0,a.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,a.jsx)(l.InlineMath,{math:"r_0\\ (m)"}),":"]}),(0,a.jsx)("input",{type:"number",value:n,onChange:e=>s(+e.target.value),className:"justify-self-start"}),(0,a.jsxs)("label",{className:"gap-0 justify-self-end",children:[(0,a.jsx)(l.InlineMath,{math:"r\\ (m)"}),":"]}),(0,a.jsx)("input",{type:"number",value:o,onChange:e=>f(+e.target.value),className:"justify-self-start"}),(0,a.jsx)("div",{className:"col-span-2",children:(0,a.jsx)(l.BlockMath,{math:String.raw(c(),(0,r.gZ)(x),(0,r.gZ)(b),(0,r.gZ)(b/x))})})]})}},6881:function(e,t,n){"use strict";n.d(t,{CY:function(){return o},P0:function(){return l},SK:function(){return c},gZ:function(){return i},kC:function(){return m},ok:function(){return f}});var s=n(6093),a=n(8183);function r(){let e=(0,s._)([" cdot 10^{","}"],[" \\cdot 10^{","}"]);return r=function(){return e},e}function u(){let e=(0,s._)(["","",""]);return u=function(){return e},e}function i(e){if(0===e)return"0";let t=Math.floor(Math.log10(Math.abs(e))),n=String.raw(r(),t);return 0===t&&(n=""),String.raw(u(),(e/Math.pow(10,t)).toFixed(2),n)}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce((e,t)=>e+t,t)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.pIu([0,0]);return e.reduce((e,t)=>a.IHx(e,t),t)}function c(e){let t=e.toArray()[0],n=e.toArray()[1];return"[".concat(i(t),", ").concat(i(n),"]")}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(e)*Math.abs(e)**(1/t)}function m(e){return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}},6093:function(e,t,n){"use strict";function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return s}})}},function(e){e.O(0,[639,250,183,749,208,971,69,744],function(){return e(e.s=4528)}),_N_E=e.O()}]);