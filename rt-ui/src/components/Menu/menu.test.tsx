import React from 'react';
import { RenderResult, render, fireEvent } from '@testing-library/react'

import Menu, { IMenu, MenuModes } from './menu'
import MenuItem, { IMenuItem } from './menuItem'

const testMenuProps = {
    mode:MenuModes.horizontal,
    defaultSelectedKey:0,
    onSelect:jest.fn()
}

const demo = (props:IMenu)=>{
    return (
        <Menu {...props}>
            <MenuItem >first</MenuItem>
            <MenuItem disabled={true}>disabled</MenuItem>
            <MenuItem >last</MenuItem>
        </Menu>
    )
}

describe('菜单测试',()=>{
    let wrapper:RenderResult, activeElement:HTMLElement, disabledElement:HTMLElement, menuItem:HTMLElement
    beforeEach(()=>{
        wrapper = render(demo(testMenuProps))
        menuItem = wrapper.getByTestId('menu')
        activeElement = wrapper.getByText('first')
        disabledElement = wrapper.getByText('disabled')
    })
    it('主菜单基本测试',()=>{
        expect(menuItem).toBeInTheDocument()
        expect(menuItem).toHaveClass('menu-horizontal')
    })
    it("禁用菜单测试",()=>{
        // 1.是否有禁用样式
        // 2.点击是否可激活
        // 3.点击是否会触发事件
        expect(disabledElement).toHaveClass('disabled')
        fireEvent.click(disabledElement)
        expect(testMenuProps.onSelect).not.toBeCalled()
        expect(disabledElement).not.toHaveClass('active')
    })
    it("激活菜单测试",()=>{
        // 1.是否有激活样式
        // 2.点击是否会重复执行onSelect
        // 3.切换激活是否会消失状态
        expect(activeElement).toHaveClass('active')
        let lastElement = wrapper.getByText('last')
        expect(lastElement).not.toHaveClass('active')
        fireEvent.click(lastElement)
        expect(lastElement).toHaveClass('active')
        expect(testMenuProps.onSelect).toBeCalled()
        expect(activeElement).not.toHaveClass('active')
    })
})



