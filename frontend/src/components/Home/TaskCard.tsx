import React from "react";
import { useDrag } from "react-dnd";
import {
  useDeleteFinishedTask,
  useDeleteTodoTask,
  useDeleteInprogressTask,
  useDeleteUnderReviewtask,
} from "../../hooks";
import toast, { Toaster } from "react-hot-toast";

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
  const { deleteFinishtask } = useDeleteFinishedTask();
  const { deleteinprogresstak } = useDeleteInprogressTask();
  const { deletetodotask } = useDeleteTodoTask();
  const { deleteunderreviewtask } = useDeleteUnderReviewtask();

  const priorityClass = "bg-gray-100 text-gray-800";
  const deletethetask = async (task: Tasktodotypes) => {
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
    }
  };

  return (
    <div
      ref={drag}
      className={`bg-white rounded-md shadow-sm p-4 ${
        isDragging ? "border-2 border-slate-950" : ""
      } ${priorityClass}`}
    >
      <h3 className="font-semibold mb-2">{task.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{task.Description}</p>
      <div className="flex justify-between items-center">
        <span className={`text-xs px-2 py-1 rounded-full ${priorityClass}`}>
          {task.Priority}
        </span>
        <span className="text-xs text-gray-500">{task.Deadline}</span>
      </div>
      <button onClick={() => deletethetask(task)}>delete</button>

      <Toaster />
    </div>
  );
};

export default TaskCard;
