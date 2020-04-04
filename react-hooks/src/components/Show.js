import React,{useContext} from 'react'
import Context from '../store'

function Show(){
    const {color} =useContext(Context)
    return(
        <div style={{color:color}}>
            show text
        </div>
    )
}

export default Show