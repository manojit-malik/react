import React,{useState, useCallback} from "react";

import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComponent = () => {

    const [age, setAge] = useState(18);

    const [salary, setSalary] = useState(50000);

    const incAge = useCallback(() => {
        setAge (age + 1);
    }, [age]);

    const incSalary = useCallback(() => {
        setSalary (salary + 25000);
    }, [salary]); 

    return (
        <div>

            <Title />

            <br/><br/><br/>

            <Count text="Age" count={age}/>

            <Button handleClick={incAge}>Increase Age</Button>

            <br/><br/><br/>

            <Count text="Salary" count={salary} />

            <Button handleClick={incSalary}>Increase Salary</Button>

        </div>
    )

}

export default ParentComponent;