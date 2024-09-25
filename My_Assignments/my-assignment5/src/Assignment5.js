// create a react application pass two numbers in child component and display sum in parent component

import { Component } from "react";
import './MyStyle.css'

class Assignment5 extends Component {
    
    render () {

        let myHeader;

        
            myHeader=<Child />
        

        return (
            <div>

                <center class="parent">

                    <h2>This is Parent Class</h2>

                </center>
                
                
                {myHeader}

            </div>
        )
    }


}

class Child extends Component {

    constructor(props) {

        super(props);
        this.state = {
            num1 : 11,
            num2 : 89
        }

    }

    render() {
        return (
            <div>
                <center>

                    <h2 class='child'>This is Child component</h2>

                    <h3 class='child'>The Sum of {this.state.num1} + {this.state.num2} = {this.state.num1 + this.state.num2} </h3>

                </center>
                

            </div>
        )
    }
}

export default Assignment5;