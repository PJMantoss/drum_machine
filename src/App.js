import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bankTwo from './components/bankTwo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: "Heater Kit",
      sliderVal: 0.3
    }
  }
  powerControl = () => {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    })
  }

  selectBank = () => {
    if(this.state.power){
      this.state.currentPadBankId === "Heater Kit" ? 
      this.setState({
        currentPadBank: bankTwo,
        display: "Smooth Piano Kit",
        currentPadBankId: "Smooth Piano Kit"
      }) : this.setState({
        currentPadBank: bankOne,
        display: "Heater Kit",
        currentPadBankId: "Heater Kit"
      })
    }
  }

  displayClipName = () => {}

  adjustVolume = () => {}

  clearDisplay = () => {}

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
