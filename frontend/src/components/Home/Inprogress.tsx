import React from "react";
import TaskCard from "./TaskCard";
import { useDispatch } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";

const Inprogress: React.FC = () => {
  const dispatch = useDispatch();

  const Onclickthebuuton = () => {
    dispatch(onseethefromwithname("In-Progress"));
    dispatch(ontoogole());
  };
  return (
    <div className="w-64 bg-gray-100 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">InProGress</h2>
      <div className="space-y-4"></div>
      <button
        className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
        onClick={Onclickthebuuton}
      >
        Add new
      </button>
    </div>
  );
};

export default Inprogress;
