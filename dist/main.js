(()=>{var t={279:t=>{function e(){}e.prototype={on:function(t,e,o){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:o}),this},once:function(t,e,o){var i=this;function n(){i.off(t,n),e.apply(o,arguments)}return n._=e,this.on(t,n,o)},emit:function(t){for(var e=[].slice.call(arguments,1),o=((this.e||(this.e={}))[t]||[]).slice(),i=0,n=o.length;i<n;i++)o[i].fn.apply(o[i].ctx,e);return this},off:function(t,e){var o=this.e||(this.e={}),i=o[t],n=[];if(i&&e)for(var r=0,s=i.length;r<s;r++)i[r].fn!==e&&i[r].fn._!==e&&n.push(i[r]);return n.length?o[t]=n:delete o[t],this}},t.exports=e,t.exports.TinyEmitter=e},389:function(t){t.exports=function(){var t=0;function e(e){return"__private_"+t+++"_"+e}function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function i(){}i.prototype={on:function(t,e,o){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:o}),this},once:function(t,e,o){var i=this;function n(){i.off(t,n),e.apply(o,arguments)}return n._=e,this.on(t,n,o)},emit:function(t){for(var e=[].slice.call(arguments,1),o=((this.e||(this.e={}))[t]||[]).slice(),i=0,n=o.length;i<n;i++)o[i].fn.apply(o[i].ctx,e);return this},off:function(t,e){var o=this.e||(this.e={}),i=o[t],n=[];if(i&&e)for(var r=0,s=i.length;r<s;r++)i[r].fn!==e&&i[r].fn._!==e&&n.push(i[r]);return n.length?o[t]=n:delete o[t],this}};var n=i;n.TinyEmitter=i;var r,s="virtualscroll",l=e("options"),h=e("el"),a=e("emitter"),c=e("event"),u=e("touchStart"),d=e("bodyTouchAction");return function(){function t(t){var e=this;Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),this._onWheel=function(t){var i=o(e,l)[l],n=o(e,c)[c];n.deltaX=t.wheelDeltaX||-1*t.deltaX,n.deltaY=t.wheelDeltaY||-1*t.deltaY,r.isFirefox&&1===t.deltaMode&&(n.deltaX*=i.firefoxMultiplier,n.deltaY*=i.firefoxMultiplier),n.deltaX*=i.mouseMultiplier,n.deltaY*=i.mouseMultiplier,e._notify(t)},this._onMouseWheel=function(t){var i=o(e,c)[c];i.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,i.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,e._notify(t)},this._onTouchStart=function(t){var i=t.targetTouches?t.targetTouches[0]:t;o(e,u)[u].x=i.pageX,o(e,u)[u].y=i.pageY},this._onTouchMove=function(t){var i=o(e,l)[l];i.preventTouch&&!t.target.classList.contains(i.unpreventTouchClass)&&t.preventDefault();var n=o(e,c)[c],r=t.targetTouches?t.targetTouches[0]:t;n.deltaX=(r.pageX-o(e,u)[u].x)*i.touchMultiplier,n.deltaY=(r.pageY-o(e,u)[u].y)*i.touchMultiplier,o(e,u)[u].x=r.pageX,o(e,u)[u].y=r.pageY,e._notify(t)},this._onKeyDown=function(t){var i=o(e,c)[c];i.deltaX=i.deltaY=0;var n=window.innerHeight-40;switch(t.keyCode){case 37:case 38:i.deltaY=o(e,l)[l].keyStep;break;case 39:case 40:i.deltaY=-o(e,l)[l].keyStep;break;case 32:i.deltaY=n*(t.shiftKey?1:-1);break;default:return}e._notify(t)},o(this,h)[h]=window,t&&t.el&&(o(this,h)[h]=t.el,delete t.el),r||(r={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),o(this,l)[l]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},t),o(this,a)[a]=new n,o(this,c)[c]={y:0,x:0,deltaX:0,deltaY:0},o(this,u)[u]={x:null,y:null},o(this,d)[d]=null,void 0!==o(this,l)[l].passive&&(this.listenerOptions={passive:o(this,l)[l].passive})}var e=t.prototype;return e._notify=function(t){var e=o(this,c)[c];e.x+=e.deltaX,e.y+=e.deltaY,o(this,a)[a].emit(s,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},e._bind=function(){r.hasWheelEvent&&o(this,h)[h].addEventListener("wheel",this._onWheel,this.listenerOptions),r.hasMouseWheelEvent&&o(this,h)[h].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),r.hasTouch&&o(this,l)[l].useTouch&&(o(this,h)[h].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),o(this,h)[h].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),r.hasPointer&&r.hasTouchWin&&(o(this,d)[d]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",o(this,h)[h].addEventListener("MSPointerDown",this._onTouchStart,!0),o(this,h)[h].addEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&o(this,l)[l].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},e._unbind=function(){r.hasWheelEvent&&o(this,h)[h].removeEventListener("wheel",this._onWheel),r.hasMouseWheelEvent&&o(this,h)[h].removeEventListener("mousewheel",this._onMouseWheel),r.hasTouch&&(o(this,h)[h].removeEventListener("touchstart",this._onTouchStart),o(this,h)[h].removeEventListener("touchmove",this._onTouchMove)),r.hasPointer&&r.hasTouchWin&&(document.body.style.msTouchAction=o(this,d)[d],o(this,h)[h].removeEventListener("MSPointerDown",this._onTouchStart,!0),o(this,h)[h].removeEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&o(this,l)[l].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},e.on=function(t,e){o(this,a)[a].on(s,t,e);var i=o(this,a)[a].e;i&&i[s]&&1===i[s].length&&this._bind()},e.off=function(t,e){o(this,a)[a].off(s,t,e);var i=o(this,a)[a].e;(!i[s]||i[s].length<=0)&&this._unbind()},e.destroy=function(){o(this,a)[a].off(),this._unbind()},t}()}()}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,o),r.exports}(()=>{"use strict";var t=o(279),e=o(389);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}var n=function(t){var o,n;function r(o){var i,n,r,s,l=void 0===o?{}:o,h=l.lerp,a=void 0===h?.1:h,c=l.smooth,u=void 0===c||c,d=l.direction,v=void 0===d?"vertical":d;(s=t.call(this)||this).onResize=function(t){var e=t[0];if(e){var o=e.contentRect;s.limit="horizontal"===s.direction?o.width-s.windowWidth:o.height-s.windowHeight}},s.onWindowResize=function(){s.windowHeight=window.innerHeight,s.windowWidth=window.innerWidth},s.onVirtualScroll=function(t){var e=t.deltaY,o=t.originalEvent;s.stopped?o.preventDefault():(s.smooth&&!o.ctrlKey&&o.preventDefault(),s.targetScroll-=e,s.targetScroll=Math.max(0,Math.min(s.targetScroll,s.limit)))},s.onScroll=function(t){if(!(s.stopped||s.scrolling&&s.smooth)){var e=s.scroll;s.targetScroll=s.scroll="horizontal"===s.direction?window.scrollX:window.scrollY,s.velocity=s.scroll-e,s.notify()}},s.lerp=a,s.smooth=u,s.direction=v,window.addEventListener("scroll",s.onScroll,!1),window.addEventListener("resize",s.onWindowResize,!1);var f=(null==(i=navigator)||null==(n=i.userAgentData)?void 0:n.platform)||(null==(r=navigator)?void 0:r.platform)||"unknown";return s.virtualScroll=new e({firefoxMultiplier:50,mouseMultiplier:f.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),s.virtualScroll.on(s.onVirtualScroll),s.onWindowResize(),s.limit="horizontal"===s.direction?document.body.offsetWidth-s.windowWidth:document.body.offsetHeight-s.windowHeight,s.resizeObserver=new ResizeObserver(s.onResize),s.resizeObserver.observe(document.body),s.targetScroll=s.scroll="horizontal"===s.direction?window.scrollX:window.scrollY,s.velocity=0,s}n=t,(o=r).prototype=Object.create(n.prototype),o.prototype.constructor=o,i(o,n);var s=r.prototype;return s.start=function(){this.stopped=!1},s.stop=function(){this.stopped=!0},s.destroy=function(){window.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),this.virtualScroll.destroy(),this.resizeObserver.disconnect()},s.raf=function(){if(!this.stopped&&this.smooth){var t,e=this.scroll;this.scroll=(1-(t=this.lerp))*this.scroll+t*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=e=this.targetScroll),this.velocity=this.scroll-e,this.scrolling&&("horizontal"===this.direction?window.scrollTo(this.scroll,0):window.scrollTo(0,this.scroll),this.notify()),this.scrolling=this.scroll!==this.targetScroll}},s.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity})},s.scrollTo=function(t,e){var o,i=(void 0===e?{}:e).offset,n=void 0===i?0:i;if("number"==typeof t)o=t;else if("#top"===t)o=0;else if("#bottom"===t)o=this.limit;else{var r;if("string"==typeof t)r=document.querySelector(t);else{if(null==t||!t.nodeType)return;r=t}if(!t)return;var s=r.getBoundingClientRect();o=("horizontal"===this.direction?s.left:s.top)+this.scroll}this.targetScroll=o+=n,this.scrolling=!0,this.smooth||(this.scroll=o,"horizontal"===this.direction?window.scrollTo(this.scroll,0):window.scrollTo(0,this.scroll))},r}(t);const r=new n({lerp:.1,smooth:!0}),s=()=>{r.raf(),requestAnimationFrame(s)};requestAnimationFrame(s)})()})();