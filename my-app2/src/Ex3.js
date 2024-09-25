import { Component } from "react";

class Ex3 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            name: "Luffy",
            show: true,
            count: 0
        }

    }

    delHeader = () => {
        this.setState({show: false});
    }

    componentDidMount() {
        console.log("Implementation of componentDidMount() Method");
    }

    componentDidUpdate() {
        console.log("Implementation of componentDidUpdate() Method");
    }

    render () {

        let myHeader;

        if(this.state.show) {
            myHeader=<Ex9 />
        }

        return (
            <div>

                {myHeader}

                <h2>Hi I am :::{this.state.name}</h2>

                <center>
                    <button type="button" onClick={this.delHeader} > Delete Header</button>
                    <h3>Count {this.state.count}</h3>
                    <button onClick={()=>this.setState({count: this.state.count+1})}>Increse Count</button>
                </center>
            </div>
        )
    }


}

class Ex9 extends Component {

    componentWillUnmount() {
        console.log("Implementation of componentWillUnmount() ");
    }

    render() {
        return (
            <div>
                <center>

                    <h3>This is child component</h3>
                    <button>Product Component</button>

                </center>
                

            </div>
        )
    }
}

export default Ex3;