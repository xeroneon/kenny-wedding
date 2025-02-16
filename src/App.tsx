import "./App.css"

import { Separator } from "@/components/ui/separator"
import LeftSection from "./components/left-section"
import RightSection from "./components/right-section"

function App() {
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
    </>
  )
}

export default App