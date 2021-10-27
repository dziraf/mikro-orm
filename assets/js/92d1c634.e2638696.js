(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88450],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7018:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(74034),i=t(79973),o=(t(67294),t(3905)),a=["components"],l={id:"core.IsolationLevel",title:"Enumeration: IsolationLevel",sidebar_label:"IsolationLevel",custom_edit_url:null},c=void 0,s={unversionedId:"api/enums/core.IsolationLevel",id:"api/enums/core.IsolationLevel",isDocsHomePage:!1,title:"Enumeration: IsolationLevel",description:"core.IsolationLevel",source:"@site/docs/api/enums/core.IsolationLevel.md",sourceDirName:"api/enums",slug:"/api/enums/core.IsolationLevel",permalink:"/docs/next/api/enums/core.IsolationLevel",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.IsolationLevel",title:"Enumeration: IsolationLevel",sidebar_label:"IsolationLevel",custom_edit_url:null},sidebar:"API",previous:{title:"GroupOperator",permalink:"/docs/next/api/enums/core.GroupOperator"},next:{title:"LoadStrategy",permalink:"/docs/next/api/enums/core.LoadStrategy"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"READ_COMMITTED",id:"read_committed",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"READ_UNCOMMITTED",id:"read_uncommitted",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"REPEATABLE_READ",id:"repeatable_read",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"SERIALIZABLE",id:"serializable",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"SNAPSHOT",id:"snapshot",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".IsolationLevel"),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,o.kt)("h3",{id:"read_committed"},"READ","_","COMMITTED"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"READ","_","COMMITTED")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"read committed"')),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/79ec893/packages/core/src/enums.ts#L105"},"packages/core/src/enums.ts:105")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"read_uncommitted"},"READ","_","UNCOMMITTED"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"READ","_","UNCOMMITTED")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"read uncommitted"')),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/79ec893/packages/core/src/enums.ts#L104"},"packages/core/src/enums.ts:104")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"repeatable_read"},"REPEATABLE","_","READ"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"REPEATABLE","_","READ")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"repeatable read"')),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/79ec893/packages/core/src/enums.ts#L107"},"packages/core/src/enums.ts:107")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"serializable"},"SERIALIZABLE"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"SERIALIZABLE")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"serializable"')),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/79ec893/packages/core/src/enums.ts#L108"},"packages/core/src/enums.ts:108")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"snapshot"},"SNAPSHOT"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"SNAPSHOT")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"snapshot"')),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/79ec893/packages/core/src/enums.ts#L106"},"packages/core/src/enums.ts:106")))}d.isMDXComponent=!0}}]);