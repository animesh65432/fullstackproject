import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "../Schema";
import { SignupTypes } from "../types";
import { useSinguphook } from "../hooks";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupTypes>({
    resolver: zodResolver(SignupSchema),
  });
  const { loading, usesingupuser, errormessage } = useSinguphook();
  const router = useRouter();

  const onSubmit = async (data: SignupTypes) => {
    try {
      let res = await usesingupuser(data);
      if (!res) {
        toast.error(errormessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigatetosignin = () => {
    router.push("/authentication/Singin");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-300 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h4 className="text-2xl font-semibold mb-6 text-center">
          Create an account
        </h4>
        <div className="mb-4">
          <label
            htmlFor="Name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            {...register("Name")}
            placeholder="Name"
            id="Name"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Name && (
            <span className="text-red-500 text-sm">{errors.Name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="Email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            {...register("Email")}
            placeholder="Email"
            id="Email"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.Email && (
            <span className="text-red-500 text-sm">{errors.Email.message}</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="Password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            {...register("Password")}
            type="password"
            placeholder="Password"
            id="Password"
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
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <p className="m-3">
          Have an account ?{" "}
          <span className="text-blue-600 " onClick={navigatetosignin}>
            log in
          </span>
        </p>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Signup;
