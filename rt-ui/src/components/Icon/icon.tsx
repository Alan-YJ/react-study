import React from 'react';
import classNames from 'classnames'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type themeType = 'primary' | 'warning' | 'secondary' | 'success' | 'info' | 'danger' | 'light' | 'dark'

export interface IIcon extends FontAwesomeIconProps {
    theme?: themeType
}

library.add(fas)

const Icon:React.FC<IIcon> = (props)=>{
    const { theme, className } = props
    const classes = classNames('icon',className,{
        [`icon-${theme}`]:theme
    })
    return(
        <>
            <FontAwesomeIcon {...props}  className={classes}></FontAwesomeIcon>
        </>
    )
}

export default Icon