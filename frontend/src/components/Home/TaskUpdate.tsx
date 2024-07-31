import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  useEditFinishedTask,
  useEditTodotask,
  useEditunderprogresstask,
  useEditInprogressTask,
} from "../../hooks";

type TaskType = {
  _id: string;
  title: string;
  Status: string;
  Priority: string;
  Deadline?: string;
  Description?: string;
};

type Props = {
  task: TaskType;
};

const TaskUpdate: React.FC<Props> = ({ task }) => {
  const [title, setTitle] = useState<string>(task.title || "");
  const [status, setStatus] = useState<string>(task.Status || "");
  const [priority, setPriority] = useState<string>(task.Priority || "");
  const [deadline, setDeadline] = useState<string>(task.Deadline || "");
  const [description, setDescription] = useState<string>(
    task.Description || ""
  );

  const { editthefinishedtask } = useEditFinishedTask();
  const { edittask } = useEditTodotask();
  const { editunderprogresstask } = useEditunderprogresstask();
  const { editinprogress } = useEditInprogressTask();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask: TaskType = {
      _id: task._id,
      title,
      Status: status,
      Priority: priority,
      Deadline: deadline,
      Description: description,
    };
    let res;

    if (updatedTask.Status === "To-do") {
      res = await edittask(updatedTask);
    } else if (updatedTask.Status === "In-Progress") {
      res = await editinprogress(updatedTask);
    } else if (updatedTask.Status === "Finished") {
      res = await editthefinishedtask(updatedTask);
    } else {
      res = await editunderprogresstask(updatedTask);
    }

    if (!res) {
      toast.error("Update failed. Please try again.");
    } else {
      toast.success("Task updated successfully.");
    }
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Update Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Status:</span>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Priority:</span>
          <input
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Deadline:</span>
          <input
            type="text"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Description:</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Update Task
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default TaskUpdate;
