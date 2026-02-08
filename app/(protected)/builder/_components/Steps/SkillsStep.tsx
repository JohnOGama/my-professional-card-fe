"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import StepWrapper from "./StepWrapper";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreateSchemaT } from "../schema/create.schema";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function SkillsStep() {
  const { control } = useFormContext<CreateSchemaT>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      append({
        name: inputValue.trim(),
      });
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <StepWrapper>
      <Field>
        <FieldLabel htmlFor="skill-input">Add Skill</FieldLabel>
        <FieldContent>
          <div className="flex gap-2">
            <Input
              id="skill-input"
              type="text"
              placeholder="Enter skill name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button type="button" onClick={handleAdd} size="icon">
              <Plus className="size-4" />
            </Button>
          </div>
        </FieldContent>
      </Field>
      {fields.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {fields.map((field, index) => (
            <Badge key={field.id} variant="secondary" className="gap-2">
              {field.name}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => remove(index)}
              >
                <X className="size-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </StepWrapper>
  );
}
