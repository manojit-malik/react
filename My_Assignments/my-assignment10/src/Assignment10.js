import React,{createContext, useState} from 'react';
import Display from './Display';
import Count from './Count';


export const store = createContext();

const Assignment10 = () => {

    const [data, setData] = useState([
        {
            brandName: "Hero"
        },
        {
            brandName: "Honda"
        },
        {
            brandName: "TVS"
        },
    ])

  return (

    
    <div className='aTen'>

        <p>Brand Details ©</p>

        <store.Provider value={[data, setData]}>

            <Count />

            <Display />

        </store.Provider>
        
    </div>
  )
}


export default Assignment10;