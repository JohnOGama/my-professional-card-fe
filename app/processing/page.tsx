import { COOKIES_KEY } from "@/common/constant";
import { Spinner } from "@/components/ui/spinner";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ProcessingPage = async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIES_KEY);

  if (sessionCookie?.value) {
    redirect("/");
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1>Processing your account</h1>
        <Spinner />
      </div>
    </div>
  );
};

export default ProcessingPage;
