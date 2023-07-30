"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[1188],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1081:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"introduction",title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb",slug:"/panda"},u=void 0,c={unversionedId:"panda/introduction",id:"panda/introduction",title:"\u7b80\u4ecb",description:"Panda \u662f\u4e00\u4e2a\u6559\u80b2\u76ee\u7684\u7684 OLTP \u5355\u673a\u6570\u636e\u5e93\uff0c\u91c7\u7528 Serverless \u67b6\u6784\u3002",source:"@site/docs/panda/Introduction.md",sourceDirName:"panda",slug:"/panda",permalink:"/docs/panda",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/panda/Introduction.md",tags:[],version:"current",lastUpdatedAt:1690724780,formattedLastUpdatedAt:"7/30/2023",frontMatter:{id:"introduction",title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb",slug:"/panda"},sidebar:"docs",previous:{title:"\u5b58\u50a8\u5f15\u64ce",permalink:"/docs/database/storage-engine"},next:{title:"\u7b80\u4ecb",permalink:"/docs/panda/optimizer/introduction"}},p=[{value:"\ud83d\ude80 \u5feb\u901f\u94fe\u63a5",id:"-\u5feb\u901f\u94fe\u63a5",children:[],level:2},{value:"\ud83c\udf4e \u9644\u5f55",id:"-\u9644\u5f55",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Panda \u662f\u4e00\u4e2a\u6559\u80b2\u76ee\u7684\u7684 OLTP \u5355\u673a\u6570\u636e\u5e93\uff0c\u91c7\u7528 Serverless \u67b6\u6784\u3002"),(0,o.kt)("p",null,"\u9010\u6b65\u5b9e\u73b0\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f18\u5316\u5668\uff08Volcano/Cascades)"),(0,o.kt)("li",{parentName:"ul"},"Buffer Pool\uff08\u7f13\u5b58\u6c60\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5f15\u64ce",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In-Memory Storage"),(0,o.kt)("li",{parentName:"ul"},"LSM-Tree For S3")))),(0,o.kt)("p",null,"\u6211\u4eec\u4f1a\u7814\u7a76\u4e3b\u6d41 OLTP \u6570\u636e\u5e93\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\uff0cMySQL\u3001 PG \u4ee5\u53ca Rust \u751f\u6001\u6570\u636e\u5e93\u3002"),(0,o.kt)("h2",{id:"-\u5feb\u901f\u94fe\u63a5"},"\ud83d\ude80 \u5feb\u901f\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hetudb/panda"},"Panda")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./mysql/basic/installation"},"MySQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./packages/installation"},"Postgres"))),(0,o.kt)("h2",{id:"-\u9644\u5f55"},"\ud83c\udf4e \u9644\u5f55"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mysql"},"1. MySQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/postgres"},"2. Postgres")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cmu-db/bustub"},"3. BusTub"))))}d.isMDXComponent=!0}}]);