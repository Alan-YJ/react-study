import React, { Component } from 'react'
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import Index from './Pages/Index'
import Item from './Pages/Item'
import Home from './Pages/Home'

class AppRouter extends Component {
    render() { 
        return ( 
            <Router>
                <Route path='/' exact component={Index}></Route>
                <Route path='/list/:id' component={Item}></Route>
                <Route path='/home' component={Home}></Route>
            </Router>
        );
    }
}
 
export default AppRouter;
