原型
构造函数 ，是一种特殊的方法。主要用来在创建对象时初始化对象。每个构造函数都有prototype(原型)属性
每个函数都有prototype(原型)属性，这个属性是一个指针，指向一个对象，
这个对象的用途是包含特定类型的所有实例共享的属性和方法，即这个原型对象是用来给实例共享属性和方法的。
而每个实例内部都有一个指向原型对象的指针。
闭包
简单来说就是函数嵌套函数，内部函数引用来外部函数的变量，从而导致来垃圾回收机制没有生效，变量被保存来下来。
也就是所谓的内存泄漏，然后由于内存泄漏又会导致你项目逐渐变得卡顿等等问题。因此要避免内存泄漏。
原型链
提到原型链就不得不提原型的继承，继承的完美实现方案是借助寄生组合继承，主要实现原理
PersonB.prototype = Object.create(PersonA.prototype)实现来继承PersonA的原型
当我们通过new关键字实例化的对象身上就有了PersonB自身的属性和方法，也有了PersonA的原型方法
当实例化对象调用某个方法时会先在自身和原型上查找，然后是在_proto_上一层层查找，这种方式就是原型链。
vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态
并以相应的规则保证状态以一种可预测的方式发生变化。
tate：Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。
mutation：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
action: action 提交的是 mutation，而不是直接变更状态。action 可以包含任意异步操作。
getter: 相当于Vue中的computed计算属性
vue-router
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌
<router-link>和<router-view>和<keep-alive>
深拷贝浅拷贝
深拷贝：
通过利用JSON.parse(JSON.stringify(Object))来达到深拷贝的目的
但是JSON深拷贝的缺点是undefined和function还有symbol类型是无法进行深拷贝的
如有需要可以自己手动封装函数来达到目的
浅拷贝：
通过ES6新特性Object.assign()与扩展运算符来达到浅拷贝的目的
Vue通信
第一种：props和$emit
第二种：中央事件总线 EventBus(基本不用)
第三种：vuex（状态管理器）
第四种：$parent 和 $children
当然还有其他办法，但是基本不常用
你在工作中遇到那些问题，解决方法是什么
经常遇到的问题就是Cannot read property ‘prototype’ of undefined
解决办法通过浏览器报错提示代码定位问题，解决问题

Vue项目中遇到视图不更新，方法不执行，埋点不触发等问题
一般解决方案查看浏览器报错，查看代码运行到那个阶段未之行结束，阅读源码以及相关文档等
然后举出来最近开发的项目中遇到的算是两个比较大的问题。
webpack配置入口出口
module.exports={
    //入口文件的配置项
    entry:{},
    //出口文件的配置项
    output:{},
    //模块：例如解读CSS,图片如何转换，压缩
    module:{},
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{}
}
简单描述了一下这几个属性是干什么的。
webpack3和webpack4区别
1.mode

webpack增加了一个mode配置，只有两种值development | production。对不同的环境他会启用不同的配置。

2.CommonsChunkPlugin

CommonChunksPlugin已经从webpack4中移除。
可使用optimization.splitChunks进行模块划分（提取公用代码）。
但是需要注意一个问题，默认配置只会对异步请求的模块进行提取拆分，如果要对entry进行拆分
需要设置optimization.splitChunks.chunks = 'all'。

3.webpack4使用MiniCssExtractPlugin取代ExtractTextWebpackPlugin。

4.代码分割。

使用动态import，而不是用system.import或者require.ensure

5.vue-loader。

使用vue-loader插件为.vue文件中的各部分使用相对应的loader，比如css-loader等

6.UglifyJsPlugin

现在也不需要使用这个plugin了，只需要使用optimization.minimize为true就行，production mode下面自动为true

optimization.minimizer可以配置你自己的压缩程序
二面

陈述输入URL回车后的过程
1.读取缓存：
        搜索自身的 DNS 缓存。(如果 DNS 缓存中找到IP 地址就跳过了接下来查找 IP 地址步骤，直接访问该 IP 地址。)
