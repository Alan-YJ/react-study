import React, { Component } from 'react'
import { Input,Button } from 'antd'
import store from '../store/index'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.addItem = this.addItem.bind(this)
        this.onEnter = this.onEnter.bind(this)
        this.changeName = this.changeName.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <div>
                <Input.Search value={this.state.name} onPressEnter={this.onEnter} onSearch={this.addItem} onChange={this.changeName} />
            </div> 
        );
    }
    addItem(){
        if(this.state.currentItem.id){
            let action = {
                type:'save-item',
                value:this.state.name
            }
            store.dispatch(action)
        }else{
            let action = {
                type:'add-item',
                value:this.state.name
            }
            store.dispatch(action)
        }
    }
    onEnter(){
        
    }
    changeName(e){
        const action = {
            type:'change-name',
            value:e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}

 
export default Header;