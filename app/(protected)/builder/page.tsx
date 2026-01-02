import BuilderEditor from "./_components/Editor";
import BuilderPreview from "./_components/Preview";

export default function BuilderPage() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-1 flex">
        <BuilderEditor />
        <BuilderPreview />
      </div>
    </div>
  );
}
