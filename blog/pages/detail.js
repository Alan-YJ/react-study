import React,{ useState } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Avatar from '../components/Avatar'
import Popular from '../components/Popular'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown'
import '../static/style/pages/detail.css'
import { Col, Row, List, Tag, Breadcrumb, Alert, Affix } from 'antd'
import { CalendarOutlined, PlaySquareOutlined, FireOutlined } from '@ant-design/icons'

const Home = ()=>{
  const [content, setContent] = useState('# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```')
  return(
    <>
        <Head>
            <title>Detail</title>
        </Head>
        <Header></Header>
        <Row className='main' align='top' justify='center'>
            <Col xs={24} sm={24} md={16} lg={18} xl={14} className='main-left'>
                <Alert type="info" message={
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href='/'>首页</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/list'>列表</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            详情
                        </Breadcrumb.Item>
                    </Breadcrumb>
                }>
                </Alert>
                <div className='content'>
                    <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
                </div>
                <Footer />
            </Col>
            <Col xs={0} sm={0} md={7} lg={5} xl={5} className='main-right'>
                <Avatar></Avatar>
                {/* <Popular></Popular> */}
                <Advert></Advert>
                <Nav title='测试' top={0} content={content}></Nav>
            </Col>
        </Row>
    </>
  )
}

export default Home