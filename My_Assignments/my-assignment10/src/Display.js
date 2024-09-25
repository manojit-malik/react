import React, { useContext, useState } from "react";
import { store } from "./Assignment10";
import "./MyStyle.css";

const Display = () => {

  const [data, setData] = useContext(store);

  const [name, setName] = useState("");

  const [selectedBrand, setSelectedBrand] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, { brandName: name }]);
  };

  const removeHandler = () => {
    const newData = data.filter((item) => item.brandName !== selectedBrand);
    setData(newData);
  };

  return (


    <center className="disp">
      
      <div className="display">

        <form onSubmit={submitHandler}>

          <input className="inp" type="text" placeholder="Enter your brand" onChange={(e) => setName(e.target.value)}  />

          <input className="btn" type="submit" value="Add" />

        </form>

        <div className="remove">

          <input className="inp" type="text" placeholder="Enter brand name to remove" onChange={(e) => setSelectedBrand(e.target.value)} />

          <button className="btn" onClick={removeHandler}>Remove</button>

        </div>

      </div>

    </center>
  );
};

export default Display;