import React from "react";
import { useDispatch } from "react-redux";
import { ontoogole } from "../../store/Slices/CreateTask";
import { removethetoken } from "../../store/Slices/Users";
const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 flex items-center space-x-2">
        <img
          src="https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png"
          alt="Joe Gardner"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold">Joe Gardner</span>
      </div>
      <button
        className="w-20 mt-4 bg-slate-800  text-white py-2 px-4 rounded-md hover:bg-slate-400 ml-40"
        onClick={() => dispatch(removethetoken())}
      >
        Logout
      </button>
      <nav className="mt-4">
        <ul className="space-y-2">
          {["Home", "Boards", "Settings", "Teams", "Analytics"].map((item) => (
            <li
              key={item}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        onClick={() => dispatch(ontoogole())}
      >
        Create new task
      </button>
      <div className="absolute bottom-4 left-4">
        <p className="text-sm font-semibold">Download the app</p>
        <p className="text-xs text-gray-500">Get the full experience</p>
      </div>
    </aside>
  );
};

export default Sidebar;