2.DNS 解析:将域名解析成 IP 地址
3.TCP 连接：TCP 三次握手，简易描述三次握手
           客户端：服务端你在么？
           服务端：客户端我在，你要连接我么？
           客户端：是的服务端，我要链接。
           连接打通，可以开始请求来
4.发送 HTTP 请求
5.服务器处理请求并返回 HTTP 报文
6.浏览器解析渲染页面
7.断开连接：TCP 四次挥手

关于第六步浏览器解析渲染页面又可以聊聊如果返回的是html页面
根据 HTML 解析出 DOM 树
根据 CSS 解析生成 CSS 规则树
结合 DOM 树和 CSS 规则树，生成渲染树
根据渲染树计算每一个节点的信息
根据计算好的信息绘制页面
陈述http
基本概念：

HTTP，全称为 HyperText Transfer Protocol，即为超文本传输协议。是互联网应用最为广泛的一种网络协议
所有的 www 文件都必须遵守这个标准。

http特性：

HTTP 是无连接无状态的
HTTP 一般构建于 TCP/IP 协议之上，默认端口号是 80
HTTP 可以分为两个部分，即请求和响应。

http请求：

HTTP 定义了在与服务器交互的不同方式，最常用的方法有 4 种
分别是 GET，POST，PUT， DELETE。URL 全称为资源描述符，可以这么认为：一个 URL 地址
对应着一个网络上的资源，而 HTTP 中的 GET，POST，PUT，DELETE
就对应着对这个资源的查询，修改，增添，删除4个操作。

HTTP 请求由 3 个部分构成，分别是：状态行，请求头(Request Header)，请求正文。

HTTP 响应由 3 个部分构成，分别是：状态行，响应头(Response Header)，响应正文。

HTTP 响应中包含一个状态码，用来表示服务器对客户端响应的结果。
状态码一般由3位构成：

1xx : 表示请求已经接受了，继续处理。
2xx : 表示请求已经处理掉了。
3xx : 重定向。
4xx : 一般表示客户端有错误，请求无法实现。
5xx : 一般为服务器端的错误。

比如常见的状态码：

200 OK 客户端请求成功。
301 Moved Permanently 请求永久重定向。
302 Moved Temporarily 请求临时重定向。
304 Not Modified 文件未修改，可以直接使用缓存的文件。
400 Bad Request 由于客户端请求有语法错误，不能被服务器所理解。
401 Unauthorized 请求未经授权，无法访问。
403 Forbidden 服务器收到请求，但是拒绝提供服务。服务器通常会在响应正文中给出不提供服务的原因。
404 Not Found 请求的资源不存在，比如输入了错误的URL。
500 Internal Server Error 服务器发生不可预期的错误，导致无法完成客户端的请求。
503 Service Unavailable 服务器当前不能够处理客户端的请求，在一段时间之后，服务器可能会恢复正常。

大概还有一些关于hhtp请求和响应头信息的介绍。
说说Vue原理
Vue是采用数据劫持配合发布者-订阅者模式，通过Object.defineProperty来()来劫持各个属性的getter和setter
在数据发生变化的时候，发布消息给依赖收集器，去通知观察者，做出对应的回调函数去更新视图。

具体就是：
MVVM作为绑定的入口，整合Observe,Compil和Watcher三者，通过Observe来监听model的变化
通过Compil来解析编译模版指令，最终利用Watcher搭起Observe和Compil之前的通信桥梁
从而达到数据变化 => 更新视图，视图交互变化(input) => 数据model变更的双向绑定效果。
Vue路由守卫有哪些，怎么设置，使用场景等
常用的两个路由守卫：router.beforeEach 和 router.afterEach

每个守卫方法接收三个参数：

to: Route: 即将要进入的目标 路由对象

from: Route: 当前导航正要离开的路由

next: Function: 一定要调用该方法来 resolve 这个钩子。

