import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TaskBoard from "./TaskBoard";
import TaskCreation from "./TaskCreation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Main: React.FC = () => {
  const CreateTaskButtomvaule = useSelector(
    (state: RootState) => state.CreateTask.CreateTask
  );
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <Header />
        <DndProvider backend={HTML5Backend}>
          <TaskBoard />
        </DndProvider>
        {CreateTaskButtomvaule && <TaskCreation />}
      </main>
    </div>
  );
};

export default Main;
