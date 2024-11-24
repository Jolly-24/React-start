import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout(){
    return(
        <>
       <Navbar/>
    <div className=" pb-[400px] md:pb-[240px] ">
      <Outlet/>  
    </div>
    <Footer/>
      
        </>
    );
}