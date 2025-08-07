"use client"
import React from 'react'
import { Button } from './ui/button'
import { signIn } from '@/actions/signin'
import { signOut } from '@/actions/signout'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { useSession } from 'next-auth/react'
const AuthHeader = () => {
      const session = useSession()
      let authContent: React.ReactNode;
      if (session.data?.user) {
            authContent = (
                  < Popover >
                        <PopoverTrigger asChild>
                              <Avatar className='w-10 h-10 rounded-full' >
                                    <AvatarImage src={session.data.user.image || " "} />
                                    <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className='text-center' >
                              <h1>{session.data.user.name}</h1>
                              <Separator className='my-2' />
                              <form action={signOut}>
                                    <Button>Sign Out</Button>
                              </form>
                        </PopoverContent>
                  </Popover >
            )
      }
      else {
            authContent = (
                  < div className='flex justify-center items-center gap-3' >
                        <form action={signIn}>
                              <Button variant={"destructive"} type='submit' >Sign in</Button>
                        </form>
                        <form action={signIn}>
                              <Button type='submit'>Sign up</Button>
                        </form>
                  </div >
            )
      }
      return authContent;
}

export default AuthHeader