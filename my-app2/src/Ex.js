import React, {useState, useEffect} from "react"

const Ex = () => {

    const [count, setCount] = useState(0);

    const [count1, setCount1] = useState(0);

    useEffect(()=> console.log(count),[count]);

    const display = () => {

        // alert("hello");

        setCount(count+1);
        
    }

    const alertMsg = () => {
        alert("Hello User " );
    }

    const anonymusParameterAlertMsg = (msg, e) => {
        alert(msg);
        console.log(e);
        console.log(e.target);    // To get the property
        console.dir(e.target);    // Info on tag in the form of object
    }   

    const thala = (count) => {                                  // Arrow Function 
        if(count==7){
            alert("Thala for a reason.. count is " + count ); 
    }
        

    }

    return (

        <div>

            <p> You have Clicked {count} times. </p>
            <button onClick={display}> Click </button>

            <br />
            <br />

            <p> You have Clicked {count1} times. </p>
            <button onClick={()=> setCount1(count1+1)}>Click Me</button>   {/* Anonymus function */}

            <div onClick={thala(count)}></div>
            <div onClick={thala(count1)}></div>

            <br />

            <button onClick={alertMsg}>Click for Alert Msg</button>
            
            <br />
            <br />

            <button onClick={()=> alert("Yo Boiii!!!")}>Click for Alert Msg</button>

            <br />
            <br />

            <button onClick={(e)=> anonymusParameterAlertMsg("Hi Manojit", e)}>Click for Alert Msg</button>

            <br />
            <br />

            <input type="text" onKeyUp={(e)=> anonymusParameterAlertMsg("Hi Manojit", e)} />

        </div>

    )
}

export default Ex;