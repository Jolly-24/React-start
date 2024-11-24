import React, { useEffect } from "react";

export default function Contactus(){
    useEffect(()=>{
        document.title="Contact"
    })
    return(
        <>
        <section className="min-h-screen pt-[150px] pb-[200px]">
            <div className="container flex items-center justify-center flex-col">
                <h2 className="uppercase text-4xl font-bold mb-5 text-center text-primary ">Contact section</h2>
                <div className="mb-5 relative before:absolute before:bg-primary before:w-20 before:h-1 before:left-10 before:top-[50%] after:absolute after:bg-primary after:w-20 after:h-1 after:right-10 after:top-[50%]">
             <i className="fa-solid fa-star text-2xl text-primary"></i>   
            </div> 
                <form action="" className="w-1/2 flex items-start justify-center flex-col gap-10">
                  
    <div class="relative w-full">
        <input type="text" id="username" name="username" class="peer form-controlme bg-transparent w-full rounded-lg text-black placeholder-transparent  px-2 ring-gray-500 focus:outline-none " placeholder="userName"/>
        <label for="username" class="absolute cursor-text left-0 -top-3 text-2xl text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-second peer-focus:text-2xl transition-all">userName</label>
    </div>
    <div class="relative w-full">
        <input type="number" id="userAge" name="userAge" class="peer form-controlme bg-transparent w-full rounded-lg text-black placeholder-transparent  px-2 ring-gray-500 focus:outline-none " placeholder="userAge"/>
        <label for="userAge" class="absolute cursor-text left-0 -top-3 text-2xl text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-second peer-focus:text-2xl transition-all">userAge</label>
    </div>
    <div class="relative w-full">
        <input type="email" id="userEmail" name="userEmail" class="peer form-controlme bg-transparent w-full rounded-lg text-black placeholder-transparent  px-2 ring-gray-500 focus:outline-none " placeholder="userEmail"/>
        <label for="userEmail" class="absolute cursor-text left-0 -top-3 text-2xl text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-second peer-focus:text-2xl transition-all">userEmail</label>
    </div>
    <div class="relative w-full">
        <input type="password" id="userPassword" name="userPassword" class="peer form-controlme bg-transparent w-full rounded-lg text-black placeholder-transparent  px-2 ring-gray-500 focus:outline-none " placeholder="userPassword"/>
        <label for="userPassword" class="absolute cursor-text left-0 -top-3 text-2xl text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-second peer-focus:text-2xl transition-all">userPassword</label>
    </div>

                    <button className="bg-second text-white py-2 px-3 rounded-xl cursor-pointer">Send Message</button>
                </form>
            </div>
        </section>
        </>
    );
}