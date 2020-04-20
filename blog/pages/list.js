import React,{ useState,useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Avatar from '../components/Avatar'
import Popular from '../components/Popular'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import ApiUrls from '../config/apiUrl'
import Link from 'next/link'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import { Col, Row, List, Tag, Breadcrumb, Alert } from 'antd'
import { CalendarOutlined, PlaySquareOutlined, FireOutlined } from '@ant-design/icons'

const renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  sanitize:false,
  xhtml: false,
  highlight: function (code) {
          return hljs.highlightAuto(code).value;
  }
}); 

const ListPage = (pageContent)=>{
  const [dataSource, setDataSource] = useState(pageContent.data)
  useEffect(()=>{
    setDataSource(pageContent.data)
  })
  return(
    <>
        <Head>
            <title>Home</title>
        </Head>
        <Header></Header>
        <Row className='main' align='top' justify='center'>
            <Col xs={24} sm={24} md={16} lg={18} xl={14} className='main-left'>
                <Alert type="info" message={
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href='/'>首页</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>列表</Breadcrumb.Item>
                    </Breadcrumb>
                } style={{"marginBottom":".5rem"}}>
                </Alert>
                <List dataSource={dataSource}  className='comm-block'
                    itemLayout='vertical'
                    renderItem={item => (
                        <List.Item >
                            <div className='article-title'>
                                <h3>
                                    <Link href={`/detail?id=${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h3>
                            </div>
                            <div className="article-info">
                                <Tag color='volcano'>共{dataSource.length}集</Tag>
                                <span className='date'>
                                    <CalendarOutlined />
                                    {item.create_at}
                                </span>
                                <span className='type'>
                                    <PlaySquareOutlined />
                                    {item.typeName}
                                </span>
                                <span className="views">
                                    <FireOutlined />
                                    {item.view_count}人
                                </span>
                            </div>
                            <div className="article-content">
                                <div dangerouslySetInnerHTML={{ __html: marked(item.introduce_html) }}></div>
                            </div>
                        </List.Item>
                    )}
                >
                </List>
                <Footer />
            </Col>
            <Col xs={0} sm={0} md={7} lg={5} xl={5} className='main-right'>
                <Avatar></Avatar>
                <Popular></Popular>
                <Advert></Advert>
            </Col>
        </Row>
    </>
  )
}

ListPage.getInitialProps = async (context)=>{
    const id = context.query.id
    return await new Promise((resolve)=>{
        axios.get(`${ApiUrls.getListById}${id}`).then(res=>{
            console.info(res.data)
            resolve(res.data)
        })
    })
}

export default ListPage