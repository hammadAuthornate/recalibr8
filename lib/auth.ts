// import "server-only";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import AuthService from "./services/AuthService";
import { AUTH } from "@/types/auth";
import { BackendError } from "./config/error";

export const { handlers, auth } = NextAuth({
  debug: true,
  secret: process.env.AUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  //   maxAge: 7 * 24 * 60 * 60, // 7 days
  // },
  providers: [
    Credentials({
      // type: "credentials",
      // id: "sign-up",
      name: "sign-up",
      credentials: {
        name: {
          type: "text",
          label: "Name",
          placeholder: "john doe",
        },
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@email.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      async authorize(credentials) {
        try {
          const signUpUser = await AuthService.signUp(credentials as AUTH);

          return {
            id: signUpUser.id!,
            email: signUpUser.email,
            name: signUpUser.name || "",
            type: "end-user" as const,
          };
        } catch (error) {
          console.error("Sign-up error:", error);
          return null;
        }
      },
    }),

    Credentials({
      id: "sign-in",
      name: "sign-in",
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@email.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new BackendError("Missing Credentials for signin", {
              statusCode: 400,
            });
          }
          const signInUser = await AuthService.signIn({
            email: credentials.email as string,
            password: credentials.password as string,
          });

          return {
            id: signInUser.id!,
            email: signInUser.email,
            name: signInUser.name || "",
            type: "end-user" as const,
          };
        } catch (error) {
          console.error("Sign-in error:", error);
          return null;
        }
      },
    }),
  ],
  // callbacks: {
  //   async session({ session, token }) {
  //     if (session.user) {
  //       session.user.id = token.id;
  //       session.user.email = token.email;
  //       session.user.name = token.name;
  //       session.user.type = token.type;
  //     }
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.email = user.email;
  //       token.name = user.name;
  //       token.type = user.type;
  //     }
  //     return token;
  //   },
  // },
  // pages: {
  //   signIn: "/login",
  //   error: "/auth/error",
  // },
});
