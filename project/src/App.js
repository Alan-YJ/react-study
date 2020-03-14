import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import List from './components/List'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      list:[
        {id:1,name:'js'},
        {id:2,name:'vue'}
      ],
      currentItem:undefined
    }
  }
  render(){
    return(
      <Fragment>
        <Header 
          currentItem={this.state.currentItem}
          saveEditName={this.saveEditName.bind(this)}
          addItem={this.addItem.bind(this)}
          ref={(header)=>{this.header = header}}
        ></Header>
        <List 
          list={this.state.list}
          editItem={this.editItem.bind(this)}
          delItem={this.delItem.bind(this)}
        ></List>
      </Fragment>
    )
  }
  saveEditName(name){
    let index = this.state.list.indexOf(this.state.currentItem)
    let list = this.state.list
    list.splice(index,1,{id:this.state.currentItem.id,name:name})
    this.setState({
      list:list,
      currentItem:undefined
    })
  }
  addItem(name){
    let max = Math.max(...this.state.list.map(item=>{return item.id}))+1
    this.setState({
      list:[...this.state.list,{id:max,name:name}]
    })
  }
  editItem(item){
    this.setState({
      currentItem:item
    })
    this.header.setName(item.name)
  }
  delItem(item,index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default App
