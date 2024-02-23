"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{6692:function(r,t,e){var s=e(7901),i=e(1013),n=e(4735),a=e(4204),o={rk4:{s:4,A:[[0,0,0,0],[.5,0,0,0],[0,.5,0,0],[0,0,1,0]],b:[1/6,1/3,1/3,1/6],c:[0,.5,.5,1]},heun:{s:2,A:[[0,0],[1,0]],b:[.5,.5],c:[0,1]},euler:{s:1,A:[[0]],b:[1],c:[0]}};a.Z.Numerics={Gauss:function(r,t){var e,s,n,o,u,h=a.Z.eps,l=r.length>0?r[0].length:0;if(l!==t.length||l!==r.length)throw Error("JXG.Math.Numerics.Gauss: Dimensions don't match. A must be a square matrix and b must be of the same length as A.");for(e=0,o=[],u=t.slice(0,l);e<l;e++)o[e]=r[e].slice(0,l);for(s=0;s<l;s++){for(e=l-1;e>s;e--)if(Math.abs(o[e][s])>h){if(Math.abs(o[s][s])<h)i.Z.swap(o,e,s),i.Z.swap(u,e,s);else for(o[e][s]/=o[s][s],u[e]-=o[e][s]*u[s],n=s+1;n<l;n++)o[e][n]-=o[e][s]*o[s][n]}if(Math.abs(o[s][s])<h)throw Error("JXG.Math.Numerics.Gauss(): The given matrix seems to be singular.")}return this.backwardSolve(o,u,!0),u},backwardSolve:function(r,t,e){var s,i,n,a,o;for(s=e?t:t.slice(0,t.length),i=r.length,n=r.length>0?r[0].length:0,a=i-1;a>=0;a--){for(o=n-1;o>a;o--)s[a]-=r[a][o]*s[o];s[a]/=r[a][a]}return s},gaussBareiss:function(r){var t,e,s,i,n,o,u,h,l,f=a.Z.eps;if((u=r.length)<=0)return 0;for(r[0].length<u&&(u=r[0].length),h=[],i=0;i<u;i++)h[i]=r[i].slice(0,u);for(t=0,e=1,s=1;t<u-1;t++){if(Math.abs(o=h[t][t])<f){for(i=t+1;i<u&&!(Math.abs(h[i][t])>=f);i++);if(i===u)return 0;for(n=t;n<u;n++)l=h[i][n],h[i][n]=h[t][n],h[t][n]=l;s=-s,o=h[t][t]}for(i=t+1;i<u;i++)for(n=t+1;n<u;n++)l=o*h[i][n]-h[i][t]*h[t][n],h[i][n]=l/e;e=o}return s*h[u-1][u-1]},det:function(r){return 2===r.length&&2===r[0].length?r[0][0]*r[1][1]-r[1][0]*r[0][1]:this.gaussBareiss(r)},Jacobi:function(r){var t,e,s,i,n,o,u,h,l,f=a.Z.eps*a.Z.eps,c=0,m=r.length,p=[[0,0,0],[0,0,0],[0,0,0]],b=[[0,0,0],[0,0,0],[0,0,0]],d=0;for(t=0;t<m;t++){for(e=0;e<m;e++)p[t][e]=0,b[t][e]=r[t][e],c+=Math.abs(b[t][e]);p[t][t]=1}if(1===m||c<=0)return[b,p];c/=m*m;do{for(e=1,h=0,l=0;e<m;e++)for(t=0;t<e;t++)if((i=Math.abs(b[t][e]))>l&&(l=i),h+=i,i>=f){for(s=0,n=Math.sin(i=.5*Math.atan2(2*b[t][e],b[t][t]-b[e][e])),o=Math.cos(i);s<m;s++)u=b[s][t],b[s][t]=o*u+n*b[s][e],b[s][e]=-n*u+o*b[s][e],u=p[s][t],p[s][t]=o*u+n*p[s][e],p[s][e]=-n*u+o*p[s][e];for(s=0,b[t][t]=o*b[t][t]+n*b[e][t],b[e][e]=-n*b[t][e]+o*b[e][e],b[t][e]=0;s<m;s++)b[t][s]=b[s][t],b[e][s]=b[s][e]}d+=1}while(Math.abs(h)/c>f&&d<2e3);return[b,p]},NewtonCotes:function(r,t,e){var s,n,a,o=0,u=e&&i.Z.isNumber(e.number_of_nodes)?e.number_of_nodes:28,h={trapez:!0,simpson:!0,milne:!0},l=e&&e.integration_type&&h.hasOwnProperty(e.integration_type)&&h[e.integration_type]?e.integration_type:"milne",f=(r[1]-r[0])/u;switch(l){case"trapez":for(n=0,o=(t(r[0])+t(r[1]))*.5,s=r[0];n<u-1;n++)s+=f,o+=t(s);o*=f;break;case"simpson":if(u%2>0)throw Error("JSXGraph:  INT_SIMPSON requires config.number_of_nodes dividable by 2.");for(n=0,a=u/2,o=t(r[0])+t(r[1]),s=r[0];n<a-1;n++)s+=2*f,o+=2*t(s);for(n=0,s=r[0]-f;n<a;n++)s+=2*f,o+=4*t(s);o*=f/3;break;default:if(u%4>0)throw Error("JSXGraph: Error in INT_MILNE: config.number_of_nodes must be a multiple of 4");for(n=0,a=.25*u,o=7*(t(r[0])+t(r[1])),s=r[0];n<a-1;n++)s+=4*f,o+=14*t(s);for(n=0,s=r[0]-3*f;n<a;n++)s+=4*f,o+=32*(t(s)+t(s+2*f));for(n=0,s=r[0]-2*f;n<a;n++)s+=4*f,o+=12*t(s);o*=2*f/45}return o},Romberg:function(r,t,e){var s,n,a,o,u,h,l,f,c=[],m=0,p=1/0,b=e&&i.Z.isNumber(e.max_iterations)?e.max_iterations:20,d=e&&i.Z.isNumber(e.eps)?e.eps:e.eps||1e-7;for(h=0,s=r[0],a=(n=r[1])-s,u=1,c[0]=.5*a*(t(s)+t(n));h<b;++h){for(o=0,a*=.5,u*=2,f=1,l=1;l<u;l+=2)o+=t(s+l*a);for(c[h+1]=.5*c[h]+o*a,m=c[h+1],l=h-1;l>=0;--l)f*=4,c[l]=c[l+1]+(c[l+1]-c[l])/(f-1),m=c[l];if(Math.abs(m-p)<d*Math.abs(m))break;p=m}return m},GaussLegendre:function(r,t,e){var s,n,a,o,u,h,l,f,c=0,m=[],p=[],b=e&&i.Z.isNumber(e.n)?e.n:12;if(b>18&&(b=18),m[2]=[.5773502691896257],p[2]=[1],m[4]=[.33998104358485626,.8611363115940526],p[4]=[.6521451548625461,.34785484513745385],m[6]=[.2386191860831969,.6612093864662645,.932469514203152],p[6]=[.46791393457269104,.3607615730481386,.17132449237917036],m[8]=[.1834346424956498,.525532409916329,.7966664774136267,.9602898564975363],p[8]=[.362683783378362,.31370664587788727,.22238103445337448,.10122853629037626],m[10]=[.14887433898163122,.4333953941292472,.6794095682990244,.8650633666889845,.9739065285171717],p[10]=[.29552422471475287,.26926671930999635,.21908636251598204,.1494513491505806,.06667134430868814],m[12]=[.1252334085114689,.3678314989981802,.5873179542866175,.7699026741943047,.9041172563704749,.9815606342467192],p[12]=[.24914704581340277,.2334925365383548,.20316742672306592,.16007832854334622,.10693932599531843,.04717533638651183],m[14]=[.10805494870734367,.31911236892788974,.5152486363581541,.6872929048116855,.827201315069765,.9284348836635735,.9862838086968123],p[14]=[.2152638534631578,.2051984637212956,.18553839747793782,.15720316715819355,.12151857068790319,.08015808715976021,.03511946033175186],m[16]=[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499],p[16]=[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.062253523938647894,.027152459411754096],m[18]=[.0847750130417353,.2518862256915055,.41175116146284263,.5597708310739475,.6916870430603532,.8037049589725231,.8926024664975557,.9558239495713977,.9915651684209309],p[18]=[.1691423829631436,.16427648374583273,.15468467512626524,.14064291467065065,.12255520671147846,.10094204410628717,.07642573025488905,.0497145488949698,.02161601352648331],m[3]=[0,.7745966692414834],p[3]=[.8888888888888888,.5555555555555556],m[5]=[0,.5384693101056831,.906179845938664],p[5]=[.5688888888888889,.47862867049936647,.23692688505618908],m[7]=[0,.4058451513773972,.7415311855993945,.9491079123427585],p[7]=[.4179591836734694,.3818300505051189,.27970539148927664,.1294849661688697],m[9]=[0,.3242534234038089,.6133714327005904,.8360311073266358,.9681602395076261],p[9]=[.3302393550012598,.31234707704000286,.26061069640293544,.1806481606948574,.08127438836157441],m[11]=[0,.26954315595234496,.5190961292068118,.7301520055740494,.8870625997680953,.978228658146057],p[11]=[.2729250867779006,.26280454451024665,.23319376459199048,.18629021092773426,.1255803694649046,.05566856711617366],m[13]=[0,.2304583159551348,.44849275103644687,.6423493394403402,.8015780907333099,.9175983992229779,.9841830547185881],p[13]=[.2325515532308739,.22628318026289723,.2078160475368885,.17814598076194574,.13887351021978725,.09212149983772845,.04048400476531588],m[15]=[0,.20119409399743451,.3941513470775634,.5709721726085388,.7244177313601701,.8482065834104272,.937273392400706,.9879925180204854],p[15]=[.2025782419255613,.19843148532711158,.1861610000155622,.16626920581699392,.13957067792615432,.10715922046717194,.07036604748810812,.03075324199611727],m[17]=[0,.17848418149584785,.3512317634538763,.5126905370864769,.6576711592166907,.7815140038968014,.8802391537269859,.9506755217687678,.9905754753144174],p[17]=[.17944647035620653,.17656270536699264,.16800410215645004,.15404576107681028,.13513636846852548,.11188384719340397,.08503614831717918,.0554595293739872,.02414830286854793],s=r[0],n=r[1],o=b+1>>1,l=m[b],f=p[b],h=.5*(n-s),u=.5*(n+s),!0&b)for(a=1,c=f[0]*t(u);a<o;++a)c+=f[a]*(t(u+h*l[a])+t(u-h*l[a]));else for(a=0,c=0;a<o;++a)c+=f[a]*(t(u+h*l[a])+t(u-h*l[a]));return h*c},_rescale_error:function(r,t,e){var s,i;return r=Math.abs(r),0!==e&&0!==r&&(r=(s=Math.pow(200*r/e,1.5))<1?e*s:e),t>22250738585072014e-324/11102230246251565e-30&&(i=11102230246251565e-30*t)>r&&(r=i),r},_gaussKronrod:function(r,t,e,s,i,n,a){var o,u,h,l,f,c,m,p,b,d=r[0],g=r[1],M=.5*(d+g),Z=.5*(g-d),v=Math.abs(Z),N=t(M),C=0,_=N*n[e-1],w=Math.abs(_),y=0,X=0,x=0,Y=[],P=[];for(e%2==0&&(C=N*i[e/2-1]),o=Math.floor((e-1)/2),h=0;h<o;h++)p=(c=t(M-(f=Z*s[l=2*h+1])))+(m=t(M+f)),Y[l]=c,P[l]=m,C+=i[h]*p,_+=n[l]*p,w+=n[l]*(Math.abs(c)+Math.abs(m));for(h=0,o=Math.floor(e/2);h<o;h++)c=t(M-(f=Z*s[b=2*h])),m=t(M+f),Y[b]=c,P[b]=m,_+=n[b]*(c+m),w+=n[b]*(Math.abs(c)+Math.abs(m));for(h=0,X=.5*_,y=n[e-1]*Math.abs(N-X);h<e-1;h++)y+=n[h]*(Math.abs(Y[h]-X)+Math.abs(P[h]-X));return x=(_-C)*Z,_*=Z,w*=v,y*=v,u=_,a.abserr=this._rescale_error(x,w,y),a.resabs=w,a.resasc=y,u},GaussKronrod15:function(r,t,e){return this._gaussKronrod(r,t,8,[.9914553711208126,.9491079123427585,.8648644233597691,.7415311855993945,.5860872354676911,.4058451513773972,.20778495500789848,0],[.1294849661688697,.27970539148927664,.3818300505051189,.4179591836734694],[.022935322010529224,.06309209262997856,.10479001032225019,.14065325971552592,.1690047266392679,.19035057806478542,.20443294007529889,.20948214108472782],e)},GaussKronrod21:function(r,t,e){return this._gaussKronrod(r,t,11,[.9956571630258081,.9739065285171717,.9301574913557082,.8650633666889845,.7808177265864169,.6794095682990244,.5627571346686047,.4333953941292472,.2943928627014602,.14887433898163122,0],[.06667134430868814,.1494513491505806,.21908636251598204,.26926671930999635,.29552422471475287],[.011694638867371874,.032558162307964725,.054755896574351995,.07503967481091996,.0931254545836976,.10938715880229764,.12349197626206584,.13470921731147334,.14277593857706009,.14773910490133849,.1494455540029169],e)},GaussKronrod31:function(r,t,e){return this._gaussKronrod(r,t,16,[.9980022986933971,.9879925180204854,.9677390756791391,.937273392400706,.8972645323440819,.8482065834104272,.790418501442466,.7244177313601701,.650996741297417,.5709721726085388,.4850818636402397,.3941513470775634,.29918000715316884,.20119409399743451,.1011420669187175,0],[.03075324199611727,.07036604748810812,.10715922046717194,.13957067792615432,.16626920581699392,.1861610000155622,.19843148532711158,.2025782419255613],[.005377479872923349,.015007947329316122,.02546084732671532,.03534636079137585,.04458975132476488,.05348152469092809,.06200956780067064,.06985412131872826,.07684968075772038,.08308050282313302,.08856444305621176,.09312659817082532,.09664272698362368,.09917359872179196,.10076984552387559,.10133000701479154],e)},_workspace:function(r,t){return{limit:t,size:0,nrmax:0,i:0,alist:[r[0]],blist:[r[1]],rlist:[0],elist:[0],order:[0],level:[0],qpsrt:function(){var r,t,e,s,i,n=this.size-1,a=this.limit,o=this.nrmax,u=this.order[o];if(n<2){this.order[0]=0,this.order[1]=1,this.i=u;return}for(r=this.elist[u];o>0&&r>this.elist[this.order[o-1]];)this.order[o]=this.order[o-1],o--;for(i=n<a/2+2?n:a-n+1,e=o+1;e<i&&r<this.elist[this.order[e]];)this.order[e-1]=this.order[e],e++;for(this.order[e-1]=u,t=this.elist[n],s=i-1;s>e-2&&t>=this.elist[this.order[s]];)this.order[s+1]=this.order[s],s--;this.order[s+1]=n,u=this.order[o],this.i=u,this.nrmax=o},set_initial_result:function(r,t){this.size=1,this.rlist[0]=r,this.elist[0]=t},update:function(r,t,e,s,i,n,a,o){var u=this.i,h=this.size,l=this.level[this.i]+1;o>s?(this.alist[u]=i,this.rlist[u]=a,this.elist[u]=o,this.level[u]=l,this.alist[h]=r,this.blist[h]=t,this.rlist[h]=e,this.elist[h]=s):(this.blist[u]=t,this.rlist[u]=e,this.elist[u]=s,this.level[u]=l,this.alist[h]=i,this.blist[h]=n,this.rlist[h]=a,this.elist[h]=o),this.level[h]=l,this.size++,l>this.maximum_level&&(this.maximum_level=l),this.qpsrt()},retrieve:function(){var r=this.i;return{a:this.alist[r],b:this.blist[r],r:this.rlist[r],e:this.elist[r]}},sum_results:function(){var r,t=this.size,e=0;for(r=0;r<t;r++)e+=this.rlist[r];return e},subinterval_too_small:function(r,t,e){var s=(1+2220446049250313e-29)*(Math.abs(t)+22250738585072014e-321);return Math.abs(r)<=s&&Math.abs(e)<=s}}},Qag:function(r,t,e){var n,o,u,h,l,f,c,m,p,b,d,g,M,Z,v,N,C,_=this._workspace(r,1e3),w=e&&i.Z.isNumber(e.limit)?e.limit:15,y=e&&i.Z.isNumber(e.epsrel)?e.epsrel:1e-7,X=e&&i.Z.isNumber(e.epsabs)?e.epsabs:1e-7,x=e&&i.Z.isFunction(e.q)?e.q:this.GaussKronrod15,Y={},P=0,k=0,z=0,A=0,G=0,D=0,q=0,E=0,I=0,S=0;if(w>_.limit&&s.Z.warn("iteration limit exceeds available workspace"),X<=0&&(y<50*a.Z.eps||y<5e-29)&&s.Z.warn("tolerance cannot be acheived with given epsabs and epsrel"),u=x.apply(this,[r,t,Y]),h=Y.abserr,l=Y.resabs,f=Y.resasc,_.set_initial_result(u,h),c=Math.max(X,y*Math.abs(u)),h<=11102230246251565e-30*l&&h>c)return s.Z.warn("cannot reach tolerance because of roundoff error on first attempt"),-1/0;if(h<=c&&h!==f||0===h)return u;if(1===w)return s.Z.warn("a maximum of one iteration was insufficient"),-1/0;n=u,o=h,P=1;do G=0,D=0,q=0,E=0,I=0,S=0,d=(C=_.retrieve()).a,g=C.b,M=C.r,Z=C.e,m=d,p=.5*(d+g),b=g,G=x.apply(this,[[m,p],t,Y]),E=Y.abserr,v=Y.resasc,D=x.apply(this,[[p,b],t,Y]),I=Y.abserr,N=Y.resasc,q=G+D,o+=(S=E+I)-Z,n+=q-M,v!==E&&N!==I&&(Math.abs(M-q)<=1e-5*Math.abs(q)&&S>=.99*Z&&k++,P>=10&&S>Z&&z++),o>(c=Math.max(X,y*Math.abs(n)))&&((k>=6||z>=20)&&(A=2),_.subinterval_too_small(m,p,b)&&(A=3)),_.update(m,p,G,E,p,b,D,I),d=(C=_.retrieve()).a_i,g=C.b_i,M=C.r_i,Z=C.e_i,P++;while(P<w&&!A&&o>c);return _.sum_results()},I:function(r,t){return this.Qag(r,t,{q:this.GaussKronrod15,limit:15,epsrel:1e-7,epsabs:1e-7})},Newton:function(r,t,e){var s,n=0,o=a.Z.eps,u=r.apply(e,[t]);for(i.Z.isArray(t)&&(t=t[0]);n<50&&Math.abs(u)>o;)Math.abs(s=this.D(r,e)(t))>o?t-=u/s:t+=.2*Math.random()-1,u=r.apply(e,[t]),n+=1;return t},root:function(r,t,e){return this.chandrupatla(r,t,e)},generalizedNewton:function(r,t,e,s){var i,n,o,u,h,l,f,c,m,p,b,d,g,M,Z=0;for(this.generalizedNewton.t1memo?(i=this.generalizedNewton.t1memo,n=this.generalizedNewton.t2memo):(i=e,n=s),p=(c=r.X(i)-t.X(n))*c+(m=r.Y(i)-t.Y(n))*m,b=this.D(r.X,r),d=this.D(t.X,t),g=this.D(r.Y,r),M=this.D(t.Y,t);p>a.Z.eps&&Z<10;)o=b(i),u=-d(n),h=g(i),f=o*(l=-M(n))-u*h,i-=(l*c-u*m)/f,n-=(o*m-h*c)/f,p=(c=r.X(i)-t.X(n))*c+(m=r.Y(i)-t.Y(n))*m,Z+=1;return(this.generalizedNewton.t1memo=i,this.generalizedNewton.t2memo=n,Math.abs(i)<Math.abs(n))?[r.X(i),r.Y(i)]:[t.X(n),t.Y(n)]},Neville:function(r){var t=[],e=function(e){return function(s,i){var n,o,u,h=a.Z.binomial,l=r.length,f=l-1,c=0,m=0;if(!i)for(n=0,u=1;n<l;n++)t[n]=h(f,n)*u,u*=-1;for(n=0,o=s;n<l;n++){if(0===o)return r[n][e]();u=t[n]/o,o-=1,c+=r[n][e]()*u,m+=u}return c/m}};return[e("X"),e("Y"),0,function(){return r.length-1}]},splineDef:function(r,t){var e,s,i=Math.min(r.length,t.length),n=[],a=[],o=[],u=[],h=[],l=[];if(2===i)return[0,0];for(e=0;e<i;e++)o.push({X:r[e],Y:t[e]});for(o.sort(function(r,t){return r.X-t.X}),e=0;e<i;e++)r[e]=o[e].X,t[e]=o[e].Y;for(e=0;e<i-1;e++)u.push(r[e+1]-r[e]);for(e=0;e<i-2;e++)h.push(6*(t[e+2]-t[e+1])/u[e+1]-6*(t[e+1]-t[e])/u[e]);for(n.push(2*(u[0]+u[1])),a.push(h[0]),e=0;e<i-3;e++)s=u[e+1]/n[e],n.push(2*(u[e+1]+u[e+2])-s*u[e+1]),a.push(h[e+1]-s*a[e]);for(l[i-3]=a[i-3]/n[i-3],e=i-4;e>=0;e--)l[e]=(a[e]-u[e+1]*l[e+1])/n[e];for(e=i-3;e>=0;e--)l[e+1]=l[e];return l[0]=0,l[i-1]=0,l},splineEval:function(r,t,e,s){var n,a,o,u,h,l,f,c=Math.min(t.length,e.length),m=1,p=!1,b=[];for(i.Z.isArray(r)?(m=r.length,p=!0):r=[r],n=0;n<m;n++){if(r[n]<t[0]||t[n]>t[c-1])return NaN;for(a=1;a<c&&!(r[n]<=t[a]);a++);a-=1,o=e[a],u=(e[a+1]-e[a])/(t[a+1]-t[a])-(t[a+1]-t[a])/6*(s[a+1]+2*s[a]),h=s[a]/2,l=(s[a+1]-s[a])/(6*(t[a+1]-t[a])),f=r[n]-t[a],b.push(o+(u+(h+l*f)*f)*f)}return p?b:b[0]},generatePolynomialTerm:function(r,t,e,s){var i,n=[];for(i=t;i>=0;i--)n=n.concat(["(",r[i].toPrecision(s),")"]),i>1?n=n.concat(["*",e,"<sup>",i,"<","/sup> + "]):1===i&&(n=n.concat(["*",e," + "]));return n.join("")},lagrangePolynomial:function(r){var t=[],e=this,s=function(e,s){var i,n,a,o,u=r.length,h=0,l=0;if(!s)for(i=0;i<u;i++){for(n=0,t[i]=1,a=r[i].X();n<u;n++)n!==i&&(t[i]*=a-r[n].X());t[i]=1/t[i]}for(i=0;i<u;i++){if(e===(a=r[i].X()))return r[i].Y();l+=o=t[i]/(e-a),h+=o*r[i].Y()}return h/l};return s.getTerm=function(t,s,i){return e.lagrangePolynomialTerm(r,t,s,i)()},s.getCoefficients=function(){return e.lagrangePolynomialCoefficients(r)()},s},lagrangePolynomialTerm:function(r,t,e,i){var o=this;return function(){var u,h,l,f,c=r.length,m=[],p=!0;for(e=e||"x",void 0===i&&(i=" * "),u=c-1,m=o.lagrangePolynomialCoefficients(r)(),h="",l=0;l<m.length;l++)Math.abs(f=m[l])<a.Z.eps||(s.Z.exists(t)&&(f=n.Z._round10(f,-t)),p?(h+=f>0?f:"-"+-f,p=!1):h+=f>0?" + "+f:" - "+-f,u-l>1?h+=i+e+"^"+(u-l):u-l!=1||(h+=i+e));return h}},lagrangePolynomialCoefficients:function(r){return function(){var t,e,s,i,n=r.length,o=[],u=[],h=[];for(e=0;e<n;e++)h[e]=0;for(t=0;t<n;t++){for(e=0,s=r[t].Y(),i=r[t].X(),o=[];e<n;e++)e!==t&&(s/=i-r[e].X(),o.push(r[e].X()));for(e=0,u=[1].concat(a.Z.Vieta(o));e<u.length;e++)h[e]+=(e%2==1?-1:1)*u[e]*s}return h}},_initCubicPoly:function(r,t,e,s){return[r,e,-3*r+3*t-2*e-s,2*r-2*t+e+s]},CardinalSpline:function(r,t,e){var s,n,o,u,h=[],l=this;return u=i.Z.isFunction(t)?t:function(){return t},void 0===e&&(e="uniform"),[(n=function(t){return function(i,n){var f,c,m,p,b,d,g,M;if(r.length<2)return NaN;if(!n)for(f=0,o=u(),M=(s=[{X:function(){return 2*r[0].X()-r[1].X()},Y:function(){return 2*r[0].Y()-r[1].Y()},Dist:function(r){var t=this.X()-r.X(),e=this.Y()-r.Y();return a.Z.hypot(t,e)}}].concat(r,[{X:function(){return 2*r[r.length-1].X()-r[r.length-2].X()},Y:function(){return 2*r[r.length-1].Y()-r[r.length-2].Y()},Dist:function(r){var t=this.X()-r.X(),e=this.Y()-r.Y();return a.Z.hypot(t,e)}}])).length,h[t]=[];f<M-3;f++)"centripetal"===e?(b=s[f].Dist(s[f+1]),d=s[f+2].Dist(s[f+1]),g=s[f+3].Dist(s[f+2]),b=Math.sqrt(b),d=Math.sqrt(d),g=Math.sqrt(g),d<a.Z.eps&&(d=1),b<a.Z.eps&&(b=d),g<a.Z.eps&&(g=d),m=(s[f+1][t]()-s[f][t]())/b-(s[f+2][t]()-s[f][t]())/(d+b)+(s[f+2][t]()-s[f+1][t]())/d,p=(s[f+2][t]()-s[f+1][t]())/d-(s[f+3][t]()-s[f+1][t]())/(g+d)+(s[f+3][t]()-s[f+2][t]())/g,m*=d,p*=d,h[t][f]=l._initCubicPoly(s[f+1][t](),s[f+2][t](),o*m,o*p)):h[t][f]=l._initCubicPoly(s[f+1][t](),s[f+2][t](),o*(s[f+2][t]()-s[f][t]()),o*(s[f+3][t]()-s[f+1][t]()));return isNaN(i)?NaN:(M=r.length,i<=0)?r[0][t]():i>=M?r[M-1][t]():(f=Math.floor(i))===i?r[f][t]():(i-=f,void 0===(c=h[t][f]))?NaN:((c[3]*i+c[2])*i+c[1])*i+c[0]}})("X"),n("Y"),0,function(){return r.length-1}]},CatmullRomSpline:function(r,t){return this.CardinalSpline(r,.5,t)},regressionPolynomial:function(r,t,e){var s,n,o,u,h,l,f="";if(i.Z.isPoint(r)&&i.Z.isFunction(r.Value))n=function(){return r.Value()};else if(i.Z.isFunction(r))n=r;else if(i.Z.isNumber(r))n=function(){return r};else throw Error("JSXGraph: Can't create regressionPolynomial from degree of type'"+typeof r+"'.");if(3==arguments.length&&i.Z.isArray(t)&&i.Z.isArray(e))h=0;else if(2==arguments.length&&i.Z.isArray(t)&&t.length>0&&i.Z.isPoint(t[0]))h=1;else if(2==arguments.length&&i.Z.isArray(t)&&t.length>0&&t[0].usrCoords&&t[0].scrCoords)h=2;else throw Error("JSXGraph: Can't create regressionPolynomial. Wrong parameters.");return(l=function(r,l){var c,m,p,b,d,g,M,Z,v,N=t.length;if(v=Math.floor(n()),!l){if(1===h)for(c=0,o=[],u=[];c<N;c++)o[c]=t[c].X(),u[c]=t[c].Y();if(2===h)for(c=0,o=[],u=[];c<N;c++)o[c]=t[c].usrCoords[1],u[c]=t[c].usrCoords[2];if(0===h)for(c=0,o=[],u=[];c<N;c++)i.Z.isFunction(t[c])?o.push(t[c]()):o.push(t[c]),i.Z.isFunction(e[c])?u.push(e[c]()):u.push(e[c]);for(m=0,p=[];m<N;m++)p.push([1]);for(c=1;c<=v;c++)for(m=0;m<N;m++)p[m][c]=p[m][c-1]*o[m];d=u,b=a.Z.transpose(p),g=a.Z.matMatMult(b,p),M=a.Z.matVecMult(b,d),s=a.Z.Numerics.Gauss(g,M),f=a.Z.Numerics.generatePolynomialTerm(s,v,"x",3)}for(Z=s[v],c=v-1;c>=0;c--)Z=Z*r+s[c];return Z}).getTerm=function(){return f},l},bezier:function(r){var t,e,s=function(s){return function(i,n){var a=3*Math.floor(i),o=i%1,u=1-o;return(n||(t=Math.floor((e=3*Math.floor((r.length-1)/3))/3)),i<0)?r[0][s]():i>=t?r[e][s]():isNaN(i)?NaN:u*u*(u*r[a][s]()+3*o*r[a+1][s]())+(3*u*r[a+2][s]()+o*r[a+3][s]())*o*o}};return[s("X"),s("Y"),0,function(){return Math.floor(r.length/3)}]},bspline:function(r,t){var e=function(r,t){var e,s=[];for(e=0;e<r+t+1;e++)e<t?s[e]=0:e<=r?s[e]=e-t+1:s[e]=r-t+2;return s},s=function(r,t,e,s){var i,n,a,o,u,h=[];for(t[s]<=r&&r<t[s+1]?h[s]=1:h[s]=0,i=2;i<=e;i++)for(n=s-i+1;n<=s;n++)a=n<=s-i+1||n<0?0:h[n],o=n>=s?0:h[n+1],0==(u=t[n+i-1]-t[n])?h[n]=0:h[n]=(r-t[n])/u*a,0!=(u=t[n+i]-t[n+1])&&(h[n]+=(t[n+i]-r)/u*o);return h},i=function(i){return function(n,a){var o,u,h,l=[],f=r.length,c=f-1,m=t;if(c<=0)return NaN;if(c+2<=m&&(m=c+1),n<=0)return r[0][i]();if(n>=c-m+2)return r[c][i]();for(h=Math.floor(n)+m-1,l=s(n,e(c,m),m,h),o=0,u=h-m+1;u<=h;u++)u<f&&u>=0&&(o+=r[u][i]()*l[u]);return o}};return[i("X"),i("Y"),0,function(){return r.length-1}]},D:function(r,t){return i.Z.exists(t)?function(e,s){return(r.apply(t,[e+1e-5,s])-r.apply(t,[e-1e-5,s]))/2e-5}:function(t,e){return(r(t+1e-5,e)-r(t-1e-5,e))/2e-5}},_riemannValue:function(r,t,e,s){var i,n,a,o;if(s<0&&("trapezoidal"!==e&&(r+=s),s*=-1,"lower"===e?e="upper":"upper"===e&&(e="lower")),o=.01*s,"right"===e)i=t(r+s);else if("middle"===e)i=t(r+.5*s);else if("left"===e||"trapezoidal"===e)i=t(r);else if("lower"===e){for(i=t(r),a=r+o;a<=r+s;a+=o)(n=t(a))<i&&(i=n);(n=t(r+s))<i&&(i=n)}else if("upper"===e){for(i=t(r),a=r+o;a<=r+s;a+=o)(n=t(a))>i&&(i=n);(n=t(r+s))>i&&(i=n)}else i="random"===e?t(r+s*Math.random()):"simpson"===e?(t(r)+4*t(r+.5*s)+t(r+s))/6:t(r);return i},riemann:function(r,t,e,s,n){var a,o,u,h,l,f,c,m,p,b,d,g,M,Z,v=[],N=[],C=s,_=0;if(i.Z.isArray(r)?(Z=r[0],M=r[1]):M=r,(t=Math.floor(t))<=0)return[v,N,_];for(a=0,o=(n-s)/t;a<t;a++){if("simpson"===e){for(_+=this._riemannValue(C,M,e,o)*o,d=.5*o,c=M(C),m=M(C+d),h=((p=M(C+2*d))+c-2*m)/(d*d)*.5,l=(p-c)/(2*d),f=m,u=0;u<30;u++)b=u*o/30-d,v.push(C+b+d),N.push(h*b*b+l*b+f);C+=o,g=p}else g=this._riemannValue(C,M,e,o),v.push(C),N.push(g),C+=o,"trapezoidal"===e?(_+=(g+(p=M(C)))*.5*o,g=p):_+=g*o,v.push(C),N.push(g);v.push(C),N.push(g)}for(a=0;a<t;a++){if("simpson"===e&&Z){for(_-=this._riemannValue(C,Z,e,-o)*o,d=.5*o,c=Z(C),m=Z(C-d),h=((p=Z(C-2*d))+c-2*m)/(d*d)*.5,l=(p-c)/(2*d),f=m,u=0;u<30;u++)b=u*o/30-d,v.push(C-b-d),N.push(h*b*b+l*b+f);C-=o,g=p}else g=Z?this._riemannValue(C,Z,e,-o):0,v.push(C),N.push(g),C-=o,Z&&("trapezoidal"===e?(_-=(g+(p=Z(C)))*.5*o,g=p):_-=g*o);v.push(C),N.push(g),v.push(C),N.push(M(C))}return[v,N,_]},riemannsum:function(r,t,e,i,n){return s.Z.deprecated("Numerics.riemannsum()","Numerics.riemann()[2]"),this.riemann(r,t,e,i,n)[2]},rungeKutta:function(r,t,e,s,n){var a,u,h,l,f,c,m=[],p=[],b=(e[1]-e[0])/s,d=e[0],g=t.length,M=[],Z=0;for(i.Z.isString(r)&&(r=o[r]||o.euler),c=r.s,m=t.slice(),u=0;u<=s;u++){for(M[Z]=m.slice(),Z++,l=[],h=0;h<c;h++){for(a=0;a<g;a++)p[a]=0;for(f=0;f<h;f++)for(a=0;a<g;a++)p[a]+=r.A[h][f]*b*l[f][a];for(a=0;a<g;a++)p[a]+=m[a];l.push(n(d+r.c[h]*b,p))}for(a=0;a<g;a++)p[a]=0;for(f=0;f<c;f++)for(a=0;a<g;a++)p[a]+=r.b[f]*l[f][a];for(a=0;a<g;a++)m[a]=m[a]+b*p[a];d+=b}return M},maxIterationsRoot:80,maxIterationsMinimize:500,findBracket:function(r,t,e){var s,n,a,o,u,h,l,f,c,m;if(i.Z.isArray(t))return t;for(c=0,s=t,a=r.call(e,s),n=0===s?1:s,m=(o=[s-.1*n,s+.1*n,s-1,s+1,s-.5*n,s+.5*n,s-.6*n,s+.6*n,s-1*n,s+1*n,s-2*n,s+2*n,s-5*n,s+5*n,s-10*n,s+10*n,s-50*n,s+50*n,s-100*n,s+100*n]).length;c<m&&(u=o[c],!(a*(h=r.call(e,u))<=0));c++);return u<s&&(l=s,s=u,u=l,f=a,a=h,h=f),[s,a,u,h]},fzero:function(r,t,e){var s,n,o,u,h,l,f,c,m,p,b,d,g,M,Z,v=a.Z.eps,N=this.maxIterationsRoot,C=0;if(i.Z.isArray(t)){if(t.length<2)throw Error("JXG.Math.Numerics.fzero: length of array x0 has to be at least two.");s=t[0],u=r.call(e,s),n=t[1],h=r.call(e,n)}else s=(f=this.findBracket(r,t,e))[0],u=f[1],n=f[2],h=f[3];if(Math.abs(u)<=v)return s;if(Math.abs(h)<=v)return n;if(u*h>0)return i.Z.isArray(t)?this.fminbr(r,[s,n],e):this.Newton(r,s,e);for(o=s,l=u;C<N&&(c=n-s,Math.abs(l)<Math.abs(h)&&(s=n,n=o,o=s,u=h,h=l,l=u),d=2*v*Math.abs(n)+.5*v,!(Math.abs(Z=(o-n)*.5)<=d||Math.abs(h)<=v));)Math.abs(c)>=d&&Math.abs(u)>Math.abs(h)&&(b=o-n,s===o?(g=b*(m=h/u),M=1-m):(M=u/l,m=h/l,g=(p=h/u)*(b*M*(M-m)-(n-s)*(m-1)),M=(M-1)*(m-1)*(p-1)),g>0?M=-M:g=-g,g<.75*b*M-.5*Math.abs(d*M)&&g<Math.abs(c*M*.5)&&(Z=g/M)),Math.abs(Z)<d&&(Z=Z>0?d:-d),s=n,u=h,n+=Z,((h=r.call(e,n))>0&&l>0||h<0&&l<0)&&(o=s,l=u),C++;return n},chandrupatla:function(r,t,e){var s,n,o,u,h,l,f,c,m,p,b,d,g,M,Z,v,N,C,_,w,y=0,X=this.maxIterationsRoot,x=1+.001*Math.random(),Y=.5*x,P=a.Z.eps;if(i.Z.isArray(t)){if(t.length<2)throw Error("JXG.Math.Numerics.fzero: length of array x0 has to be at least two.");s=t[0],o=r.call(e,s),n=t[1],u=r.call(e,n)}else s=(h=this.findBracket(r,t,e))[0],o=h[1],n=h[2],u=h[3];if(o*u>0)return i.Z.isArray(t)?this.fminbr(r,[s,n],e):this.Newton(r,s,e);l=s,f=n,p=o,b=u;do{if(m=l+Y*(f-l),Math.sign(g=r.call(e,m))===Math.sign(p)?(c=l,l=m,d=p,p=g):(c=f,f=l,d=b,b=p),l=m,p=g,M=l,Z=p,Math.abs(b)<Math.abs(p)&&(M=f,Z=b),(v=(2*P*Math.abs(M)+5e-6)/Math.abs(f-l))>.5||0===Z)break;N=(l-f)/(c-f),C=(p-b)/(d-b),_=1-Math.sqrt(1-N),w=Math.sqrt(N),(Y=_<C&&C<w?p/(b-p)*(d/(b-d))+p/(d-p)*(b/(d-b))*((c-l)/(f-l)):.5*x)<v&&(Y=v),Y>1-v&&(Y=1-v),y++}while(y<=X);return M},fminbr:function(r,t,e){var s,n,o,u,h,l,f,c,m,p,b,d,g,M,Z,v,N=(3-Math.sqrt(5))*.5,C=a.Z.eps,_=a.Z.eps,w=this.maxIterationsMinimize,y=0;if(!i.Z.isArray(t)||t.length<2)throw Error("JXG.Math.Numerics.fminbr: length of array x0 has to be at least two.");for(u=(s=t[0])+N*((n=t[1])-s),f=r.call(e,u),o=u,h=u,l=f,c=f;y<w&&(m=n-s,p=(s+n)*.5,b=_*Math.abs(o)+C/3,!(Math.abs(o-p)+.5*m<=2*b));)d=N*(o<p?n-o:s-o),Math.abs(o-h)>=b&&(Z=(o-h)*(l-f),M=(o-u)*(l-c),g=(o-u)*M-(o-h)*Z,(M=2*(M-Z))>0?g=-g:M=-M,Math.abs(g)<Math.abs(d*M)&&g>M*(s-o+2*b)&&g<M*(n-o-2*b)&&(d=g/M)),Math.abs(d)<b&&(d=d>0?b:-b),Z=o+d,(v=r.call(e,Z))<=l?(Z<o?n=o:s=o,u=h,h=o,o=Z,f=c,c=l,l=v):(Z<o?s=Z:n=Z,v<=c||h===o?(u=h,h=Z,f=c,c=v):(v<=f||u===o||u===h)&&(u=Z,f=v)),y+=1;return o},glomin:function(r,t){var e,s,i,n,o,u,h,l,f,c,m,p,b,d,g,M,Z,v,N,C,_,w,y,X,x,Y,P,k,z=a.Z.eps,A=a.Z.eps*a.Z.eps,G=a.Z.eps*a.Z.eps*a.Z.eps;if(x=t[0],Y=t[1],P=r(x)<r(Y)?x:Y,k=e=Y,s=x,_=Z=r(Y),Z<(M=N=r(x))?M=Z:k=x,Y<=x)return M;for(f=.5*(1+16*G)*1e7,v=r(g=P<=x||Y<=P?.5*(x+Y):P),l=3,n=s-g,h=9/11,v<M&&(k=g,M=v);;){if(o=s-e,u=g-e,X=Y-s,c=b=o*o*(w=N-v)-n*n*(y=N-Z),m=p=2*(n*y-o*w),l<1e6||N<=M)for(;m*(b*(_-N)+X*m*(N-M+z))<X*f*b*(X*m-b)&&(C=r(i=s+b/m))<M&&(k=i,M=C),m=1,!(X<=(b=(Y-x)*1e-5*(l=1611*l%1048576))););else for(m=1,b=(Y-x)*1e-5*(l=1611*l%1048576);b<X;)m*(b*(_-N)+X*m*(N-M+z))<X*f*b*(X*m-b)&&(C=r(i=s+b/m))<M&&(k=i,M=C),m=1,b=(Y-x)*1e-5*(l=1611*l%1048576);for(c=(h=.5*(1+h))*(c+2*(b=f*n*o*u)*(d=Math.sqrt((N-M+z)/f))),m+=.5*p,b=(b=-.5*(n+(w+2.01*A)/(n*f)))<d||n<0?s+d:s+b,i=0<c*m?s+c/m:b;Y<=(i=Math.max(i,b))?(i=Y,C=_):C=r(i),C<M&&(k=i,M=C),n=i-s,!(i<=b)&&(c=2*(N-C)/(1e7*n),!((1+9*G)*n<=Math.abs(c))&&!(.5*f*(n*n+c*c)<=N-M+(C-M)+2*z));)i=.5*(s+i),h*=.9;if(Y<=i)break;e=g,g=s,s=i,Z=v,v=N,N=C}return[k,M]},polzeros:function(r,t,e,i,n){var a,o,u,h=[],l=[],f=[],c=function(r,t,e){var i,n,a=r.length-1;if(e=e||!1)for(n=s.Z.C.mult(a,r[a]),i=a-1;i>0;i--)n.mult(t),n.add(s.Z.C.mult(r[i],i));else for(n=s.Z.C.copy(r[a]),i=a-1;i>=0;i--)n.mult(t),n.add(r[i]);return n},m=function(r,t,e){var i,n,a=r.length-1;if(e=e||!1)for(n=s.Z.C.mult(a,r[0]),i=a-1;i>0;i--)n.mult(t),n.add(s.Z.C.mult(r[a-i],i));else for(n=s.Z.C.copy(r[0]),i=a-1;i>=0;i--)n.mult(t),n.add(r[a-i]);return n},p=function(r,t){var e,s,i=r.length-1;for(s=r[i],e=i-1;e>=0;e--)s=s*t+r[e];return s};for(e=e||Number.EPSILON,i=i||30,o=r.length,s.Z.isNumber(t)&&t>=0&&t<o-1&&(o=t+1),a=0;a<o;a++)h.push(new s.Z.Complex(r[a]));for(a=0;a<o;a++)if(0!==h[a].real||0!==h[a].imaginary){u=a;break}for(a=0;a<u;a++)l.push(new s.Z.Complex(0));for(a=(o=(h=h.slice(u)).length)-1;a>=0&&0===h[a].real&&0===h[a].imaginary;a--)h.pop();if(0===(o=h.length))return[];if(n)for(a=0;a<o-1;a++)f.push(new s.Z.Complex(n[a]));else f=function(r){var t,e,i,n,a=r.length-1,o=2*Math.PI/a,u=Math.PI/a*.5,h=[];for((i=s.Z.C.mult(-1,r[a-1])).div(s.Z.C.mult(a,r[a])),n=s.Z.C.div(c(r,i),r[a]),0===(e=Math.pow(s.Z.C.abs(n),1/a))&&(e=1),t=0;t<a;t++)r=new s.Z.Complex(e*Math.cos(o*t+u),e*Math.sin(o*t+u)),h[t]=s.Z.C.add(i,r);return h}(h);return function(r,t,e,i){var n,a,o,u,h,l,f,b,d,g=[],M=[],Z=0,v=i.length;for(a=0;a<v;a++)g.push(!1);for(a=0;a<r.length;a++)M.push(s.Z.C.abs(r[a])*(4*a+1));for(n=0;n<e&&Z<v;n++)for(a=0;a<v;a++)if(!g[a]){if(l=c(r,i[a]),h=s.Z.C.abs(i[a]),s.Z.C.abs(l)<t*p(M,h)){if(g[a]=!0,++Z===v)break;continue}for(h>1?((d=m(r,u=s.Z.C.div(1,i[a]),!0)).div(m(r,u)),d.mult(u),l=s.Z.C.sub(v,d),l=s.Z.C.div(i[a],l)):l.div(c(r,i[a],!0)),f=new s.Z.Complex(0),o=0;o<v;o++)o!==a&&(b=s.Z.C.sub(i[a],i[o]),b=s.Z.C.div(1,b),f.add(b));f.mult(l),f=s.Z.C.sub(1,f),l.div(f),i[a].sub(l)}}(h,e,i,f),(f=l.concat(f)).sort(function(r,t){return r.real<t.real?-1:r.real>t.real?1:0}),f},RamerDouglasPeucker:function(r,t){var e,s,i,n=[],o=[],u=function(r,t,e){var s,i,n,o,u,h,l,f,c,m,p,b=a.Z.eps*a.Z.eps,d=0,g=t;if(e-t<2)return[-1,0];if(n=r[t].scrCoords,o=r[e].scrCoords,isNaN(n[1])||isNaN(n[2]))return[NaN,t];if(isNaN(o[1])||isNaN(o[2]))return[NaN,e];for(i=t+1;i<e;i++){if(isNaN((u=r[i].scrCoords)[1])||isNaN(u[2]))return[NaN,i];h=u[1]-n[1],l=u[2]-n[2],f=o[1]-n[1],c=o[2]-n[2],h=(h=h===1/0?1e4:h)===-1/0?-1e4:h,l=(l=l===1/0?1e4:l)===-1/0?-1e4:l,(m=(f=(f=f===1/0?1e4:f)===-1/0?-1e4:f)*f+(c=(c=c===1/0?1e4:c)===-1/0?-1e4:c)*c)>b?((p=(h*f+l*c)/m)<0?p=0:p>1&&(p=1),h-=p*f,l-=p*c):p=0,(s=h*h+l*l)>d&&(d=s,g=i)}return[Math.sqrt(d),g]},h=function(r,t,e,s,i){var n=u(r,t,e),a=n[1];if(isNaN(n[0])){h(r,t,a-1,s,i),i.push(r[a]);do++a;while(a<=e&&isNaN(r[a].scrCoords[1]+r[a].scrCoords[2]));a<=e&&i.push(r[a]),h(r,a+1,e,s,i)}else n[0]>s?(h(r,t,a,s,i),h(r,a,e,s,i)):i.push(r[e])};for(i=r.length,e=0;;){for(;e<i&&isNaN(r[e].scrCoords[1]+r[e].scrCoords[2]);)e+=1;for(s=e+1;s<i&&!isNaN(r[s].scrCoords[1]+r[s].scrCoords[2]);)s+=1;if(s--,e<i&&s>e&&((o=[])[0]=r[e],h(r,e,s,t,o),n=n.concat(o)),e>=i)break;s<i-1&&n.push(r[s+1]),e=s+1}return n},RamerDouglasPeuker:function(r,t){return s.Z.deprecated("Numerics.RamerDouglasPeuker()","Numerics.RamerDouglasPeucker()"),this.RamerDouglasPeucker(r,t)},Visvalingam:function(r,t){var e,i,n,a,o,u,h,l,f,c=[],m=[],p=[];if((i=r.length)<=2)return r;for(e=1,c[0]={used:!0,lft:null,node:null},o=0;e<i-1;e++)isNaN(n=Math.abs(s.Z.Math.Numerics.det([r[e-1].usrCoords,r[e].usrCoords,r[e+1].usrCoords])))||(m.push(f={v:n,idx:e}),c[e]={used:!0,lft:o,node:f},c[o].rt=e,o=e);for(c[i-1]={used:!0,rt:null,lft:o,node:null},c[o].rt=i-1,a=-1/0;m.length>t;)m.sort(function(r,t){return t.v-r.v}),c[e=m.pop().idx].used=!1,a=c[e].node.v,o=c[e].lft,u=c[e].rt,c[o].rt=u,c[u].lft=o,null!==(h=c[o].lft)&&(n=Math.abs(s.Z.Math.Numerics.det([r[h].usrCoords,r[o].usrCoords,r[u].usrCoords])),c[o].node.v=n>=a?n:a),null!==(l=c[u].rt)&&(n=Math.abs(s.Z.Math.Numerics.det([r[o].usrCoords,r[u].usrCoords,r[l].usrCoords])),c[u].node.v=n>=a?n:a);p=[r[e=0]];do e=c[e].rt,p.push(r[e]);while(null!==c[e].rt);return p}},t.Z=a.Z.Numerics}}]);