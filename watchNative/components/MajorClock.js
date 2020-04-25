//时间显示

import React from 'react';
import { Text,View,StyleSheet } from 'react-native'
import moment from 'moment'

const MajorClick: ()=>React$Node=(props)=>{
    return(
        <View style={[style.textWrap,{flex:3}]}>
            <Text style={style.timeText}>{moment(props.milliseconds).format("mm:ss.SSS")}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textWrap:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    timeText:{
        fontSize:70,
        textAlign:'center',
        fontFamily:'monospace'
    }
})

export default MajorClick
