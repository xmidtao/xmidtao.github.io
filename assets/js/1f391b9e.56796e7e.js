(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[3085],{2852:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2852,e.exports=t},5366:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=5366,e.exports=t},2012:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2012,e.exports=t},2253:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2253,e.exports=t},1271:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1271,e.exports=t},4756:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4756,e.exports=t},8459:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8459,e.exports=t},90:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=90,e.exports=t},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1410:function(e,t,a){var r=a(7590),n=r.Agile,o=r.generateId,i=r.createState,l=r.createCollection,c=r.createComputed,s=a(8419),d=s.AgileHOC,u=s.useAgile,m=s.useWatcher,p=s.useProxy,g=s.useSelector,f=s.useValue,h=a(4698),b=h.Event,v="https://github.com/xmidtao",y={copyright:'Made with  \ud83d\udc9c by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/realxiliu">\u9521\u6d41</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/xmidtao/midtao/graphs/contributors">these awesome people</a>',meta:{title:"MidTao(\u4e2d\u9053) \u7814\u7a76\u8ba1\u7b97\u673a\u79d1\u5b66\u4e4b\u9053\u3002",image:"/img/meta.png",description:"MidTao(\u4e2d\u9053) \u7814\u7a76\u8ba1\u7b97\u673a\u79d1\u5b66\u4e4b\u9053, \u4e13\u6ce8\u4e8e\u8ba1\u7b97\u673a\u6838\u5fc3\u7684\u4e24\u4e2a\u65b9\u5411\u7b97\u6cd5\u548c\u6570\u636e\u5e93\u5185\u6838\u3002",color:"#6c69a0",keywords:["MidTao","MidTao(\u4e2d\u9053)","\u4e2d\u9053","Cloud Native Database","\u4e91\u539f\u751f\u6570\u636e\u5e93","Serverless Database","Real-Time Database","OLTP","OLAP","\u5206\u6790\u578b\u6570\u636e\u5e93","\u4e8b\u52a1\u578b\u6570\u636e\u5e93","\u7b97\u6cd5\u4e0e\u6570\u636e\u7ed3\u6784","C++","Rust","development","engineering"]},domain:"https://midtao.cn",githubOrgUrl:v,githubUrl:v+"/midtao",githubDocsUrl:v+"/documentation",npmCoreUrl:"https://www.npmjs.com/package/@agile-ts/core",discordUrl:"https://discord.gg/q9wYtV3e",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/midtao",twitterUrl:"https://twitter.com/realxiliu",redditUrl:"https://www.reddit.com/r/midtao/",version:"0.0.1",announcementBar:{id:"announcement",content:['\u2753 If you have any questions, don\'t hesitate to join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/q9wYtV3e">Community Discord</a> \ufe0f','\ud83c\udf89 If you like midtao, give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/xmidtao/midtao">GitHub</a>','\u23f0 If you want to stay update to date, follow use on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/realxiliu">Twitter</a>'],random:!1,interval:1e5},liveCodeScope:{Agile:n,createState:i,createCollection:l,createComputed:c,useAgile:u,useProxy:p,useEvent:h.useEvent,useWatcher:m,useSelector:g,useValue:f,AgileHOC:d,generateId:o,Event:b,toast:a(2132).toast}},k={title:"\u4e2d\u9053",tagline:"MidTao(\u4e2d\u9053) \u7814\u7a76\u8ba1\u7b97\u673a\u79d1\u5b66\u4e4b\u9053\uff0c\u7814\u7a76\u65b9\u5411\u7b97\u6cd5\u548c DB \u5185\u6838\u3002",url:y.domain,baseUrlIssueBanner:!1,baseUrl:"/",onBrokenLinks:"throw",favicon:"img/favicon.ico",organizationName:"MidTao",projectName:"https://github.com/xmidtao/midtao/",themes:["@docusaurus/theme-live-codeblock"],scripts:[{src:"https://snack.expo.io/embed.js",async:!0}],plugins:["docusaurus-plugin-sass"],customFields:Object.assign({},y),themeConfig:{hideableSidebar:!1,algolia:{appId:"DJQWJI5LDM",apiKey:"4597cf039c9ed7dc3ce717b5bc4caa4a",indexName:"midtao-index"},colorMode:{defaultMode:"dark",disableSwitch:!1,respectPrefersColorScheme:!1},prism:{theme:a(7694),darkTheme:a(3618),defaultLanguage:"javascript"},navbar:{title:" ",hideOnScroll:!0,logo:{alt:"My Site Logo",src:"img/logo.svg"},items:[{label:"\u5feb\u901f\u542f\u52a8",position:"left",items:[{label:"\u7b80\u4ecb",to:"/docs/Introduction/"},{label:"\u7f16\u7a0b",to:"/docs/quick-start/code/"},{label:"\u7cfb\u7edf",to:"/docs/quick-start/system/"},{label:"\u98ce\u683c",to:"/docs/style-guide/"}]},{label:"\u7b97\u6cd5",position:"left",items:[{label:"\u7b80\u4ecb",to:"/docs/algorithm/Introduction/"},{label:"\u529b\u6263",to:"/docs/algorithm/leetcode"},{label:"\u5251\u6307 Offer",to:"/docs/algorithm/offer"},{label:"\u523b\u7ec3\u5e931",to:"/docs/algorithm/testbank1"},{label:"\u523b\u7ec3\u5e932",to:"/docs/algorithm/testbank2"},{label:"\u5b9e\u6218\u5e93",to:"/docs/algorithm/realbank"}]},{label:"DB",position:"left",items:[{label:"\u7b80\u4ecb",to:"/docs/database/Introduction/"},{label:"\u6267\u884c\u5f15\u64ce",to:"/docs/database/execution-engine"},{label:"\u5b58\u50a8\u5f15\u64ce",to:"/docs/database/storage-engine"}]},{label:"\u793e\u533a",position:"left",items:[{label:"GitHub",href:y.githubUrl},{label:"Discord",href:y.discordUrl},{label:"Stack Overflow",href:y.stackoverflowUrl},{label:"Twitter",href:y.twitterUrl},{label:"Reddit",href:y.redditUrl}]},{label:"\u6587\u6863",position:"left",to:"docs/introduction"}]},footer:{copyright:y.copyright,style:"dark",links:[{title:"\u6587\u6863",items:[{label:"\u5feb\u901f\u542f\u52a8",to:"docs/introduction"},{label:"\u793a\u4f8b",to:"docs/examples"},{label:"\u7b97\u6cd5",to:"docs/algorithm/introduction"}]},{title:"\u793e\u533a",items:[{label:"GitHub",href:y.githubUrl},{label:"Stack Overflow",href:y.stackoverflowUrl},{label:"Discord",href:y.discordUrl},{label:"Twitter",href:y.twitterUrl}]},{title:"\u66f4\u591a",items:[{label:"\u535a\u5ba2",to:"/blog/"}]}]}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",admonitions:{icons:"emoji"},sidebarPath:6679,editUrl:y.githubDocsUrl+"/tree/main",showLastUpdateAuthor:!1,showLastUpdateTime:!0,remarkPlugins:[[a(8564),{sync:!0}]]},blog:{showReadingTime:!0,editUrl:y.githubDocsUrl+"/tree/main"},theme:{customCss:[3878]},googleAnalytics:{trackingID:"UA-189394644-1",anonymizeIP:!0}}]]};e.exports=Object.assign({},k)},9649:function(e,t,a){"use strict";a.d(t,{N:function(){return m},Z:function(){return p}});var r=a(102),n=a(3117),o=a(7294),i=a(6010),l=a(5999),c=a(6681),s="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",u=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var a,m=e.id,p=(0,r.Z)(e,u),g=(0,c.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,n.Z)({},p,{className:(0,i.Z)("anchor",(a={},a[d]=g,a[s]=!g,a)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},7440:function(e,t,a){"use strict";a.d(t,{Z:function(){return f}});var r=a(3117),n=a(102),o=a(7294),i=a(2859),l=a(9960),c=a(835),s=a(9649),d=a(6010),u=a(6681),m="details_1VDD";function p(e){var t=Object.assign({},e);return o.createElement(u.PO,(0,r.Z)({},t,{className:(0,d.Z)("alert alert--info",m,t.className)}))}var g=["mdxType","originalType"];var f={head:function(e){var t=o.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var r=e.props,i=(r.mdxType,r.originalType,(0,n.Z)(r,g));return o.createElement(e.props.originalType,i)}return e}(e)}));return o.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(c.Z,e):o.createElement("code",e)},a:function(e){return o.createElement(l.Z,e)},pre:function(e){var t,a=e.children;return(0,o.isValidElement)(a)&&(0,o.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:o.createElement(c.Z,(0,o.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=o.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=o.createElement(o.Fragment,null,t.filter((function(e){return e!==a})));return o.createElement(p,(0,r.Z)({},e,{summary:a}),n)},h1:(0,s.Z)("h1"),h2:(0,s.Z)("h2"),h3:(0,s.Z)("h3"),h4:(0,s.Z)("h4"),h5:(0,s.Z)("h5"),h6:(0,s.Z)("h6")}},6416:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),n=a(6010),o=a(162),i=a(3905),l=a(7440),c=a(1575),s=a(6681),d="mdxPageWrapper_3qD3";var u=function(e){var t=e.content,a=t.frontMatter,u=t.metadata,m=a.title,p=a.description,g=a.wrapperClassName,f=a.hide_table_of_contents,h=u.permalink;return r.createElement(o.Z,{title:m,description:p,permalink:h,wrapperClassName:null!=g?g:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,n.Z)("row",d)},r.createElement("div",{className:(0,n.Z)("col",!f&&"col--8")},r.createElement(i.Zo,{components:l.Z},r.createElement(t,null))),!f&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(c.Z,{toc:t.toc,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level})))))}},1575:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(3117),n=a(102),o=a(7294),i=a(6010),l=a(5002),c="tableOfContents_35-E",s=["className"];var d=function(e){var t=e.className,a=(0,n.Z)(e,s);return o.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},o.createElement(l.Z,(0,r.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(3117),n=a(102),o=a(7294),i=a(6681),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,r=e.linkClassName,n=e.isChild;return t.length?o.createElement("ul",{className:n?void 0:a},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}function s(e){var t=e.toc,a=e.className,s=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,u=void 0===d?"table-of-contents__link":d,m=e.linkActiveClassName,p=void 0===m?void 0:m,g=e.minHeadingLevel,f=e.maxHeadingLevel,h=(0,n.Z)(e,l),b=(0,i.LU)(),v=null!=g?g:b.tableOfContents.minHeadingLevel,y=null!=f?f:b.tableOfContents.maxHeadingLevel,k=(0,i.DA)({toc:t,minHeadingLevel:v,maxHeadingLevel:y}),E=(0,o.useMemo)((function(){if(u&&p)return{linkClassName:u,linkActiveClassName:p,minHeadingLevel:v,maxHeadingLevel:y}}),[u,p,v,y]);return(0,i.Si)(E),o.createElement(c,(0,r.Z)({toc:k,className:s,linkClassName:u},h))}},6679:function(e){e.exports={docs:[{type:"category",label:"\u4e2d\u9053(MidTao)",collapsed:!1,items:["main/introduction","main/installation","main/style-guide","main/frameworks","main/contributing"]},{type:"category",label:"\u5feb\u901f\u542f\u52a8",collapsed:!1,items:["quick_start/system","quick_start/code","quick_start/vue"]},{type:"category",label:"\u7b97\u6cd5",collapsed:!1,items:["algorithm/introduction","algorithm/leetcode","algorithm/offer","algorithm/testbank1","algorithm/testbank2","algorithm/realbank"]},{type:"category",label:"DB",collapsed:!1,items:["database/introduction","database/execution-engine","database/storage-engine"]},{type:"category",label:"Postgres",collapsed:!1,items:[{type:"category",label:"core",collapsed:!1,items:["packages/core/introduction","packages/core/installation",{type:"category",label:"Guides",items:["packages/core/guides/typescript","packages/core/guides/debugging","packages/core/guides/testing"]},{type:"category",label:"API",items:[{type:"category",label:"Agile Instance",items:["packages/core/api/agile-instance/introduction","packages/core/api/agile-instance/properties","packages/core/api/agile-instance/methods"]},{type:"category",label:"State",items:["packages/core/api/state/introduction","packages/core/api/state/properties","packages/core/api/state/methods"]},{type:"category",label:"Collection",items:["packages/core/api/collection/introduction","packages/core/api/collection/methods","packages/core/api/collection/properties",{type:"category",label:"Group",items:["packages/core/api/collection/group/introduction","packages/core/api/collection/group/methods","packages/core/api/collection/group/properties"]},{type:"category",label:"Selector",items:["packages/core/api/collection/selector/introduction","packages/core/api/collection/selector/methods","packages/core/api/collection/selector/properties"]}]},{type:"category",label:"Computed",items:["packages/core/api/computed/introduction","packages/core/api/computed/methods","packages/core/api/computed/properties"]},{type:"category",label:"Storage",items:["packages/core/api/storage/introduction","packages/core/api/storage/persisting-data"]},"packages/core/api/integration/introduction"]}]},{type:"category",label:"react",items:["packages/react/introduction","packages/react/installation",{type:"category",label:"API",items:["packages/react/api/hooks","packages/react/api/agileHOC"]}]},{type:"category",label:"vue",items:["packages/vue/introduction","packages/vue/installation"]},{type:"category",label:"logger",items:["packages/logger/introduction","packages/logger/installation"]},{type:"category",label:"\u26a0\ufe0f WIP",items:[{type:"category",label:"\u26a0\ufe0f api",items:["packages/api/introduction","packages/api/installation"]},{type:"category",label:"\u26a0\ufe0f event",items:["packages/event/introduction","packages/event/installation",{type:"category",label:"API",items:["packages/event/api/hooks"]}]},{type:"category",label:"\u26a0\ufe0f multieditor",items:["packages/multieditor/introduction","packages/multieditor/installation"]}]}]},{type:"category",label:"MySQL",items:["examples/introduction","examples/react/introduction","examples/react-native/introduction","examples/vue/introduction"]},{type:"category",label:"Velox",items:["velox/introduction"]},"interfaces"]}},8326:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){var t,a=null!=(t=e.height)?t:100;return r.createElement("div",{style:{height:a}})}},6674:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(3117),n=a(7294),o=a(776),i=a(6010),l="Header_2vLO",c="EditorHeader_QaUu",s="Editor_bTrj",d="PreviewHeader_3Nbv",u="PreviewContainer_k3-s",m=a(8326),p=a(3229),g=function(e){var t=e.children,a=e.transformCode,g=e.theme||(0,p.Z)();return n.createElement(o.nu,(0,r.Z)({code:t.replace(/\n$/,""),transformCode:a||function(e){return e+";"},theme:g,noInline:!0},e),n.createElement("div",{className:(0,i.Z)(l,c)},"Live Editor"),n.createElement(o.uz,{className:s}),n.createElement(m.Z,{height:30}),n.createElement("div",{className:(0,i.Z)(l,d)},"Result"),n.createElement("div",{className:u},n.createElement(o.i5,null),n.createElement(o.IF,null)))}},5557:function(e,t,a){"use strict";var r=a(1410),n=a.n(r),o=a(7294),i=Object.assign({},Object.assign({React:o},o),n().customFields.liveCodeScope);t.Z=i}}]);