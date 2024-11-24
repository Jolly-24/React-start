import React from "react";

export default function Footer(){
    return(
        <>
       <footer className="bg-primary absolute bottom-0 right-0 left-0 pb-32 pt-24 text-white">
        <div className="container ">
            <div className="grid md:grid-cols-12 grid-rows-3 md:grid-rows-1 gap-3 ">
                <div className="col-span-4 flex items-center flex-col justify-center">
                    <h3 className="text-3xl font-medium uppercase">Location</h3>
                    <p className="mt-2">2215 John Daniel Drive</p>
                    <p className="mt-4">Clark, MO 65243</p>
                </div>
                <div className="col-span-4 flex items-center flex-col justify-center">
                    <h3 className="text-3xl font-medium">AROUND THE WEB</h3>
                    <div className="flex items-center gap-3 mt-4">
                        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                        <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                        <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                        <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-globe"></i>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 flex items-center flex-col ">
                    <h3 className="text-3xl font-medium">ABOUT FREELANCER</h3>
                    <p className="mt-2 text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className="bg-[#111920] absolute bottom-0 right-0 left-0 py-5 text-center">
                <span>Copyright © Your Website 2021</span>
            </div>
        </div>
       </footer>
        </>
    );
}