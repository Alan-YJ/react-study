import React, { useState, useEffect } from 'react';

function Page(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.info(`click count:${count}`)
    })
    return(
        <div>
            <p>you click count {count}</p>
            <button onClick={()=>{setCount(count+1)}}>click</button>
        </div>
    )
}

export default Page
