/**
 * 什么是高阶函数
 */

// 1.一个函数的参数是一个函数（回调）

function a() {}
a(() => {});

// 2. 一个函数 返回一个函数

function b() {
  return function() {};
}



// 函数的before
// 希望将核心的逻辑提取出来，在外面在增加功能（扩展）

// 重写原型上的方法

Function.prototype.before = function(fn){
    return (...ags)=>{ // 箭头函数中没有this指向，所以会向上级作用域查找
        fn();
        this(...ags); // 展开运算符
    }
}

// AOP 切片 装饰 把核心抽离出来，在核心基础上添加功能
const say = (...ags) => { //剩余运算符把所有的值都放在一个数组里面
    console.log('说话',ags)
};

//比如

let newSay = say.before(()=>{
    console.log('你好')
})
newSay(1,2,3);