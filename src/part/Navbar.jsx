import React, { useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
    const [active, setActive] = useState("home");
    const menuItems = [
        { id: "", label: "Home" },
        { id: "about", label: "About" },
        { id: "project", label: "Project" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    useGSAP(() => {
        const t = gsap.timeline();
        t.from("#menu", {
            y: -30,
            duration: 0.2,
            opacity: 0,
            stagger: 0.1
        })

        gsap.to("#menu", {
            duration: 0.5,
            y: 7,
            repeat: -1,
            ease:'sine.inOut',
            yoyo: true,
            stagger: 0.4
        });
      

    })
    return (
        <nav id='home' className='sticky top-0 p-0 m-0  mb-2 z-50'>
            <ul className='md:w-[40%] w-[70%]  backdrop-blur-2xl mx-auto flex  md:justify-center justify-around p-0 m-0 pt-1 pb-1  border-2 border-gray-400 shadow-md shadow-blue-100 rounded-4xl'>
                {menuItems.map((item) => (
                    <li id='menu' key={item.id} className='md:m-2 '> <a href={`#${item.id}`}

                        onClick={() => setActive(item.id)}
                        className={`md:text-[20px] text-[10px] md:p-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent p-1 font-bold  ${active === item.id ? "border-t-2 border-t-gray-400 italic rounded-3xl all ease-in-out duration-700" : ""
                            }`}
                    >
                        {item.label}
                    </a></li>
                ))}
            </ul>
        </nav>
    )
}
