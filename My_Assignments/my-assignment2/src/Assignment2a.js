// create a react application that displays your company name...with along external style sheet
// create a react application that uses components and props to display whises among them.
 


import { Component } from "react";
import './MyStyle.css'

class As2a extends Component{

    render() {

        return (

            <center>

                <div class="ExternalComp">

                    <h2>Hi I am Ex6's Component </h2>

                    <h2>My company name is Wipro</h2>

                </div>

            </center>
        )
    }
}

export default As2a;