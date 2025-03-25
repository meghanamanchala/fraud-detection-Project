import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string; // Add role field to User type
  }

  interface Session extends DefaultSession {
    user: User; // Extend user type in session
  }

  interface JWT {
    role?: string; // Add role to JWT token
  }
}
