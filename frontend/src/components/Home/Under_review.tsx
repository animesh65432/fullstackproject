import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";
import { RootState } from "../../store";
import { useGetUnderprogress } from "../../hooks";
import TaskCard from "./TaskCard";
import { Tasktodotypes } from "../../types";
import { useDrop } from "react-dnd";
import { Toaster, toast } from "react-hot-toast";
import {
  useCreateunderReviewtask,
  useDeleteFinishedTask,
  useDeleteInprogressTask,
  useDeleteTodoTask,
} from "../../hooks";

const Under_review: React.FC = () => {
  const dispacth = useDispatch();
  const { GetUnderProgress } = useGetUnderprogress();
  const underreviews = useSelector(
    (state: RootState) => state.Task.UnderReviews
  );

  const { CreateUnderReviews } = useCreateunderReviewtask();
  const { deleteFinishtask } = useDeleteFinishedTask();
  const { deleteinprogresstak } = useDeleteInprogressTask();
  const { deletetodotask } = useDeleteTodoTask();
  const Onclickthebuuton = () => {
    dispacth(onseethefromwithname("Under-Review"));
    dispacth(ontoogole());
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK_CARD",
    drop: (item: Tasktodotypes) => submitthefrom(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  useEffect(() => {
    GetUnderProgress();
  }, []);
  const submitthefrom = async (task: Tasktodotypes) => {
    try {
      let res;
      if (task.Status === "Finished") {
        res = await deleteFinishtask(task);
      } else if (task.Status === "In-Progress") {
        res = await deleteinprogresstak(task);
      } else {
        res = await deletetodotask(task);
      }
      if (res) {
        let data = { ...task, Status: "Under-Review" };
        let result = await CreateUnderReviews(data);
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
        <h2 className="text-lg font-semibold mb-4">Under Review</h2>
        <div className="space-y-4">
          {underreviews.length > 0 ? (
            underreviews.map((task: Tasktodotypes) => (
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

export default Under_review;
