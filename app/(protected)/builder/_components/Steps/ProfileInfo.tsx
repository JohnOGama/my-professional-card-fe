import { Textarea } from "@/components/ui/textarea";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
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

export default function ProfileInfo() {
  return (
    <StepWrapper>
      <div className="flex gap-2">
        <Field>
          <FieldLabel>First Name</FieldLabel>
          <FieldContent>
            <Input type="text" placeholder="Enter your name" />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel>Last Name</FieldLabel>
          <FieldContent>
            <Input type="text" placeholder="Enter your name" />
          </FieldContent>
        </Field>
      </div>
      <Field>
        <FieldLabel>Job Title</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your job title" />
        </FieldContent>
      </Field>
      <div className="flex gap-2">
        <Field>
          <FieldLabel>Contact Number</FieldLabel>
          <FieldContent>
            <Input type="text" placeholder="Enter your name" />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel>Gender</FieldLabel>
          <FieldContent>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>
      </div>
      <div className="flex gap-2">
        <Field>
          <FieldLabel>City</FieldLabel>
          <FieldContent>
            <Input type="text" placeholder="Enter your name" />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel>Country</FieldLabel>
          <FieldContent>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectGroup>
                  <SelectLabel>Asia</SelectLabel>
                  <SelectItem value="male">Philippines</SelectItem>
                  <SelectItem value="female">China</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>
      </div>
      <Field>
        <FieldLabel>About</FieldLabel>
        <FieldContent>
          <Textarea
            placeholder="About"
            className="w-full h-32"
            rows={4}
            maxLength={1000}
          />
        </FieldContent>
      </Field>
    </StepWrapper>
  );
}
