'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials= [
   
    {
        "name": "Stenin K George",
        "avatar": "M",
        "title": "Product Manager",
        "description": "Finally a tool that I can work with seamlessly :)."
    },
    {
        "name": "Akhil M",
        "avatar": "J",
        "title": "Data Analyst",
        "description": "This application has transformed the way I work!"
    },
    {
        "name": "Jobin Jose",
        "avatar": "S",
        "title": "UX Designer",
        "description": "I love the intuitive design and seamless experience."
    },
    {
        "name": "Sam A",
        "avatar": "M",
        "title": "Project Coordinator",
        "description": "This app makes project management so much easier."
    },
    {
        "name": "Jewel Maria",
        "avatar": "L",
        "title": "Marketing Specialist",
        "description": "A must-have tool for all marketing professionals."
    },
    {
        "name": "Ashwin Sabu",
        "avatar": "D",
        "title": "IT Consultant",
        "description": "An indispensable tool for IT projects."
    },
    {
        "name": "Pavan R",
        "avatar": "E",
        "title": "Graphic Designer",
        "description": "The best application for creative professionals."
    },
    {
        "name": "Roshan ",
        "avatar": "J",
        "title": "Software Developer",
        "description": "A fantastic tool that simplifies my workflow."
    }
    
]
export const LandingContent=()=>{
    return (
        <div className="px-10 pb-20">
            <h2 className="text-white text-center font-extrabold text-4xl mb-10 "> 
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item)=>(
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                               <div>
                                <p className="text-lg">{item.name}</p>
                                <p className="text-zinc-400 text-sm">{item.title}</p>
                               </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}