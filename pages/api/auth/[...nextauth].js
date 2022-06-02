
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

export default NextAuth({

    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        }),

    ]
    ,
    database: process.env.DATABASE_URL,
    site: process.env.NEXTAUTH_URL,
    session: {
        jwt: true,
        // maxAge: 30  24  60 * 60
    },
    jwt: {
        secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnX',
        encryption: true,
    },
    secret: process.env.secret,
    debug: true
})
