import { useState } from "react";

export default function Input(prop) {

    const [city,value] = useState('');

    const setTheCity =(data)=>{

        value(data.target.value);
    }

    const onSubmit =()=>{

        prop.datas(city);
    }
  return (
    <>
      <label className="mr-1"  htmlFor="city">Location:</label>
      <input className="bg-blue-200 border-2 border-black" onChange={setTheCity} type="text" placeholder="Enter the city" />
      <button className="bg-blue-500 text-blue-300 border-0 ml-1 hover:bg-blue-900 " onClick={onSubmit}>Search</button>
    </> 
  );
}
