import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
  callbacks: {
    async jwt({ token, account }) {
      token.userRole = 'admin';
      if (account) token.account = JSON.stringify(account);
      return token;
    },
  },
};

export default NextAuth(authOptions);
