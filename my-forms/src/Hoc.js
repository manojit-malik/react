import React from 'react';

const Hoc = (Component) => {

    return (
       class extends React.Component {      //Anonymus Class

        state = {
            auth: true
        }

        render() {
            return(

                <div>
                    {this.state.auth ? <Component name="Manojit" /> : <h1>Please Login</h1>}
                </div>

            )
        }
       }
    )
}

export default Hoc;