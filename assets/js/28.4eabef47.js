(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{518:function(t,e,a){"use strict";a.r(e);var v=a(58),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"源码原理认识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码原理认识"}},[t._v("#")]),t._v(" 源码原理认识")]),t._v(" "),a("blockquote",[a("p",[t._v("mount 断点")])]),t._v(" "),a("ol",[a("li",[t._v('package.json "build": "node scripts/build.js"')]),t._v(" "),a("li",[t._v("scripts/build.js 文件")])]),t._v(" "),a("ul",[a("li",[t._v("作用是使用rollup打包源代码")]),t._v(" "),a("li",[t._v("./config 文件查看入口文件")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("入口文件src")])]),t._v(" "),a("ul",[a("li",[t._v("platforms 平台\n"),a("ul",[a("li",[t._v("web/entry-runtime-with-compiler.js (看Vue引入路劲)")]),t._v(" "),a("li",[t._v("runtime / compiler 区别 （编译vue中的template）")]),t._v(" "),a("li",[t._v("找到 runtime/index 文件")])])])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("runtime/index 文件\n"),a("ul",[a("li",[t._v("Vue.prototype."),a("strong",[t._v("patch")]),t._v(" (比对dom)")]),t._v(" "),a("li",[t._v("找到 core/index (核心文件)")]),t._v(" "),a("li",[t._v("mountComponent 挂载逻辑\n"),a("ul",[a("li",[t._v("core/instance/lifecyle")]),t._v(" "),a("li",[t._v("updataComponent "),a("strong",[t._v("组件级更新")]),t._v(" -- 只要一new 就将这个watcher放到Dep.target")])])])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("core/index (核心文件)\n"),a("ul",[a("li",[t._v("initGlobalApi 初始化全局api\n"),a("ul",[a("li",[t._v("Vue.util\n"),a("ul",[a("li",[t._v("definReactive , 宏任务-先执行，微任务")]),t._v(" "),a("li",[t._v("set")]),t._v(" "),a("li",[t._v("delect")]),t._v(" "),a("li",[t._v("nextTick (下一事件环 eventLoop)")]),t._v(" "),a("li",[t._v("initUse Vue.use()")]),t._v(" "),a("li",[t._v("initMixin Vue.mixin ==> mergeOptions 合并选项 如果重名的变成数组 [beforeCreater]")]),t._v(" "),a("li",[t._v("initExtend Vue.extend  产生一个子类  让子类继承Vue")])])])])]),t._v(" "),a("li",[t._v("instance/index 真正的Vue 构造函数\n"),a("ul",[a("li",[t._v("initMixin(Vue) 初始化mixin\n"),a("ul",[a("li",[t._v("initLifecycle(vm) 初始化父子关系 $parent $ref")]),t._v(" "),a("li",[t._v("initEvents(vm)  初始化events属性 {}")]),t._v(" "),a("li",[t._v("initRender(vm) vm.$createElement => h() 方法")]),t._v(" "),a("li",[t._v("callHook(vm, 'beforeCreate') 调用beforeCreate")]),t._v(" "),a("li",[t._v("initInjections() 初始化注入数据 一直向上寻找——provided")]),t._v(" "),a("li",[t._v("initState(vm) 响应式原理 MVVM  data Props methods watch computed")]),t._v(" "),a("li",[t._v("initProvide(vm)  vm._provided 定义属性")]),t._v(" "),a("li",[t._v("callHook(vm, 'created')")])])]),t._v(" "),a("li",[t._v("stateMixin this.$set this.$delete 混合全局方法 添加到原型上")]),t._v(" "),a("li",[t._v("eventsMixin $on $once $off $emit 用到了发布订阅")]),t._v(" "),a("li",[t._v("lifecycleMixin\n"),a("ol",[a("li",[t._v("Vue.prototype._updata")]),t._v(" "),a("li",[t._v("$forceUpdata(调用watcher 的updata)  $destory(组件销毁，解绑父子关系， "),a("em",[t._v("没有清空视图")]),t._v(")")])])]),t._v(" "),a("li",[t._v("renderMixin Vue.prototype_render $nextTick")])])])])])])])]),t._v(" "),a("h2",{attrs:{id:"_1-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-rollup"}},[t._v("#")]),t._v(" 1. rollup")]),t._v(" "),a("h2",{attrs:{id:"_2-响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应式原理"}},[t._v("#")]),t._v(" 2. 响应式原理")]),t._v(" "),a("blockquote",[a("p",[t._v("Observer, Watcher, 数据劫持")])]),t._v(" "),a("h2",{attrs:{id:"_3-模板编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-模板编译"}},[t._v("#")]),t._v(" 3. 模板编译")]),t._v(" "),a("blockquote",[a("p",[t._v("Compile")])]),t._v(" "),a("ul",[a("li",[t._v("render函数")]),t._v(" "),a("li",[t._v("文档碎片 遍历\n"),a("ul",[a("li",[t._v('获取Dom节点属性 node.attributes // 类数组 [...attrs] type="type" v-model="message"')]),t._v(" "),a("li",[t._v("编译{{}} 获取文本节点内容 node.textContent")]),t._v(" "),a("li",[t._v("改名字value")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attr\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_4-创建渲染watcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建渲染watcher"}},[t._v("#")]),t._v(" 4. 创建渲染watcher")]),t._v(" "),a("h2",{attrs:{id:"_5-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-生命周期"}},[t._v("#")]),t._v(" 5. 生命周期")]),t._v(" "),a("h2",{attrs:{id:"_6-依赖收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-依赖收集"}},[t._v("#")]),t._v(" 6. 依赖收集")]),t._v(" "),a("h2",{attrs:{id:"_7-异步更新nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-异步更新nexttick"}},[t._v("#")]),t._v(" 7. 异步更新nextTick")]),t._v(" "),a("h2",{attrs:{id:"api实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api实现原理"}},[t._v("#")]),t._v(" Api实现原理")]),t._v(" "),a("ul",[a("li",[t._v("$emit")]),t._v(" "),a("li",[t._v("set()")]),t._v(" "),a("li",[t._v("指令\n"),a("ul",[a("li",[t._v("v-on")]),t._v(" "),a("li",[t._v("v-bind(简写:)")])])])]),t._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("ul",[a("li",[t._v("一个.vue文件会返回什么")])]),t._v(" "),a("h2",{attrs:{id:"响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[t._v("#")]),t._v(" 响应式")]),t._v(" "),a("ul",[a("li",[t._v("对象监听")]),t._v(" "),a("li",[t._v("数组监听")])]),t._v(" "),a("h2",{attrs:{id:"模板编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板编译"}},[t._v("#")]),t._v(" 模板编译")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("正则解析标签和内容")])]),t._v(" "),a("li",[a("p",[t._v("生成ast语法树")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseHtml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("生成代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("编译为"),a("code",[t._v("render")]),t._v("函数")])])]),t._v(" "),a("blockquote",[a("p",[t._v("先解析render选项，再template，最后外部模块"),a("br"),t._v("\n注意: template模板中不可以字符串开头 必须标签开头")])]),t._v(" "),a("ul",[a("li",[t._v("render函数将模板字符串 转化为 ast 抽象语法树\n"),a("ul",[a("li",[t._v("正则解析")]),t._v(" "),a("li",[t._v("前进删除"),a("code",[t._v("advance")]),t._v("函数")])])])]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);e.default=_.exports}}]);