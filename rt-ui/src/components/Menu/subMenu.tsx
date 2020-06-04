//引入基础信息  react  Context  classNames
import * as React from 'react';
import classNames from 'classnames'
import { MenuContext } from './menu'
import MenuItem,{ IMenuItem } from './menuItem'

//创建基础interface
export interface ISubMenu{
    className?:string,
    style?:React.CSSProperties,
    index?:number,
    title:string,
    type?:string
}

//创建基础组件
    //获取context
    //获取渲染子组件  用ul整体包裹li
    //控制classes
    //渲染数据 li本身
const SubMenu:React.FC<ISubMenu> = (props)=>{
    const context = React.useContext(MenuContext)
    const { children, className, style, index, title, type } = props
    const [expand,setExpand] = React.useState( type==='vertical' )
    const classes = classNames(className,'sub-menu',{
        active:context.index==index,
        expand:expand
    })
    const clickMenuHandle = (e: React.MouseEvent)=>{
        e.preventDefault()
        setExpand(!expand)
    }

    let timer:any;
    const mouseMove = (e: React.MouseEvent, toggle: boolean)=>{
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(()=>{
            setExpand(toggle)
        },300)
    }

    const handlers = type === 'vertical'? {
        onClick:clickMenuHandle
    }:{}
    const hoverHandler = type === 'horizontal'?{
        onMouseEnter:(e: React.MouseEvent )=>{ mouseMove(e,true) },
        onMouseLeave:(e: React.MouseEvent )=>{ mouseMove(e,false) }
    }:{}
    const renderChildren = ()=>{
        const subMenuClasses = classNames('submenu',{
            expand:expand
        })
        let childs = React.Children.map(children,(child,i)=>{
            let childComponent = child as React.FunctionComponentElement<IMenuItem>
            let idx = index?index*10 + i:i*10+i
            if(childComponent.type.displayName == 'menu-item'){
                return React.cloneElement(childComponent,{index:idx})
            }else{
                console.error('sub menu children must be MenuItem, please check element.')
            }
        })
        return (
            <ul style={style} className={classes} >
                {childs}
            </ul>
        )
    }
    return (
        <li className='sub-menu-wrap menu-item' {...hoverHandler}>
            <div {...handlers} >
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'sub-menu'


export default SubMenu


