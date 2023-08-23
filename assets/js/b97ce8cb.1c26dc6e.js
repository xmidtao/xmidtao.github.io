"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[9098],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||s;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7754:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(3117),r=a(102),s=(a(7294),a(3905)),o=["components"],i={id:"persisting-data",title:"Persisting Data",sidebar_label:"Persisting Data",slug:"/core/persisting-data"},l=void 0,p={unversionedId:"packages/core/api/storage/persisting-data",id:"packages/core/api/storage/persisting-data",title:"Persisting Data",description:"It's common for applications to store data on the client browser.",source:"@site/docs/packages/core/api/storage/PersistingData.md",sourceDirName:"packages/core/api/storage",slug:"/core/persisting-data",permalink:"/docs/core/persisting-data",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/packages/core/api/storage/PersistingData.md",tags:[],version:"current",lastUpdatedAt:1692714783,formattedLastUpdatedAt:"8/22/2023",frontMatter:{id:"persisting-data",title:"Persisting Data",sidebar_label:"Persisting Data",slug:"/core/persisting-data"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/core/storage"},next:{title:"Integration",permalink:"/docs/core/integration"}},c=[{value:"\ud83d\udcbb Web",id:"-web",children:[],level:2},{value:"\ud83d\udcf1 Mobile",id:"-mobile",children:[],level:2},{value:"\ud83d\udd11 Local Storage Key",id:"-local-storage-key",children:[],level:2},{value:"\ud83d\udcbe <code>default</code> Storage",id:"-default-storage",children:[],level:2},{value:"\ud83d\udcdd Multiple Storages",id:"-multiple-storages",children:[],level:2},{value:"\ud83c\udf08 Migration",id:"-migration",children:[],level:2}],g={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"It's common for applications to store data on the client browser.\nAgileTs makes it pretty easy to achieve such goal."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"MY_STATE.persist({key: 'storage-key-here'});\n")),(0,s.kt)("p",null,"Besides ",(0,s.kt)("a",{parentName:"p",href:"/docs/core/state"},"States"),", we can persist nearly any ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction#agile-sub-instance"},"Agile Sub Instance"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/core/collection"},"Collections"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"MY_COLLECTION.persist({key: 'storage-key-here'});\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/core/collection/selector"},"Selectors"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"MY_SELECTOR.persist({key: 'storage-key-here'});\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/core/collection/group"},"Groups"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"MY_GROUP.persist({key: 'storage-key-here'});\n")))),(0,s.kt)("p",null,"Since many ",(0,s.kt)("a",{parentName:"p",href:"/docs/introduction#agile-sub-instance"},"Agile Sub Instance")," can be persisted,\nwe use ",(0,s.kt)("inlineCode",{parentName:"p"},"AgilePersistInstance")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"MY_INSTANCE")," as word placeholder for them."),(0,s.kt)("h2",{id:"-web"},"\ud83d\udcbb Web"),(0,s.kt)("p",null,"In a web environment, it is common to use the ",(0,s.kt)("a",{parentName:"p",href:"https://www.w3schools.com/html/html5_webstorage.asp"},"Local Storage")," to store values permanently.\nAgileTs has set up the Local Storage by default."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"const storageManager = createStorageManager({ localStorage: false });\nassignSharedStorageManager(storageManager);\n")),(0,s.kt)("p",null,"Therefore, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"persist()")," method out of the box."),(0,s.kt)("h2",{id:"-mobile"},"\ud83d\udcf1 Mobile"),(0,s.kt)("p",null,"Since the Local Storage doesn't exist in a mobile environment,\nwe have to resort to an alternative, such as the ",(0,s.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/asyncstorage"},"Async Storage"),".\nAgileTs hasn't set up the Async Storage by default.\nTherefore, we need to create a ",(0,s.kt)("a",{parentName:"p",href:"/docs/core/storage"},"Storage")," Interface representing the Async Storage\nand register it to AgileTs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3-9}","{3-9}":!0},'storageManager.registerStorage(\n  createStorage({\n    key: "AsyncStorage",\n    async: true,\n    methods: {\n      get: AsyncStorage.getItem,\n      set: AsyncStorage.setItem,\n      remove: AsyncStorage.removeItem,\n    },\n  }), {default: true} // Tells AgileTs that it is the default Storage\n);\n')),(0,s.kt)("h2",{id:"-local-storage-key"},"\ud83d\udd11 Local Storage Key"),(0,s.kt)("p",null,"Thus AgileTs can access and identify the stored value in the appropriate Storage,\nwe have to define a unique ",(0,s.kt)("inlineCode",{parentName:"p"},"storageKey"),".\nThere are several ways to provide such required ",(0,s.kt)("inlineCode",{parentName:"p"},"storageKey")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"persist()")," method."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"1.")," Assign a unique key to the AgilePersistInstance itself.\nBecause if no key is given to the ",(0,s.kt)("inlineCode",{parentName:"li"},"persist()")," method,\nit takes the AgilePersistInstance key as ",(0,s.kt)("inlineCode",{parentName:"li"},"storageKey"),".",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"MY_INSTANCE.key = \"myCoolKey\";\nMY_INSTANCE.persist(); // Success (storageKey = 'myCoolKey')\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"2.")," Pass the ",(0,s.kt)("inlineCode",{parentName:"li"},"storageKey")," directly into the ",(0,s.kt)("inlineCode",{parentName:"li"},"persist()")," method.",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"MY_INSTANCE.persist({key: \"myCoolPassedKey\"}); // Success (storageKey = 'myCoolPassedKey')\n")))),(0,s.kt)("p",null,"If AgileTs couldn't find any fitting ",(0,s.kt)("inlineCode",{parentName:"p"},"storageKey"),",\nit throws an error and doesn't persist the AgilePersistInstance ",(0,s.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"MY_INSTANCE.key = undefined;\nMY_INSTANCE.persist(); // Error\n")),(0,s.kt)("h2",{id:"-default-storage"},"\ud83d\udcbe ",(0,s.kt)("inlineCode",{parentName:"h2"},"default")," Storage"),(0,s.kt)("p",null,"In AgileTs we can register ",(0,s.kt)("inlineCode",{parentName:"p"},"multipe")," Storages. However only one of these Storages can be the ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," Storage.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," Storage is used by the ",(0,s.kt)("inlineCode",{parentName:"p"},"persist()")," method whenever no specific Storage is defined."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{1}","{1}":!0},"MY_INSTANCE.persist(); // persist in default Storage\nMY_INSTANCE.persist({\n  storageKeys: [\"storageA\"]\n}); // persist in Storage called 'storageA'\n")),(0,s.kt)("h2",{id:"-multiple-storages"},"\ud83d\udcdd Multiple Storages"),(0,s.kt)("p",null,"Sometimes we may store AgilePersistInstances in different Storages.\nFor example, ",(0,s.kt)("em",{parentName:"p"},"AgilePersistInstance A")," should be stored in ",(0,s.kt)("em",{parentName:"p"},"Storage B"),", and ",(0,s.kt)("em",{parentName:"p"},"AgilePersistInstance B")," should be stored in ",(0,s.kt)("em",{parentName:"p"},"Storage A"),".\nThen, we can define with ",(0,s.kt)("inlineCode",{parentName:"p"},"storageKeys")," in which specific Storage the AgilePersistInstance ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," should be persisted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},'MY_INSTANCE.persist({\n  storageKeys: ["myCustomStorage"]\n});\n')),(0,s.kt)("p",null,"By default, the AgilePersistInstance will be stored in the ",(0,s.kt)("a",{parentName:"p",href:"#-default-storage"},"default Storage"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"storageManager.config.defaultStorageKey; // Returns key of current default Storage\n")),(0,s.kt)("h2",{id:"-migration"},"\ud83c\udf08 Migration"),(0,s.kt)("p",null,"In rare cases it is necessary to format the State value\nbefore it is persisted in an external Storage and migrated back later.\nWhen working with the ",(0,s.kt)("inlineCode",{parentName:"p"},"Date")," class such formatting is required,\nsince a javascript class can't be persisted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_STATE = createState(\n    {\n      // ..\n      birthday: new Date('08.10.202')\n    }\n    ).persist(\n        {\n          key: 'jeff', \n          onSave: (value) => {\n              value.date = value.date.getTime()\n              return value;\n          },\n          onMigrate: (value) => {\n              value.date = new Date(value.date);\n              return value\n          }\n        }\n    );\n")))}u.isMDXComponent=!0}}]);