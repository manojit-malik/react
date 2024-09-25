import React,{createContext, useContext} from 'react';
import { store } from './Ex1';

const Count = () => {

  const [data, setData] = useContext(store)
  return (
    <center className='card'>
        <div className='card-body'>
            Component Count
            
            <h3 className='card-title'>{data.length}</h3>
        </div>
        
    </center>
  )
}

export default Count