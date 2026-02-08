import z from "zod";

export const EducationSchema = z.object({
  fieldOfStudy: z
    .string()
    .min(1, "Field of study is required")
    .max(300, "Field of study must be at most 300 characters"),
  school: z.string().min(1, "School is required").max(300, "School must be at most 300 characters"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  description: z.string().min(1, "Description is required").max(2000, "Description must be at most 2000 characters"),
});

export type EducationSchemaT = z.infer<typeof EducationSchema>;
