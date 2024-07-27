import React from "react";
import { useForm } from "react-hook-form";
import { ResetPasswordSchema } from "../Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordtypes } from "../types";
import useSentThemessage from "@/hooks/useSentThemessage";
import toast, { Toaster } from "react-hot-toast";
const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordtypes>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const { loading, sentthemessage, errormessage } = useSentThemessage();
  const onSubmit = async (data: ResetPasswordtypes) => {
    try {
      let res = await sentthemessage(data);
      if (res) {
        toast.success("Sucessfully sent the messages");
      } else {
        toast.error(errormessage);
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
            {...register("Email")}
            placeholder="Your Email"
            type="email"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Email && (
            <span className="text-red-500 text-sm">{errors.Email.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          {loading ? "loading" : "Submit"}
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ResetPassword;
