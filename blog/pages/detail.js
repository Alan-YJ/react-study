import React,{ useState } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Avatar from '../components/Avatar'
import Popular from '../components/Popular'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
// import ReactMarkdown from 'react-markdown'
import ApiUrls from '../config/apiUrl'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import '../static/style/pages/detail.css'
import axios  from 'axios'
import { Col, Row, List, Tag, Breadcrumb, Alert, Affix } from 'antd'
import { CalendarOutlined, PlaySquareOutlined, FireOutlined } from '@ant-design/icons'


const Detail = (pageContent)=>{
    const [content, setContent] = useState(pageContent.data.content)
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer:renderer,
        gfm:true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
                return hljs.highlightAuto(code).value;
        }
    })
  let html = marked(pageContent.data.content) 
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
                    <div dangerouslySetInnerHTML={{__html:html}}></div>
                    {/* <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown> */}
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

Detail.getInitialProps = async (context)=>{
    const id = context.query.id
    return await new Promise((resolve)=>{
        axios.get(`${ApiUrls.getDetail}${id}`).then(res=>{
            resolve({data:res.data.data[0]})
        }).catch(err=>{
            console.info(err)
        })
    })
}

export default Detail