import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";
import { RootState } from "../../store";
import { useGettodo } from "../../hooks";
import TaskCard from "./TaskCard";
import { Tasktodotypes } from "../../types";
import { useDrop } from "react-dnd";
import { Toaster, toast } from "react-hot-toast";
import {
  useDeleteFinishedTask,
  useDeleteInprogressTask,
  useDeleteUnderReviewtask,
  useCreatetodo,
} from "../../hooks";
const To_do: React.FC = () => {
  const dispatch = useDispatch();
  const { GetTheTodos } = useGettodo();
  const { createTodotask } = useCreatetodo();
  const { deleteFinishtask } = useDeleteFinishedTask();
  const { deleteinprogresstak } = useDeleteInprogressTask();
  const { deleteunderreviewtask } = useDeleteUnderReviewtask();

  const Todo = useSelector((state: RootState) => state.Task.Todo);
  const Onclickthebuuton = () => {
    dispatch(onseethefromwithname("To-do"));
    dispatch(ontoogole());
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK_CARD",
    drop: (item: Tasktodotypes) => submitthefrom(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  useEffect(() => {
    GetTheTodos();
  }, []);
  const submitthefrom = async (task: Tasktodotypes) => {
    try {
      let res;
      if (task.Status === "Finished") {
        res = await deleteFinishtask(task);
      } else if (task.Status === "In-Progress") {
        res = await deleteinprogresstak(task);
      } else {
        res = await deleteunderreviewtask(task);
      }
      if (res) {
        let data = { ...task, Status: "To-do" };
        let result = await createTodotask(data);
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

  return (
    <div ref={drop}>
      <div className="w-64 bg-gray-100 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">To do</h2>
        <div className="space-y-4">
          {Todo.length > 0 ? (
            Todo.map((task: Tasktodotypes) => (
              <TaskCard
                key={task._id}
                task={task}
                submitthefrom={submitthefrom}
              />
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
      <Toaster />
    </div>
  );
};

export default To_do;
