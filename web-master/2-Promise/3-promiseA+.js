function Promise(executor) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onResolveCallbacks = [];
    self.onRejectCallbacks = [];
    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved';
            self.value = value;
            self.onResolveCallbacks.forEach(function(fn) {
                fn();
            });
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected';
            self.reason = reason;
            self.onRejectCallbacks.forEach(function(fn) {
                fn();
            });
        }
    }

    try {
        //自动执行
        executor(resolve, reject);
    } catch(e) {
        console.log('aaa' + e);
        reject(e)
    }
}
function resolvePromise(x, promise2, resolve, reject) {

    if (x === promise2) {
        return reject(new TypeError('l循环引用'));
    }
    let called = false; //不让用户调用成功态又调用失败态两次
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        //x 可能是一个promise
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, function(y) { //调用当前then的方法
                    //可能y 还是promise
                    if (called) {
                        return;
                    } else {
                        called = true;
                    }
                    resolvePromise(y, promise2, resolve, reject);
                }, function(r){
                    if (called) {
                        return;
                    } else {
                        called = true;
                    }
                    reject(r)
                })
            }
        } catch (e) {
            if (called) {
                return;
            } else {
                called = true;
            }
            reject(e)
        }
    } else { //其它值
        if (called) {
            return;
        } else {
            called = true;
        }
        resolve(x);
    }
}
Promise.prototype.then = function(onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled:function (data) {
        return data
    }
    onRejected = typeof onRejected === 'function' ? onRejected:function (err) {
       throw err;
    }
    let self = this;
    let promise2 = new Promise(function(resolve, reject) {
        if (self.status === 'resolved') {
            setTimeout(function(){
                try { //异步需要重新捕获
                    let x = onFulfilled(self.value);
                    resolvePromise(x, promise2, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            }, 0);
        }
        if (self.status === 'rejected') {
            setTimeout(function(){
                try { //异步需要重新捕获
                    let x = onRejected(self.reason);
                    resolvePromise(x, promise2, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            }, 0);
        }
        if (self.status === 'pending') {
            self.onResolveCallbacks.push(function(){
                try { //异步需要重新捕获
                    let x = onFulfilled(self.value);
                    resolvePromise(x, promise2, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
            self.onRejectCallbacks.push(function(){
                try { //异步需要重新捕获
                    let x = onRejected(self.reason);
                    resolvePromise(x, promise2, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        }
    });

    return promise2;
}
Promise.reject = function(val){
    return new Promise(function(resolve, reject){
        reject(val);
    })
};
// 静态方法
Promise.resolve = function(val){
    return new Promise(function(resolve, reject){
        resolve(val);
    })
};
//实现catch
Promise.prototype.catch = function(err) {
    return this.then(null, err);
};

Promise.prototype.finnaly = function(callback) {
    return this.then(function(data){
        return Promise.resolve(callback()).then(function(){
            return data;
        }, null)
    }, function(err){
       return Promise.reject(callback()).then(null, function(){
            throw err;
       })
    })
};
Promise.all = function(promises) {
    return new Promise(function(resolve, reject){
        let arr = [];
        let c = 0;
        function processData(index, val) {
            arr[index] = val;
            c++;
            if (c == promises.length) {
                resolve(arr);
            }
        }
        for (let i = 0; i < promises.length; i++) {

            if (typeof promises[i] === 'function') {
                promises[i].then(function(data){
                    processData(i, data);
                }, function(err){
                    reject(err);
                });
            } else {
                processData(i, promises[i]);
            }
        }
    })
};

Promise.race = function(promises) {
    return new Promise(function(resolve, reject){
        for (let i = 0; i < promises.length; i++) {

            if (typeof promises[i] === 'function') {
                promises[i].then(function(data){
                    resolve(data);
                }, function(err){
                    reject(err);
                });
            } else {
                resolve(promises[i]);
            }
        }
    })
};
module.exports = Promise;