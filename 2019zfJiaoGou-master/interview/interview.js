// 二、JavaScript部分
// 1.call和apply的区别是什么，哪个性能更好一些

/*
fn.call(obj,10,20,30);
fn.apply(obj,[10,20,30]);
* call 和apply都是function这个类，原型上的方法，每一个函数作为function上的实例，都可以调用这俩个方法。而这二个方法执行的目的都是用来改变函数中this指向的，让函数执行，并且改变函数中this指向的。
* 区别在于 call传参是一个一个传，apply传参是把所有需要传递的参数以数组的形式保存起来进行传递
*
* 和call和apply同样用来改变this指向的，还有bind，只是bind不会把函数立即执行，只是预先把函数中的this进行处理
*
*
* call的性能要比apply好那么一些（尤其是传递给函数的参数超过三个的时候），所以后期开发的时候，可以使用call多一点
*
* */
/*
let arr=[10,20,30],
    obj={};
function fn(x,y,z) {}
fn.apply(obj,arr);//=>  x=10  y=20  z=30
fn.call(obj,arr);//=>  x=[10,20,30]  y=undefined  z=undefined
fn.call(obj,...arr);//=> 基于es6的展开运输符也可以实现把数组中的每一项一次传递给函数

*/

// => 自己实现性能测试（直供参考）：任何的代码性能测试都是和测试的环境有关系的。比如CPU、内存、GPU等电脑当前性能不会有相同的情况，不同浏览器也会导致性能上的不同；
//console.time可以测试出一段程序执行的时间
//console.profile();在火狐浏览器中安装FireBug,可以更精准的获取到当前程序每一步骤所消耗的时间


/* 会有不同的运行次数
let t1=new Date();
for(let i=0;i<1000000;i++){

}
console.log(new Date()-t1);*/


//打印出A的代码运行10次用多少时间
/*console.time('A');
for(let i=0;i<10;i++){

}
console.timeEnd('A');*/

// 2.实现(5).add(3).minus(2),使其输出结果为：6

/*

5+3-2=6

* 这道题考察的是  类和实例，以及在类的原型上构建方法，并且能够实现链式写法的，指面向对象最为基础的也是最为核心的点
*
* */

// arr.push();
//arr是Array的实例，可以调用Array.prototype上的方法。push就是其中一个
/*

~ function () {
 //   => 每一个方法执行完，都要返回number这个类的实例，这样才可以继续调取number类中的方法，（也就是链式写法）

 function check(n) {//检测值是否正确
   /!* n=Number(n);
    return isNaN(n)?0:n; //检测是否为有效数字*!/

     return (n=Number(n))&&(isNaN(n)?0:n);
 }
 function add(n) {
     n=check(n);
    return this+n;
 }
 function minus(n) {
     n=check(n);
     return this-n;
 }
 Number.prototype.add=add;
 Number.prototype.minus=minus;
/!*懒人写法
["add","minus"].forEach(item=>{
     Number.prototype[item]=eval(item);
 });*!/

    console.log(check(3))
}();

console.log((5).add(3).minus(2))
*/



// 3.箭头函数与普通函数（function）的区别是什么？构造函数（function)可以使用new生成实例，那么箭头函数可以吗？为什么？
/*
* 箭头函数和普通函数的区别：
* 1.箭头函数语法比普通函数更加简洁(es6中每一个函数都可以使用形成赋默认值和剩余运算符)
* 2.箭头函数中没有自己的this，他里面出现的this是继承函数所处的上下文中的this,(使用call/apply等任何方式都无法改变this的指向)。不涉及到this问题，可以随便用，但是涉及到的话要考虑清楚
* 3.箭头函数中没有arguments（类数组），只能基于...arg获取传递的参数集合（数组）
* 4.箭头函数不能被new执行（因为：箭头函数没有this,也没有prototype）
* */

/*
function fn(x) {
    return function (y) {
        return x+y
    }
}
let fn = x=>  y=>x+y

*/

/*let obj={name:'OBJ'};
function fn1() {
    console.log(this)//obj
}
fn1.call(obj)

let fn2=()=>{
    console.log(this);//window
}
fn2.call(obj)*/

/*document.body.onclick=()=>{
    //=>this:window  不是当前操作的body了
}
document.body.onclick=function () {
    //=>this:body
   /!* Array.sort(function (a,b) {
        //=>this:window  回调函数中的this一般都是window
        return a-b;
    })*!/

    Array.sort((a,b) => {
        //=>this:body
        return a-b;
    })
}*/


