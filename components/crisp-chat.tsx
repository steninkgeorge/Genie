"use client"

import { useEffect } from "react"
import {Crisp} from 'crisp-sdk-web'

export const CrispChat=()=>{
    useEffect(()=>{
        Crisp.configure("04150f57-5878-46fe-b0bf-ee137a2a4f9c")
    },[])


    return null
}