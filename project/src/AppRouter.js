import React from 'react'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'

function AppRouter(){
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/'>Index</Link>
                </li>
                <li>
                    <Link to='/list/'>List</Link>
                </li>
            </ul>
            <Route path='/' exact component={Index}></Route>
            <Route path='/list/' component={List}></Route>
        </Router>
    )
}

export default AppRouter
