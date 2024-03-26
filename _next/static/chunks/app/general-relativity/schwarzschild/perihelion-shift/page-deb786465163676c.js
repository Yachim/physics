(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{1354:function(e,t,n){Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,3707))},3707:function(e,t,n){"use strict";n.r(t),n.d(t,{OrbitalPrecessionCalculator:function(){return o}});var r=n(6093),a=n(3827),u=n(6881),s=n(7141),i=n(4090),l=n(2058);function c(){let e=(0,r._)(["\n                    \begin{align*}\n                        Delta phi &= "," 	extrm{rad/period} \\\n                        &= "," 	extrm{rad/century} \\\n                        &= "," 	extrm{arcsec/century}\n                    end{align*}\n                "],["\n                    \\begin{align*}\n                        \\Delta \\phi &= ","\\ \\textrm{rad/period} \\\\\n                        &= ","\\ \\textrm{rad/century} \\\\\n                        &= ","\\ \\textrm{arcsec/century}\n                    \\end{align*}\n                "]);return c=function(){return e},e}function o(){let[e,t]=(0,i.useState)(197e28),[n,r]=(0,i.useState)(46e9),[o,f]=(0,i.useState)(15e-7),[g,h]=(0,i.useState)(69800),[m,d]=(0,i.useState)("perp"),p=(0,i.useMemo)(()=>(0,s.c8)(n,s.sy,"geometrizedMass",(0,s.b7)(2,e)),[n,e]),j=(0,i.useMemo)(()=>(0,s.c8)("angular"===m?o:g/n,s.IB,"geometrizedMass",(0,s.b7)(2,e)),[o,e,n,m,g]),x=(0,i.useMemo)(()=>p**2*j,[p,j]),M=(0,i.useMemo)(()=>3/x**2,[x]),b=(0,i.useMemo)(()=>2*Math.PI*M,[M]),[v,y]=(0,i.useState)(88),_=(0,i.useMemo)(()=>b/v*36500,[b,v]),N=(0,i.useMemo)(()=>180*_/Math.PI*3600,[_]);return(0,a.jsxs)("div",{className:"grid grid-cols-[auto_auto] gap-2",children:[(0,a.jsxs)("label",{className:"justify-self-end gap-0",children:[(0,a.jsx)(l.InlineMath,{math:"M\\ (kg)"}),":"]}),(0,a.jsx)("input",{className:"justify-self-start",type:"number",value:e,onChange:e=>t(+e.target.value)}),(0,a.jsxs)("label",{className:"justify-self-end gap-0",children:[(0,a.jsx)(l.InlineMath,{math:"r\\ (m)"}),":"]}),(0,a.jsx)("input",{className:"justify-self-start",type:"number",value:n,onChange:e=>r(+e.target.value)}),(0,a.jsxs)("label",{className:"justify-self-end gap-0",children:[(0,a.jsx)(l.InlineMath,{math:"angular"===m?"\\omega_0\\ (s^{-1})":"v_{perp0}\\ (m\\ s^{-1})"}),":"]}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("input",{className:"justify-self-start",type:"number",value:"angular"===m?o:g,onChange:"angular"===m?e=>f(+e.target.value):e=>h(+e.target.value)}),(0,a.jsxs)("button",{onClick:()=>d(e=>"angular"===e?"perp":"angular"),children:["Switch to ",(0,a.jsx)(l.InlineMath,{math:"angular"===m?"v_{perp0}":"\\omega_0"})]})]}),(0,a.jsxs)("label",{className:"justify-self-end gap-0",children:[(0,a.jsx)(l.InlineMath,{math:"T\\ (\\textrm{days})"}),":"]}),(0,a.jsx)("input",{className:"justify-self-start",type:"number",value:v,onChange:e=>y(+e.target.value)}),(0,a.jsx)("div",{className:"col-span-2",children:(0,a.jsx)(l.BlockMath,{math:String.raw(c(),(0,u.gZ)(b),(0,u.gZ)(_),(0,u.gZ)(N))})})]})}},6881:function(e,t,n){"use strict";n.d(t,{CY:function(){return o},P0:function(){return c},SK:function(){return f},gZ:function(){return l},kC:function(){return h},ok:function(){return g}});var r=n(6093),a=n(8183);function u(){let e=(0,r._)([" cdot 10^{","}"],[" \\cdot 10^{","}"]);return u=function(){return e},e}function s(){let e=(0,r._)(["",""]);return s=function(){return e},e}function i(){let e=(0,r._)(["","",""]);return i=function(){return e},e}function l(e){if(0===e)return"0";if(1===e)return"1";let t=Math.floor(Math.log10(Math.abs(e))),n=Math.floor(e/Math.pow(10,t)*100)/100,r=String.raw(u(),t);return 1===t?String.raw(s(),10*n):(0===t&&(r=""),String.raw(i(),n,r))}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce((e,t)=>e+t,t)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.pIu([0,0]);return e.reduce((e,t)=>a.IHx(e,t),t)}function f(e){let t=e.toArray()[0],n=e.toArray()[1];return"[".concat(l(t),", ").concat(l(n),"]")}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(e)*Math.abs(e)**(1/t)}function h(e){return e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}},6093:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return r}})}},function(e){e.O(0,[639,250,183,208,971,69,744],function(){return e(e.s=1354)}),_N_E=e.O()}]);