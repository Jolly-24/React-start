import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/poert1.png"
import image2 from "../../assets/images/port2.png"
import image3 from "../../assets/images/port3.png"

export default function Portfolio(){

        const [overlayImage, setOverlayImage] = useState(null); 

    const images = [image1, image2, image3, image1, image2, image3]; 

    useEffect(()=>{
        document.title="Portfolio"
    })

    return(
        <>
        <section className="min-h-screen pt-[150px] pb-[200px]">
            <div className="container flex items-center justify-center flex-col">
                <h2 className="uppercase text-4xl font-bold mb-5 text-center text-primary ">portfolio component</h2>
                <div className="mb-5 relative before:absolute before:bg-primary before:w-20 before:h-1 before:left-10 before:top-[50%] after:absolute after:bg-primary after:w-20 after:h-1 after:right-10 after:top-[50%]">
             <i className="fa-solid fa-star text-2xl text-primary"></i>   
            </div> 
                <div className="grid grid-cols-12 gap-7">
                {images.map((img, index) => (
                            <div
                                key={index}
                                className="md:col-span-6 lg:col-span-4 col-span-12  relative group cursor-pointer"
                                onClick={() => setOverlayImage(img)} 
                            >
                                <img src={img} alt="" className="rounded-2xl" />
                                <div className="absolute bg-second bg-opacity-80 w-full h-full left-0 top-0 rounded-2xl text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-500 transition duration-500">
                                    <i className="fa-solid fa-plus text-6xl"></i>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </section>

        {overlayImage ? (
                <div
                    className="fixed inset-0 bg-primary bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setOverlayImage(null)}
                >
                    <img
                        src={overlayImage}
                        alt="Overlay"
                        className="max-w-full max-h-full rounded-2xl"
                    />
                </div>
            ):(
                ""
            )}
        </>
    );
}


