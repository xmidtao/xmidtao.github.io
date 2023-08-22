"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[8759],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3117),r=n(7294),o=n(2389),i=n(944),l=n(6681),s=n(6010),u="tabItem_1uMI";function p(e){var t,n,o,p=e.lazy,c=e.block,d=e.defaultValue,m=e.values,h=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.Z)(),w=b.tabGroupChoices,T=b.setTabGroupChoices,N=(0,r.useState)(y),S=N[0],C=N[1],I=[],A=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=w[h];null!=x&&x!==S&&k.some((function(e){return e.value===x}))&&C(x)}var E=function(e){var t=e.currentTarget,n=I.indexOf(t),a=k[n].value;a!==S&&(A(t),C(a),null!=h&&T(h,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},g)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return I.push(e)},onKeyDown:O,onFocus:E,onClick:E},o,{className:(0,s.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},1370:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={id:"vue",title:"\u542f\u52a8",sidebar_label:"\u542f\u52a8",slug:"/quick-start/vue"},p=void 0,c={unversionedId:"quick_start/vue",id:"quick_start/vue",title:"\u542f\u52a8",description:"* TODO: \u5f85\u4fee\u6539\uff0c\u4fdd\u7559\u539f\u6709\u5185\u5bb9\uff0c\u5b66\u4e60\u6392\u7248\u53ca\u7528\u6cd5\u3002 *",source:"@site/docs/quick_start/Vue.md",sourceDirName:"quick_start",slug:"/quick-start/vue",permalink:"/docs/quick-start/vue",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/quick_start/Vue.md",tags:[],version:"current",lastUpdatedAt:1692714783,formattedLastUpdatedAt:"8/22/2023",frontMatter:{id:"vue",title:"\u542f\u52a8",sidebar_label:"\u542f\u52a8",slug:"/quick-start/vue"},sidebar:"docs",previous:{title:"\u7f16\u7a0b",permalink:"/docs/quick-start/code"},next:{title:"\u7b80\u4ecb",permalink:"/docs/algorithm/introduction"}},d=[{value:"\ud83d\udd3d Installation",id:"-installation",children:[{value:"\ud83d\udcc1 <code>@agile-ts/core</code>",id:"-agile-tscore",children:[],level:3},{value:"\ud83d\udcc2 <code>@agile-ts/vue</code>",id:"-agile-tsvue",children:[],level:3}],level:2},{value:"\ud83d\udca1 Create first State",id:"-create-first-state",children:[{value:"\u2753 What is a State",id:"-what-is-a-state",children:[],level:3},{value:"\ud83d\udc68\u200d\ud83d\udcbb Example",id:"example-1",children:[],level:3},{value:"\ud83d\udcbb Important Code Snippets",id:"important-code-snippets-1",children:[],level:3},{value:"\ud83d\ude31 Troubleshooting",id:"-troubleshooting",children:[{value:"Component doesn&#39;t re-render when State mutates.",id:"component-doesnt-re-render-when-state-mutates",children:[],level:4}],level:3}],level:2},{value:"\ud83d\udd0d Next Steps",id:"-next-steps",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"}," TODO: \u5f85\u4fee\u6539\uff0c\u4fdd\u7559\u539f\u6709\u5185\u5bb9\uff0c\u5b66\u4e60\u6392\u7248\u53ca\u7528\u6cd5\u3002 "))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Vue integration is currently ",(0,o.kt)("strong",{parentName:"p"},"'Work in Progress'"),"\nand hasn't yet been tested extensively!\nBut as far as I can tell, it works well, with some (Typescript) type limitations."))),(0,o.kt)("p",null,"Welcome to the ",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue")," quick start guide.\n",(0,o.kt)("strong",{parentName:"p"},"This tutorial will briefly introduce you to AgileTs\nand teach you how to use its fundamental functionalities in a Vue environment."),"\nBy the time you finish this guide, you will be able to start building your own AgileTs applications.\nWe recommend proceeding from top to bottom, as some parts of the tutorial build on each other."),(0,o.kt)("h2",{id:"-installation"},"\ud83d\udd3d Installation"),(0,o.kt)("p",null,"Let's start with the installation. If you haven't intended to install AgileTs yet,\nyou can skip the installation guide and jump straight into the '",(0,o.kt)("a",{parentName:"p",href:"#-create-first-state"},"Create first State"),"' tutorial."),(0,o.kt)("p",null,"In order to use AgileTs in a Vue Environment, we need to install two packages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#-agile-tscore"},(0,o.kt)("inlineCode",{parentName:"a"},"@agile-ts/core"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#-agile-tsvue"},(0,o.kt)("inlineCode",{parentName:"a"},"@agile-ts/vue")))),(0,o.kt)("h3",{id:"-agile-tscore"},"\ud83d\udcc1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"@agile-ts/core")),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @agile-ts/core \n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @agile-ts/core\n")))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/core"},(0,o.kt)("inlineCode",{parentName:"a"},"core"))," package contains the State Management Logic of AgileTs\nand therefore provides powerful classes like the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State Class")),"."),(0,o.kt)("h3",{id:"-agile-tsvue"},"\ud83d\udcc2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"@agile-ts/vue")),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @agile-ts/vue \n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @agile-ts/vue\n")))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/vue"},"Vue Integration"),", on the other hand,\nis an interface to Vue and provides useful functionalities\nsuch as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/vue#bindagileinstances"},(0,o.kt)("inlineCode",{parentName:"a"},"bindAgileInstances()")),") method\nto bind States to Vue Components for reactivity."),(0,o.kt)("h2",{id:"-create-first-state"},"\ud83d\udca1 Create first State"),(0,o.kt)("p",null,"After we have successfully set up a project with AgileTs installed,\nwe can start creating our first AgileTs State.\nBut first things first, what is a State in AgileTs?"),(0,o.kt)("h3",{id:"-what-is-a-state"},"\u2753 What is a State"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," represents a piece of Information that we need to remember globally at a later point in time.\nSuch information can be the current theme or the logged-in user,\nwhich we have to access in multiple React Components.\nAll we need to instantiate a State, is to call ",(0,o.kt)("inlineCode",{parentName:"p"},"createState()")," and specify an initial value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const MY_FIRST_STATE = createState("Hello World");\n')),(0,o.kt)("p",null,"Now that we have instantiated our first State,\nwe can dynamically and easily manipulate its value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Update State value to \'Hello There\'\nMY_FIRST_STATE.set("Hello There");\n\n// Undo latest change (-> Value is now "Hello World" again)\nMY_FIRST_STATE.undo();\n\n// Permanently store State value in an external Storage\nMY_FIRST_STATE.persist();\n')),(0,o.kt)("h3",{id:"example-1"},"\ud83d\udc68\u200d\ud83d\udcbb Example"),(0,o.kt)("p",null,"To get a better understanding of how to use an Agile State in Vue,\nwe should view it in an example.\nThe sample project we'll look at is a small counter\nthat lets us increment a number as we click the 'Update State' button.\nIt may not be fascinating, but it shows all the essential pieces of a Vue + AgileTs application in action.\nAfter checking out the example,\nwe recommend taking a look at the ",(0,o.kt)("a",{parentName:"p",href:"#important-code-snippets-1"},"Important Code Snippets Section")," below.\nThere important code snippets related to AgileTs are described in more detail.\nIn case you have any further questions,\ndon't hesitate to join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/T9GzreAwPH"},"Community Discord"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// -- core.js ------------------------------------------------\n\n// 1\ufe0f\u20e3 Create State with the initial value \"Hello World\"\nconst MY_FIRST_STATE = createState(\"Hello World\");\n\n// -- RandomComponent.vue ------------------------------------------------\n\n<template>\n    <div>\n        \x3c!-- 3\ufe0f\u20e3 Access State value in the 'sharedState' property --\x3e\n        <p>{{sharedState.myFirstState}}</p>\n        <button @click='updateHelloWorld'>Update State</button>\n    </div>\n</template>\n\n<script>\n    const helloWorldCount = 0;\n    \n    export default {\n      data: function() {\n        return {\n            // 2\ufe0f\u20e3 Bind initialized State to 'RandomComponent' for reactivity\n            ...this.bindAgileInstances({\n             myFirstState: MY_FIRST_STATE\n            }),\n        };\n      }\n      methods: {\n        updateHelloWorld: function() {\n            // 4\ufe0f\u20e3 Update State value on Button press\n            MY_FIRST_STATE.set(`Hello World ${++helloWorldCount}`)\n        }\n      }  \n   }\n<\/script>\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/agilets-first-state-i5xxs"},"code sandbox"),"\nto see the whole example in a production near environment."),(0,o.kt)("h3",{id:"important-code-snippets-1"},"\ud83d\udcbb Important Code Snippets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const MY_FIRST_STATE = createState("Hello World");\n')),(0,o.kt)("p",null,"1\ufe0f\u20e3 All you need to instantiate a State, is to call ",(0,o.kt)("inlineCode",{parentName:"p"},"createState()")," and specify an initial value.\nIn our example, we have assigned the initial value 'Hello World' to the State.\nIf you are wondering why we write AgileTs States uppercase.\nWell, it has a simple advantage.\nWe can easily differentiate between global\nand local States in our UI-Components (See Step 3\ufe0f\u20e3)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"data: function() {\n    return {\n        ...this.bindAgileInstances({\n            myFirstSTate: MY_FIRST_STATE\n        }),\n    };\n}\n")),(0,o.kt)("p",null,"\ufe0f2\ufe0f\u20e3 Now, we bind the previously created 'Hello World' State to the Vue Component\nusing the ",(0,o.kt)("a",{parentName:"p",href:"/docs/vue#bindagileinstances"},(0,o.kt)("inlineCode",{parentName:"a"},"bindAgileInstances()"))," method.\nThis binding ensures that the Vue Component re-renders whenever the current State ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," changes.\n",(0,o.kt)("inlineCode",{parentName:"p"},"bindAgileInstances()")," merges the current ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," of the State into the local Vue States\nunder the ",(0,o.kt)("inlineCode",{parentName:"p"},"sharedState")," property.\nThus, we can access the State ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," code like a local Vue State.\nUnfortunately, we haven't managed to make it typesafe yet. But we are working on it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<p>{{sharedState.myFirstState}}</p>\n")),(0,o.kt)("p",null,"3\ufe0f\u20e3 After binding the AgileTs States to the Vue Component (Step 3),\nwe can access them like a local Vue State in the ",(0,o.kt)("inlineCode",{parentName:"p"},"html")," code.\nHowever, the global AgileTs State ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," are located under the ",(0,o.kt)("inlineCode",{parentName:"p"},"sharedState")," property\nto visually separate them from the local Vue States."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MY_FIRST_STATE.set(`Hello World ${++helloWorldCount}`);\n")),(0,o.kt)("p",null,"3\ufe0f\u20e3 To bring some life into our small application,\nwe update the State ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," with the help of the State's ",(0,o.kt)("inlineCode",{parentName:"p"},".set()")," function\non each 'Update State' button press.\nThereby we increase the external set ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorldCount")," in ascending order."),(0,o.kt)("h3",{id:"-troubleshooting"},"\ud83d\ude31 Troubleshooting"),(0,o.kt)("h4",{id:"component-doesnt-re-render-when-state-mutates"},"Component doesn't re-render when State mutates."),(0,o.kt)("p",null,"Such a problem can occur when the automatic integration of React has failed.\nOften it helps to manually integrate the React integration into the Agile Instance to which the State belongs.\nIn our case that would be the internal ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/agile-instance#-shared-agile-instance"},(0,o.kt)("inlineCode",{parentName:"a"},"shared")," Agile Instance"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {shared} from "@agile-ts/core";\nimport reactIntegration from "@agile-ts/react";\n\nshared.integrate(reactIntegration);\n')),(0,o.kt)("h2",{id:"-next-steps"},"\ud83d\udd0d Next Steps"),(0,o.kt)("p",null,"The concepts we've covered in this tutorial should be enough to get you started building\nyour own applications using Vue and AgileTs.\nNow is a good time to try working on a project yourself to solidify\nthese learned concepts and see how they work in practice.\nIf you're not sure what kind of project to create,\nsee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/florinpop17/app-ideas"},"this list of app project ideas")," for some inspiration.\nBefore you jump straight into creating your own application,\nwe suggest taking a look at our ",(0,o.kt)("a",{parentName:"p",href:"/docs/style-guide"},"Style Guide")," documentation.\nThere we give you some inspiration on\nhow to properly structure your application States using AgileTs."),(0,o.kt)("p",null,"If you're looking for help with AgileTs questions,\nyou can certainly find a solution in the more detailed documentations\n(Tip: Try typing your question in the search bar in the top right corner)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/core"},"core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/vue"},"vue"))),(0,o.kt)("p",null,"or join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/T9GzreAwPH"},"Community Discord")," and ask there.\nWe would love to help you out and see what great things you build."))}h.isMDXComponent=!0}}]);