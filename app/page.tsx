"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState(["arun", "kohi", "ayron"]);
  const [editMode, setEditMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //event handler
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name !== "") {
      setNames([...names, name]);
      setName("");
    }
  };
  const editClick = (idx: number, itm: string) => {
    setEditMode(true);
    setSelectedIndex(idx);
    setName(itm);
  };

  const handleUpdate = () => {
    setEditMode(false);
    setSelectedIndex(null);
  };
  const handleCancel = () => {
    setEditMode(false);
    setSelectedIndex(null);
    setName("");
  };

  const removeName = (index: number) => {
    const newArr = names.filter((itm, idx) => idx !== index);
    setNames(newArr);
  };
  return (
    <div className="flex page-container">
      <div className="app-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" onChange={handleChange} value={name} />
            {editMode ? (
              <>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <button>ADD</button>
            )}
          </div>
        </form>
        <p>Value: {name}</p>
        <ul className="name-list">
          {names.map((itm, idx) => (
            <li
              key={idx}
              className={idx === selectedIndex ? "blue-border" : ""}
            >
              {itm}
              {!editMode && (
                <div>
                  <button
                    className="edit-btn info-btn"
                    onClick={() => {
                      editClick(idx, itm);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="danger-btn"
                    onClick={() => {
                      removeName(idx);
                    }}
                  >
                    &times;
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
