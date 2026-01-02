import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import StepWrapper from "./StepWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ProjectsStep() {
  return (
    <StepWrapper>
      <Field>
        <FieldLabel>Project Title</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your project title" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Description</FieldLabel>
        <FieldContent>
          <Textarea
            className="w-full h-32 "
            rows={4}
            placeholder="Enter your project description"
          />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Project Image</FieldLabel>
        <FieldContent>
          <Input type="file" placeholder="Enter your project image" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Project Link</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your project link" />
        </FieldContent>
      </Field>
    </StepWrapper>
  );
}
