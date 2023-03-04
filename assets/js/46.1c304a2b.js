(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{324:function(a,s,n){"use strict";n.r(s);var t=n(10),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"yarn-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-的使用"}},[a._v("#")]),a._v(" yarn 的使用")]),a._v(" "),s("p",[a._v("npm 有时候安装依赖巨慢，而 yarn 就快得多，为了提升开发体验，有必要学习 yarn。")]),a._v(" "),s("h2",{attrs:{id:"yarn-解决什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-解决什么问题"}},[a._v("#")]),a._v(" yarn 解决什么问题")]),a._v(" "),s("p",[a._v("yarn 是用脸书、谷歌等多家公司联合开发的 node 包管理器，"),s("strong",[a._v("旨在解决 npm 安装依赖时，版本不确定的问题。")]),a._v(" 相同的依赖，安装的顺序不同，最后得到的依赖会不同，这就导致在相同的依赖，运行结果却不同。"),s("code",[a._v("npm 5+ 以后的版本加入了 package-lock.json 可以用来锁定依赖版本")]),a._v("。引入版本锁定文件后，虽然版本不确定的问题得以解决， yarn 还是具备以下 优势：")]),a._v(" "),s("ul",[s("li",[a._v("速度快---缓存安装过的依赖，"),s("strong",[a._v("并行下载")]),a._v("，速度极快；")]),a._v(" "),s("li",[a._v("安全---在执行代码之前，会对依赖的完整性进行校验；")]),a._v(" "),s("li",[a._v("可靠---保证不同平台的依赖相同。")])]),a._v(" "),s("h3",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("h4",{attrs:{id:"初始化依赖描述文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化依赖描述文件"}},[a._v("#")]),a._v(" 初始化依赖描述文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" init "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初始化依赖描述文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" init "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用默认值初始化依赖描述")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"执行脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本"}},[a._v("#")]),a._v(" 执行脚本")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"添加依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[a._v("#")]),a._v(" 添加依赖")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装全部依赖")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装全部依赖")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" package "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 默认安装成【生产依赖】，最新版本。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" package@version "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 默认安装主版本里最新的")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" package@version "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装精确版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" package@version "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-T")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装次版本里最新的")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" package@tag\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" file:/path/to/local/folder "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装本地包，用于测试还没发布的包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dev")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开发依赖")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-D")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" remove package "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载依赖")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" package "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global remove package "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局卸载")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("blockquote",[s("p",[a._v("全局安装是一个坏习惯，因为全局包不会出现在项目依赖里，拿到你的项目的人，难以得到想要的依赖。\n"),s("strong",[a._v("本地安装")]),a._v("就能确保每个用你项目的人，都有相同的依赖。")])]),a._v(" "),s("h4",{attrs:{id:"查看依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看依赖"}},[a._v("#")]),a._v(" 查看依赖")]),a._v(" "),s("div",{staticClass:"language-ba line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yarn list # 本地依赖\nyarn global list # 全局依赖\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"缓存相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存相关"}},[a._v("#")]),a._v(" 缓存相关")]),a._v(" "),s("p",[a._v("Yarn 将每个包存储在你的文件系统 - 用户目录 - 全局缓存中。yarn cache list 将列出已缓存的每个包。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" cache list "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pattern")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出匹配指定模式的缓存的包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" cache "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输出全局缓存路径")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" cache-folder "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 改变缓存路径")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" cache clean "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("packname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 清除包缓存")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h4",{attrs:{id:"验证依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证依赖"}},[a._v("#")]),a._v(" 验证依赖")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" check "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#验证当前项目 package.json 里的依赖版本和 yarn 的 lock 文件是否匹配。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" check "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--integrity")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 验证当前项目 package.json 里包内容的版本的 hash 值是否与 yarn 的 lock 文件一致。 这有助于验证包依赖没有更改。")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"升级依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级依赖"}},[a._v("#")]),a._v(" 升级依赖")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade package\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade package@version\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" upgrade package@tag\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h4",{attrs:{id:"卸载依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载依赖"}},[a._v("#")]),a._v(" 卸载依赖")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" remove package\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global remove package "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局卸载")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"配置相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置相关"}},[a._v("#")]),a._v(" 配置相关")]),a._v(" "),s("p",[a._v("设置配置信息")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" key value\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("查看配置")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config get key\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config list "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置列表")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("删除配置")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" config delete key\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"查看包信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看包信息"}},[a._v("#")]),a._v(" 查看包信息")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" info package\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" info package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--json")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 以 JSON 格式显示")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" info package field "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看字段")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" info package "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看包发布的时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" bin "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看可执行文件的目录")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h4",{attrs:{id:"查看过时的包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看过时的包"}},[a._v("#")]),a._v(" 查看过时的包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" outdated\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" outdated package "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"开发包时常有的命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发包时常有的命令"}},[a._v("#")]),a._v(" 开发包时常有的命令")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" version "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 升级包的版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" version --new-version "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定一个新版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" login "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 登录 只需要输入用户名和邮箱")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("logout")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 退出")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" publish "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 发布包")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/cli/version",target:"_blank",rel:"noopener noreferrer"}},[a._v("yarn version"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);