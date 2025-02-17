import "./App.css";

import { Separator } from "@/components/ui/separator";
import LeftSection from "./components/left-section";
import RightSection from "./components/right-section";
import { useGuests } from "./hooks/useGuests";
import { Toaster } from "./components/ui/toaster";

function App() {
  const { data, isLoading, isError, error } = useGuests();
  console.log({ data });
  return (
    <>
      <Separator />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 xl:w-1/3">
          <LeftSection />
        </div>
        <div className="lg:w-1/2 xl:w-2/3">
          <RightSection />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
