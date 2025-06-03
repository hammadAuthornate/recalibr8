import { AUTH } from "@/types/auth";
import { BackendError } from "../config/error";
import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { db } from "../config/firebase.config";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";

export default class AuthService {
  private static AuthCollection = collection(db, "auth");

  static async signUp(credentials: AUTH) {
    const previousUser = await getDocs(
      query(this.AuthCollection, where("email", "==", credentials.email))
    );

    if (!previousUser.empty) {
      throw new BackendError("User already exists.", {
        cause: "user email is already used.",
        statusCode: 400,
      });
    }

    const salt = genSaltSync(10);
    const hash = hashSync(credentials.password, salt);

    const response = await addDoc(this.AuthCollection, {
      ...credentials,
      password: hash,
      type: "end-user",
    } as Partial<AUTH>);

    if (!response.id) {
      throw new BackendError("Unable to store user info.", {
        cause: "Please enter valid information or contact support.",
        statusCode: 500,
      });
    }

    return {
      id: response.id,
      email: credentials.email,
      name: credentials.name,
    } as AUTH;
  }

  static async signIn(credentials: AUTH) {
    const userDetails = await getDocs(
      query(this.AuthCollection, where("email", "==", credentials.email))
    );

    if (userDetails.empty) {
      throw new BackendError("User does not exist.", {
        cause: "user email is not registered.",
        statusCode: 404,
      });
    }

    const userRef = userDetails.docs?.at(0);
    const userData = userRef?.data() as AUTH;

    const isValidPassword = compareSync(
      credentials.password,
      userData?.password
    );

    if (!isValidPassword) {
      throw new BackendError("Invalid Password!", { statusCode: 400 });
    }

    return { ...userData, password: undefined, id: userRef?.id };
  }
}
