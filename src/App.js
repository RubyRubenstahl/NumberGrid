import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HundredsBoard from './components/HundredsBoard'
import Stage from './components/Stage'
class App extends Component {
  render() {


    return (
      <div className="App">
        <Stage title={'Hudreds Board'}>
          <HundredsBoard/>
        </Stage>
      </div>
    );
  }
}

export default App;
