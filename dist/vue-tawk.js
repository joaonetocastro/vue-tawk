!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-tawk",[],e):"object"==typeof exports?exports["vue-tawk"]=e():t["vue-tawk"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"$Tawk",function(){return o});var o={};o.$createChat=function(t){var e={},n=document.createElement("script"),o=document.getElementsByTagName("script")[0];n.async=!0,n.src=t.tawkSrc,n.charset="UTF-8",n.setAttribute("crossorigin","*"),o.parentNode.insertBefore(n,o),window.Tawk_API=e},o.$updateChatUser=function(t){t&&(window.Tawk_API.onLoad=function(){window.Tawk_API.setAttributes({name:t.name,email:t.email,hash:t.emailHmac},function(t){console.log(t)})})},o.$setAttributes=function(t){t&&window.Tawk_API.setAttributes(t)},o.$endChat=function(){window.Tawk_API.endChat()},o.$isInit=function(){return!!window.Tawk_API},o.$toggleVisibility=function(){window.Tawk_API&&window.Tawk_API.toggleVisibilit&&window.Tawk_API.toggleVisibility()},o.$showWidget=function(){window.Tawk_API&&window.Tawk_API.showWidget&&window.Tawk_API.showWidget()},o.$hideWidget=function(){window.Tawk_API&&window.Tawk_API.hideWidget&&window.Tawk_API.hideWidget()},o.$setOnLoadFunction=function(t){window.Tawk_API&&(window.Tawk_API.onLoad=t)};var i={};i.install=function(t,e){o.$createChat(e),t.prototype.$Tawk=o},e.default=i}])});
//# sourceMappingURL=vue-tawk.js.map