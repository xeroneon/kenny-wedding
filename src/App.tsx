import React from "react"
import "./App.css"

import { Separator } from "@/components/ui/separator"
import LeftSection from "./components/left-section"

function App() {
  return (
    <>
      <Separator />
      <div className="">
        <LeftSection />
      </div>
    </>
  )
}

export default App