//4.回调函数：把一个函数B作为实参传递给另外一个函数A，函数A在执行的时候，可以把传递进来的函数B去执行（执行N次，可传值，可改this，）
//each原理
/*function each(arr,callBack) {
    // => callBack:function(item,index){}
    for (let i=0;i<arr.length;i++){
        /!*let item =arr[i],
            index=i;
            callBack(item,index)*!/
        //简化后
       let flag = callBack.call(arr,arr[i],i);
        //=>接收回调函数返回的结果，如果是false，我们结束循环
        if (flag === false){
           break
        }
    }
}
each([10,20,30,40],function (item,index) {
  //=>this：原始操作数组
    if(index>1){
        return false
    }

})*/

/*
let fn=(...arg)=>{
   // console.log(arguments); //Uncaught ReferenceError: arguments is not defined
    console.log(arg)  //[10,20,30]
}
fn(10,20,30)*/

/*function Fn() {
    this.x=100;
}
Fn.prototype.getX=function () {
    let f = new Fn;
}*/

/*let Fn=()=>{
    this.x=200
}
let f =new Fn; //Fn is not a constructor*/


/*
1. each
let arr=[10,20,30,'AA',40,85],
    obj={'p':'a'};

Array.prototype.each =function(callback,that){
    let  arr2=[];
    for(let i=0;i<arr.length;i++){
        let flag = callback.call(that?that:window,arr[i],i);
       if (flag === false){
           arr.splice(0,i);
           for(let i=0;i<arr.length;i++){
               arr2.push(arr[i]);
           }
           // arr2.push(...arr);
           break;
       }

        arr2.push(flag)

    }
    return arr2

}
arr = arr.each(function (item,index) {
    if (isNaN(item)){
        return false;
    }
    return item * 10;
},obj)

console.log(arr)*/
//得出arr=[100,200,300,'AA',40]


/*
* 5.replace重写这个方法，实现和内置一模一样的效果（只需要考虑replace([reg],[callback]) 这种传参格式的处理）
*(此题是作业，但是不会)
*
* */

// let str='zhufeng2019zhufeng2029';
// str = str.replace(/zhufeng/g,function (...arg) {
//    //arg中存储了每一次大正则匹配的信息和小分组匹配的信息
//     return '@';//=>返回的是啥把当前正在匹配的内容替换成啥
// });


/*如何把一个字符串的大小写取反（大写变小写，小写变大写），例如‘AbC’变成‘aBc’*/

/*let str="zhufengPEixun的周老师很帅！吁*100！haha";
str =str.replace(/[a-zA-Z]/g,content=>{
    //=>content:每一次正则匹配的结果
    //验证是否为大写字母：把字母转换成大写后和之前是否一样，如果一样，之前也是大写的；在ASCII表中找到大写字母的取值范围进行判断（65-90）；
    // content.toUpperCase()===content
    // content.charCodeAt()>=65 && content.charCodeAt()<=90

   return content.toUpperCase()===content?content.toLowerCase():content.toUpperCase();


});
console.log(str)*/


/*6..实现一个字符串匹配算法，从字符串s中，查找是否存在字符串T，若存在返回所在位置，不存在返回-1，（如果不能基于indexOf/includes等内置的方法，你会如何处理呢？）*/
/*相当于自己写indexOf*/
// ~function () {
    /*
    * 思路一：循环元素字符串中的每一项，让每一项从当前位置向后截取T.length个字符，然后和T进行比较，如果不一样继续循环；如果一样返回当前索引即可（结束循环）；
    * */
/*    function myIndexOf(T) {
        //=>this：S
        let lenT=T.length,
            lenS=this.length,
            res=-1;
        if(lenT>lenS) return -1;
        for(let i=0;i<=lenS-lenT;i++){
            if (this.substr(i,lenT)===T){
                res=i;
                break
            }
        }
         return res;
    }*/

    //思路二：正则处理
/*    function myIndexOf(T) {
        //=>this：S
        let reg=new RegExp(T),
            res=reg.exec(this);
        return res === null?-1:res.index;
    }
    String.prototype.myIndexOf=myIndexOf;
}();
let S="zhufengpeixun";
let T="pei";

console.log(S.myIndexOf(T));*/

/*7..输出下面代码运行结果*/
//example 1
// var a={},b='123',c=123;
// a[b]='b';
// a[c]='c';
// console.log(a[b]);

/*
* 上面的题真坑，是a['123']='b'和a[123]='c'的比较，不是a[b],a[c]
* */



//example 2
// var a={},b=Symbol('123'),c=Symbol(123);
// a[b]='b';
// a[c]='c';
// console.log(a[b]);

