import { Card } from "@/components/ui/card";
import { Separator } from "@base-ui/react";
import { SquareArrowOutUpRight } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {TESTIMONIALS.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <Card className="flex items-start p-3 gap-3">
      <p className="text-sm line-clamp-4">{testimonial.description}</p>
      <Separator orientation="horizontal" className="w-full h-px bg-border" />

      <div className="flex items-center gap-2 w-full">
        <div>
          <div className="flex gap-2 items-center underline cursor-pointer">
            <h1 className="text-base font-semibold">{testimonial.name}</h1>
            <SquareArrowOutUpRight size={14} />
          </div>
          <p className="line-clamp-1">{testimonial.jobTitle}</p>
        </div>
      </div>
    </Card>
  );
}

export const TESTIMONIALS = [
  {
    description:
      "Working with John was a great experience. He consistently delivered clean, scalable backend solutions and always considered security and performance from the start. His understanding of cloud architecture and best practices made a noticeable impact on the reliability of our systems.",
    image: "/dummy/profile.png",
    name: "Alex Chen",
    jobTitle: "Senior Software Engineer, Google",
  },
  {
    description:
      "John has a strong engineering mindset and pays close attention to system design and maintainability. He was proactive in identifying potential issues and proposing well-thought-out solutions, especially around authentication and backend architecture.",
    image: "/dummy/profile.png",
    name: "Sarah Miller",
    jobTitle: "Engineering Manager, Meta",
  },
  {
    description:
      "John brings a security-first approach to every project. His knowledge of cloud services, identity-based access, and backend development helped our team build more robust and production-ready features.",
    image: "/dummy/profile.png",
    name: "David Kim",
    jobTitle: "Technical Lead, Stripe",
  },
];
