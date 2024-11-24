import React, { useEffect } from "react";
import userImage from "../../assets/images/avataaars.svg"

export default function Home(){
    useEffect(()=>{
        document.title="Home"
    })
    return(
        <>
        <section className="bg-second w-full min-h-screen text-white flex items-center flex-col justify-center">
            <div className="container flex items-center flex-col justify-center">
            <img src={userImage} alt="" className="w-60" />
            <h2 className="uppercase text-4xl font-bold mb-5 mt-10">start framework</h2> 
            <div className="mb-5 relative before:absolute before:bg-white before:w-20 before:h-1 before:left-10 before:top-[50%] after:absolute after:bg-white after:w-20 after:h-1 after:right-10 after:top-[50%]">
             <i className="fa-solid fa-star text-2xl"></i>   
            </div> 
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
        </>
    );
}