import React from "react"
import { Button } from "@/components/ui/button"

// Import your images
import image1 from "../assets/wingding 2.jpg"
import image2 from "../assets/wingding 3.jpg"
import image3 from "../assets/wingding 4.jpg"
import image4 from "../assets/wingding 5.jpg"
import image5 from "../assets/wingding 6.jpg"

export default function RightSection() {
  return (
    <div className="flex flex-col gap-6 text-sm leading-relaxed">
      {/* Story Heading & Paragraphs */}
      <h2
        id="how-we-got-here"
        className="text-3xl font-bold underline underline-offset-4"
      >
        How We Got Here
      </h2>
      <p>
        A tale as old as time: boy and girl both *heart* one another on Hinge
        (or un-Hinged if you ask Jess), boy and girl chat on the app then
        exchange numbers. Boy asks girl out on brunch date. Girl almost bails
        when boy changes plans to Friday night drinks and girl agrees. They have
        their first date in downtown Benicia at First Street Taphouse…
      </p>
      <p>
        Fast forward a few months later and they are officially dating and
        living together with the most American (even more American than the
        mullet Kenny was rocking) anniversary of July 4th, 2023. They went
        through a lot as a couple in a short amount of time, both happy and sad,
        which only strengthened their bond and love for each other.
      </p>
      <p>
        And on January 4th, 2025, Kenny proposed and here we are, getting ready
        for the big day on May 24th, 2025! The adventure is only just beginning!
      </p>

      {/* Images Row */}
      <div className="flex flex-row flex-wrap gap-4 justify-center mt-6">
        <img
          src={image1}
          alt="Jess & Kenny"
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
        <img
          src={image2}
          alt="Jess & Kenny"
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
        <img
          src={image3}
          alt="Jess & Kenny"
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
        <img
          src={image4}
          alt="Jess & Kenny"
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
        <img
          src={image5}
          alt="Jess & Kenny"
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Where to Stay */}
      <div id="what-were-doing" className="flex flex-col gap-2 mt-6">
        <h3 className="text-xl font-semibold">Where to Stay</h3>
        <p>
          We have a block of rooms reserved at Tenaya Lodge in Yosemite. Use our
          group code <strong>BOYKEN(J25)</strong> for special rates. Book by
          April 1st to secure your room. We can't wait to celebrate with you in
          this gorgeous setting!
        </p>
        <Button
          variant="default"
          className="bg-blue-900 text-white rounded-full px-6 py-3 text-base"
        >
          Book Now
        </Button>
      </div>

      {/* Additional Info */}
      <div id="where-were-going" className="mt-6 text-sm">
        <p>
          Tenaya Lodge in Yosemite
          <br />
          1122 Highway 41
          <br />
          Fish Camp, CA 93623
        </p>
        <p className="mt-4">
          Please RSVP by <strong>April 4, 2025</strong>
        </p>
      </div>
    </div>
  )
}
