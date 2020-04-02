import React, { Component } from 'react'
import { List } from 'antd'
import * as actionTypes from '../store/actionTypes'
import * as actions from '../store/actionCreators'
import { connect } from 'react-redux'

class ListComponent extends Component {
    render() { 
        let { list,editItem,delItem } = this.props
        return ( 
            <div>
                <List 
                    dataSource={list}
                    renderItem = {(item,index)=>(
                        <List.Item
                            actions = {[<a data-index={index} onClick={editItem}>编辑</a>,<a className='del-link' data-index={index} onClick={delItem}>删除</a>]}
                        >
                            <List.Item.Meta
                                title={<a data-index={index} data-item={item} onClick={editItem}>{item.name}</a>}
                                description="test description"
                            />
                        </List.Item>
                    )}
                    >
                </List>
            </div>
         );
    }
}

const mapStateToProps = (state)=>{
    return{
        list:state.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        editItem(e){
            dispatch(actions.editItem(e.currentTarget.dataset.index))
        },
        delItem(e){
            dispatch(actions.removeItem(e.currentTarget.dataset.index))
        }
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);