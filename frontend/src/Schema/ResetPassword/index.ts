import { z } from "zod";

const ResetPasswordSchema = z.object({
  Email: z.string().email({ message: "Please Give your Email" }),
});

export default ResetPasswordSchema;
