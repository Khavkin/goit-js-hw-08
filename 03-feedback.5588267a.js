function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var r={},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=f||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var r,o,i,a,u,l,f=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,f=t,a=e.apply(i,n)}function h(e){return f=e,u=setTimeout(O,t),c?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=i}function O(){var e=g();if(j(e))return w(e);u=setTimeout(O,function(e){var n=t-(e-l);return s?v(n,i-(e-f)):n}(e))}function w(e){return u=void 0,d&&r?y(e):(r=o=void 0,a)}function T(){var e=g(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return h(l);if(s)return u=setTimeout(O,t),y(l)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=o=u=void 0},T.flush=function(){return void 0===u?a:w(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};class h{static read(){return localStorage.getItem(this.storageKey)}static save(e){localStorage.setItem(this.storageKey,e)}static remove(){localStorage.removeItem(this.storageKey)}static clear(){localStorage.clear()}}e(n)(h,"storageKey",void 0),h.storageKey="feedback-form-state";const j={email:"",message:""},O=document.querySelector(".feedback-form");O.addEventListener("input",r((e=>{e.preventDefault(),j[e.target.name]=e.target.value;try{h.save(JSON.stringify(j))}catch(e){console.log(e)}}),500)),O.addEventListener("submit",(e=>{e.preventDefault(),[...e.currentTarget.elements].filter((({type:e})=>"submit"!=e)).forEach((e=>{j[e.name]=e.value,e.value=""})),console.log(j),h.remove()})),document.addEventListener("DOMContentLoaded",(()=>{try{const e=JSON.parse(h.read());e&&(j.email=e.email,j.message=e.message,O.elements.email.value=e.email,O.elements.message.value=e.message)}catch(e){console.log(e)}}));
//# sourceMappingURL=03-feedback.5588267a.js.map
