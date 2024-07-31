import React from "react";
import { useDrag } from "react-dnd";
import { Tasktodotypes } from "../../types";

interface TaskCardProps {
  task: Tasktodotypes;
  columnType: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, columnType }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task._id, currentColumn: columnType },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="bg-white rounded-md shadow-sm p-4 cursor-move"
    >
      <h3 className="font-semibold mb-2">{task.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{task.Description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs px-2 py-1 rounded-full bg-gray-200">
          {task.Priority}
        </span>
        <span className="text-xs text-gray-500">{task.Deadline}</span>
      </div>
    </div>
  );
};

export default TaskCard;
