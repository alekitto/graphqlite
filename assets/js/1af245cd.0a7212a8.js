"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2965],{19365:(t,e,n)=>{n.d(e,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},e)}},11470:(t,e,n)=>{n.d(e,{A:()=>w});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),s=n(56347),l=n(57485),u=n(31682),c=n(89466);function p(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function d(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??p(n);return function(t){const e=(0,u.X)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function h(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:n}=t;const a=(0,s.W6)(),o=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((t=>{if(!o)return;const e=new URLSearchParams(a.location.search);e.set(o,t),a.replace({...a.location,search:e.toString()})}),[o,a])]}function b(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,o=d(t),[i,s]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:o}))),[l,u]=g({queryString:n,groupId:a}),[p,b]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((t=>{n&&o.set(t)}),[n,o])]}({groupId:a}),m=(()=>{const t=l??p;return h({value:t,tabValues:o})?t:null})();(0,r.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!h({value:t,tabValues:o}))throw new Error(`Can't select invalid tab value=${t}`);s(t),u(t),b(t)}),[u,b,o]),tabValues:o}}var m=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:n,selectedValue:s,selectValue:l,tabValues:u}=t;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=t=>{const e=t.currentTarget,n=c.indexOf(e),a=u[n].value;a!==s&&(p(e),l(a))},h=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},e)},u.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>c.push(t),onKeyDown:h,onClick:d},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===e})}),n??e)})))}function A(t){let{lazy:e,children:n,selectedValue:a}=t;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=o.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function v(t){const e=b(t);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(f,(0,a.A)({},t,e)),r.createElement(A,(0,a.A)({},t,e)))}function w(t){const e=(0,m.A)();return r.createElement(v,(0,a.A)({key:String(e)},t))}},62002:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=(n(67443),n(11470)),i=n(19365);const s={id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},l=void 0,u={unversionedId:"doctrine-annotations-attributes",id:"version-7.0.0/doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",description:"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+).",source:"@site/versioned_docs/version-7.0.0/doctrine-annotations-attributes.mdx",sourceDirName:".",slug:"/doctrine-annotations-attributes",permalink:"/docs/doctrine-annotations-attributes",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-7.0.0/doctrine-annotations-attributes.mdx",tags:[],version:"7.0.0",lastUpdatedBy:"Alessandro Chitolina",lastUpdatedAt:1718281993,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{id:"doctrine-annotations-attributes",title:"Doctrine annotations VS PHP8 attributes",sidebar_label:"Annotations VS Attributes"},sidebar:"docs",previous:{title:"Migrating",permalink:"/docs/migrating"},next:{title:"Annotations reference",permalink:"/docs/annotations-reference"}},c={},p=[{value:"Doctrine annotations",id:"doctrine-annotations",level:2},{value:"PHP 8 attributes",id:"php-8-attributes",level:2},{value:"Migrating from Doctrine annotations to PHP 8 attributes",id:"migrating-from-doctrine-annotations-to-php-8-attributes",level:2}],d={toc:p},h="wrapper";function g(t){let{components:e,...n}=t;return(0,r.yg)(h,(0,a.A)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"GraphQLite is heavily relying on the concept of annotations (also called attributes in PHP 8+)."),(0,r.yg)("h2",{id:"doctrine-annotations"},"Doctrine annotations"),(0,r.yg)("div",{class:"alert alert--warning"},(0,r.yg)("strong",null,"Deprecated!")," Doctrine annotations are deprecated in favor of native PHP 8 attributes. Support will be dropped in a future release."),(0,r.yg)("p",null,'Historically, attributes were not available in PHP and PHP developers had to "trick" PHP to get annotation support.  This was the purpose of the ',(0,r.yg)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/latest/index.html"},"doctrine/annotation")," library."),(0,r.yg)("p",null,"Using Doctrine annotations, you write annotations in your docblocks:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type\n */\nclass MyType\n{\n}\n")),(0,r.yg)("p",null,"Please note that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The annotation is added in a ",(0,r.yg)("strong",{parentName:"li"},"docblock"),' (a comment starting with "',(0,r.yg)("inlineCode",{parentName:"li"},"/**"),'")'),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"Type")," part is actually a class. It must be declared in the ",(0,r.yg)("inlineCode",{parentName:"li"},"use")," statements at the top of your file.")),(0,r.yg)("div",{class:"alert alert--info"},(0,r.yg)("strong",null,"Heads up!"),(0,r.yg)("p",null,"Some IDEs provide support for Doctrine annotations:"),(0,r.yg)("ul",null,(0,r.yg)("li",null,"PhpStorm via the ",(0,r.yg)("a",{href:"https://plugins.jetbrains.com/plugin/7320-php-annotations"},"PHP Annotations Plugin")),(0,r.yg)("li",null,"Eclipse via the ",(0,r.yg)("a",{href:"https://marketplace.eclipse.org/content/symfony-plugin"},"Symfony 2 Plugin")),(0,r.yg)("li",null,"Netbeans has native support")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"We strongly recommend using an IDE that has Doctrine annotations support.\n"))),(0,r.yg)("h2",{id:"php-8-attributes"},"PHP 8 attributes"),(0,r.yg)("p",null,'Starting with PHP 8, PHP got native annotations support. They are actually called "attributes" in the PHP world.'),(0,r.yg)("p",null,"The same code can be written this way:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass MyType\n{\n}\n")),(0,r.yg)("p",null,"GraphQLite v4.1+ has support for PHP 8 attributes."),(0,r.yg)("p",null,"The Doctrine annotation class and the PHP 8 attribute class is ",(0,r.yg)("strong",{parentName:"p"},"the same")," (so you will be using the same ",(0,r.yg)("inlineCode",{parentName:"p"},"use")," statement at the top of your file)."),(0,r.yg)("p",null,"They support the same attributes too."),(0,r.yg)("p",null,"A few notable differences:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"PHP 8 attributes do not support nested attributes (unlike Doctrine annotations). This means there is no equivalent to the ",(0,r.yg)("inlineCode",{parentName:"li"},"annotations")," attribute of ",(0,r.yg)("inlineCode",{parentName:"li"},"@MagicField")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"@SourceField"),"."),(0,r.yg)("li",{parentName:"ul"},'PHP 8 attributes can be written at the parameter level. Any attribute targeting a "parameter" must be written at the parameter level.')),(0,r.yg)("p",null,"Let's take an example with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/autowiring"},(0,r.yg)("inlineCode",{parentName:"a"},"#Autowire")," attribute"),":"),(0,r.yg)(o.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getProduct(#[Autowire] ProductRepository $productRepository) : Product {\n    //...\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field\n * @Autowire(for="$productRepository")\n */\npublic function getProduct(ProductRepository $productRepository) : Product {\n    //...\n}\n')))),(0,r.yg)("h2",{id:"migrating-from-doctrine-annotations-to-php-8-attributes"},"Migrating from Doctrine annotations to PHP 8 attributes"),(0,r.yg)("p",null,"The good news is that you can easily migrate from Doctrine annotations to PHP 8 attributes using the amazing, ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rectorphp/rector"},"Rector library"),".  To do so, you'll want to use the following rector configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="rector.php"',title:'"rector.php"'},"<?php\n\nuse Rector\\Core\\Configuration\\Option;\nuse Rector\\Php80\\Rector\\Class_\\AnnotationToAttributeRector;\nuse Rector\\Php80\\ValueObject\\AnnotationToAttribute;\nuse Rector\\Set\\ValueObject\\SetList;\nuse Symfony\\Component\\DependencyInjection\\Loader\\Configurator\\ContainerConfigurator;\nuse TheCodingMachine\\GraphQLite\\Annotations as GraphQLite;\n\nreturn static function (ContainerConfigurator $containerConfigurator): void {\n    // Here we can define, what sets of rules will be applied\n    // tip: use \"SetList\" class to autocomplete sets\n    // $containerConfigurator->import(SetList::CODE_QUALITY);\n\n    // Set parameters\n    $parameters = $containerConfigurator->parameters();\n    $parameters->set(Option::PATHS, [\n        __DIR__ . '/src',\n        __DIR__ . '/tests',\n    ]);\n\n    $services = $containerConfigurator->services();\n\n    // @Validate and @Assertion are part of other libraries, include if necessary\n    $services->set(AnnotationToAttributeRector::class)\n        ->configure([\n            new AnnotationToAttribute(GraphQLite\\Query::class),\n            new AnnotationToAttribute(GraphQLite\\Mutation::class),\n            new AnnotationToAttribute(GraphQLite\\Type::class),\n            new AnnotationToAttribute(GraphQLite\\ExtendType::class),\n            new AnnotationToAttribute(GraphQLite\\Input::class),\n            new AnnotationToAttribute(GraphQLite\\Field::class),\n            new AnnotationToAttribute(GraphQLite\\SourceField::class),\n            new AnnotationToAttribute(GraphQLite\\MagicField::class),\n            new AnnotationToAttribute(GraphQLite\\Logged::class),\n            new AnnotationToAttribute(GraphQLite\\Right::class),\n            new AnnotationToAttribute(GraphQLite\\FailWith::class),\n            new AnnotationToAttribute(GraphQLite\\HideIfUnauthorized::class),\n            new AnnotationToAttribute(GraphQLite\\InjectUser::class),\n            new AnnotationToAttribute(GraphQLite\\Security::class),\n            new AnnotationToAttribute(GraphQLite\\Factory::class),\n            new AnnotationToAttribute(GraphQLite\\UseInputType::class),\n            new AnnotationToAttribute(GraphQLite\\Decorate::class),\n            new AnnotationToAttribute(GraphQLite\\Autowire::class),\n            new AnnotationToAttribute(GraphQLite\\HideParameter::class),\n            new AnnotationToAttribute(GraphQLite\\EnumType::class),\n        ]);\n};\n")))}g.isMDXComponent=!0}}]);