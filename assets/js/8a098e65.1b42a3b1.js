"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[6551],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1623:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"typescript",title:"TypeScript",sidebar_label:"Typescript",slug:"/core/guides/typescript"},c=void 0,p={unversionedId:"packages/core/guides/typescript",id:"packages/core/guides/typescript",title:"TypeScript",description:"WIP documentation!",source:"@site/docs/packages/core/guides/Typescript.md",sourceDirName:"packages/core/guides",slug:"/core/guides/typescript",permalink:"/docs/core/guides/typescript",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/packages/core/guides/Typescript.md",tags:[],version:"current",lastUpdatedAt:1690869614,formattedLastUpdatedAt:"8/1/2023",frontMatter:{id:"typescript",title:"TypeScript",sidebar_label:"Typescript",slug:"/core/guides/typescript"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/core/installation"},next:{title:"Debugging",permalink:"/docs/core/guides/debugging"}},l=[{value:"States are type inferred",id:"states-are-type-inferred",children:[],level:3},{value:"States can be explicitly typed",id:"states-can-be-explicitly-typed",children:[],level:3},{value:"React <code>useAgile</code> is typed based on State types",id:"react-useagile-is-typed-based-on-state-types",children:[],level:3},{value:"Computed States are type inferred",id:"computed-states-are-type-inferred",children:[],level:3},{value:"Computed States can be explicitly typed",id:"computed-states-can-be-explicitly-typed",children:[],level:3},{value:"Problem with async Computed States",id:"problem-with-async-computed-states",children:[],level:3}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"WIP documentation!"))),(0,i.kt)("h3",{id:"states-are-type-inferred"},"States are type inferred"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const NUMBER = createState(0); // 'number' State\nconst STRING = createState('jeff'); // 'string' State\n")),(0,i.kt)("h3",{id:"states-can-be-explicitly-typed"},"States can be explicitly typed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const NUMBER = createState<number>(0); // 'number' State\nconst PERSON = createState<{id: number, name: 'jeff'} | null>(null); // '{id: number, name: 'jeff'} | null' State\n")),(0,i.kt)("h3",{id:"react-useagile-is-typed-based-on-state-types"},"[React]"," ",(0,i.kt)("inlineCode",{parentName:"h3"},"useAgile")," is typed based on State types"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// single State\nconst num = useAgile(NUMBER);\nconsole.log(typeof num); // Returns 'number'\n\n// or multiple State\nconst [str, person] = useAgile([STRING, PERSON]);\nconsole.log(typeof str); // Returns 'string'\n// person is of the type '{id: number, name: 'jeff'} | null'\n")),(0,i.kt)("h3",{id:"computed-states-are-type-inferred"},"Computed States are type inferred"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_INTRODUCTION = createComputed(() => {\n  return `My name is '${MY_NAME.value}' and I am ${MY_AGE.value} yeas old.`;\n}); // 'string' Computed State\n")),(0,i.kt)("h3",{id:"computed-states-can-be-explicitly-typed"},"Computed States can be explicitly typed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const IS_JEFF = createComputed<boolean>(() => {\n    return MY_NAME.is(\"jeff\");\n}); // 'boolean' Computed State\n")),(0,i.kt)("h3",{id:"problem-with-async-computed-states"},"Problem with async Computed States"),(0,i.kt)("p",null,"Since the Computed value is cached, an async Computed State isn't of the type Promise.\nInstead, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as long as the value hasn't been cached."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const ASYNC = createComputed(async () => {\n    // sleep x seconds\n    return 'async Computed';\n}); // 'string' Computed State [However it is null as long as no value is cached]\n\n// solution\nconst ASYNC = createComputed<strinng | null>(async () => {\n    // sleep x seconds\n    return 'async Computed';\n}); // 'string | null' Computed State \n")))}d.isMDXComponent=!0}}]);