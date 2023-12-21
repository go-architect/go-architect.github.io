"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Dependency Structure Matrix",s={unversionedId:"analysis-tools/dependency-structure-matrix",id:"analysis-tools/dependency-structure-matrix",title:"Dependency Structure Matrix",description:"A Dependency Structure Matrix can be used to represent many kind of relations between elements, components, and other entities. We can use a DSM to represent, for example:",source:"@site/docs/analysis-tools/dependency-structure-matrix.md",sourceDirName:"analysis-tools",slug:"/analysis-tools/dependency-structure-matrix",permalink:"/docs/analysis-tools/dependency-structure-matrix",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/analysis-tools/dependency-structure-matrix.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dependency Graph",permalink:"/docs/analysis-tools/dependency-graph"},next:{title:"Instability & Abstractness",permalink:"/docs/analysis-tools/instability-and-abstractness"}},l={},c=[{value:"How to read a DSM",id:"how-to-read-a-dsm",level:2},{value:"Rearrange elements in a DSM",id:"rearrange-elements-in-a-dsm",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependency-structure-matrix"},"Dependency Structure Matrix"),(0,r.kt)("p",null,"A Dependency Structure Matrix can be used to represent many kind of relations between elements, components, and other entities. We can use a DSM to represent, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"package dependencies, for example, package ",(0,r.kt)("inlineCode",{parentName:"li"},"P")," uses functions/classes declared in package ",(0,r.kt)("inlineCode",{parentName:"li"},"J")),(0,r.kt)("li",{parentName:"ul"},"dataflow dependencies, for example component ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," needs data from components ",(0,r.kt)("inlineCode",{parentName:"li"},"W")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"X"),"."),(0,r.kt)("li",{parentName:"ul"},"task dependencies, for example task ",(0,r.kt)("inlineCode",{parentName:"li"},"X")," should start only when tasks ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"C")," finished."),(0,r.kt)("li",{parentName:"ul"},"other kind of relations between any kind of entities.")),(0,r.kt)("p",null,"Go-Architect uses a Dependency Structure Matrix to represent dependencies between packages in a Go Project."),(0,r.kt)("img",{src:"/screenshots/analysis-tools/dsm/dsm-01.png",alt:"Dependency Structure Matrix",title:"Dependency Structure Matrix"}),(0,r.kt)("p",null,"There are 2 options to configure how the DSM is displayed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can select to aggregate the packages according to its nature (package layers) or to show it detailed by package (default view)."),(0,r.kt)("li",{parentName:"ul"},"You also have the option to display weighted values, in that case the DSM will contain a value that represents how much a package depends on another package (or a layer). If this option is not selected, then the DSM will display a value:1 when a package depends on another package.")),(0,r.kt)("img",{src:"/screenshots/analysis-tools/dsm/dsm-02.png",alt:"Aggregated Dependency Structure Matrix",title:"Aggregated Dependency Structure Matrix"}),(0,r.kt)("h2",{id:"how-to-read-a-dsm"},"How to read a DSM"),(0,r.kt)("p",null,"The following example shows a Dependency Structure Matrix for a 7-element project (Elements ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"G"),"), as you can see, a DSM is a ",(0,r.kt)("inlineCode",{parentName:"p"},"NxN matrix"),"\ncontaining the ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," elements in its rows and columns, if you take a single column (in the example, column for element ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"), each cell in this column\nrepresents if the corresponding element (element ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),") depends on the element for the corresponding row. The following image shows that element ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," depends on elements ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"F"),"."),(0,r.kt)("p",null,"You can use the same criteria to verify that element ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," depends on elements ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"F"),"."),(0,r.kt)("img",{src:"/screenshots/analysis-tools/dsm/dsm-03.png",alt:"DSM basics",title:"DSM basics",style:{width:"40%",marginLeft:"30px",marginTop:"-10px",marginBottom:"30px"}}),(0,r.kt)("h2",{id:"rearrange-elements-in-a-dsm"},"Rearrange elements in a DSM"),(0,r.kt)("p",null,"The Dependency Structure Matrix showed in the example above is easy to read and understand what are the elements with more or fewer dependants, but in real life projects\nwe will have a lot of elements, for example the first image in this page (from Go-Architect) shows a project that uses 46 packages, in this cases showing the packages in\nthe DSM sorted by alphabetical order or another criteria could not be helpful trying to understand the design of the project."),(0,r.kt)("p",null,"To represent the dependencies in a more readable way, we could try to transform the DSM into a ",(0,r.kt)("a",{parentName:"p",href:"https://mathworld.wolfram.com/StrictlyLowerTriangularMatrix.html"},"strictly lower triangular matrix"),", to get this we can apply some column-switching operations to the DSM."),(0,r.kt)("p",null,"The following example shows a re-arranged DSM for the same project as the example above. As you can see, even if the project contains few elements, this second DSM is more readable than the previous one, and we can get fast insights like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elements ",(0,r.kt)("inlineCode",{parentName:"li"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"B"),", as are not used by any other element, are candidates to be the entry points of the project (maybe they contain the main function or a command function)."),(0,r.kt)("li",{parentName:"ul"},"Element ",(0,r.kt)("inlineCode",{parentName:"li"},"G")," is used directly and indirectly by almost all elements in the project, so if we want to update it or replace this dependency, we need to take this task with a lot of care, because we can include some bugs or lose functionalities in the process. In this case we can analyze if using an abstraction first to ensure the update/replace process.")),(0,r.kt)("img",{src:"/screenshots/analysis-tools/dsm/dsm-04.png",alt:"Rearranged DSM",title:"Rearranged DSM",style:{width:"40%",marginLeft:"30px",marginTop:"-10px",marginBottom:"30px"}}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),"\nIf your project contains circular dependencies, then it will not be possible to represent it with a strictly lower triangular matrix DSM, but as Go compiler doesn't allow circular dependencies, Go-Architect should always show the project DSM as a strictly lower triangular matrix.")))}u.isMDXComponent=!0}}]);