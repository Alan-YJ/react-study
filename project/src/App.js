import React,{Component, Fragment} from 'react';
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'',
      list:[
        { id:1,name:'vue' },
        { id:2,name:'js' },
        { id:3,name:'css' },
      ],
      currentEditId:undefined
    }
  }
  render(){
    return(
      <Fragment>
        <div className="header">
          <input type="text" onKeyDown={this.keyDown.bind(this)} value={this.state.name} onChange={this.changeName.bind(this)}/>
          <button onClick={this.addItem.bind(this)}>
            {this.state.currentEditId?"保存技能":"新增技能"}
          </button>
        </div>
        <ul className="list">
          {
            this.state.list.map((item,index)=>{
              return(
                <li data-id={item.id} key={item.id}>
                  <span>{item.name}</span>
                  <span className='icon'>
                    <button data-id={item.id} onClick={this.delItem.bind(this,index)}>删除</button>
                    <button data-id={item.id} onClick={this.editItem.bind(this)}>编辑</button>
                  </span>
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  changeName(e){
    this.setState({
      name:e.target.value
    })
  }
  addItem(){
    if(this.state.currentEditId){
      this.setState({
        list:this.state.list.map(item=>{
          if(item.id==this.state.currentEditId){
            return {
              id:this.state.currentEditId,
              name:this.state.name
            }
          }else{
            return item
          }
        }),
        currentEditId:undefined,
        name:''
      })
    }else{
      this.setState({
        list:[...this.state.list,
          {id:Math.max(...this.state.list.map(item=>{return parseInt(item.id)}))+1,name:this.state.name}
        ],
        name:''
      })
    }
  }
  keyDown(e){
    if(e.key=='Enter' && this.state.name!=''){
      this.addItem()
    }
  }
  editItem(e){
    let id = e.target.dataset.id
    this.setState({
      currentEditId:id,
      name:this.state.list.find(item=>{
        return item.id==id
      }).name
    })
  }
  delItem(index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default App
