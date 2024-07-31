import React from "react";
import To_do from "./To_do";
import Inprogress from "./Inprogress";
import Under_review from "./Under_review";
import Finished from "./Finished";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskBoard: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4 overflow-x-auto">
      <DndProvider backend={HTML5Backend}>
        <To_do />
        <Inprogress />
        <Under_review />
        <Finished />
      </DndProvider>
    </div>
  );
};

export default TaskBoard;
