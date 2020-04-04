import React, { useReducer } from 'react'
import Context from './store'
import Buttons from './components/Buttons'
import Show from './components/Show'
import reducer from './store/reducer'

function App(){
    const [color, dispatch] = useReducer(reducer, 'blue')
    return(
        <Context.Provider value={{color,dispatch}}>
            <Buttons></Buttons>
            <Show></Show>
        </Context.Provider>
    )
}

export default App