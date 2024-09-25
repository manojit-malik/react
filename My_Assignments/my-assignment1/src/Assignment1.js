// Sum of two numbers

import React,{useState} from "react";

const Assignment1 = () => {
    const [company, setCompany] = useState("Wipro");
    // const num1 = 0;
    // const num2 = 0;
    const [num1, setNum1] = useState(4);
    const [num2, setNum2] = useState(11); 
    const sum = num1 + num2;
    
    return (
        <div >
            <h2>My company name is {company}</h2>

            {/* <input type="number" onChange={(e) => setInput(parseInt(e.target.value))} />
            +
            <input type="number" onChange={(e)=> setInput2(parseInt(e.target.value))} /> */}
            
            <h2>The sum of two numbers: {num1} + {num2} is {sum} </h2>

            <br/><br/><br/><br/>
        </div>
    )
}




export default Assignment1;