import { Heading } from "@/components/heading";
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { ArrowRight, MessageSquare } from "lucide-react";




export default function Conversation() {
    return (
      <div>
        <Heading 
          title='Conversation' 
          description="Our most advanced conversational AI" 
          icon={MessageSquare} 
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"

        />
      </div>
    );
  }
  