import React, { Component } from 'react';

const activeStyle = {
    backgroundColor: "orange",
    boxShadow: "0 3px orange",
    height: 77,
    marginTop: 13
}

const inactiveStyle = {
    backgroundColor: "grey",
    boxShadow: "3px 3px 3px 5px black",
    marginTop: 10
}

export class DrumPad extends Component {
    constructor(props){
        super(props);
        this.state = {
            padStyle: inactiveStyle
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress = e => {
        if (e.keyCode === this.props.keyCode){
            this.playSound();
        }
    }

    activatePad = () => {
        if (this.props.power){
            this.state.padStyle.backgroundColor == "orange" ?
            this.setState({
                padStyle: inactiveStyle
            }) : this.setState({
                padStyle: activeStyle
            })
        } else {
            this.state.padStyle.marginTop == 13 ?
            this.setState({
                padStyle: inactiveStyle
            }) : this.setState({
                padStyle: {
                    height: 77,
                    marginTop: 13,
                    backgroundColor: "grey",
                    boxShadow: "0 3px grey"
                }
            })
        }
    }

    playSound = e => {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.activatePad();
        setTimeout(() => this.activatePad(), 100);
        this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }

    render() {
    
        return (
            <div 
                id="" 
                onClick="" 
                className="" 
                style={}
            >
                
            </div>
        )
    }
}

export default DrumPad
