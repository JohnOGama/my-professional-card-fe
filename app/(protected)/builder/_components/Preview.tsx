"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { DEFAULT_TAB, TabKey, TABS } from "./Tabs/Tabs";
import WorkExperience from "./Tabs/WorkExperience";
import Skills from "./Tabs/Skills";
import Projects from "./Tabs/Projects";
import Testimonials from "./Tabs/Testimonials";
import Certifications from "./Tabs/Certifications";
import Education from "./Tabs/Education";
import { CloudDownload, Forward, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import AppAvatar from "@/components/AppAvatar";
import { CreateSchemaT } from "./schema/create.schema";

export default function BuilderPreview() {
  const [activeTab, setActiveTab] = useState<TabKey>(DEFAULT_TAB);
  const { watch } = useFormContext<CreateSchemaT>();

  const formValues = watch();

  return (
    <div className="w-full h-full flex justify-center lg:pt-5  ">
      <Card className="w-200 h-[90%] p-0 gap-0 relative rounded-none md:rounded-xl">
        <div className="relative w-full bg-input h-50">
          <Image
            src="/dummy/cover-image.avif"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full flex justify-end gap-2 items-center p-5">
          <Button variant="outline">
            <Phone />
            <span className="hidden md:block">Phone</span>
          </Button>
          <Button variant="outline">
            <Mail />
            <span className="hidden md:block">Email</span>
          </Button>
          <Button variant="outline">
            <Forward />
            <span className="hidden md:block">Share</span>
          </Button>
          <Button variant="outline">
            <CloudDownload />
            <span className="hidden md:block">Resume</span>
          </Button>
        </div>
        <div className="p-5 absolute top-30 bottom-0 left-0 right-0 z-20 flex flex-col gap-5">
          <div className="space-y-2 shrink-0">
            <AppAvatar
              src=""
              alt={formValues.profileSchema?.firstName || "Profile"}
              fallback={
                formValues.profileSchema?.firstName?.[0]?.toUpperCase() ||
                formValues.profileSchema?.lastName?.[0]?.toUpperCase() ||
                "JO"
              }
            />
            <div className="mt-4">
              <h1 className="text-4xl font-semibold">
                {formValues.profileSchema?.firstName && formValues.profileSchema?.lastName
                  ? `${formValues.profileSchema.firstName} ${formValues.profileSchema.lastName}`
                  : "John Doe"}
              </h1>
              <p className="text-lg font-semibold">
                {formValues.profileSchema?.jobTitle || "Software Engineer"}
              </p>
            </div>
            <div className="flex gap-1  items-center text-sm text-muted-foreground">
              <MapPin size={15} />
              <p>
                {formValues.profileSchema?.city && formValues.profileSchema?.country
                  ? `${formValues.profileSchema.city}, ${formValues.profileSchema.country}`
                  : "New York, NY"}
              </p>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 ">
              {formValues.profileSchema?.aboutMe ||
                "I'm a software engineer with a strong focus on backend systems, cloud architecture, and secure application design. I primarily work with NestJS, modern JavaScript/TypeScript stacks, and AWS services, building scalable and production-ready systems."}
            </p>

            <div className="flex gap-2 items-center overflow-x-auto scrollbar-hide">
              {TABS.map((item) => (
                <div key={item.name} onClick={() => setActiveTab(item.key)}>
                  <Button
                    variant={activeTab === item.key ? "default" : "outline"}
                  >
                    {item.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
            {activeTab === "work-experience" && <WorkExperience />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "projects" && <Projects />}
            {activeTab === "testimonials" && <Testimonials />}
            {activeTab === "certifications" && <Certifications />}
            {activeTab === "educations" && <Education />}
          </div>
        </div>
        {/* <div className="absolute z-50 bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-background" /> */}
      </Card>
    </div>
  );
}
