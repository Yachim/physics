(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{5042:function(){},8567:function(t,e,r){Promise.resolve().then(r.t.bind(r,1749,23)),Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.bind(r,8846))},8846:function(t,e,r){"use strict";r.r(e),r.d(e,{ElectricDipolePlot:function(){return h},TwoChargesElectricField:function(){return v}});var n=r(6093),u=r(3827),o=r(2148),a=r(3726),c=r(6881),i=r(8183),l=r(7881);function s(){let t=(0,n._)(["$\vec{E} = [","]$"],["$\\vec{E} = [","]$"]);return s=function(){return t},t}function f(){let t=(0,n._)(["$|\vec{E}| = "," N C^{-1}$"],["$|\\vec{E}| = ","\\ N C^{-1}$"]);return f=function(){return t},t}function d(){let t=(0,n._)(["$\vec{E} = [",", ","]$"],["$\\vec{E} = [",",\\ ","]$"]);return d=function(){return t},t}function p(){let t=(0,n._)(["$|\vec{E}| = "," NC^{-1}$"],["$|\\vec{E}| = ","\\ NC^{-1}$"]);return p=function(){return t},t}function v(t){var e;return(0,u.jsx)(o.V,{...t,bbox:null!==(e=t.bbox)&&void 0!==e?e:[-.8,.45,.8,-.45],initFn:t=>{let e=[[0,0,1e-8],[.5,0,-.00000002]],r=i.pIu([0,.2]),n=e.map((e,r)=>{let[n,u,o]=e,a=t.create("input",[-.75,.4-.05*r,o,"$q_".concat(r+1," =\\ $")]);return[t.create("point",[n,u],{name:r+1,color:()=>0>+a.Value()?"red":"green",visible:()=>0!=+a.Value()}),a]}),u=t.create("point",r.toArray(),{name:"Target Position"}),o=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.pIu([u.X(),u.Y()]);return(0,c.CY)(n.map(e=>{let[r,n]=e;return function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.pIu([u.X(),u.Y()]),n=i.pIu([t.X(),t.Y()]),o=i.$XF(r,n),c=l.tS(o).norm().number().done(),s=i.csF(o,c);return i.JpY(a.k*e/c**2,s)}(r,+n.Value(),t)}))};t.create("text",[-.75,.3,()=>String.raw(s(),(0,c.SK)(o()).join(",\\ "))]),t.create("text",[-.75,.25,()=>String.raw(f(),(0,c.gZ)(i.KOy(o())))]),t.create("button",[-.75,.2,"Reset",()=>{n.forEach((t,n)=>{let[o,a]=t;o.moveTo([e[n][0],e[n][1]]),a.set(e[n][2].toString()),u.moveTo(r.toArray())})}]);let d=t.create("slider",[[.4,.4],[.6,.4],[0,.055,1]],{suffixLabel:"Scale = "});t.create("arrow",[u,()=>{let t=o();return l.tS(t).divide(i.KOy(t)).multiply(3*+d.Value()).add(i.pIu([u.X(),u.Y()])).done().toArray()}],{color:"orange",lastArrow:{type:2}});let p=t.getBoundingBox(),v=Math.abs(p[0]-p[2]),h=Math.abs(p[1]-p[3]);t.create("vectorfield",[(t,e)=>{let r=o(i.pIu([t,e]));return i.csF(r,i.KOy(r)).toArray()},[()=>p[0],25,()=>p[2]],[()=>p[3],25/(v/h),()=>p[1]]],{scale:()=>d.Value()})}})}function h(t){var e;return(0,u.jsx)(o.V,{...t,bbox:null!==(e=t.bbox)&&void 0!==e?e:[-.8,.45,.8,-.45],initFn:t=>{let e=t.create("point",[-.2,0],{name:"q",color:"green"}),r=t.create("point",[.2,0],{name:"-q",color:"red"}),n=t.create("input",[-.7,.4,.3,"$a =\\ $"]),u=t.create("input",[-.7,.35,1e-8,"$q =\\ $"]);function o(t){let n=i.pIu([e.X(),e.Y()]),u=i.pIu([r.X(),r.Y()]),o=i.$XF(u,n),a=i.KOy(o),c=i.csF(o,a),s=i.U1s(o,Math.PI/2),f=i.csF(s,i.KOy(s));return l.tS(c).multiply(a/2).add(n).add(i.JpY(t,f)).done()}let s=t.create("point",[()=>o(+n.Value()).subset(i.KzB(0)),()=>o(+n.Value()).subset(i.KzB(1))]);function f(t){let n=Math.sqrt((e.X()-r.X())**2+(e.Y()-r.Y())**2);return i.JpY(8*a.k*+u.Value()/(n**2+4*t**2)**1.5,i.pIu([r.X()-e.X(),r.Y()-e.Y()]))}t.create("bisector",[e,s,r],{dash:3});let v=t.create("slider",[[.4,.4],[.6,.4],[0,.055,1]],{suffixLabel:"Scale = "});t.create("text",[-.7,.3,()=>{let t=f(+n.Value()),e=(0,c.gZ)(t.toArray()[0]),r=(0,c.gZ)(t.toArray()[1]);return String.raw(d(),e,r)}]),t.create("text",[-.7,.25,()=>String.raw(p(),(0,c.gZ)(i.KOy(f(+n.Value()))))]),t.create("arrow",[s,()=>{let t=f(+n.Value()),e=i.csF(t,i.KOy(t));return l.tS(e).multiply(3*+v.Value()).add(i.pIu([s.X(),s.Y()])).done().toArray()}],{color:"orange",lastArrow:{type:2}});let h=t.getBoundingBox(),b=Math.sqrt((h[0]-h[2])**2+(h[1]-h[3])**2),g=b/40,y=-(b/2);for(let e=0;e<40;e++){let r=y+g*e;t.create("arrow",[()=>{let t=o(r);return[t.subset(i.KzB(0)),t.subset(i.KzB(1))]},()=>{let t=o(r),e=f(r),n=i.csF(e,i.KOy(e));return l.tS(n).multiply(+v.Value()).add(t).done().toArray()}],{lastArrow:{type:2}})}}})}},2148:function(t,e,r){"use strict";r.d(e,{V:function(){return a}});var n=r(3827),u=r(6205),o=r(4090);function a(t){let{bbox:e,axis:r,initFn:a}=t,c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=u.ZP.JSXGraph.initBoard(c.current,{axis:null==r||r,boundingBox:null!=e?e:[-8,4.5,8,-4.5],showCopyright:!1,keepAspectRatio:!0});return a&&a(t),()=>u.ZP.JSXGraph.freeBoard(t)},[e,a,r]),(0,n.jsx)("div",{className:"w-full aspect-video",ref:c})}u.ZP.Options.text.useMathJax=!0},3726:function(t,e,r){"use strict";r.d(e,{Z:function(){return u},k:function(){return n}});let n=9e9,u={vacuum:1,air:1,water:81.6}},6881:function(t,e,r){"use strict";r.d(e,{CY:function(){return o},SK:function(){return a},gZ:function(){return u},ok:function(){return c}});var n=r(8183);function u(t){if(0===t)return"0";let e=Math.floor(Math.log10(Math.abs(t))),r=t/Math.pow(10,e);return"".concat(r.toFixed(2)," \\cdot 10^{").concat(e,"}")}function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.pIu([0,0]);return t.reduce((t,e)=>n.IHx(t,e),e)}function a(t){let e=t.toArray()[0],r=t.toArray()[1];return[u(e),u(r)]}function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(t)*Math.abs(t)**(1/e)}}},function(t){t.O(0,[186,143,41,410,250,182,787,971,69,744],function(){return t(t.s=8567)}),_N_E=t.O()}]);