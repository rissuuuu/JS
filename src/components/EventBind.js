import React, {Component} from "react";


class EventBind extends Component {
    constructor() {
        super();
        this.state = {
            'message': "HELLO"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = () => {
        this.setState({'message': 'Bye Bye'})
    }

    render() {
        return (<div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler}>Click</button>
        </div>)
    }
}

export default EventBind