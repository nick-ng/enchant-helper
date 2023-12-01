import{s as _e,c as Se,u as Ee,g as ke,d as Oe,e as Te,o as Ae,f as q}from"../chunks/scheduler.be62eccd.js";import{S as je,i as Re,g as X,s as le,h as x,j as ue,x as de,c as fe,f as ne,k as oe,a as $e,y as J,d as Ne,t as Pe}from"../chunks/index.4ba873cb.js";import{j as Ie}from"../chunks/singletons.6cd257ab.js";import{o as F}from"../chunks/ocr.4b93bd06.js";const Me="auto",Ce=!1,ur=Object.freeze(Object.defineProperty({__proto__:null,prerender:Me,ssr:Ce},Symbol.toStringTag,{value:"Module"})),De=Ie("goto");function Ge(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ze={exports:{}};(function(t){var s=function(i){var c=Object.prototype,v=c.hasOwnProperty,w=Object.defineProperty||function(n,e,o){n[e]=o.value},d,p=typeof Symbol=="function"?Symbol:{},L=p.iterator||"@@iterator",_=p.asyncIterator||"@@asyncIterator",k=p.toStringTag||"@@toStringTag";function l(n,e,o){return Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{l({},"")}catch{l=function(e,o,u){return e[o]=u}}function f(n,e,o,u){var r=e&&e.prototype instanceof D?e:D,a=Object.create(r.prototype),h=new Y(u||[]);return w(a,"_invoke",{value:te(n,o,h)}),a}i.wrap=f;function y(n,e,o){try{return{type:"normal",arg:n.call(e,o)}}catch(u){return{type:"throw",arg:u}}}var O="suspendedStart",R="suspendedYield",$="executing",N="completed",S={};function D(){}function I(){}function E(){}var B={};l(B,L,function(){return this});var W=Object.getPrototypeOf,G=W&&W(W(K([])));G&&G!==c&&v.call(G,L)&&(B=G);var P=E.prototype=D.prototype=Object.create(B);I.prototype=E,w(P,"constructor",{value:E,configurable:!0}),w(E,"constructor",{value:I,configurable:!0}),I.displayName=l(E,k,"GeneratorFunction");function V(n){["next","throw","return"].forEach(function(e){l(n,e,function(o){return this._invoke(e,o)})})}i.isGeneratorFunction=function(n){var e=typeof n=="function"&&n.constructor;return e?e===I||(e.displayName||e.name)==="GeneratorFunction":!1},i.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,E):(n.__proto__=E,l(n,k,"GeneratorFunction")),n.prototype=Object.create(P),n},i.awrap=function(n){return{__await:n}};function z(n,e){function o(a,h,g,m){var b=y(n[a],n,h);if(b.type==="throw")m(b.arg);else{var Q=b.arg,A=Q.value;return A&&typeof A=="object"&&v.call(A,"__await")?e.resolve(A.__await).then(function(j){o("next",j,g,m)},function(j){o("throw",j,g,m)}):e.resolve(A).then(function(j){Q.value=j,g(Q)},function(j){return o("throw",j,g,m)})}}var u;function r(a,h){function g(){return new e(function(m,b){o(a,h,m,b)})}return u=u?u.then(g,g):g()}w(this,"_invoke",{value:r})}V(z.prototype),l(z.prototype,_,function(){return this}),i.AsyncIterator=z,i.async=function(n,e,o,u,r){r===void 0&&(r=Promise);var a=new z(f(n,e,o,u),r);return i.isGeneratorFunction(e)?a:a.next().then(function(h){return h.done?h.value:a.next()})};function te(n,e,o){var u=O;return function(a,h){if(u===$)throw new Error("Generator is already running");if(u===N){if(a==="throw")throw h;return Z()}for(o.method=a,o.arg=h;;){var g=o.delegate;if(g){var m=H(g,o);if(m){if(m===S)continue;return m}}if(o.method==="next")o.sent=o._sent=o.arg;else if(o.method==="throw"){if(u===O)throw u=N,o.arg;o.dispatchException(o.arg)}else o.method==="return"&&o.abrupt("return",o.arg);u=$;var b=y(n,e,o);if(b.type==="normal"){if(u=o.done?N:R,b.arg===S)continue;return{value:b.arg,done:o.done}}else b.type==="throw"&&(u=N,o.method="throw",o.arg=b.arg)}}}function H(n,e){var o=e.method,u=n.iterator[o];if(u===d)return e.delegate=null,o==="throw"&&n.iterator.return&&(e.method="return",e.arg=d,H(n,e),e.method==="throw")||o!=="return"&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),S;var r=y(u,n.iterator,e.arg);if(r.type==="throw")return e.method="throw",e.arg=r.arg,e.delegate=null,S;var a=r.arg;if(!a)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,S;if(a.done)e[n.resultName]=a.value,e.next=n.nextLoc,e.method!=="return"&&(e.method="next",e.arg=d);else return a;return e.delegate=null,S}V(P),l(P,k,"Generator"),l(P,L,function(){return this}),l(P,"toString",function(){return"[object Generator]"});function re(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function M(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function Y(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(re,this),this.reset(!0)}i.keys=function(n){var e=Object(n),o=[];for(var u in e)o.push(u);return o.reverse(),function r(){for(;o.length;){var a=o.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}};function K(n){if(n){var e=n[L];if(e)return e.call(n);if(typeof n.next=="function")return n;if(!isNaN(n.length)){var o=-1,u=function r(){for(;++o<n.length;)if(v.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=d,r.done=!0,r};return u.next=u}}return{next:Z}}i.values=K;function Z(){return{value:d,done:!0}}return Y.prototype={constructor:Y,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(M),!n)for(var e in this)e.charAt(0)==="t"&&v.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=d)},stop:function(){this.done=!0;var n=this.tryEntries[0],e=n.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(m,b){return a.type="throw",a.arg=n,e.next=m,b&&(e.method="next",e.arg=d),!!b}for(var u=this.tryEntries.length-1;u>=0;--u){var r=this.tryEntries[u],a=r.completion;if(r.tryLoc==="root")return o("end");if(r.tryLoc<=this.prev){var h=v.call(r,"catchLoc"),g=v.call(r,"finallyLoc");if(h&&g){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(h){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else if(g){if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(n,e){for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o];if(u.tryLoc<=this.prev&&v.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var r=u;break}}r&&(n==="break"||n==="continue")&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=n,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,S):this.complete(a)},complete:function(n,e){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&e&&(this.next=e),S},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===n)return this.complete(o.completion,o.afterLoc),M(o),S}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===n){var u=o.completion;if(u.type==="throw"){var r=u.arg;M(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,o){return this.delegate={iterator:K(n),resultName:e,nextLoc:o},this.method==="next"&&(this.arg=d),S}},i}(t.exports);try{regeneratorRuntime=s}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}})(ze);var ie=(t,s)=>`${t}-${s}-${Math.random().toString(16).slice(3,8)}`;const Fe=ie;let pe=0;var ye=({id:t,action:s,payload:i={}})=>{let c=t;return typeof c>"u"&&(c=Fe("Job",pe),pe+=1),{id:c,action:s,payload:i}},U={};let ce=!1;U.logging=ce;U.setLogging=t=>{ce=t};U.log=(...t)=>ce?console.log.apply(globalThis,t):null;const Ue=ye,{log:ee}=U,Be=ie;let he=0;var We=()=>{const t=Be("Scheduler",he),s={},i={};let c=[];he+=1;const v=()=>c.length,w=()=>Object.keys(s).length,d=()=>{if(c.length!==0){const l=Object.keys(s);for(let f=0;f<l.length;f+=1)if(typeof i[l[f]]>"u"){c[0](s[l[f]]);break}}},p=(l,f)=>new Promise((y,O)=>{const R=Ue({action:l,payload:f});c.push(async $=>{c.shift(),i[$.id]=R;try{y(await $[l].apply(globalThis,[...f,R.id]))}catch(N){O(N)}finally{delete i[$.id],d()}}),ee(`[${t}]: Add ${R.id} to JobQueue`),ee(`[${t}]: JobQueue length=${c.length}`),d()});return{addWorker:l=>(s[l.id]=l,ee(`[${t}]: Add ${l.id}`),ee(`[${t}]: Number of workers=${w()}`),d(),l.id),addJob:async(l,...f)=>{if(w()===0)throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return p(l,f)},terminate:async()=>{Object.keys(s).forEach(async l=>{await s[l].terminate()}),c=[]},getQueueLen:v,getNumWorkers:w}};function He(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function Ye(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Ke=Ye;const qe=Ke;var Je=t=>{const s={};return typeof WorkerGlobalScope<"u"?s.type="webworker":qe()?s.type="electron":typeof document=="object"?s.type="browser":typeof process=="object"&&typeof He=="function"&&(s.type="node"),typeof t>"u"?s:s[t]};const Ve=Je("type")==="browser",Ze=Ve?t=>new URL(t,window.location.href).href:t=>t;var Qe=t=>{const s={...t};return["corePath","workerPath","langPath"].forEach(i=>{t[i]&&(s[i]=Ze(s[i]))}),s},Xe=t=>{const s=[],i=[],c=[],v=[],w=[];return t.blocks&&t.blocks.forEach(d=>{d.paragraphs.forEach(p=>{p.lines.forEach(L=>{L.words.forEach(_=>{_.symbols.forEach(k=>{w.push({...k,page:t,block:d,paragraph:p,line:L,word:_})}),v.push({..._,page:t,block:d,paragraph:p,line:L})}),c.push({...L,page:t,block:d,paragraph:p})}),i.push({...p,page:t,block:d})}),s.push({...d,page:t})}),{...t,blocks:s,paragraphs:i,lines:c,words:v,symbols:w}},we={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const xe="tesseract.js",et="5.0.3",tt="Pure Javascript Multilingual OCR",rt="src/index.js",nt="src/index.d.ts",ot="dist/tesseract.min.js",st="dist/tesseract.min.js",at={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},it={"./src/worker/node/index.js":"./src/worker/browser/index.js"},ct="",lt=["jeromewu"],ut="Apache-2.0",dt={"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0",acorn:"^8.8.2","babel-loader":"^9.1.2",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1",express:"^4.18.2",mocha:"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5",nyc:"^15.1.0",rimraf:"^5.0.0",rollup:"^3.20.7","wait-on":"^7.0.1",webpack:"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},ft={"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^5.0.0","wasm-feature-detect":"^1.2.11",zlibjs:"^0.3.1"},pt={"@rollup/pluginutils":"^5.0.2"},ht={type:"git",url:"https://github.com/naptha/tesseract.js.git"},gt={url:"https://github.com/naptha/tesseract.js/issues"},mt="https://github.com/naptha/tesseract.js",vt={type:"opencollective",url:"https://opencollective.com/tesseractjs"},yt={name:xe,version:et,description:tt,main:rt,types:nt,unpkg:ot,jsdelivr:st,scripts:at,browser:it,author:ct,contributors:lt,license:ut,devDependencies:dt,dependencies:ft,overrides:pt,repository:ht,bugs:gt,homepage:mt,collective:vt};var wt={workerBlobURL:!0,logger:()=>{}};const bt=yt.version,Lt=wt;var _t={...Lt,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${bt}/dist/worker.min.js`},St=({workerPath:t,workerBlobURL:s})=>{let i;if(Blob&&URL&&s){const c=new Blob([`importScripts("${t}");`],{type:"application/javascript"});i=new Worker(URL.createObjectURL(c))}else i=new Worker(t);return i},Et=t=>{t.terminate()},kt=(t,s)=>{t.onmessage=({data:i})=>{s(i)}},Ot=async(t,s)=>{t.postMessage(s)};const se=t=>new Promise((s,i)=>{const c=new FileReader;c.onload=()=>{s(c.result)},c.onerror=({target:{error:{code:v}}})=>{i(Error(`File could not be read! Code=${v}`))},c.readAsArrayBuffer(t)}),ae=async t=>{let s=t;if(typeof t>"u")return"undefined";if(typeof t=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(t)?s=atob(t.split(",")[1]).split("").map(i=>i.charCodeAt(0)):s=await(await fetch(t)).arrayBuffer();else if(typeof HTMLElement<"u"&&t instanceof HTMLElement)t.tagName==="IMG"&&(s=await ae(t.src)),t.tagName==="VIDEO"&&(s=await ae(t.poster)),t.tagName==="CANVAS"&&await new Promise(i=>{t.toBlob(async c=>{s=await se(c),i()})});else if(typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas){const i=await t.convertToBlob();s=await se(i)}else(t instanceof File||t instanceof Blob)&&(s=await se(t));return new Uint8Array(s)};var Tt=ae;const At=_t,jt=St,Rt=Et,$t=kt,Nt=Ot,Pt=Tt;var It={defaultOptions:At,spawnWorker:jt,terminateWorker:Rt,onMessage:$t,send:Nt,loadImage:Pt};const Mt=Qe,Ct=Xe,T=ye,{log:ge}=U,Dt=ie,C=we,{defaultOptions:Gt,spawnWorker:zt,terminateWorker:Ft,onMessage:Ut,loadImage:me,send:Bt}=It;let ve=0;var be=async(t="eng",s=C.LSTM_ONLY,i={},c={})=>{const v=Dt("Worker",ve),{logger:w,errorHandler:d,...p}=Mt({...Gt,...i}),L={},_={},k=typeof t=="string"?t.split("+"):t;let l=s,f=c;const y=[C.DEFAULT,C.LSTM_ONLY].includes(s)&&!p.legacyCore;let O,R;const $=new Promise((r,a)=>{R=r,O=a}),N=r=>{O(r.message)};let S=zt(p);S.onerror=N,ve+=1;const D=(r,a)=>{L[r]=a},I=(r,a)=>{_[r]=a},E=({id:r,action:a,payload:h})=>new Promise((g,m)=>{ge(`[${v}]: Start ${r}, action=${a}`),D(a,g),I(a,m),Bt(S,{workerId:v,jobId:r,action:a,payload:h})}),B=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),W=r=>E(T({id:r,action:"load",payload:{options:{lstmOnly:y,corePath:p.corePath,logging:p.logging}}})),G=(r,a,h)=>E(T({id:h,action:"FS",payload:{method:"writeFile",args:[r,a]}})),P=(r,a)=>E(T({id:a,action:"FS",payload:{method:"readFile",args:[r,{encoding:"utf8"}]}})),V=(r,a)=>E(T({id:a,action:"FS",payload:{method:"unlink",args:[r]}})),z=(r,a,h)=>E(T({id:h,action:"FS",payload:{method:r,args:a}})),te=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),H=(r,a)=>E(T({id:a,action:"loadLanguage",payload:{langs:r,options:{langPath:p.langPath,dataPath:p.dataPath,cachePath:p.cachePath,cacheMethod:p.cacheMethod,gzip:p.gzip,lstmOnly:[C.LSTM_ONLY,C.TESSERACT_LSTM_COMBINED].includes(l)&&!p.legacyLang}}})),re=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),M=(r,a,h,g)=>E(T({id:g,action:"initialize",payload:{langs:r,oem:a,config:h}})),Y=(r="eng",a,h,g)=>{if(y&&[C.TESSERACT_ONLY,C.TESSERACT_LSTM_COMBINED].includes(a))throw Error("Legacy model requested but code missing.");const m=a||l;l=m;const b=h||f;f=b;const A=(typeof r=="string"?r.split("+"):r).filter(j=>!k.includes(j));return k.push(...A),A.length>0?H(A,g).then(()=>M(r,m,b,g)):M(r,m,b,g)},K=(r={},a)=>E(T({id:a,action:"setParameters",payload:{params:r}})),Z=async(r,a={},h={blocks:!0,text:!0,hocr:!0,tsv:!0},g)=>E(T({id:g,action:"recognize",payload:{image:await me(r),options:a,output:h}})),n=(r="Tesseract OCR Result",a=!1,h)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),E(T({id:h,action:"getPDF",payload:{title:r,textonly:a}}))),e=async(r,a)=>{if(y)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return E(T({id:a,action:"detect",payload:{image:await me(r)}}))},o=async()=>(S!==null&&(Ft(S),S=null),Promise.resolve());Ut(S,({workerId:r,jobId:a,status:h,action:g,data:m})=>{if(h==="resolve"){ge(`[${r}]: Complete ${a}`);let b=m;g==="recognize"?b=Ct(m):g==="getPDF"&&(b=Array.from({...m,length:Object.keys(m).length})),L[g]({jobId:a,data:b})}else if(h==="reject")if(_[g](m),g==="load"&&O(m),d)d(m);else throw Error(m);else h==="progress"&&w({...m,userJobId:a})});const u={id:v,worker:S,setResolve:D,setReject:I,load:B,writeText:G,readText:P,removeFile:V,FS:z,loadLanguage:te,initialize:re,reinitialize:Y,setParameters:K,recognize:Z,getPDF:n,detect:e,terminate:o};return W().then(()=>H(t)).then(()=>M(t,s,c)).then(()=>R(u)).catch(()=>{}),$};const Le=be,Wt=async(t,s,i)=>{const c=await Le(s,1,i);return c.recognize(t).finally(async()=>{await c.terminate()})},Ht=async(t,s)=>{const i=await Le("osd",0,s);return i.detect(t).finally(async()=>{await i.terminate()})};var Yt={recognize:Wt,detect:Ht},Kt={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},qt={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Jt=We,Vt=be,Zt=Yt,Qt=Kt,Xt=we,xt=qt,{setLogging:er}=U;var tr={languages:Qt,OEM:Xt,PSM:xt,createScheduler:Jt,createWorker:Vt,setLogging:er,...Zt};const rr=Ge(tr),nr=t=>rr.recognize(t,"eng",{}).then(s=>{const{data:i}=s,{text:c}=i;return c});function or(t){let s,i,c='<a class="button-default no-underline inline-block py-1" href="/">Search</a> <a class="button-default no-underline inline-block py-1" href="/bases">Bases</a> <a class="button-default no-underline inline-block py-1" href="/sales">Sales</a> <a class="button-default no-underline inline-block py-1" href="/colour">Colour</a> <a class="button-default no-underline inline-block py-1" href="/dev">Dev</a>',v,w,d,p,L='<p class="max-w-prose">This site is not affiliated with or endorsed by Grinding Gear Games.</p>',_;const k=t[1].default,l=Se(k,t,t[0],null);return{c(){s=X("div"),i=X("nav"),i.innerHTML=c,v=le(),w=X("div"),l&&l.c(),d=le(),p=X("div"),p.innerHTML=L,this.h()},l(f){s=x(f,"DIV",{class:!0});var y=ue(s);i=x(y,"NAV",{"data-svelte-h":!0}),de(i)!=="svelte-1e9dl7i"&&(i.innerHTML=c),v=fe(y),w=x(y,"DIV",{class:!0});var O=ue(w);l&&l.l(O),O.forEach(ne),d=fe(y),p=x(y,"DIV",{class:!0,"data-svelte-h":!0}),de(p)!=="svelte-19f4tj"&&(p.innerHTML=L),y.forEach(ne),this.h()},h(){oe(w,"class","pb-10"),oe(p,"class","absolute w-full bottom-0 flex flex-row justify-center my-2"),oe(s,"class","min-h-screen relative mx-2 mt-2")},m(f,y){$e(f,s,y),J(s,i),J(s,v),J(s,w),l&&l.m(w,null),J(s,d),J(s,p),_=!0},p(f,[y]){l&&l.p&&(!_||y&1)&&Ee(l,k,f,f[0],_?Oe(k,f[0],y,null):ke(f[0]),null)},i(f){_||(Ne(l,f),_=!0)},o(f){Pe(l,f),_=!1},d(f){f&&ne(s),l&&l.d(f)}}}function sr(t,s,i){let c;Te(t,F,d=>i(2,c=d));let{$$slots:v={},$$scope:w}=s;return Ae(()=>{document.onpaste=async d=>{var L;const p=(L=d.clipboardData)==null?void 0:L.items;if(!p){q(F,c.status=null,c);return}q(F,c.status="Processing...",c);for(const _ of p)if(_.type.startsWith("image/")){const k=_.getAsFile();if(k){De("/");const l=new FileReader;l.readAsDataURL(k),l.onloadend=()=>{var y;const f=(y=l.result)==null?void 0:y.toString();f&&q(F,c.imageDataBase64=f,c)},q(F,c.rawText=await nr(k),c);break}}q(F,c.status=null,c)}}),t.$$set=d=>{"$$scope"in d&&i(0,w=d.$$scope)},[w,v]}class dr extends je{constructor(s){super(),Re(this,s,sr,or,_e,{})}}export{dr as component,ur as universal};