import { useGSAP } from '@gsap/react'
import { ImLocation2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function ContactPage() {

    // useGSAP(() => {
    //     const t = gsap.timeline();
    //     const t2 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#a_social',
    //             scroller: 'body',
    //             start: 'top 90%',
    //             end: 'top 60%',
    //             scrub: 2,
    //         }
    //     });

    //     t2.from('#a_social', {
    //         duration: 3,
    //         stagger: 1,
    //         scale: 1.2,
    //         delay: 1,
    //         backgroundColor: 'blue',
    //     })

    //     t2.to('#social', {
    //         scale: 1,
    //         duration: 3,
    //         stagger: 0.5,
    //     })
    // });
    return (
        <div className=''>
            <div className='w-[85%] m-auto  mb-0 rounded-3xl  md:block md:h-screen backdrop-blur-3xl bg-transparent' id='contact'  >
                <p className='text-3xl bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent font-bold italic  border-b-2 border-blue-800 rounded-2xl p-3 inline-block  md:mb-20 mb-6' >Contact</p>
                <div className='grid md:grid-cols-2 mt-[18%]'>
                    <div className='ps-8 '>
                        <p className='md:ps-28 text-2xl text-white font-serif md:my-3'>Kolkata</p>
                        <p className='text-white ps-5 md:ps-20 flex  my-5'><PiPhoneDuotone className=' mt-1 mr-1' />phone: 8001328027</p>
                        <p className='flex text-white ps-5 md:ps-20 my-5' > <ImLocation2 className=' mt-1 mr-1 ' /> Address: <br />
                            Garia Station ,Kolkata <br />
                            Dr BR Ambedkar Road , 700084
                        </p>
                    </div>
                    <div className=' md:ps-20 mt-[200px] md:mt-0' >
                        <p className='text-center text-2xl text-white font-serif my-3'>Contact Info</p>
                        {/* <p className='text-white ps-20 flex my-2'><TfiEmail className=' mt-1 mr-1' /> Email: surajitdolai080@gmail.com</p> */}
                        <div className='flex justify-evenly'>
                            <a id='a_social' href="mailto:surajit.dev.2001@gmail.com" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><TfiEmail className='text-2xl text-white hover:text-red-400' id='social' /></a>
                            <a id='a_social' href="https://github.com/SurajitDolai" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaGithub className='text-2xl text-white hover:text-black' id='social' /></a>
                            <a id='a_social' href="https://www.linkedin.com/in/surajit-dolai-282271321/" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaLinkedin className='text-2xl text-white hover:text-blue-600 ' id='social' /></a>
                            <a id='a_social' href="#" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaFacebook className='text-2xl text-white hover:text-blue-400' id='social' /></a>
                            <a id='a_social' href="#" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaInstagramSquare className='text-2xl text-white hover:text-pink-600' id='social' /></a>
                        </div>
                    </div>
                </div>
                <div className='text-white flex flex-col justify-center items-center  pb-2 mt-[6%]'>
                    <p className='flex font-mono text-[10px] md:text-[17px]'><FaRegCopyright className='mt-1 font-mono' />2025 Surajit. All rights reserved</p>
                    <p className='font-mono text-[10px] md:text-[16px]'>Designed by Surajit Dolai</p>
                </div>
            </div>
        </div>
    )
}
