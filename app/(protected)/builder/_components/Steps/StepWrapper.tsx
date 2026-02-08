export default function StepWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4  overflow-y-auto ">{children}</div>;
}
