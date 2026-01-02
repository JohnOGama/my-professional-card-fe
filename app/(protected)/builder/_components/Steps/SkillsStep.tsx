import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import StepWrapper from "./StepWrapper";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function SkillsStep() {
  return (
    <StepWrapper>
      <Field>
        <FieldLabel>Description</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your name" />
        </FieldContent>
      </Field>
      <div className="flex flex-wrap gap-3">
        <Badge>Next Js</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>TypeScript</Badge>
        <Badge>JavaScript</Badge>
        <Badge>React</Badge>
      </div>
    </StepWrapper>
  );
}
