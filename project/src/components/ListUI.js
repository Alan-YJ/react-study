import React from 'react';
import { List } from 'antd'

const ListUI = (props)=>{
    return(
        <div>
            <List dataSource={props.list} renderItem={(item,index)=>(
                <List.Item actions={[<a onClick={()=>{props.editItem(item,index)}}>edit</a>,<a onClick={()=>{props.delItem(index)}}>del</a>]}>
                    <List.Item.Meta title={<a>{item.name}</a>} description={<span>list item</span>}/>
                </List.Item>
            )}></List>
        </div>
    )
}

export default ListUI
