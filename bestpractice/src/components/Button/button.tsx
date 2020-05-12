import * as React from 'react';
import classNames from 'classnames'

interface IButton {
    btnType?: string,
    className?: string,
    style?: React.CSSProperties
}

type buttonAttributes = IButton & React.ButtonHTMLAttributes<HTMLElement>;
type anchorProps = IButton & React.AnchorHTMLAttributes<HTMLElement>;
type ButtonProps = Partial<buttonAttributes & anchorProps>

const Button: React.FC<ButtonProps> = (props)=>{
    const { btnType, className, style, children, ...otherProps } = props
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:btnType
    })
    return(
        <>
            <button className={classes} style={style} {...otherProps} >
                {children}
            </button>
        </>
    )
}

Button.defaultProps={
    btnType:'default'
}

export default Button

