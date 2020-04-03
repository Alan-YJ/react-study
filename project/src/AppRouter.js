import React, { Component } from 'react'
import { BrowserRouter as Router, Route , Link} from 'react-router-dom'
import Index from './Pages/Index'
import Item from './Pages/Item'

class AppRouter extends Component {
    render() { 
        return ( 
            <Router>
                <Route path='/' exact component={Index}></Route>
                <Route path='/list/:id' component={Item}></Route>
            </Router>
        );
    }
}
 
export default AppRouter;
