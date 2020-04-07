import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { Col,Row } from 'antd'

const Home = ()=>{
  return(
    <>
      <Head>
        <title>Detail</title>
      </Head>
      <Header></Header>
      <Row className='main' align='middle' justify='center'>
        <Col xs={24} sm={24} md={16} lg={18} xl={14} className='main-left'>
          左侧
        </Col>
        <Col xs={0} sm={0} md={7} lg={5} xl={4} className='main-right'>
          右侧
        </Col>
      </Row>
    </>
  )
}

export default Home