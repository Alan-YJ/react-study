import React, { Component } from 'react'
import { List } from 'antd'
import store from '../store/index'

class App extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange.bind(this))
    }
    render() { 
        return ( 
            <List dataSource={this.state.list} renderItem={item=>(
                <List.Item actions={[<a onClick={this.editItem.bind(this,item)}>edit</a>]}>
                    <List.Item.Meta 
                        title={<a href=''>{item.name}</a>}
                        description="ant-design-list"
                    ></List.Item.Meta>
                </List.Item>
            )}></List>
         );
    }
    storeChange(){
        console.info(this)
        this.setState(store.getState())
    }
    editItem(item){
        let action = {
            type:'edit-item',
            value:item
        }
        store.dispatch(action)
    }
}
 
export default App;