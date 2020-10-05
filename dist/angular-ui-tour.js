!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("angular-sanitize"),require("angular-scroll"),require("angular-hotkeys"),require("angular-bind-html-compile"),require("tether"),require("hone")):"function"==typeof define&&define.amd?define(["angular","angular-sanitize","angular-scroll","angular-hotkeys","angular-bind-html-compile","Tether","Hone"],t):"object"==typeof exports?exports.uiTour=t(require("angular"),require("angular-sanitize"),require("angular-scroll"),require("angular-hotkeys"),require("angular-bind-html-compile"),require("tether"),require("hone")):e.uiTour=t(e.angular,e["angular-sanitize"],e["angular-scroll"],e["angular-hotkeys"],e["angular-bind-html-compile"],e.Tether,e.Hone)}(this,function(e,t,n,r,o,i,u){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r){"ngInject";function o(){t.isTourWaiting()||t.endAllTours()}e.areNavigationInterceptorsEnabled()&&(n.$on("$locationChangeStart",o),n.$on("$stateChangeStart",o),r.has("$transitions")&&r.get("$transitions").onStart({},o))}o.$inject=["TourConfig","uiTourService","$rootScope","$injector"],Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),u=r(i);n(2),n(3),n(4),n(5);var s=n(6),a=r(s),l=n(7),c=r(l);n(8),t.default=u.default.module("bm.uiTour",["ngSanitize","duScroll","cfp.hotkeys","angular-bind-html-compile"]).run(o).value("Tether",a.default).value("Hone",c.default).constant("positionMap",n(13).default).provider("TourConfig",n(14).default).factory("uiTourBackdrop",n(15).default).factory("TourHelpers",n(16).default).factory("uiTourService",n(17).default).factory("TourStepService",n(18).default).controller("uiTourController",n(19).default).directive("uiTour",n(21).default).directive("tourStep",n(22).default).name},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=u},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(11)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(10)(void 0),t.push([e.i,".no-scrolling{height:100%;overflow:hidden}.ui-tour-popup:focus{outline:none}.ui-tour-popup-orphan{position:fixed;top:50%;left:50%;margin:0;transform:translateX(-50%) translateY(-50%)}.ui-tour-popup.popover.bottom-left>.arrow,.ui-tour-popup.popover.top-left>.arrow{left:25px}.ui-tour-popup.popover.bottom-right>.arrow,.ui-tour-popup.popover.top-right>.arrow{left:auto;right:25px}.ui-tour-popup.popover.left-top>.arrow,.ui-tour-popup.popover.right-top>.arrow{top:25px}.ui-tour-popup.popover.left-bottom>.arrow,.ui-tour-popup.popover.right-bottom>.arrow{top:auto;bottom:25px}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(c(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:u}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],s=i[1],a=i[2],l=i[3],c={css:s,media:a,sourceMap:l};r[u]?r[u].parts.push(c):n.push(r[u]={id:u,parts:[c]})}return n}function i(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function u(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),i(e,t),t}function a(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=b++;n=g||(g=s(t)),r=p.bind(null,n,l,!1),o=p.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),r=d.bind(null,n,t),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){u(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=S(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(u),s&&URL.revokeObjectURL(s)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,b=0,y=[],S=n(12);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],u=0;u<n.length;u++){var s=n[u],a=h[s.id];a.refs--,i.push(a)}if(e){r(o(e,t),t)}for(var u=0;u<i.length;u++){var a=i[u];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete h[a.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={top:{target:"top center",popup:"bottom center"},"top-left":{target:"top left",popup:"bottom left"},"top-right":{target:"top right",popup:"bottom right"},bottom:{target:"bottom center",popup:"top center"},"bottom-left":{target:"bottom left",popup:"top left"},"bottom-right":{target:"bottom right",popup:"top right"},left:{target:"middle left",popup:"middle right"},"left-top":{target:"top left",popup:"top right"},"left-bottom":{target:"bottom left",popup:"bottom right"},right:{target:"middle right",popup:"middle left"},"right-top":{target:"top right",popup:"top left"},"right-bottom":{target:"bottom right",popup:"bottom left"}}},function(e,t,n){"use strict";function r(){"ngInject";var e=!1,t={placement:"top",animation:!0,popupDelay:1,closePopupDelay:0,enable:!0,appendToBody:!1,popupClass:"",orphan:!1,backdrop:!1,backdropZIndex:1e4,backdropPadding:"0px",disableBackdropOptimizations:!1,scrollOffset:100,scrollIntoView:!0,useUiRouter:!1,useHotkeys:!1,scrollParentId:"$document",onStart:null,onEnd:null,onPause:null,onResume:null,onNext:null,onPrev:null,onShow:null,onShown:null,onHide:null,onHidden:null};this.set=function(e,n){t[e]=n},this.enableNavigationInterceptors=function(){e=!0},this.$get=["$q",function(n){var r={};return r.get=function(e){return t[e]},r.getAll=function(){return i.default.copy(t)},r.areNavigationInterceptorsEnabled=function(){return e},function(){i.default.forEach(t,function(e,r){0===r.indexOf("on")&&i.default.isFunction(e)&&(t[r]=function(){return n.resolve(e())})})}(),r}]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){"use strict";function r(e,t){"ngInject";function n(){u.addClass("no-scrolling"),u.on("touchmove",s)}function r(){u.removeClass("no-scrolling"),u.off("touchmove",s)}var o={},u=i.default.element(e[0].body),s=function(e){e.preventDefault()},a=new t({classPrefix:"ui-tour-backdrop"});return o.createForElement=function(e,t){a.setOptions(t),a.position(e[0]),a.show(),t.preventScrolling?o.shouldPreventScrolling(!0):o.shouldPreventScrolling(!1)},o.hide=function(){a.hide(),o.shouldPreventScrolling(!1)},o.shouldPreventScrolling=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?r():n()},o.reposition=function(){a.status===t.status.VISIBLE&&a.position()},o}r.$inject=["$document","Hone"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){"use strict";function r(e,t,n,r,o,u,s){"ngInject";function a(e){return"true"===e||"false"!==e&&e}var l,c,p={};return u.has("$state")&&(c=u.get("$state")),l=p.safeApply=function(e,t){var n=e.$root.$$phase;"$apply"===n||"$digest"===n?t&&"function"==typeof t&&t():e.$apply(t)},p.attachTourConfigProperties=function(e,t,n,r){i.default.forEach(r,function(e){!t[p.getAttrName(e)]&&i.default.isDefined(n.config(e))&&t.$set(p.getAttrName(e),String(n.config(e)))})},p.attachEventHandlers=function(e,t,n,r,u){i.default.forEach(r,function(r){var i=p.getAttrName(r,u);t[i]&&(n[r]=function(){return o(function(n){l(e,function(){n(e.$eval(t[i]))})})})})},p.attachInterpolatedValues=function(e,t,n,r){i.default.forEach(n,function(n){var o=p.getAttrName(n,r);e[o]&&(t[n]=a(e[o]),e.$observe(o,function(e){t[n]=a(e)}))})},p.setRedirect=function(e,t,r,i,u){var a=e[r];e[r]=function(r){return o(function(o){a&&a(r),t.waitFor(u),e.config("useUiRouter")?c.go(i).then(o):(n.path(i),s(o))})}},p.getAttrName=function(e,t){return(t||"tourStep")+e.charAt(0).toUpperCase()+e.substr(1)},p}r.$inject=["$http","$compile","$location","TourConfig","$q","$injector","$timeout"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){"use strict";function r(e,t){"ngInject";var n={},r=[];return n.getTour=function(){return r[0]},n.getTourByName=function(e){return r.filter(function(t){return t.options.name===e})[0]},n.getTourByElement=function(e){return i.default.element(e).controller("uiTour")},n.createDetachedTour=function(t,n){if(!t)throw{name:"ParameterMissingError",message:"A unique tour name is required for creating a detached tour."};return n=n||{},n.name=t,e("uiTourController").init(n)},n.isTourWaiting=function(){return r.reduce(function(e,t){return e||t.getStatus()===t.Status.WAITING},!1)},n.endAllTours=function(){return t.all(r.map(function(e){return e.end()}))},n._registerTour=function(e){r.push(e)},n._unregisterTour=function(e){r.splice(r.indexOf(e),1)},n}r.$inject=["$controller","$q"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["Tether","$compile","$document","$templateCache","$rootScope","$window","$q","$timeout","positionMap","uiTourBackdrop",function(e,t,n,r,i,u,s,a,l,c){"ngInject";function p(e,u){var s=o.default.extend(i.$new(),{tourStep:e,tour:u}),a=t(r.get("tour-step-popup.html"))(s);return(e.config("appendToBody")?o.default.element(n[0].body):e.element.parent()).append(a),a}function f(e){if(!e.config("orphan")&&e.config("scrollIntoView")){("$document"===e.config("scrollParentId")?n:o.default.element(n[0].getElementById(e.config("scrollParentId")))).duScrollToElementAnimated(e.popup,e.config("scrollOffset"),500,g).then(function(){e.popup[0].focus()},function(){return"Failed to scroll."})}else e.popup[0].focus()}function d(t){t.config("orphan")||(t.tether?(t.tether.enable(),t.tether.position()):(t.tether=new e({element:t.popup[0],target:t.element[0],attachment:l[t.config("placement")].popup,targetAttachment:l[t.config("placement")].target}),t.tether.position()))}function h(e){a(function(){e.popup.css({visibility:"visible",display:"block"}),f(e),d(e)},100)}function v(e){e.tether&&e.tether.disable(),e.popup[0].style.setProperty("display","none","important")}var m={},g=function(e){return e<.5?2*e*e:(4-2*e)*e-1};return m.createStep=function(e,t){if(!e.element&&!e.elementId&&!e.selector)throw{name:"PropertyMissingError",message:"Steps require an element, ID, or selector to be specified"};return e.config=function(n){return o.default.isDefined(e[n])?e[n]:t.config(n)},e.reposition=function(){e.tether&&e.tether.position()},o.default.isDefined(e.enabled)||(e.enabled=!0),e},m.showStep=function(e,t){if(e.elementId&&(e.element=o.default.element(n[0].getElementById(e.elementId))),e.selector&&(e.element=o.default.element(n[0].querySelector(e.selector))),!e.element)throw"No element found for step: '"+e+"'.";e.config("backdrop")&&c.createForElement(e.element,{preventScrolling:e.config("preventScrolling"),fixed:e.config("fixed"),borderRadius:e.config("backdropBorderRadius"),padding:e.config("backdropPadding"),fullScreen:e.config("orphan"),disableOptimizations:e.config("disableBackdropOptimizations"),events:{click:e.config("onBackdropClick")}}),e.element.addClass("ui-tour-active-step"),e.popup||(e.popup=p(e,t)),h(e)},m.hideStep=function(e){v(e),e.element.removeClass("ui-tour-active-step")},m}];var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,o,i,s,l,c){"ngInject";function p(){return t.resolve()}function f(){return k}function d(e){k=e}function h(e){return f()?f().config("nextPath")&&e>0?null:f().config("prevPath")&&e<0?null:$[$.indexOf(f())+e]:null}function v(e){if(u.default.isNumber(e))return $[e];if(u.default.isString(e))return $.filter(function(t){return t.stepId===e})[0];if(u.default.isObject(e)){if(~$.indexOf(e))return e;if(e.stepId)return $.filter(function(t){return t.stepId===e.stepId})[0]}return null}function m(){return h(1)}function g(){return h(-1)}function b(){return!!(m()||f()&&(f().config("nextPath")||f().onNext))}function y(){return!!(g()||f()&&(f().config("prevPath")||f().onPrev))}function S(e){return(e||p)()}function x(){c.add({combo:"esc",description:"End tour",callback:function(){T.end()}}),c.add({combo:"right",description:"Go to next step",callback:function(){b()&&T.next()}}),c.add({combo:"left",description:"Go to previous step",callback:function(){y()&&T.prev()}})}function _(){c.del("esc"),c.del("right"),c.del("left")}var w,T=new a.default,$=[],k=null,P={OFF:0,ON:1,PAUSED:2,WAITING:3},C=P.OFF,N=o.getAll();return T.off=T.removeListener,T.addStep=function(e){~$.indexOf(e)||($.push(e),$=n("orderBy")($,"order"),T.emit("stepAdded",e),w&&w(e))},T.removeStep=function(e){var t=$.indexOf(e);-1!==t&&($.splice(t,1),T.emit("stepRemoved",e))},T.reorderStep=function(e){T.removeStep(e),T.addStep(e),T.emit("stepsReordered",e)},T.hasStep=function(e){return!!v(e)},T.showStep=function(e){return t.resolve().then(function(){if(!e)throw"No step.";return S(e.config("onShow"))}).then(function(){return l.showStep(e,T),p()}).then(function(){return S(e.config("onShown"))}).then(function(){T.emit("stepShown",e),e.isNext=b,e.isPrev=y})},T.hideStep=function(e){return t.resolve().then(function(){if(!e)throw"No step.";return S(e.config("onHide"))}).then(function(){return l.hideStep(e),p()}).then(function(){return S(e.config("onHidden"))}).then(function(){T.emit("stepHidden",e)})},T.config=function(e){return N[e]},T.init=function(e){return N=u.default.extend(N,e),T.options=N,s._registerTour(T),T.initialized=!0,T.emit("initialized"),T},T.destroy=function(){s._unregisterTour(T)},T.start=function(){return T.startAt(0)},T.startAt=function(e){var n;return t.resolve().then(function(){return S(N.onStart)}).then(function(){return n=v(e),d(n),C=P.ON,T.emit("started",n),N.useHotkeys&&x(),T.showStep(f())})},T.end=function(){return t.resolve().then(function(){return S(N.onEnd)}).then(function(){if(f())return i.hide(),T.hideStep(f())}).then(function(){d(null),T.emit("ended"),C=P.OFF,w=null,N.useHotkeys&&_()})},T.pause=function(){return t.resolve().then(function(){return S(N.onPause)}).then(function(){return C=P.PAUSED,i.hide(),T.hideStep(f())}).then(function(){T.emit("paused",f())})},T.resume=function(){return t.resolve().then(function(){return S(N.onResume)}).then(function(){return C=P.ON,T.emit("resumed",f()),T.showStep(f())})},T.next=function(){return T.goTo("$next")},T.prev=function(){return T.goTo("$prev")},T.goTo=function(e){var n,r,o,u;return t.resolve().then(function(){if(n=f(),r=v(e),o={$prev:{getStep:g,preEvent:"onPrev",navCheck:"prevStep"},$next:{getStep:m,preEvent:"onNext",navCheck:"nextStep"}},u="$prev"===e||"$next"===e)return t.resolve().then(function(){return S(n.config(o[e].preEvent))}).then(function(){return T.hideStep(n)})}).then(function(){return!u||n[o[e].navCheck]&&n[o[e].navCheck]===f().stepId||(d(o[e].getStep()),T.emit("stepChanged",f())),u&&f()&&!f().config("backdrop")&&i.hide(),u&&f()&&!f().config("preventScrolling")&&i.shouldPreventScrolling(!1),u&&f()?T.showStep(f()):u?T.end():t.resolve().then(function(){if(!r)throw"No step.";return T.hideStep(f())}).then(function(){return f().config("backdrop")&&!r.config("backdrop")&&i.hide(),f().config("backdrop")&&!r.config("preventScrolling")&&i.shouldPreventScrolling(!1),d(r),T.emit("stepChanged",f()),T.showStep(r)})}).then(function(){})},T.waitFor=function(e){function n(t){t.stepId===e&&(d($[$.indexOf(t)]),T.resume(),w=null)}return t.resolve().then(function(){return w=n,T.pause()}).then(function(){return C=P.WAITING,t.reject()})},T.createStep=function(e){var t=l.createStep(e,T);return T.initialized?T.addStep(t):T.once("initialized",function(){T.addStep(t)}),t},T.getCurrentStep=function(){return f()},T.reposition=function(){f()&&(f().reposition(),i.reposition())},T.getStatus=function(){return C},T.Status=P,T._getSteps=function(){return $},T._getCurrentStep=f,T._setCurrentStep=d,T}o.$inject=["$timeout","$q","$filter","$document","TourConfig","uiTourBackdrop","uiTourService","TourStepService","hotkeys"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(0),u=r(i),s=n(20),a=r(s)},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function o(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function u(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,o,s,a,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(n=this._events[e],u(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(i(n))for(s=Array.prototype.slice.call(arguments,1),l=n.slice(),o=l.length,a=0;a<o;a++)l[a].apply(this,s);return!0},n.prototype.addListener=function(e,t){var o;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(o=u(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),o||(o=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var o=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,o,u,s;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],u=n.length,o=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(s=u;s-- >0;)if(n[s]===t||n[s].listener&&n[s].listener===t){o=s;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";function r(e){"ngInject";return{restrict:"EA",scope:!0,controller:"uiTourController",link:function(t,n,r,o){var u={name:r.uiTour},s="onReady onStart onEnd onShow onShown onHide onHidden onNext onPrev onPause onResume onBackdropClick".split(" "),a="placement animation popupDelay closePopupDelay enable appendToBody popupClass orphan backdrop backdropBorderRadius backdropPadding disableBackdropOptimizations scrollParentId scrollOffset scrollIntoView useUiRouter useHotkeys".split(" ");e.attachInterpolatedValues(r,u,a,"uiTour"),e.attachEventHandlers(t,r,u,s,"uiTour"),r[e.getAttrName("templateUrl","uiTour")]&&(u.templateUrl=t.$eval(r[e.getAttrName("templateUrl","uiTour")])),r[e.getAttrName("options")]&&i.default.extend(u,t.$eval(r[e.getAttrName("options")])),t.tour=o.init(u),"function"==typeof u.onReady&&u.onReady(),t.$on("$destroy",function(){o.destroy()})}}}r.$inject=["TourHelpers"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,n){"use strict";function r(e,t,n){"ngInject";return{restrict:"EA",scope:!0,require:"?^uiTour",link:function(r,o,u,s){var a,l,c,p,f,d="onShow onShown onHide onHidden onNext onPrev onBackdropClick".split(" "),h="content title animation placement backdrop backdropBorderRadius backdropPadding disableBackdropOptimizations orphan popupDelay popupCloseDelay popupClass fixed preventScrolling scrollIntoView nextStep prevStep nextPath prevPath scrollOffset scrollParentId".split(" ");if(u[e.getAttrName("belongsTo")]?a=t.getTourByName(u[e.getAttrName("belongsTo")]):s&&(a=s),!a)throw{name:"DependencyMissingError",message:"No tour provided for tour step."};l=a.createStep({stepId:u.tourStep,element:o}),e.attachInterpolatedValues(u,l,h),c=u.$observe(e.getAttrName("order"),function(e){l.order=isNaN(1*e)?0:1*e,a.hasStep(l)&&a.reorderStep(l)}),p=u.$observe(e.getAttrName("enabled"),function(e){l.enabled="false"!==e,l.enabled?a.addStep(l):a.removeStep(l)}),f=u.$observe(e.getAttrName("content"),function(e){e&&(l.trustedContent=n.trustAsHtml(l.content))}),e.attachEventHandlers(r,u,l,d),u[e.getAttrName("templateUrl")]&&(l.templateUrl=r.$eval(u[e.getAttrName("templateUrl")])),u[e.getAttrName("options")]&&i.default.extend(l,r.$eval(u[e.getAttrName("options")])),l.nextPath&&(l.redirectNext=!0,e.setRedirect(l,a,"onNext",l.nextPath,l.nextStep)),l.prevPath&&(l.redirectPrev=!0,e.setRedirect(l,a,"onPrev",l.prevPath,l.prevStep)),l.trustedContent=n.trustAsHtml(l.content),r.tourStep=l,r.tour=a,Object.defineProperties(l,{element:{value:o},scope:{value:r}}),r.$on("$destroy",function(){a.removeStep(l),c(),p(),f()})}}}r.$inject=["TourHelpers","uiTourService","$sce"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o);n(23),n(24)},function(e,t){var n,r=window.angular;try{n=r.module(["bm.uiTour"])}catch(e){n=r.module("bm.uiTour",[])}var o="<div class=\"tourStep ui-tour-popup popover {{ tourStep.config('popupClass') }} {{ tourStep.config('orphan') ? 'ui-tour-popup-orphan' : tourStep.config('placement').split('-')[0] + ' ' + tourStep.config('placement') }}\" ng-style=\"{\n        visibility: 'hidden',\n        display: 'block',\n        position: tourStep.config('fixed') || tourStep.config('orphan') ? 'fixed' : 'absolute',\n        zIndex: tourStep.config('backdropZIndex') + 2\n     }\" tabindex=\"0\" aria-hidden=\"{{ tour._getCurrentStep() !== tourStep }}\">\n<div class=\"arrow\"></div>\n<div class=\"popover-inner tour-step-inner\">\n<h3 class=\"popover-title tour-step-title\" ng-bind=\"tourStep.config('title')\" ng-if=\"tourStep.config('title')\"></h3>\n<div class=\"popover-content tour-step-content\" ng-include=\"tourStep.config('templateUrl') || 'tour-step-template.html'\"></div>\n</div>\n</div>\n",i="tour-step-popup.html",u=r.element(window.document).injector();u?u.get("$templateCache").put(i,o):n.run(["$templateCache",function(e){e.put(i,o)}]),e.exports=o},function(e,t){var n,r=window.angular;try{n=r.module(["bm.uiTour"])}catch(e){n=r.module("bm.uiTour",[])}var o='<div>\n<div class="popover-content tour-step-content" bind-html-compile="tourStep.trustedContent || tourStep.content"></div>\n<div class="popover-navigation tour-step-navigation">\n<div class="btn-group">\n<button type="button" class="btn btn-sm btn-default" ng-if="tourStep.isPrev()" ng-click="tour.prev()">&laquo; Prev</button>\n<button type="button" class="btn btn-sm btn-default" ng-if="tourStep.isNext()" ng-click="tour.next()">Next &raquo;</button>\n<button type="button" class="btn btn-sm btn-default" ng-click="tour.pause()">Pause</button>\n</div>\n<button type="button" class="btn btn-sm btn-default" ng-click="tour.end()">End tour</button>\n</div>\n</div>\n',i="tour-step-template.html",u=r.element(window.document).injector();u?u.get("$templateCache").put(i,o):n.run(["$templateCache",function(e){e.put(i,o)}]),e.exports=o}])});