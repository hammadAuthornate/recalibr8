"use server";

import { AUTH } from "@/types/auth";
import { BackendError } from "../config/error";
import { db } from "../config/firebase.config";

export default class AuthService {
  private static AuthCollection = db.collection("auth");

  static async signUp(credentials: AUTH) {
    const previousUser = await this.AuthCollection.where(
      "email",
      "==",
      credentials.email
    ).get();

    if (!previousUser.empty) {
      throw new BackendError("User already exists.", {
        cause: "user email is already used.",
        statusCode: 400,
      });
    }

    await this.AuthCollection.add(credentials);

    return {
      email: credentials.email,
    };
  }

  static async signIn(credentials: AUTH) {
    const userDetails = await this.AuthCollection.where(
      "email",
      "==",
      credentials.email
    ).get();

    if (userDetails.empty) {
      throw new BackendError("User does not exist.", {
        cause: "user email is not registered.",
        statusCode: 404,
      });
    }

    const userData = userDetails.docs?.at(0)?.data() as AUTH;

    return { ...userData, password: undefined };
  }
}
