import React, { Component } from 'react';
import DrumPad from "./components/DrumBeat"

export class PadBank extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let padBank;
        this.props.power ? 
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
            return (
                <DrumPad 
                    clipId={} 
                    clip={} 
                    keyTrigger={} 
                    keyCode={} 
                    updateDisplay={} 
                    power={} 
                />
            )
        });

        return (
            <div>
                
            </div>
        )
    }
}

export default PadBank
