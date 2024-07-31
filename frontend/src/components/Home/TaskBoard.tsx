import React from "react";
import To_do from "./To_do";
import Inprogress from "./Inprogress";
import Under_review from "./Under_review";
import Finished from "./Finished";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskBoard: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex space-x-4 p-4 overflow-x-auto">
        <To_do />
        <Inprogress />
        <Under_review />
        <Finished />
      </div>
    </DndProvider>
  );
};

export default TaskBoard;
