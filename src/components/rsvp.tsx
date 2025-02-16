import { Button } from "@/components/ui/button";

export default function RSVP() {
  return (
    <div className="flex flex-col items-center mt-8 w-full">
  
      <Button className="bg-sky-900 text-white w-32 h-12 text-2xl">
        RSVP
      </Button>
      <p className=" text-sky-950 text-center font-mrsEaves">
        PLEASE RSVP BY APRIL 4<sup>th</sup>, 2025
      </p>
    </div>
  );
}
