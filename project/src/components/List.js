import React, { Component } from 'react';
import { Button } from 'antd'

class List extends Component {
    constructor(props){
        super(props)
    }
    state = {  }
    render() { 
        return ( 
            <ul className='list'>
                {
                    this.props.list.map(item=>{
                        return(
                            <li key={item.id} >
                                <span>{item.name}</span>
                                <span className='btns'>
                                    <Button size='small' type='primary'>编辑</Button>
                                    <Button size='small' type='danger'>删除</Button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
         );
    }
}
 
export default List;