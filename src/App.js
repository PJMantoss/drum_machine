import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PadBank from "./components/PadBank";
import bankTwo from './components/bankTwo';
import PadBank from './components/PadBank';

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

  displayClipName = name => {
    if(this.state.power){
      this.setState({
        display: name
      })
    }
  }

  adjustVolume = e => {
    if (this.state.power){
      this.setState({
        sliderVal: e.target.value,
        display: "Volume " + Math.round(e.target.value * 100)
      })
      setTimeout(() => this.clearDisplay(), 1000)
    }
  }

  clearDisplay = () => {
    this.setState({
      display: String.fromCharCode(160)
    })
  }

  render() {
    const powerSlider = this.state.power ? {
      float: 'right'
    } : {
      float: 'left'
    };

    const bankSlider = this.state.currentPadBank === bankOne ? {
      float: 'left'
    } : {
      float: 'right'
    }; {
      const clips = [].slice.call(document.getElementsByClassName("clip"));
      clips.forEach(sound => {
        sound.volume = this.state.sliderVal
      })
    }

    return (
      <div id="drum-machine" className="inner-container">
        <PadBank 
            power={this.state.power} 
            updateDisplay={this.displayClipName} 
            clipVolume={this.state.sliderVal} 
            currentPadBank={this.state.currentPadBank} 
        />
      </div>
    );
  }
}

export default App;
