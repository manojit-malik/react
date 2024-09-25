// Create a simple counter application where you can increase,
// decrease and reset the counter value
// Hint: useState
// Notice: working arrow functions and also anoymous functions.

import { Component } from "react";
import './MyStyle.css'

class Assignment3 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            count: 0
        }

    }


    render () {

        const decreaseCount = () => {
            this.setState({count: this.state.count-1})
        }
        
        const zero = () => {
            this.setState({count: this.state.count=0})
        }

        const astyle = {
            
        }


        return (
            
            <div>

                <center>
                    
                    <h3>Count {this.state.count}</h3>

                    <button className="marginRight" id="increase" onClick={()=>this.setState({count: this.state.count+1})}>Increse Count</button>
                    
                    <button className="marginRight" id="decrease" onClick={decreaseCount}>Decrease Count</button>

                    <button className="marginRight" id="reset" onClick={zero}>Count Zero </button>
                    
                </center>

            </div>
        )
    }


}

export default Assignment3;