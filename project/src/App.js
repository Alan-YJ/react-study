import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import List from './components/List'
import { Spin } from 'antd'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from './store/actionCreators'
import * as actionTypes from './store/actionTypes'
import store from './store/index'

class App extends Component {
  render() { 
    let { loading } = this.props
    return ( 
      <Fragment>
        <Spin spinning={loading}>
          <Header></Header>
          <List></List>
        </Spin>
      </Fragment>
     );
  }
  componentWillMount(){
    axios.get(`http://rap2.taobao.org:38080/app/mock/247141/list`).then(res=>{
      store.dispatch({
        type:actionTypes.SAVELIST,
        value:res.data.list
      })
    })
  }
}

const mapStateToProps = (state)=>{
  return{
    loading:state.loading
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    loadList(data){
      dispatch(actions.saveList(data))
    }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(App);