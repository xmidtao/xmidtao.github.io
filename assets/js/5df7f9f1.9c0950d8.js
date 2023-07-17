"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[9321],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,k=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1871:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],u={id:"introduction",title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb",slug:"/database/introduction",description:"\u6570\u636e\u5e93\u5185\u6838\u4e4b\u9053\u3002",image:"img/meta.png"},o=void 0,p={unversionedId:"database/introduction",id:"database/introduction",title:"\u7b80\u4ecb",description:"\u6570\u636e\u5e93\u5185\u6838\u4e4b\u9053\u3002",source:"@site/docs/database/Introduction.md",sourceDirName:"database",slug:"/database/introduction",permalink:"/docs/database/introduction",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/database/Introduction.md",tags:[],version:"current",lastUpdatedAt:1689269261,formattedLastUpdatedAt:"7/13/2023",frontMatter:{id:"introduction",title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb",slug:"/database/introduction",description:"\u6570\u636e\u5e93\u5185\u6838\u4e4b\u9053\u3002",image:"img/meta.png"},sidebar:"docs",previous:{title:"\u5b9e\u6218\u5e93",permalink:"/docs/algorithm/realbank"},next:{title:"\u6267\u884c\u5f15\u64ce",permalink:"/docs/database/execution-engine"}},c=[{value:"\ud83d\udd11 \u9053\u6cd5\u81ea\u7136",id:"-\u9053\u6cd5\u81ea\u7136",children:[],level:3},{value:"\ud83d\udcc5 \u8ba1\u5212",id:"-\u8ba1\u5212",children:[],level:3},{value:"\ud83d\ude80 \u5feb\u901f\u542f\u52a8",id:"-\u5feb\u901f\u542f\u52a8",children:[],level:3},{value:"\ud83d\udcc1 \u6280\u80fd",id:"-\u6280\u80fd",children:[],level:3}],d={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%BA%93"},"Database")," \u662f\u4ee5\u4e00\u5b9a\u65b9\u5f0f\u50a8\u5b58\u5728\u4e00\u8d77\u3001\u80fd\u4e88\u591a\u4e2a\u7528\u6237\u5171\u4eab\u3001\u5177\u6709\u5c3d\u53ef\u80fd\u5c0f\u7684\u5197\u4f59\u5ea6\u3001\u4e0e\u5e94\u7528\u7a0b\u5e8f\u5f7c\u6b64\u72ec\u7acb\u7684\u6570\u636e\u96c6\u5408\u3002\u4e00\u4e2a\u6570\u636e\u5e93\u7531\u591a\u4e2a\u8868\u7a7a\u95f4\uff08Tablespace\uff09\u6784\u6210\u3002"),(0,l.kt)("h3",{id:"-\u9053\u6cd5\u81ea\u7136"},"\ud83d\udd11 \u9053\u6cd5\u81ea\u7136"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\uff1aCMU 15-445 + CMU 15-721 + \u6570\u636e\u5e93\u7cfb\u7edf\u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"\u7ec3\u4e60\uff1aPostgreSQL \u6e90\u7801 + \u81ea\u5236\u5355\u673a\u6570\u636e\u5e93")),(0,l.kt)("h3",{id:"-\u8ba1\u5212"},"\ud83d\udcc5 \u8ba1\u5212"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bfe\u7a0b\uff1aCMU/MIT  \u5237\u8bfe  100%"),(0,l.kt)("li",{parentName:"ul"},"\u4e66\u672c\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Oracle Database \u7f16\u7a0b\u827a\u672f"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7cfb\u7edf\u6982\u5ff5"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u539f\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u7b97\u6cd5\u5bfc\u8bba"),(0,l.kt)("li",{parentName:"ul"},"C++ Primer Plus")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fdb\u5ea6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://15445.courses.cs.cmu.edu/fall2022/"},"CMU 15-445")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u57fa\u7840"),(0,l.kt)("td",{parentName:"tr",align:null},"100%"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://15721.courses.cs.cmu.edu/spring2023/"},"CMU 15-721")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u9ad8\u7ea7"),(0,l.kt)("td",{parentName:"tr",align:null},"10%"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://nil.csail.mit.edu/6.824/2022/"},"MIT 6.824")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u5e03\u5f0f\u7cfb\u7edf"),(0,l.kt)("td",{parentName:"tr",align:null},"100%"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bb9\u6613\u5fd8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/hebudb/panda"},"Panda")),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u64b8\u6570\u636e\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"5%"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"\u6570\u636e\u5e93\uff0c\u9009\u62e9Rust/C++ \u7f16\u5199\uff0c\u6709\u6781\u5927\u7ade\u4e89\u529b\u3002"),(0,l.kt)("h3",{id:"-\u5feb\u901f\u542f\u52a8"},"\ud83d\ude80 \u5feb\u901f\u542f\u52a8"),(0,l.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u5355\u673a\u6570\u636e\u5e93\uff0c\u5b66\u4e60\u4ed6\u6709\u54ea\u4e9b\u529f\u80fd\uff0c\u8bd5\u7740\u753b\u4e00\u4e0b\u6574\u4f53\u67b6\u6784\u3002"),(0,l.kt)("p",null,"\u67e5\u8be2\u5f15\u64ce\uff1a\u5c1d\u8bd5\u7528 GDB \u8c03\u8bd5 SQL \u6267\u884c\u6574\u4f53\u6d41\u7a0b\uff0c\u641e\u6e05\u695a SQL \u6267\u884c\u9700\u8981\u4f9d\u8d56\u90a3\u4e9b\u5173\u952e\u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u5b58\u50a8\u5f15\u64ce\uff1a\u624b\u64b8 LSM-Tree\u3001B+Tree"),(0,l.kt)("h3",{id:"-\u6280\u80fd"},"\ud83d\udcc1 \u6280\u80fd"),(0,l.kt)("p",null,"\u5fc5\u5907\u6280\u80fd\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f16\u7a0b\u8bed\u8a00"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u673a\u57fa\u7840"),(0,l.kt)("li",{parentName:"ul"},"\u7b97\u6cd5\u57fa\u7840")),(0,l.kt)("p",null,"\u5e38\u89c1\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"B+Tree"),(0,l.kt)("li",{parentName:"ul"},"LSM-Tree"),(0,l.kt)("li",{parentName:"ul"},"SkipList"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u5206\u67e5\u627e"),(0,l.kt)("li",{parentName:"ul"},"\u6392\u5e8f\u7b97\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u94fe\u8868"),(0,l.kt)("li",{parentName:"ul"},"Raft/Paxos/ZAB"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027 Hash"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u6269\u5c55 Hash \u8868"),(0,l.kt)("li",{parentName:"ul"},"Linear Probing Hash Table"),(0,l.kt)("li",{parentName:"ul"},"LRU-K / Clock")))}m.isMDXComponent=!0}}]);