"use client";

import { useState } from "react";

const App = () => {
  let [state, setState] = useState("");
  let [arr, setArr] = useState(["ayron", "kohi", "niami"]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleClick = () => {
    setArr([...arr, state]);
  };

  return (
    <div className=" mt-5 m-auto w-1/3">
      <input
        type="text"
        className="border border-black"
        onChange={handleChange}
      />
      <button className=" bg-blue-500" onClick={handleClick}>
        Add
      </button>
      <ul>
        {arr.map((value, index) => (
          <li key={index}> {value} </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
