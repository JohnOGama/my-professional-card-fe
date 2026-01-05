const WorkExperience = () => {
  return (
    <div className=" flex flex-col gap-4 ">
      {WORK_EXPERIENCE.map((item, index) => (
        <WorkExperienceCard key={index} item={item} />
      ))}
    </div>
  );
};

export default WorkExperience;

const WorkExperienceCard = ({
  item,
}: {
  item: (typeof WORK_EXPERIENCE)[0];
}) => {
  return (
    <div key={item.jobTitle} className="flex gap-1 items-start ">
      <div className="flex flex-col items-center justify-center h-full pt-3 w-5 shrink-0 ">
        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
        <div className="h-full w-px bg-border" />
      </div>
      <div>
        <h1 className="text-lg font-bold">{item.jobTitle}</h1>
        <p className="text-sm font-semibold ">{item.companyName}</p>
        <p>{item.year}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export const WORK_EXPERIENCE = [
  {
    jobTitle: "Senior Software Engineer",
    companyName: "Google",
    year: "2024 - Present",
    description:
      "Designed and implemented scalable backend services using TypeScript and Node.js, following clean architecture and domain-driven design principles. Built secure authentication and authorization flows, including token-based access, service-to-service authentication, and least-privilege IAM policies. Integrated cloud storage solutions using private object storage with CDN architecture to ensure high availability, low latency, and strong security controls. Collaborated with cross-functional teams to improve API performance, reliability, and observability. Applied identity-first security practices by leveraging OIDC, short-lived credentials, and role-based access. Participated in design reviews, code reviews, and on-call rotations to maintain production stability.",
  },
  {
    jobTitle: "Software Engineer",
    companyName: "Meta",
    year: "2022 - 2024",
    description:
      "Developed and maintained backend services using Node.js and TypeScript, supporting high-traffic user-facing applications. Implemented background job processing, caching strategies, and API optimizations to improve system throughput and response times. Worked closely with product and frontend teams to deliver reliable features while adhering to security and performance best practices.",
  },
  {
    jobTitle: "Junior Software Engineer",
    companyName: "Stripe",
    year: "2021 - 2022",
    description:
      "Assisted in building and maintaining backend APIs and internal tools using modern JavaScript and TypeScript. Wrote unit and integration tests to ensure service reliability. Gained hands-on experience with cloud infrastructure, CI/CD pipelines, and secure credential management in a production environment.",
  },
  {
    jobTitle: "Junior Software Engineer",
    companyName: "Stripe",
    year: "2021 - 2022",
    description:
      "Assisted in building and maintaining backend APIs and internal tools using modern JavaScript and TypeScript. Wrote unit and integration tests to ensure service reliability. Gained hands-on experience with cloud infrastructure, CI/CD pipelines, and secure credential management in a production environment.",
  },
];
