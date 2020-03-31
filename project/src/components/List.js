import React, { Component } from 'react'
import store from '../store/index'
import { Input,Button } from 'antd'
import { connect } from 'react-redux'

class List extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
    }
    render() { 
        return ( 
            <div>
                <div className='header'>
                    <Input value={this.props.name} onChange={this.props.changeName}/>
                    <Button>提交</Button>
                </div>
                <div>
                    <ul>
                        <li>test</li>
                    </ul>
                </div>
            </div>
         );
    }
}

const stateToProps = (state)=>{
    return{
        name:state.name
    }   
}

const dispatchToProps = (dispatch)=>{
    return {
        changeName(e){
            dispatch({
                type:'change-name',
                value:e.target.value
            })
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(List);