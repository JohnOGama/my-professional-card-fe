"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Field, FieldContent, FieldLabel, FieldError } from "@/components/ui/field";
import StepWrapper from "./StepWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateSchemaT } from "../schema/create.schema";
import { X } from "lucide-react";

export default function EducationStep() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<CreateSchemaT>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const handleAdd = () => {
    append({
      fieldOfStudy: "",
      school: "",
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
              <FieldLabel htmlFor={`educations.${index}.fieldOfStudy`}>Field Of Study</FieldLabel>
              <FieldContent>
                <Input
                  id={`educations.${index}.fieldOfStudy`}
                  type="text"
                  placeholder="Enter your degree"
                  aria-invalid={!!errors.educations?.[index]?.fieldOfStudy}
                  {...register(`educations.${index}.fieldOfStudy`)}
                />
              </FieldContent>
              {errors.educations?.[index]?.fieldOfStudy && (
                <FieldError>{errors.educations[index]?.fieldOfStudy?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`educations.${index}.school`}>School</FieldLabel>
              <FieldContent>
                <Input
                  id={`educations.${index}.school`}
                  type="text"
                  placeholder="Enter your school"
                  aria-invalid={!!errors.educations?.[index]?.school}
                  {...register(`educations.${index}.school`)}
                />
              </FieldContent>
              {errors.educations?.[index]?.school && (
                <FieldError>{errors.educations[index]?.school?.message}</FieldError>
              )}
            </Field>
            <div className="flex gap-2">
              <Field>
                <FieldLabel htmlFor={`educations.${index}.startDate`}>Start Date</FieldLabel>
                <FieldContent>
                  <Input
                    id={`educations.${index}.startDate`}
                    type="date"
                    aria-invalid={!!errors.educations?.[index]?.startDate}
                    {...register(`educations.${index}.startDate`)}
                  />
                </FieldContent>
                {errors.educations?.[index]?.startDate && (
                  <FieldError>{errors.educations[index]?.startDate?.message}</FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor={`educations.${index}.endDate`}>End Date (optional)</FieldLabel>
                <FieldContent>
                  <Input
                    id={`educations.${index}.endDate`}
                    type="date"
                    aria-invalid={!!errors.educations?.[index]?.endDate}
                    {...register(`educations.${index}.endDate`)}
                  />
                </FieldContent>
                {errors.educations?.[index]?.endDate && (
                  <FieldError>{errors.educations[index]?.endDate?.message}</FieldError>
                )}
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor={`educations.${index}.description`}>Description</FieldLabel>
              <FieldContent>
                <Textarea
                  id={`educations.${index}.description`}
                  className="w-full h-32"
                  rows={4}
                  placeholder="Enter your description"
                  maxLength={2000}
                  aria-invalid={!!errors.educations?.[index]?.description}
                  {...register(`educations.${index}.description`)}
                />
              </FieldContent>
              {errors.educations?.[index]?.description && (
                <FieldError>{errors.educations[index]?.description?.message}</FieldError>
              )}
            </Field>
          </div>
        </div>
      ))}
      <Button type="button" onClick={handleAdd}>
        Add Education
      </Button>
    </StepWrapper>
  );
}
