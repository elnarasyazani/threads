import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20"><SignIn /></div>;
}
