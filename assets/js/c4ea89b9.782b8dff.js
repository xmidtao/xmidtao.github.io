"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[9873],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=l,c=d["".concat(g,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return g},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),o=["components"],i={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/logger"},g=void 0,s={unversionedId:"packages/logger/introduction",id:"packages/logger/introduction",title:"Introduction",description:"Simple Javascript Logger",source:"@site/docs/packages/logger/Introduction.md",sourceDirName:"packages/logger",slug:"/logger",permalink:"/docs/logger",editUrl:"https://github.com/xmidtao/documentation/tree/develop/docs/packages/logger/Introduction.md",tags:[],version:"current",lastUpdatedAt:1689143748,formattedLastUpdatedAt:"7/12/2023",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/logger"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/vue/installation"},next:{title:"Installation",permalink:"/docs/logger/installation"}},p=[{value:"\u2753 <code>logger</code>",id:"-logger",children:[],level:2},{value:"\u270d\ufe0f Standalone",id:"\ufe0f-standalone",children:[],level:2},{value:"\ud83d\udced Props",id:"-props",children:[{value:"<code>config</code>",id:"config",children:[{value:"<code>prefix</code>",id:"prefix",children:[],level:4},{value:"<code>level</code>",id:"level",children:[],level:4},{value:"<code>active</code>",id:"active",children:[],level:4},{value:"<code>timestamp</code>",id:"timestamp",children:[],level:4},{value:"<code>allowedTags</code>",id:"allowedtags",children:[],level:4},{value:"<code>canUseCustomStyles</code>",id:"canusecustomstyles",children:[],level:4}],level:3}],level:2},{value:"\ud83d\udfe6 Typescript",id:"-typescript",children:[],level:2},{value:"\ud83d\ude80 Quick Links",id:"-quick-links",children:[],level:2}],m={toc:p};function d(e){var t=e.components,i=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:"https://github.com/agile-ts/agile"},(0,r.kt)("img",{src:"https://img.shields.io/github/license/agile-ts/agile.svg?label=license&style=flat&colorA=293140&colorB=4a4872",alt:"GitHub License"})),(0,r.kt)("a",{href:"https://npm.im/@agile-ts/logger"},(0,r.kt)("img",{src:"https://img.shields.io/npm/v/@agile-ts/logger.svg?label=npm&style=flat&colorA=293140&colorB=4a4872",alt:"npm version"})),(0,r.kt)("a",{href:"https://npm.im/@agile-ts/logger"},(0,r.kt)("img",{src:"https://img.shields.io/bundlephobia/minzip/@agile-ts/logger.svg?label=minified%20size&style=flat&colorA=293140&colorB=4a4872",alt:"npm minified size"})),(0,r.kt)("a",{href:"https://npm.im/@agile-ts/logger"},(0,r.kt)("img",{src:"https://img.shields.io/npm/dt/@agile-ts/logger.svg?label=downloads&style=flat&colorA=293140&colorB=4a4872",alt:"npm total downloads"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Simple Javascript Logger")),(0,r.kt)("h2",{id:"-logger"},"\u2753 ",(0,r.kt)("inlineCode",{parentName:"h2"},"logger")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"logger")," package is a standalone extension for AgileTs that improves the logging experience,\nby letting you precisely configure the logging behavior of AgileTs packages.\nWithout the ",(0,r.kt)("inlineCode",{parentName:"p"},"logger")," package installed, AgileTs only logs ",(0,r.kt)("inlineCode",{parentName:"p"},"warn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," log messages.\nThese logs cannot be customized or turned off.\nHowever, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"logger")," extension installed,\nyou can completely customize what messages should be logged,\nhow these messages should look like and much more.\nAll you need to do to configure the logging behavior of AgileTs,\nis to call ",(0,r.kt)("inlineCode",{parentName:"p"},"assignSharedLogger()")," and specify your customized logger configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {assignSharedLogger, createLogger, Logger} from '@agile-ts/logger';\n\nassignSharedLogger(createLogger({\n  active: true,\n  level: Logger.level.DEBUG,\n  timestamp: true\n}));\n")),(0,r.kt)("h2",{id:"\ufe0f-standalone"},"\u270d\ufe0f Standalone"),(0,r.kt)("p",null,"The AgileTs ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger Class")," can also be used without AgileTs installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const logger = new Logger();\n")),(0,r.kt)("p",null,"Some of its basic capabilities are to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"-categorize-log-messages"},"\ud83c\udfad categorize log messages"),(0,r.kt)("p",{parentName:"li"},"Log messages in different upper categories\nto be able to roughly classify log messages."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'logger.log("I\'m a log message!");\nlogger.debug("I\'m a debug message!");\nlogger.info("I\'m a info message!");\nlogger.warn("I\'m a warn message!");\nlogger.error("I\'m a error message!");\nlogger.success("I\'m a success message!");\nlogger.trace("I\'m a trace message!");\nlogger.custom(\'jeff\', "I\'m a custom jeff message!");\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"-filter-log-messages"},"\ud83c\udfb2 filter log messages"),(0,r.kt)("p",{parentName:"li"},"Filter log messages by ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\nin order to see only logs that matter right now."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Filter by 'type'\nlogger.setLevel(Logger.level.WARN);\nlogger.debug('Boring Debug Message.'); // Doesn't get logged\nlogger.warn('Important Warning!'); // Does get log\n\n// Filter by 'tags'\nlogger.if.tag(['runtime']).info(`Created Job '${job._key}'`, job);\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"-style-log-messages-color-font-weight"},"\ud83c\udfa8 style log messages ",(0,r.kt)("inlineCode",{parentName:"h3"},"(color, font-weight)")),(0,r.kt)("p",{parentName:"li"},"Style log messages to make it easier to distinguish between different log types\nand recognise important log messages more quickly.\n",(0,r.kt)("img",{alt:"Log Custom Styles Example",src:n(9638).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"-customize-log-messages-prefix-timestamp"},"\ud83d\udd28 customize log messages ",(0,r.kt)("inlineCode",{parentName:"h3"},"(prefix, timestamp)")),(0,r.kt)("p",{parentName:"li"},"Customize log messages to identify searched logs more swiftly."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.debug('Hello there!'); // Logs: 'Agile: Hello there!'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h3",{parentName:"li",id:"-disable-all-log-messages"},"\ud83d\udeab disable all log messages"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"logger.debug('Exciting Debug Message.'); // Logs: 'Boring Debug Message.'\nlogger.isActive = false;\nlogger.debug('Boring Debug Message.'); // Doesn't get logged\nlogger.warn('Important Warning!'); // Doesn't get logged\n")))),(0,r.kt)("h2",{id:"-props"},"\ud83d\udced Props"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Stand alone Logger\nnew Logger(config);\n\n// AgileTs Logger\nassignSharedAgileLoggerConfig(config);\n")),(0,r.kt)("h3",{id:"config"},(0,r.kt)("inlineCode",{parentName:"h3"},"config")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger Class")," takes an optional configuration object as its only parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new Agile({\n  active: true,\n  level: Logger.level.DEBUG,\n  timestamp: true\n});\n")),(0,r.kt)("p",null,"Here is a Typescript Interface for quick reference. However,\neach property is explained in more detail below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface CreateLoggerConfigInterface {\n  prefix?: string;\n  allowedTags?: LoggerKey[];\n  canUseCustomStyles?: boolean;\n  active?: boolean;\n  level?: number;\n  timestamp?: boolean;\n}\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"prefix"},(0,r.kt)("inlineCode",{parentName:"h4"},"prefix")),(0,r.kt)("p",null,"Prefix which is added before each log message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},'const logger = new Logger({\n    prefix: "MyLog"\n});\n\nlogger.debug("Jeff"); // Logs \'MyLog Debug: Jeff\'\n')),(0,r.kt)("p",null,'The log messages of AgileTs have the default prefix "Agile".'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'"Agile"'),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"level"},(0,r.kt)("inlineCode",{parentName:"h4"},"level")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"log level")," controls which kind of log messages are allowed to be logged.\nTherefore, it is used to filter log messages to only see these relevant to us.\nFor example, we won't often set the ",(0,r.kt)("inlineCode",{parentName:"p"},"log level")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),"\nsince debug messages flood the console and are, in most cases, not relevant for us."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},'const logger = new Logger({\n    level: Logger.level.WARN\n});\n\nlogger.debug("Jeff"); // Doesn\'t get logged\nlogger.warn("A important Warning"); // Gets logged\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger Class")," supports some hard-coded log levels, which can be set dynamically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    TRACE: 1,\n    DEBUG: 2,\n    LOG: 5,\n    TABLE: 5,\n    INFO: 10,\n    SUCCESS: 15,\n    WARN: 20,\n    ERROR: 50,\n}\n\nLogger.level.LOG; // 5\n")),(0,r.kt)("p",null,"For example, suppose we set the logger level to ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),". In that case,\neach log category at a higher or same level is printed to the console.\nIn the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),", that would be ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WARN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ERROR")," and of course ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"active"},(0,r.kt)("inlineCode",{parentName:"h4"},"active")),(0,r.kt)("p",null,"Determines whether the logger is ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," and is allowed to print messages to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},'const logger = new Logger({\n    active: false\n});\n\nlogger.log("Jeff"); // Doesn\'t get logged\nlogger.isActive = true;\nlogger.log("Jeff"); // Gets logged\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"timestamp"},(0,r.kt)("inlineCode",{parentName:"h4"},"timestamp")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", a timestamp is added before each log message.\nThis timestamp represents the time the message was logged."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"const logger = new Logger({\n    timestamp: true\n});\n\nlogger.debug(\"Jeff\"); // Logs '[1613108673781] Debug: Jeff'\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"allowedtags"},(0,r.kt)("inlineCode",{parentName:"h4"},"allowedTags")),(0,r.kt)("p",null,"Sometimes logging can be very confusing and overwhelming if the console is flooded with logs that don't matter at the time.\nTherefore, ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," got created which filter logs specifically by tags."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},'const logger = new Logger({\n    allowedTags: ["jeff", "hans"]\n});\n\nlogger.debug("Jeff"); // Gets logged\nlogger.if.tag(["jeff"]).debug("Jeff"); // Doesn\'t get logged\nlogger.if.tag(["hans", "jeff"]).debug("Jeff");; // Gets get logged\nlogger.if.tag(["hans"]).debug("Jeff");; // Doesn\'t get logged\nlogger.if.tag(["hans", "frank"]).debug("Jeff");; // Doesn\'t get logged\n')),(0,r.kt)("p",null,"Any log message with defined tags will only be logged if all its tags are allowed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger Class"),".\nLogs that have no condition/tag are always logged."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"['runtime', 'storage', 'subscription', 'multieditor']"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"canusecustomstyles"},(0,r.kt)("inlineCode",{parentName:"h4"},"canUseCustomStyles")),(0,r.kt)("p",null,"Whether we can apply custom ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," styles to the log messages."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Log Custom Styles Example",src:n(9638).Z})),(0,r.kt)("p",null,"For example, AgileTs Logs are by default purple."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"-typescript"},"\ud83d\udfe6 Typescript"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Logger")," is almost 100% typesafe."),(0,r.kt)("h2",{id:"-quick-links"},"\ud83d\ude80 Quick Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/logger/installation"},"Installation"))))}d.isMDXComponent=!0},9638:function(e,t,n){t.Z=n.p+"assets/images/logger_example-40e90e6c316be5796800c75cb1acd0eb.png"}}]);