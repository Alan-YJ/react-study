import React,{ useState } from 'react';
import { createFromIconfontCN } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const IconFont = createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_1776708_bnwg14aojj9.js'
})

function Footer(props){
    const [dataList,setDataList] = useState([
        {id:1,icon:'icon-clock',title:'闹钟',href:'/clock'},
        {id:2,icon:'icon-time',title:'时间',href:'/time'},
        {id:3,icon:'icon-Stop-Watch',title:'秒表',href:'/stopwatch'},
    ])

    const active = (item)=>{
        props.actived(item.id)
    }
    return(
        <div className='nav-wrap'>
            {
                dataList.map(item=>{
                    return(
                        <Link to={item.href} key={item.id} onClick={()=>{active(item)}} className={props.active===item.id?"active":""}>
                            <IconFont type={item.icon}></IconFont>
                            <div>{item.title}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Footer