import React, {Component} from "react";


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increase = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }), () => console.log("SYNC", this.state.count))
        console.log("ASYNC", this.state.count)
    }

    inc = () => {
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }

    render() {
        return (<div>
            <div>Count - {this.state.count}</div>
            <button onClick={this.inc}>Increment</button>
        </div>)
    }
}

export default Counter