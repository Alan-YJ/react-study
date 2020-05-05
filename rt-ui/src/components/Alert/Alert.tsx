import React,{ useState } from 'react'
import classNames from 'classnames'

export enum AlertType {
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

const AlertIcon = {
    info: {
        miniIcon:'icon-infofill',
        icon:'icon-info'
    },
    success:{
        miniIcon:'icon-roundcheckfill',
        icon:'icon-roundcheck'
    },
    warning:{
        miniIcon:'icon-warnfill',
        icon:'icon-warn'
    },
    error:{
        miniIcon:'icon-round_close_fill_light',
        icon:'icon-round_close_light'
    }
}

interface IAlert{
    type?: AlertType;
    children: React.ReactNode;
    className?: string;
    showIcon?: boolean;
    description?: string;
    message?: string;
    closable?: boolean;
    closeText?: string | React.ReactNode
}

type NavtiveAttributes = IAlert & React.ObjectHTMLAttributes<HTMLElement>
// type NativeAnchorAttributes = IAlert & React.AnchorHTMLAttributes<HTMLElement>

export type AlertAttributes = Partial< NavtiveAttributes >

const Alert: React.FC<AlertAttributes> = (props)=>{
    const { className, type, children, showIcon, description, message, closable, closeText, ...propList } = props
    const [ display,setDisplay ] = useState(true)
    const classes = classNames( className,'alert',{
        [ `alert-${type}` ]: type
    } )
    const iconClasses = classNames( 'icon iconfont', {
        [`${ message ? AlertIcon[type as AlertType].icon : AlertIcon[type as AlertType].miniIcon}`]: type,
        "icon-large":message,
    })

    const close = ():void =>{
        setDisplay(false)
        // setTimeout(()=>{
        //     setDisplay(false)
        // },400)
    } 
    return (
        <>
            {
                display?
                    <div className={classes} {...propList}>
                        {
                            message?
                            <div className='alert-wrap'>
                                <div className='icon-wrap'>
                                    {
                                        showIcon?
                                        <span className={iconClasses}></span>:null
                                    }
                                </div>
                                <div className='content'>
                                    <div className='message'>
                                        {message}
                                    </div>
                                    <div className='description'>
                                        {description}
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='alert-wrap'>
                                {
                                    showIcon?
                                    <span className={iconClasses}></span>:null
                                }
                                {children}
                            </div>
                        }
                        {
                            closable?closeText?
                            <span className='icon closable' onClick={close}>
                                {closeText}
                            </span>:
                            <span className='icon iconfont icon-close closable' onClick={close}></span>
                            :null
                        }
                    </div>
                :null
            }
        </>
    )
}

Alert.defaultProps = {
    type: AlertType.Info
}

export default Alert


// closable 
// closeText
// onClose
// afterColse