import React, { Component } from 'react'
import { List } from 'antd'
import store from '../store/index'
import * as actionCreators from '../store/actionCreators'

class ListApp extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <List
                dataSource={this.state.list}
                renderItem = {item=>(
                    <List.Item>
                        <List.Item.Meta title={<a>{item.name}</a>} />
                    </List.Item>
                )}
            ></List>
         );
    }
    componentWillMount(){
        store.dispatch(actionCreators.getList())
    }
    storeChange(){
        console.info(store.getState())
        this.setState(store.getState())
    }
}
 
export default ListApp;