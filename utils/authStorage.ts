import * as SecureStore from "expo-secure-store";

export const saveTokens = async (
  accessToken: string | null,
  refreshToken: string | null
) => {
  if (accessToken) {
    await SecureStore.setItemAsync("accessToken", accessToken);
  } else {
    await SecureStore.deleteItemAsync("accessToken");
  }
  if (refreshToken) {
    await SecureStore.setItemAsync("refreshToken", refreshToken);
  } else {
    await SecureStore.deleteItemAsync("refreshToken");
  }
};

export const getAccessToken = () => SecureStore.getItemAsync("accessToken");

export const getRefreshToken = () => SecureStore.getItemAsync("refreshToken");

export const clearTokens = async () => {
  await SecureStore.deleteItemAsync("accessToken");
  await SecureStore.deleteItemAsync("refreshToken");
};
