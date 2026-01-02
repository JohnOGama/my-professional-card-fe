import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <Card className="flex items-start p-0 gap-0 group">
      <div className="relative w-full h-32 group-hover:scale-105 transition-all duration-300">
        <Image
          className="object-cover"
          src={project.image}
          alt={project.title}
          fill
        />
      </div>
      <div className="p-3 space-y-2">
        <h1 className="text-sm font-bold">{project.title}</h1>
        <p className="text-xs text-muted-foreground line-clamp-3">
          {project.description}
        </p>
        <Button variant="outline" className="w-full" size="sm">
          <Link />
          View Project
        </Button>
      </div>
    </Card>
  );
}

export const PROJECTS = [
  {
    title: "Project 1",
    description:
      "Built a secure file management and delivery platform using NestJS and AWS S3, designed to handle user uploads and controlled file access at scale. Implemented presigned URLs for direct client uploads, eliminating server-side file handling and improving performance. Integrated CloudFront CDN with a private S3 bucket to deliver public assets efficiently while keeping storage secure. Applied IAM least-privilege policies and identity-based access patterns to avoid long-lived credentials. The system supports role-based access control, audit logging, and scalable background processing for file-related tasks.",
    image: "/dummy/project.webp",
  },
  {
    title: "Project 2",
    description:
      "Built a secure file management and delivery platform using NestJS and AWS S3, designed to handle user uploads and controlled file access at scale. Implemented presigned URLs for direct client uploads, eliminating server-side file handling and improving performance. Integrated CloudFront CDN with a private S3 bucket to deliver public assets efficiently while keeping storage secure. Applied IAM least-privilege policies and identity-based access patterns to avoid long-lived credentials. The system supports role-based access control, audit logging, and scalable background processing for file-related tasks.",
    image: "/dummy/project.webp",
  },
  {
    title: "Project 3",
    description:
      "Built a secure file management and delivery platform using NestJS and AWS S3, designed to handle user uploads and controlled file access at scale. Implemented presigned URLs for direct client uploads, eliminating server-side file handling and improving performance. Integrated CloudFront CDN with a private S3 bucket to deliver public assets efficiently while keeping storage secure. Applied IAM least-privilege policies and identity-based access patterns to avoid long-lived credentials. The system supports role-based access control, audit logging, and scalable background processing for file-related tasks.",
    image: "/dummy/project.webp",
  },
  {
    title: "Project 4",
    description:
      "Built a secure file management and delivery platform using NestJS and AWS S3, designed to handle user uploads and controlled file access at scale. Implemented presigned URLs for direct client uploads, eliminating server-side file handling and improving performance. Integrated CloudFront CDN with a private S3 bucket to deliver public assets efficiently while keeping storage secure. Applied IAM least-privilege policies and identity-based access patterns to avoid long-lived credentials. The system supports role-based access control, audit logging, and scalable background processing for file-related tasks.",
    image: "/dummy/project.webp",
  },
  {
    title: "Project 5",
    description:
      "Built a secure file management and delivery platform using NestJS and AWS S3, designed to handle user uploads and controlled file access at scale. Implemented presigned URLs for direct client uploads, eliminating server-side file handling and improving performance. Integrated CloudFront CDN with a private S3 bucket to deliver public assets efficiently while keeping storage secure. Applied IAM least-privilege policies and identity-based access patterns to avoid long-lived credentials. The system supports role-based access control, audit logging, and scalable background processing for file-related tasks.",
    image: "/dummy/project.webp",
  },
  {
    title: "Project 6",
    description:
      "Built a secure file management and delivery platform using NestJS and AWS S3, designed to handle user uploads and controlled file access at scale. Implemented presigned URLs for direct client uploads, eliminating server-side file handling and improving performance. Integrated CloudFront CDN with a private S3 bucket to deliver public assets efficiently while keeping storage secure. Applied IAM least-privilege policies and identity-based access patterns to avoid long-lived credentials. The system supports role-based access control, audit logging, and scalable background processing for file-related tasks.",
    image: "/dummy/project.webp",
  },
];
