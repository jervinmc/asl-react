_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n("o0o1"),a=n.n(r);function s(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(u){return void n(u)}o.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){s(i,r,a,o,c,"next",e)}function c(e){s(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o=n("q1tI"),c=n.n(o);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"_dispatch",value:function(e){var t=this,n=e.msg;return this._status[n]=["loading"],this.worker.postMessage(e),new Promise((function(e,r){var a=setInterval((function(){var s=t._status[n];"done"===s[0]?e(s[1]):"error"===s[0]?r(s[1]):"loading"!==s[0]&&(delete t._status[n],clearInterval(a))}),0)}))}},{key:"load",value:function(){var e=this;return this._status={},this.worker=new Worker("/js/worker.js"),this.worker.onmessage=function(t){return e._status[t.data.msg]=["done",t]},this.worker.onerror=function(t){return e._status[t.data.msg]=["error",t]},this._dispatch({msg:"load"})}},{key:"imageProcessing",value:function(e){return this._dispatch({msg:"imageProcessing",payload:e})}},{key:"predict",value:function(e){return this._dispatch({msg:"predict",payload:e})}}])&&u(t.prototype,n),r&&u(t,r),e}()),l=(n("IP2g"),c.a.createElement),p=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_NOTHING","_SPACE"],f={S:3,E:5,A:5,N:6,R:5};function h(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useRef)(null),r=Object(o.useState)(null),s=r[0],c=r[1],u=Object(o.useState)(!0),h=u[0],v=u[1],m=Object(o.useState)(0),w=(m[0],m[1]),g=Object(o.useState)(""),y=(g[0],g[1]);function N(){return b.apply(this,arguments)}function b(){return(b=i(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null===e||null===t||"undefined"===typeof e.current||null===e.current){r.next=2;break}return r.delegateYield(a.a.mark((function r(){var s,i,o,u,l,h,v,m,g,N,b,x;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s=0,i=Date.now(),o="",u=0,l="",h=function(){var e=l.split(" ");fetch("/api/autocorrect?word=".concat(e[e.length-1])).then((function(e){return e.json()})).then((function(t){var n=t.correctedWord;speechSynthesis.speak(new SpeechSynthesisUtterance(n)),e.pop(),l=e.join(" ")+" "+n.toUpperCase()+" ",y(e.join(" ")+" "+n.toUpperCase()+" ")}))},e.current.addEventListener("ended",(function(){return h()}));case 7:return(v=t.current.getContext("2d")).drawImage(e.current,0,0,224,224),m=v.getImageData(0,0,224,224),r.next=13,d.imageProcessing(m);case 13:return g=r.sent,n.current.getContext("2d").putImageData(g.data.payload,0,0),r.next=18,d.predict(g.data.payload);case 18:N=r.sent,b=N.data.payload,c(x=p[b]),x!==o?((f[o]?u>f[o]:u>5)&&("_SPACE"===o?h():(l+="_NOTHING"===o?"":o,y((function(e,t){return e+("_NOTHING"===o?"":o)})))),u=0):u++,o=x,10===++s&&(w(10/((Date.now()-i)/1e3)),s=0,i=Date.now()),r.next=7;break;case 28:case"end":return r.stop()}}),r)}))(),"t0",2);case 2:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return Object(o.useEffect)((function(){function t(){return n.apply(this,arguments)}function n(){return(n=i(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.current.width=224,e.current.height=224,!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t.next=8;break}return t.next=5,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:224,height:224}});case 5:return n=t.sent,e.current.srcObject=n,t.abrupt("return",new Promise((function(t){e.current.onloadedmetadata=function(){t(e.current)}})));case 8:return r="This browser does not support video capture, or this device does not have a camera",alert(r),t.abrupt("return",Promise.reject(r));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(){return(r=i(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return n=e.sent,e.next=5,d.load();case 5:return n.play(),setTimeout(N,0),v(!1),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[]),l("div",{style:{marginTop:"2em"}},l("h1",{className:"text-center text-heading",style:{marginBottom:"0.5em"}}),h&&l("div",{className:"row justify-content-center"},l("div",{className:"col text-center"},l("div",{className:"spinner-border",style:{width:"8em",height:"8em",marginBottom:"2em"},role:"status"}))),l("div",{style:{display:h?"none":"block"}},l("div",{className:"row justify-content-center"},l("div",{className:"col-xs-12 text-center"},l("video",{className:"video",playsInline:!0,ref:e})),l("canvas",{style:{display:"none"},ref:t,width:224,height:224}),l("canvas",{className:"col-xs-12",style:{display:"none"},ref:n,width:224,height:224})),l("div",{className:"row justify-content-center text-center",style:{marginTop:"2em"}},l("div",{className:"col-xs-12"},l("h5",{className:"text-letter"},"Predicted Letter:"),l("h4",{className:"text-letter",style:{borderRadius:10,border:"2px solid #FFFFFF",padding:"0.5em"}},s))),l("div",{className:"row justify-content-center text-center",style:{marginTop:"2em"}})))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3]]]);