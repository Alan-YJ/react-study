import React,{ useState } from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Footer from '../components/WatchFooter'
import StopWatch from './StopWatch'
import '../static/styles/pages/watch.css'

function Watch(){
    const [activeTab,setActiveTab] = useState(3)
    return(
        <Router>
            <div className='page'>
                <header className='header'>秒表</header>
                <div className='content'>
                    <Route path='/stopwatch' component={StopWatch}></Route>
                </div>
                <div className='footer-nav'>
                    <Footer active={activeTab} actived={setActiveTab}></Footer>
                </div>
            </div>
        </Router>
    )
}

export default Watch