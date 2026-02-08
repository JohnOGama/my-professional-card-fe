export default function Education() {
  return (
    <div className=" flex flex-col gap-4 h-full overflow-y-auto">
      {EDUCATIONS.map((item, index) => (
        <EducationCard key={index} education={item} />
      ))}
    </div>
  );
}

const EducationCard = ({ education }: { education: (typeof EDUCATIONS)[0] }) => {
  return (
    <div key={education.year} className="flex gap-1 items-start w-full">
      <div className="flex flex-col items-center justify-center h-full pt-3 w-5 shrink-0 ">
        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
        <div className="h-full w-px bg-border" />
      </div>
      <div className="w-full">
        <h1 className="text-lg font-bold">{education.degree}</h1>
        <p className="text-sm font-semibold ">{education.school}</p>
        <p>{education.year}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">{education.description}</p>
      </div>
    </div>
  );
};

export const EDUCATIONS = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of the Philippines",
    year: "2018 - 2022",
    description:
      "Focused on software engineering fundamentals including data structures, algorithms, databases, and system design. Completed multiple projects involving backend development, RESTful APIs, and cloud-based applications using modern JavaScript and TypeScript.",
  },
  {
    degree: "Senior High School – STEM Track",
    school: "Philippine Science High School",
    year: "2016 - 2018",
    description:
      "Specialized in science, technology, engineering, and mathematics with an emphasis on problem-solving, programming basics, and analytical thinking.",
  },
];
