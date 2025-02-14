import React from "react"
import { Button } from "@/components/ui/button"

export default function RsvpSection() {
  return (
    <div className="flex flex-col items-center mt-8 w-full">
      {/* RSVP Button */}
      <Button
        className="
          bg-blue-900 
          text-white 
          rounded-full 
          px-8 py-3 
          text-lg 
          font-mrsEaves
          tracking-wide
        "
      >
        RSVP
      </Button>

      {/* Footer note: RSVP deadline */}
      <p
        className="
          bg-blue-900 
          text-white 
          text-center 
          mt-4 
          w-full 
          py-2 
          text-sm 
          font-semibold 
          font-mrsEaves
        "
      >
        PLEASE RSVP BY APRIL 4<sup>th</sup>, 2025
      </p>
    </div>
  )
}
