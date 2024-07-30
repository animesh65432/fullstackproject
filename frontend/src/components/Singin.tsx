import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SinginSchema } from "../Schema";
import { SignInTypes } from "../types";
import { useSinginhook } from "../hooks";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInTypes>({
    resolver: zodResolver(SinginSchema),
  });
  const { errormessage, loading, usesinginuser } = useSinginhook();
  const router = useRouter();

  const onSubmit = async (data: SignInTypes) => {
    try {
      let result = await usesinginuser(data);
      if (result) {
        router.push("/");
      } else {
        toast.error(errormessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onnavigatesingup = () => {
    router.push("/authentication/Singup");
  };

  const onnavigatetoresetpassword = () => {
    router.push("/authentication/Reset");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-300 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h4 className="text-2xl font-semibold mb-6 text-center">
          Welcome to <span className="text-blue-700">Workflo!</span>
        </h4>
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
        <div className="mb-6">
          <input
            {...register("Password")}
            type="password"
            placeholder="Password"
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
          className="w-full py-3 bg-blue-700 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <p className="m-3 text-center">
          Don't have an account ?{" "}
          <span className="text-blue-700" onClick={onnavigatesingup}>
            Create account
          </span>
        </p>

        <p
          className="m-2 text-blue-700 text-center "
          onClick={onnavigatetoresetpassword}
        >
          Forget Password
        </p>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default SignIn;
