import { z } from "zod";

const CreationTododSchmea = z.object({
  title: z.string().min(1, { message: "please write title  " }),
  Status: z.enum(["To-do", "In-Progress", "Finished", "Under-Review"], {
    message: "Please select one",
  }),
  Priority: z.string().min(1, { message: "please write priority" }),
  Deadline: z.string(),
  Description: z.string(),
});

export default CreationTododSchmea;
