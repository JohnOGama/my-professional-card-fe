import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function BuilderEditor() {
  return (
    <div className="w-full hidden md:flex lg:w-[500px] border-r border-input h-full  flex-col">
      <div className="p-4 pb-0">
        <div>
          <h1 className="text-2xl font-bold">Builder Editor</h1>
          <p className="text-sm text-muted-foreground">
            Build your professional card with ease.
          </p>
        </div>
        <Separator className="mt-5" />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          <Field>
            <FieldLabel>Background Image</FieldLabel>
            <FieldContent>
              <Input type="file" />
            </FieldContent>
          </Field>
          <Field>
            <FieldLabel>Profile Image</FieldLabel>
            <FieldContent>
              <Input type="file" />
            </FieldContent>
          </Field>
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
                className="w-full h-40"
                rows={4}
                maxLength={1000}
              />
            </FieldContent>
          </Field>
        </div>
      </div>
      <div className="p-4 pt-0">
        <div className="flex gap-2 justify-end pt-4 border-t border-input">
          <Button>Previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
}
