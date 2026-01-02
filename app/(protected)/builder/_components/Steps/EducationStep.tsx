import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import StepWrapper from "./StepWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function EducationStep() {
  return (
    <StepWrapper>
      <Field>
        <FieldLabel>Degree</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your degree" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>School</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your school" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Start Year</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your start year" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>End Year</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your end year" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Description</FieldLabel>
        <FieldContent>
          <Textarea
            className="w-full h-32 "
            rows={4}
            placeholder="Enter your description"
          />
        </FieldContent>
      </Field>
      <Button>Add Education</Button>
    </StepWrapper>
  );
}
