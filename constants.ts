export const COOKIE_MAX_AGE = 20;
export const JWT_EXPIRATION_TIME = "20s";
export const REFRESH_TOKEN_EXPIRY = "30d";
export const REFRESH_TOKEN_MAX_AGE = 30 * 24 * 60 * 60;
export const REFRESH_BEFORE_EXPIRY = 60;

// Google Auth
export const GOOGLE_CLIENT_ID = process.env.GOOGE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const GOOGLE_REDIRECT_URI = `${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/callback`;
export const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

export const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;
export const APP_SCHEME = process.env.EXPO_PUBLIC_SCHEME;
export const JWT_SECRET = process.env.JWT_SECRET;

// Cookie Settings
export const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
  sameSite: "Lax" as const,
  path: "/",
  maxAge: COOKIE_MAX_AGE
};
