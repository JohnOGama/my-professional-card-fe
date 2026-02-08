import z from "zod";

export const userSchema = z.object({
  email: z.string(),
  password: z.string().min(1, "Password must be at least 8 characters"),
});

export type UserSchemaT = z.infer<typeof userSchema>;
