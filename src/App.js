import React from 'react';
import './App.less';
import { Button } from 'antd-mobile';
function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="hi">
          Learn React
      </h2>
        <Button type="primary" size="small" inline>small</Button>
      </header>
    </div>
  );
}

export default App;
