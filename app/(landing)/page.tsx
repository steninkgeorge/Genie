import { LandingNavbar } from "@/components/landingComponent";
import { LandingContent } from "@/components/landingContent";
import { LandingHero } from "@/components/landingHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage=()=>{
    return (
       <div className="h-full">
            <LandingNavbar/>
            <LandingHero/>
            <LandingContent/>

       </div>
    )
}

export default LandingPage;
