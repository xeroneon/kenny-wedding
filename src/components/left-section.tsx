import { Card, CardContent } from "@/components/ui/card";

import Header from "./header";
import EventDetails from "./event-details";
import Countdown from "./countdown";
import { Button } from "./ui/button";

export default function LeftSection() {
  return (
    <div className="min-h-screen flex w-full">
      <Card
        className="
        w-full
        bg-[#E8E3D8]
        text-[#2E281F]
        p-6
      "
      >
        <CardContent className="h-screen flex flex-col items-center font-eaves">
          <Header />
          <Countdown targetDate="2025-04-04T16:00:00" />
          <EventDetails />
          <Button className="bg-sky-950">RSVP</Button>
          <h2 className="text-sky-950 font-eaves">PLEASE RSVP BY APRIL 4th, 2025</h2>
        </CardContent>
      </Card>
    </div>
  );
}
