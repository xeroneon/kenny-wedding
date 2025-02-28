import { Card, CardContent } from "@/components/ui/card";

import Header from "./header";
import EventDetails from "./event-details";
import Countdown from "./countdown";
import RSVP from "./rsvp";

export default function LeftSection() {
  return (
    <div className="w-full">
      <Card
        className="
        rounded-none
        w-full

        bg-[#E8E3D3]
        text-sky-950

      "
      >
        <CardContent className="flex flex-col  min-h-screen items-center font-eaves justify-around">
          <Header />
          <Countdown targetDate="2025-05-24T16:00:00" />
          <EventDetails />
          <RSVP />
        </CardContent>
      </Card>
    </div>
  );
}
