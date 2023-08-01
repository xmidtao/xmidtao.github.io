"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[7546],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1830:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={id:"methods",title:"Methods",sidebar_label:"Methods",slug:"/core/collection/selector/methods"},c=void 0,d={unversionedId:"packages/core/api/collection/selector/methods",id:"packages/core/api/collection/selector/methods",title:"Methods",description:"Here are valuable methods of the Selector Class listed,",source:"@site/docs/packages/core/api/collection/selector/Methods.md",sourceDirName:"packages/core/api/collection/selector",slug:"/core/collection/selector/methods",permalink:"/docs/core/collection/selector/methods",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/packages/core/api/collection/selector/Methods.md",tags:[],version:"current",lastUpdatedAt:1690869614,formattedLastUpdatedAt:"8/1/2023",frontMatter:{id:"methods",title:"Methods",sidebar_label:"Methods",slug:"/core/collection/selector/methods"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/core/collection/selector"},next:{title:"Properties",permalink:"/docs/core/collection/selector/properties"}},s=[{value:"<code>select()</code>",id:"select",children:[{value:"\ud83d\udced Props",id:"-props",children:[],level:3},{value:"\ud83d\udcc4 Return",id:"-return",children:[],level:3}],level:2},{value:"<code>reselect()</code>",id:"reselect",children:[{value:"\ud83d\udced Props",id:"-props-1",children:[],level:3},{value:"\ud83d\udcc4 Return",id:"-return-1",children:[],level:3}],level:2},{value:"<code>unselect()</code>",id:"unselect",children:[{value:"\ud83d\udced Props",id:"-props-2",children:[],level:3},{value:"\ud83d\udcc4 Return",id:"-return-2",children:[],level:3}],level:2},{value:"<code>hasSelected()</code>",id:"hasselected",children:[{value:"\ud83d\udced Props",id:"-props-3",children:[],level:3},{value:"\ud83d\udcc4 Return",id:"-return-3",children:[],level:3}],level:2},{value:"<code>rebuild()</code>",id:"rebuild",children:[{value:"\ud83d\udcc4 Return",id:"-return-4",children:[],level:3}],level:2}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Here are valuable methods of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Selector Class")," listed,\nwhich aren't directly related to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,l.kt)("inlineCode",{parentName:"a"},"State Class")),"."),(0,l.kt)("p",{parentName:"div"},"The Selector is an extension of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,l.kt)("inlineCode",{parentName:"a"},"State Class")),"\nand offers the same methods as a normal State.\nThese State related methods aren't described in this Section.\nTo find out more about specific State methods,\ncheck out the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/state"},"State documentation"),"."))),(0,l.kt)("h2",{id:"select"},(0,l.kt)("inlineCode",{parentName:"h2"},"select()")),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"select()")," method we can update the current selected Item of the Selector."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"const MY_SELECTOR = MY_COLLECTION.createSelector(1);\nMY_SELECTOR.select(2);\nMY_SELECTOR.itemKey; // Returns '2'\nMY_SELECTOR.item; // Returns 'Item(2)'\n")),(0,l.kt)("h3",{id:"-props"},"\ud83d\udced Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"itemKey")),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Newly selected itemKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"config")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/interfaces#stateruntimejobconfig"},"StateRuntimeJobConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"-return"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Selector\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection/selector"},"Selector")," it was called on."),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"reselect"},(0,l.kt)("inlineCode",{parentName:"h2"},"reselect()")),(0,l.kt)("p",null,"Reselects the currently selected Item."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},"const MY_SELECTOR = MY_COLLECTION.createSelector(1);\nMY_SELECTOR.select(2);\n// Selection if Item 2 failed\nMY_SELECTOR.reselect();\nMY_SELECTOR.itemKey; // Returns '2'\nMY_SELECTOR.item; // Returns 'Item(2)'\n")),(0,l.kt)("p",null,"This might be helpful if the Selector failed to select the Item correctly before\nand therefore should try to select it again.\nYou can use the ",(0,l.kt)("a",{parentName:"p",href:"#hasselected"},"hasSelected()")," method to check\nwhether the 'selected' Item is selected correctly."),(0,l.kt)("h3",{id:"-props-1"},"\ud83d\udced Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"config")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/interfaces#stateruntimejobconfig"},"StateRuntimeJobConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"-return-1"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Selector\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection/selector"},"Selector")," it was called on."),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"unselect"},(0,l.kt)("inlineCode",{parentName:"h2"},"unselect()")),(0,l.kt)("p",null,"Unselects the currently selected Item."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},"const MY_SELECTOR = MY_COLLECTION.createSelector(1);\nMY_SELECTOR.itemKey; // Returns '1'\nMY_SELECTOR.item; // Returns 'Item(1)'\nMY_SELECTOR.unselect();\nMY_SELECTOR.itemKey; // Returns 'undefined'\nMY_SELECTOR.item; // Retruns 'undefined'\n")),(0,l.kt)("p",null,"Therefore, it sets the ",(0,l.kt)("inlineCode",{parentName:"p"},"itemKey")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"item")," property to ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),",\nsince the Selector no longer represents any Item."),(0,l.kt)("h3",{id:"-props-2"},"\ud83d\udced Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"config")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/interfaces#stateruntimejobconfig"},"StateRuntimeJobConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"-return-2"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Selector\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection/selector"},"Selector")," it was called on."),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"hasselected"},(0,l.kt)("inlineCode",{parentName:"h2"},"hasSelected()")),(0,l.kt)("p",null,"Checks whether the Selector represents a specific Item at the given ",(0,l.kt)("inlineCode",{parentName:"p"},"itemKey"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2,3}","{2,3}":!0},"const MY_SELECTOR = MY_COLLECTION.createSelector(1);\nMY_SELECTOR.hasSelected(2); // Returns 'false'\nMY_SELECTOR.hasSelected(1); // Returns 'true'\n")),(0,l.kt)("h3",{id:"-props-3"},"\ud83d\udced Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"itemKey")),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h3",{id:"-return-3"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"boolean\n")),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"rebuild"},(0,l.kt)("inlineCode",{parentName:"h2"},"rebuild()")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This method is mainly thought for the internal use."))),(0,l.kt)("p",null,"Rebuilds the Selector ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,l.kt)("h3",{id:"-return-4"},"\ud83d\udcc4 Return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"Selector\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/collection/selector"},"Selector")," it was called on."))}u.isMDXComponent=!0}}]);