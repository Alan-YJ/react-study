import React from 'react';
import '../static/styles/component/showTime.css'

function ShowTime(props){
    return (
        <div className='time-wrap'>
            {props.time}
        </div>
    )
}

export default ShowTime