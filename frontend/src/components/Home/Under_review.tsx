import React from "react";

const Under_review: React.FC = () => {
  return (
    <div className="w-64 bg-gray-100 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Under Review</h2>
      <div className="space-y-4"></div>
      <button className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">
        Add new
      </button>
    </div>
  );
};

export default Under_review;
