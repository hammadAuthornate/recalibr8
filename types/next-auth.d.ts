import NextAuth from "next-auth";
import { AUTH_USER_TYPE } from "./auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name: string;
    type: AUTH_USER_TYPE;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      type: AUTH_USER_TYPE;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    name: string;
    type: AUTH_USER_TYPE;
  }
}
