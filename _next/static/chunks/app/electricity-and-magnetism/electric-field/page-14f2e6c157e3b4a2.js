(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{5042:function(){},8567:function(t,e,r){Promise.resolve().then(r.t.bind(r,1749,23)),Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.bind(r,1374))},1374:function(t,e,r){"use strict";r.r(e),r.d(e,{ElectricDipolePlot:function(){return h},InfiniteLineCharge:function(){return K},LineCharge:function(){return v},TwoChargesElectricField:function(){return x}});var n=r(6093),u=r(3827),o=r(2148),a=r(3726),l=r(6881),i=r(8183);function c(t){return i.pIu([t.X(),t.Y()])}var s=r(7881);function f(){let t=(0,n._)(["$\boldsymbol{E} = [","]$"],["$\\boldsymbol{E} = [","]$"]);return f=function(){return t},t}function d(){let t=(0,n._)(["$E = "," N C^{-1}$"],["$E = ","\\ N C^{-1}$"]);return d=function(){return t},t}function p(){let t=(0,n._)(["$\boldsymbol{E} = [",", ","]$"],["$\\boldsymbol{E} = [",",\\ ","]$"]);return p=function(){return t},t}function b(){let t=(0,n._)(["$E = "," NC^{-1}$"],["$E = ","\\ NC^{-1}$"]);return b=function(){return t},t}function y(){let t=(0,n._)(["$\boldsymbol{E} = [",", ","]$"],["$\\boldsymbol{E} = [",",\\ ","]$"]);return y=function(){return t},t}function $(){let t=(0,n._)(["$E = "," NC^{-1}$"],["$E = ","\\ NC^{-1}$"]);return $=function(){return t},t}function g(){let t=(0,n._)(["$\boldsymbol{E} = [",", ","]$"],["$\\boldsymbol{E} = [",",\\ ","]$"]);return g=function(){return t},t}function m(){let t=(0,n._)(["$E = "," NC^{-1}$"],["$E = ","\\ NC^{-1}$"]);return m=function(){return t},t}function x(t){var e;return(0,u.jsx)(o.V,{...t,bbox:null!==(e=t.bbox)&&void 0!==e?e:[-.8,.45,.8,-.45],initFn:t=>{let e=[[0,0,1e-8],[.5,0,-.00000002]],r=i.pIu([0,.2]),n=e.map((e,r)=>{let[n,u,o]=e,a=t.create("input",[-.75,.4-.05*r,o,"$q_".concat(r+1," =\\ $")]);return[t.create("point",[n,u],{name:r+1,color:()=>0>+a.Value()?"red":"green",visible:()=>0!=+a.Value()}),a]}),u=t.create("point",r.toArray(),{name:"Target Position"}),o=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.pIu([u.X(),u.Y()]);return(0,l.CY)(n.map(e=>{let[r,n]=e;return function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.pIu([u.X(),u.Y()]),n=i.pIu([t.X(),t.Y()]),o=i.$XF(r,n),l=s.tS(o).norm().number().done(),c=i.csF(o,l);return i.JpY(a.k*e/l**2,c)}(r,+n.Value(),t)}))};t.create("text",[-.75,.3,()=>String.raw(f(),(0,l.SK)(o()).join(",\\ "))]),t.create("text",[-.75,.25,()=>String.raw(d(),(0,l.gZ)(i.KOy(o())))]),t.create("button",[-.75,.2,"Reset",()=>{n.forEach((t,n)=>{let[o,a]=t;o.moveTo([e[n][0],e[n][1]]),a.set(e[n][2].toString()),u.moveTo(r.toArray())})}]);let c=t.create("slider",[[.4,.4],[.6,.4],[0,.055,1]],{suffixLabel:"Scale = "});t.create("arrow",[u,()=>{let t=o();return s.tS(t).divide(i.KOy(t)).multiply(3*+c.Value()).add(i.pIu([u.X(),u.Y()])).done().toArray()}],{color:"orange",lastArrow:{type:2}});let p=t.getBoundingBox(),b=Math.abs(p[0]-p[2]),y=Math.abs(p[1]-p[3]);t.create("vectorfield",[(t,e)=>{let r=o(i.pIu([t,e]));return i.csF(r,i.KOy(r)).toArray()},[()=>p[0],25,()=>p[2]],[()=>p[3],25/(b/y),()=>p[1]]],{scale:()=>c.Value()})}})}function h(t){var e;return(0,u.jsx)(o.V,{...t,bbox:null!==(e=t.bbox)&&void 0!==e?e:[-.8,.45,.8,-.45],initFn:t=>{let e=t.create("point",[-.2,0],{name:"q",color:"green"}),r=t.create("point",[.2,0],{name:"-q",color:"red"}),n=t.create("input",[-.7,.4,.3,"$a =\\ $"]),u=t.create("input",[-.7,.35,1e-8,"$q =\\ $"]);function o(t){let n=i.pIu([e.X(),e.Y()]),u=i.pIu([r.X(),r.Y()]),o=i.$XF(u,n),a=i.KOy(o),l=i.csF(o,a),c=i.U1s(o,Math.PI/2),f=i.csF(c,i.KOy(c));return s.tS(l).multiply(a/2).add(n).add(i.JpY(t,f)).done()}let c=t.create("point",[()=>o(+n.Value()).subset(i.KzB(0)),()=>o(+n.Value()).subset(i.KzB(1))]);function f(t){let n=Math.sqrt((e.X()-r.X())**2+(e.Y()-r.Y())**2);return i.JpY(8*a.k*+u.Value()/(n**2+4*t**2)**1.5,i.pIu([r.X()-e.X(),r.Y()-e.Y()]))}t.create("bisector",[e,c,r],{dash:3});let d=t.create("slider",[[.4,.4],[.6,.4],[0,.055,1]],{suffixLabel:"Scale = "});t.create("text",[-.7,.3,()=>{let t=f(+n.Value()),e=(0,l.gZ)(t.toArray()[0]),r=(0,l.gZ)(t.toArray()[1]);return String.raw(p(),e,r)}]),t.create("text",[-.7,.25,()=>String.raw(b(),(0,l.gZ)(i.KOy(f(+n.Value()))))]),t.create("arrow",[c,()=>{let t=f(+n.Value()),e=i.csF(t,i.KOy(t));return s.tS(e).multiply(3*+d.Value()).add(i.pIu([c.X(),c.Y()])).done().toArray()}],{color:"orange",lastArrow:{type:2}});let y=t.getBoundingBox(),$=Math.sqrt((y[0]-y[2])**2+(y[1]-y[3])**2),g=$/40,m=-($/2);for(let e=0;e<40;e++){let r=m+g*e;t.create("arrow",[()=>{let t=o(r);return[t.subset(i.KzB(0)),t.subset(i.KzB(1))]},()=>{let t=o(r),e=f(r),n=i.csF(e,i.KOy(e));return s.tS(n).multiply(+d.Value()).add(t).done().toArray()}],{lastArrow:{type:2}})}}})}function v(t){var e;return(0,u.jsx)(o.V,{...t,bbox:null!==(e=t.bbox)&&void 0!==e?e:[-16,9,16,-9],initFn:t=>{let e=t.create("point",[-8,-4],{name:"A"}),r=t.create("point",[1,3],{name:"B"});t.create("segment",[e,r]);let n=t.create("point",[3,-2],{name:"C"}),u=t.create("input",[-15,8,2,"$\\lambda =\\ $"]),o=t.create("slider",[[-15,7],[-5,7],[0,3,10]],{suffixLabel:"Scale = "});function f(){return i.$XF(c(r),c(e))}function d(){let t=f(),e=i.KOy(t);return i.csF(t,e)}function p(){let t=d(),r=c(n),u=c(e);return i.JpY(t,i.p4s(i.$XF(r,u)))}function b(){let t=d(),e=p();return i.JpY(e,t)}function g(){let t=i.KOy(f()),r=i.KOy(function(){let t=b(),r=c(e),u=c(n);return s.tS(u).subtract(r).subtract(t).done()}()),o=p(),l=+u.Value(),y=1/Math.sqrt((t-o)**2+r**2),$=1/Math.sqrt(o**2+r**2),g=a.k*l/r*((t-o)*y+o*$),m=a.k*l*(y-$),x=function(){let t=i.$XF(c(n),i.IHx(c(e),b())),r=i.KOy(t);return i.csF(t,r)}(),h=d();return i.IHx(i.JpY(g,x),i.JpY(m,h))}t.create("text",[-15,6,()=>{let t=g(),e=(0,l.gZ)(t.toArray()[0]),r=(0,l.gZ)(t.toArray()[1]);return String.raw(y(),e,r)}]),t.create("text",[-15,5,()=>String.raw($(),(0,l.gZ)(i.KOy(g())))]),t.create("arrow",[n,[()=>n.X()+g().toArray()[0]/i.KOy(g())*+o.Value(),()=>n.Y()+g().toArray()[1]/i.KOy(g())*+o.Value()]],{name:"E",color:"orange",lastArrow:{type:2}})}})}function K(t){var e;return(0,u.jsx)(o.V,{...t,bbox:null!==(e=t.bbox)&&void 0!==e?e:[-16,9,16,-9],initFn:t=>{let e=t.create("point",[-8,-4],{name:"A"}),r=t.create("point",[1,3],{name:"B"});t.create("line",[e,r]);let n=t.create("point",[3,-2],{name:"C"}),u=t.create("input",[-15,8,2,"$\\lambda =\\ $"]),o=t.create("slider",[[-15,7],[-5,7],[0,3,10]],{suffixLabel:"Scale = "});function f(){let t=i.$XF(c(r),c(e)),n=i.KOy(t);return i.csF(t,n)}function d(){let t=f(),r=function(){let t=f(),r=c(n),u=c(e);return i.JpY(t,i.p4s(i.$XF(r,u)))}();return i.JpY(r,t)}function p(){let t=i.KOy(function(){let t=d(),r=c(e),u=c(n);return s.tS(u).subtract(r).subtract(t).done()}()),r=+u.Value(),o=2*a.k*r/t,l=function(){let t=i.$XF(c(n),i.IHx(c(e),d())),r=i.KOy(t);return i.csF(t,r)}();return i.JpY(o,l)}t.create("text",[-15,6,()=>{let t=p(),e=(0,l.gZ)(t.toArray()[0]),r=(0,l.gZ)(t.toArray()[1]);return String.raw(g(),e,r)}]),t.create("text",[-15,5,()=>String.raw(m(),(0,l.gZ)(i.KOy(p())))]),t.create("arrow",[n,[()=>n.X()+p().toArray()[0]/i.KOy(p())*+o.Value(),()=>n.Y()+p().toArray()[1]/i.KOy(p())*+o.Value()]],{name:"E",color:"orange",lastArrow:{type:2}})}})}},2148:function(t,e,r){"use strict";r.d(e,{V:function(){return a}});var n=r(3827),u=r(6205),o=r(4090);function a(t){let{bbox:e,axis:r,initFn:a}=t,l=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=u.ZP.JSXGraph.initBoard(l.current,{axis:null==r||r,boundingBox:null!=e?e:[-8,4.5,8,-4.5],showCopyright:!1,keepAspectRatio:!0});return a&&a(t),()=>u.ZP.JSXGraph.freeBoard(t)},[e,a,r]),(0,n.jsx)("div",{className:"w-full aspect-video",ref:l})}u.ZP.Options.text.useMathJax=!0},3726:function(t,e,r){"use strict";r.d(e,{Z:function(){return u},k:function(){return n}});let n=9e9,u={vacuum:1,air:1,water:81.6}},6881:function(t,e,r){"use strict";r.d(e,{CY:function(){return o},SK:function(){return a},gZ:function(){return u},ok:function(){return l}});var n=r(8183);function u(t){if(0===t)return"0";let e=Math.floor(Math.log10(Math.abs(t))),r=t/Math.pow(10,e);return"".concat(r.toFixed(2)," \\cdot 10^{").concat(e,"}")}function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.pIu([0,0]);return t.reduce((t,e)=>n.IHx(t,e),e)}function a(t){let e=t.toArray()[0],r=t.toArray()[1];return[u(e),u(r)]}function l(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Math.sign(t)*Math.abs(t)**(1/e)}}},function(t){t.O(0,[186,143,41,410,250,182,787,971,69,744],function(){return t(t.s=8567)}),_N_E=t.O()}]);