import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import List from './components/List'

class App extends Component {
  render() { 
    return ( 
      <Fragment>
        <Header></Header>
        <List></List>
      </Fragment>
     );
  }
}
 
export default App;