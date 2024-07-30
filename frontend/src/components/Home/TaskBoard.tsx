import React from "react";
import To_do from "./To_do";
import Inprogress from "./Inprogress";
import Under_review from "./Under_review";
import Finished from "./Finished";

const TaskBoard: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4 overflow-x-auto">
      <To_do />
      <Inprogress />
      <Under_review />
      <Finished />
    </div>
  );
};

export default TaskBoard;
