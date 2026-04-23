import api from "@/api/api";
import { Food } from "@/types/Recipe";
import { useQuery } from "@tanstack/react-query";

const useGetFoods = (search?: string) => {
  return useQuery<Food[]>({
    queryKey: ["getFoods", search],
    queryFn: async () => {
      try {
        const res = await api.get("/foods", {
          params: {
            search
          }
        });

        return res.data;
      } catch (error: any) {
        console.log("ERROR:", error.response?.data || error.message);

        throw error;
      }
    }
  });
};

const useGetFoodById = (id: number) => {
  return useQuery<Food>({
    queryKey: ["getFoodsById", id],
    queryFn: async () => {
      try {
        const res = await api.get(`/foods/${id}`);

        return res.data;
      } catch (error: any) {
        console.log("ERROR:", error.response?.data || error.message);

        throw error;
      }
    }
  });
};

export { useGetFoodById, useGetFoods };
