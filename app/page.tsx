import Link from "next/link";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-lg space-y-4">
          {/* Heading */}
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold">My Professional Card</h1>
            <p className="text-muted-foreground text-sm">
              Create your professional card with work experience, skills, and more
            </p>
          </div>

          {/* Segmented Purple Button */}
          <Link href="/builder" className="flex justify-center items-center">
            <button className="relative flex items-center rounded-lg bg-purple-600  text-white transition-all duration-200 border border-purple-600/50">
              {/* Left Section - Icon and Text */}
              <div className="flex items-center gap-2 px-4 py-3 border-r border-purple-500/30">
                <Plus className="size-4" />
                <span className="font-medium text-sm">Create Card</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
