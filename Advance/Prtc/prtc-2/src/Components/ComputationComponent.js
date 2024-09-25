import React, { useState, useMemo } from 'react';

const factorial = (n) => {
    console.log("Calculating factorial");
    if (n <= 0) return 1;
    return n * factorial(n - 1);
};

const ComputationComponent = () => {
    const [number, setNumber] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const result = useMemo(() => {
        if (number !== null) {
            return factorial(number);
        }
        return null;
    }, [number]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const calculateFactorial = () => {
        const num = parseInt(inputValue, 10);
        if (!isNaN(num)) {
            setNumber(num);
            setInputValue('');
        }
    };

    return (
        <div>

            <div className='inputFactorial'>

                <label>Enter a number for the Factorial</label>
                <br/>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a number" />
            
            </div>
            
            <button onClick={calculateFactorial}>Calculate Factorial</button>

            <br/>

            {number !== null && result !== null && (
                <p>Factorial of {number} is {result}</p>
            )}

        </div>
    );
};

export default ComputationComponent;