/*
* 上面的题  Symbol是es6中新增的数据类型  typeof Symbol('123') === "Symbol"，它创建出来的值是唯一值， Symbol('123')===Symbol('123')为false
* */


//example 3
// var a={},b={key:'123'},c={key:'456'};
// a[b]='b';
// a[c]='c';
// console.log(a[b]);
/*
* 上面的题
* 1.对象的属性名不能是一个对象（遇到对象属性名，会默认转换为字符串）
* obj={}  arr=[12,23]   obj[arr]="珠峰"   obj=>{"12,23":"珠峰"}
* 2.普通对象.toString()  调取的是Object.prototype上的方法（这个方法是用来检测数据类型的）
* obj={}   Object.toString() =>  "[object Object]"
* */


/*7.在输入框中如何判断输入的是一个正确的网址，例如：用户输入一个字符串，验证是否符合URL网址的格式*/

/*let str="http://www.zhufengpeixun.cn/index.html?lx=1&from=wx#video";
let reg=/^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
console.log(reg.exec(str))*/
/*=>URL格式
1.协议://  http/https/ftp
2.域名
www.zhufengpeix.cn
zhufengpeixun.cn
kbs.sports.qq.com
kbs.sports.qq.com.cn
3.请求路径
  /
  /index.html
 /stu/index.html
 /stu/

 4.问号传参
 ?xxx=xxx&xxx
 5.哈希值
 #xxx

 */


/*8.*/
/*function Foo() {
    Foo.a=function () {
        console.log(1)
    };
    this.a=function () {
        console.log(2)
    }
}
//=》把Foo当做类，在原型上设置实例公有的属性方法  => 实例.a()
Foo.prototype.a=function () {
    console.log(3)
};
//=>把Foo当做普通对象设置私有的属性方法
Foo.a=function () {
    console.log(4)
};
Foo.a();
let obj=new Foo();//它虽然创建个实例，但是也会将该函数运行
obj.a();//先找私有，再找公有
Foo.a();*/


/*9.编写代码实现图片的懒加载
*
* 为什么要实现图片懒加载
*   1.是前端性能优化的重要方案，
*     +通过图片或者数据的延迟加载，我们可以加快页面渲染的速度，让第一次打开页面的速度变快
*     + 只有滑动到某个区域，我们才加载真实的图片，这样也可以节省加载的流量
*
*   2. 处理方案
*     + 把所有需要延迟加载的图片用一个盒子包起来，设置宽高和默认占位图
*     + 开始让所有的Img的src为空，把真实图片的地址放到Img的自定义属性上
*     + 等待所有其他资源都加载完成后，我们再开始加载图片
*     + 对于很多图片，需要当页面滚动的时候，当前图片完全显示出来后在加载真实图片
*     + ...
* */


// 1. 实现一个call函数
// 将要改变this指向的方法挂到目标this上执行并返回
/*Function.prototype.mycall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }
    context = context || window
    context.fn = this
    let arg = [...arguments].slice(1)
    let result = context.fn(...arg)
    delete context.fn
    return result
}*/

// 2. 实现一个apply函数
/*Function.prototype.myapply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }
    context = context || window
    context.fn = this
    let result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}*/

// 3. 实现一个bind函数
/*Function.prototype.mybind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    let _this = this
    let arg = [...arguments].slice(1)
    return function F() {
        // 处理函数使用new的情况
        if (this instanceof F) {
            return new _this(...arg, ...arguments)
        } else {
            return _this.apply(context, arg.concat(...arguments))
        }
    }
}*/

// 4. instanceof的原理
/*// 右边变量的原型存在于左边变量的原型链上
function instanceOf(left, right) {
    let leftValue = left.__proto__
    let rightValue = right.prototype
    while (true) {
        if (leftValue === null) {
            return false
        }
        if (leftValue === right) {
            return true
        }
        leftValue = rightValue.__proto__
    }
}*/

// 5. Object.create的基本实现原理
/*function create(obj) {
    function F() {}
    F.prototype = obj
    return new F()

    // 6. new本质
    function myNew (fun) {
        return function () {
            // 创建一个新对象且将其隐式原型指向构造函数原型
            let obj = {
                __proto__ : fun.prototype
            }
            // 执行构造函数
            fun.call(obj, ...arguments)
            // 返回该对象
            return obj
        }
    }

    function person(name, age) {
        this.name = name
        this.age = age
    }
    let obj = myNew(person)('chen', 18) // {name: "chen", age: 18}*/

    // 7. 实现一个基本的Promise
