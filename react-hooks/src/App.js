import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index(){
    let [count,setCount] = useState(0)
    useEffect(()=>{
        console.info('index Page')
        return ()=>{
            console.info('unmount index page')
        }
    },[])
    return(
        <div>
            <h2>Index Page</h2>
            <p>you click count:{count}</p>
            <button onClick={()=>{setCount(count+1)}}>click</button>
        </div>
    )
}

function List(){
    return(
        <div>
            <h2>List Page</h2>
        </div>
    )
}

function Page(){
    return(
        <Router>
            <ul>
                <li>
                    <Link to='/'>Index</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                </li>
            </ul>
            <Route path='/' exact component={Index}></Route>
            <Route path='/list' component={List}></Route>
        </Router>
    )
}

export default Page
