import React, { useState, useEffect, useCallback } from 'react'

function useWinSize(){
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    })
    
    const onResize = useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])
    
    return size
}

function App(){
    const size = useWinSize()
    return (
        <div>
            size:{size.width} x {size.height}
            {size.document}
        </div>
    )
}

export default App
