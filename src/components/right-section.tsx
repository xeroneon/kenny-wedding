import React from "react";
import { Button } from "@/components/ui/button";
import Footer from "./footer";

// Import your images

export default function RightSection() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="gap-6 text-sm leading-relaxed font-eaves">
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
      </div>

      {/* Images Row */}
      <div className="flex flex-row flex-wrap gap-4 justify-center mt-6"></div>
      <Footer />
    </div>
  );
}
