import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPablic from "./useAxiosPpablic";

const UseAplicationFiner = () => {
  const { user } = useAuth();
 
  const axiosPublic = useAxiosPablic();
  const { data: applictionBecameTrainer = [], refetch } = useQuery({
    queryKey: ["applictionBecame", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/applictionBecameTrainer/${user?.email}`);
      return res.data;
    },
  });
  return [applictionBecameTrainer, refetch];
};

export default UseAplicationFiner;