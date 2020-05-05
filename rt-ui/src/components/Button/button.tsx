import React from 'react'
import classNames from 'classnames'


export enum ButtonType{
    Primary = 'primary',
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
    Danger = 'danger',
    Default = 'default',
    Link = 'link'
}

export enum ButtonSize{
    Large = 'lg',
    Middle = 'md',
    Small = 'sm'
}

interface IButton {
    btnType?: ButtonType;
    size?: ButtonSize;
    className?: string;
    href?: string;
    disabled?: boolean;
    target?: string;
    loading?: boolean;
    icon?: string;
    // onClick?: 
    children: React.ReactNode;
}
//联合  a & b属性都带上
type NativeButtionProps = IButton & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IButton & React.AnchorHTMLAttributes<HTMLElement>
//Partial所有属性都变为可选
export type ButtonProps = Partial<NativeButtionProps & AnchorButtonProps>

const Button: React.FC<ButtonProps>= (props)=>{
    const { btnType, children, size, className, href, disabled, target, loading, ...restProps } = props
    const classes = classNames( 'btn',className ,
        {'disabled' : disabled || loading} ,
        { [`btn-${size}`]: size },
        { [`btn-${btnType}`] :btnType }
        )
    return (
        <>
            {
                btnType===ButtonType.Link?
                    <a className={classes} href={href} target={target} {...restProps}>{children}</a>:
                    <button disabled={disabled} className={classes} {...restProps} >
                        {
                            loading?
                            <i className='icon iconfont icon-loading'></i>:
                            <></>
                        }
                        {children}
                    </button>
            }
        </>
    )
}

Button.defaultProps = {
    btnType: ButtonType.Default
}

export default Button