在项目中，一般在beforeEach这个钩子函数中进行路由跳转的一些信息判断。
判断是否登录，是否拿到对应的路由权限等等。

数组去重
第一种：通过ES6新特性Set()
例如：var arr = [1, 2, 3, 1, 2]; var newArr= [...new Set(arr)]



第二种：封装函数利用 {} 和【】
function uniqueEasy(arr) {
    if(!arr instanceof Array) {
        throw Error('当前传入的不是数组')
    }
    let list = []
    let obj = {}
    arr.forEach(item => {
        if(!obj[item]) {
            list.push(item)
            obj[item] = true
        }
    })
    return list
}
当然还有其他的方法，但本人项目中一般使用以上两种基本满足

Set,Map解构
ES6 提供了新的数据结构 Set。
它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
对数组排序
第一种方法利用sort方法
第二种利用冒泡排序
说一说js是什么语言
js是一种运行在浏览器的脚本语言，这种语言主要的功能是可以制作出动态的页面的效果
我们可以通过js+css+html布局来形成我们现在可以访问展示的页面

js语言是弱语言类型， 因此我们在项目开发中当我们随意更改某个变量的数据类型后
有可能会导致其他引用这个变量的方法中报错等等。
原型
JavaScript中的对象都有一个特殊的 prototype 内置属性，其实就是对其他对象的引用
几乎所有的对象在创建时 prototype 属性都会被赋予一个非空的值，我们可以把这个属性当作一个备用的仓库
当试图引用对象的属性时会触发get操作，第一步时检查对象本身是否有这个属性，如果有就使用它，没有就去原型中查找。一层层向上直到Object.prototype顶层

基于原型扩展描述一下原型链，什么是原型链，原型的继承，ES5和ES6继承与不同点。
ES6新特性
1.ES6引入来严格模式
    变量必须声明后在使用
    函数的参数不能有同名属性, 否则报错
    不能使用with语句 (说实话我基本没用过)
    不能对只读属性赋值, 否则报错
    不能使用前缀0表示八进制数,否则报错 (说实话我基本没用过)
    不能删除不可删除的数据, 否则报错
    不能删除变量delete prop, 会报错, 只能删除属性delete global[prop]
    eval不会在它的外层作用域引入变量
    eval和arguments不能被重新赋值
    arguments不会自动反映函数参数的变化
    不能使用arguments.caller (说实话我基本没用过)
    不能使用arguments.callee (说实话我基本没用过)
    禁止this指向全局对象
    不能使用fn.caller和fn.arguments获取函数调用的堆栈 (说实话我基本没用过)
    增加了保留字（比如protected、static和interface）

2.关于let和const新增的变量声明

3.变量的解构赋值

4.字符串的扩展
    includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
5.数值的扩展
    Number.isFinite()用来检查一个数值是否为有限的（finite）。
    Number.isNaN()用来检查一个值是否为NaN。
6.函数的扩展
    函数参数指定默认值
7.数组的扩展
    扩展运算符
8.对象的扩展
    对象的解构
9.新增symbol数据类型

10.Set 和 Map 数据结构
    ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。
    
    Map它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
11.Proxy
    Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问
    都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
    Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
    Vue3.0使用了proxy
12.Promise
    Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
    特点是：
        对象的状态不受外界影响。
        一旦状态改变，就不会再变，任何时候都可以得到这个结果。
13.async 函数
    async函数对 Generator 函数的区别：
    （1）内置执行器。
    Generator 函数的执行必须靠执行器，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。
    （2）更好的语义。
    async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
    （3）正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。
    （4）返回值是 Promise。
    async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
14.Class
    class跟let、const一样：不存在变量提升、不能重复声明...
    ES6 的class可以看作只是一个语法糖，它的绝大部分功能
    ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
15.Module
    ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。
    import和export命令以及export和export default的区别
