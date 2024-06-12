'use client'

import { Heading } from "@/components/heading";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import * as z from 'zod'
import { ArrowRight, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";



export default function Conversation() {

    const form = useForm<z.infer<typeof formSchema>>(
      {
        resolver:zodResolver(formSchema),
        defaultValues:{
        prompt:''
      }}
    )

    const isLoading= form.formState.isSubmitting;

    const onSubmit=async (values : z.infer<typeof formSchema>)=>{
      console.log(values)
    }

    return (
      <div>
        <Heading 
          title='Conversation' 
          description="Our most advanced conversational AI" 
          icon={MessageSquare} 
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"

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
                      <Input className="border-0 outline-none focus-visible:ring-transparent" placeholder="" {...field}/>
                    
                    </FormControl>

                  </FormItem>
              
                
                )}
              >
                
              </FormField>
            </form>
         
          </Form>
          </div>
        </div>
        

      </div>
    );
  }
  