import { useState } from "react";
import "./App.css";
import Input from "./Input";
import Render from "./Render";
import img from "../src/temp.png";

function App() {
  const [cityNew, setNewCity] = useState("");

  const cityName = (data) => {
    setNewCity(data);
  };
  return (
    <div className="border-2 border-cyan-100 bg-cyan-300 w-[100%] h-[100%]">
      <img className=" w-60 h-52 ml-12  "src={img} alt="/" />
      <Input datas={cityName} />
      <Render city={cityNew} />
    </div>
  );
}

export default App;
