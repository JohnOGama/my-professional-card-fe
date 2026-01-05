import { Input } from "@/components/ui/input";
import StepWrapper from "./StepWrapper";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CertificationStep() {
  return (
    <StepWrapper>
      <Field>
        <FieldLabel>Certification Title</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your certification title" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Credential Id</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your certification issuer" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Credential Url</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your certification issuer" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Certification Issuer</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your certification issuer" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Certification Year</FieldLabel>
        <FieldContent>
          <Input type="text" placeholder="Enter your certification year" />
        </FieldContent>
      </Field>
      <Field>
        <FieldLabel>Description</FieldLabel>
        <FieldContent>
          <Textarea
            className="w-full h-32 "
            rows={4}
            placeholder="Enter your certification description"
          />
        </FieldContent>
      </Field>
      <Button>Add Certification</Button>
    </StepWrapper>
  );
}
