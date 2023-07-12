"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[6561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9087:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"contributing",title:"Contributing to AgileTs",sidebar_label:"Contributing",slug:"/contributing",description:"Contributions to AgileTs are not hard and very welcome.",image:"img/meta.png"},s=void 0,u={unversionedId:"main/contributing",id:"main/contributing",title:"Contributing to AgileTs",description:"Contributions to AgileTs are not hard and very welcome.",source:"@site/docs/main/Contributing.md",sourceDirName:"main",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/xmidtao/documentation/tree/develop/docs/main/Contributing.md",tags:[],version:"current",lastUpdatedAt:1689143748,formattedLastUpdatedAt:"7/12/2023",frontMatter:{id:"contributing",title:"Contributing to AgileTs",sidebar_label:"Contributing",slug:"/contributing",description:"Contributions to AgileTs are not hard and very welcome.",image:"img/meta.png"},sidebar:"docs",previous:{title:"Frameworks",permalink:"/docs/frameworks"},next:{title:"React",permalink:"/docs/quick-start/react"}},p=[{value:"\ud83d\udc4a Code of Conduct",id:"-code-of-conduct",children:[],level:2},{value:"\ud83d\ude0e Get Involved",id:"-get-involved",children:[{value:"Join our Discord Server",id:"join-our-discord-server",children:[],level:3},{value:"Improve Issues and Pull Requests",id:"improve-issues-and-pull-requests",children:[],level:3}],level:2},{value:"\u23f0 Our Development Process",id:"-our-development-process",children:[{value:"Branch Organization",id:"branch-organization",children:[],level:3}],level:2},{value:"\ud83d\udc1e Bugs",id:"-bugs",children:[],level:2},{value:"\ud83d\udcd5 Reporting New Issues",id:"-reporting-new-issues",children:[],level:2},{value:"\u23f3 Installation",id:"-installation",children:[{value:"Run Example Project&#39;s",id:"run-example-projects",children:[],level:3}],level:2},{value:"\u2604\ufe0f Pull Request",id:"\ufe0f-pull-request",children:[{value:"Your First Pull Request",id:"your-first-pull-request",children:[],level:3},{value:"Proposing a Change",id:"proposing-a-change",children:[],level:3},{value:"Sending a Pull Request",id:"sending-a-pull-request",children:[{value:"Breaking Changes",id:"breaking-changes",children:[],level:4}],level:3},{value:"What Happens Next?",id:"what-happens-next",children:[],level:3}],level:2},{value:"\ud83c\udf1f Style Guide",id:"-style-guide",children:[],level:2},{value:"\ud83d\ude80 Releasing Process Admin",id:"-releasing-process-admin",children:[{value:"\ud83d\udd10 Check publish rights",id:"-check-publish-rights",children:[{value:"Github",id:"github",children:[],level:4},{value:"NPM",id:"npm",children:[],level:4}],level:3},{value:"\ud83c\udfc3 Workflow",id:"-workflow",children:[{value:"1. Git setup",id:"1-git-setup",children:[],level:4},{value:"2. Test and build packages",id:"2-test-and-build-packages",children:[],level:4},{value:"3. Create Pull Request to <code>master</code>",id:"3-create-pull-request-to-master",children:[],level:4},{value:"4. Create Changelog",id:"4-create-changelog",children:[],level:4},{value:"5. Bump Version",id:"5-bump-version",children:[],level:4},{value:"6. Commit changes and merge <code>master &lt;- develop</code>",id:"6-commit-changes-and-merge-master---develop",children:[],level:4},{value:"7. Merge <code>master &lt;- &#39;Next Release&#39;</code>",id:"7-merge-master---next-release",children:[],level:4},{value:"8. Merge <code>master -&gt; develop</code>",id:"8-merge-master---develop",children:[],level:4}],level:3}],level:2},{value:"\ud83d\udcc4 License",id:"-license",children:[],level:2},{value:"\ud83c\udf89 Credits",id:"-credits",children:[],level:2}],h={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are open and grateful for any contribution made by the community.\nIf you're interested in contributing to AgileTs, this document might make the process for you easier."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.guide/"},"Open Source Guides")," website has a collection of resources for individuals,\ncommunities, and companies who want to learn how to run and contribute to an open-source project.\nContributors and people new to open source will find the following guides especially useful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.guide/how-to-contribute/"},"How to Contribute to Open Source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.guide/building-community/"},"Building Welcoming Communities"))),(0,i.kt)("h2",{id:"-code-of-conduct"},"\ud83d\udc4a ",(0,i.kt)("a",{parentName:"h2",href:"https://code.fb.com/codeofconduct"},"Code of Conduct")),(0,i.kt)("p",null,"Please read ",(0,i.kt)("a",{parentName:"p",href:"https://code.fb.com/codeofconduct"},"the full text"),", so that you are able to understand what interpersonal actions will and will not be tolerated."),(0,i.kt)("h2",{id:"-get-involved"},"\ud83d\ude0e Get Involved"),(0,i.kt)("p",null,"There are many ways to contribute to AgileTs, and some of them don't involve writing any code.\nHere are a few ideas to get started:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Just start using AgileTs. Does everything work as expected? If not, we're always looking for improvements. Let us know by ",(0,i.kt)("a",{parentName:"li",href:"#reporting-new-issues"},"opening an issue"),"."),(0,i.kt)("li",{parentName:"ul"},"Help us solving ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/agile-ts/agile/issues"},"open issues")," by suggesting workarounds or fixing them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#improve-issues-and-pull-requests"},"Improve open issues")," to make them more clear, readable, and understandable for others."),(0,i.kt)("li",{parentName:"ul"},"Read through the ",(0,i.kt)("a",{parentName:"li",href:"https://agile-ts.org/docs"},"AgileTs docs"),'. If you find anything confusing or that can be improved, feel free to make improvements by clicking "Edit" at the bottom of the doc page.'),(0,i.kt)("li",{parentName:"ul"},"Take a look at the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/agile-ts/agile/labels/enhancement"},"features requested")," by others and consider opening a pull request if you see something you want to work on.")),(0,i.kt)("h3",{id:"join-our-discord-server"},"Join our Discord Server"),(0,i.kt)("p",null,"Contributions are very welcome and not bound to Github.\nYou can also contribute to our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/FTqeMNCxw7"},"Discord Community")," by helping other people\nwho might face a problem you already have solved."),(0,i.kt)("h3",{id:"improve-issues-and-pull-requests"},"Improve Issues and Pull Requests"),(0,i.kt)("p",null,"One great way to contribute without writing ",(0,i.kt)("em",{parentName:"p"},"any")," code is to improve open issues and pull requests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ask for more information if you believe the issue does not provide all the details required to solve it"),(0,i.kt)("li",{parentName:"ul"},"Suggest ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/agile-ts/agile/labels"},"labels")," that help to categorize issues/pull-requests"),(0,i.kt)("li",{parentName:"ul"},"Flag issues that are stale or that should be closed")),(0,i.kt)("h2",{id:"-our-development-process"},"\u23f0 Our Development Process"),(0,i.kt)("p",null,"AgileTs uses Github as its source of truth.\nAll changes made so far and made in the future are and will remain publicly accessible here."),(0,i.kt)("h3",{id:"branch-organization"},"Branch Organization"),(0,i.kt)("p",null,"AgileTs has two primary branches: ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"master")," contains the latest released code."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"develop")," is where the development takes place."),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/agile-ts/agile/master/static/branch_organization.png",alt:"Branch Organisation"}),(0,i.kt)("p",null,"The root of all your feature branches have always to be the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch!"),(0,i.kt)("h2",{id:"-bugs"},"\ud83d\udc1e Bugs"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agile-ts/agile/issues"},"GitHub Issues")," to keep track of our bugs.\nIf you would like to report any problem, ",(0,i.kt)("strong",{parentName:"p"},"take a look around and see if someone already opened an issue about it"),".\nIf you are confident this is a new, unreported bug, you can submit a ",(0,i.kt)("a",{parentName:"p",href:"#reporting-new-issues"},"bug report"),"."),(0,i.kt)("h2",{id:"-reporting-new-issues"},"\ud83d\udcd5 Reporting New Issues"),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agile-ts/agile/issues/new/choose"},"opening a new issue"),", always make sure to fill out the whole issue template.\n",(0,i.kt)("strong",{parentName:"p"},"This step is very important!")," Not doing so may result in your issue not managed in a timely fashion.\nDon't take this personally if this happens, and feel free to open a new issue once you've gathered all the information required by the template."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"One issue, one bug!")," Please report a single bug per issue."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Provide reproduction steps!")," List all steps that are necessary to reproduce the issue. The person reading your bug report should be able to reproduce your issue with minimal effort.")),(0,i.kt)("h2",{id:"-installation"},"\u23f3 Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure you have ",(0,i.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," installed"),(0,i.kt)("li",{parentName:"ol"},"After cloning the repository, run ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run install:packages")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"root")," of the repository.\nThis runs ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn install")," in each AgileTs package to ensure all required dependencies are installed.")),(0,i.kt)("h3",{id:"run-example-projects"},"Run Example Project's"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow the ",(0,i.kt)("a",{parentName:"li",href:"#Installation"},"Installation")," steps above"),(0,i.kt)("li",{parentName:"ol"},"Ensure you have ",(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/search?client=firefox-b-d&q=yalc"},"Yalc")," installed"),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run dev:publish")," to publish all packages in your local 'yalc/(npm)' store"),(0,i.kt)("li",{parentName:"ol"},"Execute ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn install:agile")," in the Example Project in order to install its dependencies correctly"),(0,i.kt)("li",{parentName:"ol"},"When you have made the desired changes. Run ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run dev:push")," to push your updated changes to your local 'npm store'",(0,i.kt)("br",null),".\n",(0,i.kt)("em",{parentName:"li"},"ProTip:")," To make changes in real-time, run ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run watch"),", which will automatically run ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run dev:push")," whenever you updated a file in the corresponding package.")),(0,i.kt)("h2",{id:"\ufe0f-pull-request"},"\u2604\ufe0f Pull Request"),(0,i.kt)("h3",{id:"your-first-pull-request"},"Your First Pull Request"),(0,i.kt)("p",null,"So you have also decided to merge code back to the upstream by opening a PR.\nYou've invested a good chunk of time, and we appreciate it.\nWe will do our best to work with you and get the PR looked at."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Working on your first Pull Request?")," You can learn how from this free video series:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"},(0,i.kt)("strong",{parentName:"a"},"How to Contribute to an Open Source Project on GitHub"))),(0,i.kt)("p",null,"We have a list of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agile-ts/agile/labels/good%20first%20issue"},"beginner friendly issues")," to help you to get your feet wet in the AgileTs codebase\nand familiar with our contribution process. This is a great place to get started."),(0,i.kt)("h3",{id:"proposing-a-change"},"Proposing a Change"),(0,i.kt)("p",null,"If you would like to request a new feature or enhancement but you only want to give an impulse and don't want to implement it,\nfeel free to create an issue that follows the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agile-ts/agile/issues/new?template=feature_request.md"},"feature template"),"."),(0,i.kt)("p",null,"If you're only fixing a bug, it's fine to submit a pull request right away,\nbut we still recommend creating an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agile-ts/agile/issues/new?template=bug_report.md"},"issue")," detailing what you're fixing.\nThis is helpful in case we don't accept that specific changes but want to keep track of the issue."),(0,i.kt)("h3",{id:"sending-a-pull-request"},"Sending a Pull Request"),(0,i.kt)("p",null,"Keep in mind that small pull requests are much easier to review and more likely to get merged.\nEnsure your PR only solves one problem (issue). Otherwise, please split it up into multiple PR's for a better overview.\nCommit Messages that follow this ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"style guide")," are very welcome ^^"),(0,i.kt)("p",null,"Please make sure the following is done before submitting a new pull request:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fork ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/agile-ts/agile"},"the repository")," and create your branch from ",(0,i.kt)("inlineCode",{parentName:"li"},"develop")),(0,i.kt)("li",{parentName:"ol"},"Make sure your code is right formatted (",(0,i.kt)("inlineCode",{parentName:"li"},"yarn prettier"),")"),(0,i.kt)("li",{parentName:"ol"},"Make sure all Jest tests pass (",(0,i.kt)("inlineCode",{parentName:"li"},"yarn test"),")"),(0,i.kt)("li",{parentName:"ol"},"Don't forget the ",(0,i.kt)("strong",{parentName:"li"},"How has this been Tested?")," part!")),(0,i.kt)("p",null,"All pull requests should be opened against the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch\nand have a related Issue for better organization!"),(0,i.kt)("h4",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("p",null,"When adding a new ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/21703216/what-is-a-breaking-change-in-software"},"breaking change"),", follow this template in your pull request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"### New breaking change here\n\n- **Who does this affect**:\n- **How to migrate**:\n- **Why make this breaking change**:\n- **Severity (number of people affected x effort)**:\n")),(0,i.kt)("h3",{id:"what-happens-next"},"What Happens Next?"),(0,i.kt)("p",null,"The Core Team of AgileTs is constantly monitoring pull requests and merges them if they seem correct.\nHelp us to keep pull requests consistent by following the guidelines above."),(0,i.kt)("h2",{id:"-style-guide"},"\ud83c\udf1f Style Guide"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://prettier.io"},"Prettier")," will catch most styling issues that may exist in your code.\nYou can check the status of your code styling by simply running ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn prettier"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Most important:")," Look around. Match the style you see used in the rest of the project(formatting, naming, ..)."),(0,i.kt)("h2",{id:"-releasing-process-admin"},"\ud83d\ude80 Releasing Process ","[Admin]"),(0,i.kt)("p",null,"AgileTs is published in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},(0,i.kt)("inlineCode",{parentName:"a"},"npm")," store"),"."),(0,i.kt)("h3",{id:"-check-publish-rights"},"\ud83d\udd10 Check publish rights"),(0,i.kt)("p",null,"Get access from the AgileTs npm admins (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bennodev19"},"@bennodev19"),")."),(0,i.kt)("h4",{id:"github"},"Github"),(0,i.kt)("p",null,"You need publish access to the ",(0,i.kt)("strong",{parentName:"p"},"main AgileTs repository")," (not a fork)."),(0,i.kt)("h4",{id:"npm"},"NPM"),(0,i.kt)("p",null,"For publishing a package in the below ",(0,i.kt)("a",{parentName:"p",href:"#workflow"},"workflow"),", you need no npm publishing rights.\nIt is published via a Github action that handles the publishing process for us and saves us work."),(0,i.kt)("p",null,"If you, for whatever reason, need to publish a package ",(0,i.kt)("strong",{parentName:"p"},"manually"),",\npublishing will only work if you are logged in to npm with an account with publishing rights to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@agile-ts/")," team/packages."),(0,i.kt)("p",null,"If you are not currently logged in to npm on your CLI, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"npm login")),(0,i.kt)("li",{parentName:"ol"},"Enter username, password, and associated email address"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Enable 2FA")," on your account (required for publishing process)")),(0,i.kt)("h3",{id:"-workflow"},"\ud83c\udfc3 Workflow"),(0,i.kt)("h4",{id:"1-git-setup"},"1. Git setup"),(0,i.kt)("p",null,"Checkout the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/agile-ts/agile/blob/develop/"},(0,i.kt)("inlineCode",{parentName:"a"},"develop"))," branch and\nmake sure that each release change is merged into it.\nOnly the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch is allowed to be merged into the master\nand thus be the next release! See ",(0,i.kt)("a",{parentName:"p",href:"#-our-development-process"},"'Our Development Process'"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"git fetch origin develop\ngit checkout origin/develop\ngit fetch --tags // To generate the correct changelog later\n")),(0,i.kt)("h4",{id:"2-test-and-build-packages"},"2. Test and build packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn test")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"root")," of the project and ensure that all tests run green"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v6/commands/npm-pack"},(0,i.kt)("inlineCode",{parentName:"a"},"yarn pack"))," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"root")," of the project,\nwhich simply builds and packs the packages with the files as they will be released.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check if all packages could be built"),(0,i.kt)("li",{parentName:"ul"},"Check that each package built contains the files to be delivered")))),(0,i.kt)("h4",{id:"3-create-pull-request-to-master"},"3. Create Pull Request to ",(0,i.kt)("inlineCode",{parentName:"h4"},"master")),(0,i.kt)("p",null,"Now that we know each package can be built correctly and works as expected,\nwe create a pull request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"master <-- develop\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pull Request Title")," = 'New Release \ud83c\udf89'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pull Request Description")," is generated in the next step (",(0,i.kt)("a",{parentName:"li",href:"#4-create-changelog"},"Step 4"),")\nand will be a changelog based on the previous (in the ",(0,i.kt)("inlineCode",{parentName:"li"},"develop")," branch) merged pull requests.")),(0,i.kt)("h4",{id:"4-create-changelog"},"4. Create Changelog"),(0,i.kt)("p",null,"The changelog uses GitHub labels to classify each pull request.\nUse the GitHub interface to assign each newly merged pull request to a GitHub label starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"tag:"),". Otherwise, the PR won't appear in the changelog."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/agile-ts/agile/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Amerged+"},"Check tags of all recently merged Pull-Requests")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tag:")," label prefix is for PRs only!\nOther labels are not used by the changelog tool,\nand it's not necessary to assign such labels to issues, only PRs!"),(0,i.kt)("p",null,"Generate a GitHub auth token by going to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"https://github.com/settings/tokens"),"\n(the only permission needed is ",(0,i.kt)("inlineCode",{parentName:"p"},"public_repo"),"). Save the token somewhere for future reference."),(0,i.kt)("p",null,"Generate the changelog in the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," of the project with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"GITHUB_AUTH=<Your GitHub auth token> yarn changelog\n")),(0,i.kt)("p",null,"Copy the generated content and paste it as a description into the in ",(0,i.kt)("a",{parentName:"p",href:"#3-create-pull-request-to-master"},"Step 3"),"\ncreated ",(0,i.kt)("inlineCode",{parentName:"p"},"Pull Request"),". Save the changelog somewhere in between because we need it again in the next step (",(0,i.kt)("a",{parentName:"p",href:"#5-bump-version"},"Step 5"),")."),(0,i.kt)("h4",{id:"5-bump-version"},"5. Bump Version"),(0,i.kt)("p",null,"We don't manually increase the versions of the packages to be released.\nInstead, we run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn version:bump")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," of the project.\nThis will trigger ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets"},"Changeset"),".\nChangeset is a handy tool to manage versioning and changelogs with a focus on multi-package repositories.\nIn order for Changeset to bump the versions correctly, we need to pass 3 questions from it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\ufffd  Which packages would you like to include? ...\n\u221a changed packages\n  \u221a @agile-ts/api\n  \u221a @agile-ts/core\n  \u221a cra-template-agile\n  \u221a cra-template-agile-typescript\n  \u221a @agile-ts/event\n  \u221a @agile-ts/logger\n")),(0,i.kt)("p",null,"Select the packages where something has changed,\nand thus, the version needs to be incremented."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\ufffd  Which packages should have a major bump? ...\n\u221a all packages\n  \u221a @agile-ts/api@0.0.17\n  \u221a @agile-ts/core@0.0.16\n  \u221a cra-template-agile@0.0.5\n  \u221a cra-template-agile-typescript@0.0.5\n  \u221a @agile-ts/event@0.0.6\n  \u221a @agile-ts/logger@0.0.3\n  \u221a @agile-ts/multieditor@0.0.16\n  \u221a @agile-ts/proxytree@0.0.2\n  \u221a @agile-ts/react@0.0.17\n")),(0,i.kt)("p",null,"Decide how the version of the selected packages should be bumped (",(0,i.kt)("inlineCode",{parentName:"p"},"major"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"minor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"patch"),").\nNote: If no package has a major bump, just press ","[ENTER]"," with no package selected,\nand it will ask the same question based on ",(0,i.kt)("inlineCode",{parentName:"p"},"minor")," version bumps, .."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"\ufffd  Please enter a summary for this change (this will be in the changelogs). Submit empty line to open external editor\n\ufffd  Summary \xbb\n")),(0,i.kt)("p",null,"Here we pass the changelog generated in ",(0,i.kt)("a",{parentName:"p",href:"#4-create-changelog"},"Step 4"),"."),(0,i.kt)("h4",{id:"6-commit-changes-and-merge-master---develop"},"6. Commit changes and merge ",(0,i.kt)("inlineCode",{parentName:"h4"},"master <- develop")),(0,i.kt)("p",null,"Now we are nearly done with the manual part.\nCommit the file generated in the ",(0,i.kt)("inlineCode",{parentName:"p"},".changeset")," folder to the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch.\nAfter committing, we wait for each github/circleci action to complete successfully."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If they ",(0,i.kt)("inlineCode",{parentName:"li"},"fail"),", we have to figure out why and fix the issue"),(0,i.kt)("li",{parentName:"ul"},"If they ",(0,i.kt)("inlineCode",{parentName:"li"},"succeed"),", we merge the previously (in ",(0,i.kt)("a",{parentName:"li",href:"#3-create-pull-request-to-master"},"Step3"),") created pull request (",(0,i.kt)("inlineCode",{parentName:"li"},"master <- develop"),")")),(0,i.kt)("h4",{id:"7-merge-master---next-release"},"7. Merge ",(0,i.kt)("inlineCode",{parentName:"h4"},"master <- 'Next Release'")),(0,i.kt)("p",null,"If the merge was successful, Changeset created a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Pull Request")," called 'Next Release'\nfrom the branch ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset-release/master")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch.\nIn doing so, Changeset automatically incremented the versions and adjusted the changelogs.\nBefore we merge, we should double-check if the versions have been increased correctly and that everything else seems correct.\nBecause after we have merged, there is no going back.\nAfter the merge, the changed packages are automatically built and sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),".\nIn addition, Changeset creates the appropriate tags and releases in GitHub."),(0,i.kt)("h4",{id:"8-merge-master---develop"},"8. Merge ",(0,i.kt)("inlineCode",{parentName:"h4"},"master -> develop")),(0,i.kt)("p",null,"So that the ",(0,i.kt)("inlineCode",{parentName:"p"},"devlop")," branch does not become obsolete,\nwe merge the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch at the end."),(0,i.kt)("h2",{id:"-license"},"\ud83d\udcc4 License"),(0,i.kt)("p",null,"By contributing to AgileTs, you agree that your contributions will be licensed under its ",(0,i.kt)("strong",{parentName:"p"},"MIT license"),"."),(0,i.kt)("h2",{id:"-credits"},"\ud83c\udf89 Credits"),(0,i.kt)("p",null,"This File is inspired by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/blob/master/CONTRIBUTING.md"},"Docusaurus CONTRIBUTING.md"),"."))}c.isMDXComponent=!0}}]);