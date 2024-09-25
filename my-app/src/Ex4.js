import { Component } from "react";

class Ex4 extends Component {

    render(){
        return (
            <div>
               <center> My favourite fruit is {this.props.fruit}</center>
               <h2>I am from Ex4 Component</h2>
            </div>
        )
    }

}

export default Ex4;