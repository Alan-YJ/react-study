import React from 'react';
// import Button,{ ButtonType, ButtonSize } from './components/Button/button'
// import Alert,{ AlertType } from './components/Alert/Alert'
import Menu,{ MenuModes } from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
import Tabs from './components/Tabs/tabs'
import TabPane from './components/Tabs/tabPane'
import Icon,{ themeType } from './components/Icon/icon'

function App() {
  const changeTab = (e:string)=>{
    console.info(e)
  }

  const tabClick = (e:string)=>{
    console.info('tab-click',e)
  }
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
        {/* <Tabs type="card" change={changeTab} tabClick={ tabClick }>
            <TabPane tab='test'>test123</TabPane>
            <TabPane tab='test1'>test1234</TabPane>
            <TabPane tab='test2' disabled={true}>test2</TabPane>
            <TabPane tab='test3'>test3</TabPane>
            <TabPane tab={<>
              customer header
            </>}>test3</TabPane>
        </Tabs> */}
        {/* <Icon icon='tree' theme='info'></Icon> */}
      </header>
    </div>
  );
}

export default App;

