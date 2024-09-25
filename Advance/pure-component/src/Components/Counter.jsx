import React,{useState, useMemo } from 'react'

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne (counterOne +1 );
    }
    
    const incrementTwo = () => {
        setCounterTwo (counterTwo + 1);
    }

    const isEven = useMemo (() => {
      for(let i=0;i<=2000000000;i++){
      }
      return counterOne % 2 === 0;
    }, [counterOne])
    
    // const isEven = () => {
    //   for(let i=0;i<=2000000000;i++){

    //   }
    //   return counterOne % 2 === 0;
    // }

  return (
    <div>

        <br/><br/><br/>

        <button onClick={incrementOne}>Count One: {counterOne}</button> 
        <span> {isEven ? "Even" : "Odd"}</span>

        <br/><br/><br/>

        <button onClick={incrementTwo}>Count Two: {counterTwo}</button>
        

    </div>
  )
}

export default Counter;