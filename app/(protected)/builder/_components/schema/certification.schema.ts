import z from "zod";

export const CertificationSchema = z.object({
  name: z
    .string()
    .min(1, "Certification name is required")
    .max(150, "Certification name must be at most 150 characters"),
  credentialId: z
    .union([
      z
        .string()
        .min(1, "Credential ID must be at least 1 character")
        .max(500, "Credential ID must be at most 500 characters"),
      z.literal(""),
    ])
    .optional(),
  credentialUrl: z
    .string()
    .min(1, "Credential URL is required")
    .max(500, "Credential URL must be at most 500 characters"),
  issuer: z.string().min(1, "Issuer is required").max(500, "Issuer must be at most 500 characters"),
  issueDate: z.string().min(1, "Issue date is required"),
  description: z.string().min(1, "Description is required").max(2000, "Description must be at most 2000 characters"),
});

export type CertificationSchemaT = z.infer<typeof CertificationSchema>;
