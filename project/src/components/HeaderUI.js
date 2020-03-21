import React from 'react';
import { Input } from 'antd'


const Header = (props)=>{
    return(
        <Input.Search value={props.name} onSearch={()=>{props.confirm()}} onChange={(e)=>{props.changeName(e)}} />
    )
}

export default Header
