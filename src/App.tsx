import React from "react"
import "./App.css"

// shadcn UI components (adjust import paths as needed)
import { Separator } from "@/components/ui/separator"

// Local components
import LeftSection from "./components/left-section"
import RightSection from "./components/right-section"

function App() {
  return (
    <div className="App">
      <Separator />
      <div className="flex flex-col lg:flex-row">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  )
}

export default App
