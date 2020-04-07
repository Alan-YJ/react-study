import { Col,Row,Menu, } from 'antd'
import { YoutubeOutlined , MessageOutlined , HomeOutlined} from '@ant-design/icons'
import Link from 'next/link'
import '../static/style/components/header.css'

const Header = ()=>{
    return(
        <div className='header-wrapper'>
            <Row align='middle' justify='center'>
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <Link href='/'>
                        <a className='logo'>前端圈</a>
                    </Link>
                    <span className="logo-desc">前端技术分享站</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6} >
                    <Menu mode='horizontal' style={{"textAlign":"right","border":"none"}}>
                        <Menu.Item key='index'>
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        <Menu.Item key='video'>
                            <YoutubeOutlined />
                            视频教程
                        </Menu.Item>
                        <Menu.Item key='message'>
                            <MessageOutlined />
                            聊一聊
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header