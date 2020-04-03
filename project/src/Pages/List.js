import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.props.list.map(item=>{
                            return(
                                <li>
                                    <Link to={"/list/"+item.id}>{item.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
         );
    }
}
 
export default List;