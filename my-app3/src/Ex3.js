import React,{useEffect, useState} from 'react';
import axios from 'axios';


const Ex3 = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/todos").then(response => setData(response.data));
        // console.log(data);
    },[])
  return (
    <div>
        {data.map(item => <li key={item.id}>{item.title}</li>)}
        Ex9
    </div>
  )
}

export default Ex3;