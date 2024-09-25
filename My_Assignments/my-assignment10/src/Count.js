import React, {createContext, useContext } from 'react'
import { store } from './Assignment10';
import './MyStyle.css';

const Count = () => {

    const [data, setData] = useContext(store);

  return (

    <center className='count'>

        <div >

            <div>
              
                <h1>Total Brands Added: {data.length}</h1>

                <div className='itemNames'>
                  <h6>Brand Names</h6>
                  {data.map((item, index) => (
                  <h5> <i> {item.brandName} </i> </h5>
                  ))}

                </div>
  
            </div>

        </div>



        
    </center>
  )
}

export default Count;