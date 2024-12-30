import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string; // Google User ID
  }
}
