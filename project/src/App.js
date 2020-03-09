import React,{Component,Fragment} from 'react';

class App extends Component{
  render(){
    return(
      <Fragment>
        <div className='header'>
          <input type="text"/>
          <button>增加技能</button>
        </div>
        <ul className='list'>
          <li>vue</li>
          <li>javasctipt</li>
          <li>css</li>
        </ul>
      </Fragment>
    )
  }
}

export default App;