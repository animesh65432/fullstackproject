import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";
import { RootState } from "../../store";
import { useGetFinishedTask } from "../../hooks";
import { Tasktodotypes } from "../../types";
import TaskCard from "./TaskCard";
const Finished: React.FC = () => {
  const dispacth = useDispatch();
  const { GetTheFinishedTask } = useGetFinishedTask();
  const Finished = useSelector((state: RootState) => state.Task.Finshed);
  const Onclickthebuuton = () => {
    dispacth(onseethefromwithname("Finished"));
    dispacth(ontoogole());
  };

  useEffect(() => {
    GetTheFinishedTask();
  }, []);

  return (
    <div className="w-64 bg-gray-100 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Finished</h2>
      <div className="space-y-4">
        {Finished.length > 0 ? (
          Finished.map((task: Tasktodotypes) => (
            <TaskCard task={task} key={task._id} />
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

export default Finished;
