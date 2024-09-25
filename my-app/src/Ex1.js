// function Ex1(){
//     return (
//         <div>
//             <h2>This is my own component</h2>
//         </div>
//     )
// }

import React,{useState} from "react";
import './MyStyle.css'

const Ex1 = () => {
    const [company, setCompany] = useState("Wipro");
    const sum = 4 + 3;
    return (
        <div class='myClass'>
            <h2>My company name is {company}</h2>
            <h2>The sum of two numbers is {sum} </h2>
        </div>
    )
}




export default Ex1;