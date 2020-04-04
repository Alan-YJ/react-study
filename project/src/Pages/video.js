import React, { Component } from 'react'
import { Route, Link} from 'react-router-dom'
import Vue from './video/vue'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'

class Video extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='video-page'>
                <ul className='video-nav'>
                    <li>
                        <Link to='/video/vue'>Vue</Link>
                    </li>
                    <li>
                        <Link to='/video/React'>React</Link>
                    </li>
                    <li>
                        <Link to='/video/Flutter'>Flutter</Link>
                    </li>
                </ul>
                <div className='video-content'>
                    <Route path='/video/vue' component={Vue}></Route>
                    <Route path='/video/React' component={ReactPage}></Route>
                    <Route path='/video/Flutter' component={Flutter}></Route>
                </div>
            </div>
         );
    }
}
 
export default Video;


