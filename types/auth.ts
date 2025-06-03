export interface AUTH {
  id?: string;
  email: string;
  name?: string;
  password: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  type?: AUTH_USER_TYPE;
}

export type AUTH_USER_TYPE = "end-user" | "developer" | "admin";
