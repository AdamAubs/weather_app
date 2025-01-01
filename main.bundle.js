(()=>{"use strict";var e,n,t,r,o={523:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"/* App container */\n#app {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  justify-content: flex-start;\n}\n\n/* Input Section - Flexbox layout for horizontal arrangement */\n.input-section {\n  position: relative; /* This makes the dropdown position relative to the input field */\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  width: 100%;\n  max-width: 600px; /* Increased max-width for a larger section */\n  justify-content: space-between; /* Optionally, add space between input and button */\n}\n\n#city-input {\n  padding: 15px; /* Increased padding to make the input box larger */\n  width: 100%; /* Make input take full width of the container */\n  font-size: 1.2rem; /* Increase font size for better readability */\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: border-box; /* Ensures padding doesn't affect total width */\n}\n\n#get-weather-btn {\n  padding: 15px;\n  background-color: #3498db;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-left: 10px; /* Space between input and button */\n}\n\n#get-weather-btn:hover {\n  background-color: #2980b9;\n}\n\n/* City drop down menu for input */\n#city-dropdown {\n  display: block;\n  position: absolute; /* Position it absolutely within the .input-section */\n  top: 100%; /* Position it directly below the input field */\n  left: 0; /* Align it to the left edge of the input field */\n  background-color: rgb(227, 196, 196);\n  border: 1px solid #ccc;\n  max-height: 200px;\n  width: 100%; /* Ensure the dropdown takes up the full width of the input field */\n  z-index: 100;\n  box-sizing: border-box;\n  overflow-y: auto;\n}\n\n#city-dropdown li {\n  list-style: none;\n  padding: 8px;\n  cursor: pointer;\n}\n\n#city-dropdown li:hover {\n  width: 100%;\n  background-color: #f0f0f0;\n}\n\n#get-weather-btn {\n  padding: 2px 20px;\n  cursor: pointer;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\n/* Styling for the title */\n.weather-container h1 {\n  font-size: 2rem; /* Make the title bigger */\n  margin-bottom: 20px; /* Add some margin below the title to space it from the grid */\n  text-align: center;\n  color: #333;\n}\n\n/* Weather Container - CSS Grid */\n.weather-container {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fill,\n    minmax(100px, 1fr)\n  ); /* Responsive grid */\n  gap: 20px;\n  padding: 20px;\n  width: 100%;\n  max-width: 1000px;\n}\n\n/* Weather Day Div - Styling for each weather card */\n.weather-day-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  padding: 15px;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.convert-units-btn {\n  margin-bottom: 15px;\n  padding: 8px 15px;\n  cursor: pointer;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n}\n\n/* Typography for the Date */\n.weather-date {\n  font-size: 1.2rem; /* Slightly larger font */\n  font-weight: bold; /* Emphasize the date */\n  color: #333;\n  margin-bottom: 10px;\n  z-index: 1;\n}\n\n.weather-temperature {\n  font-size: 1em;\n  margin: 5px 0;\n  color: #555;\n  z-index: 1;\n}\n\n/* Conditions Description */\n.weather-description {\n  font-size: 1rem;\n  color: #333;\n  margin-top: 10px;\n  z-index: 1;\n}\n\n/* Video Background Handling */\n.weather-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 12px;\n  z-index: 0; /* Push video behind the content */\n  opacity: 0.5; /* Reduce intensity for readability */\n}\n\n.weather-day-div {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between; /* Evenly distribute content */\n  background: linear-gradient(135deg, #e0f7fa, #a5e0e5); /* Subtle gradient */\n  border: 1px solid #ccc;\n  border-radius: 12px; /* Rounded edges for a modern look */\n  padding: 20px; /* Spacious padding for better content separation */\n  text-align: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* Add depth */\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease; /* Smooth hover effects */\n  overflow: hidden; /* Ensure video doesn't exceed bounds */\n}\n\n.weather-day-div:hover {\n  transform: scale(1.05); /* Subtle zoom on hover */\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Emphasize hover effect */\n}\n\n/* Media Query - For smaller screens */\n@media (max-width: 600px) {\n  .input-section {\n    width: 100%;\n    max-width: 300px;\n  }\n\n  #city-input {\n    padding: 15px; /* Increased padding to make the input box larger */\n    width: 100%; /* Make input take full width of the container */\n    font-size: 0.75rem; /* Increase font size for better readability */\n    border: 1px solid #ccc;\n    border-radius: 7px;\n    box-sizing: border-box; /* Ensures padding doesn't affect total width */\n  }\n\n  #city-input,\n  #city-dropdown,\n  #get-weather-btn {\n    width: 90%; /* Make inputs and button take more space */\n  }\n\n  #get-weather-btn {\n    font-size: 0.7rem;\n    padding: 10px 5px;\n    width: 4rem;\n    border-radius: 7px;\n  }\n  .weather-container {\n    grid-template-columns: 1fr; /* Stack weather cards on small screens */\n  }\n}\n","",{version:3,sources:["webpack://./src/style/sample.css"],names:[],mappings:"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",sourcesContent:["/* App container */\n#app {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  justify-content: flex-start;\n}\n\n/* Input Section - Flexbox layout for horizontal arrangement */\n.input-section {\n  position: relative; /* This makes the dropdown position relative to the input field */\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  width: 100%;\n  max-width: 600px; /* Increased max-width for a larger section */\n  justify-content: space-between; /* Optionally, add space between input and button */\n}\n\n#city-input {\n  padding: 15px; /* Increased padding to make the input box larger */\n  width: 100%; /* Make input take full width of the container */\n  font-size: 1.2rem; /* Increase font size for better readability */\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-sizing: border-box; /* Ensures padding doesn't affect total width */\n}\n\n#get-weather-btn {\n  padding: 15px;\n  background-color: #3498db;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-left: 10px; /* Space between input and button */\n}\n\n#get-weather-btn:hover {\n  background-color: #2980b9;\n}\n\n/* City drop down menu for input */\n#city-dropdown {\n  display: block;\n  position: absolute; /* Position it absolutely within the .input-section */\n  top: 100%; /* Position it directly below the input field */\n  left: 0; /* Align it to the left edge of the input field */\n  background-color: rgb(227, 196, 196);\n  border: 1px solid #ccc;\n  max-height: 200px;\n  width: 100%; /* Ensure the dropdown takes up the full width of the input field */\n  z-index: 100;\n  box-sizing: border-box;\n  overflow-y: auto;\n}\n\n#city-dropdown li {\n  list-style: none;\n  padding: 8px;\n  cursor: pointer;\n}\n\n#city-dropdown li:hover {\n  width: 100%;\n  background-color: #f0f0f0;\n}\n\n#get-weather-btn {\n  padding: 2px 20px;\n  cursor: pointer;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 1rem;\n}\n\n/* Styling for the title */\n.weather-container h1 {\n  font-size: 2rem; /* Make the title bigger */\n  margin-bottom: 20px; /* Add some margin below the title to space it from the grid */\n  text-align: center;\n  color: #333;\n}\n\n/* Weather Container - CSS Grid */\n.weather-container {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fill,\n    minmax(100px, 1fr)\n  ); /* Responsive grid */\n  gap: 20px;\n  padding: 20px;\n  width: 100%;\n  max-width: 1000px;\n}\n\n/* Weather Day Div - Styling for each weather card */\n.weather-day-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  padding: 15px;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.convert-units-btn {\n  margin-bottom: 15px;\n  padding: 8px 15px;\n  cursor: pointer;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 5px;\n}\n\n/* Typography for the Date */\n.weather-date {\n  font-size: 1.2rem; /* Slightly larger font */\n  font-weight: bold; /* Emphasize the date */\n  color: #333;\n  margin-bottom: 10px;\n  z-index: 1;\n}\n\n.weather-temperature {\n  font-size: 1em;\n  margin: 5px 0;\n  color: #555;\n  z-index: 1;\n}\n\n/* Conditions Description */\n.weather-description {\n  font-size: 1rem;\n  color: #333;\n  margin-top: 10px;\n  z-index: 1;\n}\n\n/* Video Background Handling */\n.weather-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 12px;\n  z-index: 0; /* Push video behind the content */\n  opacity: 0.5; /* Reduce intensity for readability */\n}\n\n.weather-day-div {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between; /* Evenly distribute content */\n  background: linear-gradient(135deg, #e0f7fa, #a5e0e5); /* Subtle gradient */\n  border: 1px solid #ccc;\n  border-radius: 12px; /* Rounded edges for a modern look */\n  padding: 20px; /* Spacious padding for better content separation */\n  text-align: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* Add depth */\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease; /* Smooth hover effects */\n  overflow: hidden; /* Ensure video doesn't exceed bounds */\n}\n\n.weather-day-div:hover {\n  transform: scale(1.05); /* Subtle zoom on hover */\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Emphasize hover effect */\n}\n\n/* Media Query - For smaller screens */\n@media (max-width: 600px) {\n  .input-section {\n    width: 100%;\n    max-width: 300px;\n  }\n\n  #city-input {\n    padding: 15px; /* Increased padding to make the input box larger */\n    width: 100%; /* Make input take full width of the container */\n    font-size: 0.75rem; /* Increase font size for better readability */\n    border: 1px solid #ccc;\n    border-radius: 7px;\n    box-sizing: border-box; /* Ensures padding doesn't affect total width */\n  }\n\n  #city-input,\n  #city-dropdown,\n  #get-weather-btn {\n    width: 90%; /* Make inputs and button take more space */\n  }\n\n  #get-weather-btn {\n    font-size: 0.7rem;\n    padding: 10px 5px;\n    width: 4rem;\n    border-radius: 7px;\n  }\n  .weather-container {\n    grid-template-columns: 1fr; /* Stack weather cards on small screens */\n  }\n}\n"],sourceRoot:""}]);const A=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var d=this[A][0];null!=d&&(a[d]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],A=0;A<e.length;A++){var d=e[A],c=r.base?d[0]+r.base:d[0],s=i[c]||0,l="".concat(c," ").concat(s);i[c]=s+1;var p=t(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var h=o(u,r);r.byIndex=A,n.splice(A,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var A=t(i[a]);n[A].references--}for(var d=r(e,o),c=0;c<i.length;c++){var s=t(i[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var t=i[e]={id:e,exports:{}};return o[e](t,t.exports,a),t.exports}a.m=o,a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var o=Object.create(null);a.r(o);var i={};e=e||[null,n({}),n([]),n(n)];for(var A=2&r&&t;"object"==typeof A&&!~e.indexOf(A);A=n(A))Object.getOwnPropertyNames(A).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,a.d(o,i),o},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((n,t)=>(a.f[t](e,n),n)),[])),a.u=e=>e+".bundle.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t={},r="webpack-template:",a.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var A,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var l=c[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+o){A=l;break}}A||(d=!0,(A=document.createElement("script")).charset="utf-8",A.timeout=120,a.nc&&A.setAttribute("nonce",a.nc),A.setAttribute("data-webpack",r+o),A.src=e),t[e]=[n];var p=(n,r)=>{A.onerror=A.onload=null,clearTimeout(u);var o=t[e];if(delete t[e],A.parentNode&&A.parentNode.removeChild(A),o&&o.forEach((e=>e(r))),n)return n(r)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:A}),12e4);A.onerror=p.bind(null,A.onerror),A.onload=p.bind(null,A.onload),d&&document.head.appendChild(A)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var n=a.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={792:0};a.f.j=(n,t)=>{var r=a.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=o);var i=a.p+a.u(n),A=new Error;a.l(i,(t=>{if(a.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;A.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",A.name="ChunkLoadError",A.type=o,A.request=i,r[1](A)}}),"chunk-"+n,n)}};var n=(n,t)=>{var r,o,[i,A,d]=t,c=0;if(i.some((n=>0!==e[n]))){for(r in A)a.o(A,r)&&(a.m[r]=A[r]);d&&d(a)}for(n&&n(t);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),a.nc=void 0;var A=a(72),d=a.n(A),c=a(825),s=a.n(c),l=a(659),p=a.n(l),u=a(56),h=a.n(u),m=a(540),E=a.n(m),f=a(113),C=a.n(f),b=a(523),g={};g.styleTagTransform=C(),g.setAttributes=h(),g.insert=p().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=E(),d()(b.A,g),b.A&&b.A.locals&&b.A.locals;let B=[];async function x(e){const n=document.createElement("video");n.autoplay=!0,n.loop=!0,n.muted=!0,n.playsInline=!0,n.classList.add("weather-background");try{let t;switch(e){case"rain":t=await a.e(764).then(a.t.bind(a,764,17));break;case"snow":t=await a.e(881).then(a.t.bind(a,881,17));break;case"fog":t=await a.e(771).then(a.t.bind(a,771,17));break;case"wind":t=await a.e(136).then(a.t.bind(a,136,17));break;case"cloudy":t=await a.e(325).then(a.t.bind(a,325,17));break;case"partly-cloudy-day":t=await a.e(152).then(a.t.bind(a,152,17));break;case"clear-day":t=await a.e(304).then(a.t.bind(a,304,17));break;default:return console.error(`No video for icon: ${e}`),null}return n.src=t.default,n}catch(n){return console.error(`Failed to load video for icon: ${e}`,n),null}}function y(e){return Math.floor(1.8*e+32)}console.log("Webpack Initiated!"),document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.getElementById("app"),n=document.createElement("div");n.classList.add("input-section");const t=function(e){const n=document.createElement("input");return n.type="text",n.placeholder="Enter a city name (e.g., Chicago, IL)",n.id="city-input",n.classList.add("city-input"),n.setAttribute("list","city-list"),e.appendChild(n),n}(n);!function(e){const n=document.createElement("ul");n.id="city-dropdown",n.classList.add("dropdown"),e.appendChild(n)}(n);const r=function(e){const n=document.createElement("button");return n.textContent="Get Weather",n.id="get-weather-btn",n.classList.add("get-weather-btn"),e.appendChild(n),n}(n);e.appendChild(n),t.addEventListener("input",(async()=>{const e=t.value.trim();if(e.length>1){const n=await async function(e){const n=`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${e}&limit=10`,t={method:"GET",headers:{"x-rapidapi-key":"f2b1580eadmsh72794b22ec1bd59p13f74bjsncb0e06c41b97","x-rapidapi-host":"wft-geo-db.p.rapidapi.com"}};try{const e=await fetch(n,t);if(e.ok){const n=await e.json(),t=new Set,r=n.data.filter((e=>{const n=`${e.city}, ${e.region}`;return!t.has(n)&&(t.add(n),!0)})).map((e=>({city:e.city,state:e.region})));return B=r.map((e=>e.city)),r}return console.error("Error fetching cities: ",e.statusText),[]}catch(e){return console.error("Error fetching cities:",e.message),[]}}(e);!function(e){const n=document.getElementById("city-dropdown"),t=document.getElementById("city-input");if(n.innerHTML="",Array.isArray(e)&&e.length>0)e.forEach((e=>{const r=document.createElement("li");r.textContent=`${e.city}, ${e.state}`,r.classList.add("dropdown-item"),r.addEventListener("click",(()=>{t.value=e.city,n.innerHTML=""})),n.appendChild(r)}));else{const e=document.createElement("li");e.textContent="No cities found",n.appendChild(e)}document.addEventListener("click",(e=>{n.contains(e.target)||e.target===t||(n.innerHTML="")})),t.addEventListener("click",(e=>{e.stopPropagation()}))}(n)}}));const o=async()=>{const e=document.getElementById("city-input").value;if(B.includes(e)||""!==e)try{const n=await async function(e){const n=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=metric&key=GKBBMYEEE83UYMABCNJH8S5PJ&contentType=json`;try{const e=await fetch(n);if(200===e.status)return await e.json();throw new Error(`Invalid city! Please enter a valid city ${e.status}`)}catch(e){throw console.error("Unable to fetch data:",e.message),e}}(e);!function(){const e=document.querySelector(".weather-container"),n=document.querySelector(".weather-title"),t=document.querySelector(".convert-units-btn");e&&(e.remove(),n.remove(),t.remove())}(),async function(e){const n=document.getElementById("app"),t=document.createElement("div");t.classList.add("weather-container");const r=document.createElement("h1");r.textContent=`The Weather in ${e.resolvedAddress}`,r.classList.add("weather-title"),n.appendChild(r);const o=document.createElement("button");o.classList.add("convert-units-btn"),o.textContent="convert to fahrenheit",n.appendChild(o);for(let n=0;n<7;n++){const r=e.days[n],i=document.createElement("div");i.classList.add("weather-day-div");const a=new Date(r.datetime),A={weekday:"long",month:"long",day:"numeric"},d=new Intl.DateTimeFormat("en-US",A).format(a),c=document.createElement("p");c.classList.add("weather-date"),c.textContent=d,i.appendChild(c),console.log(r);const s=document.createElement("p");s.classList.add("weather-temperature"),s.textContent=`The average temperature is: ${r.temp}°C`;const l=document.createElement("p");l.classList.add("weather-temperature"),l.textContent=`The high temperature is: ${r.tempmax}°C;`;const p=document.createElement("p");p.classList.add("weather-temperature"),p.textContent=`The low temperature is: ${r.tempmin}°C;`;let u=!0;o.addEventListener("click",(()=>{if(u){let e=y(r.temp);s.textContent=`The average temperature is: ${e}°F`;let n=y(r.tempmax);l.textContent=`The high temperature is: ${n}°F`;let t=y(r.tempmin);p.textContent=`The low temperature is: ${t}°F`,o.textContent="convert to celsius"}else s.textContent=`The temperature is: ${r.temp}°C`,l.textContent=`The high temperature is: ${r.tempmax}°C`,p.textContent=`The low temperature is: ${r.tempmin}°C`,o.textContent="Convert to Fahrenheit";u=!u}));const h=document.createElement("p");h.classList.add("weather-description"),h.textContent=`Conditions: ${r.conditions}`;const m=await x(r.icon);m&&i.appendChild(m),i.appendChild(h),i.appendChild(s),i.appendChild(l),i.appendChild(p),t.appendChild(i)}n.appendChild(t)}(n)}catch(e){alert(`Couldn't fetch data. Please try again. ERROR: ${e}`)}else alert("Invalid city! Please select a valid city from the suggestions.")};r.addEventListener("click",o),t.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),o())}))}()}))})();
//# sourceMappingURL=main.bundle.js.map