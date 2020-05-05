import React from 'react';
import { render } from '@testing-library/react'
import Button from './button'

describe('Button组件测试',()=>{
    it('按钮默认测试',()=>{
        const wrap = render(<Button>Click</Button>)
        const element = wrap.getByText('Click')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn')
    })
    it('按钮类型测试',()=>{
        
    })
    it('超链接按钮测试',()=>{
        
    })
    it('禁用按钮测试',()=>{
        
    })
})