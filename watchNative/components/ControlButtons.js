//按钮控制

import React from 'react';
import { View,Text,StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ControlButtons : ()=> React$Node = (props)=>{
    const {activated,onStart,onReset,onSplit,onPause} = props;
    if(activated){
        return(
            <View style={style.btnWrap}> 
                <View style={[style.btn,style.stop]}>
                    <Text style={[style.btnText,style.stopText]} onPress={onPause}>停止</Text>
                </View>
                <View style={[style.btn,style.split]}>
                    <Text style={[style.btnText,style.splitText]} onPress={onSplit}>计次</Text>
                </View>
            </View>
        )
    }else{
        return(
            <View style={style.btnWrap}> 
                <View style={[style.btn,style.stop]}>
                    <Text style={[style.btnText,style.stopText]} onPress={onReset}>复位</Text>
                </View>
                <View style={[style.btn,style.start]}>
                    <Text style={[style.btnText,style.startText]} onPress={onStart}>启动</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    btnWrap:{
        flex:2,
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:30,
        paddingRight:30,
    },
    btn:{
        borderWidth:2,
        borderRadius:52,
        height:108,
        borderColor:"#b0b0b0"
    },
    btnText:{
        backgroundColor:"#b0b0b0",
        borderRadius:50,
        width:100,
        height:100,
        textAlign:'center',
        lineHeight:100,
        color:'white',
        margin:2,
        fontSize:20
    },
    start:{
        borderColor:"rgba(0,255,0,.7)",
    },
    startText:{
        backgroundColor:"rgba(0,255,0,.7)",
    },
    split:{
        borderColor:"#fecc11",
    },
    splitText:{
        backgroundColor:"#fecc11",
    },
    stop:{
        borderColor:"red",
    },
    stopText:{
        backgroundColor:"red",
    },
})

ControlButtons.propTypes = {
    activated:PropTypes.bool,
    onStart:PropTypes.func,
    onReset:PropTypes.func,
    onPause:PropTypes.func,
    onSplit:PropTypes.func
}

export default ControlButtons