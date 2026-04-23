export type User = {
  _id: string;
  username: string;
  email: string;
  emailVerified?: boolean;
  cookieExpiration?: number;
  googleId: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
};
