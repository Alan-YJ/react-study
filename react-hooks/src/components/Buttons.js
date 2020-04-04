import React,{useContext} from 'react'
import Context from '../store'

function Buttons(){
    const {dispatch} = useContext(Context)
    return(
        <div>
            <button onClick={()=>{dispatch({type:'change-color',value:'red'})}}>red</button>
            <button onClick={()=>{dispatch({type:'change-color',value:'yellow'})}}>yellow</button>
        </div>
    )
}

export default Buttons