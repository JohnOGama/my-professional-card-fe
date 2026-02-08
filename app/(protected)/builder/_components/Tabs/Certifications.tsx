import { SquareArrowOutUpRight } from "lucide-react";

export default function Certifications() {
  return (
    <div className=" flex flex-col gap-4 h-full overflow-y-auto">
      {CERTIFICATIONS.map((item, index) => (
        <CertificationCard key={index} certification={item} />
      ))}
    </div>
  );
}

const CertificationCard = ({ certification }: { certification: (typeof CERTIFICATIONS)[0] }) => {
  return (
    <div key={certification.name} className="flex gap-1 items-start w-full">
      <div className="flex flex-col items-center justify-center h-full pt-3 w-5 shrink-0 ">
        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
        <div className="h-full w-px bg-border" />
      </div>
      <div className="w-full">
        <div className="flex items-center gap-2 w-full underline cursor-pointer">
          <h1 className="text-lg font-bold">{certification.name}</h1>
          <SquareArrowOutUpRight size={14} />
        </div>
        <p className="text-sm font-semibold ">{certification.issuer}</p>
        <p>{certification.year}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">{certification.description}</p>
      </div>
    </div>
  );
};

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    expires: "2027",
    credentialId: "AWS-SAA-9F3K2L",
    image: "/images/certifications/aws-saa.png",
    description:
      "Validates the ability to design secure, scalable, and cost-optimized AWS architectures using services such as IAM, VPC, S3, and CloudFront.",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    expires: "2026",
    credentialId: "AWS-DVA-4K8M1Q",
    image: "/images/certifications/aws-developer-associate.png",
    description:
      "Demonstrates proficiency in developing, deploying, and debugging cloud-based applications using AWS services and SDKs.",
  },
  {
    name: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    expires: "2026",
    credentialId: "AWS-SOA-7X2P9D",
    image: "/images/certifications/aws-sysops.png",
    description:
      "Validates skills in deploying, managing, and operating scalable systems on AWS with a focus on monitoring, automation, and security.",
  },
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    expires: "2028",
    credentialId: "AWS-SAP-1Z8R5N",
    image: "/images/certifications/aws-sap.png",
    description:
      "Demonstrates advanced expertise in designing distributed systems and complex cloud architectures on AWS.",
  },
  {
    name: "AWS Certified Security – Specialty",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    expires: "2027",
    credentialId: "AWS-SEC-6M9A3T",
    image: "/images/certifications/aws-security.png",
    description:
      "Validates deep knowledge of AWS security services, identity and access management, data protection, and incident response.",
  },
];
