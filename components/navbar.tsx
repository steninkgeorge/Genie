
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

interface apiLimitCountpProps{
    apiLimitCount: number
}

const Navbar=({apiLimitCount}:apiLimitCountpProps)=>{
    return (
        <div className="flex items-center p-4 ">
            <MobileSidebar apiLimitCount={apiLimitCount}/>
        <div className=" flex w-full justify-end ">
            <UserButton afterSignOutUrl="/"/>
        </div>
        </div>
        
    )
}

export default Navbar;