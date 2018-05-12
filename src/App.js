import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HighlightPlaceValues from './components/HighlightPlaceValues'
import Stage from './components/Stage'
class App extends Component {
  render() {


    return (
      <div className="App">
        <Stage title={'Hundreds Board'}>
          <HighlightPlaceValues/>
        </Stage>
      </div>
    );
  }
}

export default App;
