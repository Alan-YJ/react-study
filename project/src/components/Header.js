import React, { Component } from 'react'
import HeaderUI from './HeaderUI'
import store from '../store/index'
import * as actionTypes from '../store/actionTypes'
import * as actions from '../store/actionCreators'

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
            <HeaderUI
                name={this.state.name}
                confirm={this.confirm}
                changeName ={this.changeName}
            ></HeaderUI>
         );
    }
    confirm(){
        let action = {
            type:"",
            value:''
        }
        if(this.state.currentItem){
            action = actions.saveChange(this.state.name)
        }else{
            action = actions.addItem(this.state.name)
        }
        store.dispatch(action)
    }
    changeName(e){
        let action = actions.changeName(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
 
export default Header;