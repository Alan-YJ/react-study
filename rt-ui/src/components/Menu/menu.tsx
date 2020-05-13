import * as React from 'react';
import classNames from 'classnames'

type MenuModes = 'vertical' | 'horizontal'
type TSelectHandle = ( selectedKey:number )=>void
interface IMenu{
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
    return (
        <>
            <ul className={classes} style={style} >
                <MenuContext.Provider value={context}>
                    { children }
                </MenuContext.Provider>
            </ul>
        </>
    )
}

Menu.defaultProps = {
    mode: 'horizontal'
}

export default Menu