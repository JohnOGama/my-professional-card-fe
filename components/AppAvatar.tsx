import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AppAvatar({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  return (
    <Avatar className="bg-black w-32 h-32 rounded-full">
      <AvatarImage className="object-cover" src={src} alt={alt} />
      <AvatarFallback className="text-2xl font-bold">{fallback}</AvatarFallback>
    </Avatar>
  );
}
