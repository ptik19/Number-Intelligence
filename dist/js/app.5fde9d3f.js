(function(t){function e(e){for(var r,a,u=e[0],i=e[1],s=e[2],f=0,b=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},c=[];function a(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"12010ba3"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(t);var s=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"9cdc":function(t,e,n){"use strict";n("c701")},c701:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["e"])(" Home "),a=Object(r["e"])(" | "),u=Object(r["e"])(" About "),i={class:"flashes"};function s(t,e,n,s,f,l){var b=Object(r["u"])("router-link"),h=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",o,[Object(r["f"])(b,{to:"/"},{default:Object(r["A"])((function(){return[c]})),_:1}),a,Object(r["f"])(b,{to:"/about"},{default:Object(r["A"])((function(){return[u]})),_:1})]),Object(r["f"])(h,{onFlash:t.newFlash},null,8,["onFlash"]),Object(r["f"])("div",i,[(Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(t.flashMessages,(function(t,e){return Object(r["o"])(),Object(r["d"])("span",{key:e},Object(r["w"])(t.message),1)})),128))])],64)}var f,l=n("d4ec"),b=n("262e"),h=n("2caf"),d=n("9ab4"),p=n("ce1f");(function(t){t[t["success"]=0]="success",t[t["error"]=1]="error"})(f||(f={}));var v=function(t){Object(b["a"])(n,t);var e=Object(h["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return n}(p["b"]);v=Object(d["a"])([Object(p["a"])({data:function(){return{flashMessages:[]}},methods:{newFlash:function(t){this.flashMessages.push(t)}}})],v);var j=v;n("9cdc");j.render=s;var O=j,m=(n("d3b7"),n("6c02")),y={class:"home"};function g(t,e,n,o,c,a){return Object(r["o"])(),Object(r["d"])("div",y,[Object(r["f"])("canvas",{ref:"cvs",width:"500",height:"500",onMousemove:e[1]||(e[1]=function(){return t.draw.apply(t,arguments)})},null,544),Object(r["f"])("div",null,"X: "+Object(r["w"])(t.x),1),Object(r["f"])("div",null,"Y: "+Object(r["w"])(t.y),1),Object(r["f"])("button",{onClick:e[2]||(e[2]=function(){return t.sendData.apply(t,arguments)})}," send my data ")])}var w=n("bee2"),x=function(){function t(){Object(l["a"])(this,t)}return Object(w["a"])(t,null,[{key:"getAnalyst",value:function(t){this.cvs=t;var e=this.buildRequest();return fetch(this.apiUrl,e).then((function(t){return t.json()})).then((function(t){return t}))}},{key:"buildRequest",value:function(){var t=new FormData;return t.append("image",this.cvs.toDataURL()),{method:"POST",body:t}}},{key:"apiUrl",set:function(t){sessionStorage.setItem("apiUrl",t)},get:function(){var t,e=sessionStorage.getItem("apiUrl");return e||(this.apiUrl=null!==(t=window.prompt("Please specify the API URL to send"))&&void 0!==t?t:"",this.apiUrl)}}]),t}(),P=function(t){Object(b["a"])(n,t);var e=Object(h["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return n}(p["b"]);P=Object(d["a"])([Object(p["a"])({data:function(){return{ctx:CanvasRenderingContext2D,x:0,y:0}},methods:{draw:function(t){this.drawLine(this.x,this.y,t.offsetX,t.offsetY),this.x=t.offsetX,this.y=t.offsetY},drawLine:function(t,e,n,r){this.ctx.beginPath(),this.ctx.strokeStyle="#333",this.ctx.lineWidth=1,this.ctx.moveTo(t,e),this.ctx.lineTo(n,r),this.ctx.stroke(),this.ctx.closePath()},sendData:function(){x.getAnalyst(this.$refs.cvs),this.$emit("flash",{message:"Data sent to ".concat(x.apiUrl),type:1})}},mounted:function(){var t=this.$refs.cvs,e=t.getContext("2d");this.ctx=e}})],P);var k=P;k.render=g;var S=k,U=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],A=Object(m["a"])({history:Object(m["b"])("/"),routes:U}),M=A;Object(r["c"])(O).use(M).mount("#app")}});
//# sourceMappingURL=app.5fde9d3f.js.map