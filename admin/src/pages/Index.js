import React,{ useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd'
import { PieChartOutlined,DesktopOutlined , UserOutlined ,FileOutlined  } from '@ant-design/icons'
import { Route } from 'react-router-dom'
import EditArticle from './EditArticle'
import ArticleList from './ArticleList'

const { Header, Content, Footer, Sider}  = Layout
const { SubMenu } = Menu

function Index(props){
    const [collapsed,setCollapsed] = useState(false)
    const onCollapse = collapsed=>{
        setCollapsed(collapsed)
    }
    const jumpTo = e =>{
        if(e.key.indexOf('/')>-1){
            props.history.push(e.key)
        }
    }
    return(
        <Layout style={{minHeight:'100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"></div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' onClick={jumpTo}>
                    <Menu.Item key='/'>
                        <PieChartOutlined />
                        <span>工作台</span>
                    </Menu.Item>
                    {/* <Menu.Item key='2'>
                        <DesktopOutlined />
                        <span>添加文章</span>
                    </Menu.Item> */}
                    <SubMenu key='2' title={
                        <span>
                            <DesktopOutlined />
                            <span>文章管理</span>
                        </span>
                    }>
                        <Menu.Item key='/edit_article'>添加文章</Menu.Item>
                        <Menu.Item key='/list'>文章列表</Menu.Item>
                    </SubMenu>
                    <Menu.Item key='9'>
                        <UserOutlined />
                        <span>留言管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{background:"#fff",padding:0}}></Header>
                <Content style={{margin:"0 16px"}}>
                    <Breadcrumb style={{margin:"16px 0"}}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding:24,background:"#fff",minHeight:360}}>
                        <Route path='/' exact component={ArticleList}></Route>
                        <Route path='/list' exact component={ArticleList}></Route>
                        <Route path='/edit_article' component={EditArticle}></Route>
                    </div>
                </Content>
                <Footer style={{textAlign:"center"}}>site footer</Footer>
            </Layout>
        </Layout>
    )
}

export default Index

