import React, { Component } from 'react'
import { Input,Button } from 'antd'
import * as actions from '../store/actionCreators'
import { connect } from 'react-redux'

class Header extends Component {
    render() { 
        let { name,changeName,currentItem,saveName,addItem } = this.props
        return ( 
            <div className='header'>
                <Input value={name} placeholder='请输入名称' onChange={changeName} />
                {
                    currentItem ?
                        <Button onClick={saveName}>保存</Button>:
                        <Button onClick={addItem}>添加</Button>
                }
            </div>
         );
    }
}

const stateToProps = (state)=>{
    return{
        name:state.name,
        currentItem:state.currentItem
    }
}

const dispatchToProps = (dispatch,props)=>{
    return{
        changeName(e){
            dispatch(actions.changeName(e.currentTarget.value))
        },
        saveName(){
            dispatch(actions.saveItem())
        },
        addItem(){
            dispatch(actions.addItem())
        }
    }
}

export default connect(stateToProps,dispatchToProps)(Header);