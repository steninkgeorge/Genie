'use client'

import { Heading } from "@/components/heading";
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import {Video } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import axios from 'axios'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";


export default function VideoPage() {
    const proModal=useProModal()
    const router=useRouter()
    const [video,setVideo]=useState<string>()

    const form = useForm<z.infer<typeof formSchema>>(
      {
        resolver:zodResolver(formSchema),
        defaultValues:{
        prompt:''
      }}
    )

    const isLoading= form.formState.isSubmitting;

    const onSubmit=async (values : z.infer<typeof formSchema>)=>{
      try{

        setVideo(undefined)


        const response=await axios.post('/api/video', values)
        setVideo(response.data[0])
        
        form.reset()

      }catch(error:any){
        if(error?.response?.status === 403){
          proModal.onOpen()
      }
        console.log(error)
      }finally{
        router.refresh()
      }
       
    }

    return (
      <div>
        <Heading 
          title='Video Generation' 
          description="Turn your prompt into a video" 
          icon={Video} 
          iconColor="text-orange-700"
          bgColor="bg-orange-700/10"

        />
        <div className="px-4 lg:px-8">
          <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="border w-full rounded-lg p-2 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
              <FormField
              control={form.control}
              name="prompt"
                render={({field})=>(
                
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl>
                      <Input className="border-0 outline-none focus-visible:ring-transparent" disabled={isLoading} placeholder="Alladin trailer" {...field}/>

                    </FormControl>

                  </FormItem>
              
                
                )}
              >
                
              </FormField>

              <Button variant='default' className="col-span-12 lg:col-span-2 w-full " disabled={isLoading}>Generate</Button>
            </form>
         
          </Form>
          </div>
          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="flex justify-center items-center p-8 rounded-lg w-full bg-muted ">
                <Loader/>
              </div>
            )}
            {!video && !isLoading && (
              <Empty label="generate creative videos here"/>
            
            )}
            {video && (
              <video className="w-full aspect-video mt-8 rounded-lg border bg-black" controls> 
                <source src={video}/>
              </video>
            )

            }
          </div>
        </div>
        

      </div>
    );
  }
  