import React from 'react';
import classnames from 'classnames'

import { IMenuItem } from './menuItem'
/*
    1.横向/纵向
    2.高亮
    3.disabled
    4.下拉菜单/展开菜单

*/
export type modeType = 'vertical' | 'horizontal'

interface IMenu{
    mode?: string,
    selectedKeys?: string,
    className?: string,
    disabled?: boolean,
    onClick?: ( e:object )=>void,
    onOpenChange?: ( e:object )=>void,
    children?: IMenuItem
}

const Menu:React.FC<IMenu> = (props)=>{
    const { className, children, mode  } = props
    const classes = classnames({className, 'menu':true,
        [`${mode}`]:mode,
    })
    return (
        <>
            <div className={classes}>
                {children}
            </div>
        </>
    )
}

Menu.defaultProps = {
    mode: 'vertical'
}

export default Menu
