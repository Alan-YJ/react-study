import React from 'react';
import Button,{ ButtonType, ButtonSize } from './components/Button/button'
import Alert,{ AlertType } from './components/Alert/Alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button btnType={ButtonType.Link} href="/" loading={true}>测试</Button>
        <Button btnType={ButtonType.Primary}>Primary Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>large Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>danger Button</Button>
        <Button btnType={ButtonType.Success} size={ButtonSize.Small}>info Button</Button>
        <Button btnType={ButtonType.Warning} size={ButtonSize.Small}>warning Button</Button>
        <Button btnType={ButtonType.Default} >warning Button</Button> */}
        {/* <Alert showIcon >warning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Title</Alert>
        <Alert type={AlertType.Error} showIcon  message='warning Title' description='warning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Title' ></Alert>
        <Alert type={AlertType.Success} onClose={(e)=>{console.info(e)}} showIcon closable closeText="close text" message='Success Title' description='success description success descriptionsuccess descriptionsuccess description'></Alert>
        <Alert type={AlertType.Warning} showIcon message='warning Title' description='warning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Titlewarning Title' /> */}
        <Menu>
          <MenuItem title='test'></MenuItem>
        </Menu>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

