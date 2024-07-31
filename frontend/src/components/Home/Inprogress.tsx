import React, { useEffect } from "react";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";
import { RootState } from "../../store";
import { useGetinprogess } from "../../hooks";
import { Tasktodotypes } from "../../types";
const Inprogress: React.FC = () => {
  const dispatch = useDispatch();
  const { Getintherprocess } = useGetinprogess();
  const Inprogress = useSelector((state: RootState) => state.Task.Inprogress);
  const Onclickthebuuton = () => {
    dispatch(onseethefromwithname("In-Progress"));
    dispatch(ontoogole());
  };

  useEffect(() => {
    Getintherprocess();
  }, []);

  return (
    <div className="w-64 bg-gray-100 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">InProGress</h2>
      <div className="space-y-4">
        {Inprogress.length > 0 ? (
          Inprogress.map((task: Tasktodotypes) => (
            <TaskCard key={task._id} task={task} />
          ))
        ) : (
          <></>
        )}
      </div>
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
