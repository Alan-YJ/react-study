import React, { Component } from 'react'
import  { Input, Button } from 'antd'
import store from '../store/index'
import * as actionTypes from '../store/actionTypes'

class Header extends Component {
    constructor(props){
        super(props)
        console.info(store)
        this.state = store.getState()
        this.confirm = this.confirm.bind(this)
        this.changeName = this.changeName.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <div>
                <Input.Search value={this.state.name} onSearch={this.confirm} onChange={this.changeName} />
            </div>
         );
    }
    confirm(){
        let action = {
            type:"",
            value:''
        }
        if(this.state.currentItem){
            action = {
                type:actionTypes.SAVE_CHANGE,
                value:this.state.name
            }
        }else{
            action = {
                type:actionTypes.ADD_ITEM,
                value:this.state.name
            }
        }
        store.dispatch(action)
    }
    changeName(e){
        let action = {
            type:actionTypes.CHANGE_NAME,
            value:e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
 
export default Header;