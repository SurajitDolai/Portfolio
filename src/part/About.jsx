import myimage from '../../public/myimage.png';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from "motion/react"
import ShinyText from '../animate/ShinyText';

export default function About() {
    useGSAP(() => {
        const t = gsap.timeline();
        gsap.from('#description', {
            x: -600,
            duration: 2,
            delay: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '#description',
                scroller: 'body',
                start: 'top 80%',
                end: 'top 30%',
                scrub: 2,
            }
        })


        // gsap.from('#myimage', {
        //     x: -600,
        //     duration: 2,
        //     delay: 1,
        //     opacity: 0,
        //     scrollTrigger: {    
        //         trigger: '#myimage',
        //         scroller: 'body',
        //         start: 'top 80%',
        //         end: 'top 30%',
        //         scrub: 2,
        //     }
        // })

        gsap.to('#myimage', {
            y: 50,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            boxShadow: '0 0 20px 5px #9112BC',
        })
    })
    return (
        <div className='w-[90%] md:w-[85%]  m-auto md:mt- md:h-screen overflow-hidden' id='about' >
            <p className='md:text-3xl text-center bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent font-bold italic  border-b-2 border-gray-200 rounded-2xl p-3 md:inline-block' >About Me</p>
            <div className='flex md:flex-row flex-col-reverse  justify-between items-center md:mt-20 mt-10 gap-10 '>
                <div className='md:w-[70%]'>
                    <p className='md:w-[90%] 0 text-gray-400  border-t-0 md:mt-12 md:ps-28 text-start  font-serif overflow-hidden
                      shadow-lg shadow-violet-600 backdrop-blur-3xl  rounded-ful py-20 px-16
                    ' id='description' >
                        <ShinyText
                            text="Hi, I’m Surajit Dolai — a passionate MERN Stack Developer who loves bringing ideas to life through clean, creative, and user-friendly web applications."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        /><br /> <br />
                        <ShinyText
                            text=" I enjoy solving real-world problems with code and continuously exploring new technologies to improve my skills."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />  <br /> <br />

                        <ShinyText
                            text="  I’ve completed internships in MERN Stack and PHP, where I gained practical experience in both frontend and backend development.
                        I love working on projects that challenge me to think differently and help me grow as a developer."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />    <br /> <br />

                        <ShinyText
                            text="  When I’m not coding, I enjoy learning new tools, improving my design sense, and experimenting with innovative ideas.
                        My goal is to build impactful digital solutions that make people’s lives easier and inspire creativity."
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />
                    </p>
                </div>
                <div className='md:w-[30%]  flex justify-center items-center px-5 pt-6 pb-25'>
                    <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, }}
                        transition={{ duration: 0.8, ease: "easeInOut", type: "tween" }}
                        viewport={{ once: false }}

                        className='h-50 w-50 md:h-67 md:w-67 rotate-45  flex justify-center items-center  overflow-hidden pt-10 ps-8 border-s-8 border-t-8   drop-shadow-md drop-shadow-cyan-600 shadow-lg shadow-cyan-600/50 z-50 backdrop-blur-lg ' id='myimage'>
                        <img src={myimage} alt={myimage} className='rotate-[-45deg] w-[200px] md:w-[400px] bg-cover bg-center drop-shadow-2xl drop-shadow-cyan-600' />
                    </motion.div>
                </div>

            </div>
        </div>
    )
}
