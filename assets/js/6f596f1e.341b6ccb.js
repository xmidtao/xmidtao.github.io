"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[6663],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},364:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/api"},l=void 0,p={unversionedId:"packages/api/introduction",id:"packages/api/introduction",title:"Introduction",description:"WIP Package!",source:"@site/docs/packages/api/Introduction.md",sourceDirName:"packages/api",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/xmidtao/documentation/tree/develop/docs/packages/api/Introduction.md",tags:[],version:"current",lastUpdatedAt:1689143748,formattedLastUpdatedAt:"7/12/2023",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/api"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/logger/installation"},next:{title:"Installation",permalink:"/docs/api/installation"}},c=[{value:"\u2753 <code>api</code>",id:"-api",children:[{value:"\u23f0 Short Example",id:"-short-example",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{href:"https://github.com/agile-ts/agile"},(0,o.kt)("img",{src:"https://img.shields.io/github/license/agile-ts/agile.svg?label=license&style=flat&colorA=293140&colorB=4a4872",alt:"GitHub License"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/api"},(0,o.kt)("img",{src:"https://img.shields.io/npm/v/@agile-ts/api.svg?label=npm&style=flat&colorA=293140&colorB=4a4872",alt:"npm version"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/api"},(0,o.kt)("img",{src:"https://img.shields.io/bundlephobia/minzip/@agile-ts/api.svg?label=minified%20size&style=flat&colorA=293140&colorB=4a4872",alt:"npm minified size"})),(0,o.kt)("a",{href:"https://npm.im/@agile-ts/api"},(0,o.kt)("img",{src:"https://img.shields.io/npm/dt/@agile-ts/api.svg?label=downloads&style=flat&colorA=293140&colorB=4a4872",alt:"npm total downloads"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"WIP Package!"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Promise based HTTP request API")),(0,o.kt)("h2",{id:"-api"},"\u2753 ",(0,o.kt)("inlineCode",{parentName:"h2"},"api")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," package is a Promise based HTTP/s request API, with a simple syntax."),(0,o.kt)("h3",{id:"-short-example"},"\u23f0 Short Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Let't create our API\nconst api = new API({\n  baseURL: 'https://myapp.com', // Base Route to the Host\n  timeout: 10000, // After which amount of time a request times out\n  options: { credentials: 'include' } // Http/s Request Options from type RequestInit\n});\n\n// Now we can create our first Request to 'https://myapp.com/hello'\nconst response = await api.get('/hello');\nconsole.log(response);\n/* \n  {\n      data: {hello: \"Jeff\"}; // Response Data\n      timedout: false; // If Request has timedout\n      status: 200; // Response Status Code\n      raw: Response; // Raw Response from type Response\n      type: \"application/json\"; // Response Type\n  }\n*/\n")))}d.isMDXComponent=!0}}]);