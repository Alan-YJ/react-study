import React,{ useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd'
import { PieChartOutlined,DesktopOutlined , UserOutlined ,FileOutlined  } from '@ant-design/icons'

const { Header, Content, Footer, Sider}  = Layout
const { SubMenu } = Menu

function Index(){
    const [collapsed,setCollapsed] = useState(false)
    const onCollapse = collapsed=>{
        setCollapsed(collapsed)
    }
    return(
        <Layout style={{minHeight:'100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div classNameI="logo"></div>
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                    <Menu.Item key='1'>
                        <PieChartOutlined />
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <DesktopOutlined />
                        <span>添加文章</span>
                    </Menu.Item>
                    <SubMenu key='sub1' tittle={
                        <span>
                            <UserOutlined/>
                            <span>文章管理</span>
                        </span>
                    }>
                        <Menu.Item key='3'>添加文章</Menu.Item>
                        <Menu.Item key='4'>文章列表</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </Layout>
    )
}

export default Index

