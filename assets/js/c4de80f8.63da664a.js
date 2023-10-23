"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="Installation",l={unversionedId:"install",id:"install",title:"Installation",description:"Requirements",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installation Process",id:"installation-process",level:2},{value:"MacOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Wails is not installed correctly",id:"wails-is-not-installed-correctly",level:3},{value:"GO directory is not set.",id:"go-directory-is-not-set",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go v1.19 (",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"https://go.dev/doc/install"),")"),(0,r.kt)("li",{parentName:"ul"},"GoCyclo (",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/fzipp/gocyclo"},"https://pkg.go.dev/github.com/fzipp/gocyclo"),") for Cyclomatic complexity metrics"),(0,r.kt)("li",{parentName:"ul"},"GoCognit (",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/uudashr/gocognit"},"https://pkg.go.dev/github.com/uudashr/gocognit"),") for Cognitive complexity metrics")),(0,r.kt)("h2",{id:"installation-process"},"Installation Process"),(0,r.kt)("p",null,"At the moment, installing Go-Architect can only be done manually, by executing the following commands:"),(0,r.kt)("h3",{id:"macos"},"MacOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/go-architect/go-architect\ncd go-architect\nmake install-macos\n")),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/go-architect/go-architect\ncd go-architect\nmake build-linux\n")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/go-architect/go-architect\ncd go-architect\nmake build-windows\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"wails-is-not-installed-correctly"},"Wails is not installed correctly"),(0,r.kt)("p",null,"If you receive a message similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make: wails: No such file or directory\n")),(0,r.kt)("p",null,"Then it's probably that your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable doesn't correctly include your Go bin directory.\nTo fix this problem, check that you have the following variables set correctly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  export GOPATH=<dir_to_your_go_directory> (Usually `~/go`)\n  export GOBIN=$GOPATH/bin\n  export GOSRC=$GOPATH/src\n  export PATH=$PATH:$GOBIN\n")),(0,r.kt)("h3",{id:"go-directory-is-not-set"},"GO directory is not set."),(0,r.kt)("p",null,"If Go-Architect cannot load the Go executable from your environment, then it will display the following message:"),(0,r.kt)("img",{src:"/screenshots/install-01.png",alt:"Go-Architect cannot load Go",title:"Go-Architect cannot load Go"}),(0,r.kt)("p",null,"To fix this issue, you need to add the path to your Go binaries in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.goarchitect/environment")," file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, is you use MacOS, and you've installed Go via Homebrew, then you should run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo $GOBIN:/opt/homebrew/bin > ~/.goarchitect/environment\n")))))}d.isMDXComponent=!0}}]);