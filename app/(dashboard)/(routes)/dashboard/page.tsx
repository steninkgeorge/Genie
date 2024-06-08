
'use client';

import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const tools=[{
  label:'Conversation',
  icon:MessageSquare,
  color:'text-violet-500',
  bgColor:'bg-violet-500/10',
  href:'/conversation'
}]



export default function DashboardPage() {
  return (
    <div>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Genie AI</h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">chat with GenieAI</p>

        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {
            tools.map((tool)=>(
              <Card key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between transition cursor-pointer hover:shadow-md">

              </Card>
            ))
          }
        </div>
    </div>
  );
}
