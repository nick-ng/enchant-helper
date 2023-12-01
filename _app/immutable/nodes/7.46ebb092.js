import{s as dt,j as _t,n as xe,r as pt,e as ze,o as vt}from"../chunks/scheduler.be62eccd.js";import{S as bt,i as mt,g as u,s as I,m as V,h,j as g,x as ae,c as w,n as q,f as v,k as d,z,a as Ee,y as n,D as $e,A as Q,o as ce,C as ft,B as He,E as gt}from"../chunks/index.4ba873cb.js";import{e as ge,z as Fe,a as Tt,b as Et}from"../chunks/schemas.3f2493ca.js";import{e as et}from"../chunks/enchant-bases.0f214fb6.js";import{f as Te,S as tt,e as Ie}from"../chunks/utils.6ad5fa6c.js";import{e as Dt}from"../chunks/enchant-data.5bbc3879.js";function lt(t,e,l){const s=t.slice();return s[26]=e[l],s[28]=l,s}function nt(t,e,l){const s=t.slice();return s[12]=e[l],s}function at(t,e,l){const s=t.slice();s[31]=e[l];const c=s[31].enchantText.replace("\\d{1,9}",s[31].value.toString());return s[32]=c,s}function st(t){let e,l,s=ge(t[8].slice(0,10)),c=[];for(let a=0;a<s.length;a+=1)c[a]=ot(at(t,s,a));let o=t[8].length>10&&rt(t);return{c(){e=u("div");for(let a=0;a<c.length;a+=1)c[a].c();l=I(),o&&o.c(),this.h()},l(a){e=h(a,"DIV",{class:!0});var _=g(e);for(let i=0;i<c.length;i+=1)c[i].l(_);l=w(_),o&&o.l(_),_.forEach(v),this.h()},h(){d(e,"class","absolute top-8 left-0 flex flex-col items-stretch border-subtle")},m(a,_){Ee(a,e,_);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(e,null);n(e,l),o&&o.m(e,null)},p(a,_){if(_[0]&289){s=ge(a[8].slice(0,10));let i;for(i=0;i<s.length;i+=1){const T=at(a,s,i);c[i]?c[i].p(T,_):(c[i]=ot(T),c[i].c(),c[i].m(e,l))}for(;i<c.length;i+=1)c[i].d(1);c.length=s.length}a[8].length>10?o?o.p(a,_):(o=rt(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},d(a){a&&v(e),He(c,a),o&&o.d()}}}function ot(t){let e,l,s=t[32]+"",c,o,a;function _(){return t[17](t[32])}return{c(){e=u("label"),l=u("button"),c=V(s),this.h()},l(i){e=h(i,"LABEL",{class:!0});var T=g(e);l=h(T,"BUTTON",{class:!0,type:!0});var k=g(l);c=q(k,s),k.forEach(v),T.forEach(v),this.h()},h(){d(l,"class","hover:bg-gray-700"),d(l,"type","button"),d(e,"class","max-w-prose break-normal bg-gray-800 px-1 py-1")},m(i,T){Ee(i,e,T),n(e,l),n(l,c),o||(a=Q(l,"click",_),o=!0)},p(i,T){t=i,T[0]&256&&s!==(s=t[32]+"")&&ce(c,s)},d(i){i&&v(e),o=!1,a()}}}function rt(t){let e,l,s=t[8].length-10+"",c,o;return{c(){e=u("div"),l=V("+"),c=V(s),o=V(" more"),this.h()},l(a){e=h(a,"DIV",{class:!0});var _=g(e);l=q(_,"+"),c=q(_,s),o=q(_," more"),_.forEach(v),this.h()},h(){d(e,"class","pb-1 px-1 bg-gray-800")},m(a,_){Ee(a,e,_),n(e,l),n(e,c),n(e,o)},p(a,_){_[0]&256&&s!==(s=a[8].length-10+"")&&ce(c,s)},d(a){a&&v(e)}}}function ct(t){let e,l=t[12].name+"",s,c;return{c(){e=u("option"),s=V(l),this.h()},l(o){e=h(o,"OPTION",{});var a=g(e);s=q(a,l),a.forEach(v),this.h()},h(){e.__value=c=t[12].name,z(e,e.__value)},m(o,a){Ee(o,e,a),n(e,s)},p(o,a){a[0]&2048&&l!==(l=o[12].name+"")&&ce(s,l),a[0]&2048&&c!==(c=o[12].name)&&(e.__value=c,z(e,e.__value))},d(o){o&&v(e)}}}function it(t){let e,l,s=t[26].enchantText+"",c,o,a,_=t[26].enchantBase+"",i,T,k,C=t[26].priceDivine<1?`${Math.round(t[26].priceDivine*t[2])} c`:`${Math.round(t[26].priceDivine*100)/100} d`,O,F,J,S,W=Te(new Date(t[26].dateSold))+"",j,M,G,U,se="🗑",Y,$,K;function ie(){return t[23](t[26],t[28])}return{c(){e=u("tr"),l=u("td"),c=V(s),o=I(),a=u("td"),i=V(_),T=I(),k=u("td"),O=V(C),J=I(),S=u("td"),j=V(W),M=I(),G=u("td"),U=u("button"),U.textContent=se,Y=I(),this.h()},l(L){e=h(L,"TR",{});var m=g(e);l=h(m,"TD",{class:!0});var X=g(l);c=q(X,s),X.forEach(v),o=w(m),a=h(m,"TD",{class:!0,colspan:!0});var p=g(a);i=q(p,_),p.forEach(v),T=w(m),k=h(m,"TD",{class:!0});var y=g(k);O=q(y,C),y.forEach(v),J=w(m),S=h(m,"TD",{class:!0});var E=g(S);j=q(E,W),E.forEach(v),M=w(m),G=h(m,"TD",{class:!0});var b=g(G);U=h(b,"BUTTON",{type:!0,"data-svelte-h":!0}),ae(U)!=="svelte-188r7ho"&&(U.textContent=se),b.forEach(v),Y=w(m),m.forEach(v),this.h()},h(){d(l,"class","border-subtle px-1"),d(a,"class","border-subtle px-1"),d(a,"colspan","2"),d(k,"class",F=`text-right border-subtle px-1 ${t[26].priceDivine<1?"text-gray-300":"text-lime-300"}`),d(S,"class","border-subtle px-1 text-right"),d(U,"type","button"),d(G,"class","border-subtle px-1")},m(L,m){Ee(L,e,m),n(e,l),n(l,c),n(e,o),n(e,a),n(a,i),n(e,T),n(e,k),n(k,O),n(e,J),n(e,S),n(S,j),n(e,M),n(e,G),n(G,U),n(e,Y),$||(K=Q(U,"click",ie),$=!0)},p(L,m){t=L,m[0]&1024&&s!==(s=t[26].enchantText+"")&&ce(c,s),m[0]&1024&&_!==(_=t[26].enchantBase+"")&&ce(i,_),m[0]&1028&&C!==(C=t[26].priceDivine<1?`${Math.round(t[26].priceDivine*t[2])} c`:`${Math.round(t[26].priceDivine*100)/100} d`)&&ce(O,C),m[0]&1024&&F!==(F=`text-right border-subtle px-1 ${t[26].priceDivine<1?"text-gray-300":"text-lime-300"}`)&&d(k,"class",F),m[0]&1024&&W!==(W=Te(new Date(t[26].dateSold))+"")&&ce(j,W)},d(L){L&&v(e),$=!1,K()}}}function Ct(t){let e,l,s="Enchant Sales",c,o,a,_=t[10].reduce(ut,0).toFixed(2)+"",i,T,k,C,O,F="Chaos per Divine:",J,S,W,j,M,G,U,se,Y,$,K,ie,L,m,X,p="<tr><th>Enchant</th> <th>Base</th> <th>Custom</th> <th>Price</th> <th>Date</th> <th>🗑</th></tr>",y,E,b,B,H,we,Be,_e,R,ee,Re="Choose a base",te,Ve="Lab Service",le,qe="Custom",Oe,pe,oe,Pe,ve,ne,Ne,ue,re,Je="Today",he,Le,fe,Ye="<button>Add</button>",Ae,je,Ge,A=t[0]!==t[5]&&st(t),be=ge([...t[11]].sort(ht)),P=[];for(let r=0;r<be.length;r+=1)P[r]=ct(nt(t,be,r));let me=ge(t[10]),N=[];for(let r=0;r<me.length;r+=1)N[r]=it(lt(t,me,r));return{c(){e=u("div"),l=u("h1"),l.textContent=s,c=I(),o=u("div"),a=V("Total sales: "),i=V(_),T=V(" d"),k=I(),C=u("label"),O=u("span"),O.textContent=F,J=I(),S=u("input"),W=I(),j=u("div"),M=u("a"),G=V("Export"),se=I(),Y=u("label"),$=V(`Import
			`),K=u("input"),ie=I(),L=u("form"),m=u("table"),X=u("thead"),X.innerHTML=p,y=I(),E=u("tbody"),b=u("tr"),B=u("td"),H=u("input"),we=I(),A&&A.c(),Be=I(),_e=u("td"),R=u("select"),ee=u("option"),ee.textContent=Re,te=u("option"),te.textContent=Ve,le=u("option"),le.textContent=qe;for(let r=0;r<P.length;r+=1)P[r].c();Oe=I(),pe=u("td"),oe=u("input"),Pe=I(),ve=u("td"),ne=u("input"),Ne=I(),ue=u("td"),re=u("button"),re.textContent=Je,he=u("input"),Le=I(),fe=u("td"),fe.innerHTML=Ye,Ae=I();for(let r=0;r<N.length;r+=1)N[r].c();this.h()},l(r){e=h(r,"DIV",{});var D=g(e);l=h(D,"H1",{"data-svelte-h":!0}),ae(l)!=="svelte-1dksiqt"&&(l.textContent=s),c=w(D),o=h(D,"DIV",{});var f=g(o);a=q(f,"Total sales: "),i=q(f,_),T=q(f," d"),f.forEach(v),k=w(D),C=h(D,"LABEL",{class:!0});var x=g(C);O=h(x,"SPAN",{"data-svelte-h":!0}),ae(O)!=="svelte-12ycje"&&(O.textContent=F),J=w(x),S=h(x,"INPUT",{type:!0}),x.forEach(v),W=w(D),j=h(D,"DIV",{class:!0});var Ce=g(j);M=h(Ce,"A",{class:!0,href:!0,download:!0});var Ke=g(M);G=q(Ke,"Export"),Ke.forEach(v),se=w(Ce),Y=h(Ce,"LABEL",{class:!0});var Me=g(Y);$=q(Me,`Import
			`),K=h(Me,"INPUT",{class:!0,type:!0,accept:!0}),Me.forEach(v),Ce.forEach(v),ie=w(D),L=h(D,"FORM",{});var Ze=g(L);m=h(Ze,"TABLE",{});var Se=g(m);X=h(Se,"THEAD",{"data-svelte-h":!0}),ae(X)!=="svelte-kz8zqm"&&(X.innerHTML=p),y=w(Se),E=h(Se,"TBODY",{});var ye=g(E);b=h(ye,"TR",{});var Z=g(b);B=h(Z,"TD",{class:!0});var ke=g(B);H=h(ke,"INPUT",{class:!0,type:!0}),we=w(ke),A&&A.l(ke),ke.forEach(v),Be=w(Z),_e=h(Z,"TD",{class:!0});var Qe=g(_e);R=h(Qe,"SELECT",{class:!0});var De=g(R);ee=h(De,"OPTION",{"data-svelte-h":!0}),ae(ee)!=="svelte-2l02tb"&&(ee.textContent=Re),te=h(De,"OPTION",{"data-svelte-h":!0}),ae(te)!=="svelte-7qeu0y"&&(te.textContent=Ve),le=h(De,"OPTION",{"data-svelte-h":!0}),ae(le)!=="svelte-ync4wa"&&(le.textContent=qe);for(let de=0;de<P.length;de+=1)P[de].l(De);De.forEach(v),Qe.forEach(v),Oe=w(Z),pe=h(Z,"TD",{class:!0});var We=g(pe);oe=h(We,"INPUT",{type:!0}),We.forEach(v),Pe=w(Z),ve=h(Z,"TD",{class:!0});var Xe=g(ve);ne=h(Xe,"INPUT",{class:!0,type:!0}),Xe.forEach(v),Ne=w(Z),ue=h(Z,"TD",{class:!0});var Ue=g(ue);re=h(Ue,"BUTTON",{type:!0,"data-svelte-h":!0}),ae(re)!=="svelte-1tzz7j7"&&(re.textContent=Je),he=h(Ue,"INPUT",{type:!0}),Ue.forEach(v),Le=w(Z),fe=h(Z,"TD",{class:!0,"data-svelte-h":!0}),ae(fe)!=="svelte-of4smv"&&(fe.innerHTML=Ye),Z.forEach(v),Ae=w(ye);for(let de=0;de<N.length;de+=1)N[de].l(ye);ye.forEach(v),Se.forEach(v),Ze.forEach(v),D.forEach(v),this.h()},h(){d(S,"type","number"),d(C,"class","mt-1"),d(M,"class","inline-block button-default no-underline text-white"),d(M,"href",U=`data:text/json;charset=utf-8,${JSON.stringify({sales:t[10],bases:t[11]})}`),d(M,"download",`enchants_${Te(new Date,!0)}.json`.replaceAll(/:/g,"").replaceAll(/[^a-z0-9-.]+/gi,"_")),d(K,"class","w-0 opacity-0 text-sm text-left block absolute top-0 left-0"),d(K,"type","file"),d(K,"accept",".json"),d(Y,"class","button-default inline-block cursor-pointer relative"),d(j,"class","mt-1"),d(H,"class","block w-full"),d(H,"type","text"),d(B,"class","border-subtle relative"),ee.__value="",z(ee,ee.__value),te.__value="Lab Service",z(te,te.__value),le.__value="Custom",z(le,le.__value),d(R,"class","w-full"),t[12]===void 0&&_t(()=>t[18].call(R)),d(_e,"class","border-subtle"),d(oe,"type","text"),d(pe,"class","border-subtle"),d(ne,"class","text-right w-20"),d(ne,"type","text"),d(ve,"class","border-subtle"),d(re,"type","button"),d(he,"type","date"),d(ue,"class","border-subtle"),d(fe,"class","border-subtle")},m(r,D){Ee(r,e,D),n(e,l),n(e,c),n(e,o),n(o,a),n(o,i),n(o,T),n(e,k),n(e,C),n(C,O),n(C,J),n(C,S),z(S,t[2]),n(e,W),n(e,j),n(j,M),n(M,G),n(j,se),n(j,Y),n(Y,$),n(Y,K),n(e,ie),n(e,L),n(L,m),n(m,X),n(m,y),n(m,E),n(E,b),n(b,B),n(B,H),z(H,t[0]),n(B,we),A&&A.m(B,null),n(b,Be),n(b,_e),n(_e,R),n(R,ee),n(R,te),n(R,le);for(let f=0;f<P.length;f+=1)P[f]&&P[f].m(R,null);$e(R,t[12],!0),n(b,Oe),n(b,pe),n(pe,oe),z(oe,t[6]),n(b,Pe),n(b,ve),n(ve,ne),z(ne,t[1]),n(b,Ne),n(b,ue),n(ue,re),n(ue,he),z(he,t[3]),n(b,Le),n(b,fe),n(E,Ae);for(let f=0;f<N.length;f+=1)N[f]&&N[f].m(E,null);je||(Ge=[Q(S,"input",t[13]),Q(S,"change",t[14]),Q(K,"change",t[15]),Q(H,"input",t[16]),Q(R,"change",t[18]),Q(oe,"input",t[19]),Q(ne,"input",t[20]),Q(re,"click",t[21]),Q(he,"input",t[22]),Q(L,"submit",t[24])],je=!0)},p(r,D){if(D[0]&1024&&_!==(_=r[10].reduce(ut,0).toFixed(2)+"")&&ce(i,_),D[0]&4&&ft(S.value)!==r[2]&&z(S,r[2]),D[0]&3072&&U!==(U=`data:text/json;charset=utf-8,${JSON.stringify({sales:r[10],bases:r[11]})}`)&&d(M,"href",U),D[0]&1&&H.value!==r[0]&&z(H,r[0]),r[0]!==r[5]?A?A.p(r,D):(A=st(r),A.c(),A.m(B,null)):A&&(A.d(1),A=null),D[0]&2048){be=ge([...r[11]].sort(ht));let f;for(f=0;f<be.length;f+=1){const x=nt(r,be,f);P[f]?P[f].p(x,D):(P[f]=ct(x),P[f].c(),P[f].m(R,null))}for(;f<P.length;f+=1)P[f].d(1);P.length=be.length}if(D[0]&6144&&$e(R,r[12]),D[0]&64&&oe.value!==r[6]&&z(oe,r[6]),D[0]&2&&ne.value!==r[1]&&z(ne,r[1]),D[0]&8&&z(he,r[3]),D[0]&5135){me=ge(r[10]);let f;for(f=0;f<me.length;f+=1){const x=lt(r,me,f);N[f]?N[f].p(x,D):(N[f]=it(x),N[f].c(),N[f].m(E,null))}for(;f<N.length;f+=1)N[f].d(1);N.length=me.length}},i:xe,o:xe,d(r){r&&v(e),A&&A.d(),He(P,r),He(N,r),je=!1,pt(Ge)}}}const ut=(t,e)=>t+e.priceDivine,ht=(t,e)=>t.name.localeCompare(e.name);function St(t,e,l){let s,c,o,a,_,i;ze(t,Dt,p=>l(4,a=p)),ze(t,Ie,p=>l(10,_=p)),ze(t,et,p=>l(11,i=p));let T="",k="",C="",O="",F="",J=230,S=Te(new Date);const W=(p,y)=>{if(!p)return 0;const E=p.match(/(\d+) *c/),b=parseFloat((E==null?void 0:E[1])||"0"),B=p.match(/(\d+) *d/);return parseFloat((B==null?void 0:B[1])||"0")+b/y};vt(()=>{const p=localStorage.getItem(tt);typeof p=="string"&&l(2,J=parseFloat(p||"0"))});function j(){J=ft(this.value),l(2,J)}const M=p=>{localStorage.setItem(tt,p.currentTarget.value)},G=async p=>{if(p.currentTarget.files)for(const y of[...p.currentTarget.files])try{const E=[],b=JSON.parse(await y.text()),B=Fe.array(Tt).safeParse(b==null?void 0:b.bases);B.success&&E.push("bases");const H=Fe.array(Et).safeParse(b==null?void 0:b.sales);H.success&&E.push("sales"),confirm(`Load ${E.join(" and ")} from file? Any existing ${E.join(" or ")} will be lost.`)&&(B.success&&et.set(B.data),H.success&&Ie.set(H.data))}catch(E){E instanceof Fe.ZodError?console.error(`${y.name} doesn't contain an army`):console.error(`Error when loading ${y.name}`)}};function U(){T=this.value,l(0,T)}const se=p=>{l(5,k=p),l(0,T=p)};function Y(){C=gt(this),l(12,C)}function $(){O=this.value,l(6,O)}function K(){F=this.value,l(1,F)}const ie=()=>{l(3,S=Te(new Date))};function L(){S=this.value,l(3,S)}const m=(p,y)=>{l(0,T=p.enchantText),l(12,C=p.enchantBase),l(1,F=`${p.priceDivine} d`),l(3,S=Te(new Date(p.dateSold))),Ie.update(E=>E.filter((b,B)=>y!==B))},X=()=>{if(!(C!=="Custom"?C:O)){alert("Please choose an enchant base.");return}if(!a.map(y=>y.enchantText.replace("\\d{1,9}",y.value.toString())).includes(k)){alert("Please choose an enchant.");return}Ie.update(y=>y.concat([{enchantText:k,enchantBase:C!=="Custom"?C:O,priceDivine:o,dateSold:s}]).sort((E,b)=>new Date(E.dateSold).valueOf()-new Date(b.dateSold).valueOf()).reverse()),l(0,T=""),l(5,k=""),l(1,F=""),l(12,C=""),l(6,O="")};return t.$$.update=()=>{t.$$.dirty[0]&8&&l(9,s=new Date(S).toISOString()),t.$$.dirty[0]&17&&l(8,c=T?a.filter(({enchantText:p,value:y})=>p.replace("\\d{1,9}",y.toString()).toLowerCase().includes(T.toLowerCase())).sort((p,y)=>p.enchantText.localeCompare(y.enchantText)):[]),t.$$.dirty[0]&6&&l(7,o=W(F,J))},[T,F,J,S,a,k,O,o,c,s,_,i,C,j,M,G,U,se,Y,$,K,ie,L,m,X]}class Pt extends bt{constructor(e){super(),mt(this,e,St,Ct,dt,{},null,[-1,-1])}}export{Pt as component};
