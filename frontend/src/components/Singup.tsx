import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "../Schema";
import { SignupTypes } from "../types";
import { useSinguphook } from "../hooks";
const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupTypes>({
    resolver: zodResolver(SignupSchema),
  });
  const { loading, usesingupuser } = useSinguphook();

  const onSubmit = async (data: SignupTypes) => {
    try {
      let res = await usesingupuser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="Name">Name</label>
        <input {...register("Name")} placeholder="Name" id="Name" />
        {errors.Name && <span>{errors.Name.message}</span>}
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input {...register("Email")} placeholder="Email" id="Email" />
        {errors.Email && <span>{errors.Email.message}</span>}
      </div>
      <div>
        <label htmlFor="Password">Password </label>
        <input
          {...register("Password")}
          type="password"
          placeholder="Password"
          id="Password"
        />
        {errors.Password && <span>{errors.Password.message}</span>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
