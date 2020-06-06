import React,{ useContext } from 'react';
import classNames from 'classnames'
import { tabContext, ITabContext } from './tabs'

export interface ITabPane{
    className?: string,
    style?: React.CSSProperties,
    key?: string,
    index?: string,
    tab?: string | React.ReactNode,
    forceRender?: boolean,
    disabled?: boolean,
    renderChild?: ( key:string, children:React.ReactChildren ) => void,
}

export const TabPane:React.FC<ITabPane> = (props)=>{
    const { className, style, key, index, tab, children, renderChild, disabled } = props

    const context:ITabContext = useContext(tabContext)

    if(renderChild){
        renderChild(index as string,children as React.ReactChildren)
    }

    const classes = classNames('tab-header',className,{
        active:context.selectedKey === index,
        disabled:disabled
    })

    const customStyle:React.CSSProperties = Object.assign({},{
        marginRight:context.type != 'inline'? 3 :context.tabBarGutter+'px'
    },style)

    const onSelect = ()=>{
        if(context.setActive && !disabled){
            context.setActive(index as string)
            if(context.tabClick){
                context.tabClick(index as string)
            }
        }
    }

    return (
        <>
            <div className={classes} style={customStyle} onClick={onSelect}>
                { typeof(tab) === 'string'? tab : tab }
            </div>
        </>
    )
}

TabPane.displayName = 'tab-pane'

export default TabPane

