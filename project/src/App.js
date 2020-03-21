import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import List from './components/List'
import { Spin } from 'antd'
import store from './store/index'

class App extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      <Fragment>
        <Spin spinning={this.state.loading}>
          <Header></Header>
          <List></List>
        </Spin>
      </Fragment>
     );
  }
  storeChange(){
    this.setState(store.getState())
  }
}
 
export default App;