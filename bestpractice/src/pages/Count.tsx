import * as React from 'react';
import store from '../store/index'

const Count:React.FC = ()=>{
    const [state,setState] = React.useState(store.getState())
    const listener = ()=>{
        console.info('update state',state.count)
        setState(store.getState())
    }
    store.subscribe(listener)
    return(
        <>
            <span>{state.count}</span>
        </>
    )
}

export default Count

