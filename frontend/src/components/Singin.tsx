import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SinginSchema } from "../Schema";
import { SignInTypes } from "../types";
import { useSinginhook } from "../hooks";
const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInTypes>({
    resolver: zodResolver(SinginSchema),
  });

  const { errormessage, loading, usesinginuser } = useSinginhook();

  const onSubmit = async (data: SignInTypes) => {
    try {
      let result = await usesinginuser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("Email")} placeholder="Email" />
        {errors.Email && <span>{errors.Email.message}</span>}
      </div>
      <div>
        <input
          {...register("Password")}
          type="password"
          placeholder="Password"
        />
        {errors.Password && <span>{errors.Password.message}</span>}
      </div>
      <button type="submit">{loading ? "loading" : "Sign Up"}</button>
    </form>
  );
};

export default SignIn;
