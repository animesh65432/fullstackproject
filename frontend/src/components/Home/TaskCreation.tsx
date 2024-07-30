import React from "react";
import { createPortal } from "react-dom";
import { X, Star, Share } from "lucide-react";
import { useDispatch } from "react-redux";
import { ontoogole } from "../../store/Slices/CreateTask";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreationTododSchmea } from "../../Schema";
import { Tasktodotypes } from "../../types";

const TaskCreation: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Tasktodotypes>({
    resolver: zodResolver(CreationTododSchmea),
  });

  const onSubmit = (data: Tasktodotypes) => {
    const formattedData = {
      ...data,
      Deadline: new Date(data.Deadline),
    };
    // Handle form submission with formattedData
    console.log(formattedData);
    dispatch(ontoogole());
  };

  return createPortal(
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <section
          className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
          aria-labelledby="slide-over-heading"
        >
          <div className="w-screen max-w-md transform transition ease-in-out duration-300">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <button
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => dispatch(ontoogole())}
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                  <div className="flex space-x-4">
                    <Share className="text-gray-400 cursor-pointer" size={20} />
                    <Star className="text-gray-400 cursor-pointer" size={20} />
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="flex items-center">
                    <label className="w-24 text-gray-500" htmlFor="title">
                      Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      {...register("title")}
                      className="ml-2 border border-gray-300 p-2 rounded"
                    />
                    {errors.title && (
                      <p className="text-red-500">{errors.title.message}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <label className="w-24 text-gray-500" htmlFor="status">
                      Status
                    </label>
                    <select
                      id="status"
                      {...register("Status")}
                      className="ml-2 border border-gray-300 p-2 rounded"
                    >
                      <option value="">Select Status</option>
                      <option value="To-do">To-do</option>
                      <option value="In-Progress">In-Progress</option>
                      <option value="Finished">Finished</option>
                      <option value="Under-Review">Under-Review</option>
                    </select>
                    {errors.Status && (
                      <p className="text-red-500">{errors.Status.message}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <label className="w-24 text-gray-500" htmlFor="priority">
                      Priority
                    </label>
                    <input
                      id="priority"
                      type="text"
                      {...register("Priority")}
                      className="ml-2 border border-gray-300 p-2 rounded"
                    />
                    {errors.Priority && (
                      <p className="text-red-500">{errors.Priority.message}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <label className="w-24 text-gray-500" htmlFor="deadline">
                      Deadline
                    </label>
                    <input
                      id="deadline"
                      type="date"
                      {...register("Deadline")}
                      className="ml-2 border border-gray-300 p-2 rounded"
                    />
                    {errors.Deadline && (
                      <p className="text-red-500">{errors.Deadline.message}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <label className="w-24 text-gray-500" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      id="description"
                      {...register("Description")}
                      className="ml-2 border border-gray-300 p-2 rounded"
                    />
                    {errors.Description && (
                      <p className="text-red-500">
                        {errors.Description.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>,
    document.getElementById("overlays") as HTMLElement
  );
};

export default TaskCreation;
