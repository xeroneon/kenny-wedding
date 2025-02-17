import "./App.css"

import { Separator } from "@/components/ui/separator"
import LeftSection from "./components/left-section"
import RightSection from "./components/right-section"
import { Toaster } from "./components/ui/toaster";

function App() {

  return (
    <>
      <Separator />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 xl:w-1/3 lg:fixed">
          <LeftSection />
        </div>
        <div className="w-full lg:ml-[50%] xl:ml-[33.33%] lg:w-1/2 xl:w-2/3 overflow-y-auto">
          <RightSection />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
