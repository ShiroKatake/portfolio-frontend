(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{9938:function(e,t,n){"use strict";var r=n(930),i=n(5696),a=n(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.src,o=e.sizes,c=e.unoptimized,p=void 0!==c&&c,g=e.priority,w=void 0!==g&&g,k=e.loading,z=e.lazyRoot,P=void 0===z?null:z,_=e.lazyBoundary,E=void 0===_?"200px":_,M=e.className,C=e.quality,I=e.width,R=e.height,L=e.style,D=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,H=e.placeholder,W=void 0===H?"empty":H,B=e.blurDataURL,U=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=l.useContext(f.ImageConfigContext),T=l.useMemo((function(){var e=y||F||s.imageConfigDefault,t=[].concat(a(e.deviceSizes),a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:n})}),[F]),V=U,G=o?"responsive":"intrinsic";"layout"in V&&(V.layout&&(G=V.layout),delete V.layout);var J=A;if("loader"in V){if(V.loader){var Q=V.loader;J=function(e){e.config;var t=m(e,["config"]);return Q(t)}}delete V.loader}var $="";if(function(e){return"object"===typeof e&&(O(e)||function(e){return void 0!==e.src}(e))}(n)){var K=O(n)?n.default:n;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(B=B||K.blurDataURL,$=K.src,(!G||"fill"!==G)&&(R=R||K.height,I=I||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}n="string"===typeof n?n:$;var X=S(I),Y=S(R),Z=S(C),ee=!w&&("lazy"===k||"undefined"===typeof k);(n.startsWith("data:")||n.startsWith("blob:"))&&(p=!0,ee=!1);v.has(n)&&(ee=!1);var te,ne=l.useState(!1),re=i(ne,2),ie=re[0],ae=re[1],oe=d.useIntersection({rootRef:P,rootMargin:E,disabled:!ee}),ce=i(oe,3),le=ce[0],ue=ce[1],se=ce[2],de=!ee||ue,fe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},pe={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ge=!1,he={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:D,objectPosition:q};0;0;var me=Object.assign({},L,"raw"===G?{}:he),ye="blur"!==W||ie?{}:{filter:"blur(20px)",backgroundSize:D||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:q||"0% 0%"};if("fill"===G)fe.display="block",fe.position="absolute",fe.top=0,fe.left=0,fe.bottom=0,fe.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Y){var ve=Y/X,be=isNaN(ve)?"100%":"".concat(100*ve,"%");"responsive"===G?(fe.display="block",fe.position="relative",ge=!0,pe.paddingTop=be):"intrinsic"===G?(fe.display="inline-block",fe.position="relative",fe.maxWidth="100%",ge=!0,pe.maxWidth="100%",te="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===G&&(fe.display="inline-block",fe.position="relative",fe.width=X,fe.height=Y)}else 0;var we={src:b,srcSet:void 0,sizes:void 0};de&&(we=j({config:T,src:n,unoptimized:p,layout:G,width:X,quality:Z,sizes:o,loader:J}));var Oe=n;0;var je="imagesrcset",Se="imagesizes";je="imageSrcSet",Se="imageSizes";var Ae=(r(t={},je,we.srcSet),r(t,Se,we.sizes),t),ke=l.default.useLayoutEffect,xe=l.useRef(N),ze=l.useRef(n);l.useEffect((function(){xe.current=N}),[N]),ke((function(){ze.current!==n&&(se(),ze.current=n)}),[se,n]);var Pe=h({isLazy:ee,imgAttributes:we,heightInt:Y,widthInt:X,qualityInt:Z,layout:G,className:M,imgStyle:me,blurStyle:ye,loading:k,config:T,unoptimized:p,placeholder:W,loader:J,srcString:Oe,onLoadingCompleteRef:xe,setBlurComplete:ae,setIntersection:le,isVisible:de},V);return l.default.createElement(l.default.Fragment,null,"raw"===G?l.default.createElement(x,Object.assign({},Pe)):l.default.createElement("span",{style:fe},ge?l.default.createElement("span",{style:pe},te?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:te}):null):null,l.default.createElement(x,Object.assign({},Pe))),w?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+we.src+we.srcSet+we.sizes,rel:"preload",as:"image",href:we.srcSet?void 0:we.src},Ae))):null)};var o,c,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(o=n(6505))&&o.__esModule?o:{default:o},s=n(5980),d=n(7215),f=n(1059),p=(n(7206),n(4979));function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1};var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1},v=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t.path).concat(z(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(z(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(z(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function O(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,c=e.quality,l=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,u=[];c=l.exec(r);c)u.push(parseInt(c[2]));if(u.length){var s=.01*Math.min.apply(Math,u);return{widths:o.filter((function(e){return e>=i[0]*s})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,l),d=s.widths,f=s.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(u({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:u({config:t,src:n,quality:c,width:d[p]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=w.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,r,i,a){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===r&&a(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,o=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:o})}})))}var x=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,a=e.layout,o=e.className,c=e.imgStyle,u=e.blurStyle,s=e.isLazy,d=e.placeholder,f=e.loading,p=e.srcString,g=e.config,y=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,w=e.setBlurComplete,O=e.setIntersection,S=e.onLoad,A=e.onError,x=(e.isVisible,m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},x,t,"raw"===a?{height:n,width:r}:{},{decoding:"async","data-nimg":a,className:o,style:h({},c,u),ref:l.useCallback((function(e){O(e),(null===e||void 0===e?void 0:e.complete)&&k(e,p,0,d,b,w)}),[O,p,a,d,b,w]),onLoad:function(e){k(e.currentTarget,p,0,d,b,w),S&&S(e)},onError:function(e){"blur"===d&&w(!0),A&&A(e)}})),(s||"blur"===d)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},x,j({config:g,src:p,unoptimized:y,layout:a,width:r,quality:i,sizes:t.sizes,loader:v}),"raw"===a?{height:n,width:r}:{},{decoding:"async","data-nimg":a,style:c,className:o,loading:f||"lazy"}))))};function z(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(a.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},a=n(7285);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||i&&o}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6505:function(e,t,n){"use strict";var r=n(930);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),c=(a=n(148))&&a.__esModule?a:{default:a},l=n(7285),u=n(523),s=n(9546);n(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function g(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var l=0,u=p.length;l<u;l++){var s=p[l];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var d=i.props[s],f=r[s]||new Set;"name"===s&&o||!f.has(d)?(f.add(d),r[s]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,n=o.useContext(l.AmpStateContext),r=o.useContext(u.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:g,headManager:r,inAmpMode:s.isInAmpMode(n)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,n){"use strict";var r=n(7980),i=n(3227),a=n(8361),o=(n(2191),n(5971)),c=n(2715),l=n(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){o(n,e);var t=u(n);function n(e){var a;return i(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},9008:function(e,t,n){e.exports=n(6505)},5675:function(e,t,n){e.exports=n(9938)}}]);