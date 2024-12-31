const { default: NextAuth } = require("next-auth");
import { connectDB } from "@/lib/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import FaceBookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        } else {
          const db = await connectDB();
          const user = await db.collection("users").findOne({ email: email });
          if (!user) {
            return null;
          } else {
            const passwordMatched = bcrypt.compareSync(
              password,
              user?.password
            );
            // console.log(passwordMatched);
            if (!passwordMatched) {
              
              return null;
            } else {
              return user;
            }
          }
        }
      },
    }),
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
    FaceBookProvider({
        clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
    }),
    LinkedInProvider({
        clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({user, account}) {
        console.log('account', account?.provider)
        if(account.provider == 'google' || account.provider == 'facebook'){
            console.log('working', "inside googleProvider")
            const db = await connectDB();
            const userCollection = await db.collection('users');
            const registeredUser = await userCollection.findOne({email: user?.email});
            console.log(registeredUser, 'registered user')
            if(!registeredUser){
                console.log('working inserting')
                const res = await userCollection.insertOne(user);
                if(res.acknowledged){
                    return user
                }
            }else{
                return user
            }
        }else{
            return user
        }
    }
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
