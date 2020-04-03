import React, { Component } from 'react'

class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:undefined
        }
    }
    render() { 
        return ( 
            <div>item id:{this.state.id}</div>
         );
    }
    componentWillMount(){
        let id = this.props.match.params.id
        this.setState({
            id:id
        })
    }
}
 
export default Item;