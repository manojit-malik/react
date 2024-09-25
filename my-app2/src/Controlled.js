import React,{useState} from "react";
import Test from './Test';

function Controlled () {
    const [name, setName] = useState("");

    const myFun = e => {

        setName(e.target.value);

    }


    return(
        <div>
            <center>
                Name ::: {name}
                <br/>
                <input type="text" onChange={myFun}></input>
                <Test myFun={myFun}/>
            </center>
        </div>
    )
}

export default Controlled;