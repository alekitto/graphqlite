"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3382],{19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),i=a(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>A});var n=a(58168),i=a(96540),r=a(20053),o=a(23104),l=a(56347),s=a(57485),u=a(31682),c=a(89466);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function p(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Dv)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var f=a(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,r.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return i.createElement("div",{className:(0,r.A)("tabs-container",y.tabList)},i.createElement(v,(0,n.A)({},e,t)),i.createElement(b,(0,n.A)({},e,t)))}function A(e){const t=(0,f.A)();return i.createElement(w,(0,n.A)({key:String(t)},e))}},67708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(58168),i=(a(96540),a(15680));a(67443),a(11470),a(19365);const r={id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},o=void 0,l={unversionedId:"autowiring",id:"version-6.1/autowiring",title:"Autowiring services",description:"GraphQLite can automatically inject services in your fields/queries/mutations signatures.",source:"@site/versioned_docs/version-6.1/autowiring.mdx",sourceDirName:".",slug:"/autowiring",permalink:"/docs/6.1/autowiring",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/autowiring.mdx",tags:[],version:"6.1",lastUpdatedBy:"Alessandro Chitolina",lastUpdatedAt:1718281993,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services"},sidebar:"docs",previous:{title:"Type mapping",permalink:"/docs/6.1/type-mapping"},next:{title:"Extending a type",permalink:"/docs/6.1/extend-type"}},s={},u=[{value:"Sample",id:"sample",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Fetching a service by name (discouraged!)",id:"fetching-a-service-by-name-discouraged",level:2},{value:"Alternative solution",id:"alternative-solution",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"GraphQLite can automatically inject services in your fields/queries/mutations signatures."),(0,i.yg)("p",null,"Some of your fields may be computed. In order to compute these fields, you might need to call a service."),(0,i.yg)("p",null,"Most of the time, your ",(0,i.yg)("inlineCode",{parentName:"p"},"@Type")," annotation will be put on a model. And models do not have access to services.\nHopefully, if you add a type-hinted service in your field's declaration, GraphQLite will automatically fill it with\nthe service instance."),(0,i.yg)("h2",{id:"sample"},"Sample"),(0,i.yg)("p",null,"Let's assume you are running an international store. You have a ",(0,i.yg)("inlineCode",{parentName:"p"},"Product")," class. Each product has many names (depending\non the language of the user)."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(\n            #[Autowire]\n            TranslatorInterface $translator\n        ): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n")),(0,i.yg)("p",null,"When GraphQLite queries the name, it will automatically fetch the translator service."),(0,i.yg)("div",{class:"alert alert--warning"},"As with most autowiring solutions, GraphQLite assumes that the service identifier in the container is the fully qualified class name of the type-hint. So in the example above, GraphQLite will look for a service whose name is ",(0,i.yg)("code",null,"Symfony\\Component\\Translation\\TranslatorInterface"),"."),(0,i.yg)("h2",{id:"best-practices"},"Best practices"),(0,i.yg)("p",null,"It is a good idea to refrain from type-hinting on concrete implementations.\nMost often, your field declaration will be in your model. If you add a type-hint on a service, you are binding your domain\nwith a particular service implementation. This makes your code tightly coupled and less testable."),(0,i.yg)("div",{class:"alert alert--danger"},"Please don't do that:",(0,i.yg)("pre",null,(0,i.yg)("code",null,"#[Field] public function getName(#[Autowire] MyTranslator $translator): string"))),(0,i.yg)("p",null,"Instead, be sure to type-hint against an interface."),(0,i.yg)("div",{class:"alert alert--success"},"Do this instead:",(0,i.yg)("pre",null,(0,i.yg)("code",null,"#[Field] public function getName(#[Autowire] TranslatorInterface $translator): string"))),(0,i.yg)("p",null,"By type-hinting against an interface, your code remains testable and is decoupled from the service implementation."),(0,i.yg)("h2",{id:"fetching-a-service-by-name-discouraged"},"Fetching a service by name (discouraged!)"),(0,i.yg)("p",null,"Optionally, you can specify the identifier of the service you want to fetch from the controller:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'#[Autowire(identifier: "translator")]\n')),(0,i.yg)("div",{class:"alert alert--danger"},"While GraphQLite offers the possibility to specify the name of the service to be autowired, we would like to emphasize that this is ",(0,i.yg)("strong",null,"highly discouraged"),'. Hard-coding a container identifier in the code of your class is akin to using the "service locator" pattern, which is known to be an anti-pattern. Please refrain from doing this as much as possible.'),(0,i.yg)("h2",{id:"alternative-solution"},"Alternative solution"),(0,i.yg)("p",null,"You may find yourself uncomfortable with the autowiring mechanism of GraphQLite. For instance maybe:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Your service identifier in the container is not the fully qualified class name of the service (this is often true if you are not using a container supporting autowiring)"),(0,i.yg)("li",{parentName:"ul"},"You do not want to inject a service in a domain object"),(0,i.yg)("li",{parentName:"ul"},"You simply do not like the magic of injecting services in a method signature")),(0,i.yg)("p",null,"If you do not want to use autowiring and if you still need to access services to compute a field, please read on\nthe next chapter to learn ",(0,i.yg)("a",{parentName:"p",href:"extend-type"},"how to extend a type"),"."))}p.isMDXComponent=!0}}]);