import {
  getAccessToken,
  getRefreshToken,
  saveTokens
} from "@/utils/authStorage";
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_BASE_URL}/api`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(async config => {
  const token = await getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = await getRefreshToken();

      try {
        const res = await axios.post(
          `${process.env.EXPO_PUBLIC_API_BASE_URL}/api/auth/refresh`,
          { refreshToken }
        );

        const newAccessToken = res.data.accessToken;
        await saveTokens(newAccessToken, refreshToken!);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (error) {
        console.log("Refresh failed");
      }
    }
    return Promise.reject(error);
  }
);

export default api;
