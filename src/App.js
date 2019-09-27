import React from 'react';
import {Table} from './Table';
import ReactDOM from 'react-dom';

import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Table data={this.dataSet}/>
        </div>
    );
  }
}

export default App;
