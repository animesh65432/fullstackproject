import React from "react";
import { useDispatch } from "react-redux";
import {
  ontoogole,
  ondeletethefromwithname,
} from "../../store/Slices/CreateTask";

const Header: React.FC = () => {
  const dispacth = useDispatch();

  const onclick = () => {
    dispacth(ontoogole());
    dispacth(ondeletethefromwithname());
  };
  return (
    <header className="bg-white shadow-sm p-4">
      <h1 className="text-2xl font-bold mb-4">Good morning, Joe!</h1>
      <div className="flex items-center space-x-4">
        <input
          type="search"
          placeholder="Search"
          className="border rounded-md px-2 py-1"
        />
        <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
          Calendar view
        </button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
          Automation
        </button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
          Filter
        </button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
          Share
        </button>
        <button
          className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          onClick={onclick}
        >
          Create new
        </button>
      </div>
    </header>
  );
};

export default Header;
