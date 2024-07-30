import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TaskBoard from "./TaskBoard";
import TaskCreation from "./TaskCreation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Main: React.FC = () => {
  const CreateTaskButtomvaule = useSelector(
    (state: RootState) => state.CreateTask.CreateTask
  );
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <Header />
        <TaskBoard />
        {CreateTaskButtomvaule && <TaskCreation />}
      </main>
    </div>
  );
};

export default Main;
