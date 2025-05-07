import React, {Component} from "react";


class StateExample extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor', button_text: 'Subscribe'
        }
        // this.handle_subscribe = this.handle_subscribe.bind(this)
    }

    handle_subscribe = ()=> {
        console.log(this.state.message, this.state.message == 'Subscribe')
        if (this.state.button_text == 'Subscribe') {
            this.setState({
                message: "Thanks for subscribing.", button_text: 'Unsubscribe'
            })
        } else if (this.state.button_text == 'Unsubscribe') {
            this.setState({
                message: "You have been Unsubscribed.", button_text: 'Subscribe'
            })
        }
    }

    render() {
        return (<div>
            <h1>{this.state.message}</h1>
            <button id='subscribe' onClick={this.handle_subscribe}>{this.state.button_text}</button>
        </div>)
    }
}

export default StateExample