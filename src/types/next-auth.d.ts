import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: 'patient' | 'doctor';
      mfaType?: 'email' | 'totp';
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: 'patient' | 'doctor';
    mfaType?: 'email' | 'totp';
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: 'patient' | 'doctor';
    mfaType?: 'email' | 'totp';
  }
}
