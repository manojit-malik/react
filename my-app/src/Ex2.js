import { Component } from "react";

class Ex2 extends Component {

    state = {
        name: "Manojit"
    };

    render(){
        const astyle = {
            background:"red",
            color: "black",
            padding: "40px",
            fontFamily: "Arial"
        }

        return (
            <div>
                <h2 style={astyle}> This is class Component by  {this.state.name}</h2>
            </div>
        )
    }
}

export default Ex2;