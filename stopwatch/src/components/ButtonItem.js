import React from 'react';
import '../static/styles/component/buttonItem.css'

function Button(props){
    const clickBtn = ()=>{
        props.handler()
    }
    return(
        <div className={props.class+" btn-item"} onClick={clickBtn}>
            <div className="btn">
                {props.text}
            </div>
        </div>
    )
}

export default Button