import React, { useState, useEffect } from 'react'

const MouseEvent = ()=>{
    const [position,setPosition] = useState({x:0,y:0})
    useEffect(()=>{
        console.info('effect active')
        const Event = (e:MouseEvent)=>{
            setPosition({
                x:e.clientX,
                y:e.clientY,
            })
        }
        document.addEventListener('mousemove',Event)
    },[])
    return position
}

export default MouseEvent