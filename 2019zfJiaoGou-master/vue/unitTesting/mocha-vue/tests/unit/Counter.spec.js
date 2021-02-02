import {expect} from 'chai';
import {mount} from '@vue/test-utils';

import Counter from '@/components/Counter'
describe('测试counter组件',()=>{
    it('测试 点击按钮是否能加1',()=>{
        let wrapper=mount(Counter);
        expect(wrapper.find('#count').text()).to.be.equal('10');
        wrapper.find('button').trigger('click');
        wrapper.find('button').exists()
        expect(wrapper.find('#count').text()).to.be.equal('11');
    })
})
// isVisible()弹框是否显示隐藏
// exists()是否存在