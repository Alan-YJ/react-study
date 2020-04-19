import React, { useState } from 'react'
import {} from 'react-router'
import Head from 'next/head'
import Header from '../components/header'
import Avatar from '../components/Avatar'
import Popular from '../components/Popular'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import { Col, Row, List, Tag } from 'antd'
import { CalendarOutlined, PlaySquareOutlined, FireOutlined } from '@ant-design/icons'
import Link from 'next/link'
import ApiUrls from '../config/apiUrl'

const Home = (list) => {
    const [topList, setTopList] = useState([
        {
            "id": 54,
            "title": "50元加入小密圈 胖哥带你学一年",
            "introduce": "\n> 这是原来网站打赏的升级版，本博客不再接受任何打赏，而是加入一起学习。\n\n![胖哥小密圈](http://newimg.jspang.com/xiaomiquan.png)\n\n50元跟着胖哥学一年，掌握程序的学习方法。\n也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。\n你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。\n我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。\n如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。\n你遇到的职业问题，我也会第一时间给你解答。\n\n",
            "addTime": "2019-12-09",
            "view_count": 16590,
            "introduce_html": "<blockquote>\n<p>这是原来网站打赏的升级版，本博客不再接受任何打赏，而是加入一起学习。</p>\n</blockquote>\n<p><img src=\"http://newimg.jspang.com/xiaomiquan.png\" alt=\"胖哥小密圈\"></p>\n<p>50元跟着胖哥学一年，掌握程序的学习方法。\n也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。\n你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。\n我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。\n如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。\n你遇到的职业问题，我也会第一时间给你解答。</p>\n",
            "part_count": 1,
            "typeName": "视频教程"
        }
    ])
    const [talkList, setTalkList] = useState([
        {
            "id": 36,
            "title": "聊聊程序员社招的那些事儿",
            "url": "https://www.bilibili.com/video/BV1aC4y147V5/",
            "image": "http://newimg.jspang.com/bbd23.jpg",
            "order_id": 0
        },
        {
            "id": 35,
            "title": "聊大学生春招入职程序员的准备",
            "url": "https://www.bilibili.com/video/BV1v7411C7Zw/",
            "image": "http://newimg.jspang.com/bbd22.jpg",
            "order_id": 0
        },
        {
            "id": 33,
            "title": "大学生如何作？才能轻松当高薪程序员",
            "url": "https://www.bilibili.com/video/av97319913",
            "image": "http://newimg.jspang.com/bbd21.jpg",
            "order_id": 0
        },
        {
            "id": 32,
            "title": "13年经验程序员聊聊如何入职靠谱IT公司",
            "url": "https://www.bilibili.com/video/av95682433",
            "image": "http://newimg.jspang.com/bbd20.jpg",
            "order_id": 0
        }
    ])
    const [dataSource, setDataSource] = useState(list.data)
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Header></Header>
            <Row className='main' align='top' justify='center'>
                <Col xs={24} sm={24} md={16} lg={18} xl={14} className='main-left'>
                    <List dataSource={topList} itemLayout='vertical' className='comm-block'
                    renderItem={item =>(
                        <List.Item>
                            <div className="article-title">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="article-info">
                                <Tag color='volcano'>置顶</Tag>
                                <span className='date'>
                                    <CalendarOutlined />
                                    {item.addTime}
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
                            <div className="article-content" dangerouslySetInnerHTML={{__html:item.introduce_html}}></div>
                        </List.Item>
                    )}>
                    </List>
                    <List header={<div>其他技能</div>} dataSource={talkList} className='video-list comm-block'
                        renderItem={item=>(
                            <li>
                                <div>
                                    <a href={item.url}>
                                        <img src={item.image}/>
                                    </a>
                                </div>
                                <div>
                                    <a href={item.url}>{item.title}</a>
                                </div>
                            </li>
                        )}
                    ></List>
                    <List header={<div>最新日志</div>} dataSource={dataSource}  className='comm-block'
                        itemLayout='vertical'
                        renderItem={item => (
                            <List.Item >
                                <div className='article-title'>
                                    <h3>
                                        <Link href={{pathname:'/detail',query:{id:item.id}}}>
                                            <a >{item.title}</a>
                                        </Link>
                                    </h3>
                                </div>
                                <div className="article-info">
                                    <Tag color='volcano'>共1集</Tag>
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
                                    <div dangerouslySetInnerHTML={{ __html: item.introduce }}></div>
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

Home.getInitialProps = async()=>{
    const promise = new Promise((resolve)=>{
        axios.get(ApiUrls.getArticleList).then(res=>{
            resolve({
                data:res.data
            })
        })
    })
    return await promise
}

export default Home