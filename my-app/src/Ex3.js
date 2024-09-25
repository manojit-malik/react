import { Component } from "react";
import Ex4 from "./Ex4";

class Ex3 extends Component {

    state = {
        fruit : "Mango"
    }

    render(){
        return (
            <div>

                <center>
                    <Ex4 fruit={this.state.fruit} />
                    <Ex4 />
                </center>
                
                {this.state.fruit}

               
            </div>

            
        )
    }

}


export default Ex3;