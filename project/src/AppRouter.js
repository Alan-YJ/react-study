import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/video'
import WorkPlace from './Pages/WorkPlace'
import './index.css'
import 'antd/dist/antd.css'

class AppRouter extends Component {
    render() { 
        return ( 
            <Router>
                <div className='header'>
                    <ul className='nav-list'>
                        <li><Link to='/'>首页</Link> </li>
                        <li><Link to='/video'>视频教程</Link></li>
                        <li><Link to='/workplace'>职场技能</Link></li>
                    </ul>
                </div>
                <div className='content'>
                    <Route path='/' exact component={Index}></Route>
                    <Route path='/video' component={Video}></Route>
                    <Route path='/workplace' component={WorkPlace}></Route>
                </div>
            </Router>
         );
    }
}
 
export default AppRouter;

