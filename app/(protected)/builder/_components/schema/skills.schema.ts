import z from "zod";

export const SkillsSchema = z.object({
  name: z.string().min(1, "Skill name is required").max(100, "Skill name must be at most 100 characters"),
});

export type SkillsSchemaT = z.infer<typeof SkillsSchema>;
