import React from "react";
import { useDispatch } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";

const Finished: React.FC = () => {
  const dispacth = useDispatch();
  const Onclickthebuuton = () => {
    dispacth(onseethefromwithname("Finished"));
    dispacth(ontoogole());
  };
  return (
    <div className="w-64 bg-gray-100 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Finished</h2>
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

export default Finished;
