import React, { Component } from 'react';
import './App.css';
import Tacos from './components/Tacos/Tacos';
import TacoSelector from './components/TacoSelector/TacoSelector';


const numTacos = ["0", "1", "2", "3"];
class App extends Component {
  state = {
    selectedIdx: 0
  }
  handleTacoSelection = (newIdx) => {
    this.setState({selectedIdx: newIdx})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Taco Selector</header>
        <main>
            <TacoSelector 
              handleTacoSelection={this.handleTacoSelection}
              numTacos={numTacos}
              selectedIdx={this.state.selectedIdx}
              />
            <Tacos 
              handleTacoSelection={this.handleTacoSelection}           
              numTacos={numTacos}
              selectedIdx={this.state.selectedIdx}
            />          
        </main>
      </div>
    );
  }
}
export default App;