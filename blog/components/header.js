import { useEffect,useState,Fragment } from 'react'
import { Col,Row,Menu,Icon } from 'antd'
import { YoutubeOutlined , MessageOutlined , HomeOutlined} from '@ant-design/icons'
import Link from 'next/link'
import axios from 'axios'
import ApiUrls from '../config/apiUrl'
import Router from 'next/router'
import '../static/style/components/header.css'

const Header = ()=>{
    const [list,setList] = useState([])
    useEffect(()=>{
        const data = async()=>{
            await axios.get(ApiUrls.getTypes).then(res=>{
                setList(res.data.data)
                return res.data.data
            })
        }
        data()
    },[])
    const clickHandler = (e)=>{
        if(e.key=='index'){
            Router.push('/')
        }else{
            Router.push(`/list?id=${e.key}`)
        }
    }
    return(
        <div className='header-wrapper'>
            <Row align='middle' justify='center'>
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <Link href='/'>
                        <a className='logo'>前端圈</a>
                    </Link>
                    <span className="logo-desc">前端技术分享站</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={7} >
                    <Menu mode='horizontal' onClick={clickHandler} style={{"textAlign":"right","border":"none"}}>
                        <Menu.Item key='index'>
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {
                            list.map(item=>{
                                const Icontag = item.icon
                                return(
                                    <Menu.Item key={item.id} >
                                        {
                                            item.icon=="YoutubeOutlined"?<YoutubeOutlined />:item.icon=="MessageOutlined"?<MessageOutlined />:""
                                        }
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header