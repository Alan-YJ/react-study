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
            <div>
                <List dataSource={this.state.list}></List>
            </div>
         );
    }
}
 
export default App;