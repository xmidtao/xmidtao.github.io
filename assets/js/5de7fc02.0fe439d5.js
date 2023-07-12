"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[7622],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8028:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),o=["components"],c={id:"introduction",title:"Selector",sidebar_label:"Introduction",slug:"/core/collection/selector"},i=void 0,s={unversionedId:"packages/core/api/collection/selector/introduction",id:"packages/core/api/collection/selector/introduction",title:"Selector",description:"A Selector selects a single Item from a Collection by its item key.",source:"@site/docs/packages/core/api/collection/selector/Introduction.md",sourceDirName:"packages/core/api/collection/selector",slug:"/core/collection/selector",permalink:"/docs/core/collection/selector",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/packages/core/api/collection/selector/Introduction.md",tags:[],version:"current",lastUpdatedAt:1689181374,formattedLastUpdatedAt:"7/12/2023",frontMatter:{id:"introduction",title:"Selector",sidebar_label:"Introduction",slug:"/core/collection/selector"},sidebar:"docs",previous:{title:"Properties",permalink:"/docs/core/collection/group/properties"},next:{title:"Methods",permalink:"/docs/core/collection/selector/methods"}},p=[{value:"\ud83d\udd28 Use case",id:"-use-case",children:[],level:2},{value:"\u26f3\ufe0f Sandbox",id:"\ufe0f-sandbox",children:[],level:2},{value:"\ud83d\udced Props",id:"-props",children:[{value:"<code>itemKey</code>",id:"itemkey",children:[],level:3},{value:"<code>config</code>",id:"config",children:[{value:"<code>key</code>",id:"key",children:[],level:4},{value:"<code>isPlaceholder</code>",id:"isplaceholder",children:[],level:4}],level:3}],level:2},{value:"\ud83d\udfe6 Typescript",id:"-typescript",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector")," selects a single ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/collection#-item"},"Item")," from a Collection by its ",(0,r.kt)("inlineCode",{parentName:"p"},"item key"),'.\nIt can be mutated dynamically and always remains in sync with the Collection.\nUi-Components that only need one piece of data from a Collection, such as the "current user"\nwould benefit from using Selectors.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Select a specific User from the USERS Collection\nconst CURRENT_USER = USERS.select(loggedInUserId);\n\n// Update the 'name' property of the CURRENT_USER,\n// which is automatically synchronized with the Collection\nCURRENT_USER.patch({name: 'jeff'});\n")),(0,r.kt)("p",null,"We instantiate a Selector with the help of an existing ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/collection"},"Collection"),".\nBy doing so, the Selector is automatically bound to the Collection it was created from\nand has access to its data.\nA Selector can be created during the creation of a Collection in the configuration object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},"const MY_COLLECTION = new Collection((collection) =>({\n    selectors: {\n        selectorName: collection.Selector('item1')\n    }\n}));\n")),(0,r.kt)("p",null,"Or dynamically, after the Collection has been instantiated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createSelector("selectorName", /*to select Item Key*/);\n//or\nMY_COLLECTION.select(/*to select Item Key*/);\n')),(0,r.kt)("p",null,"We can add any number of Selectors to the Collection,\nand the Collection won't lose its redundancy.\nThis is because a Selector only caches the Item value based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"item key")," it represents,\nto avoid unnecessary recomputations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MY_SELECTOR.value; // Cached Item value\nMY_SELECTOR.itemKey; // Item Key the Selector represents\n")),(0,r.kt)("p",null,"Sometimes we need to select Items that might not exist yet.\nIf you try to select an ",(0,r.kt)("inlineCode",{parentName:"p"},"item key")," that doesn't exist in the Collection,\nthe Selector will return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),".\nHowever once the corresponding data is collected under that ",(0,r.kt)("inlineCode",{parentName:"p"},"item key"),",\nthe Selector will update seamlessly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Select not existing Item\nconst MY_SELECTOR = MY_COLLECTION.createSelector('id0');\nconsole.log(MY_SELECTOR.value); // Returns 'null'\n\n// Collect selected Item\nMY_COLLECTION.collect({id: 'id0', name: 'jeff'});\nconsole.log(MY_SELECTOR.value); // Returns '{id: 'id0', name: 'jeff'}'\n")),(0,r.kt)("p",null,"A Selector is an extension of the ",(0,r.kt)("inlineCode",{parentName:"p"},"State Class"),"\nand offers the same powerful functionalities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Undo latest Selector value change\nMY_SELECTOR.undo();\n\n// Permanently store Selector value in an external Storage\nMY_SELECTOR.persist(); \n")),(0,r.kt)("p",null,"With these extended State functionalities,\nwe can easily mutate the Selector value.\nThe changes we make to the Selector value are automatically applied to the Collection\nto keep them synchronized."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Add data with the item key '1' to the Collection\nMY_COLLECTION.collect({id: 1, name: 'hans'});\n\n// Select the Item with the item key '1'\nconst MY_SELECTOR = MY_COLLECTION.createSelector(1);\n\n// Update the Selector value\nMY_SELECTOR.patch({name: \"jeff\"});\n\n// Check if the Item value was updated correctly\nMY_COLLECTION.getItem(1)?.value; // Returns '{id: 1, name: 'jeff'}'\n")),(0,r.kt)("p",null,"Of course, this also works the other way around.\nMeaning if you update the value of the Item that the Selector represents,\nthe value changes are applied to the Selector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Update the Item value\nMY_COLLECTION.getItem(1)?.patch({name: \"frank\"});\n\n// Check if the Selector value was updated correctly\nMY_SELECTOR.value; // Returns '{id: 1, name: 'frank'}'\n")),(0,r.kt)("p",null,"Besides, updating the Selector value,\nwe can also entirely change the Item which the Selector represents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_SELECTOR = MY_COLLECTION.createSelector(1);  // Has Item 2 selected\nMY_SELECTOR.select(2); // Has now Item 1 selected\n")),(0,r.kt)("p",null,"Want to learn more about the Selector's specific methods?\nCheck out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/collection/selector/methods"},"Selector Methods")," documentation.\nMost methods we use to modify, mutate and access the Selector are chainable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MY_SELECTOR.select(1).persist().undo();\n")),(0,r.kt)("h2",{id:"-use-case"},"\ud83d\udd28 Use case"),(0,r.kt)("p",null,"For instance, we can use a Selector to select the current logged-in User from a User Collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const CURRENT_USER = USERS.select(/* current logged-in userId */);\n")),(0,r.kt)("p",null,"If the currently logged-in user logs out and logs in with another user account,\nwe can easily update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," (User) that the Selector represents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"CURRENT_USER.select(/* another userId */);\n")),(0,r.kt)("h2",{id:"\ufe0f-sandbox"},"\u26f3\ufe0f Sandbox"),(0,r.kt)("p",null,"Test the Selector yourself. It's only one click away. Just select your preferred Framework below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/agilets-first-selector-rmrxf"},"React"))),(0,r.kt)("h2",{id:"-props"},"\ud83d\udced Props"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COLLECTION.createSelector(itemKey, config);\n")),(0,r.kt)("h3",{id:"itemkey"},(0,r.kt)("inlineCode",{parentName:"h3"},"itemKey")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"itemKey")," of the Item the Selector represents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"MY_COLLECTION.collect({id: 1, name: 'hans'});\nconst MY_SELECTOR = MY_COLLECTION.select(1);\nMY_SELECTOR.value; // Returns '{id: 1, name: 'hans'}'\n")),(0,r.kt)("h3",{id:"config"},(0,r.kt)("inlineCode",{parentName:"h3"},"config")),(0,r.kt)("p",null,"Beside the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"itemKey")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector")," takes an optional configuration object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createSelector(1, {\n    key: "mySelector",\n});\n')),(0,r.kt)("p",null,"Here is a Typescript Interface for quick reference. However,\neach property is explained in more detail below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface SelectorConfigInterface {\n    key?: SelectorKey;\n    isPlaceholder?: boolean;\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"key"},(0,r.kt)("inlineCode",{parentName:"h4"},"key")),(0,r.kt)("p",null,"The optional property ",(0,r.kt)("inlineCode",{parentName:"p"},"key/name")," should be a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"string/number")," to identify the Selector later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.createSelector(1, {\n    key: "myKey"\n});\n')),(0,r.kt)("p",null,"We recommend giving each Selector a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," since it has only advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"helps us during debug sessions"),(0,r.kt)("li",{parentName:"ul"},"makes it easier to identify the Selector"),(0,r.kt)("li",{parentName:"ul"},"no need for separate persist Key")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string \\| number")),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"isplaceholder"},(0,r.kt)("inlineCode",{parentName:"h4"},"isPlaceholder")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This property is mainly thought for internal use."))),(0,r.kt)("p",null,"Defines whether the Selector is a ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_SELECTOR = MY_COLLECTION.createSelector(1, {\n    isPlaceholder: true\n});\n\nMY_SELECTOR.exists(); // false\n")),(0,r.kt)("p",null,"Selectors are ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholder")," when AgileTs needs to hold a reference to them,\neven though they aren't instantiated yet.\nThis can be the case if we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getSelectorWithReference()")," method,\nwhich returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholder")," Selector if the Selector we are looking for doesn't exist yet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const mySeleector = useAgile(MY_COLLECTION.getSelectorWithReference("selector1")); // Causes rerender if Selector got created\nconst mySeleector2 = useAgile(MY_COLLECTION.getSelector("selector2")); // Doesn\'t causes rerender if Selector got created\n')),(0,r.kt)("p",null,"This reference is essential to rerender the Component,\nwhenever the Selector got instantiated."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"-typescript"},"\ud83d\udfe6 Typescript"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector Class")," is almost 100% typesafe."))}u.isMDXComponent=!0}}]);