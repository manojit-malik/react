import React,{createContext, useContext, useState} from 'react'
import { store } from './Ex1'

const Display = () => {

  const submitHandler = e => {
    e.preventDefault();
    setData([...data,{brandName:name}])
  }

  const [data, setData] = useContext(store)
  const [name, setName] = useState('')

  return (
    <center>
        Component Display

        {data.map(item => <h3>{item.brandName}</h3>)}

        <form onSubmit={submitHandler}>
          <input type='text' placeholder='Enter your brand' onChange={(e)=> setName(e.target.value)}/>
          <input type='submit' value='Add' />
        </form>
    </center>
  )
}

export default Display;