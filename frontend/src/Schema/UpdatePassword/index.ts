import { z } from "zod";

const PasswordSchema = z.object({
  Password: z
    .string()
    .min(6, { message: "it should be greater than 6" })
    .max(256, { message: "it should be lesser than 20" }),
});

export default PasswordSchema;
