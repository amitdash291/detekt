"use strict";(self.webpackChunkdetekt_website=self.webpackChunkdetekt_website||[]).push([[5764],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7924:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"baseline",title:"Code Smell Baseline",keywords:["baseline","suppressing","smells"],sidebar_position:7},s=void 0,u={unversionedId:"introduction/baseline",id:"introduction/baseline",title:"Code Smell Baseline",description:"With the cli option --baseline or the detekt-gradle-plugin closure-property baseline you can specify a file which is used to generate a baseline.xml.",source:"@site/docs/introduction/baseline.md",sourceDirName:"introduction",slug:"/introduction/baseline",permalink:"/docs/introduction/baseline",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/docs/docs/introduction/baseline.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"baseline",title:"Code Smell Baseline",keywords:["baseline","suppressing","smells"],sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"Suppressing Issues",permalink:"/docs/introduction/suppressing-rules"},next:{title:"Suppressors",permalink:"/docs/introduction/suppressors"}},c={},p=[{value:"Gradle",id:"gradle",level:4},{value:"Groovy DSL",id:"groovy-dsl",level:6},{value:"Kotlin DSL",id:"kotlin-dsl",level:6},{value:"FAQ",id:"faq",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the cli option ",(0,o.kt)("inlineCode",{parentName:"p"},"--baseline")," or the detekt-gradle-plugin closure-property ",(0,o.kt)("inlineCode",{parentName:"p"},"baseline")," you can specify a file which is used to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"baseline.xml"),".\nIt is a file where ignored code smells are defined."),(0,o.kt)("p",null,"The intention of ",(0,o.kt)("inlineCode",{parentName:"p"},"CurrentIssues")," is that only new code smells are printed on further analysis.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"ManuallySuppressedIssues")," can be used to write down false positive detections (instead of suppressing them and pollute your code base)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," node has the following structure: ",(0,o.kt)("inlineCode",{parentName:"p"},"<RuleID>:<Codesmell_Signature>"),".",(0,o.kt)("br",{parentName:"p"}),"\n","When adding a custom issue to the xml file, make sure the ",(0,o.kt)("inlineCode",{parentName:"p"},"RuleID")," should be self-explaining.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"Codesmell_Signature")," is not printed to the console but can be retrieved from the ",(0,o.kt)("strong",{parentName:"p"},"txt")," output file when using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--report txt:path/to/report")," cli flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<SmellBaseline>\n  <ManuallySuppressedIssues>\n    <ID>CatchRuntimeException:Junk.kt$e: RuntimeException</ID>\n  </ManuallySuppressedIssues>\n  <CurrentIssues>\n    <ID>NestedBlockDepth:Indentation.kt$Indentation$override fun procedure(node: ASTNode)</ID>\n    <ID>TooManyFunctions:LargeClass.kt$io.gitlab.arturbosch.detekt.rules.complexity.LargeClass.kt</ID>\n    <ID>ComplexMethod:DetektExtension.kt$DetektExtension$fun convertToArguments(): MutableList&lt;String&gt;</ID>\n  </CurrentIssues>\n</SmellBaseline>\n")),(0,o.kt)("h4",{id:"gradle"},"Gradle"),(0,o.kt)("p",null,"If you are using the gradle-plugin run the ",(0,o.kt)("inlineCode",{parentName:"p"},"detektBaseline")," task to generate yourself a ",(0,o.kt)("inlineCode",{parentName:"p"},"baseline.xml"),".\nThis will create one baseline file per Gradle module.\nAs this might not be the desired behavior for a multi module project, think about implementing\na custom meta baseline task:"),(0,o.kt)("h6",{id:"groovy-dsl"},"Groovy DSL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'subprojects {\n    detekt {\n        // ...\n        baseline = file("${rootProject.projectDir}/config/baseline.xml")\n        // ...\n    }\n}\n\ntask detektProjectBaseline(type: io.gitlab.arturbosch.detekt.DetektCreateBaselineTask) {\n    description = "Overrides current baseline."\n    ignoreFailures.set(true)\n    parallel.set(true)\n    buildUponDefaultConfig.set(true)\n    setSource(files(rootDir))\n    config.setFrom(files("$rootDir/config/detekt/detekt.yml"))\n    baseline.set(file("$rootDir/config/detekt/baseline.xml"))\n    include("**/*.kt")\n    include("**/*.kts")\n    exclude("**/resources/**")\n    exclude("**/build/**")\n}\n')),(0,o.kt)("h6",{id:"kotlin-dsl"},"Kotlin DSL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'subprojects {\n    detekt {\n        // ...\n        baseline = file("${rootProject.projectDir}/config/baseline.xml")\n        // ...\n    }\n}\n\nval detektProjectBaseline by tasks.registering(DetektCreateBaselineTask::class) {\n    description = "Overrides current baseline."\n    buildUponDefaultConfig.set(true)\n    ignoreFailures.set(true)\n    parallel.set(true)\n    setSource(files(rootDir))\n    config.setFrom(files("$rootDir/config/detekt/detekt.yml"))\n    baseline.set(file("$rootDir/config/detekt/baseline.xml"))\n    include("**/*.kt")\n    include("**/*.kts")\n    exclude("**/resources/**")\n    exclude("**/build/**")\n}\n')),(0,o.kt)("h4",{id:"faq"},"FAQ"),(0,o.kt)("p",null,"Be aware that auto formatting cannot be combined with the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseline"),".\nThe signatures for a ",(0,o.kt)("inlineCode",{parentName:"p"},";")," for example would be too ambiguous."))}m.isMDXComponent=!0}}]);