// ①自动执行函数，②三个状态，③then
   /* class Promise {
        constructor (fn) {
            // 三个状态
            this.state = 'pending'
            this.value = undefined
            this.reason = undefined
            let resolve = value => {
                if (this.state === 'pending') {
                    this.state = 'fulfilled'
                    this.value = value
                }
            }
            let reject = value => {
                if (this.state === 'pending') {
                    this.state = 'rejected'
                    this.reason = value
                }
            }
            // 自动执行函数
            try {
                fn(resolve, reject)
            } catch (e) {
                reject(e)
            }
        }
        // then
        then(onFulfilled, onRejected) {
            switch (this.state) {
                case 'fulfilled':
                    onFulfilled()
                    break
                case 'rejected':
                    onRejected()
                    break
                default:
            }
        }
    }*/

    // 8. 实现浅拷贝
// 1. ...实现
//     let copy1 = {...{x:1}}

// 2. Object.assign实现

    // let copy2 = Object.assign({}, {x:1})

    // 9. 实现一个基本的深拷贝
/*// 1. JOSN.stringify()/JSON.parse()
    let obj = {a: 1, b: {x: 3}}
    JSON.parse(JSON.stringify(obj))

// 2. 递归拷贝
    function deepClone(obj) {
        let copy = obj instanceof Array ? [] : {}
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
            }
        }
        return copy
    }*/

    // 10. 使用setTimeout模拟setInterval
/*// 可避免setInterval因执行时间导致的间隔执行时间不一致
    setTimeout (function () {
        // do something
        setTimeout (arguments.callee, 500)
    }, 500)*/

    // 11. js实现一个继承方法// 借用构造函数继承实例属性
  /*  function Child () {
        Parent.call(this)
    }
// 寄生继承原型属性
    (function () {
        let Super = function () {}
        Super.prototype = Parent.prototype
        Child.prototype = new Super()
    })()*/

    // 12. 实现一个基本的Event Bus
// 组件通信，一个触发与监听的过程
   /* class EventEmitter {
        constructor () {
            // 存储事件
            this.events = this.events || new Map()
        }
        // 监听事件
        addListener (type, fn) {
            if (!this.events.get(type)) {
                this.events.set(type, fn)
            }
        }
        // 触发事件
        emit (type) {
            let handle = this.events.get(type)
            handle.apply(this, [...arguments].slice(1))
        }
    }

// 测试
    let emitter = new EventEmitter()
// 监听事件
    emitter.addListener('ages', age => {
        console.log(age)
    })
// 触发事件
    emitter.emit('ages', 18)  // 18*/


    // 13. 实现一个双向数据绑定
   /* let obj = {}
    let input = document.getElementById('input')
    let span = document.getElementById('span')
    Object.defineProperty(obj, 'text', {
        configurable: true,
        enumerable: true,
        get() {
            console.log('获取数据了')
            return obj.text
        },
        set(newVal) {
            console.log('数据更新了')
            input.value = newVal
            span.innerHTML = newVal
        }
    })
    input.addEventListener('keyup', function(e) {
        obj.text = e.target.value
    })*/
    // 完整实现可前往之前写的：这应该是最详细的响应式系统讲解了

    // 14. 实现一个简单路由
   /* class Route{
        constructor(){
            // 路由存储对象
            this.routes = {}
            // 当前hash
            this.currentHash = ''
            // 绑定this，避免监听时this指向改变
            this.freshRoute = this.freshRoute.bind(this)
            // 监听
            window.addEventListener('load', this.freshRoute, false)
            window.addEventListener('hashchange', this.freshRoute, false)
        }
        // 存储
        storeRoute (path, cb) {
            this.routes[path] = cb || function () {}
        }
        // 更新
        freshRoute () {
            this.currentHash = location.hash.slice(1) || '/'
            this.routes[this.currentHash]()
        }
    }*/

    // 15. 实现懒加载
    // <ul>
    // <li><img src="./imgs/default.png" data="./imgs/1.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/2.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/3.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/4.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/5.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/6.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/7.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/8.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/9.png" alt=""></li>
    //     <li><img src="./imgs/default.png" data="./imgs/10.png" alt=""></li>
    //     </ul>
  /*  let imgs =  document.querySelectorAll('img')
// 可视区高度
    let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    function lazyLoad () {
        // 滚动卷去的高度
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        for (let i = 0; i < imgs.length; i ++) {
            // 得到图片顶部距离可视区顶部的距离
            let x = clientHeight + scrollTop - imgs[i].offsetTop
            // 图片在可视区内
            if (x > 0 && x < clientHeight+imgs[i].height) {
                imgs[i].src = imgs[i].getAttribute('data')
            }
        }
    }
    setInterval(lazyLoad, 1000)*/

    // 16. rem实现原理
   /* function setRem () {
        let doc = document.documentElement
        let width = doc.getBoundingClientRect().width
        // 假设设计稿为宽750，则rem为10px
        let rem = width / 75
        doc.style.fontSize = rem + 'px'
    }*/

    // 17. 手写实现AJAX
