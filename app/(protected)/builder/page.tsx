"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BuilderEditor from "./_components/Editor";
import BuilderPreview from "./_components/Preview";
import { create, CreateSchemaT } from "./_components/schema/create.schema";

export default function BuilderPage() {
  const methods = useForm<CreateSchemaT>({
    resolver: zodResolver(create),
    mode: "onChange",
    defaultValues: {
      workExperiences: [],
      skills: [],
      projects: [],
      certifications: [],
      educations: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="h-screen w-full flex flex-col overflow-hidden relative">
        {/* Dotted Background Pattern */}
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="flex-1 flex overflow-hidden relative z-10">
          <BuilderEditor />
          <BuilderPreview />
        </div>
      </div>
    </FormProvider>
  );
}
