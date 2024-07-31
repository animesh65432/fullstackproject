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
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Status:
          <input type="text" value={status} />
        </label>
        <br />
        <label>
          Priority:
          <input
            type="text"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </label>
        <br />
        <label>
          Deadline:
          <input
            type="text"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update Task</button>
      </form>
      <Toaster />
    </div>
  );
};

export default TaskUpdate;
