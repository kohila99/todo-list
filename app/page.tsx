"use client";

import { useState } from "react";

const App = () => {
  const [state, setState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const handleClick = () => {
    alert(state);
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
        <li>Ayron</li>
        <li>Niami</li>
        <li>Kohi</li>
      </ul>
    </div>
  );
};

export default App;