Css3新特性
1.过渡 transition
2.动画 animation
3.形状转换 transform
4.阴影 box-shadow
5.滤镜 Filter
6.颜色 rgba
7.栅格布局 gird
8.弹性布局 flex
等等还多...
说一说你用过的UI框架
Element-UI Vant
说一说什么是跨域，怎么解决
因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。
为来防止CSRF攻击
1.JSONP
    JSONP 的原理很简单，就是利用 <script> 标签没有跨域限制的漏洞。
    通过 <script> 标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。
    <script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
    <script>
        function jsonp(data) {
        console.log(data)
    }
    </script>
    JSONP 使用简单且兼容性不错，但是只限于 get 请求。
2.CORS
    CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现。
3.document.domain
    该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com 适用于该方式。

    只需要给页面添加 document.domain = 'test.com' 表示二级域名都相同就可以实现跨域
4.webpack配置proxyTable设置开发环境跨域
5.nginx代理跨域
6.iframe跨域
7.postMessage
    这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息
说一说前端性能优化方案
三个方面来说明前端性能优化
一：webapck优化与开启gzip压缩
    1.babel-loader用 include 或 exclude 来帮我们避免不必要的转译，不转译node_moudules中的js文件
    其次在缓存当前转译的js文件，设置loader: 'babel-loader?cacheDirectory=true'
    2.文件采用按需加载等等
    3.具体的做法非常简单，只需要你在你的 request headers 中加上这么一句：
    accept-encoding:gzip
    4.图片优化，采用svg图片或者字体图标
    5.浏览器缓存机制，它又分为强缓存和协商缓存
二：本地存储——从 Cookie 到 Web Storage、IndexedDB
    说明一下SessionStorage和localStorage还有cookie的区别和优缺点
三：代码优化
    1.事件代理
    2.事件的节流和防抖
    3.页面的回流和重绘
    4.EventLoop事件循环机制
    5.代码优化等等

说一说SessionStorage和localStorage还有cookie
共同点：都是保存在浏览器端、且同源的
不同点：
    1.cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。
    cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下
    sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。
    2.存储大小限制也不同，cookie数据不能超过4K，sessionStorage和localStorage可以达到5M
    3.sessionStorage：仅在当前浏览器窗口关闭之前有效；
    localStorage：始终有效，窗口或浏览器关闭也一直保存，本地存储，因此用作持久数据；
    cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭
    4.作用域不同
    sessionStorage：不在不同的浏览器窗口中共享，即使是同一个页面；
    localstorage：在所有同源窗口中都是共享的；也就是说只要浏览器不关闭，数据仍然存在
    cookie: 也是在所有同源窗口中都是共享的.也就是说只要浏览器不关闭，数据仍然存在
说一说你用过的css布局
gird布局，layout布局，flex布局，双飞翼，圣杯布局等
Promise是什么，解决了什么，之前怎么实现的
    Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
    解决来之前在请求中回调请求产生的回调地狱，使得现在的代码更加合理更加优雅，也更加容易定位查找问题。
说说浏览器缓存
缓存可以减少网络 IO 消耗，提高访问速度。浏览器缓存是一种操作简单、效果显著的前端性能优化手段
很多时候，大家倾向于将浏览器缓存简单地理解为“HTTP 缓存”。
但事实上，浏览器缓存机制有四个方面，它们按照获取资源时请求的优先级依次排列如下：

Memory Cache
Service Worker Cache
HTTP Cache
Push Cache

缓存它又分为强缓存和协商缓存。优先级较高的是强缓存，在命中强缓存失败的情况下，才会走协商缓存
    实现强缓存，过去我们一直用 expires。
    当服务器返回响应时，在 Response Headers 中将过期时间写入 expires 字段，现在一般使用Cache-Control 两者同时出现使用Cache-Control
    
    协商缓存，Last-Modified 是一个时间戳，如果我们启用了协商缓存，它会在首次请求时随着 Response Headers 返回：每次请求去判断这个时间戳是否发生变化。
    从而去决定你是304读取缓存还是给你返回最新的数据
    
    
    
    
    
    