import { User } from "@/types";
import { create } from "zustand";

type States = {
  user: User | null;
};

type Actions = {
  setUser: (user: User | null) => void;
};

export const useUserStore = create<States & Actions>(set => ({
  user: null,
  setUser: (user: User | null) => set({ user })
}));
