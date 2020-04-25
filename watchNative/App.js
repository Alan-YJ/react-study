//主控
import React,{ useState } from 'react';
import { View,Text,StyleSheet } from 'react-native'
import MajorClock from './components/MajorClock'
import ControlButtons from './components/ControlButtons'
import SplitTimes from './components/SplitTimes'
import moment from 'moment'

const App: ()=> React$Node = ()=>{
  const [milliseconds,setMilliseconds] = useState(0)
  const [activated,setActivaed] = useState(false)
  const [splits,setSplits] = useState([])
  const [startTime,setStartTime] = useState(0)
  const [timer,setTimer] = useState(null)
  const onStart = ()=>{
    let startOf = null
    if(startTime == 0){
      startOf = new moment()
      setStartTime(startOf)
      setSplits([])
    }
    setActivaed(true)
    setTimer(setInterval(()=>{
      setMilliseconds((new moment().valueOf() - startOf.valueOf()))
    },10))
  }
  const onReset = ()=>{
    setActivaed(false)
    clearInterval(timer)
    setStartTime(0)
    setSplits([])
    setMilliseconds(0)
  }
  const onPause = ()=>{
    setActivaed(false)
    clearInterval(timer)
  }
  const onSplit = ()=>{
    setSplits([...splits,{
      title:moment().valueOf() - startTime.valueOf()
    }])
  }


  return(
    <View style={{flex:1}}>
      <MajorClock milliseconds={milliseconds}></MajorClock>
      <ControlButtons activated={activated} onStart={onStart} onReset={onReset} onPause={onPause} onSplit={onSplit}></ControlButtons>
      <SplitTimes list={splits}></SplitTimes>
    </View>
  )
}


export default App


