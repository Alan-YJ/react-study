import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'
import Money from './workplace/Money'
import Getup from './workplace/Getup'

class WorkPlace extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='workplace-page'>
                <ul className="workplace-nav">
                    <li>
                        <Link to='/workplace/money'>Money</Link>
                    </li>
                    <li>
                        <Link to='/workplace/getup'>Getup</Link>
                    </li>
                </ul>
                <div className="workplace-content">
                    <Route path='/workplace/money' component={Money} ></Route>
                    <Route path='/workplace/getup' component={Getup} ></Route>
                </div>
            </div>
         );
    }
}
 
export default WorkPlace;