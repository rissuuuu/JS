import React, {Component} from "react";

class Destruct1 extends Component {

    render() {
        const {first_name, last_name} = this.props
        return (<div>
            <h1>Hello {first_name} {last_name}</h1>
        </div>)
    }
}


export default Destruct1;
