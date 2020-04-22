import React, { Component, useState } from 'react'
import { Avatar,Divider,Tag } from 'antd'
import { QqOutlined, WechatOutlined, GithubOutlined } from '@ant-design/icons'
import '../static/style/components/avatar.css'

function AvatarComponent(){
    const [tags,setTags] = useState([
        { color:"magenta",text:"Vue"},
        { color:"cyan",text:"javascript"},
        { color:"purple",text:"C#"},
        { color:"green",text:"TypeScript"},
        { color:"orange",text:"Python"},
    ])
    return (
        <div className='author-wrapper comm-block'>
            <Avatar size={100} src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'></Avatar>
            <div className='author-name'>嗷呜汪汪汪</div>
            <div className='author-brief'>专注于前端开发</div>
            <div className='author-tags'>
                {
                    tags.map(tag=>{
                        return (
                            <Tag key={tag.text} color={tag.color}>{tag.text}</Tag>
                        )
                    })
                }
            </div>
            <Divider>社交账号</Divider>
            <div className='author-social'>
                <QqOutlined />
                <WechatOutlined />
                <GithubOutlined />
            </div>
        </div>
    )
}

export default AvatarComponent