'use client'
import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { Field, FieldContent, FieldLabel, FieldError } from "@/components/ui/field";
import StepWrapper from "./StepWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateSchemaT } from "../schema/create.schema";
import { X } from "lucide-react";

export default function WorkExperienceStep() {
  const { register, control, formState: { errors } } = useFormContext<CreateSchemaT>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workExperiences",
  });

  const handleAdd = () => {
    append({
      jobTitle: "",
      companyName: "",
      startDate: "",
      description: "",
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
              <FieldLabel htmlFor={`workExperiences.${index}.jobTitle`}>Job Title</FieldLabel>
              <FieldContent>
                <Input
                  id={`workExperiences.${index}.jobTitle`}
                  type="text"
                  placeholder="Enter job title"
                  aria-invalid={!!errors.workExperiences?.[index]?.jobTitle}
                  {...register(`workExperiences.${index}.jobTitle`)}
                />
              </FieldContent>
              {errors.workExperiences?.[index]?.jobTitle && (
                <FieldError>{errors.workExperiences[index]?.jobTitle?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`workExperiences.${index}.companyName`}>Company Name</FieldLabel>
              <FieldContent>
                <Input
                  id={`workExperiences.${index}.companyName`}
                  type="text"
                  placeholder="Enter company name"
                  aria-invalid={!!errors.workExperiences?.[index]?.companyName}
                  {...register(`workExperiences.${index}.companyName`)}
                />
              </FieldContent>
              {errors.workExperiences?.[index]?.companyName && (
                <FieldError>{errors.workExperiences[index]?.companyName?.message}</FieldError>
              )}
            </Field>
            <div className="flex gap-2">
              <Field>
                <FieldLabel htmlFor={`workExperiences.${index}.startDate`}>Start Date</FieldLabel>
                <FieldContent>
                  <Input
                    id={`workExperiences.${index}.startDate`}
                    type="date"
                    aria-invalid={!!errors.workExperiences?.[index]?.startDate}
                    {...register(`workExperiences.${index}.startDate`)}
                  />
                </FieldContent>
                {errors.workExperiences?.[index]?.startDate && (
                  <FieldError>{errors.workExperiences[index]?.startDate?.message}</FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor={`workExperiences.${index}.endDate`}>End Date (optional)</FieldLabel>
                <FieldContent>
                  <Input
                    id={`workExperiences.${index}.endDate`}
                    type="date"
                    aria-invalid={!!errors.workExperiences?.[index]?.endDate}
                    {...register(`workExperiences.${index}.endDate`)}
                  />
                </FieldContent>
                {errors.workExperiences?.[index]?.endDate && (
                  <FieldError>{errors.workExperiences[index]?.endDate?.message}</FieldError>
                )}
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor={`workExperiences.${index}.description`}>Description</FieldLabel>
              <FieldContent>
                <Textarea
                  id={`workExperiences.${index}.description`}
                  placeholder="Describe your work experience"
                  className="w-full h-32"
                  rows={4}
                  maxLength={2000}
                  aria-invalid={!!errors.workExperiences?.[index]?.description}
                  {...register(`workExperiences.${index}.description`)}
                />
              </FieldContent>
              {errors.workExperiences?.[index]?.description && (
                <FieldError>{errors.workExperiences[index]?.description?.message}</FieldError>
              )}
            </Field>
          </div>
        </div>
      ))}
      <Button type="button" onClick={handleAdd}>
        Add Work Experience
      </Button>
    </StepWrapper>
  );
}
