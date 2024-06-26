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
import { Button } from "@/components/ui/button";
import axios from 'axios'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";
import { error } from "console";


export default function Conversation() {
    const router=useRouter()

    const proModal=useProModal()
    const [messages,setMessages]=useState<ChatCompletionRequestMessage[]>([])

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
        
        const userMessage : ChatCompletionRequestMessage ={ role: 'user', content:values.prompt}

        const newMessages=[...messages, userMessage];

        const response=await axios.post('/api/conversation',{
          messages:newMessages
      
        })

        setMessages((current)=>[...current, userMessage, response.data])
        
        form.reset()

      }catch(error:any){
        if(error?.response?.status === 403){
            proModal.onOpen()
        }else{
          toast.error("something went wrong")
        }
      }finally{
        router.refresh()
      }
       
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
                      <Input className="border-0 outline-none focus-visible:ring-transparent" disabled={isLoading} placeholder="Chat with GenieAI" {...field}/>

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
            {messages.length===0 && !isLoading && (
              <Empty label="Start a conversation"/>
            
            )}
            <div className="flex flex-col-reverse gap-y-4">
             {messages.map((message)=>(
              
              <div key={message.content} className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg", message.role === 'user' ? 'bg-white border border-black/10':'bg-muted')}>
                {message.role === 'user' ? <UserAvatar/> :<BotAvatar/>}
                <p className="text-sm">{message.content}</p>
              </div>
             ))}
            </div>
          </div>
        </div>
        

      </div>
    );
  }
  