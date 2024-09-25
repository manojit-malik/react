// create a react application which contains array of numeric values(Ex 10,20,30,40,50,60,60)
// print the values which are greater than 40 and print in the individual component

import './MyStyle.css';

const Assignment6 = () => {

    const arr = [10,20,30,40,50,60,60];


    const filter = arr.filter(arr => arr>40);

    const arrElements = arr.map((elements) => <ul>{elements}</ul>);

    return(
        <center>
            <h1>The Orignal Array: </h1>

            <div className="array">
                
                {arrElements}
                
            </div>

        <h1>Elements in the Array greater than 40</h1>

            <div className="array">

                {
                    filter.map((value, index) => <li key={index} > {value} </li>)
                }
            </div>
            
        </center>
    )
}

export default Assignment6;