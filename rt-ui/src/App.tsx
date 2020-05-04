import React from 'react';
import Button,{ ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Link} href="/" loading={true}>测试</Button>
        <Button btnType={ButtonType.Primary}>Primary Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>large Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>danger Button</Button>
        <Button btnType={ButtonType.Success} size={ButtonSize.Small}>info Button</Button>
        <Button btnType={ButtonType.Warning} size={ButtonSize.Small}>warning Button</Button>
        <Button btnType={ButtonType.Default} >warning Button</Button>
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

