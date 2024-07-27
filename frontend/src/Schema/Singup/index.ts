import { z } from "zod";

const SignupSchema = z.object({
  Name: z
    .string({ message: "Please Give your Name" })
    .min(8, { message: "it should be greater 8" })
    .max(30, { message: "it would lesser than 30" }),
  Email: z.string().email({ message: "Please Give Your Email" }),
  Password: z
    .string()
    .min(6, { message: "it should be greater than 6" })
    .max(20, { message: "it should be lesser than 20" }),
});

export default SignupSchema;
