'use client'
import { useFormContext, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import StepWrapper from "./StepWrapper";
import { Field, FieldContent, FieldLabel, FieldError } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateSchemaT } from "../schema/create.schema";
import { X } from "lucide-react";

export default function CertificationStep() {
  const { register, control, formState: { errors } } = useFormContext<CreateSchemaT>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "certifications",
  });

  const handleAdd = () => {
    append({
      name: "",
      credentialUrl: "",
      issuer: "",
      issueDate: "",
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
              <FieldLabel htmlFor={`certifications.${index}.name`}>Certification Name</FieldLabel>
              <FieldContent>
                <Input
                  id={`certifications.${index}.name`}
                  type="text"
                  placeholder="Enter your certification name"
                  aria-invalid={!!errors.certifications?.[index]?.name}
                  {...register(`certifications.${index}.name`)}
                />
              </FieldContent>
              {errors.certifications?.[index]?.name && (
                <FieldError>{errors.certifications[index]?.name?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`certifications.${index}.credentialId`}>Credential ID (optional)</FieldLabel>
              <FieldContent>
                <Input
                  id={`certifications.${index}.credentialId`}
                  type="text"
                  placeholder="Enter credential ID"
                  aria-invalid={!!errors.certifications?.[index]?.credentialId}
                  {...register(`certifications.${index}.credentialId`)}
                />
              </FieldContent>
              {errors.certifications?.[index]?.credentialId && (
                <FieldError>{errors.certifications[index]?.credentialId?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`certifications.${index}.credentialUrl`}>Credential URL</FieldLabel>
              <FieldContent>
                <Input
                  id={`certifications.${index}.credentialUrl`}
                  type="text"
                  placeholder="Enter credential URL"
                  aria-invalid={!!errors.certifications?.[index]?.credentialUrl}
                  {...register(`certifications.${index}.credentialUrl`)}
                />
              </FieldContent>
              {errors.certifications?.[index]?.credentialUrl && (
                <FieldError>{errors.certifications[index]?.credentialUrl?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`certifications.${index}.issuer`}>Issuer</FieldLabel>
              <FieldContent>
                <Input
                  id={`certifications.${index}.issuer`}
                  type="text"
                  placeholder="Enter certification issuer"
                  aria-invalid={!!errors.certifications?.[index]?.issuer}
                  {...register(`certifications.${index}.issuer`)}
                />
              </FieldContent>
              {errors.certifications?.[index]?.issuer && (
                <FieldError>{errors.certifications[index]?.issuer?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`certifications.${index}.issueDate`}>Issue Date</FieldLabel>
              <FieldContent>
                <Input
                  id={`certifications.${index}.issueDate`}
                  type="date"
                  aria-invalid={!!errors.certifications?.[index]?.issueDate}
                  {...register(`certifications.${index}.issueDate`)}
                />
              </FieldContent>
              {errors.certifications?.[index]?.issueDate && (
                <FieldError>{errors.certifications[index]?.issueDate?.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor={`certifications.${index}.description`}>Description</FieldLabel>
              <FieldContent>
                <Textarea
                  id={`certifications.${index}.description`}
                  className="w-full h-32"
                  rows={4}
                  placeholder="Enter your certification description"
                  maxLength={2000}
                  aria-invalid={!!errors.certifications?.[index]?.description}
                  {...register(`certifications.${index}.description`)}
                />
              </FieldContent>
              {errors.certifications?.[index]?.description && (
                <FieldError>{errors.certifications[index]?.description?.message}</FieldError>
              )}
            </Field>
          </div>
        </div>
      ))}
      <Button type="button" onClick={handleAdd}>
        Add Certification
      </Button>
    </StepWrapper>
  );
}
