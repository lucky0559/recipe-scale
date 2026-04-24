import api from "@/api/api";
import { useUserStore } from "@/stores";
import { User } from "@/types";
import { getAccessToken, saveTokens } from "@/utils/authStorage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useMutation, useQuery } from "@tanstack/react-query";

type GoogleAuthResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

export const useGetCurrentUser = () => {
  const setUser = useUserStore(state => state.setUser);
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      try {
        const res = await api.get<User>("/auth/me");

        const t = await getAccessToken();

        console.log("ACCESS TOKEN: ", t?.slice(0, 1000));

        setUser(res.data);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  });
};

export const useSignInWithGoogle = () => {
  const setUser = useUserStore(state => state.setUser);
  return useMutation({
    mutationKey: ["signInWithGoogle"],
    mutationFn: async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        const idToken = userInfo.data?.idToken;

        const { data } = await api.post<GoogleAuthResponse>("/auth/google", {
          idToken
        });

        await saveTokens(data.accessToken, data.refreshToken);
        setUser(data.user);
        return data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  });
};

export const useLogout = () => {
  const { setUser, user } = useUserStore(state => state);
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      try {
        await api.post("/auth/logout", {
          userId: user?._id // backend will get user from token, this is just a placeholder
        });

        // clear tokens
        await saveTokens(null, null);

        // clear user state
        setUser(null);
      } catch (err) {
        console.log("Logout error:", err);

        // still force logout locally
        await saveTokens(null, null);
        setUser(null);
      }
    }
  });
};
