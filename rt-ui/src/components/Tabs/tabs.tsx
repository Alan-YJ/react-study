//基础组件引入  react  classnames  
import React,{ createContext, Children, ReactElement, ReactChildren } from 'react';
import classNames from 'classnames'
import TabPane, { ITabPane } from './tabPane'

//基本类型
export type Types = 'line' | 'card' | 'editable-card'
export type Positions = 'top' | 'right' | 'left' | 'bottom'
//创建基础接口控制类型
export interface ITabs {
    className?: string,
    style?: React.CSSProperties,
    change?: (e:string)=>void,
    tabClick?: (e:string)=>void,
    // nextClick?: (e:number|string)=>{},
    animated?: boolean,
    defaultActiveKey?: string ,
    size?: string,
    type?: Types,
    tabPosition?: Positions,
    tabBarGutter?: number
}

export interface ITabContext {
    selectedKey:string,
    setActive?: (key:string)=>void,
    tabClick?: (key:string)=>void,
    tabBarGutter: number,
    type:string,
}

interface IContent {
    key:string,
    active:boolean,
    dom:React.ReactChildren
}

export const tabContext = createContext({
    selectedKey : '0',
    tabBarGutter : 10,
    type: 'inline'
})

//创建组件
    //控制样式   控制选中   控制切换
const Tabs:React.FC<ITabs> = (props)=>{
    const { className, style, change, tabClick, animated, defaultActiveKey, size, type, tabPosition, tabBarGutter, children } = props;

    const [activeKey,setActive] = React.useState(defaultActiveKey||"0")

    const classes = classNames('tabs',className,`${tabPosition}-tabs`,`${type}-tabs`,`${size}-tabs`,{
    })

    const [childDoms,setChildDoms] = React.useState([] as IContent[])

    const activeTab = (key:string)=>{
        setActive(key)
        if(change)
        change(key)
    }
    const context:ITabContext = {
        selectedKey: activeKey,
        setActive:activeTab,
        tabClick:tabClick,
        tabBarGutter: tabBarGutter || 10,
        type:type as Types,
    }

    const paneContent = ( key:string, children:React.ReactChildren )=>{
        const domObj:IContent = {
            active:false,
            dom:children,
            key:key
        }
        if(key == context.selectedKey){
            domObj.active = true
        }
        if(childDoms.find(dom=>{return dom.key == domObj.key})){
            //判断是否一致，不一致则更新
            if(childDoms.find(dom=>{return dom.key == domObj.key && dom.active != domObj.active})){
                let data = childDoms.map(dom=>{
                    if(dom.key == domObj.key && dom.active!= domObj.active){
                        return Object.assign({},dom,domObj)
                    }else{
                        return dom
                    }
                })
                setChildDoms(data)
            }
        }else{
            setChildDoms([...childDoms,domObj])
        }
    }

    const renderHeader = ()=>{
        let childList = React.Children.map(children,(child,index)=>{
            let idx = index.toString()
            let childComponent = child as React.FunctionComponentElement<ITabPane>
            if(childComponent.type.displayName === 'tab-pane'){
                return React.cloneElement(childComponent,{
                    index:idx,
                    renderChild:paneContent
                })
            }else{
                console.error('Tabs component must be TabPane!')
            }
        })
        return (
            <div className='tab-header-wrap'>
                { childList }
            </div>
        )
    }

    const renderPane = ()=>{
        let childList = childDoms.map((obj:IContent,index:number)=>{
            let childComponent = obj.dom as React.ReactChildren
            return React.createElement('div',{
                style:{
                    display:obj.active?"block":"none"
                }
            },childComponent)
        })
        return (
            <>
                { childList }
            </>
        )
    }

    return (
        <>
            <div className={classes} style={style} >
                <tabContext.Provider value={context}>
                    { renderHeader() }
                </tabContext.Provider>
                <div className='content-list'>
                    {
                        renderPane()
                    }
                </div>
            </div>
        </>
    )
}

Tabs.defaultProps = {
    animated :true,
    size: 'default',
    type: 'line',
    tabPosition: 'top'
}

Tabs.displayName = 'tabs'

export default Tabs






