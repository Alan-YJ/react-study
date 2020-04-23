import React from 'react';
import ButtonItem from './ButtonItem'
import '../static/styles/component/controlButton.css'

function ControlButton(props){
    const reset = ()=>{
        props.reset()
    }

    const start = ()=>{
        props.start()
    }
    const add = ()=>{
        props.add()
    }

    return (
        <div class='btns'>
            <ButtonItem class='reset' handler={reset} text="复位"></ButtonItem>
            {
                props.isStart?
                <ButtonItem class='add' handler={add} text="计次"></ButtonItem>
                :
                <ButtonItem class='start' handler={start} text="启动"></ButtonItem>
            }
        </div>
    )
}

export default ControlButton