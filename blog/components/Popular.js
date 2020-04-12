import React, { useState } from 'react'
import { Tabs,Button } from 'antd'
import { MoneyCollectOutlined,CheckCircleOutlined,QqOutlined } from '@ant-design/icons'
import '../static/style/components/popular.css'

function Popular(){
    return (
        <div className='comm-block crowd'>
            <Tabs defaultActiveKey='1'>
                <Tabs.TabPane tab='圈子' key='1'>
                    <div className='crowd-img'>
                        <img src="http://newimg.jspang.com/zhishixingqiu.png" />
                        <span>
                            <MoneyCollectOutlined/>
                            只要50元/年 得4项福利
                        </span>
                    </div>
                    <ul className='crowd-list'>
                        <li>
                            <CheckCircleOutlined/>
                            视频离线高清版下载-400集
                        </li>
                        <li>
                            <CheckCircleOutlined/>
                            每周至少两篇文章分享
                        </li>
                        <li>
                            <CheckCircleOutlined/>
                            技术胖收费视频半价购买
                        </li>
                        <li>
                            <CheckCircleOutlined/>
                            每天回答所提问题（选择性回答）
                        </li>
                    </ul>
                    <div className='slide-button'>
                        <Button type='primary'>查看详情</Button>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab='公众号' key='2'>
                    <img src="http://newimg.jspang.com/weixingongzhonghao.jpg"/>
                </Tabs.TabPane>
                <Tabs.TabPane tab='QQ群' key='3'>
                    <div className='panel-title'>加入QQ群 一起学习</div>
                    <ul className='qq-list'>
                        <li>
                            <QqOutlined />
                            前端1群:364140450（3000人）
                        </li>
                        <li>
                            <QqOutlined />
                            前端2群:364140450（3000人）
                        </li>
                        <li>
                            <QqOutlined />
                            React群:364140450（3000人）
                        </li>
                        <li>
                            <QqOutlined />
                            Flutter-1群:364140450（3000人）
                        </li>
                        <li>
                            <QqOutlined />
                            Flutter-2群:364140450（3000人）
                        </li>
                    </ul>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default Popular