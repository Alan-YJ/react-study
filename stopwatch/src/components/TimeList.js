import React from 'react';
import { List } from 'antd'
import '../static/styles/component/timeList.css'

function TimeList(props){
    return (
        <div className='time-list'>
            <List dataSource={props.list}
                locale={{emptyText:''}}
                renderItem={(item,index)=>(
                    <List.Item key={index} extra={item.time}>
                        <List.Item.Meta title={item.title}></List.Item.Meta>
                    </List.Item>
                )}
            ></List>
        </div>
    )
}

export default TimeList