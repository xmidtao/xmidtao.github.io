"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[793],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2221:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],c={id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/collection/selector/properties"},l=void 0,s={unversionedId:"packages/core/api/collection/selector/properties",id:"packages/core/api/collection/selector/properties",title:"Properties",description:"Here are valuable properties of the Selector Class listed,",source:"@site/docs/packages/core/api/collection/selector/Properties.md",sourceDirName:"packages/core/api/collection/selector",slug:"/core/collection/selector/properties",permalink:"/docs/core/collection/selector/properties",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/packages/core/api/collection/selector/Properties.md",tags:[],version:"current",lastUpdatedAt:1689181374,formattedLastUpdatedAt:"7/12/2023",frontMatter:{id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/collection/selector/properties"},sidebar:"docs",previous:{title:"Methods",permalink:"/docs/core/collection/selector/methods"},next:{title:"Introduction",permalink:"/docs/core/computed"}},p=[{value:"<code>item</code>",id:"item",children:[{value:"\ud83d\udcc4 Return",id:"-return",children:[],level:3}],level:2},{value:"<code>itemKey</code>",id:"itemkey",children:[{value:"\ud83d\udcc4 Return",id:"-return-1",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Here are valuable properties of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Selector Class")," listed,\nwhich aren't directly related to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,a.kt)("inlineCode",{parentName:"a"},"State Class")),"."),(0,a.kt)("p",{parentName:"div"},"The Selector is an extension of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,a.kt)("inlineCode",{parentName:"a"},"State Class")),"\nand offers the same properties as a normal State.\nThese State related properties aren't described in this Section.\nTo find out more about specific State properties,\ncheck out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/state"},"State documentation"),"."))),(0,a.kt)("h2",{id:"item"},(0,a.kt)("inlineCode",{parentName:"h2"},"item")),(0,a.kt)("p",null,"Returns the current selected Item."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"const MY_COLLECTION = createCollection({\n   initialData: [{id: 1, name: 'jeff'}, {id: 2, name: 'frank'}, {id: 5, name: 'hans'}]\n});\n\nconst MY_SELECTOR = MY_COLLECTION.select(1);\nMY_SELECTOR.item; // Returns 'Item(1)'\nMY_SELECTOR.value; // Returns '{id: 1, name: 'jeff'}'\n")),(0,a.kt)("h3",{id:"-return"},"\ud83d\udcc4 Return"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Item\n")),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"itemkey"},(0,a.kt)("inlineCode",{parentName:"h2"},"itemKey")),(0,a.kt)("p",null,"Returns the current ",(0,a.kt)("inlineCode",{parentName:"p"},"itemKey")," of the selected Item."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"const MY_COLLECTION = createCollection({\n   initialData: [{id: 1, name: 'jeff'}, {id: 2, name: 'frank'}, {id: 5, name: 'hans'}]\n});\n\nconst MY_SELECTOR = MY_COLLECTION.select(1);\nMY_SELECTOR.itemKey; // Returns '1'\n")),(0,a.kt)("h3",{id:"-return-1"},"\ud83d\udcc4 Return"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"string | number\n")))}d.isMDXComponent=!0}}]);