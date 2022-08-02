import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    handleIncrement = () => {
        //const count = this.state.count;
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        //const count = this.state.count;
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div className='col-md-5 col-11 mx-auto text-center'>
                <h1>Class based counter</h1>
                <button onClick={this.handleDecrement}> - </button>
                <span className='mx-3'>{this.state.count}</span>
                <button onClick={this.handleIncrement}> + </button>
                <p className='text-info'>{this.state.message}</p>
            </div>
        )
    }
}
