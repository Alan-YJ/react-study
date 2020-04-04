import React,{ useContext, createContext} from 'react';
import Context from '../Context/index'

function Counter(){
    let count = useContext(Context)
    return(
        <div> Counter Page Data:{count}</div>
    )
}

export default Counter
