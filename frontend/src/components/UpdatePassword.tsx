import React from "react";
import { useForm } from "react-hook-form";
import { UpdatePasswordtypes } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdatePasswordSchema } from "../Schema";
import useUpdatePassword from "@/hooks/useUpdatePassword";
import toast, { Toaster } from "react-hot-toast";

type props = {
  id: string;
};

const UpdatePassword: React.FC<props> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordtypes>({
    resolver: zodResolver(UpdatePasswordSchema),
  });

  const { updatepassword, loading, errormessages } = useUpdatePassword();
  const onSubmit = async (data: UpdatePasswordtypes) => {
    try {
      let result = await updatepassword({ ...data, id });

      if (result) {
        toast.success("Update Password Changed");
      } else {
        toast.error(errormessages);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-300 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="mb-4">
          <input
            {...register("Password")}
            placeholder="Your Password"
            type="text"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Password && (
            <span className="text-red-500 text-sm">
              {errors.Password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          {loading ? "loading" : "Update password"}
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default UpdatePassword;
