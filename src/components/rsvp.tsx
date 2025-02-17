import { RSVPDialog } from "./rsvp-dialog";

export default function RSVP() {
  return (
    <div className="flex flex-col items-center mt-8 w-full">
      <RSVPDialog />
      <p className="mt-4 text-sky-950 text-center font-mrsEaves">
        PLEASE RSVP BY APRIL 4<sup>th</sup>, 2025
      </p>
    </div>
  );
}
