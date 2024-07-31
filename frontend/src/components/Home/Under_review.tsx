import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onseethefromwithname, ontoogole } from "../../store/Slices/CreateTask";
import { RootState } from "../../store";
import { useGetUnderprogress } from "../../hooks";
import TaskCard from "./TaskCard";
import { Tasktodotypes } from "../../types";

const Under_review: React.FC = () => {
  const dispacth = useDispatch();
  const { GetUnderProgress } = useGetUnderprogress();
  const underreviews = useSelector(
    (state: RootState) => state.Task.UnderReviews
  );
  console.log(underreviews);
  const Onclickthebuuton = () => {
    dispacth(onseethefromwithname("Under-Review"));
    dispacth(ontoogole());
  };

  useEffect(() => {
    GetUnderProgress();
  }, []);

  return (
    <div className="w-64 bg-gray-100 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Under Review</h2>
      <div className="space-y-4">
        {underreviews.length > 0 ? (
          underreviews.map((task: Tasktodotypes) => (
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

export default Under_review;
