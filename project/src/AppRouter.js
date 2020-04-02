import React from 'react'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom'

function Index(){
    return <h2>test</h2>
}

function List(){
    return <h2>List-page</h2>
}

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
