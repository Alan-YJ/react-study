import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul className="list">
                {
                    this.props.list.map((item,index)=>{
                        return(
                            <li className="item" key={item.id}>
                                <span>{item.name}</span>
                                <span>
                                    <button onClick={this.editItem.bind(this,item)}>编辑</button>
                                    <button onClick={this.delItem.bind(this,item,index)}>删除</button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    editItem(item){
        this.props.editItem(item)
    }
    delItem(item,index){
        this.props.delItem(item,index)
    }
}

List.propTypes = {
    list:PropTypes.array,
    editItem:PropTypes.func,
    delItem:PropTypes.func
}

export default List