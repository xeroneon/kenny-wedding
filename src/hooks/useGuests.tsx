import { pb } from "@/lib/pocketbase";
import { useQuery } from "@tanstack/react-query";

const fetchGuests = async () => {
  const records = await pb.collection("select_options").getList(1, 100, {
    // Adjust pagination as needed
  });
  return records.items;
};

export const useGuests = () => {
  return useQuery({ queryKey: ["guests"], queryFn: fetchGuests });
};
