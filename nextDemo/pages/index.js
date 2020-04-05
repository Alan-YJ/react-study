import Link from 'next/link'
import Router from 'next/router'
import React from 'react'

function goto(type){
  Router.push({
    pathname:'/page',
    query:{
      type:type
    }
  })
}

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

export default App