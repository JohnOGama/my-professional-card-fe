import { Badge } from "@/components/ui/badge";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {SKILLS.map((item, index) => (
        <Badge variant="outline" key={index} className="text-sm">
          {item.name}
        </Badge>
      ))}
    </div>
  );
};

export default Skills;

const SKILLS = [
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "Node.js",
  },
  {
    name: "Express",
  },
  {
    name: "MongoDB",
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "MySQL",
  },
  {
    name: "Redis",
  },
  {
    name: "Docker",
  },
  {
    name: "Kubernetes",
  },
  {
    name: "AWS",
  },
  {
    name: "Azure",
  },
  {
    name: "GCP",
  },
  {
    name: "Git",
  },
  {
    name: "GitHub",
  },
  {
    name: "GitLab",
  },
  {
    name: "GitLab",
  },
];
