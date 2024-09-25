import React, { PureComponent } from "react";

class PureComp extends PureComponent {

    render() {

        return (
            <div>
                <h1>Hi I am {this.props.msg}</h1>
                <h1>I can only be used by using {this.props.name}</h1>
            </div>
        )

    }
    

}

export default PureComp;