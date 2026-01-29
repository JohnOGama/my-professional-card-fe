import { useFormContext } from "react-hook-form";
import { CreateSchemaT } from "../schema/create.schema";

const WorkExperience = () => {
  const {watch} = useFormContext<CreateSchemaT>()
  const workExperiences = watch().workExperiences

  console.log('workExperiences',workExperiences)

  return (
    <div className=" flex flex-col gap-4 ">
      {workExperiences.length === 0 &&
        WORK_EXPERIENCE.map((item, index) => (
          <WorkExperienceCard key={index} item={item} />
        ))
      }

      {workExperiences.length !== 0  &&
        workExperiences.map((item, index) => (
          <WorkExperienceCard key={index} item={item} />
        ))
      }
    </div>
  );
};

export default WorkExperience;

const WorkExperienceCard = ({
  item,
}: {
  item: WorkExperienceT;
}) => {
  const startMonth = getDateYear(item.startDate)?.month
  const startYear = getDateYear(item.startDate)?.year

  const endMonth = getDateYear(item.endDate)?.month
  const endYear = getDateYear(item.endDate)?.year

  const isDateEmpty = item.startDate !== ""

  return (
    <div key={item.jobTitle} className="flex gap-1 items-start ">
      <div className="flex flex-col items-center justify-center h-full pt-3 w-5 shrink-0 ">
        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
        <div className="h-full w-px bg-border" />
      </div>
      <div>
        <h1 className="text-lg font-bold">{item.jobTitle}</h1>
        <p className="text-sm font-semibold ">{item.companyName}</p>
        {isDateEmpty &&
          <div className="flex gap-2 items-center">
            <span>{startMonth}/{startYear}</span> - <span>{item.endDate !== "" ? `${endMonth}/${endYear}` : "Present"}</span>
          </div>
        }

        <p className="text-sm text-muted-foreground line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const getDateYear = (date: string | undefined) => {
  if(!date) return;

  let year = ""
  let month = ""

  year = date.split("-")[0]
  month = date.split("-")[1]

  return {
    year,
    month
  }
}

export const WORK_EXPERIENCE: WorkExperienceT[] = [
  {
    jobTitle: "Senior Software Engineer",
    companyName: "Google",
    startDate: "2024",
    endDate: "",
    description:
      "Designed and implemented scalable backend services using TypeScript and Node.js, following clean architecture and domain-driven design principles. Built secure authentication and authorization flows, including token-based access, service-to-service authentication, and least-privilege IAM policies. Integrated cloud storage solutions using private object storage with CDN architecture to ensure high availability, low latency, and strong security controls. Collaborated with cross-functional teams to improve API performance, reliability, and observability. Applied identity-first security practices by leveraging OIDC, short-lived credentials, and role-based access. Participated in design reviews, code reviews, and on-call rotations to maintain production stability.",
  },
  {
    jobTitle: "Software Engineer",
    companyName: "Meta",
    startDate: "2022",
    endDate: "2024",
    description:
      "Developed and maintained backend services using Node.js and TypeScript, supporting high-traffic user-facing applications. Implemented background job processing, caching strategies, and API optimizations to improve system throughput and response times. Worked closely with product and frontend teams to deliver reliable features while adhering to security and performance best practices.",
  },
  {
    jobTitle: "Junior Software Engineer",
    companyName: "Stripe",
    startDate: "2021",
    endDate: "2022",
    description:
      "Assisted in building and maintaining backend APIs and internal tools using modern JavaScript and TypeScript. Wrote unit and integration tests to ensure service reliability. Gained hands-on experience with cloud infrastructure, CI/CD pipelines, and secure credential management in a production environment.",
  },
  {
    jobTitle: "Junior Software Engineer",
    companyName: "Stripe",
    startDate: "2021",
    endDate: "2022",
    description:
      "Assisted in building and maintaining backend APIs and internal tools using modern JavaScript and TypeScript. Wrote unit and integration tests to ensure service reliability. Gained hands-on experience with cloud infrastructure, CI/CD pipelines, and secure credential management in a production environment.",
  },
];

type WorkExperienceT = {
    jobTitle: string;
    companyName: string;
    startDate: string;
    endDate?: string;
    description: string;
}
