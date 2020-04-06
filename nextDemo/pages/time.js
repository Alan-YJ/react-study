import React, { useState } from 'react';
// import moment from 'moment'
import dynamic from 'next/dynamic'
import Head from '../components/header'

const LazyComponent = dynamic(import('../components/lazy'))

function Time(){
    const [time,setTime] = useState(Date.now())
    const [show,setShow] = useState(false)
    
    const changeTime = async ()=>{
        const moment  = await import('moment')
        setTime(moment.default(Date.now()).format())
        setShow(true)
    }
    return(
        <div>
            <Head>Time测试</Head>
            <div>显示为:{time}</div>
            {
                show?<LazyComponent />:'test'
            }
            
            <button onClick={()=>{changeTime()}}>改变格式</button>
        </div>
    )
    
}

export default Time
