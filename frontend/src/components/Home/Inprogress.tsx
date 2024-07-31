import React, { useEffect } from "react";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";
import { RootState } from "../../store";
import { useGetinprogess } from "../../hooks";
import { Tasktodotypes } from "../../types";
import { useDrop } from "react-dnd";
import {
  useCreateInprogresstask,
  useDeleteFinishedTask,
  useDeleteTodoTask,
  useDeleteUnderReviewtask,
} from "../../hooks";
import { Toaster, toast } from "react-hot-toast";

const Inprogress: React.FC = () => {
  const dispatch = useDispatch();
  const { Getintherprocess } = useGetinprogess();
  const Inprogress = useSelector((state: RootState) => state.Task.Inprogress);
  const { createInprogresstask } = useCreateInprogresstask();
  const { deleteFinishtask } = useDeleteFinishedTask();
  const { deletetodotask } = useDeleteTodoTask();
  const { deleteunderreviewtask } = useDeleteUnderReviewtask();

  const Onclickthebuuton = () => {
    dispatch(onseethefromwithname("In-Progress"));
    dispatch(ontoogole());
  };

  const submitthefrom = async (task: Tasktodotypes) => {
    try {
      let res;
      if (task.Status === "Finished") {
        res = await deleteFinishtask(task);
      } else if (task.Status === "To-do") {
        res = await deletetodotask(task);
      } else {
        res = await deleteunderreviewtask(task);
      }
      if (res) {
        let data = { ...task, Status: "In-Progress" };
        let result = await createInprogresstask(data);
        if (!result) {
          toast.error("Please try again later");
        }
      } else {
        toast.error("Please try again later");
      }
    } catch (error) {
      toast.error("Please try again later");
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK_CARD",
    drop: (item: Tasktodotypes) => submitthefrom(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  useEffect(() => {
    Getintherprocess();
  }, []);

  return (
    <div ref={drop}>
      <div className="w-64 bg-gray-100 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">InProGress</h2>
        <div className="space-y-4">
          {Inprogress.length > 0 ? (
            Inprogress.map((task: Tasktodotypes) => (
              <TaskCard
                key={task._id}
                task={task}
                submitthefrom={submitthefrom}
              />
            ))
          ) : (
            <p>No tasks available</p>
          )}
        </div>
        <button
          className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300"
          onClick={Onclickthebuuton}
        >
          Add new
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Inprogress;
