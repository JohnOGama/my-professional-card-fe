"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProfileInfo from "./Steps/ProfileInfo";
import { useQueryState } from "nuqs";
import WorkExperienceStep from "./Steps/WorkExperienceStep";
import SkillsStep from "./Steps/SkillsStep";
import ProjectsStep from "./Steps/ProjectsStep";
import CertificationStep from "./Steps/CertificationStep";
import EducationStep from "./Steps/EducationStep";

export default function BuilderEditor() {
  const [step, setStep] = useQueryState("step", {
    defaultValue: "1",
  });

  const handleNext = () => {
    const nextStep = Number(step) + 1;
    if (nextStep > STEPS.length) return;
    setStep(nextStep.toString());
  };

  const handlePrevious = () => {
    if (Number(step) === 1) return;
    const prevStep = Number(step) - 1;
    setStep(prevStep.toString());
  };

  const handleSave = () => {
    console.log("Save and Publish");
  };

  return (
    <div className="w-full hidden md:flex lg:w-125 border-r border-input  flex-col ">
      <div className="p-4 pb-0">
        <div>
          <h1 className="text-2xl font-bold">Builder Editor</h1>
          <p className="text-sm text-muted-foreground">
            Build your professional card with ease.
          </p>
        </div>
        <Separator className="mt-5" />
      </div>

      {/* Rendered Step */}
      <div className="flex-1 p-4 space-y-5">
        <h1 className="text-lg font-bold">{STEPS[Number(step) - 1].label}</h1>
        {STEPS[Number(step) - 1].component}
      </div>

      {/* Step Navigation */}
      <div className="p-4 pt-0">
        {Number(step) !== STEPS.length && (
          <div className="flex gap-2 justify-end pt-4 border-t border-input">
            {Number(step) !== 1 && (
              <Button onClick={handlePrevious}>Previous</Button>
            )}
            <Button onClick={handleNext}>Next</Button>
          </div>
        )}

        {Number(step) === STEPS.length && (
          <div className="flex gap-2 justify-end pt-4 border-t border-input">
            {Number(step) !== 1 && (
              <Button onClick={handlePrevious}>Previous</Button>
            )}
            <Button onClick={handleSave}>Save and Publish</Button>
          </div>
        )}
      </div>
    </div>
  );
}

const STEPS: StepTypes[] = [
  {
    step: 1,
    key: "profile-info",
    label: "Profile Info",
    component: <ProfileInfo />,
  },
  {
    step: 2,
    key: "work-experience",
    label: "Work Experience (Optional)",
    component: <WorkExperienceStep />,
  },
  {
    step: 3,
    key: "skills",
    label: "Skills",
    component: <SkillsStep />,
  },
  {
    step: 4,
    key: "projects",
    label: "Projects",
    component: <ProjectsStep />,
  },
  {
    step: 5,
    key: "certifications",
    label: "Certifications (Optional)",
    component: <CertificationStep />,
  },
  {
    step: 6,
    key: "educations",
    label: "Educations",
    component: <EducationStep />,
  },
];

type StepTypes = {
  step: number;
  key: string;
  label: string;
  component: React.ReactNode;
};
