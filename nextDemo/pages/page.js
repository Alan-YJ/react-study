import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import { withRouter } from 'next/router'

const Page = ({router})=>{
  return(
    <div>
        jump with {router.query.type}
    </div>
  )
}

export default withRouter(Page)