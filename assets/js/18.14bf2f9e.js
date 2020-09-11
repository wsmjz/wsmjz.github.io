(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{515:function(a,t,s){"use strict";s.r(t);var e=s(58),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[a._v("#")]),a._v(" webpack")]),a._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),s("ul",[s("li",[a._v("优化打包速度")]),a._v(" "),s("li",[a._v("loader实现")]),a._v(" "),s("li",[a._v("plugin实现")])]),a._v(" "),s("h2",{attrs:{id:"_8888888"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8888888"}},[a._v("#")]),a._v(" 8888888")]),a._v(" "),s("ul",[s("li",[a._v("npx webpack "),s("code",[a._v("就是寻找(运行)node_modules/.bin/webpack.cmd 脚本文件")])]),a._v(" "),s("li",[a._v("npm run build 同上 就是寻找node_modules/.bin目录")]),a._v(" "),s("li",[a._v("ast语法分析")]),a._v(" "),s("li",[a._v("依赖工具webpack-cli")]),a._v(" "),s("li",[a._v("基于node开发（node遵循commonJs规范）")]),a._v(" "),s("li",[a._v("默认支持commonjs, es6 esmodle")]),a._v(" "),s("li",[a._v("一级\n"),s("ul",[s("li",[a._v("模式")]),a._v(" "),s("li",[a._v("入口")]),a._v(" "),s("li",[a._v("出口")]),a._v(" "),s("li",[a._v("loader")]),a._v(" "),s("li",[a._v("插件")])])]),a._v(" "),s("li",[a._v("因为nodejs是基于commonjs规范 webpack是基于node写的 所以只能用module.exports 而不能用 export default")]),a._v(" "),s("li",[a._v("weback .bin文件中有webpack脚本 执行 打包")]),a._v(" "),s("li",[a._v("webpack-cli\n"),s("ul",[s("li",[a._v("此工具用于在命令行中运行 webpack")]),a._v(" "),s("li",[a._v("https://www.webpackjs.com/guides/getting-started/#%E5%9F%BA%E6%9C%AC%E5%AE%89%E8%A3%85")])])]),a._v(" "),s("li",[a._v("webpack-serve-dev 启动服务")]),a._v(" "),s("li",[a._v("参数解析\n"),s("ol",[s("li",[a._v("--config")]),a._v(" "),s("li",[a._v("--env\n"),s("ul",[s("li",[a._v("--env.development")])])]),a._v(" "),s("li",[a._v("--mode production/development")])])])]),a._v(" "),s("h2",{attrs:{id:"webpack-实现过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-实现过程"}},[a._v("#")]),a._v(" webpack 实现过程")]),a._v(" "),s("ul",[s("li",[a._v("分析处理入口文件")]),a._v(" "),s("li",[a._v("创建依赖关系")]),a._v(" "),s("li",[a._v("AST 递归解析")]),a._v(" "),s("li",[a._v("生成打包结果")])]),a._v(" "),s("h2",{attrs:{id:"自带插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自带插件"}},[a._v("#")]),a._v(" 自带插件")]),a._v(" "),s("ul",[s("li",[a._v("别名")]),a._v(" "),s("li",[a._v("定义环境变量 "),s("code",[a._v("DefinePlugin")])])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DefinePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DEV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'production'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// production")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("DEV")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 'production'")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("FLAG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'true'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("ul",[s("li",[a._v("ProvidePlugin")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ProvidePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  $"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'jquery'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  jQuery"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'jquery'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"第三方常用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方常用插件"}},[a._v("#")]),a._v(" 第三方常用插件")]),a._v(" "),s("ul",[s("li",[a._v("处理不同浏览器")]),a._v(" "),s("li",[a._v("html")]),a._v(" "),s("li",[a._v("mincss")])]),a._v(" "),s("h2",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[a._v("#")]),a._v(" npm")]),a._v(" "),s("ul",[s("li",[a._v("如何进行版本管理的")]),a._v(" "),s("li",[a._v("如何使用package.lock.json 构建依赖")])]),a._v(" "),s("h2",{attrs:{id:"webpack-是如何打包的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-是如何打包的"}},[a._v("#")]),a._v(" webpack 是如何打包的")]),a._v(" "),s("ul",[s("li",[a._v("webpack通过模拟module，exports，require变量，将我们的模块代码打包成一个文件，让浏览器可以运行我们的模块代码")]),a._v(" "),s("li",[a._v("实现一个loader")])]),a._v(" "),s("h2",{attrs:{id:"webpack-是如何实现模块化的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-是如何实现模块化的"}},[a._v("#")]),a._v(" webpack 是如何实现模块化的")]),a._v(" "),s("h2",{attrs:{id:"核心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心"}},[a._v("#")]),a._v(" 核心")]),a._v(" "),s("p",[a._v("核心功能")]),a._v(" "),s("h3",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[a._v("#")]),a._v(" loader")]),a._v(" "),s("p",[a._v("转化：es6转化为es5 高级语法转化成低级语法")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("流程解析")]),a._v(" "),s("ol",[s("li",[a._v("loader运行的总体流程")]),a._v(" "),s("li",[a._v("babel-loader")]),a._v(" "),s("li",[a._v("pitch")]),a._v(" "),s("li",[a._v("loader-runner")]),a._v(" "),s("li",[a._v("file")]),a._v(" "),s("li",[a._v("css")])])]),a._v(" "),s("li",[s("p",[a._v("可处理配置")]),a._v(" "),s("ol",[s("li",[a._v("处理CSS文件")]),a._v(" "),s("li",[a._v("处理文件类型")]),a._v(" "),s("li",[a._v("处理JS模块")]),a._v(" "),s("li",[a._v("拷贝静态文件")]),a._v(" "),s("li",[a._v("resolve解析")]),a._v(" "),s("li",[a._v("配置ts环境")]),a._v(" "),s("li",[a._v("配置ts+react环境")]),a._v(" "),s("li",[a._v("配置ts+vue环境")]),a._v(" "),s("li",[a._v("配置代理")])])]),a._v(" "),s("li",[s("p",[a._v("常用loader")]),a._v(" "),s("ul",[s("li",[a._v("css loaders\n"),s("ul",[s("li",[a._v("加～号，类似于一个变量，比如你在webpack中通过alias定义了一些路径为变量，在css中引用时就可以直接以～加路径变量直接引入该路径下文件，而不加的话，应该是 通过相对路径去查找该文件")])])]),a._v(" "),s("li",[a._v("图片 loader")]),a._v(" "),s("li",[a._v("字体 icon loader")]),a._v(" "),s("li",[a._v("js loader")]),a._v(" "),s("li",[a._v("React loader")]),a._v(" "),s("li",[a._v("Vue loader")])])]),a._v(" "),s("li",[s("p",[a._v("手写loader")])])]),a._v(" "),s("h3",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[a._v("#")]),a._v(" plugin")]),a._v(" "),s("p",[a._v("增强：打包流程中 - 打包前做什么  打包中做什么 打包后做什么， 增加一些逻辑 比如：new HtmlWebpackPlugin产生一个html")]),a._v(" "),s("ul",[s("li",[a._v("常用plugin\n"),s("ul",[s("li",[a._v("提高开发效率\n"),s("ul",[s("li",[a._v("webpack-merge")]),a._v(" "),s("li",[a._v("size-plugin 监控资源体积变化，尽早发现问题")])])])])]),a._v(" "),s("li",[a._v("手写plugin")])]),a._v(" "),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("ul",[s("li",[a._v("mode")]),a._v(" "),s("li",[a._v("optimization: {minimizer}")])]),a._v(" "),s("h2",{attrs:{id:"babel-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-原理"}},[a._v("#")]),a._v(" Babel 原理")]),a._v(" "),s("h2",{attrs:{id:"source-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source-map"}},[a._v("#")]),a._v(" source-map")]),a._v(" "),s("p",[a._v("调式源码")]),a._v(" "),s("ul",[s("li",[a._v("hidden-source-map")])]),a._v(" "),s("h2",{attrs:{id:"模块打包原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块打包原理"}},[a._v("#")]),a._v(" 模块打包原理")]),a._v(" "),s("h2",{attrs:{id:"文件监听原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件监听原理"}},[a._v("#")]),a._v(" 文件监听原理")]),a._v(" "),s("h2",{attrs:{id:"热更新原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热更新原理"}},[a._v("#")]),a._v(" 热更新原理")]),a._v(" "),s("h2",{attrs:{id:"如何对bundle体积进行监控和分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何对bundle体积进行监控和分析"}},[a._v("#")]),a._v(" 如何对bundle体积进行监控和分析")]),a._v(" "),s("h2",{attrs:{id:"文件指纹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹"}},[a._v("#")]),a._v(" 文件指纹")]),a._v(" "),s("ul",[s("li",[a._v("css,js，图片")]),a._v(" "),s("li",[a._v("hash")]),a._v(" "),s("li",[a._v("Chunkhash")])]),a._v(" "),s("h2",{attrs:{id:"webpack-config-js-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-配置文件"}},[a._v("#")]),a._v(" webpack.config.js 配置文件")]),a._v(" "),s("ul",[s("li",[a._v("output\n"),s("ul",[s("li",[a._v("filename\n"),s("ul",[s("li",[a._v("hash")]),a._v(" "),s("li",[a._v("contentHash 每个文件内容不同hash就不同 a.js中引入c, c改变hash也会改变")]),a._v(" "),s("li",[a._v("chunkHash")])])])])])]),a._v(" "),s("h2",{attrs:{id:"文件配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件配置"}},[a._v("#")]),a._v(" 文件配置")]),a._v(" "),s("ul",[s("li",[a._v("定义webpack.config.js")]),a._v(" "),s("li",[a._v("使用path解析绝对路径")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("ul",[s("li",[a._v("配置环境变量")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("module.exports = (env) => {\n​\tconsole.log(env)\n​\tlet isEnv = env.development\n}\n")])])]),s("h2",{attrs:{id:"优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[a._v("#")]),a._v(" 优化")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/7f48a21d8c5e",target:"_blank",rel:"noopener noreferrer"}},[a._v("更多"),s("OutboundLink")],1)]),a._v(" "),s("ol",[s("li",[a._v("删除无用的Css样式")]),a._v(" "),s("li",[a._v("图片压缩插件")]),a._v(" "),s("li",[a._v("CDN加载文件")]),a._v(" "),s("li",[a._v("Tree-shaking && Scope-Hoisting （摇晃树）")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 设置 保留es6模块 因为是基于es6静态分析的")]),a._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("DllPlugin && DllReferencePlugin")]),a._v(" "),s("li",[a._v("动态加载文件")]),a._v(" "),s("li",[a._v("打包文件分析工具")]),a._v(" "),s("li",[a._v("SplitChunks")]),a._v(" "),s("li",[a._v("热更新")]),a._v(" "),s("li",[a._v("IgnorePlugin")]),a._v(" "),s("li",[a._v("费时分析")]),a._v(" "),s("li",[a._v("noParse")]),a._v(" "),s("li",[a._v("resolve")]),a._v(" "),s("li",[a._v("include/exclude")]),a._v(" "),s("li",[a._v("happypack")])]),a._v(" "),s("ul",[s("li",[a._v("抽离css插件 "),s("code",[a._v("MiniCssExtractPlugin")])]),a._v(" "),s("li",[a._v("清楚无用css  "),s("code",[a._v("PurgeCssExtractPlugin")]),a._v(" "),s("ul",[s("li",[a._v("配合"),s("code",[a._v("glob")]),a._v(" 搜索全局")])])]),a._v(" "),s("li",[a._v("import()  预加载")])]),a._v(" "),s("h3",{attrs:{id:"一-优化构建速度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-优化构建速度"}},[a._v("#")]),a._v(" 一.优化构建速度")]),a._v(" "),s("ol",[s("li",[a._v("缩小文件的搜索范围\n"),s("ol",[s("li",[a._v("resolve\n"),s("ul",[s("li",[a._v("源码中的导入语句尽可能的写上文件后缀，如require(./data)要写成require(./data.json)")])])]),a._v(" "),s("li",[a._v("module.noParse")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" noParse"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/jquery|chartjs/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/react\\.min\\.js$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[a._v("使用DllPlugin减少基础模块编译次数  "),s("code",[a._v("require('webpack/lib/DllPlugin')")])]),a._v(" "),s("li",[a._v("使用"),s("code",[a._v("happyPack")]),a._v("开启多进程Loader转换 "),s("code",[a._v("npm i -D happyPack")])]),a._v(" "),s("li",[a._v("使用"),s("code",[a._v("wbepack-parallel-uglify-plugin")]),a._v("开启多进程压缩JS文件 "),s("code",[a._v("npm i -D webpack-parallel-uglify-plugin")])])]),a._v(" "),s("h3",{attrs:{id:"二-优化开发体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-优化开发体验"}},[a._v("#")]),a._v(" 二.优化开发体验")]),a._v(" "),s("ol",[s("li",[a._v("自动刷新\n"),s("ol",[s("li",[a._v("watch: true")]),a._v(" "),s("li",[a._v("devserver\n"),s("blockquote",[s("p",[a._v("配置 devserver: {inline:true}  devServer.compress NamedModulesPlugin")])])])])])]),a._v(" "),s("h3",{attrs:{id:"三、优化输出质量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、优化输出质量"}},[a._v("#")]),a._v(" 三、优化输出质量")]),a._v(" "),s("ol",[s("li",[a._v("优化输出质量--压缩文件体积\n"),s("ol",[s("li",[a._v("区分环境--减小生产环境代码体积")]),a._v(" "),s("li",[a._v("压缩代码-JS、ES、CSS\n"),s("ul",[s("li",[a._v("require('webpack/lib/optimize/UglifyJsPlugin')")]),a._v(" "),s("li",[a._v("npm i -D uglify-webpack-plugin@beta 防止babel-loader转换ES6代码")]),a._v(" "),s("li",[a._v("压缩CSS：css-loader?minimize、PurifyCSSPlugin")])])]),a._v(" "),s("li",[a._v("使用Tree Shaking剔除JS死代码\n"),s("ul",[s("li",[a._v("使用第三方库时，需要配置 resolve.mainFields: ['jsnext:main', 'main'] 以指明解析第三方库代码时，采用ES6模块化的代码入口")])])])])]),a._v(" "),s("li",[a._v("优化输出质量--加速网络请求\n"),s("ol",[s("li",[a._v("使用CDN加速静态资源加载")]),a._v(" "),s("li",[a._v("多页面应用提取页面间公共代码，以利用缓存 "),s("code",[a._v("require('webpack/lib/optimize/CommonsChunkPlugin');")])]),a._v(" "),s("li",[a._v("分割代码以按需加载 "),s("code",[a._v("import()")]),a._v(" , "),s("code",[a._v("空闲预加载")])])])]),a._v(" "),s("li",[a._v("优化输出质量--提升代码运行时的效率\n"),s("ol",[s("li",[a._v("使用Prepack提前求值 "),s("code",[a._v("require('prepack-webpack-plugin').default;")]),a._v(" 暂不成熟")]),a._v(" "),s("li",[a._v("使用Scope Hoisting 作用域提升\n"),s("ul",[s("li",[a._v("由于需要分析模块间的依赖关系，所以源码必须是采用了ES6模块化的，否则Webpack会降级处理不采用Scope Hoisting")])])])])])]),a._v(" "),s("h3",{attrs:{id:"四、使用输出分析工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、使用输出分析工具"}},[a._v("#")]),a._v(" 四、使用输出分析工具")]),a._v(" "),s("ol",[s("li",[a._v("官方工具Webpack Analyse")]),a._v(" "),s("li",[a._v("webpack-bundle-analyzer")])]),a._v(" "),s("h3",{attrs:{id:"五、其他tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、其他tips"}},[a._v("#")]),a._v(" 五、其他Tips")]),a._v(" "),s("ol",[s("li",[a._v("配置babel-loader时，use: [‘babel-loader?cacheDirectory’]")]),a._v(" "),s("li",[s("code",[a._v("externals")]),a._v(" 排除因为已使用"),s("script",[a._v("标签引入而不用打包的代码，noParse是排除没使用模块化语句的代码")])]),a._v(" "),s("li",[s("code",[a._v("performance")]),a._v("参数")]),a._v(" "),s("li",[a._v("配置profile：true 是否捕捉Webpack构建的性能信息，用于分析是什么原因导致构建性能不佳")]),a._v(" "),s("li",[a._v("配置cache：true，是否启用缓存来提升构建速度")]),a._v(" "),s("li",[a._v("使用"),s("code",[a._v("url-loade")]),a._v("r把小图片转换成base64嵌入到JS或CSS中，减少加载次数")]),a._v(" "),s("li",[a._v("通过imagemin-webpack-plugin压缩图片，通过webpack-spritesmith制作雪碧图")]),a._v(" "),s("li",[a._v("开发环境下将devtool设置为cheap-module-eval-source-map，因为生成这种source map的速度最快，能加速构建。在生产环境下将devtool设置为hidden-source-map")])]),a._v(" "),s("h2",{attrs:{id:"文件分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件分析"}},[a._v("#")]),a._v(" 文件分析")]),a._v(" "),s("ol",[s("li",[a._v("同步加载")]),a._v(" "),s("li",[a._v("harmony")]),a._v(" "),s("li",[a._v("异步加载")])]),a._v(" "),s("h2",{attrs:{id:"tapable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tapable"}},[a._v("#")]),a._v(" tapable")]),a._v(" "),s("ol",[s("li",[a._v("webpack的插件机制")]),a._v(" "),s("li",[a._v("tapable分类")])]),a._v(" "),s("ul",[s("li",[a._v("hook SyncHook在实际工作中有什么用？")]),a._v(" "),s("li",[a._v("tapable很适合用来实现一个插件系统，并且可以控制各种类型的插件的执行的时间点")]),a._v(" "),s("li",[a._v("webpack就是这样做的，提供了很多钩子，然后控制各个钩子的执行时间点")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" synchook "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SyncHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("'name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 注册监听函数")]),a._v("\nsynchook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nsynchook"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'age'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 发布事件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("synchook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'qiqingfu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("SyncHook")])]),a._v(" "),s("h2",{attrs:{id:"代码分割"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码分割"}},[a._v("#")]),a._v(" 代码分割")]),a._v(" "),s("ul",[s("li",[a._v("本质")]),a._v(" "),s("li",[a._v("意义\n"),s("ul",[s("li",[a._v("极端方案的中间状态")])])]),a._v(" "),s("li",[a._v("entry配置 多个entry文件")]),a._v(" "),s("li",[a._v("动态加载(按需加载)：import()")]),a._v(" "),s("li",[a._v("抽取公共代码 splitChunks配置")])]),a._v(" "),s("h2",{attrs:{id:"构建流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建流程"}},[a._v("#")]),a._v(" 构建流程")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("初始化参数")])]),a._v(" "),s("li",[s("p",[a._v("开始编译")])]),a._v(" "),s("li",[s("p",[a._v("确定入口")])]),a._v(" "),s("li",[s("p",[a._v("编译模板")])]),a._v(" "),s("li",[s("p",[a._v("完成模板编译")])]),a._v(" "),s("li",[s("p",[a._v("输出资源")])]),a._v(" "),s("li",[s("p",[a._v("输出完成")])]),a._v(" "),s("li",[s("p",[a._v("编译流程")])]),a._v(" "),s("li",[s("p",[a._v("调试webpack")])]),a._v(" "),s("li",[s("p",[a._v("Stats 对象")])]),a._v(" "),s("li",[s("p",[a._v("详细工作流程")])])]),a._v(" "),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[a._v("#")]),a._v(" 参数")]),a._v(" "),s("ul",[s("li",[a._v("process.argv[] webpack -- 后面的参数   "),s("code",[a._v("不需要引入啥 直接获取")])]),a._v(" "),s("li",[a._v("rollup 只打包js 小")])]),a._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),s("ul",[s("li",[a._v("图片打包问题 不应放在哪儿 打包成base64比较大")])]),a._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);t.default=v.exports}}]);