import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import {prisma} from "@/lib/index"
if(!process.env.CLIENT_ID || ! process.env.CLIENT_SECRET){
      throw new Error("Cient id and secret key of github is missing")
}
export const {handlers:{GET,POST},auth,signIn,signOut} = NextAuth({
      adapter:PrismaAdapter(prisma),
      providers:[
            GithubProvider({
                     clientId:process.env.CLIENT_ID,
                     clientSecret:process.env.CLIENT_SECRET,
            })
      ],
      callbacks:{
            async session ({user,session}){
                  if(user && session){
                      session.user.id = user.id
                  }
                  return session
            }
      }
})
