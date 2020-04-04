import React, { useReducer } from 'react'

function Index(){
    const [ count,dispatch ] = useReducer((state,action)=>{
        switch(action.type){
            case 'add':
                return state +1
            case 'remove':
                return state -1
        }
    },0)
    return(
        <div>
            <button onClick={()=>{dispatch({type:'remove'})}}>-</button>
            <input type="text" value={count}/>
            <button onClick={()=>{dispatch({type:'add'})}}>+</button>
        </div>
    )
}

export default Index
