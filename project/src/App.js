import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import List from './components/List'
import './App.css'
import { Spin, Modal } from 'antd'
import { getList } from './api/request'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:[],
      currentItem:{},
      isLoading:false
    }
  }

  componentWillMount(){
    this.setState({
      isLoading:true
    })
    getList().then(res=>{
      this.setState({
        isLoading:false,
        list:res.list
      })
    }).catch(()=>{
      this.setState({
        isLoading:false
      })
      Modal.error({
        title:'列表加载失败'
      })
    })
  }

  render() { 
    return ( 
      <Fragment>
        <Header
          currentItem={this.state.currentItem}
          saveName={this.saveName.bind(this)}
          addItem={this.addItem.bind(this)}
        ></Header>
        <List
          list = {this.state.list}
        ></List>
      </Fragment>
     );
  }
  saveName(name){
    let index = this.state.list.findIndex(this.state.currentItem)
    let list = this.state.list
  }
  addItem(name){
    let index = this.state.list.findIndex(this.state.currentItem)
    let max = Math.max(...this.state.list.map(item=>{return parseInt(item.id)}))
    let list = this.state.list
    list.splice(index,1,{
      id:max+1,
      name:name
    })
    this.setState({
      list:list
    })
  }
}
 
export default App;