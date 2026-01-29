import z from "zod";

export const ProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(40, "First name must be at most 40 characters"),
  lastName: z.string().min(1, "Last name is required").max(40, "Last name must be at most 40 characters"),
  jobTitle: z.string().min(1, "Job title is required").max(100, "Job title must be at most 100 characters"),
  contactNumber: z.string().min(1, "Contact number is required").max(40, "Contact number must be at most 40 characters"),
  gender: z.enum(["male", "female"]).optional(),
  city: z.string().min(1, "City is required").max(100, "City must be at most 100 characters"),
  country: z.string().min(1, "Country is required").max(100, "Country must be at most 100 characters"),
  aboutMe: z.string().min(1, "About me is required").max(2000, "About me must be at most 2000 characters"),
});

export type ProfileSchemaT = z.infer<typeof ProfileSchema>;
