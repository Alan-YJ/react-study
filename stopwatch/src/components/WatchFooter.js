import React,{ useState } from 'react';
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_1776708_bnwg14aojj9.js'
})

function Footer(){
    const [dataList,setDataList] = useState([
        {id:1,icon:'icon-clock',title:'闹钟'},
        {id:2,icon:'icon-time',title:'时间'},
        {id:3,icon:'icon-Stop-Watch',title:'秒表'},
    ])
    return(
        <div class='nav-wrap'>
            
        </div>
    )
}

export default Footer