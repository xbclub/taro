(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{2187:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},2188:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},2189:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,j=O["".concat(i,".").concat(d)]||O[d]||s[d]||c;return a?r.a.createElement(j,o(o({ref:t},l),{},{components:a})):r.a.createElement(j,o({ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},806:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2187),r=a(2188),c=(a(0),a(2189)),i={title:"Taro.showLoading(OBJECT)",sidebar_label:"showLoading"},o={unversionedId:"apis/interface/interactives/showLoading",id:"version-1.x/apis/interface/interactives/showLoading",isDocsHomePage:!1,title:"Taro.showLoading(OBJECT)",description:"\u663e\u793a Loading \u63d0\u793a\u6846, \u9700\u4e3b\u52a8\u8c03\u7528 Taro.hideLoading \u624d\u80fd\u5173\u95ed\u63d0\u793a\u6846\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/interactives/showLoading.md",slug:"/apis/interface/interactives/showLoading",permalink:"/taro/docs/1.x/apis/interface/interactives/showLoading",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/interactives/showLoading.md",version:"1.x",sidebar_label:"showLoading",sidebar:"version-1.x/API",previous:{title:"Taro.showToast(OBJECT)",permalink:"/taro/docs/1.x/apis/interface/interactives/showToast"},next:{title:"Taro.hideToast()",permalink:"/taro/docs/1.x/apis/interface/interactives/hideToast"}},b=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u663e\u793a Loading \u63d0\u793a\u6846, \u9700\u4e3b\u52a8\u8c03\u7528 Taro.hideLoading \u624d\u80fd\u5173\u95ed\u63d0\u793a\u6846\uff0c\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"title"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u662f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63d0\u793a\u7684\u5185\u5bb9")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mask"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u662f\u5426\u663e\u793a\u900f\u660e\u8499\u5c42\uff0c\u9632\u6b62\u89e6\u6478\u7a7f\u900f\uff0c\u9ed8\u8ba4\uff1afalse")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"success"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"fail"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"complete"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.showLoading({\n  title: 'loading'\n})\n  .then(res => console.log(res))\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.showLoading"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);