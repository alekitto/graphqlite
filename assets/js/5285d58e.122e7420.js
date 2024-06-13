"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5675],{19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),l=n(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>$});var a=n(58168),l=n(96540),r=n(20053),i=n(23104),o=n(56347),u=n(57485),p=n(31682),s=n(89466);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,p]=g({queryString:n,groupId:a}),[c,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,s.Dv)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=u??c;return y({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!y({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),m(e)}),[p,m,r]),tabValues:r}}var h=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=p[n].value;a!==o&&(c(t),u(a))},y=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:y,onClick:d},i,{className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function I(e){const t=m(e);return l.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},l.createElement(b,(0,a.A)({},e,t)),l.createElement(v,(0,a.A)({},e,t)))}function $(e){const t=(0,h.A)();return l.createElement(I,(0,a.A)({key:String(t)},e))}},25529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(58168),l=(n(96540),n(15680)),r=(n(67443),n(11470)),i=n(19365);const o={id:"input-types",title:"Input types",sidebar_label:"Input types"},u=void 0,p={unversionedId:"input-types",id:"version-7.0.0/input-types",title:"Input types",description:"Let's assume you are developing an API that returns a list of cities around a location.",source:"@site/versioned_docs/version-7.0.0/input-types.mdx",sourceDirName:".",slug:"/input-types",permalink:"/docs/input-types",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-7.0.0/input-types.mdx",tags:[],version:"7.0.0",lastUpdatedBy:"Alessandro Chitolina",lastUpdatedAt:1718281993,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{id:"input-types",title:"Input types",sidebar_label:"Input types"},sidebar:"docs",previous:{title:"External type declaration",permalink:"/docs/external-type-declaration"},next:{title:"Inheritance and interfaces",permalink:"/docs/inheritance-interfaces"}},s={},c=[{value:"#[Input] Attribute",id:"input-attribute",level:2},{value:"Multiple Input Types from the same class",id:"multiple-input-types-from-the-same-class",level:3},{value:"Factory",id:"factory",level:2},{value:"Specifying the input type name",id:"specifying-the-input-type-name",level:3},{value:"Forcing an input type",id:"forcing-an-input-type",level:3},{value:"Declaring several input types for the same PHP class",id:"declaring-several-input-types-for-the-same-php-class",level:3},{value:"Ignoring some parameters",id:"ignoring-some-parameters",level:3}],d={toc:c},y="wrapper";function g(e){let{components:t,...n}=e;return(0,l.yg)(y,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Let's assume you are developing an API that returns a list of cities around a location."),(0,l.yg)("p",null,"Your GraphQL query might look like this:"),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return City[]\n     */\n    #[Query]\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return City[]\n     */\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n")))),(0,l.yg)("p",null,"If you try to run this code, you will get the following error:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'CannotMapTypeException: cannot map class "Location" to a known GraphQL input type. Check your TypeMapper configuration.\n')),(0,l.yg)("p",null,"You are running into this error because GraphQLite does not know how to handle the ",(0,l.yg)("inlineCode",{parentName:"p"},"Location")," object."),(0,l.yg)("p",null,"In GraphQL, an object passed in parameter of a query or mutation (or any field) is called an ",(0,l.yg)("strong",{parentName:"p"},"Input Type"),"."),(0,l.yg)("p",null,"There are two ways for declaring that type, in GraphQLite: using the ",(0,l.yg)("a",{parentName:"p",href:"input-attribute"},(0,l.yg)("inlineCode",{parentName:"a"},"#[Input]")," attribute")," or a ",(0,l.yg)("a",{parentName:"p",href:"factory"},"Factory method"),"."),(0,l.yg)("h2",{id:"input-attribute"},"#","[","Input","]"," Attribute"),(0,l.yg)("p",null,"Using the ",(0,l.yg)("inlineCode",{parentName:"p"},"#[Input]")," attribute, we can transform the ",(0,l.yg)("inlineCode",{parentName:"p"},"Location")," class, in the example above, into an input type.  Just add the ",(0,l.yg)("inlineCode",{parentName:"p"},"#[Field]")," attribute to the corresponding properties:"),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Input]\nclass Location\n{\n\n    #[Field]\n    private ?string $name = null;\n\n    #[Field]\n    private float $latitude;\n\n    #[Field]\n    private float $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function setName(string $name): void\n    {\n        $this->name = $name;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Input\n */\nclass Location\n{\n\n    /**\n     * @Field\n     * @var string|null\n     */\n    private ?string $name = null;\n\n    /**\n     * @Field\n     * @var float\n     */\n    private $latitude;\n\n    /**\n     * @Field\n     * @var float\n     */\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function setName(string $name): void\n    {\n        $this->name = $name;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n")))),(0,l.yg)("p",null,"Now if you call the ",(0,l.yg)("inlineCode",{parentName:"p"},"getCities")," query, from the controller in the first example, the ",(0,l.yg)("inlineCode",{parentName:"p"},"Location")," object will be automatically instantiated with the user provided, ",(0,l.yg)("inlineCode",{parentName:"p"},"latitude")," / ",(0,l.yg)("inlineCode",{parentName:"p"},"longitude")," properties, and passed to the controller as a parameter."),(0,l.yg)("p",null,"There are some important things to notice:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The ",(0,l.yg)("inlineCode",{parentName:"li"},"@Field")," annotation is recognized on properties for Input Type, as well as setters."),(0,l.yg)("li",{parentName:"ul"},"There are 3 ways for fields to be resolved:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Via constructor if corresponding properties are mentioned as parameters with the same names - exactly as in the example above."),(0,l.yg)("li",{parentName:"ul"},"If properties are public, they will be just set without any additional effort - no constructor required."),(0,l.yg)("li",{parentName:"ul"},"For private or protected properties implemented, a public setter is required (if they are not set via the constructor). For example ",(0,l.yg)("inlineCode",{parentName:"li"},"setLatitude(float $latitude)"),".  You can also put the ",(0,l.yg)("inlineCode",{parentName:"li"},"@Field")," annotation on the setter, instead of the property, allowing you to have use many other attributes (",(0,l.yg)("inlineCode",{parentName:"li"},"Security"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"Right"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"Autowire"),", etc.)."))),(0,l.yg)("li",{parentName:"ul"},"For validation of these Input Types, see the ",(0,l.yg)("a",{parentName:"li",href:"validation#custom-inputtype-validation"},"Custom InputType Validation section"),"."),(0,l.yg)("li",{parentName:"ul"},"It's advised to use the ",(0,l.yg)("inlineCode",{parentName:"li"},"#[Input]")," attribute on DTO style input type objects and not directly on your model objects.  Using it on your model objects can cause coupling in undesirable ways.")),(0,l.yg)("h3",{id:"multiple-input-types-from-the-same-class"},"Multiple Input Types from the same class"),(0,l.yg)("p",null,"Simple usage of the ",(0,l.yg)("inlineCode",{parentName:"p"},"@Input"),' annotation on a class creates a GraphQL input named by class name + "Input" suffix if a class name does not end with it already. Ex. ',(0,l.yg)("inlineCode",{parentName:"p"},"LocationInput")," for ",(0,l.yg)("inlineCode",{parentName:"p"},"Location")," class."),(0,l.yg)("p",null,"You can add multiple ",(0,l.yg)("inlineCode",{parentName:"p"},"@Input")," annotations to the same class, give them different names and link different fields.\nConsider the following example:"),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Input(name: 'CreateUserInput', default: true)]\n#[Input(name: 'UpdateUserInput', update: true)]\nclass UserInput\n{\n\n    #[Field]\n    public string $username;\n\n    #[Field(for: 'CreateUserInput')]\n    public string $email;\n\n    #[Field(for: 'CreateUserInput', inputType: 'String!')]\n    #[Field(for: 'UpdateUserInput', inputType: 'String')]\n    public string $password;\n\n    protected ?int $age;\n\n\n    #[Field]\n    public function setAge(?int $age): void\n    {\n        $this->age = $age;\n    }\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Input(name="CreateUserInput", default=true)\n * @Input(name="UpdateUserInput", update=true)\n */\nclass UserInput\n{\n\n    /**\n     * @Field()\n     * @var string\n     */\n    public $username;\n\n    /**\n     * @Field(for="CreateUserInput")\n     * @var string\n     */\n    public string $email;\n\n    /**\n     * @Field(for="CreateUserInput", inputType="String!")\n     * @Field(for="UpdateUserInput", inputType="String")\n     * @var string|null\n     */\n    public $password;\n\n    /** @var int|null */\n    protected $age;\n\n    /**\n     * @Field()\n     * @param int|null $age\n     */\n    public function setAge(?int $age): void\n    {\n        $this->age = $age;\n    }\n}\n')))),(0,l.yg)("p",null,"There are 2 input types added to the ",(0,l.yg)("inlineCode",{parentName:"p"},"UserInput")," class: ",(0,l.yg)("inlineCode",{parentName:"p"},"CreateUserInput")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"UpdateUserInput"),". A few notes:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CreateUserInput")," input will be used by default for this class."),(0,l.yg)("li",{parentName:"ul"},"Field ",(0,l.yg)("inlineCode",{parentName:"li"},"username")," is created for both input types, and it is required because the property type is not nullable."),(0,l.yg)("li",{parentName:"ul"},"Field ",(0,l.yg)("inlineCode",{parentName:"li"},"email")," will appear only for ",(0,l.yg)("inlineCode",{parentName:"li"},"CreateUserInput")," input."),(0,l.yg)("li",{parentName:"ul"},"Field ",(0,l.yg)("inlineCode",{parentName:"li"},"password")," will appear for both. For ",(0,l.yg)("inlineCode",{parentName:"li"},"CreateUserInput")," it'll be the required field and for ",(0,l.yg)("inlineCode",{parentName:"li"},"UpdateUserInput")," optional."),(0,l.yg)("li",{parentName:"ul"},"Field ",(0,l.yg)("inlineCode",{parentName:"li"},"age")," is optional for both input types.")),(0,l.yg)("p",null,"Note that ",(0,l.yg)("inlineCode",{parentName:"p"},"update: true")," argument for ",(0,l.yg)("inlineCode",{parentName:"p"},"UpdateUserInput"),". It should be used when input type is used for a partial update,\nIt makes all fields optional and removes all default values from thus prevents setting default values via setters or directly to public properties.\nIn example above if you use the class as ",(0,l.yg)("inlineCode",{parentName:"p"},"UpdateUserInput")," and set only ",(0,l.yg)("inlineCode",{parentName:"p"},"username")," the other ones will be ignored.\nIn PHP 7 they will be set to ",(0,l.yg)("inlineCode",{parentName:"p"},"null"),", while in PHP 8 they will be in not initialized state - this can be used as a trick\nto check if user actually passed a value for a certain field."),(0,l.yg)("h2",{id:"factory"},"Factory"),(0,l.yg)("p",null,"A ",(0,l.yg)("strong",{parentName:"p"},"Factory")," is a method that takes in parameter all the fields of the input type and return an object."),(0,l.yg)("p",null,"Here is an example of factory:"),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.\n     */\n    #[Factory]\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.\n     *\n     * @Factory()\n     */\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n")))),(0,l.yg)("p",null,"and now, you can run query like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"query {\n  getCities(location: {\n              latitude: 45.0,\n              longitude: 0.0,\n            },\n            radius: 42)\n  {\n    id,\n    name\n  }\n}\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Factories must be declared with the ",(0,l.yg)("strong",{parentName:"li"},"@Factory")," annotation."),(0,l.yg)("li",{parentName:"ul"},"The parameters of the factories are the field of the GraphQL input type")),(0,l.yg)("p",null,"A few important things to notice:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The container MUST contain the factory class. The identifier of the factory MUST be the fully qualified class name of the class that contains the factory.\nThis is usually already the case if you are using a container with auto-wiring capabilities"),(0,l.yg)("li",{parentName:"ul"},"We recommend that you put the factories in the same directories as the types.")),(0,l.yg)("h3",{id:"specifying-the-input-type-name"},"Specifying the input type name"),(0,l.yg)("p",null,"The GraphQL input type name is derived from the return type of the factory."),(0,l.yg)("p",null,'Given the factory below, the return type is "Location", therefore, the GraphQL input type will be named "LocationInput".'),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Factory]\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Factory()\n */\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n")))),(0,l.yg)("p",null,'In case you want to override the input type name, you can use the "name" attribute of the @Factory annotation:'),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Factory(name: 'MyNewInputName', default: true)]\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory(name="MyNewInputName", default=true)\n */\n')))),(0,l.yg)("p",null,'Note that you need to add the "default" attribute is you want your factory to be used by default (more on this in\nthe next chapter).'),(0,l.yg)("p",null,"Unless you want to have several factories for the same PHP class, the input type name will be completely transparent\nto you, so there is no real reason to customize it."),(0,l.yg)("h3",{id:"forcing-an-input-type"},"Forcing an input type"),(0,l.yg)("p",null,"You can use the ",(0,l.yg)("inlineCode",{parentName:"p"},"@UseInputType")," annotation to force an input type of a parameter."),(0,l.yg)("p",null,'Let\'s say you want to force a parameter to be of type "ID", you can use this:'),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},'#[Factory]\n#[UseInputType(for: "$id", inputType:"ID!")]\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n'))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @UseInputType(for="$id", inputType="ID!")\n */\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n')))),(0,l.yg)("h3",{id:"declaring-several-input-types-for-the-same-php-class"},"Declaring several input types for the same PHP class"),(0,l.yg)("small",null,"Available in GraphQLite 4.0+"),(0,l.yg)("p",null,"There are situations where a given PHP class might use one factory or another depending on the context."),(0,l.yg)("p",null,"This is often the case when your objects map database entities.\nIn these cases, you can use combine the use of ",(0,l.yg)("inlineCode",{parentName:"p"},"@UseInputType")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"@Factory")," annotation to achieve your goal."),(0,l.yg)("p",null,"Here is an annotated sample:"),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n\n    /**\n     * This factory will be used by default to map "Product" classes.\n     */\n    #[Factory(name: "ProductRefInput", default: true)]\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     */\n    #[Factory(name: "CreateProductInput", default: false)]\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     */\n    #[Mutation]\n    #[UseInputType(for: "$product", inputType: "CreateProductInput!")]\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n\n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @return Color[]\n     */\n    #[Query]\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n'))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n\n    /**\n     * This factory will be used by default to map "Product" classes.\n     * @Factory(name="ProductRefInput", default=true)\n     */\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     * @Factory(name="CreateProductInput", default=false)\n     */\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     *\n     * @Mutation\n     * @UseInputType(for="$product", inputType="CreateProductInput!")\n     */\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n\n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @Query\n     * @return Color[]\n     */\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n')))),(0,l.yg)("h3",{id:"ignoring-some-parameters"},"Ignoring some parameters"),(0,l.yg)("small",null,"Available in GraphQLite 4.0+"),(0,l.yg)("p",null,"GraphQLite will automatically map all your parameters to an input type.\nBut sometimes, you might want to avoid exposing some of those parameters."),(0,l.yg)("p",null,"Image your ",(0,l.yg)("inlineCode",{parentName:"p"},"getProductById")," has an additional ",(0,l.yg)("inlineCode",{parentName:"p"},"lazyLoad")," parameter. This parameter is interesting when you call\ndirectly the function in PHP because you can have some level of optimisation on your code. But it is not something that\nyou want to expose in the GraphQL API. Let's hide it!"),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Factory]\npublic function getProductById(\n        string $id,\n        #[HideParameter]\n        bool $lazyLoad = true\n    ): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @HideParameter(for="$lazyLoad")\n */\npublic function getProductById(string $id, bool $lazyLoad = true): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n')))),(0,l.yg)("p",null,"With the ",(0,l.yg)("inlineCode",{parentName:"p"},"@HideParameter")," annotation, you can choose to remove from the GraphQL schema any argument."),(0,l.yg)("p",null,"To be able to hide an argument, the argument must have a default value."))}g.isMDXComponent=!0}}]);