// 1. 简单实现
/*

// 实例化
    let xhr = new XMLHttpRequest()
// 初始化
    xhr.open(method, url, async)
// 发送请求
    xhr.send(data)
// 设置状态变化回调处理请求结果
    xhr.onreadystatechange = () => {
        if (xhr.readyStatus === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }

// 2. 基于promise实现

    function ajax (options) {
        // 请求地址
        const url = options.url
        // 请求方法
        const method = options.method.toLocaleLowerCase() || 'get'
        // 默认为异步true
        const async = options.async
        // 请求参数
        const data = options.data
        // 实例化
        const xhr = new XMLHttpRequest()
        // 请求超时
        if (options.timeout && options.timeout > 0) {
            xhr.timeout = options.timeout
        }
        // 返回一个Promise实例
        return new Promise ((resolve, reject) => {
            xhr.ontimeout = () => reject && reject('请求超时')
            // 监听状态变化回调
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    // 200-300 之间表示请求成功，304资源未变，取缓存
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                        resolve && resolve(xhr.responseText)
                    } else {
                        reject && reject()
                    }
                }
            }
            // 错误回调
            xhr.onerror = err => reject && reject(err)
            let paramArr = []
            let encodeData
            // 处理请求参数
            if (data instanceof Object) {
                for (let key in data) {
                    // 参数拼接需要通过 encodeURIComponent 进行编码
                    paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                }
                encodeData = paramArr.join('&')
            }
            // get请求拼接参数
            if (method === 'get') {
                // 检测url中是否已存在 ? 及其位置
                const index = url.indexOf('?')
                if (index === -1) url += '?'
                else if (index !== url.length -1) url += '&'
                // 拼接url
                url += encodeData
            }
            // 初始化
            xhr.open(method, url, async)
            // 发送请求
            if (method === 'get') xhr.send(null)
            else {
                // post 方式需要设置请求头
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')
                xhr.send(encodeData)
            }
        })
    }
*/

    // 18. 实现拖拽
    /*window.onload = function () {
        // drag处于绝对定位状态
        let drag = document.getElementById('box')
        drag.onmousedown = function(e) {
            var e = e || window.event
            // 鼠标与拖拽元素边界的距离 = 鼠标与可视区边界的距离 - 拖拽元素与边界的距离
            let diffX = e.clientX - drag.offsetLeft
            let diffY = e.clientY - drag.offsetTop
            drag.onmousemove = function (e) {
                // 拖拽元素移动的距离 = 鼠标与可视区边界的距离 - 鼠标与拖拽元素边界的距离
                let left = e.clientX - diffX
                let top = e.clientY - diffY
                // 避免拖拽出可视区
                if (left < 0) {
                    left = 0
                } else if (left > window.innerWidth - drag.offsetWidth) {
                    left = window.innerWidth - drag.offsetWidth
                }
                if (top < 0) {
                    top = 0
                } else if (top > window.innerHeight - drag.offsetHeight) {
                    top = window.innerHeight - drag.offsetHeight
                }
                drag.style.left = left + 'px'
                drag.style.top = top + 'px'
            }
            drag.onmouseup = function (e) {
                this.onmousemove = null
                this.onmouseup = null
            }
        }
    }*/

    // 19. 实现一个节流函数
   /* function throttle (fn, delay) {
        // 利用闭包保存时间
        let prev = Date.now()
        return function () {
            let context = this
            let arg = arguments
            let now = Date.now()
            if (now - prev >= delay) {
                fn.apply(context, arg)
                prev = Date.now()
            }
        }
    }

    function fn () {
        console.log('节流')
    }
    addEventListener('scroll', throttle(fn, 1000))*/

    // 20. 实现一个防抖函数
   /* function debounce (fn, delay) {
        // 利用闭包保存定时器
        let timer = null
        return function () {
            let context = this
            let arg = arguments
            // 在规定时间内再次触发会先清除定时器后再重设定时器
            clearTimeout(timer)
            timer = setTimeout(function () {
                fn.apply(context, arg)
            }, delay)
        }
    }

    function fn () {
        console.log('防抖')
    }
    addEventListener('scroll', debounce(fn, 1000))
*/













