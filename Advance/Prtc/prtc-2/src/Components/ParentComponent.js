import React, { useState, useCallback } from 'react';
import List from './List';
import '../MyStyle.css'

const ParentComponent = () => {
    const [numbers, setNumbers] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addNumber = useCallback(() => {
        const number = parseInt(inputValue, 10);
        if (!isNaN(number)) {
            setNumbers(prevNumbers => [...prevNumbers, number]);
            setInputValue('');
        }
    }, [inputValue]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <h1>useMemo, useCallback, React.memo()</h1>

            <hr/>

            <h1>This is Parent Component</h1>

            <div className='inputList'>

                <label>Enter the number of items to be added into the List</label>
                <br/>

                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter the number of items to be added into the list..."/>
                
            </div>

            <button onClick={addNumber}>Add Number</button>

            <hr/>

            <List items={numbers} />
        </div>
    );
};

export default ParentComponent;