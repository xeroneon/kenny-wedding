import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGuests } from "@/hooks/useGuests";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useMutation } from "@tanstack/react-query";
import { pb } from "@/lib/pocketbase";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const addRsvp = async (name: string, choice: string, restrictions: string) => {
  if (name.length && choice.length && restrictions.length) {
    const records = await pb.collection("rsvp").getList(1, 100, {
      // Adjust pagination as needed
      filter: `name = "${name}"`,
    });
    if (records.items.length) {
      await pb.collection("rsvp").update(records.items[0].id, {
        name,
        entree_choice: choice,
        dietary_restrictions: restrictions,
      });
    } else {
      await pb.collection("rsvp").create({
        name,
        entree_choice: choice,
        dietary_restrictions: restrictions,
      });
    }
  } else {
    throw new Error("Please fill out all fields");
  }
};

export function RSVPDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [choice, setChoice] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const { data: guests } = useGuests();
  const { mutate, error } = useMutation({
    mutationFn: () => addRsvp(name, choice, restrictions),
    onSuccess: () => {
      toast({
        title: "RSVP",
        description: "RSVP has been sent",
      });

      setOpen(false);
    },
  });
  console.log({ error });
  if (!guests) {
    return <></>;
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="bg-sky-900 text-white w-32 h-12 text-2xl"
        >
          RSVP
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>RSVP</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {error && (
            <div className="border-red-500 border bg-red-200 text-red-500 p-4 py-2 rounded">
              {error.message}
            </div>
          )}
          <div className="">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Select onValueChange={(e) => setName(e)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Name" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {guests
                  ?.filter((guest) => guest.name.length)
                  .map((guest) => (
                    <SelectItem key={guest.id} value={guest.name}>
                      {guest.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="">
            <Label htmlFor="Entree" className="text-right">
              Entree
            </Label>
            <Select onValueChange={(e) => setChoice(e)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Entree or Decline Invitation" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="Cedar-Plank Roasted Salmon">
                  Cedar-Plank Roasted Salmon
                </SelectItem>
                <SelectItem value="Grilled New York Steak">
                  Grilled New York Steak
                </SelectItem>
                <SelectItem value="Can't Attend">
                  Can't Attend
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="">
            <Label htmlFor="restrictions" className="text-right">
              Dietary Restrictions
            </Label>
              <textarea
    id="restrictions"
    rows={4} 
    placeholder="Enter your dietary restrictions here or if you can’t make it to the wedding, you can write a note for the bride and groom here instead."
    onChange={(e) => setRestrictions(e.target.value)}
    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 resize-y"
  />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => mutate()}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
