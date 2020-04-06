import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { withRouter } from 'next/router'
import axios from 'axios'

const Page = ({router,list})=>{
  return(
    <div>
        {
            list.map(item=>{
                return item.name
            })
        }
        jump with {router.query.type}
    </div>
  )
}
Page.getInitialProps = async()=>{
  const promise = new Promise((resolve)=>{
      axios.get(`http://rap2.taobao.org:38080/app/mock/247141/list`).then(res=>{
          console.info(res.data)
          resolve(res.data)
      })
  })
  return await promise
}



export default withRouter(Page)