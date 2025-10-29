import profile from '../../public/t1.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function First_home() {
    useGSAP(() => {
        const t = gsap.timeline();
        t.from('#left', {
            x: -400,
            duration: 1,
            opacity: 0,
            stagger: 0.1
        }, ['leftright'])
        t.from('#right', {
            x: 400,
            duration: 1,
            opacity: 0,
            stagger: 0.1
        }, ['leftright'])
        t.from('#img', {
            x: 60,
            duration: 0.5,
            opacity: 0,
        })
        t.from('#btn', {
            y: 30,
            duration: 1,
            opacity: 0,
        })
        gsap.fromTo(
            "#hello",
            { rotate: -15 },
            {
                rotate: 15,
                duration: 0.4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                transformOrigin: "bottom right",
            }
        );
        gsap.fromTo('#social1', { y: -600, opacity: 0 }, {
            y: 0,
            duration: 0.5,
            opacity: 1,
            stagger: 0.4
        })

        t.from("#social1",
            {
                x: -30,
                //    y:-30,
                duration: 0.7, // 700ms
                ease: "power1.inOut",
                repeat: -1, // infinite
                yoyo: true, // zoom back out
                stagger: 0.2,
                transformOrigin: "left right ",
            }
        );

    },[])



    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/file/Resume.pdf';
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className=" md:h-screen md:w-full b-[url(https://images.unsplash.com/photo-1712230879699-e8a0a389da63?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center " id='#'>
            <div className=' md:h-screen md:w-full bg-[rgba(0,0,0,0.8)'>
                {/* photo and heading */}
                <div className='  mb-12 overflow-hidden' id=''>
                    <div className=' mx-auto md:my-16 ' id='title'>0

                        <div className='flex justify-center gap-2'>
                            <div className='md:text-8xl text-end my-2  text-amber-50 font-bold  font-[Berlin Sans FB Demi] ' id='left'>Full Stack</div>
                            <div className='md:text-8xl text-end my-2  text-gray-500 font-bold  font-[Berlin Sans FB Demi]' id='right'> &nbsp;Developer</div>
                        </div>

                        <div className='flex flex-col justify-center items-center mt-5 gap-5'>
                            <p className='md:text-5xl text-2xl my-2 bg-amber-900 bg-gradient-to-r from-white  to-gray-500 to-60%  bg-clip-text text-transparent  font-bold  z-30'>Hello <span className='text-yellow-400 px- inline-block' id='hello'>&#128075;</span></p>
                            <p className='md:text-[40px] text-center my-2   bg-gradient-to-r from-white from-30%  to-gray-500 to-60%  bg-clip-text text-transparent  font-bold  z-30'>I'm Surajit Dolai</p>
                        </div>

                        <div className='flex justify-center items-center gap-5 mt-30'>
                            <div className='hidden' id='social1'></div>
                            <div className='hidden' id='social1'></div>
                            <a href='https://github.com/SurajitDolai' className='h-12 w-11 rounded-4xl bg-gray-600 shadow-lg  shadow-gray-400  flex justify-center items-center group
                            hover:bg-gray-800 hover:w-auto hover:p-3 hover:gap-2 transition-all duration-600 ease-in-out cursor-pointer
                            ' id='social1'>
                                <i className="fa-brands fa-github text-white text-3xl" ></i>
                                <span className='hidden group-hover:block group-hover:text-gray-300'>GitHub</span>
                            </a>

                            <a href='https://www.linkedin.com/in/surajit-dolai-282271321/' className='h-12 w-11 rounded-4xl bg-blue-800 shadow-lg shadow-blue-600 sh  flex justify-center items-center group
                              hover:bg-gray-800 hover:w-auto hover:p-3 hover:gap-2 transition-all duration-600 ease-in-out cursor-pointer
                            ' id='social1'>
                                <i className="fa-brands fa-linkedin-in text-white text-3xl" ></i>
                                <span className='hidden group-hover:block group-hover:text-gray-300'>LinkedIn</span>
                            </a>
                            <div className='h-12 w-11 rounded-4xl bg-pink-600 shadow-lg shadow-pink-400 flex justify-center items-center  group
                            hover:bg-gray-800 hover:w-auto hover:p-3 hover:gap-2 transition-all duration-600 ease-in-out cursor-pointer
                            ' id='social1'>
                                <i className="fa-brands fa-instagram text-white text-3xl" ></i>
                                <span className='hidden group-hover:block group-hover:text-gray-300'>Instagram</span>
                            </div>
                            <div className='h-12 w-11 rounded-4xl bg-blue-600 shadow-lg shadow-blue-400 flex justify-center items-center group
                             hover:bg-gray-800 hover:w-auto hover:p-3 hover:gap-2 transition-all duration-600 ease-in-out cursor-pointer
                            ' id='social1'>
                                <i className="fa-brands fa-facebook  text-white text-3xl p-0 m-0" ></i>
                                <span className='hidden group-hover:block group-hover:text-gray-300'>Facebook</span>
                            </div>
                            <div className='hidden' id='social1'></div>
                            <div className='hidden' id='social1'></div>
                        </div>

                        <div className='text-amber-300 md:none' id='btn'>
                            {/* <button className='bg-gray-700 font-mono px-3 py-2 rounded-3xl mt-10 hover:bg-gray-500 hover:shadow-md hover:shadow-blue-300 text-[20px] transition-all duration-600 ease-in-out cursor-pointer md:block hidden'><a href="#contact">Contact me</a></button> */}
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        {/* <img src={profile} alt="" className='md:h-[350px] md:w-[400px] w-[200px] m-auto my-4 md:my-20 ' id='img' />
                        <div className='text-amber-300 md:none'>
                            <button onClick={handleDownload} id='btn' className='bg-gray-700 font-mono px-3 py-2 rounded-3xl md:mt-10 my-5 mx-auto hover:bg-gray-500 hover:shadow-md hover:shadow-amber-50 text-[20px] transition-all duration-600 ease-in-out cursor-pointer md:hidden block'>Resume Download</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
