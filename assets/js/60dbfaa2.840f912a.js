"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[2841],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7636:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),c=["components"],u={id:"introduction",title:"Intro to Database Systems 15-445/15-645",sidebar_label:"Intro to Database Systems 15-445/15-645",slug:"/cmu-15-445"},i=void 0,l={unversionedId:"cmu/cmu-15-445/introduction",id:"cmu/cmu-15-445/introduction",title:"Intro to Database Systems 15-445/15-645",description:"CMU 15-445/15-645 \u662f\u4e00\u540d\u6570\u636e\u5e93\u5165\u95e8\u8bfe\u7a0b\uff0c\u5b66\u4e60\u672c\u8bfe\u7a0b\u80fd\u591f\u81ea\u5df1\u4e86\u89e3\u4e00\u4e2a\u5355\u673a\u6570\u636e\u5e93\u7684\u5185\u6838\u539f\u7406\uff0c\u5e76\u4ece\u5934\u5230\u5c3e\u6784\u5efa\u4e00\u4e2a\u5355\u673a OLTP \u6570\u636e\u5e93\u7cfb\u7edf\u3002",source:"@site/docs/cmu/cmu-15-445/Introduction.md",sourceDirName:"cmu/cmu-15-445",slug:"/cmu-15-445",permalink:"/docs/cmu-15-445",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/cmu/cmu-15-445/Introduction.md",tags:[],version:"current",lastUpdatedAt:1692714783,formattedLastUpdatedAt:"8/22/2023",frontMatter:{id:"introduction",title:"Intro to Database Systems 15-445/15-645",sidebar_label:"Intro to Database Systems 15-445/15-645",slug:"/cmu-15-445"}},s=[{value:"\ud83d\ude80 \u5feb\u901f\u94fe\u63a5",id:"-\u5feb\u901f\u94fe\u63a5",children:[],level:2},{value:"\ud83c\udf4e \u9644\u5f55",id:"-\u9644\u5f55",children:[],level:2}],m={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CMU 15-445/15-645 \u662f\u4e00\u540d\u6570\u636e\u5e93\u5165\u95e8\u8bfe\u7a0b\uff0c\u5b66\u4e60\u672c\u8bfe\u7a0b\u80fd\u591f\u81ea\u5df1\u4e86\u89e3\u4e00\u4e2a\u5355\u673a\u6570\u636e\u5e93\u7684\u5185\u6838\u539f\u7406\uff0c\u5e76\u4ece\u5934\u5230\u5c3e\u6784\u5efa\u4e00\u4e2a\u5355\u673a OLTP \u6570\u636e\u5e93\u7cfb\u7edf\u3002"),(0,a.kt)("h2",{id:"-\u5feb\u901f\u94fe\u63a5"},"\ud83d\ude80 \u5feb\u901f\u94fe\u63a5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://15445.courses.cs.cmu.edu/fall2022/"},"CMU 15-445/645 (FALL 2022) Database Systems"))),(0,a.kt)("h2",{id:"-\u9644\u5f55"},"\ud83c\udf4e \u9644\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cmu-db/bustub"},"bustub"))))}p.isMDXComponent=!0}}]);