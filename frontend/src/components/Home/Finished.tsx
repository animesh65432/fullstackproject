import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";
import { RootState } from "../../store";
import { useGetFinishedTask } from "../../hooks";
import { Tasktodotypes } from "../../types";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";
import {
  useDeleteInprogressTask,
  useDeleteTodoTask,
  useDeleteUnderReviewtask,
  useCreateFinishedTask,
} from "../../hooks";
import { toast, Toaster } from "react-hot-toast";
const Finished: React.FC = () => {
  const dispacth = useDispatch();
  const { GetTheFinishedTask } = useGetFinishedTask();
  const { deleteinprogresstak } = useDeleteInprogressTask();
  const { deletetodotask } = useDeleteTodoTask();
  const { deleteunderreviewtask } = useDeleteUnderReviewtask();
  const { createfinishedtask } = useCreateFinishedTask();
  const Finished = useSelector((state: RootState) => state.Task.Finshed);
  const Onclickthebuuton = () => {
    dispacth(onseethefromwithname("Finished"));
    dispacth(ontoogole());
  };

  useEffect(() => {
    GetTheFinishedTask();
  }, []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK_CARD",
    drop: (item: Tasktodotypes) => submitthefrom(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const dropRef = (node: HTMLDivElement | null) => {
    if (node) {
      drop(node as any);
    }
  };

  const submitthefrom = async (task: Tasktodotypes) => {
    console.log(task);
    try {
      let res;
      if (task.Status === "In-Progress") {
        res = await deleteinprogresstak(task);
      } else if (task.Status === "To-do") {
        res = await deletetodotask(task);
      } else {
        res = await deleteunderreviewtask(task);
      }
      if (res) {
        let data = { ...task, Status: "Finished" };
        let result = await createfinishedtask(data);
        console.log(result);
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
    <div ref={dropRef}>
      <div className="w-64 bg-gray-100 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Finished</h2>
        <div className="space-y-4">
          {Finished.length > 0 ? (
            Finished.map((task: Tasktodotypes) => (
              <TaskCard
                task={task}
                key={task._id}
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

export default Finished;
