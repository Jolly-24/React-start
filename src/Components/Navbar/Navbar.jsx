import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <>
            <nav className="bg-primary text-white py-8 fixed top-0 right-0 left-0 z-30">
                <div className="container flex items-center justify-between relative px-4">
                    <h1 className="uppercase text-2xl lg:text-4xl font-semibold">
                        <NavLink to="/">Start Framework</NavLink>
                    </h1>
                    <ul
                        className={`lg:flex gap-6 items-center text-xl font-semibold lg:flex-row flex-col lg:static ${
                            isMenuOpen ? "flex" : "hidden"
                        } absolute bottom-[-238px] bg-primary left-0 w-full py-10 lg:py-0 lg:w-auto`}
                    >
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "bg-second px-3 py-2 rounded-xl" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) =>
                                    isActive ? "bg-second px-3 py-2 rounded-xl" : ""
                                }
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "bg-second px-3 py-2 rounded-xl" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div
                        className="lg:hidden cursor-pointer text-xl ml-5"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
        </>
    );
}
