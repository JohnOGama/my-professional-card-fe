'use client'
import { useFormContext, useFieldArray } from "react-hook-form";
import { Field, FieldContent, FieldLabel, FieldError } from "@/components/ui/field";
import StepWrapper from "./StepWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateSchemaT } from "../schema/create.schema";
import { X } from "lucide-react";

export default function ProjectsStep() {
  const { register, control, formState: { errors } } = useFormContext<CreateSchemaT>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const handleAdd = () => {
    append({
      title: "",
      description: "",
      link: "",
    });
  };

  return (
    <StepWrapper>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 border rounded-lg relative">
          {fields.length > 1 && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => remove(index)}
            >
              <X className="size-4" />
            </Button>
          )}
          <div className="space-y-4">
            <Field>
              <FieldLabel htmlFor={`projects.${index}.title`}>Project Title</FieldLabel>
              <FieldContent>
                <Input
                  id={`projects.${index}.title`}
                  type="text"
                  placeholder="Enter your project title"
                  aria-invalid={!!errors.projects?.[index]?.title}
                  {...register(`projects.${index}.title`)}
                />
              </FieldContent>
              {errors.projects?.[index]?.title && (
                <FieldError>{errors.projects[index]?.title?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`projects.${index}.description`}>Description</FieldLabel>
              <FieldContent>
                <Textarea
                  id={`projects.${index}.description`}
                  className="w-full h-32"
                  rows={4}
                  placeholder="Enter your project description"
                  aria-invalid={!!errors.projects?.[index]?.description}
                  {...register(`projects.${index}.description`)}
                />
              </FieldContent>
              {errors.projects?.[index]?.description && (
                <FieldError>{errors.projects[index]?.description?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`projects.${index}.link`}>Project Link</FieldLabel>
              <FieldContent>
                <Input
                  id={`projects.${index}.link`}
                  type="text"
                  placeholder="Enter your project link"
                  aria-invalid={!!errors.projects?.[index]?.link}
                  {...register(`projects.${index}.link`)}
                />
              </FieldContent>
              {errors.projects?.[index]?.link && (
                <FieldError>{errors.projects[index]?.link?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`projects.${index}.startDate`}>Start Date (optional)</FieldLabel>
              <FieldContent>
                <Input
                  id={`projects.${index}.startDate`}
                  type="date"
                  aria-invalid={!!errors.projects?.[index]?.startDate}
                  {...register(`projects.${index}.startDate`)}
                />
              </FieldContent>
              {errors.projects?.[index]?.startDate && (
                <FieldError>{errors.projects[index]?.startDate?.message}</FieldError>
              )}
            </Field>
          </div>
        </div>
      ))}
      <Button type="button" onClick={handleAdd}>
        Add Project
      </Button>
    </StepWrapper>
  );
}
