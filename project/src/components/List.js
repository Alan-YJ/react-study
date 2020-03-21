import React, { Component } from 'react'
import store from '../store/index'
import { List } from 'antd'

class AppList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <div>
                <List dataSource={this.state.list} renderItem={(item,index)=>(
                    <List.Item actions={[<a onClick={this.editItem.bind(this,item,index)}>edit</a>,<a onClick={this.delItem.bind(this,index)}>del</a>]}>
                        <List.Item.Meta title={<a>{item.name}</a>} description={<span>list item</span>}/>
                    </List.Item>
                )}></List>
            </div>
         );
    }
    editItem(item,index){
        let action = {
            type:'edit-item',
            value:{
                item:item,
                index:index
            }
        }
        store.dispatch(action)
    }
    delItem(index){
        let action = {
            type:'del-item',
            value:index
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
 
export default AppList;