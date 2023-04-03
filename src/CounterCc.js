import React, {Component} from 'react'

export default class Counter_CC extends Component {
    constructor(props) {
        super (props)
        this.state = {count: props.initialCount }
    }
    
    render() {
        return (
        <>
            <button onClick={() => this.changeCount(-1)}> - </button>
            <span> {this.state.count} </span>
            <button onClick={() => this.changeCount(1)}> + </button>
        </>
        )
    }
    changeCount (amount) {
       this.setState(prevstate => {return {count: prevstate.count + amount}})
    }

}