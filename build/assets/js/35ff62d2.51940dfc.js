"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[207],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="Project Summary Page",c={unversionedId:"getting-started/project-summary-page",id:"getting-started/project-summary-page",title:"Project Summary Page",description:"Project Summary",source:"@site/docs/getting-started/project-summary-page.mdx",sourceDirName:"getting-started",slug:"/getting-started/project-summary-page",permalink:"/docs/getting-started/project-summary-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/project-summary-page.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Open a GO Project",permalink:"/docs/getting-started/open-project"},next:{title:"Analysis Tools Overview",permalink:"/docs/getting-started/analysis-tools-overview"}},s={},l=[{value:"Project Summary",id:"project-summary",level:2},{value:"Project Configuration",id:"project-configuration",level:2},{value:"Analysis Tools",id:"analysis-tools",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-summary-page"},"Project Summary Page"),(0,o.kt)("h2",{id:"project-summary"},"Project Summary"),(0,o.kt)("p",null,"The Project Summary section display basic information about the Go Project, this include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Project Name (the one that you specify when created the project)"),(0,o.kt)("li",{parentName:"ul"},"Project Main Package (gathered from ",(0,o.kt)("inlineCode",{parentName:"li"},"go.mod")," file)"),(0,o.kt)("li",{parentName:"ul"},"Project Path")),(0,o.kt)("p",null,"If you're using Git as VCS, then the summary will include some information about your code repository:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Repository URL"),(0,o.kt)("li",{parentName:"ul"},"Current Branch"),(0,o.kt)("li",{parentName:"ul"},"Current Revision")),(0,o.kt)("img",{src:"/screenshots/getting-started/getting-started-04.png",alt:"Project Summary",title:"Project Summary"}),(0,o.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,o.kt)("p",null,"You can configure some Project properties by clicking the ",(0,o.kt)("icon",{icon:"fa fa-cogs",size:"md"})," Button, located in the upper right corner.\nAt the moment you can only configure the organization's repositories, for this use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Go Project Configuration")," widget and add a repository for each line."),(0,o.kt)("img",{src:"/screenshots/getting-started/getting-started-05.png",alt:"Project Configuration Widget",title:"Project Configuration Widget",style:{width:"50%",marginLeft:"30px",marginTop:"-10px",marginBottom:"30px"}}),(0,o.kt)("h2",{id:"analysis-tools"},"Analysis Tools"),(0,o.kt)("p",null,"To access a specific Analysis Tool, you just need to click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Open Tool")," button on the corresponding Tool Card."),(0,o.kt)("p",null,"The next section will introduce all the analysis tools included in Go-Architect."))}m.isMDXComponent=!0}}]);
