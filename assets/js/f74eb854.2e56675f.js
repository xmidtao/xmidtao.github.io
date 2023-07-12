"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[2197],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||s[p]||a;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6069:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return g},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],c={id:"debugging",title:"Debugging",sidebar_label:"Debugging",slug:"/core/guides/debugging"},l=void 0,u={unversionedId:"packages/core/guides/debugging",id:"packages/core/guides/debugging",title:"Debugging",description:"WIP documentation!",source:"@site/docs/packages/core/guides/Debugging.md",sourceDirName:"packages/core/guides",slug:"/core/guides/debugging",permalink:"/docs/core/guides/debugging",editUrl:"https://github.com/xmidtao/documentation/tree/develop/docs/packages/core/guides/Debugging.md",tags:[],version:"current",lastUpdatedAt:1689143748,formattedLastUpdatedAt:"7/12/2023",frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging",slug:"/core/guides/debugging"},sidebar:"docs",previous:{title:"Typescript",permalink:"/docs/core/guides/typescript"},next:{title:"Testing",permalink:"/docs/core/guides/testing"}},g=[{value:"Using <code>globalThis</code>",id:"using-globalthis",children:[],level:2}],s={toc:g};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"WIP documentation!"))),(0,a.kt)("h2",{id:"using-globalthis"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"globalThis")),(0,a.kt)("p",null,"AgileTs has current no ",(0,a.kt)("inlineCode",{parentName:"p"},"devtools"),".\nHowever, to get a basic debugging functionality you can bind your States globally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {globalBind} from '@agile-ts/core';\n\nconst MY_NAME = createState('jeff');\nconst MY_AGE = createState(0);\n\nglobalBind('__core__', {MY_NAME, MY_AGE});\n")),(0,a.kt)("p",null,"Thus, you can inspect them in the browser ",(0,a.kt)("inlineCode",{parentName:"p"},"console")," by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"__core__.MY_STATE\n")),(0,a.kt)("p",null,"However, there are some problems with this variant of debugging:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don't forget to take the States from the global scope in ",(0,a.kt)("inlineCode",{parentName:"li"},"production")),(0,a.kt)("li",{parentName:"ul"},"each debugged State has the same internal reference.\nSo for example, if you debug (print/log) the ",(0,a.kt)("inlineCode",{parentName:"li"},"State x")," and then change the ",(0,a.kt)("inlineCode",{parentName:"li"},"State x")," and debug it again,\nthe first debugged ",(0,a.kt)("inlineCode",{parentName:"li"},"State x")," is the same as the second debugged ",(0,a.kt)("inlineCode",{parentName:"li"},"State x"))))}d.isMDXComponent=!0}}]);