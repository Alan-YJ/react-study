import React, { useState } from 'react';

function Page(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>you click count {count}</p>
            <button onClick={()=>{setCount(count+1)}}>click</button>
        </div>
    )
}

export default Page
