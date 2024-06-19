'use client'

import { Montserrat } from "next/font/google"
import { useAuth } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const font = Montserrat({
    weight:'600',
    subsets:['latin']
})



export const LandingNavbar=()=>{
    const {isSignedIn}= useAuth()

    return (
        <nav className="flex p-4 bg-transparent items-center justify-between">
            <Link href='/' className="items-center flex">
                <div className="relative w-6 h-6 mr-4">
                    <Image fill alt="logo" src='/logo.png'/>
                </div>
                <h1 className={cn('text-2xl text-white font-bold',font.className)}>
                    GenieAI
                </h1>
            </Link>

            <div>
                <Link href={isSignedIn ? '/dashboard':'/sign-up'}>
                    <Button variant='outline' className="rounded-full">Get started</Button>
                </Link> 
            </div>
        </nav>
    )

}