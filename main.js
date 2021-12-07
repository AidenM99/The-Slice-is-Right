(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),s=r(667),c=r.n(s),d=new URL(r(88),r.b),l=i()(a());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);"]),l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);var u=c()(d);l.push([n.id,'body {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: "Montserrat", sans-serif;\r\n  background-image: url('+u+');\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  background-position: center center;\r\n}\r\n\r\n/***** Header Section *****/\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  border-bottom: 1px solid red;\r\n}\r\n\r\n.main-heading {\r\n  margin: 20px 15px 20px 50px;\r\n  font-size: 3rem;\r\n  font-family: "Lobster", cursive;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.nav-elements {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 50px 0 0;\r\n}\r\n\r\n.link {\r\n  margin: 0 15px;\r\n  color: #ffffff;\r\n}\r\n\r\n.link:hover {\r\n  border-bottom: 2px solid red;\r\n}\r\n\r\n.nav-elements,\r\n.link {\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.hamburger {\r\n  background-color: transparent;\r\n  border: 0;\r\n  color: #ffffff;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.hamburger:focus {\r\n  outline: none;\r\n}\r\n\r\n/***** About Us *****/\r\n\r\n.about {\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  text-align: center;\r\n  margin: 250px auto;\r\n  max-width: 500px;\r\n  padding: 10px 20px;\r\n  border: 1px solid red;\r\n}\r\n\r\n.about-us {\r\n  color: #ffffff;\r\n}\r\n\r\n.sub-heading {\r\n  font-size: 3rem;\r\n  margin: 0;\r\n}\r\n\r\n.sub-heading {\r\n  font-family: "Lobster", cursive;\r\n  color: #FFFFFF;\r\n}\r\n\r\n/***** Menu *****/\r\n.menu {\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  border: 2px solid red;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  max-width: 600px;\r\n  text-align: center;\r\n  margin: 65px auto;\r\n  padding: 20px 20px;\r\n}\r\n\r\n.menu-item {\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  padding: 20px 20px;\r\n}\r\n\r\n.menu-image {\r\n  width: 50%;\r\n}\r\n\r\n.item-heading {\r\n  font-family: "Lobster", cursive;\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n.item-desc {\r\n  margin: 5px 0;\r\n}\r\n\r\n/***** Media Queries *****/\r\n@media (max-width: 767px) {\r\n  .nav-elements > li {\r\n    display: none;\r\n  }\r\n\r\n  .hamburger {\r\n    display: block;\r\n  }\r\n}\r\n',""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=r(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=r(o[i]);e[s].references--}for(var c=t(n,a),d=0;d<o.length;d++){var l=r(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},88:(n,e,r)=>{n.exports=r.p+"ff3c4eefd385aeed8410.jpg"},269:(n,e,r)=>{n.exports=r.p+"32ca03ca6cf0e62e816c.png"}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(379),e=r.n(n),t=r(795),a=r.n(t),o=r(569),i=r.n(o),s=r(565),c=r.n(s),d=r(216),l=r.n(d),u=r(589),p=r.n(u),m=r(426),f={};function h(){const n=document.querySelector("main");n.classList.add("about");const e=document.createElement("h2");e.classList.add("sub-heading"),e.textContent="About Us";const r=document.createElement("p");return r.classList.add("about-us"),r.textContent="The key to progress is much similar to the key to improving a pizza - the more you put into it, the more you receive in return. return \n...",r.textContent+="Our pizza family is as eager for flawlessness today as we were the point at which we originally opened our entryways over 40 years back.",n.appendChild(e),n.appendChild(r),n}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var g=r(269);function b(){const n=["Margherita","Marinara","Carbonara","Diavola","Crudo","Caprese","Mediterranea","Parmigiana","Calzone","Frutti di Mare"];for(let e=0;e<10;e++){const r=document.querySelector("main");r.classList.add("menu");const t=document.createElement("div");t.classList.add("menu-item");const a=document.createElement("h3");a.textContent=n[e],a.classList.add("item-heading");const o=new Image;o.src=g,o.classList.add("menu-image");const i=document.createElement("p");i.textContent="Yum!",i.classList.add("item-desc"),t.appendChild(o),t.appendChild(a),t.appendChild(i),r.appendChild(t)}}function v(){const n=document.querySelector("main");n.classList.remove("about","menu"),n.innerHTML=""}!function(){const n=document.getElementById("content"),e=document.createElement("main");n.appendChild(e),n.appendChild(function(){const n=document.createElement("header"),e=document.createElement("h1");return e.textContent="The Slice is Right",e.classList.add("main-heading"),n.appendChild(e),n.appendChild(function(){const n=document.createElement("nav");n.classList.add("navbar");const e=document.createElement("ul");e.classList.add("nav-elements");const r=document.createElement("button");r.classList.add("hamburger"),r.innerHTML="<i class='fas fa-bars'></i>";const t=["Home","Menu","Contact"];for(let n=0;n<3;n++){var a=document.createElement("li");a.innerHTML="<a class='link' href='#'>"+t[n]+"</a>",a.addEventListener("click",(n=>{const e=n.target.textContent;v(),"Home"===e?h():"Menu"===e?b():loadContact()})),e.appendChild(a)}return e.appendChild(r),n.appendChild(e),n}()),n}()),n.appendChild(h())}()})()})();