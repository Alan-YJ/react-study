import React, { Component, Fragment } from 'react'
import Header from './Header'
import List from './List'

class IndexPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[
                {id:1,text:'list1'},
                {id:2,text:'list2'},
                {id:3,text:'list3'},
            ]
        }
    }
    render() { 
        return ( 
            <Fragment>
                <Header></Header>
                <List list={this.state.list}></List>
            </Fragment>
         );
    }
}
 
export default IndexPage;