import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Alert,{ AlertType } from './Alert'

const closeProps = {
    type: AlertType.Success,
    closable: true,
    onClose: jest.fn()
}

const largeProps = {
    type: AlertType.Error,
    closable: true,
    closeText: 'close',
    showIcon: true,
    message: 'test',
    description: 'test description',
    onClose: jest.fn()
}
/*
    1.document测试
    2.class测试
    3.close关闭测试
    4.icon测试
    5.message description 大图标测试
*/
describe("提示框Alert组件测试",()=>{
    it("基础Alert测试",()=>{
        const wrap = render(<Alert>content</Alert>)
        const element = wrap.container.children[0]
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('alert-info')
    })
    it("Alert关闭测试",()=>{
        const wrap = render(<Alert {...closeProps }>content</Alert>)
        const element = wrap.container.children[0]
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('alert-success')
        const closeBtn = element.getElementsByClassName('closable')[0]
        expect(closeBtn).toBeInTheDocument()
        fireEvent.click(closeBtn)
        expect(closeProps.onClose).toHaveBeenCalled()
        expect(element).not.toBeInTheDocument()
    })
    it('Alert 小Icon测试',()=>{
        const wrap = render(<Alert showIcon>content</Alert>)
        const element = wrap.container.children[0]
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('alert')
        const icon = element.getElementsByClassName('icon')[0]
        expect(icon).toBeInTheDocument()
        expect(icon).toHaveClass('icon-infofill')
    })
    it("Alert组件大Icon测试",()=>{
        const wrap = render(<Alert {...largeProps}></Alert>)
        const el = wrap.container.children[0]
        expect(el).toBeInTheDocument()
        expect(el).toHaveClass('alert alert-error')

        const largeIcon = el.getElementsByClassName('icon-large')[0]
        expect(largeIcon).toBeInTheDocument()

        const title = el.getElementsByClassName('message')[0]
        expect(title).toBeInTheDocument()
        expect(title).toHaveTextContent("test")

        const closeBtn = el.getElementsByClassName('closable')[0]
        expect(closeBtn).toBeInTheDocument()
        fireEvent.click(closeBtn)
        expect(largeProps.onClose).toHaveBeenCalled()
        expect(el).not.toBeInTheDocument()
    })
})

