import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/video'
import WorkPlace from './Pages/WorkPlace'
import './index.css'
import 'antd/dist/antd.css'

const routeConfig = [
    { path:'/',title:'首页',exact:true,component:Index},
    { path:'/video',title:'视频教程',exact:false,component:Video},
    { path:'/workplace',title:'职场技能',exact:false,component:WorkPlace},
]

class AppRouter extends Component {
    render() { 
        return ( 
            <Router>
                <div className='header'>
                    <ul className='nav-list'>
                        {
                            routeConfig.map(linkItem=>{
                                return(
                                    <li>
                                        <Link to={linkItem.path}>{linkItem.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='content'>
                    {
                        routeConfig.map(linkItem=>{
                            return(
                                <Route path={linkItem.path} exact={linkItem.exact} component={linkItem.component}></Route>
                            )
                        })
                    }
                </div>
            </Router>
         );
    }
}
 
export default AppRouter;

