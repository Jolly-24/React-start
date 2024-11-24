import React, { useEffect } from "react";

export default function About(){
    useEffect(()=>{
        document.title="About"
    })
    return(
        <>
        <section className="bg-second w-full min-h-screen text-white flex items-center flex-col justify-center">
            <div className="container flex items-center flex-col justify-center">
            <h2 className="uppercase text-4xl font-bold mb-5">about component</h2>  
            <div className="mb-5 relative before:absolute before:bg-white before:w-20 before:h-1 before:left-10 before:top-[50%] after:absolute after:bg-white after:w-20 after:h-1 after:right-10 after:top-[50%]">
             <i className="fa-solid fa-star text-2xl "></i>   
            </div> 
             <div className="grid grid-cols-12 gap-5 px-5">
                <div className="md:col-span-6 col-span-12 text-lg">
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </div>
                <div className="md:col-span-6 col-span-12 text-lg">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.                </div>
                </div> 
            </div>
        </section>
        </>
    )
}