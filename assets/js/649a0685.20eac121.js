"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[8123],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={id:"introduction",title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb",slug:"/mysql"},u=void 0,p={unversionedId:"mysql/introduction",id:"mysql/introduction",title:"\u7b80\u4ecb",description:"MySQL \u680f\u76ee\uff0c\u5f00\u53d1 Panda \u5355\u673a OLTP \u6570\u636e\u5e93\uff0c\u7814\u7a76\u591a\u4e2a\u6570\u636e\u5e93\u6e90\u7801\uff0c\u907f\u514d\u8d70\u9519\u9053\u8def\u3002",source:"@site/docs/mysql/Introduction.md",sourceDirName:"mysql",slug:"/mysql",permalink:"/docs/mysql",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/mysql/Introduction.md",tags:[],version:"current",lastUpdatedAt:1690724780,formattedLastUpdatedAt:"7/30/2023",frontMatter:{id:"introduction",title:"\u7b80\u4ecb",sidebar_label:"\u7b80\u4ecb",slug:"/mysql"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/multieditor/installation"},next:{title:"\u5b89\u88c5",permalink:"/docs/mysql/basic/installation"}},c=[{value:"\ud83d\ude80 \u5feb\u901f\u94fe\u63a5",id:"-\u5feb\u901f\u94fe\u63a5",children:[],level:2}],m={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"MySQL \u680f\u76ee\uff0c\u5f00\u53d1 Panda \u5355\u673a OLTP \u6570\u636e\u5e93\uff0c\u7814\u7a76\u591a\u4e2a\u6570\u636e\u5e93\u6e90\u7801\uff0c\u907f\u514d\u8d70\u9519\u9053\u8def\u3002"),(0,l.kt)("p",null,"\u5de5\u4f5c\u548c\u4e2a\u4eba\u5174\u8da3\u5173\u7cfb\uff0c\u628a\u7814\u7a76 MySQL \u6e90\u7801\u5206\u95e8\u522b\u7c7b\u68b3\u7406\u6210\u4f53\u7cfb\u5316\u7684\u6587\u7ae0\uff0c\u4f9b\u5927\u5bb6\u5b66\u4e60\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/xmidtao"},"MidTao")," \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u6709\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u6b22\u8fce\u8d21\u732e\u3002"),(0,l.kt)("p",null,"\u6574\u4e2a\u6570\u636e\u5e93\u5185\u6838\u7814\u7a76\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"QUERY OPTIMIZATION",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Volcano/Cascades Optimizer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Heuristics / Rules"),(0,l.kt)("li",{parentName:"ul"},"Cost-based Search"))))),(0,l.kt)("li",{parentName:"ul"},"Query Execution",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Approach #1: Iterator Model"),(0,l.kt)("li",{parentName:"ul"},"Approach #2: Materialization Model "),(0,l.kt)("li",{parentName:"ul"},"Approach #3: Vectorized / Batch Model"))),(0,l.kt)("li",{parentName:"ul"},"Buffer Pool Manager",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LRU-K-Replacer"),(0,l.kt)("li",{parentName:"ul"},"Clock-Replacer"))),(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5f15\u64ce\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Page Layout"),(0,l.kt)("li",{parentName:"ul"},"B+Tree"),(0,l.kt)("li",{parentName:"ul"},"MVCC + 2PL"),(0,l.kt)("li",{parentName:"ul"},"Logging")))),(0,l.kt)("p",null,"MySQL \u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u51e0\u4e4e\u662f\u5168\u4e16\u754c\u6240\u6709\u4eba\u63a5\u89e6\u6570\u636e\u5e93\u7684\u9996\u9009\uff0c\u5b83\u7b80\u5355\u6613\u7528\u3001\u80fd\u5728\u4e2a\u4eba\u7535\u8111\u8bbe\u5907\u5b89\u88c5\u4f53\u9a8c\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u7a0d\u5fae\u9ad8\u4e00\u4e9b\uff0c\u7f16\u8bd1\u3001Debug\u3001\u5f00\u53d1\u5185\u6838\u4f1a\u6709\u8f83\u5927\u6548\u7387\u63d0\u5347\uff0c\u4e0d\u7136\u7f16\u8f91\u51e0\u4e2a\u5c0f\u65f6\u786e\u5b9e\u8ba9\u4eba\u6293\u72c2\u3002"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e00\u4e9b NewSQL\u3001HTAP\u3001NoSQL \u5206\u5e03\u5f0f\u4ea7\u54c1\uff0c\u914d\u7f6e\u8f83\u4f4e\u7684\u4e2a\u4eba\u7535\u8111\u51e0\u4e4e\u5f88\u96be\u8fd0\u884c\u8d77\u6765\uff0c\u800c\u4e14\u8d44\u6e90\u5360\u7528\u5f88\u5938\u5f20\u3002"),(0,l.kt)("p",{parentName:"div"},"\u5efa\u8bae\u6709\u6761\u4ef6\u7684\u5f04\u4e00\u53f0 Linux \u53f0\u5f0f\u673a\uff0c12c\u300132G\u3001500G SSD\uff0c\u7f16\u8bd1\u3001Debug\u3001\u5f00\u53d1\u6548\u7387\u90fd\u4f1a\u6781\u5927\u63d0\u5347\u3002"),(0,l.kt)("p",{parentName:"div"},"\u6211\u7684\u70c2 Mac Book Pro \u672c\u5730\u7f16\u8bd1 MySQL \u82b1\u8d39\u6570\u5c0f\u65f6\u3002\u3002\u3002"),(0,l.kt)("p",{parentName:"div"},"\u4f46\u662f\uff0c\u672c\u5730\u7f16\u8bd1 Neon(PG Serverless) \u5f88\u5feb\u3002\u3002\u3002"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mysql/mysql-server"},"MySQL \u6e90\u7801 Github")," \u4e0a\u4f1a\u6709\u5b9e\u65f6\u955c\u50cf\uff0c\u6211\u9009\u62e9\u7684\u5c31\u662f github \u6e90\uff0c\u672c\u5730\u8fdb\u884c\u6784\u5efa\uff0c\u9ed8\u8ba4\u5206\u652f\u662f trunk\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u4e2a\u4eba\u5854\u5f0f\u5de5\u4f5c\u7ad9\uff0c\u6302\u6389\u4e86\uff0c\u95ee\u4e86\u4e00\u5708\uff0c\u5e38\u89c4\u4fee\u7535\u8111\u7684\u6ca1\u6cd5\u4fee\u5854\u5f0f\u670d\u52a1\u5668\uff0c\u65e0\u6cd5\u542f\u52a8\uff0c\u8ba9\u6211\u53bb\u4e2d\u5173\u6751\u4fee\uff0c\u6240\u4ee5\u5c31\u6401\u7f6e\u4e86\u3002")),(0,l.kt)("p",null,"MidTao \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 github \u9879\u76ee\uff0c\u672a\u6765\u76f8\u5173\u8fd9\u4e9b\u73af\u5883\u4f1a\u63d0\u4f9b Dockerfile \u4ee5\u53ca DockerHub \u76f4\u63a5\u83b7\u53d6 Image\uff0c\u65b9\u4fbf\u5feb\u901f\u5b66\u4e60\u3002"),(0,l.kt)("h2",{id:"-\u5feb\u901f\u94fe\u63a5"},"\ud83d\ude80 \u5feb\u901f\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/xmidtao"},"MidTao")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mysql/mysql-server"},"MySQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/"},"MySQL\u5b98\u7f51"))))}s.isMDXComponent=!0}}]);