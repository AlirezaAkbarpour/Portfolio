import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions : NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session:{
        strategy:'jwt',
        maxAge:60*60*60
    },
    callbacks: {
        async signIn({user,account,profile,email,credentials}){
            console.log(user)  
            return true
        },
        async session({session,user,token}){
            return session
        },
        async redirect({url,baseUrl}){
            return baseUrl+'/dashboard';
        }

      },    
      

}