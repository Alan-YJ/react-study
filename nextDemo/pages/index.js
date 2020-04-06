import Link from 'next/link'
import Router,{withRouter} from 'next/router'
import React from 'react'
import axios from 'axios'

function goto(type){
  Router.push({
    pathname:'/page',
    query:{
      type:type
    }
  })
}

Router.events.on('routeChangeStart',(...arg)=>{
  console.info('routechange start ',arg)
})
Router.events.on('routeChangeComplete',(...arg)=>{
  console.info('routechange Complete ',arg)
})
Router.events.on('beforeHistoryChange',(...arg)=>{
  console.info('beforeHistoryChange ',arg)
}) 
Router.events.on('hashChangeStart',(...args)=>{
  console.log('hashChangeStart',...args)
})

function App(){
  return(
    <div>
      Index Page
      <Link href='/page?type=link'>
        <a>page</a>
      </Link>
      <button onClick={()=>{goto('button')}}>page</button>
    </div>
  )
}

export default withRouter(App)