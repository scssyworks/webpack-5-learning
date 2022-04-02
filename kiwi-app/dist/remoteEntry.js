var KiwiApp;(()=>{"use strict";var e,t,r,n,a={},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=a,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"."+{486:"509c382b4f5b982b3f15",744:"c5b6aa77c70c09a90e57"}[e]+".js",i.miniCssF=e=>e+".308483835f8ec34b1ff7.css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpack-learning:",i.l=(r,n,a,o)=>{if(e[r])e[r].push(n);else{var l,d;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){l=f;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[n];var c=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),d&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.p="http://localhost:4001/",r=e=>new Promise(((t,r)=>{var n=i.miniCssF(e),a=i.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}})(n,a))return t();((e,t,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,a.parentNode.removeChild(a),n(d)}},a.href=t,document.head.appendChild(a)})(e,a,t,r)})),n={800:0},i.f.miniCss=(e,t)=>{n[e]?t.push(n[e]):0!==n[e]&&{744:1}[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))},(()=>{var e={800:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=i.p+i.u(t),l=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,l,d]=r,s=0;if(o.some((t=>0!==e[t]))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(d)d(i)}for(t&&t(r);s<o.length;s++)a=o[s],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkwebpack_learning=self.webpackChunkwebpack_learning||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l,d,s,u,f={};l=f,d={"./KiwiPage":()=>Promise.all([i.e(486),i.e(744)]).then((()=>()=>i(744)))},s=(e,t)=>(i.R=t,t=i.o(d,e)?d[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),i.R=void 0,t),u=(e,t)=>{if(i.S){var r="default",n=i.S[r];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return i.S[r]=e,i.I(r,t)}},i.d(l,{get:()=>s,init:()=>u}),KiwiApp=f})();