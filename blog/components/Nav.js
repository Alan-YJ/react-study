import React from 'react';
import MarkdownNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import '../static/style/components/nav.css'
import { Affix } from 'antd'

function Nav(props){
    return(
        <Affix offsetTop={props.top}>
            <div className='deatil-nav-wrap'>
                <div className='detail-nav-title'>{props.title}</div>
                <MarkdownNav className='detail-nav-menu'
                source={props.content}
                ordered={false}
                ></MarkdownNav>
            </div>
        </Affix>
    )
}
 
export default Nav;
