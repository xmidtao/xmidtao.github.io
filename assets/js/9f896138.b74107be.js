"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[533],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5921:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),l=["components"],a={id:"introduction",title:"Velox",sidebar_label:"\u7b80\u4ecb",slug:"/velox/introduction"},c=void 0,u={unversionedId:"velox/introduction",id:"velox/introduction",title:"Velox",description:"Volox \u662f\u5206\u5e03\u5f0f\u67e5\u8be2\u5f15\u64ce PrestoDB Worker \u7684 C++ \u7248\u672c\uff0cPrestoDB \u539f\u751f Worker \u662f Java \u5b9e\u73b0\uff0c\u6027\u80fd\u9047\u5230\u74f6\u9888\uff0c\u4f7f\u7528 Volox \u505a Worker \u63d0\u5347\u5206\u5e03\u5f0f\u67e5\u8be2\u5f15\u64ce\u7684\u6027\u80fd\u3002",source:"@site/docs/velox/Introduction.md",sourceDirName:"velox",slug:"/velox/introduction",permalink:"/docs/velox/introduction",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/velox/Introduction.md",tags:[],version:"current",lastUpdatedAt:1692714783,formattedLastUpdatedAt:"8/22/2023",frontMatter:{id:"introduction",title:"Velox",sidebar_label:"\u7b80\u4ecb",slug:"/velox/introduction"},sidebar:"docs",previous:{title:"Vue",permalink:"/docs/mysql/vue"},next:{title:"\u5b89\u88c5",permalink:"/docs/velox/installation"}},p=[{value:"\ud83d\ude80 Quick Links",id:"-quick-links",children:[],level:2},{value:"\ud83c\udf4e \u9644\u5f55",id:"-\u9644\u5f55",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Volox \u662f\u5206\u5e03\u5f0f\u67e5\u8be2\u5f15\u64ce PrestoDB Worker \u7684 C++ \u7248\u672c\uff0cPrestoDB \u539f\u751f Worker \u662f Java \u5b9e\u73b0\uff0c\u6027\u80fd\u9047\u5230\u74f6\u9888\uff0c\u4f7f\u7528 Volox \u505a Worker \u63d0\u5347\u5206\u5e03\u5f0f\u67e5\u8be2\u5f15\u64ce\u7684\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u7f16\u5199 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hetudb/hetu"},"hetudb")," \u5206\u5e03\u5f0f\u7248\u672c\u4f18\u5316\u5668\u3001DAG \u62c6\u5206\u3001\u6267\u884c\u5f15\u64ce\u7b49\u5185\u5bb9\u53c2\u8003 PrestoDB \u8fdb\u884c\u5b9e\u73b0\u3002"),(0,i.kt)("h2",{id:"-quick-links"},"\ud83d\ude80 Quick Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/velox"},"Velox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prestodb/presto"},"PrestoDB"))),(0,i.kt)("h2",{id:"-\u9644\u5f55"},"\ud83c\udf4e \u9644\u5f55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/614285711"},"1. Presto + Velox \u73af\u5883\u642d\u5efa"))))}d.isMDXComponent=!0}}]);