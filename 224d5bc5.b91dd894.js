(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{2187:function(e,t,b){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var b=arguments[t];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&(e[n]=b[n])}return e}).apply(this,arguments)}b.d(t,"a",(function(){return n}))},2188:function(e,t,b){"use strict";function n(e,t){if(null==e)return{};var b,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||(c[b]=e[b]);return c}b.d(t,"a",(function(){return n}))},2189:function(e,t,b){"use strict";b.d(t,"a",(function(){return u})),b.d(t,"b",(function(){return p}));var n=b(0),c=b.n(n);function l(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function r(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,n)}return b}function a(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?r(Object(b),!0).forEach((function(t){l(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):r(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function O(e,t){if(null==e)return{};var b,n,c=function(e,t){if(null==e)return{};var b,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||(c[b]=e[b]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)b=l[n],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(c[b]=e[b])}return c}var j=c.a.createContext({}),d=function(e){var t=c.a.useContext(j),b=t;return e&&(b="function"==typeof e?e(t):a(a({},t),e)),b},u=function(e){var t=d(e.components);return c.a.createElement(j.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},o=c.a.forwardRef((function(e,t){var b=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),u=d(b),o=n,p=u["".concat(r,".").concat(o)]||u[o]||i[o]||l;return b?c.a.createElement(p,a(a({ref:t},j),{},{components:b})):c.a.createElement(p,a({ref:t},j))}));function p(e,t){var b=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=b.length,r=new Array(l);r[0]=o;var a={};for(var O in t)hasOwnProperty.call(t,O)&&(a[O]=t[O]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var j=2;j<l;j++)r[j]=b[j];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,b)}o.displayName="MDXCreateElement"},2190:function(e,t,b){"use strict";function n(e){var t,b,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(b=n(e[t]))&&(c&&(c+=" "),c+=b);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,b=0,c="";b<arguments.length;)(e=arguments[b++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},2191:function(e,t,b){"use strict";var n=b(0),c=b(2192);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2192:function(e,t,b){"use strict";var n=b(0),c=Object(n.createContext)(void 0);t.a=c},2193:function(e,t,b){"use strict";var n=b(0),c=b.n(n),l=b(2191),r=b(2190),a=b(51),O=b.n(a),j=37,d=39;t.a=function(e){var t=e.lazy,b=e.block,a=e.children,u=e.defaultValue,i=e.values,o=e.groupId,p=e.className,s=Object(l.a)(),m=s.tabGroupChoices,g=s.setTabGroupChoices,N=Object(n.useState)(u),y=N[0],v=N[1];if(null!=o){var h=m[o];null!=h&&h!==y&&i.some((function(e){return e.value===h}))&&v(h)}var f=function(e){v(e),null!=o&&g(o,e)},P=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":b},p)},i.map((function(e){var t=e.value,b=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(r.a)("tabs__item",O.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,b){switch(b.keyCode){case d:!function(e,t){var b=e.indexOf(t)+1;e[b]?e[b].focus():e[0].focus()}(e,t);break;case j:!function(e,t){var b=e.indexOf(t)-1;e[b]?e[b].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return f(t)},onClick:function(){f(t)}},b)}))),t?Object(n.cloneElement)(a.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},2194:function(e,t,b){"use strict";var n=b(2187),c=b(0),l=b.n(c);t.a=function(e){var t=e.children,b=e.hidden,c=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:b,className:c}),t)}},374:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return O})),b.d(t,"metadata",(function(){return j})),b.d(t,"rightToc",(function(){return d})),b.d(t,"default",(function(){return i}));var n=b(2187),c=b(2188),l=(b(0),b(2189)),r=b(2193),a=b(2194),O={title:"LivePusher",sidebar_label:"LivePusher"},j={unversionedId:"components/media/live-pusher",id:"version-3.2.0-canary.1/components/media/live-pusher",isDocsHomePage:!1,title:"LivePusher",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record",source:"@site/versioned_docs/version-3.2.0-canary.1/components/media/live-pusher.md",slug:"/components/media/live-pusher",permalink:"/taro/docs/3.2.0-canary.1/components/media/live-pusher",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.1/components/media/live-pusher.md",version:"3.2.0-canary.1",sidebar_label:"LivePusher",sidebar:"version-3.2.0-canary.1/components",previous:{title:"LivePlayer",permalink:"/taro/docs/3.2.0-canary.1/components/media/live-player"},next:{title:"Video",permalink:"/taro/docs/3.2.0-canary.1/components/media/video"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"LivePusherProps",id:"livepusherprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"orientation",id:"orientation",children:[]},{value:"localMirror",id:"localmirror",children:[]},{value:"audioReverbType",id:"audioreverbtype",children:[]},{value:"audioVolumeType",id:"audiovolumetype",children:[]},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",children:[]},{value:"onNetstatusEventDetail",id:"onnetstatuseventdetail",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"onBgmProgressEventDetail",id:"onbgmprogresseventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],u={rightToc:d};function i(e){var t=e.components,b=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record"),Object(l.b)("p",null,"\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u300c\u5f00\u53d1\u300d-\u300c\u63a5\u53e3\u8bbe\u7f6e\u300d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<LivePusherProps>\n")),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)(r.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(l.b)(a.a,{value:"React",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <LivePusher url='url' mode='RTC' autopush  />\n    )\n  }\n}\n"))),Object(l.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <live-pusher url="url" mode="RTC" autopush  />\n</template>\n')))),Object(l.b)("h2",{id:"livepusherprops"},"LivePusherProps"),Object(l.b)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\n\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record\n\u6682\u53ea\u9488\u5bf9\u56fd\u5185\u4e3b\u4f53\u5982\u4e0b\u7c7b\u76ee\u7684\u5c0f\u7a0b\u5e8f\u5f00\u653e\uff0c\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u201c\u8bbe\u7f6e\u201d-\u201c\u63a5\u53e3\u8bbe\u7f6e\u201d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"url"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a8\u6d41\u5730\u5740\u3002\u76ee\u524d\u4ec5\u652f\u6301 rtmp \u683c\u5f0f")),Object(l.b)("tr",null,Object(l.b)("td",null,"mode"),Object(l.b)("td",null,Object(l.b)("code",null,'"SD" | "HD" | "FHD" | "RTC"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"RTC"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"SD\uff08\u6807\u6e05\uff09, HD\uff08\u9ad8\u6e05\uff09, FHD\uff08\u8d85\u6e05\uff09, RTC\uff08\u5b9e\u65f6\u901a\u8bdd\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"autopush"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u81ea\u52a8\u63a8\u6d41")),Object(l.b)("tr",null,Object(l.b)("td",null,"muted"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u9759\u97f3\u3002\u5373\u5c06\u5e9f\u5f03\uff0c\u53ef\u7528 enable-mic \u66ff\u4ee3",Object(l.b)("br",null),Object(l.b)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),Object(l.b)("tr",null,Object(l.b)("td",null,"enableCamera"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"true")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5f00\u542f\u6444\u50cf\u5934")),Object(l.b)("tr",null,Object(l.b)("td",null,"autoFocus"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"true")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u81ea\u52a8\u805a\u96c6")),Object(l.b)("tr",null,Object(l.b)("td",null,"orientation"),Object(l.b)("td",null,Object(l.b)("code",null,'"vertical" | "horizontal"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"vertical"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u753b\u9762\u65b9\u5411")),Object(l.b)("tr",null,Object(l.b)("td",null,"beauty"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"0")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u7f8e\u989c\uff0c\u53d6\u503c\u8303\u56f4 0-9 \uff0c0 \u8868\u793a\u5173\u95ed")),Object(l.b)("tr",null,Object(l.b)("td",null,"whiteness"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"0")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u7f8e\u767d\uff0c\u53d6\u503c\u8303\u56f4 0-9 \uff0c0 \u8868\u793a\u5173\u95ed")),Object(l.b)("tr",null,Object(l.b)("td",null,"aspect"),Object(l.b)("td",null,Object(l.b)("code",null,'"9:16" | "3:4"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"9:16"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5bbd\u9ad8\u6bd4\uff0c\u53ef\u9009\u503c\u6709 3:4, 9:16")),Object(l.b)("tr",null,Object(l.b)("td",null,"minBitrate"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"200")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6700\u5c0f\u7801\u7387")),Object(l.b)("tr",null,Object(l.b)("td",null,"maxBitrate"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"1000")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6700\u5927\u7801\u7387")),Object(l.b)("tr",null,Object(l.b)("td",null,"audioQuality"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"high"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u9ad8\u97f3\u8d28(48KHz)\u6216\u4f4e\u97f3\u8d28(16KHz)\uff0c\u503c\u4e3ahigh, low")),Object(l.b)("tr",null,Object(l.b)("td",null,"waitingImage"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u63a8\u6d41\u7684\u7b49\u5f85\u753b\u9762")),Object(l.b)("tr",null,Object(l.b)("td",null,"waitingImageHash"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u7b49\u5f85\u753b\u9762\u8d44\u6e90\u7684MD5\u503c")),Object(l.b)("tr",null,Object(l.b)("td",null,"zoom"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8c03\u6574\u7126\u8ddd")),Object(l.b)("tr",null,Object(l.b)("td",null,"devicePosition"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"front"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u524d\u7f6e\u6216\u540e\u7f6e\uff0c\u503c\u4e3afront, back")),Object(l.b)("tr",null,Object(l.b)("td",null,"backgroundMute"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u662f\u5426\u9759\u97f3")),Object(l.b)("tr",null,Object(l.b)("td",null,"mirror"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8bbe\u7f6e\u63a8\u6d41\u753b\u9762\u662f\u5426\u955c\u50cf\uff0c\u4ea7\u751f\u7684\u6548\u679c\u5728 LivePlayer \u53cd\u5e94\u5230",Object(l.b)("br",null),Object(l.b)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),Object(l.b)("tr",null,Object(l.b)("td",null,"remoteMirror"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u8bbe\u7f6e\u63a8\u6d41\u753b\u9762\u662f\u5426\u955c\u50cf\uff0c\u4ea7\u751f\u7684\u6548\u679c\u5728 LivePlayer \u53cd\u5e94\u5230",Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("strong",null,"Note:")," \u540c mirror \u5c5e\u6027\uff0c\u540e\u7eed mirror \u5c06\u5e9f\u5f03")),Object(l.b)("tr",null,Object(l.b)("td",null,"localMirror"),Object(l.b)("td",null,Object(l.b)("code",null,'"auto" | "enable" | "disable"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"auto"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a7\u5236\u672c\u5730\u9884\u89c8\u753b\u9762\u662f\u5426\u955c\u50cf")),Object(l.b)("tr",null,Object(l.b)("td",null,"audioReverbType"),Object(l.b)("td",null,Object(l.b)("code",null,"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"0")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u97f3\u9891\u6df7\u54cd\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"enableMic"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"true")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u5f00\u542f\u6216\u5173\u95ed\u9ea6\u514b\u98ce")),Object(l.b)("tr",null,Object(l.b)("td",null,"enableAgc"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u5f00\u542f\u97f3\u9891\u81ea\u52a8\u589e\u76ca")),Object(l.b)("tr",null,Object(l.b)("td",null,"enableAns"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"false")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u662f\u5426\u5f00\u542f\u97f3\u9891\u566a\u58f0\u6291\u5236")),Object(l.b)("tr",null,Object(l.b)("td",null,"audioVolumeType"),Object(l.b)("td",null,Object(l.b)("code",null,'"media" | "voicecall"')),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,'"voicecall"')),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u97f3\u91cf\u7c7b\u578b")),Object(l.b)("tr",null,Object(l.b)("td",null,"videoWidth"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"360")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u4e0a\u63a8\u7684\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u5bbd\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"videoHeight"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",{style:{textAlign:"center"}},Object(l.b)("code",null,"640")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u4e0a\u63a8\u7684\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u9ad8\u5ea6")),Object(l.b)("tr",null,Object(l.b)("td",null,"onStateChange"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = ","{code}")),Object(l.b)("tr",null,Object(l.b)("td",null,"onNetstatus"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onNetstatusEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u7f51\u7edc\u72b6\u6001\u901a\u77e5\uff0cdetail = ","{info}")),Object(l.b)("tr",null,Object(l.b)("td",null,"onError"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u6e32\u67d3\u9519\u8bef\u4e8b\u4ef6\uff0cdetail = ","{errMsg, errCode}")),Object(l.b)("tr",null,Object(l.b)("td",null,"onBgmStart"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<any>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u80cc\u666f\u97f3\u5f00\u59cb\u64ad\u653e\u65f6\u89e6\u53d1")),Object(l.b)("tr",null,Object(l.b)("td",null,"onBgmProgress"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<onBgmProgressEventDetail>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u80cc\u666f\u97f3\u8fdb\u5ea6\u53d8\u5316\u65f6\u89e6\u53d1\uff0cdetail = ","{progress, duration}")),Object(l.b)("tr",null,Object(l.b)("td",null,"onBgmComplete"),Object(l.b)("td",null,Object(l.b)("code",null,"BaseEventOrigFunction<any>")),Object(l.b)("td",{style:{textAlign:"center"}}),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u80cc\u666f\u97f3\u64ad\u653e\u5b8c\u6210\u65f6\u89e6\u53d1")))),Object(l.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.url"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.autopush"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.muted"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.enableCamera"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.autoFocus"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.orientation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.beauty"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.whiteness"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.aspect"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.minBitrate"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.maxBitrate"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.audioQuality"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.waitingImage"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.waitingImageHash"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.zoom"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.devicePosition"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.backgroundMute"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.mirror"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.remoteMirror"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.localMirror"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.audioReverbType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.enableMic"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.enableAgc"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.enableAns"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.audioVolumeType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.videoWidth"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.videoHeight"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.onStateChange"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.onNetstatus"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.onError"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmStart"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmProgress"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusherProps.onBgmComplete"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"orientation"},"orientation"),Object(l.b)("p",null,"orientation \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"vertical"),Object(l.b)("td",null,"\u7ad6\u76f4")),Object(l.b)("tr",null,Object(l.b)("td",null,"horizontal"),Object(l.b)("td",null,"\u6c34\u5e73")))),Object(l.b)("h3",{id:"localmirror"},"localMirror"),Object(l.b)("p",null,"localMirror \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"auto"),Object(l.b)("td",null,"\u524d\u7f6e\u6444\u50cf\u5934\u955c\u50cf\uff0c\u540e\u7f6e\u6444\u50cf\u5934\u4e0d\u955c\u50cf")),Object(l.b)("tr",null,Object(l.b)("td",null,"enable"),Object(l.b)("td",null,"\u524d\u540e\u7f6e\u6444\u50cf\u5934\u5747\u955c\u50cf")),Object(l.b)("tr",null,Object(l.b)("td",null,"disable"),Object(l.b)("td",null,"\u524d\u540e\u7f6e\u6444\u50cf\u5934\u5747\u4e0d\u955c\u50cf")))),Object(l.b)("h3",{id:"audioreverbtype"},"audioReverbType"),Object(l.b)("p",null,"audioReverbType \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"0"),Object(l.b)("td",null,"\u5173\u95ed")),Object(l.b)("tr",null,Object(l.b)("td",null,"1"),Object(l.b)("td",null,"KTV")),Object(l.b)("tr",null,Object(l.b)("td",null,"2"),Object(l.b)("td",null,"\u5c0f\u623f\u95f4")),Object(l.b)("tr",null,Object(l.b)("td",null,"3"),Object(l.b)("td",null,"\u5927\u4f1a\u5802")),Object(l.b)("tr",null,Object(l.b)("td",null,"4"),Object(l.b)("td",null,"\u4f4e\u6c89")),Object(l.b)("tr",null,Object(l.b)("td",null,"5"),Object(l.b)("td",null,"\u6d2a\u4eae")),Object(l.b)("tr",null,Object(l.b)("td",null,"6"),Object(l.b)("td",null,"\u91d1\u5c5e\u58f0")),Object(l.b)("tr",null,Object(l.b)("td",null,"7"),Object(l.b)("td",null,"\u78c1\u6027")))),Object(l.b)("h3",{id:"audiovolumetype"},"audioVolumeType"),Object(l.b)("p",null,"audioVolumeType \u7684\u5408\u6cd5\u503c"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"media"),Object(l.b)("td",null,"\u5a92\u4f53\u97f3\u91cf")),Object(l.b)("tr",null,Object(l.b)("td",null,"voicecall"),Object(l.b)("td",null,"\u901a\u8bdd\u97f3\u91cf")))),Object(l.b)("h3",{id:"onstatechangeeventdetail"},"onStateChangeEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"code"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u72b6\u6001\u7801")))),Object(l.b)("h3",{id:"onnetstatuseventdetail"},"onNetstatusEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"info"),Object(l.b)("td",null,Object(l.b)("code",null,"netStatus")),Object(l.b)("td",null,"\u7f51\u7edc\u72b6\u6001")))),Object(l.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u9519\u8bef\u4fe1\u606f")),Object(l.b)("tr",null,Object(l.b)("td",null,"errCode"),Object(l.b)("td",null,Object(l.b)("code",null,"string | number")),Object(l.b)("td",null,"\u9519\u8bef\u7801")))),Object(l.b)("h3",{id:"onbgmprogresseventdetail"},"onBgmProgressEventDetail"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"progress"),Object(l.b)("td",null,Object(l.b)("code",null,"any")),Object(l.b)("td",null,"\u8fdb\u5c55")),Object(l.b)("tr",null,Object(l.b)("td",null,"duration"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u6301\u7eed\u65f6\u95f4")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"LivePusher"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0}}]);