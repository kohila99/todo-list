import { FaTrashCan, FaPencil } from "react-icons/fa6";

const App = () => {
  return (
    <div className="w-1/3 m-auto mt-10">
      <div className="flex justify-between">
        <input type="text" className="border border-black" />
        <button className="bg-sky-500 text-white px-2 rounded">Add</button>
      </div>
      <ul className="mt-5">
        <li className="border flex justify-between border-black mb-3 p-2 shadow-gray-600 shadow-md">
          Arun
          <div className="flex">
            <FaPencil className="mr-3" />
            <FaTrashCan />
          </div>
        </li>
        <li className="border flex justify-between border-black mb-3 p-2 shadow-gray-600 shadow-md">
          Kohi
          <div className="flex">
            <FaPencil className="mr-3" />
            <FaTrashCan />
          </div>
        </li>
        <li className="border flex justify-between border-black mb-3 p-2 shadow-gray-600 shadow-md">
          Ayron
          <div className="flex">
            <FaPencil className="mr-3" />
            <FaTrashCan />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;
