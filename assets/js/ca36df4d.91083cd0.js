"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2674],{81316:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=a(58168),i=(a(96540),a(15680));a(67443);const l={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},r=void 0,o={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"7.0.0",source:"@site/docs/CHANGELOG.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/next/changelog",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/CHANGELOG.md",tags:[],version:"current",lastUpdatedBy:"Alessandro Chitolina",lastUpdatedAt:1718281993,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{id:"changelog",title:"Changelog",sidebar_label:"Changelog"},sidebar:"docs",previous:{title:"Semantic versioning",permalink:"/docs/next/semver"}},p={},s=[{value:"7.0.0",id:"700",level:2},{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"New Features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Minor Changes",id:"minor-changes",level:3},{value:"6.2.3",id:"623",level:2},{value:"6.2.2",id:"622",level:2},{value:"6.2.1",id:"621",level:2},{value:"6.2.0",id:"620",level:2},{value:"6.1.0",id:"610",level:2},{value:"Breaking Changes",id:"breaking-changes-1",level:3},{value:"Improvements",id:"improvements-1",level:3},{value:"5.0.0",id:"500",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"4.3.0",id:"430",level:2},{value:"Breaking change",id:"breaking-change",level:3},{value:"Minor changes",id:"minor-changes-1",level:3},{value:"4.2.0",id:"420",level:2},{value:"Breaking change",id:"breaking-change-1",level:3},{value:"New features",id:"new-features-1",level:3},{value:"4.1.0",id:"410",level:2},{value:"Breaking change",id:"breaking-change-2",level:3},{value:"New features",id:"new-features-2",level:3},{value:"Minor changes",id:"minor-changes-2",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"4.0.0",id:"400",level:2},{value:"New features",id:"new-features-3",level:3},{value:"Symfony",id:"symfony",level:3},{value:"Laravel",id:"laravel",level:3},{value:"Internals",id:"internals",level:3}],d={toc:s},u="wrapper";function g(e){let{components:n,...a}=e;return(0,i.yg)(u,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"700"},"7.0.0"),(0,i.yg)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"#664 Replaces ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/thecodingmachine/class-explorer"},"thecodingmachine/class-explorer")," with ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/alekitto/class-finder"},"kcs/class-finder")," resulting in the ",(0,i.yg)("inlineCode",{parentName:"li"},"SchemaFactory::setClassNameMapper")," being renamed to ",(0,i.yg)("inlineCode",{parentName:"li"},"SchemaFactory::setFinder"),".  This now expects an instance of ",(0,i.yg)("inlineCode",{parentName:"li"},"Kcs\\ClassFinder\\Finder")," instead of ",(0,i.yg)("inlineCode",{parentName:"li"},"Kcs\\ClassFinder\\Finder\\FinderInterface"),". @fogrye")),(0,i.yg)("h3",{id:"new-features"},"New Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"#649 Adds support for ",(0,i.yg)("inlineCode",{parentName:"li"},"subscription")," operations. @oojacoboo"),(0,i.yg)("li",{parentName:"ul"},"#612 Automatic query complexity analysis. @oprypkhantc"),(0,i.yg)("li",{parentName:"ul"},"#611 Automatic persisted queries. @oprypkhantc")),(0,i.yg)("h3",{id:"improvements"},"Improvements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"#658 Improves on prefetching for nested fields. @grynchuk"),(0,i.yg)("li",{parentName:"ul"},"#646 Improves exception handling during schema parsing. @fogrye"),(0,i.yg)("li",{parentName:"ul"},"#636 Allows the use of middleware on construtor params/fields. @oprypkhantc"),(0,i.yg)("li",{parentName:"ul"},"#623 Improves support for description arguments on types/fields. @downace"),(0,i.yg)("li",{parentName:"ul"},"#628 Properly handles ",(0,i.yg)("inlineCode",{parentName:"li"},"@param")," annotations for generics support on field annotated constructor arguments. @oojacoboo"),(0,i.yg)("li",{parentName:"ul"},"#584 Immutability improvements across the codebase. @oprypkhantc"),(0,i.yg)("li",{parentName:"ul"},"#588 Prefetch improvements. @oprpkhantc"),(0,i.yg)("li",{parentName:"ul"},"#606 Adds support for phpdoc descriptions and deprecation annotations on native enums. @mdoelker"),(0,i.yg)("li",{parentName:"ul"},"Thanks to @shish, @cvergne and @mshapovalov for updating the docs!")),(0,i.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"#639 Added support for Symfony 7. @janatjak")),(0,i.yg)("h2",{id:"623"},"6.2.3"),(0,i.yg)("p",null,"Adds support for ",(0,i.yg)("inlineCode",{parentName:"p"},"Psr\\Container")," 1.1 with #601"),(0,i.yg)("h2",{id:"622"},"6.2.2"),(0,i.yg)("p",null,"This is a very simple release.  We support Doctrine annotation 1.x and we've deprecated ",(0,i.yg)("inlineCode",{parentName:"p"},"SchemaFactory::setDoctrineAnnotationReader")," in favor of native PHP attributes."),(0,i.yg)("h2",{id:"621"},"6.2.1"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added support for new ",(0,i.yg)("inlineCode",{parentName:"li"},"Void")," return types, allowing use of ",(0,i.yg)("inlineCode",{parentName:"li"},"void")," from operation resolvers. #574"),(0,i.yg)("li",{parentName:"ul"},"Improvements with authorization middleware #571"),(0,i.yg)("li",{parentName:"ul"},"Updated vendor dependencies: #580 #558")),(0,i.yg)("h2",{id:"620"},"6.2.0"),(0,i.yg)("p",null,"Lots of little nuggets in this release!  We're now targeting PHP ^8.1 and have testing on 8.2."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Better support for union types and enums: #530, #535, #561, #570"),(0,i.yg)("li",{parentName:"ul"},"Various bug and interface fixes: #532, #575, #564"),(0,i.yg)("li",{parentName:"ul"},"GraphQL v15 required: #542"),(0,i.yg)("li",{parentName:"ul"},"Lots of codebase improvements, more strict typing: #548")),(0,i.yg)("p",null,"A special thanks to @rusted-love and @oprypkhantc for their contributions."),(0,i.yg)("h2",{id:"610"},"6.1.0"),(0,i.yg)("p",null,"A shoutout to @bladl for his work on this release, improving the code for better typing and PHP 8.0 syntax updates!"),(0,i.yg)("h3",{id:"breaking-changes-1"},"Breaking Changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"#518 PSR-11 support now requires version 2"),(0,i.yg)("li",{parentName:"ul"},"#508 Due to some of the code improvements, additional typing has been added to some interfaces/classes.  For instance, ",(0,i.yg)("inlineCode",{parentName:"li"},"RootTypeMapperInterface::toGraphQLOutputType")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"RootTypeMapperInterface::toGraphQLInputType")," now have the following signatures:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"    /**\n     * @param (OutputType&GraphQLType)|null $subType\n     *\n     * @return OutputType&GraphQLType\n     */\n    public function toGraphQLOutputType(\n        Type $type,\n        OutputType|null $subType,\n        ReflectionMethod|ReflectionProperty $reflector,\n        DocBlock $docBlockObj\n    ): OutputType;\n\n    /**\n     * @param (InputType&GraphQLType)|null $subType\n     *\n     * @return InputType&GraphQLType\n     */\n    public function toGraphQLInputType(\n        Type $type,\n        InputType|null $subType,\n        string $argumentName,\n        ReflectionMethod|ReflectionProperty $reflector,\n        DocBlock $docBlockObj\n    ): InputType;\n")),(0,i.yg)("h3",{id:"improvements-1"},"Improvements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"#510"),(0,i.yg)("li",{parentName:"ul"},"#508")),(0,i.yg)("h2",{id:"500"},"5.0.0"),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Upgraded to using version 14.9 of ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/webonyx/graphql-php"},"webonyx/graphql-php"))),(0,i.yg)("h2",{id:"430"},"4.3.0"),(0,i.yg)("h3",{id:"breaking-change"},"Breaking change"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The method ",(0,i.yg)("inlineCode",{parentName:"li"},"setAnnotationCacheDir($directory)")," has been removed from the ",(0,i.yg)("inlineCode",{parentName:"li"},"SchemaFactory"),".  The annotation\ncache will use your ",(0,i.yg)("inlineCode",{parentName:"li"},"Psr\\SimpleCache\\CacheInterface")," compliant cache handler set through the ",(0,i.yg)("inlineCode",{parentName:"li"},"SchemaFactory"),"\nconstructor.")),(0,i.yg)("h3",{id:"minor-changes-1"},"Minor changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Removed dependency for doctrine/cache and unified some of the cache layers following a PSR interface."),(0,i.yg)("li",{parentName:"ul"},"Cleaned up some of the documentation in an attempt to get things accurate with versioned releases.")),(0,i.yg)("h2",{id:"420"},"4.2.0"),(0,i.yg)("h3",{id:"breaking-change-1"},"Breaking change"),(0,i.yg)("p",null,"The method signature for ",(0,i.yg)("inlineCode",{parentName:"p"},"toGraphQLOutputType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"toGraphQLInputType")," have been changed to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n */\npublic function toGraphQLOutputType(Type $type, ?OutputType $subType, $reflector, DocBlock $docBlockObj): OutputType;\n\n/**\n * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n */\npublic function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, $reflector, DocBlock $docBlockObj): InputType;\n")),(0,i.yg)("h3",{id:"new-features-1"},"New features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/next/annotations-reference#input-annotation"},"@Input")," annotation is introduced as an alternative to ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Factory]"),". Now GraphQL input type can be created in the same manner as ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Type]")," in combination with ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Field]")," - ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/input-types#input-attribute"},"example"),"."),(0,i.yg)("li",{parentName:"ul"},"New attributes has been added to ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/annotations-reference#field-annotation"},"@Field")," annotation: ",(0,i.yg)("inlineCode",{parentName:"li"},"for"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"inputType")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"description"),"."),(0,i.yg)("li",{parentName:"ul"},"The following annotations now can be applied to class properties directly: ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Field]"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Logged]"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Right]"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"@FailWith"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"@HideIfUnauthorized")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Security]"),".")),(0,i.yg)("h2",{id:"410"},"4.1.0"),(0,i.yg)("h3",{id:"breaking-change-2"},"Breaking change"),(0,i.yg)("p",null,"There is one breaking change introduced in the minor version (this was important to allow PHP 8 compatibility)."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"ecodev/graphql-upload"),' package (used to get support for file uploads in GraphQL input types) is now a "recommended" dependency only.\nIf you are using GraphQL file uploads, you need to add ',(0,i.yg)("inlineCode",{parentName:"li"},"ecodev/graphql-upload")," to your ",(0,i.yg)("inlineCode",{parentName:"li"},"composer.json"),".")),(0,i.yg)("h3",{id:"new-features-2"},"New features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"All annotations can now be accessed as PHP 8 attributes"),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"@deprecated")," annotation in your PHP code translates into deprecated fields in your GraphQL schema"),(0,i.yg)("li",{parentName:"ul"},"You can now specify the GraphQL name of the Enum types you define"),(0,i.yg)("li",{parentName:"ul"},"Added the possibility to inject pure Webonyx objects in GraphQLite schema")),(0,i.yg)("h3",{id:"minor-changes-2"},"Minor changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Migrated from ",(0,i.yg)("inlineCode",{parentName:"li"},"zend/diactoros")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"laminas/diactoros")),(0,i.yg)("li",{parentName:"ul"},"Making the annotation cache directory configurable")),(0,i.yg)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Migrated from Travis to Github actions")),(0,i.yg)("h2",{id:"400"},"4.0.0"),(0,i.yg)("p",null,"This is a complete refactoring from 3.x. While existing annotations are kept compatible, the internals have completely\nchanged."),(0,i.yg)("h3",{id:"new-features-3"},"New features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You can directly ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/inheritance-interfaces#mapping-interfaces"},"annotate a PHP interface with ",(0,i.yg)("inlineCode",{parentName:"a"},"#[Type]")," to make it a GraphQL interface")),(0,i.yg)("li",{parentName:"ul"},"You can autowire services in resolvers, thanks to the new ",(0,i.yg)("inlineCode",{parentName:"li"},"@Autowire")," annotation"),(0,i.yg)("li",{parentName:"ul"},"Added ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/validation"},"user input validation")," (using the Symfony Validator or the Laravel validator or a custom ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Assertion]")," annotation"),(0,i.yg)("li",{parentName:"ul"},"Improved security handling:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Unauthorized access to fields can now generate GraphQL errors (rather that schema errors in GraphQLite v3)"),(0,i.yg)("li",{parentName:"ul"},"Added fine-grained security using the ",(0,i.yg)("inlineCode",{parentName:"li"},"#[Security]")," annotation. A field can now be ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/fine-grained-security"},"marked accessible or not depending on the context"),'.\nFor instance, you can restrict access to the field "viewsCount" of the type ',(0,i.yg)("inlineCode",{parentName:"li"},"BlogPost")," only for post that the current user wrote."),(0,i.yg)("li",{parentName:"ul"},"You can now inject the current logged user in any query / mutation / field using the ",(0,i.yg)("inlineCode",{parentName:"li"},"#[InjectUser]")," annotation"))),(0,i.yg)("li",{parentName:"ul"},"Performance:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can inject the ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/query-plan"},"Webonyx query plan in a parameter from a resolver")),(0,i.yg)("li",{parentName:"ul"},"You can use the ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/prefetch-method"},'dataloader pattern to improve performance drastically via the "prefetchMethod" attribute')))),(0,i.yg)("li",{parentName:"ul"},"Customizable error handling has been added:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can throw ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/error-handling#many-errors-for-one-exception"},"many errors in one exception")," with ",(0,i.yg)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException")))),(0,i.yg)("li",{parentName:"ul"},"You can force input types using ",(0,i.yg)("inlineCode",{parentName:"li"},'@UseInputType(for="$id", inputType="ID!")')),(0,i.yg)("li",{parentName:"ul"},"You can extend an input types (just like you could extend an output type in v3) using ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/extend-input-type"},"the new ",(0,i.yg)("inlineCode",{parentName:"a"},"#[Decorate]")," annotation")),(0,i.yg)("li",{parentName:"ul"},"In a factory, you can ",(0,i.yg)("a",{parentName:"li",href:"input-types#ignoring-some-parameters"},"exclude some optional parameters from the GraphQL schema"))),(0,i.yg)("p",null,"Many extension points have been added"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Added a "root type mapper" (useful to map scalar types to PHP types or to add custom annotations related to resolvers)'),(0,i.yg)("li",{parentName:"ul"},"Added ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/field-middlewares"},'"field middlewares"')," (useful to add middleware that modify the way GraphQL fields are handled)"),(0,i.yg)("li",{parentName:"ul"},"Added a ",(0,i.yg)("a",{parentName:"li",href:"/docs/next/argument-resolving"},'"parameter type mapper"')," (useful to add customize parameter resolution or add custom annotations related to parameters)")),(0,i.yg)("p",null,"New framework specific features:"),(0,i.yg)("h3",{id:"symfony"},"Symfony"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'The Symfony bundle now provides a "login" and a "logout" mutation (and also a "me" query)')),(0,i.yg)("h3",{id:"laravel"},"Laravel"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/next/laravel-package-advanced#support-for-pagination"},"Native integration with the Laravel paginator")," has been added")),(0,i.yg)("h3",{id:"internals"},"Internals"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilder")," class has been split in many different services (",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilder"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"TypeHandler"),", and a\nchain of ",(0,i.yg)("em",{parentName:"li"},"root type mappers"),")"),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilderFactory")," class has been completely removed."),(0,i.yg)("li",{parentName:"ul"},"Overall, there is not much in common internally between 4.x and 3.x. 4.x is much more flexible with many more hook points\nthan 3.x. Try it out!")))}g.isMDXComponent=!0}}]);