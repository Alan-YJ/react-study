import React, { Component } from 'react'
import { List } from 'antd'
import store from '../store/index'

class App extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        console.info(this.state)
    }
    render() { 
        return ( 
            <List dataSource={this.state.list} renderItem={item=>(
                <List.Item>
                    <List.Item.Meta 
                        title={<a href=''>{item.name}</a>}
                        description="ant-design-list"
                    ></List.Item.Meta>
                </List.Item>
            )}></List>
         );
    }
}
 
export default App;