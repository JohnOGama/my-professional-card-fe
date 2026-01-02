import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import StepWrapper from "./StepWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function WorkExperienceStep() {
  return (
    <StepWrapper>
      <Field>
        <FieldLabel>Job Title</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your name" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Company Name</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your name" />
        </FieldContent>
      </Field>
      <div className="flex gap-2">
        <Field>
          <FieldLabel>Start Year</FieldLabel>
          <FieldContent>
            <Input type="text" placeholder="Enter your name" />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel>End Year (optional)</FieldLabel>
          <FieldContent>
            <Input type="text" placeholder="Enter your name" />
          </FieldContent>
        </Field>
      </div>
      <Field>
        <FieldLabel>Description</FieldLabel>
        <FieldContent>
          <Textarea
            placeholder="About"
            className="w-full h-32 "
            rows={4}
            maxLength={1000}
          />
        </FieldContent>
      </Field>

      <Button>Add Work Experience</Button>
    </StepWrapper>
  );
}
