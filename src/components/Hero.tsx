import react from "react"

import React from 'react'
import Navbar from "@/components/Navbar";

const Hero = () => {
    return (
        <div id="Hero" className=" min-h-screen bg-cover bg-center bg-no-repeat bg-centre bg-[url('/profile-pic.png')]"

            style={{ backgroundSize: "15%" }} >



            <Navbar />
            


            <div className="container grid lg:grid-cols-2 h-  { calc (100vh-60px)] text-centre">
                <div className="text-[100px] sm:text-[30px] font-bold leading-tight flex justify-center items-center  text-centre ">
                    <div className="hidden lg:block">


                        <div>

                        </div>



                    </div>

                </div>

            </div>

            <ul className=" hover:first-letter:border-l-amber-300 flex justify-center font-bold gap-10 lg:gap-16 ">
                <li className="menulink bg-black"><a href="#Hero">Home</a></li>
                <li className="menulink bg-black"> <a href="#About"></a>About</li>
                <li className="menulink bg-black"> <a href="#About"></a>Skills</li>
                <li className="menulink bg-black"> <a href="#Projects"></a>Projects</li>
                <li className="menulink bg-black"><a href="#Skills"></a>Skills</li>
    
            </ul>
<div>
    
</div>

        </div>
    )
}

export default Hero
