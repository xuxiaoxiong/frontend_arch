
//生成数字，随机打乱，输出

function gen(w) {
    for(let i =0;i<w*1000;i++){
        arr[i]=i+1
    }
    shuffle(arr);
    return arr
}

//0(n)的打乱算法
function fisher_yates_shuffle(arr){
    for(let i=0;i<arr.length -1;i++){
       //从[i,arr.length -1] 中取一个整数
       const j=i+Math.floor(Math.random()*(arr.length -1));
       [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr
}


function shuffle(arr) {
    const m=[];
    const N=arr.length*arr.length*arr.length;
    for(let i=0;i<arr.length-1;i++){
        m[i] = Math.floor(Math.random(1,N))
    }
    return arr.sort((i,j) => m[i]-m[j])
}

const m_gen=time_measture(gen);
m_gen(100);