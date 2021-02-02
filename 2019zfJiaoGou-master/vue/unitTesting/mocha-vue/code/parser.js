//测试的第一个例子
export let parser = (str) =>{//name=zfpx
    let obj={};
    str.replace(/([^&=]*)=([^&=]*)/g,function () {
        obj[arguments[1]]=arguments[2]
    });
    return obj;//{name:'zfpx'}
}
export let stringify = (obj)=>{//{name:'zfpx'}
    let arr =[];
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join('&')//name=zfpx
}
//前端测试的时候 1）去自测，不会保留测试代码,测试代码会混在源码中
console.log(parser('name=zfpx'));

console.log(stringify({name:'zfpx'}))




