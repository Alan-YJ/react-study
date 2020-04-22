import React,{ useEffect } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Index from './Index'

function Main(){
    useEffect(()=>{
        
    })
    return(
        <Router>
            <Route path='/login/' exact component={Login}/>
            <Route path='/' component={Index} />
        </Router>
    )
}

export default Main