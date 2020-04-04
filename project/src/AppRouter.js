import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import './index.css'
import 'antd/dist/antd.css'

class AppRouter extends Component {
    render() { 
        return ( 
            <Router>
                <div className='header'>
                    <ul className='nav-list'>
                        <li><Link to='/'>首页</Link> </li>
                        <li><Link to='/'>视频教程</Link></li>
                        <li><Link to='/'>职场技能</Link></li>
                    </ul>
                </div>
                <div className='content'>
                    <Route path='/' exact component={Index}></Route>
                </div>
            </Router>
         );
    }
}
 
export default AppRouter;

