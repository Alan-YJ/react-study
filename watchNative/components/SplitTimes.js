// 返回计次

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'
import moment from 'moment'

const SplitTimes: ()=> React$Node = (props)=>{
    return(
        <View style={{flex:3}}>
            <FlatList data={props.list} 
            renderItem={
            ({item})=>(<Text style={style.row}>{moment(item.title).format("mm:ss.SSS")}</Text>)
            } />
        </View>
    )
}

const style = StyleSheet.create({
    row:{
        fontSize:30,
        lineHeight:50,
        borderTopWidth:1,
        borderTopColor:'gray',
        textAlign:"center",
    }
})


export default SplitTimes

