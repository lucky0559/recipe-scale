import { User } from "@/types";
import { AuthError } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { create } from "zustand";

WebBrowser.maybeCompleteAuthSession();

type States = {
  user: User | null;
  isLoading: boolean;
  error: AuthError | null;
  isLogouting: boolean;
};

type Actions = {
  setUser: (user: User | null) => void;
  setIsLoading: (value: boolean) => void;
  setIsLogouting: (value: boolean) => void;
};

export const useAuthStore = create<States & Actions>(set => ({
  user: null,
  isLoading: false,
  isLogouting: false,
  error: null,
  setUser: (user: User | null) => set({ user }),
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setIsLogouting: (value: boolean) => set({ isLogouting: value })
}));
