import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import {ChatCompletionRequestMessage, Configuration , OpenAIApi} from 'openai'


const  configuration= new Configuration(({
    apiKey:process.env.OPENAI_API_KEY
}))

const openai = new OpenAIApi(configuration);

const instructionMessage : ChatCompletionRequestMessage ={
    role:"system",
    content: "You are a code generator. You must answer only in markdown code snippets along with  explanations. Use code comments for explanation"
}


export async function POST(req: Request){
    try{
        const {userId}=auth()
        const body=await req.json()
        const {messages } = body;

        if(!userId){
            return new NextResponse("unauthorized ", {status:401})

        }

        if(!configuration.apiKey){
            return new NextResponse("openai api key not configured ", {status:500})
        }

        if(!messages){
            return  new NextResponse("messages are required ", {status:400})
        }

        const freeTrial= await checkApiLimit()

        if(!freeTrial){
            return new NextResponse("free trial has expired", {status:403})
        }

        const response= await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
            messages: [instructionMessage,...messages]
        })

        await increaseApiLimit()
        return NextResponse.json(response.data.choices[0].message)

        
    }catch(error){
        console.log("[CONVERSATION ERROR]",error)
        return new NextResponse("intenal server error ", {status:500})
    }
}
