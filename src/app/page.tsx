import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";


export default function Home() {
  return (
    <div className="p-5">
      <div  className="w-100 justify-end flex ">

      <ThemeToggle></ThemeToggle>

      </div>
      <h1 className="font-light text-blue-600 font-roboto">
        Welcome to the commerce platform
      </h1>
      <Button variant={"destructive"}>Click here</Button>
    </div>
  );
}
