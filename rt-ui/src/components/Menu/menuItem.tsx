import * as React from 'react';

export interface IMenuItem{
    title?:string,
    disabled?:boolean,
    key?:string,
    
}

const MenuItem :React.FC<IMenuItem> = (props:IMenuItem)=>{
    const { title, ...otherProps } = props
    return(
        <>
            {title}
        </>
    )
}

export default MenuItem


