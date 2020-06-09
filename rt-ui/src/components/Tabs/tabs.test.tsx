import React from 'react';
import { render,RenderResult, fireEvent } from '@testing-library/react'
import Tabs,{ ITabs } from './tabs'
import TabPane, { ITabPane } from './tabPane'

const testTabProps:ITabs = {
    size : "small",
    type : "line",
    change : jest.fn()
}

const testTabs = (props:ITabs)=>{
    return (
        <Tabs type={props.type} change={props.change} size={props.size}>
            <TabPane tab="tab1">tab1 content</TabPane>
            <TabPane tab="tab2" disabled={true}>tab2 content</TabPane>
            <TabPane tab={<>custom tab title</>}>tab3 content</TabPane>
        </Tabs>
    )
}

describe('tabs test module',()=>{
    let resultData:RenderResult, wrapElement:HTMLElement
    beforeEach(()=>{
        resultData = render(testTabs(testTabProps))
        wrapElement = resultData.getByTestId('tabs')
    })
    it("tabs base test",()=>{
        expect(wrapElement).toBeInTheDocument()
        let firstElement = resultData.getByText("tab1")
        expect(firstElement).toHaveClass('active')
    })
    it("tabs active test",()=>{
        expect(wrapElement).toBeInTheDocument()
        let firstElement = resultData.getByText("tab1")
        expect(firstElement).toHaveClass('active')
        let tab2 = resultData.getByText('tab2')
        let tab3 = resultData.getByText('custom tab title')
        fireEvent.click(tab2)
        expect(tab2).toHaveClass('disabled')
        expect(tab2).not.toHaveClass('active')
        fireEvent.click(tab3)
        expect(firstElement).not.toHaveClass('active')
        expect(tab3).toHaveClass('active')
    })
})

