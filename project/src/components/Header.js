import React, { Component } from 'react'
import store from '../store/index.js'
import * as actionCreators from '../store/actionCreators'
import { Input,Button } from 'antd'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.addItem = this.addItem.bind(this)
        this.changeName = this.changeName.bind(this)
    }
    render() { 
        return ( 
            <div className='header'>
                <Input onChange={this.changeName}/>
                <Button onClick={this.addItem}>新增</Button>
            </div>
         );
    }
    addItem(){
        console.info('additem`')
    }
    changeName(e){
        store.dispatch(actionCreators.changeName(e.currentTarget.value))
    }
}
 
export default Header;