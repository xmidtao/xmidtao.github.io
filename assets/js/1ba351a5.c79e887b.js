"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[4570],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8096:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={id:"introduction",title:"Computed",sidebar_label:"Introduction",slug:"/core/computed"},s=void 0,d={unversionedId:"packages/core/api/computed/introduction",id:"packages/core/api/computed/introduction",title:"Computed",description:"A Computed is an extension of the State Class that computes",source:"@site/docs/packages/core/api/computed/Introduction.md",sourceDirName:"packages/core/api/computed",slug:"/core/computed",permalink:"/docs/core/computed",editUrl:"https://github.com/xmidtao/documentation/tree/develop/docs/packages/core/api/computed/Introduction.md",tags:[],version:"current",lastUpdatedAt:1689143748,formattedLastUpdatedAt:"7/12/2023",frontMatter:{id:"introduction",title:"Computed",sidebar_label:"Introduction",slug:"/core/computed"},sidebar:"docs",previous:{title:"Properties",permalink:"/docs/core/collection/selector/properties"},next:{title:"Methods",permalink:"/docs/core/computed/methods"}},p=[{value:"\ud83d\udd28 Use case",id:"-use-case",children:[],level:2},{value:"\u26f3\ufe0f Sandbox",id:"\ufe0f-sandbox",children:[],level:2},{value:"\ud83d\udced Props",id:"-props",children:[{value:"<code>computedFunction</code>",id:"computedfunction",children:[],level:3},{value:"<code>deps</code>",id:"deps",children:[],level:3}],level:2},{value:"<code>config</code>",id:"config",children:[{value:"<code>key</code>",id:"key",children:[],level:4},{value:"<code>dependents</code>",id:"dependents",children:[],level:4},{value:"<code>isPlaceholder</code>",id:"isplaceholder",children:[],level:4}],level:2},{value:"\ud83d\udfe6 Typescript",id:"-typescript",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed")," is an extension of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state#-light-state"},(0,o.kt)("inlineCode",{parentName:"a"},"State Class"))," that computes\nits value from a specified function.\nComputed States are a powerful concept,\nthat lets us build dynamic data depending on other data.\nTo avoid unnecessary recomputations,\nthe Computed Class caches the computed value\nand recomputes it only when an actual dependency has changed.\nAll you need to do to instantiate a Computed State,\nis to call ",(0,o.kt)("inlineCode",{parentName:"p"},"createComputed()")," and specify a compute function\nwhich computes the value for the Computed Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = createComputed(() => {\n    return `My name is '${MY_NAME.value}' and I am ${MY_AGE.value} years old.`;\n});\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed")," magically tracks used dependencies\n(such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},"States")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/collection"},"Collections"),")\nand automatically recomputes when one of its dependencies updates.\nIn the above code snippet, it would, for example, recompute\nwhen the current value of ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_NAME")," changes from 'jeff' to 'hans'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old\"\nMY_NAME.set('hans');\nMY_COMPUTED.value; // Returns \"My name is 'hans' and I am 10 years old\"\n")),(0,o.kt)("p",null,"However, in some cases the automatic detection of dependencies doesn't work correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = createComputed(async () => {\n    const age = await getAge(MY_NAME.value);\n    return `My name is '${MY_NAME.value}' and I am ${age} years old.`;\n}); // \u274c Doesn't recompute when 'MY_NAME' updates\n")),(0,o.kt)("p",null,"For example, that is the case when the compute method is ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old\"\nMY_NAME.set('hans');\nMY_COMPUTED.value; // \u274c Returns \"My name is 'jeff' and I am 10 years old\"\n")),(0,o.kt)("p",null,"In order to solve this problem\nwe need to manually tell the Computed Class which dependencies it depends on.\nWe can give these ",(0,o.kt)("inlineCode",{parentName:"p"},"hard-coded")," dependencies to the Computed Class as a second argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = createComputed(async () => {\n    const age = await getAge(MY_NAME.value);\n    return `My name is '${MY_NAME.value}' and I am ${age} years old.`;\n}, [MY_NAME]); // \u2705 Does recompute when 'MY_NAME' updates\n\nMY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old\"\nMY_NAME.set('hans');\nMY_COMPUTED.value; // \u2705 Returns \"My name is 'hans' and I am 10 years old\"\n")),(0,o.kt)("h2",{id:"-use-case"},"\ud83d\udd28 Use case"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed State")," is useful whenever we need a State that is computed depending on other States."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const IS_AUTHENTICATED = createComputed(() => {\n    return TOKEN.exists && USER_ID.exists && EXPIRATION_TIME.value > 0;\n});\n")),(0,o.kt)("p",null,"This is the case for our ",(0,o.kt)("inlineCode",{parentName:"p"},"IS_AUTHENTICATED")," State, which depends on several other States\ndetermining whether the current user is authenticated or not.\nThese include the ",(0,o.kt)("inlineCode",{parentName:"p"},"TOKEN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CURRENT_USER")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPIRATION_TIME"),".\nIf, for instance, the ",(0,o.kt)("inlineCode",{parentName:"p"},"USER_ID")," value changes,\nthe Computed Class will recompute the ",(0,o.kt)("inlineCode",{parentName:"p"},"IS_AUTHENTICATED")," state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"IS_AUTHENTICATE.value; // Returns 'true'\nUSER_ID.set(undefined);\nIS_AUTHENTICATE.value; // Returns 'false'\n")),(0,o.kt)("h2",{id:"\ufe0f-sandbox"},"\u26f3\ufe0f Sandbox"),(0,o.kt)("p",null,"Test the Computed Class yourself. It's only one click away. Just select your preferred Framework below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/agilets-first-computed-kisgr"},"React")),(0,o.kt)("li",{parentName:"ul"},"Vue (no example yet :/)")),(0,o.kt)("h2",{id:"-props"},"\ud83d\udced Props"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"new Computed(agileInstance, config);\n// or\ncreateComputed(computedFunction, deps);\n// or\ncreateComputed(computedFunction, config);\n")),(0,o.kt)("h3",{id:"computedfunction"},(0,o.kt)("inlineCode",{parentName:"h3"},"computedFunction")),(0,o.kt)("p",null,"Method used to compute the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," of the Computed Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"const MY_COMPUTED = createComputed(() => 1 + 1);\nMY_COMPUTED.value; // Returns '2'\n")),(0,o.kt)("p",null,"This function will be called on each dependency mutation.\nDependencies can for example be ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},"States")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/collection"},"Collections"),".\nIn the above code snippet ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_COMPUTED")," is independent,\nbut in the blow example it depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"CURRENT_USER_ID")," State and ",(0,o.kt)("inlineCode",{parentName:"p"},"USERS")," Collection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = createComputed(() => {\n    const user = USERS.getItemValue(CURRENT_USER_ID.value);\n    return `My name is '${user?.name} and I am ${user?.age} years old.`;\n});\nMY_COMPUTED.value; // Returns \"My name is 'hans' and I am 10 years old.\"\nUSERS.update(CURRENT_USER_ID.value, {name: 'jeff'})\nMY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old.\" \n")),(0,o.kt)("h3",{id:"deps"},(0,o.kt)("inlineCode",{parentName:"h3"},"deps")),(0,o.kt)("p",null,"In order not to rely 100% on the automatic detection of dependencies,\nwe can pass an optional array of hard coded dependencies into the Computed Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3}","{3}":!0},"const MY_COMPUTED = createComputed(() => {\n    return `My name is '${MY_NAME.value}' and I am ${MY_AGE.value} years old.`;\n}, [MY_NAME, MY_AGE]);\nMY_COMPUTED.value; // Returns \"My name is 'hans' and I am 10 years old.\" \nMY_NAME.set('jeff');\nMY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old.\"\n")),(0,o.kt)("p",null,"In most cases, it isn't necessary to provide any hard-coded dependency.\nHowever, it might occur that the Computed Class fails to autodetect a particular dependency.\nYou can check if all dependencies got correctly noticed by giving each used ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction#agile-sub-instance"},"Agile Sub Instance")," a unique key\nand reviewing the ",(0,o.kt)("inlineCode",{parentName:"p"},"deps")," array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COMPUTED.deps; // Returns '[Observer('myName'), Observer('myAge')]'\n")),(0,o.kt)("h2",{id:"config"},(0,o.kt)("inlineCode",{parentName:"h2"},"config")),(0,o.kt)("p",null,"Beside the computed function and deps array a ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed")," takes an optional configuration object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'createComputed(() => {}, {\n    key: "myKey",\n    dependents: [MY_STATE_2]\n});\n')),(0,o.kt)("p",null,"Here is a Typescript Interface for quick reference. However,\neach property is explained in more detail below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export interface StateConfigInterface {\n    key?: StateKey;\n    dependents?: Array<Observer>;\n    isPlaceholder?: boolean;\n}\n")),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"key"},(0,o.kt)("inlineCode",{parentName:"h4"},"key")),(0,o.kt)("p",null,"The optional property ",(0,o.kt)("inlineCode",{parentName:"p"},"key/name")," should be a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"string/number")," to identify the Computed later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'createComputed(() => {}, {\n    key: "myKey"\n});\n')),(0,o.kt)("p",null,"We recommend giving each Computed a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," since it has only advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"helps us during debug sessions"),(0,o.kt)("li",{parentName:"ul"},"makes it easier to identify the Computed"),(0,o.kt)("li",{parentName:"ul"},"no need for separate persist Key")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string \\| number")),(0,o.kt)("td",{parentName:"tr",align:null},"undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"dependents"},(0,o.kt)("inlineCode",{parentName:"h4"},"dependents")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This property is mainly thought for the internal use."))),(0,o.kt)("p",null,"Specifies which States depend on this Computed Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"createComputed(() => {}, {\n    dependents: [MY_STATE_2]\n});\n")),(0,o.kt)("p",null,"So if this Computed Class mutes and is ingested into the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime"),",\nthe depending States are ingested into the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime")," too."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Array<Observer>")),(0,o.kt)("td",{parentName:"tr",align:null},"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"isplaceholder"},(0,o.kt)("inlineCode",{parentName:"h4"},"isPlaceholder")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This property is mainly thought for the internal use."))),(0,o.kt)("p",null,"Defines whether the Computed is a ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = createComputed(() => {}, {\n    isPlaceholder: true\n});\n\nMY_COMPUTED.exists(); // false\n")),(0,o.kt)("p",null,"Computed Classes are, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"placeholder")," when AgileTs needs to hold a reference to them,\neven though they aren't instantiated yet."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h2",{id:"-typescript"},"\ud83d\udfe6 Typescript"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed Class")," is almost 100% typesafe and takes an optional generic type for type safety of its ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"const MY_COMPUTED = createComputed<string>(() => {\n    return 'Now Compute Function has to return String!';\n});\n")))}c.isMDXComponent=!0}}]);