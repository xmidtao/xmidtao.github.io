"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[7607],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||l;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9373:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),o=["components"],i={id:"template",title:"\u4ee3\u7801\u6a21\u677f",sidebar_label:"\u4ee3\u7801\u6a21\u677f",slug:"/algorithm/template",description:"\u7b97\u6cd5\u5e38\u89c1\u6a21\u677f\u3002",image:"img/meta.png"},s=void 0,c={unversionedId:"algorithm/template",id:"algorithm/template",title:"\u4ee3\u7801\u6a21\u677f",description:"\u7b97\u6cd5\u5e38\u89c1\u6a21\u677f\u3002",source:"@site/docs/algorithm/Template.md",sourceDirName:"algorithm",slug:"/algorithm/template",permalink:"/docs/algorithm/template",editUrl:"https://github.com/xmidtao/documentation/tree/main/docs/algorithm/Template.md",tags:[],version:"current",lastUpdatedAt:1690168210,formattedLastUpdatedAt:"7/24/2023",frontMatter:{id:"template",title:"\u4ee3\u7801\u6a21\u677f",sidebar_label:"\u4ee3\u7801\u6a21\u677f",slug:"/algorithm/template",description:"\u7b97\u6cd5\u5e38\u89c1\u6a21\u677f\u3002",image:"img/meta.png"}},p=[{value:"\u4e00\u81f4\u6027 Hash \u7b97\u6cd5\u539f\u7406\u53ca\u5b9e\u73b0",id:"\u4e00\u81f4\u6027-hash-\u7b97\u6cd5\u539f\u7406\u53ca\u5b9e\u73b0",children:[],level:3}],u={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u4e00\u81f4\u6027-hash-\u7b97\u6cd5\u539f\u7406\u53ca\u5b9e\u73b0"},"\u4e00\u81f4\u6027 Hash \u7b97\u6cd5\u539f\u7406\u53ca\u5b9e\u73b0"),(0,l.kt)("p",null,"\u4e00\u81f4\u6027\u54c8\u5e0c\uff08Consistent Hashing\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u6570\u636e\u7684\u8d1f\u8f7d\u5747\u8861\u548c\u7f13\u5b58\u7b56\u7565\u7684\u7b97\u6cd5\u3002\u5b83\u89e3\u51b3\u4e86\u4f20\u7edf\u54c8\u5e0c\u7b97\u6cd5\u5728\u8282\u70b9\u589e\u51cf\u65f6\u9700\u8981\u91cd\u65b0\u6620\u5c04\u7684\u95ee\u9898\uff0c\u5177\u6709\u826f\u597d\u7684\u53ef\u6269\u5c55\u6027\u548c\u5bb9\u9519\u6027\u3002\u4ee5\u4e0b\u662f\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5\u7684\u539f\u7406\u548c\u5b9e\u73b0\uff1a"),(0,l.kt)("p",null,"\u539f\u7406\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u6574\u4e2a\u54c8\u5e0c\u7a7a\u95f4\uff08\u4f8b\u59820-2^32-1\uff09\u5f62\u6210\u4e00\u4e2a\u73af\uff0c\u79f0\u4e3a\u54c8\u5e0c\u73af\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u8282\u70b9\uff08\u5982\u670d\u52a1\u5668\uff09\u7684\u54c8\u5e0c\u503c\u6620\u5c04\u5230\u54c8\u5e0c\u73af\u4e0a\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u6570\u636e\u7684\u54c8\u5e0c\u503c\u4e5f\u6620\u5c04\u5230\u54c8\u5e0c\u73af\u4e0a\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u6709\u65b0\u7684\u6570\u636e\u5230\u8fbe\u6216\u9700\u8981\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u901a\u8fc7\u8ba1\u7b97\u6570\u636e\u54c8\u5e0c\u503c\u5728\u54c8\u5e0c\u73af\u4e0a\u7684\u4f4d\u7f6e\uff0c\u627e\u5230\u987a\u65f6\u9488\u6700\u8fd1\u7684\u8282\u70b9\uff0c\u5c06\u6570\u636e\u5b58\u50a8\u6216\u67e5\u8be2\u64cd\u4f5c\u8def\u7531\u5230\u8be5\u8282\u70b9\u3002")),(0,l.kt)("p",null,"\u5b9e\u73b0\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u54c8\u5e0c\u51fd\u6570\uff0c\u5c06\u8282\u70b9\u548c\u6570\u636e\u7684\u6807\u8bc6\uff08\u5982IP\u5730\u5740\u3001URL\u3001\u952e\u540d\u7b49\uff09\u6620\u5c04\u4e3a\u54c8\u5e0c\u503c\u3002\u5e38\u7528\u7684\u54c8\u5e0c\u51fd\u6570\u6709MD5\u3001SHA-1\u3001SHA-256\u7b49\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u4e00\u4e2a\u54c8\u5e0c\u73af\uff0c\u901a\u5e38\u4f7f\u7528\u4e00\u4e2a\u6709\u5e8f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5982\u6709\u5e8f\u6570\u7ec4\u6216\u6709\u5e8f\u94fe\u8868\u3002")),(0,l.kt)("p",null,"\u4f2a\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class ConsistentHashing:\n    def __init__(self, replicas=3):\n        self.replicas = replicas  # \u865a\u62df\u8282\u70b9\u7684\u590d\u5236\u56e0\u5b50\n        self.hash_ring = []  # \u54c8\u5e0c\u73af\n        self.nodes = {}  # \u8282\u70b9\u7684\u54c8\u5e0c\u503c\u4e0e\u8282\u70b9\u7684\u6620\u5c04\u5173\u7cfb\n\n    def addNode(self, node):\n        # \u6dfb\u52a0\u8282\u70b9\u5230\u54c8\u5e0c\u73af\u4e2d\n        for i in range(self.replicas):\n            replica_node = self.getReplicaNode(node, i)\n            hash_value = self.calculateHash(replica_node)\n            self.hash_ring.append(hash_value)\n            self.nodes[hash_value] = node\n        # \u5bf9\u54c8\u5e0c\u73af\u8fdb\u884c\u6392\u5e8f\n        self.hash_ring.sort()\n\n    def removeNode(self, node):\n        # \u4ece\u54c8\u5e0c\u73af\u4e2d\u79fb\u9664\u8282\u70b9\u53ca\u5176\u865a\u62df\u8282\u70b9\n        for i in range(self.replicas):\n            replica_node = self.getReplicaNode(node, i)\n            hash_value = self.calculateHash(replica_node)\n            self.hash_ring.remove(hash_value)\n            del self.nodes[hash_value]\n\n    def getReplicaNode(self, node, replica_num):\n        # \u751f\u6210\u865a\u62df\u8282\u70b9\u7684\u540d\u79f0\n        return node + '#' + str(replica_num)\n\n    def calculateHash(self, key):\n        # \u8ba1\u7b97\u8282\u70b9\u6216\u6570\u636e\u7684\u54c8\u5e0c\u503c\n        # \u8fd4\u56de\u54c8\u5e0c\u503c\n\n    def routeToNode(self, data):\n        # \u6839\u636e\u6570\u636e\u7684\u54c8\u5e0c\u503c\u5728\u54c8\u5e0c\u73af\u4e0a\u627e\u5230\u6700\u8fd1\u7684\u8282\u70b9\n        if not self.hash_ring:\n            return None\n        hash_value = self.calculateHash(data)\n        index = bisect_left(self.hash_ring, hash_value) % len(self.hash_ring)\n        return self.nodes[self.hash_ring[index]]\n\n")))}f.isMDXComponent=!0}}]);