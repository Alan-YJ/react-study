import * as React from 'react';
import classNames from 'classnames'
import { IMenuItem } from './menuItem';

// export type MenuModes = 'vertical' | 'horizontal'
export enum MenuModes {
    vertical = 'vertical',horizontal = 'horizontal'
}

type TSelectHandle = ( selectedKey:number )=>void
export interface IMenu{
    mode?: MenuModes,
    defaultSelectedKey?: number,
    className?: string,
    style?: React.CSSProperties,
    onSelect?: TSelectHandle
}

export const MenuContext = React.createContext({index:0})
export interface IMenuContext{
    index: number,
    onSelect?: TSelectHandle
}

const Menu:React.FC<IMenu> = (props)=>{
    const { mode, defaultSelectedKey, className, style, children, onSelect } = props
    const classes = classNames(className,'menu',{
        [`menu-${mode}`]: true,
    })
    const [ active,setActive ] = React.useState(defaultSelectedKey?defaultSelectedKey:0)
    const SelectHandle:TSelectHandle = (index:number)=>{
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const context:IMenuContext = {
        index:active,
        onSelect:SelectHandle
    }

    //1.渲染列表,如果非MenuItem则警告不渲染
    //2.自增index
    const renderChildren = ()=>{
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<IMenuItem>
            const { displayName } = childElement.type
            if(displayName === 'menu-item' || displayName === 'sub-menu'){
                return React.cloneElement(childElement,{index,
                    type:mode
                })
            }else{
                console.error('warning: Menu children type must to be MenuItem')
            }
        })
    }
    return (
        <>
            <ul className={classes} style={style} data-testid='menu'>
                <MenuContext.Provider value={context}>
                    { renderChildren() }
                </MenuContext.Provider>
            </ul>
        </>
    )
}

Menu.defaultProps = {
    mode: MenuModes.horizontal
}

export default Menu