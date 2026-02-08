"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldContent, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StepWrapper from "./StepWrapper";
import { CreateSchemaT } from "../schema/create.schema";

export default function ProfileInfo() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<CreateSchemaT>();

  return (
    <StepWrapper>
      <div className="flex gap-2">
        <Field>
          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
          <FieldContent>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              aria-invalid={!!errors.profileSchema?.firstName}
              {...register("profileSchema.firstName")}
            />
          </FieldContent>
          {errors.profileSchema?.firstName && <FieldError>{errors.profileSchema.firstName.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
          <FieldContent>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              aria-invalid={!!errors.profileSchema?.lastName}
              {...register("profileSchema.lastName")}
            />
          </FieldContent>
          {errors.profileSchema?.lastName && <FieldError>{errors.profileSchema.lastName.message}</FieldError>}
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="jobTitle">Job Title</FieldLabel>
        <FieldContent>
          <Input
            id="jobTitle"
            type="text"
            placeholder="Enter your job title"
            aria-invalid={!!errors.profileSchema?.jobTitle}
            {...register("profileSchema.jobTitle")}
          />
        </FieldContent>
        {errors.profileSchema?.jobTitle && <FieldError>{errors.profileSchema.jobTitle.message}</FieldError>}
      </Field>
      <div className="flex gap-2">
        <Field>
          <FieldLabel htmlFor="contactNumber">Contact Number</FieldLabel>
          <FieldContent>
            <Input
              id="contactNumber"
              type="text"
              placeholder="Enter your contact number"
              aria-invalid={!!errors.profileSchema?.contactNumber}
              {...register("profileSchema.contactNumber")}
            />
          </FieldContent>
          {errors.profileSchema?.contactNumber && <FieldError>{errors.profileSchema.contactNumber.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="gender">Gender</FieldLabel>
          <FieldContent>
            <Controller
              name="profileSchema.gender"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full" id="gender">
                    <SelectValue placeholder="Select a gender" />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </FieldContent>
          {errors.profileSchema?.gender && <FieldError>{errors.profileSchema.gender.message}</FieldError>}
        </Field>
      </div>
      <div className="flex gap-2">
        <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <FieldContent>
            <Input
              id="city"
              type="text"
              placeholder="Enter your city"
              aria-invalid={!!errors.profileSchema?.city}
              {...register("profileSchema.city")}
            />
          </FieldContent>
          {errors.profileSchema?.city && <FieldError>{errors.profileSchema.city.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="country">Country</FieldLabel>
          <FieldContent>
            <Controller
              name="profileSchema.country"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full" id="country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectGroup>
                      <SelectLabel>Asia</SelectLabel>
                      <SelectItem value="Philippines">Philippines</SelectItem>
                      <SelectItem value="China">China</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </FieldContent>
          {errors.profileSchema?.country && <FieldError>{errors.profileSchema.country.message}</FieldError>}
        </Field>
      </div>
      <Field>
        <FieldLabel htmlFor="aboutMe">About</FieldLabel>
        <FieldContent>
          <Textarea
            id="aboutMe"
            placeholder="Tell us about yourself"
            className="w-full h-32"
            rows={4}
            maxLength={2000}
            aria-invalid={!!errors.profileSchema?.aboutMe}
            {...register("profileSchema.aboutMe")}
          />
        </FieldContent>
        {errors.profileSchema?.aboutMe && <FieldError>{errors.profileSchema.aboutMe.message}</FieldError>}
      </Field>
    </StepWrapper>
  );
}
