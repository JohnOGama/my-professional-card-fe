import z from "zod";

export const WorkExperienceSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required").max(100, "Job title must be at most 100 characters"),
  companyName: z.string().min(1, "Company name is required").max(200, "Company name must be at most 200 characters"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  description: z.string().min(1, "Description is required").max(2000, "Description must be at most 2000 characters"),
});

export type WorkExperienceSchemaT = z.infer<typeof WorkExperienceSchema>;
