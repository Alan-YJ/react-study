import React from 'react';
import Button,{ ButtonType, ButtonSize } from './components/Button/button'
import Alert,{ AlertType } from './components/Alert/Alert'
import Menu,{ MenuModes } from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu mode={ MenuModes.horizontal }>
          <MenuItem >test1</MenuItem>
          <MenuItem disabled={true} >test2</MenuItem>
          <MenuItem >test3</MenuItem>
          <SubMenu title='子菜单'>
            <MenuItem>test</MenuItem>
            <MenuItem>test1</MenuItem>
          </SubMenu>
        </Menu>
      </header>
    </div>
  );
}

export default App;

