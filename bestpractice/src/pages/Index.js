import React,{ useState, useEffect } from 'react';
import LogoutButton from '../components/LogoutButton'
import withLogin from '../plugins/Hoc'
import store from '../store/index'

function Index(){
    const [count,setCount] = useState(store.getState().count)
    const add = ()=>{
        store.dispatch('add')
    }
    return (
        <div>
            {count}
            <button onClick={add}>click</button>
        </div>
    )
}


export default Index