import NextAuth from "next-auth";
import { verifyPassword } from "../../../lib/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Getuser } from "../cliente";

export default NextAuth({
  session: {
    jwt: true,
  },
  site: process.env.SITE_NAME || "http://localhost:3000",
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const userEmail = { email: credentials.email };
        const user = await Getuser(userEmail);

        if (!user) {
          throw new Error("usuario não existe.");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("verifique a senha.");
        }

        return { email: user.email, name: user.FIRST_NAME };
      },
    }),
  ],
});
