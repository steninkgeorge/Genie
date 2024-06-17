'use client'

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"
import { ArrowRight, Check, Code, ImageIcon, MessageSquare, Music, VideoIcon, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const tools=[
  {
  label:'Conversation',
  icon:MessageSquare,
  color:'text-violet-500',
  bgColor:'bg-violet-500/10',
},

{
  label:'Image ',
  icon:ImageIcon,
  color:"text-pink-700",
  bgColor:'bg-violet-500/10',

},
{
  label:'Video ',
  icon:VideoIcon,
  color:"text-orange-700",
  bgColor:'bg-violet-500/10',

},
{
  label:'Music',
  icon:Music,
  color:"text-emerald-500",
  bgColor:'bg-violet-500/10',

},
{
  label:'Code',
  icon:Code,
  color:"text-green-700",
  bgColor:'bg-violet-500/10',

},


]

export const ProModal=()=>{

    const proModal=useProModal()


    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex flex-col items-center ">
                      <div className="flex gap-x-2 items-center">
                      Upgrade to Genie Premium
                        <Badge variant='premium' className="uppercase text-sm py-1">
                            pro
                        </Badge>
                      </div>
                    </DialogTitle>
                    <DialogDescription className="space-y-2">
                        {tools.map((tool)=>(
                            <Card key={tool.label} className="justify-between flex p-3 items-center border-black/5">
                                <div className="flex p-3 items-center gap-x-4">
                                    <div className={cn('w-fit p-0.5 rounded-md',tool.bgColor)}>
                                        <tool.icon className={cn('w-6 h-6 p-1',tool.color)}/>
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                               
                                <Check className="text-primary w-4 h-4"/>
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Button className="w-full" variant='premium'>
                        upgrade
                        <Zap className="fill-white ml-2 w-4 h-4"/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}