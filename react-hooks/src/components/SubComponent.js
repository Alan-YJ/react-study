import React,{ useMemo } from 'react'

function Sub({name,children}){
    function changeText1(name){
        console.info('change text1')
        return name+'change'
    }
    const text1= useMemo(()=>changeText1(name),[name])
    return(
        <div>
            <div>{text1}</div>
            {children}
        </div>
    )
}

export default Sub