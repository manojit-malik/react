import { Component } from "react";
import MemoComp from "./MemoComp";


class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Manojit"
        }
    }

    componentDidMount() {
        setInterval(()=> {
            this.setState({
                name: "Manojit"
            })
        }, 2000)
    }

    render () {
        console.log("******************* Parent Component Render *******************")
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
            </div>

        )
    }
}

export default ParentComp;