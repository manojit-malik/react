import { Component } from "react";


class Ex6 extends Component {

    constructor(props) {

        super(props);

        this.state = { greetings: ' '}

    }

    myFun = (evt) => {    
        this.setState({greetings : evt.target.value})

    }

    render () {
        return (
            <form>
                <h1>Seasonal Greetings...{this.state.greetings}</h1>
                <input type="text" onChange={this.myFun}></input>
            </form>
        )
    }

}

export default Ex6;