"use client";

import { FaTrashCan, FaPencil } from "react-icons/fa6";

const App = () => {
  return (
    <div className="w-1/3 m-auto mt-10">
      <div className="flex justify-between">
        <input type="text" className="border border-black" />
        {/* <div>
          <button className="bg-blue-500 mr-2 text-white px-2 rounded">
            Update
          </button>
          <button className="bg-red-500 text-white px-2 rounded">Cancel</button>
        </div> */}
        <button className="bg-blue-500 text-white px-2 rounded">Add</button>
      </div>
      <ul className="mt-5">
        <li className="border flex justify-between border-black mb-3 p-2 shadow-gray-600 shadow-md capitalize">
          Arun
          <div className="flex">
            <button>
              <FaPencil className="mr-3 text-blue-500" />
            </button>
            <button>
              <FaTrashCan className=" text-red-500" />
            </button>
          </div>
        </li>
        <li className="border flex justify-between border-black mb-3 p-2 shadow-gray-600 shadow-md capitalize">
          Ayron
          <div className="flex">
            <button>
              <FaPencil className="mr-3 text-blue-500" />
            </button>
            <button>
              <FaTrashCan className=" text-red-500" />
            </button>
          </div>
        </li>
        <li className="border flex justify-between border-black mb-3 p-2 shadow-gray-600 shadow-md capitalize">
          Niami
          <div className="flex">
            <button>
              <FaPencil className="mr-3 text-blue-500" />
            </button>
            <button>
              <FaTrashCan className=" text-red-500" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;
