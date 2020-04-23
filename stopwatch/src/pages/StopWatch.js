import React, { useState } from 'react';
import Time from '../components/ShowMSTime'
import ControlButton from '../components/ControlButton'
import TimeList from '../components/TimeList'
import moment from 'moment'

function StopWatch(){
    const [timeText,setTime] = useState("00:00.00")
    const [timeList,setTimeList] = useState([])
    const [isStart,setStart] = useState(false)
    const [timer,setTimer] = useState(null)
    const reset = ()=>{
        clearInterval(timer)
        setTime('00:00.00')
        setTimeList([])
        setStart(false)
    }
    const start = ()=>{
        setTimeList([])
        const momentjs = new moment()
        setTimer(setInterval(()=>{
            setTime(moment(new moment().valueOf() - momentjs.valueOf()).format('mm:ss:SS'))
        },10))
        setStart(true)
    }
    const add = ()=>{
        if(timeList.length==3){
            clearInterval(timer)
            setTimer(null)
            setStart(false)
            return 
        }
        setTimeList([...timeList,{
            time:timeText,
            title:`第${timeList.length+1}次`
        }])
    }
    return(
        <div className='stop-watch-component'>
            <Time time={timeText}></Time>
            <ControlButton reset={reset} start={start} add={add} isStart={isStart}></ControlButton>
            <TimeList list={timeList}></TimeList>
        </div>
    )
}

export default StopWatch