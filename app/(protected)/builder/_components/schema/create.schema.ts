import z from "zod"
import { ProfileSchema } from "./profile.schema"
import { WorkExperienceSchema } from "./work-experience.schema"
import { SkillsSchema } from "./skills.schema"
import { ProjectSchema } from "./project.schema"
import { CertificationSchema } from "./certification.schema"
import { EducationSchema } from "./education.schema"

export const create = z.object({
  profileSchema: ProfileSchema,
  workExperiences: z.array(WorkExperienceSchema),
  skills: z.array(SkillsSchema),
  projects: z.array(ProjectSchema),
  certifications: z.array(CertificationSchema),
  educations: z.array(EducationSchema),
})

export type CreateSchemaT = z.infer<typeof create>
