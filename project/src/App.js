import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() { 
    return ( 
      <div>
        <Header></Header>
        <List></List>
      </div>
    );
  }
}
 
export default App;