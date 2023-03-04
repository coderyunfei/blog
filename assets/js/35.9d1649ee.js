(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{313:function(s,t,a){"use strict";a.r(t);var r=a(10),n=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"node-常见的编码规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-常见的编码规范"}},[s._v("#")]),s._v(" node 常见的编码规范")]),s._v(" "),t("h2",{attrs:{id:"总是使用异步函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总是使用异步函数"}},[s._v("#")]),s._v(" 总是使用"),t("code",[s._v("异步函数")])]),s._v(" "),t("p",[s._v("node 最大的两个优势是非阻塞和异步运行。异步函数能充分发挥 node 的优势，而同步函数会阻塞主线程。")]),s._v(" "),t("h2",{attrs:{id:"使用-commonjs-模块规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-commonjs-模块规范"}},[s._v("#")]),s._v(" 使用 CommonJS 模块规范")]),s._v(" "),t("p",[s._v("JS 的模块规范在 node 还在试验阶段，node 模块规范使用 CommonJS。 ##不在函数内部 "),t("code",[s._v("require")]),s._v("模块")]),s._v(" "),t("p",[s._v("CommonJS 规范加载模块是"),t("code",[s._v("同步")]),s._v("的，在函数内部加载模块，先加载再使用，只加载一次，下次使用缓存。在函数内部加载模块可能会阻塞函数执行，另一个问题，加载模块错误，不容易发现错误。\n解决办法是在"),t("strong",[s._v("文件顶部")]),s._v("加载要使用的模块。")]),s._v(" "),t("h2",{attrs:{id:"使用-module-exports导出模块-不用-exports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-module-exports导出模块-不用-exports"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("module.exports")]),s._v("导出模块,不用 exports")]),s._v(" "),t("h2",{attrs:{id:"记得保存-this的引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#记得保存-this的引用"}},[s._v("#")]),s._v(" 记得保存 "),t("code",[s._v("this")]),s._v("的引用")]),s._v(" "),t("p",[s._v("当上下文改变时，this 值会改变，在函数内部使用 this 时，需要事先保存 this。\n使用 "),t("code",[s._v("self")]),s._v("、"),t("code",[s._v("_this")]),s._v("、"),t("code",[s._v("that")]),s._v("保存 this。")]),s._v(" "),t("p",[s._v("另一个不需要事先保存 this 的方法是使用箭头函数。")]),s._v(" "),t("h2",{attrs:{id:"使用严格模式-use-strict"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用严格模式-use-strict"}},[s._v("#")]),s._v(" 使用严格模式 （"),t("em",[s._v("use strict")]),s._v("）")]),s._v(" "),t("h2",{attrs:{id:"检查回调函数是不是一个函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查回调函数是不是一个函数"}},[s._v("#")]),s._v(" 检查回调函数是不是一个函数")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" callback "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'function'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"error-作为回调函数的第一个参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-作为回调函数的第一个参数"}},[s._v("#")]),s._v(" error 作为回调函数的第一个参数")]),s._v(" "),t("h2",{attrs:{id:"总是在回调函数中检查-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总是在回调函数中检查-error"}},[s._v("#")]),s._v(" 总是在回调函数中检查 error")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//do something")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//no error")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//do something")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"记得处理可能的异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#记得处理可能的异常"}},[s._v("#")]),s._v(" 记得处理可能的异常")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" parsedJSON "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  parsedJSON "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// handle err")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parsedJSON"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// use parsedJSON")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"使用-jsdoc-注释函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-jsdoc-注释函数"}},[s._v("#")]),s._v(" 使用 JSDoc 注释函数")]),s._v(" "),t("p",[s._v("parma\nauthor\nexample\nreturns")]),s._v(" "),t("p",[s._v("如何描述参数是一个回调和返回值是一个函数呢？")]),s._v(" "),t("h2",{attrs:{id:"使用进程管理器-如pm2、forever、upstart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用进程管理器-如pm2、forever、upstart"}},[s._v("#")]),s._v(" 使用进程管理器，如"),t("code",[s._v("pm2")]),s._v("、"),t("code",[s._v("forever")]),s._v("、"),t("code",[s._v("upstart")])])])}),[],!1,null,null,null);t.default=n.exports}}]);