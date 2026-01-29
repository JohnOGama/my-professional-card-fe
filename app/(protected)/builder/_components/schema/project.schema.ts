import z from "zod";

export const ProjectSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be at most 100 characters"),
  description: z.string().min(1, "Description is required").max(100, "Description must be at most 100 characters"),
  link: z.string().min(1, "Link is required").max(100, "Link must be at most 100 characters"),
  startDate: z.string().optional(),
});

export type ProjectSchemaT = z.infer<typeof ProjectSchema>;
