'use client'

import { useAuth } from "@clerk/nextjs"
import Link from "next/link"
import TypewriterComponent from 'typewriter-effect'
import { Button } from "./ui/button"

export const LandingHero=()=>{
    const {isSignedIn}= useAuth()

    return (
        <div className="text-white py-36 text-center">
            <div className="text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-extrabold space-y-5">
                 The Best AI Tool for 
                 <div className="m-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent options={{
                        strings:['Photo Generation','Chat Completion','Music Generation','Video Generation','Code Generation'],loop:true, autoStart:true
                    }
                    }/>
                </div>
            </div>

            <Link href={isSignedIn ? ' /dashboard': ' /sign-up'}>
                <Button variant='premium' className=" rounded-full font-semibold p-4 md:text-lg md:p-6 mb-2">
                    Start Generating For Free
                </Button>
            </Link>

            <div className="text-zinc-400 text-xs">
                    No credit card required

            </div>
            
           
        </div>
    )
}