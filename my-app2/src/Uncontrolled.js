import React,{useRef} from "react";

function Uncontrolled () {

    const inputRef = useRef("");

    const myFun = (e) => {
        e.preventDefault();
        alert(inputRef.current.value);
    }


    return (
        <div>
            <form onSubmit={myFun}>
            <input type="text" ref={inputRef}/>
            <br />
            <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}

export default Uncontrolled