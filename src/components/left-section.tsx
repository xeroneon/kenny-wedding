import { Card, CardContent } from "@/components/ui/card";

import Header from "./header";
import Countdown from "./countdown";
import CeremonyDetails from "./ceremony-details";
import RsvpSection from "./rsvp";

export default function LeftSection() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card
        className="
        mx-auto 
        max-w-md 
        bg-[#E8E3D8] 
        text-[#2E281F] 
        p-6 
        shadow-xl 
        rounded 
      "
      >
        <CardContent className="flex flex-col items-center">
          <Header />

          {/* <Countdown targetDate="2025-04-04T16:00:00" />

          <CeremonyDetails />

          <RsvpSection /> */}
        </CardContent>
      </Card>
    </div>
  );
}
