import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonType } from './button'

const defaultProps = {
    onClick: jest.fn()
}

const typeProps = {
    btnType:ButtonType.Success
}

const linkProps = {
    btnType: ButtonType.Link,
    href: '/',
    onClick: jest.fn()
}

const disabledProps = {
    btnType: ButtonType.Primary,
    disabled: true,
    onClick: jest.fn()
}

/*
    1.测试是否在页面中
    2.样式测试
    3.标签测试
    4.点击测试
*/ 

describe('Button组件测试',()=>{
    it('按钮默认测试',()=>{
        const wrap = render(<Button {...defaultProps}>Click</Button>)
        const element = wrap.getByText('Click') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it("按钮类型测试",()=>{
        const wrap = render(<Button {...typeProps} >type Button</Button>)
        const element = wrap.getByText('type Button') as HTMLButtonElement
        expect(element).toHaveClass('btn btn-success')
        expect(element).toBeInTheDocument()
    })
    it('超链接按钮测试',()=>{
        const wrap = render(<Button {...linkProps}>link button</Button>)
        const element = wrap.getByText('link button') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(linkProps.onClick).toHaveBeenCalled()
    })
    it('禁用按钮点击测试',()=>{
        const wrap = render(<Button { ...disabledProps }>disabled button</Button>)
        const element = wrap.getByText('disabled button') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual("BUTTON")
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})

