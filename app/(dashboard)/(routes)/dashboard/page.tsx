
'use client';

import { Card } from "@/components/ui/card";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools=[
  {
  label:'Conversation',
  icon:MessageSquare,
  color:'text-violet-500',
  bgColor:'bg-violet-500/10',
  href:'/conversation'
},

{
  label:'Image ',
  icon:ImageIcon,
  href:"/image",
  color:"text-pink-700"
},
{
  label:'Video ',
  icon:VideoIcon,
  href:"/video",
  color:"text-orange-700"
},
{
  label:'Music',
  icon:Music,
  href:"/music",
  color:"text-emerald-500"
},
{
  label:'Code',
  icon:Code,
  href:"/code",
  color:"text-green-700"
},


]



export default function DashboardPage() {
  const router=useRouter()
  const handleClick=(href : string)=>{
    router.push(href)
  }

  return (
    <div>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Genie AI</h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">Explore the power of GenieAI</p>

        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {
            tools.map((tool)=>(
              <Card key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between transition cursor-pointer hover:shadow-md"
              onClick={()=>handleClick(tool.href)}
              >

                <div className="flex items-center gap-x-4 ">
                  <div className={cn('w-fit p-1 rounded-md',tool.bgColor)}>
                   <tool.icon className={cn('w-6 h-6',tool.color)}/>
                  </div>
                  <div className="font-semibold">
                  {tool.label}
                </div>

                </div>
                
                <ArrowRight className="w-6 h-6"/>
              </Card>
            ))
          }
        </div>
    </div>
  );
}
