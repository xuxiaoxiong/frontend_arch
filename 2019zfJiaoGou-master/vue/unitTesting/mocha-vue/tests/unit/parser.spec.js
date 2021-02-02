import {parser,stringify} from "../../code/parser";
import {expect} from 'chai';
//写代码的时候  macha（工具）+chai(断言库)

//我要测试的方法
//一个用例


//常见的关系   相等 大于/小于  包含和不包含

describe('专门测试parser',()=>{
    it('我要测试这个parser是否靠谱',()=>{
        //所有的断言都有to.be  xxx  ,  equal 为 ===
        //deep.equal 就表示俩个对象是否完全相等（引用空间无所谓）
        expect(parser('name=zfpx')).to.be.deep.equal({name:'zfpx'})
    });
})

describe('专门测试stringify',()=>{
    it('我要测试stringify靠不靠谱',()=>{
        expect(stringify({name:'zfpx'})).to.be.equal('name=zfpx')
    })
})


describe('测试方法',()=>{
    it('相等关系',()=>{
        expect(1+1).to.be.equal(2)//是否相等
        expect([1,2,3]).to.be.lengthOf(3)//当前数组里有三项
        expect(true).to.be.true;//判断布尔类型，是否正确
    })
    it('包含',()=>{
        expect('zfpx').to.be.contain('zf');//是否包含
        expect('zfpx').to.be.match(/zf/);//正则匹配是否包含
    })
    it('大于/小于',()=>{
        expect(5).to.be.gt(3);//gt也可以写成greaterThan
        expect(3).to.be.lt(5);//lt也可以写成lessThan
        expect(3).to.be.not.gt(10)
    })
})



