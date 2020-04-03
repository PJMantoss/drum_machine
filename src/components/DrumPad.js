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
        };
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default DrumPad
