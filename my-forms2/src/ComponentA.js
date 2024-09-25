import React, {useContext} from 'react'
import { store } from './App';

const ComponentA = () => {

    const [data, setData] = useContext(store);

  return (
    <div>
        ComponentA data : {data}
    </div>
  )
}

export default ComponentA;