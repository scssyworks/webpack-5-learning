(()=>{"use strict";var e,r,t,n,o,a,i,l={143:(e,r,t)=>{var n=t(486);function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t,n;return r=e,t=[{key:"render",value:function(e){var r=document.createElement("h1");r.classList.add("heading"),r.innerHTML="Welcome to ".concat(e," page!"),document.body.appendChild(r)}}],t&&o(r.prototype,t),n&&o(r,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();const i=a;var l=t(518),u=t(455);function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const f=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t,n;return r=e,(t=[{key:"render",value:function(){var e=document.createElement("img");e.alt=u,e.src=l,e.classList.add("kiwi-image"),document.body.appendChild(e)}}])&&c(r.prototype,t),n&&c(r,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();(new i).render((0,n.upperFirst)("kiwi")),(new f).render(),t.e(547).then(t.t.bind(t,547,23)).then((function(e){(new(0,e.default)).render()}))},518:(e,r,t)=>{e.exports=t.p+"c06a69d75aee765cdb40.jpg"},455:e=>{e.exports="Kiwi alt text"},11:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof HelloWorldApp)return e();t.l("http://localhost:4000/remoteEntry.js",(t=>{if("undefined"!=typeof HelloWorldApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"HelloWorldApp")})).then((()=>HelloWorldApp))}},u={};function c(e){var r=u[e];if(void 0!==r)return r.exports;var t=u[e]={id:e,loaded:!1,exports:{}};return l[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=l,e=[],c.O=(r,t,n,o)=>{if(!t){var a=1/0;for(f=0;f<e.length;f++){for(var[t,n,o]=e[f],i=!0,l=0;l<t.length;l++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](t[l])))?t.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(f--,1);var u=n();void 0!==u&&(r=u)}}return r}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[t,n,o]},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&n&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,c.d(o,a),o},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>e+".c5a9563bdbb884f39f22.js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},o="webpack-learning:",c.l=(e,r,t,a)=>{if(n[e])n[e].push(r);else{var i,l;if(void 0!==t)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+t){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+t),i.src=e),n[e]=[r];var d=(r,t)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a={547:[547]},i={547:["default","./HelloWorldButton",11]},c.f.remotes=(e,r)=>{c.o(a,e)&&a[e].forEach((e=>{var t=c.R;t||(t=[]);var n=i[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l[e]=()=>{throw r},n.p=0},a=(e,t,a,i,l,u)=>{try{var c=e(t,a);if(!c||!c.then)return l(c,i,u);var f=c.then((e=>l(e,i)),o);if(!u)return f;r.push(n.p=f)}catch(e){o(e)}},u=(e,r,o)=>a(r.get,n[1],t,0,f,o),f=r=>{n.p=1,l[e]=e=>{e.exports=r()}};a(c,n[2],0,0,((e,r,t)=>e?a(c.I,n[0],0,e,u,t):o()),1)}}))},(()=>{c.S={};var e={},r={};c.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];c.o(c.S,t)||(c.S[t]={});c.S[t];var a=[];if("default"===t)(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var o=c(e);if(!o)return;var i=e=>e&&e.init&&e.init(c.S[t],n);if(o.then)return a.push(o.then(i,r));var l=i(o);if(l&&l.then)a.push(l.catch(r))}catch(e){r(e)}})(11);return a.length?e[t]=Promise.all(a).then((()=>e[t]=1)):e[t]=1}}})(),c.p="static/",(()=>{var e={179:0};c.f.j=(r,t)=>{var n=c.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(547!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=c.p+c.u(r),i=new Error;c.l(a,(t=>{if(c.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0},c.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(l)var f=l(c)}for(r&&r(t);u<a.length;u++)o=a[u],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(f)},t=self.webpackChunkwebpack_learning=self.webpackChunkwebpack_learning||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var f=c.O(void 0,[486],(()=>c(143)));f=c.O(f)})();