/*! For license information please see component---src-templates-index-page-js-52919bbe49237450f2c8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0xIW":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI");t.default=function(e){r.useEffect(e,[])}},"9+Sh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDeepEqual=t.off=t.on=t.isClient=void 0;var r=n("i0/C").__importDefault(n("nkPT"));t.isClient="object"==typeof window,t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.removeEventListener.apply(e,t)},t.isDeepEqual=r.default},"9EFL":function(e,t,n){"use strict";e.exports=n("R1wR")},"PL+z":function(e,t,n){"use strict";n.r(t),n.d(t,"IndexPageTemplate",(function(){return g})),n.d(t,"pageQuery",(function(){return b}));var r=n("q1tI"),o=n.n(r),i=(n("Wbzz"),n("7oih")),a=(n("lynl"),n("hGyt")),l=(n("hTrI"),n("axcl")),u=n.n(l),c=n("pW3x"),f=n.n(c),s=n("9EFL"),p=n.n(s),d=function(e){var t=e.message;return p.a.createElement("div",{className:"flashBar"},p.a.createElement("div",null,t))},y=function(){var e=o.a.useState(""),t=e[0],n=e[1],r=f()(),i=(r.width,r.height,o.a.useState(!1)),a=i[0],l=i[1],c=o.a.useState(!1),s=c[0],p=c[1];return o.a.createElement(o.a.Fragment,null,a&&o.a.createElement(d,{message:"Welcome to Scholly!"}),o.a.createElement(u.a,{config:{angle:90,spread:360,startVelocity:40,elementCount:70,dragFriction:.12,duration:3e3,stagger:3,width:"10px",height:"10px",perspective:"500px",colors:["#f00","#0f0","#00f"]},active:a}),o.a.createElement("div",{className:"holder"},o.a.createElement("input",{type:"text",className:"leftThing",placeholder:"email",value:t,onChange:function(e){n(e.target.value)}}),o.a.createElement("span",{className:"rightThing"},o.a.createElement("div",{style:{display:"grid",placeItems:"center"},className:"rightThingButton",onClick:function(){/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)?(l(!0),p(!1),setTimeout((function(){}),3e3)):p(!0)}},"Find Scholarships Today"))),s&&o.a.createElement("p",{style:{color:"red"}},"Please insert a valid email"))},h=function(e){var t=e.label,n=e.onClick;return o.a.createElement("div",{className:"redButton",onClick:n},t)},m=(n("VYsE"),n("9eSz")),v=n.n(m),g=function(e){var t=e.image,n=e.title,r=(e.heading,e.subheading),i=e.otherimage,l=e.step1,u=e.step2,c=e.step3;return o.a.createElement("div",{style:{width:"60%",margin:"0 auto"}},o.a.createElement("div",{className:"grid-four margins"},o.a.createElement("div",null,o.a.createElement("h1",null,n),o.a.createElement("h3",null,r),o.a.createElement(y,null)),o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(v.a,{fluid:t.childImageSharp.fluid,alt:"Phone with the Scholly App on it",style:{width:"100%",minWidth:"500px"}}))),o.a.createElement("h1",{style:{textAlign:"center"}},"As seen on"),o.a.createElement(v.a,{fluid:i.childImageSharp.fluid,alt:"Step 1"}),o.a.createElement("div",{className:"grid-four margins"},o.a.createElement("div",null,o.a.createElement("h1",null,l.title),o.a.createElement("h3",null,l.description),o.a.createElement("div",null,o.a.createElement(h,{label:"Join Scholly",onClick:function(){}}))),o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(v.a,{style:{width:"100%",minWidth:"500px"},fluid:l.image.childImageSharp.fluid}))),o.a.createElement("div",{className:"grid-four margins"},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(v.a,{style:{width:"100%",minWidth:"500px"},fluid:u.image.childImageSharp.fluid,alt:"Step 2"})),o.a.createElement("div",null,o.a.createElement("h1",{style:{textAlign:"right"}},u.title),o.a.createElement("h3",{style:{textAlign:"right"}},u.description),o.a.createElement("div",{style:{display:"grid",placeItems:"end"}},o.a.createElement(h,{label:"Join Scholly",onClick:function(){}})))),o.a.createElement("div",{className:"grid-four margins"},o.a.createElement("div",null,o.a.createElement("h1",null,c.title),o.a.createElement("h3",null,c.description),o.a.createElement("div",null,o.a.createElement(h,{label:"Join Scholly",onClick:function(){}}))),o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(v.a,{style:{width:"100%",minWidth:"500px"},fluid:c.image.childImageSharp.fluid,alt:"Step3"}))),o.a.createElement("h1",{style:{textAlign:"center"}},"Here's what our users have to say"),o.a.createElement("h3",{style:{textAlign:"center"}},"Don’t just take our word for it, here are some of our thousands",o.a.createElement("br",null)," of user’s thought on Schalli’s success platform"),o.a.createElement("div",{className:"margins",style:{textAlign:"center"}},o.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/N1Fpy4Lf0xY",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),o.a.createElement("div",{className:"margins"},o.a.createElement(a.a,null)),o.a.createElement("div",{className:"margins"},o.a.createElement("h1",{style:{textAlign:"center"}},"Sign Up Today"),o.a.createElement("h3",{style:{textAlign:"center"}},"Don’t just take our word for it, here are some of our thousands of user’s thoughts on",o.a.createElement("br",null)," Schalli’s success platform")),o.a.createElement("div",{className:"margins",style:{textAlign:"center"}},o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement(y,null))))},b=(t.default=function(e){var t=e.data.markdownRemark.frontmatter;return o.a.createElement(i.a,null,o.a.createElement(g,{image:t.image,title:t.title,heading:t.heading,subheading:t.subheading,description:t.description,otherimage:t.otherimage,step1:t.step1,step2:t.step2,step3:t.step3}))},"2778249716")},R1wR:function(e,t,n){"use strict";var r=n("YVoz"),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}function _(){}function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=w.prototype;var S=E.prototype=new _;S.constructor=E,r(S,w.prototype),S.isPureReactComponent=!0;var x={current:null},O=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:x.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g,I=[];function A(e,t,n,r){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var u=!1;if(null===t)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case i:case a:u=!0}}if(u)return r(o,t,""===n?"."+$(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var f=n+$(l=t[c],c);u+=e(l,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=m&&t[m]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),c=0;!(l=t.next()).done;)u+=e(l=l.value,f=n+$(l,c++),r,o);else if("object"===l)throw r=""+t,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(C,"$&/")+"/"),M(e,T,t=A(t,i,r,o)),R(t)}var F={current:null};function q(){var e=F.current;if(null===e)throw Error(v(321));return e}var z={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,N,t=A(null,null,t,n)),R(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(v(143));return e}},t.Component=w,t.Fragment=l,t.Profiler=c,t.PureComponent=E,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var o=r({},e.props),a=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)O.call(t,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:i,type:e.type,key:a,ref:l,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.14.0"},VYsE:function(e,t,n){},"a/YJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},a,l(t)),u=n.elementCount,c=n.colors,f=n.width,s=n.height,p=n.perspective,d=n.angle,y=n.spread,h=n.startVelocity,m=n.decay,v=n.dragFriction,g=n.duration,b=n.stagger,w=n.random;e.style.perspective=p;var _=r(e,u,c,f,s),E=_.map((function(e){return{element:e,physics:o(d,y,h,w)}}));return i(e,E,v,m,g,b)};function r(e,t,n,r,o){return Array.from({length:t}).map((function(t,i){var a=document.createElement("div"),l=n[i%n.length];return a.style["background-color"]=l,a.style.width=r,a.style.height=o,a.style.position="absolute",a.style.willChange="transform, opacity",a.style.visibility="hidden",e.appendChild(a),a}))}function o(e,t,n,r){var o=e*(Math.PI/180),i=t*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*r(),wobbleSpeed:.1+.1*r(),velocity:.5*n+r()*n,angle2D:-o+(.5*i-r()*i),angle3D:-Math.PI/4+r()*(Math.PI/2),tiltAngle:r()*Math.PI,tiltAngleSpeed:.1+.3*r()}}function i(e,t,n,r,o,i){var a=void 0;return new Promise((function(l){requestAnimationFrame((function u(c){a||(a=c);var f=c-a,s=a===c?0:(c-a)/o;t.slice(0,Math.ceil(f/i)).forEach((function(e){!function(e,t,n,r){e.physics.x+=Math.cos(e.physics.angle2D)*e.physics.velocity,e.physics.y+=Math.sin(e.physics.angle2D)*e.physics.velocity,e.physics.z+=Math.sin(e.physics.angle3D)*e.physics.velocity,e.physics.wobble+=e.physics.wobbleSpeed,r?e.physics.velocity*=r:e.physics.velocity-=e.physics.velocity*n,e.physics.y+=3,e.physics.tiltAngle+=e.physics.tiltAngleSpeed;var o=e.physics,i=o.x,a=o.y,l=o.z,u=o.tiltAngle,c=o.wobble,f="translate3d("+(i+10*Math.cos(c))+"px, "+(a+10*Math.sin(c))+"px, "+l+"px) rotate3d(1, 1, 1, "+u+"rad)";e.element.style.visibility="visible",e.element.style.transform=f,e.element.style.opacity=1-t}(e,s,n,r)})),c-a<o?requestAnimationFrame(u):(t.forEach((function(t){if(t.element.parentNode===e)return e.removeChild(t.element)})),l())}))}))}var a={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"],duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function l(e){return!e.stagger&&e.delay&&(e.stagger=e.delay),e}},axcl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),a=(r=i)&&r.__esModule?r:{default:r},l=n("a/YJ");var u={position:"relative"},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=n.setRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e){!e.active&&this.props.active&&(0,l.confetti)(this.container,this.props.config)}},{key:"setRef",value:function(e){this.container=e}},{key:"render",value:function(){return a.default.createElement("div",{className:this.props.className,style:u,ref:this.setRef})}}]),t}(i.Component);t.default=c},eM9k:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("i0/C"),o=n("q1tI"),i=r.__importDefault(n("n5OK"));t.default=function(e){var t=o.useRef(0),n=o.useState(e),r=n[0],a=n[1],l=o.useCallback((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return i.default((function(){cancelAnimationFrame(t.current)})),[r,l]}},"i0/C":function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return l})),n.d(t,"__param",(function(){return u})),n.d(t,"__metadata",(function(){return c})),n.d(t,"__awaiter",(function(){return f})),n.d(t,"__generator",(function(){return s})),n.d(t,"__createBinding",(function(){return p})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return y})),n.d(t,"__read",(function(){return h})),n.d(t,"__spread",(function(){return m})),n.d(t,"__spreadArrays",(function(){return v})),n.d(t,"__await",(function(){return g})),n.d(t,"__asyncGenerator",(function(){return b})),n.d(t,"__asyncDelegator",(function(){return w})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return E})),n.d(t,"__importStar",(function(){return x})),n.d(t,"__importDefault",(function(){return O})),n.d(t,"__classPrivateFieldGet",(function(){return P})),n.d(t,"__classPrivateFieldSet",(function(){return j}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function l(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function l(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}u((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var p=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function d(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||p(t,e,n)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||l(e,t)}))})}function l(e,t){try{(n=o[e](t)).value instanceof g?Promise.resolve(n.value.v).then(u,c):f(i[0][2],n)}catch(r){f(i[0][3],r)}var n}function u(e){l("next",e)}function c(e){l("throw",e)}function f(e,t){e(t),i.shift(),i.length&&l(i[0][0],i[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=y(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var S=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&p(t,e,n);return S(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function P(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function j(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},lynl:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("I22s");t.a=function(e){var t=e.gridItems;return o.a.createElement("div",{className:"columns is-multiline"},t.map((function(e){return o.a.createElement("div",{key:e.text,className:"column is-6"},o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"has-text-centered"},o.a.createElement("div",{style:{width:"240px",display:"inline-block"}},o.a.createElement(i.a,{imageInfo:e}))),o.a.createElement("p",null,e.text)))})))}},n5OK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("i0/C"),o=n("q1tI"),i=r.__importDefault(n("0xIW"));t.default=function(e){var t=o.useRef(e);t.current=e,i.default((function(){return function(){return t.current()}}))}},nkPT:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var a=i[o];if(("_owner"!==a||!t.$$typeof)&&!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},pW3x:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("i0/C"),o=n("q1tI"),i=r.__importDefault(n("eM9k")),a=n("9+Sh");t.default=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=i.default({width:a.isClient?window.innerWidth:e,height:a.isClient?window.innerHeight:t}),r=n[0],l=n[1];return o.useEffect((function(){if(a.isClient){var e=function(){l({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[]),r}}}]);
//# sourceMappingURL=component---src-templates-index-page-js-52919bbe49237450f2c8.js.map