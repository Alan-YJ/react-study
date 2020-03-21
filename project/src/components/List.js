import React, { Component } from 'react'
import store from '../store/index'
import * as actionTypes from '../store/actionTypes'
import ListUI from './ListUI'


class AppList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        this.editItem = this.editItem.bind(this)
        this.delItem = this.delItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <ListUI 
                list = {this.state.list}
                editItem = {this.editItem}
                delItem = {this.delItem}
            ></ListUI>
         );
    }
    editItem(item,index){
        let action = {
            type:actionTypes.EDIT_ITEM,
            value:{
                item:item,
                index:index
            }
        }
        store.dispatch(action)
    }
    delItem(index){
        let action = {
            type:actionTypes.DEL_ITEM,
            value:index
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
 
export default AppList;