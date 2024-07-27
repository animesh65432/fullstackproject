import { z } from "zod";

const SinginSchema = z.object({
  Email: z.string().email({ message: "Please Give your Email" }),
  Password: z
    .string()
    .min(6, { message: "it should be greater than 6" })
    .max(20, { message: "it should be lesser than 20" }),
});

export default SinginSchema;
