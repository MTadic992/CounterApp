import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }


    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h4>Zero</h4> : count;
    }
}
export default Counter;

