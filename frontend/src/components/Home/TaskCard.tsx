import React from "react";

type props = {
  task: {
    title: string;
    description: string;
    priority: string;
    date: string;
  };
};

const TaskCard: React.FC<props> = ({ task }) => {
  const priorityColors = {
    Urgent: "bg-red-100 text-red-800",
    High: "bg-orange-100 text-orange-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-green-100 text-green-800",
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-4">
      <h3 className="font-semibold mb-2">{task.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{task.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs px-2 py-1 rounded-full">{task.priority}</span>
        <span className="text-xs text-gray-500">{task.date}</span>
      </div>
    </div>
  );
};

export default TaskCard;
