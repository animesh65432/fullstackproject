import React, { useState } from "react";
import { useDrag } from "react-dnd";
import {
  useDeleteFinishedTask,
  useDeleteTodoTask,
  useDeleteInprogressTask,
  useDeleteUnderReviewtask,
} from "../../hooks";
import toast, { Toaster } from "react-hot-toast";
import TaskUpdate from "./TaskUpdate";

type Tasktodotypes = {
  _id: string;
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
};

type Props = {
  task: Tasktodotypes;
  submitthefrom: (task: Tasktodotypes) => void;
};

const TaskCard: React.FC<Props> = ({ task, submitthefrom }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK_CARD",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [update, setUpdate] = useState<boolean>(false);
  const { deleteFinishtask } = useDeleteFinishedTask();
  const { deleteinprogresstak } = useDeleteInprogressTask();
  const { deletetodotask } = useDeleteTodoTask();
  const { deleteunderreviewtask } = useDeleteUnderReviewtask();

  const priorityClass = "bg-gray-100 text-gray-800";

  const toggleUpdate = () => {
    setUpdate((prev) => !prev);
  };

  const deleteTask = async (task: Tasktodotypes) => {
    let res;
    if (task.Status === "To-do") {
      res = await deletetodotask(task);
    } else if (task.Status === "In-Progress") {
      res = await deleteinprogresstak(task);
    } else if (task.Status === "Finished") {
      res = await deleteFinishtask(task);
    } else {
      res = await deleteunderreviewtask(task);
    }

    if (!res) {
      toast.error("Please try again later");
    } else {
      toast.success("Task deleted successfully");
    }
  };

  return (
    <>
      <div
        ref={drag as unknown as React.RefObject<HTMLDivElement>}
        className={`bg-white rounded-md shadow-sm p-4 ${
          isDragging ? "border-2 border-slate-950" : ""
        } ${priorityClass}`}
      >
        <h3 className="font-semibold mb-2 text-lg">{task.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{task.Description}</p>
        <div className="flex justify-between items-center">
          <span className={`text-xs px-2 py-1 rounded-full ${priorityClass}`}>
            {task.Priority}
          </span>
          <span className="text-xs text-gray-500">{task.Deadline}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => deleteTask(task)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              aria-label="Delete task"
            >
              Delete
            </button>
            <button
              onClick={toggleUpdate}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              aria-label="Edit task"
            >
              Edit
            </button>
          </div>
          {update && <TaskUpdate task={task} />}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default TaskCard;
