import React, { useEffect, useState } from 'react'
import profile from '../public/t1.png'
import swiggy from '../public/swiggy.png'
import bloodbank from '../public/bloodbank.png'
import restaurant from '../public/restaurant.png'
import { ImLocation2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import './App.css';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  //  work lenis 
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // navbar menu
  const [active, setActive] = useState("home");
  const menuItems = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  // pdf download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/file/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // skill set
  const [skills, setSkills] = useState([
    { name: "HTML", value: 80 },
    { name: "CSS", value: 70 },
    { name: "JavaScript", value: 90 },
    { name: "React JS", value: 80 },
    { name: "Express JS", value: 70 },
    { name: "Node JS", value: 80 },
    { name: "PHP", value: 80 },
    { name: "Mongo DB", value: 80 },
    { name: "Mysql", value: 80 },
  ]);

  // GSAP FUNCTION
  
  useGSAP(() => {
    const t=gsap.timeline();
    t.from("#menu", {
      y: -30,
      duration: 0.2,
      opacity: 0,
      stagger: 0.1
    })

   t.from('#title p ', {
      x: -60,
      duration: 1,
      opacity: 0,
      stagger: 0.1
    })
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
    // about me animation
    gsap.from('#description', {
      x: 600,
      duration: 2,
      delay: 1,
      opacity: 0,
      scrollTrigger:{
        trigger:'#description',
        scroller:'body',
        start:'top 80%',
        end:'top 30%',
        scrub:2,
      }
    })
    // tech stack animation
    gsap.from('#stack',{
      scrollTrigger:{
        trigger:'#stack',
        start:'top 80%',
        end:'top 30%',
        scrub:3,
      },
      x:300,
      opacity:0,
      duration:3,
      width:'50%',
      ease:'power4.out',
      stagger:0.3
    })
    // project animation
    gsap.from('#project-1',{
      scale:0,
      opacity:0,
      duration:5,
      stagger:1,
      scrollTrigger:{
        trigger:'#project-1',
        scroller:'body',
        start:'top 80%',
        end:'top 30%',
        scrub:3,
      }
    })
    // education animation
    const t1=gsap.timeline({
      scrollTrigger:{
        trigger:'#education',
        scroller:'body',
        start:'top 80%',
        end:'top 30%',
        scrub:3,
      }
    });
    t1.from('#edu-1',{
      x:-300,
      opacity:0,
      duration:3,
   
    },"a")
    t1.from('#edu-2',{
      x:300,
      opacity:0,
      duration:3,
    },"a")
    t1.from('#edu-3',{
      scrollTrigger:{
        trigger:'#edu-1',
        scroller:'body',
        start:'top 80%',
        end:'top 30%',
        scrub:3,
      },
      x:300,
      opacity:0,
      duration:3,
    },"a")
    // contact animation
    const t2=gsap.timeline({
       scrollTrigger:{
        trigger:'#a_social',
        scroller:'body',
        start:'top 90%',
        end:'top 60%',
        scrub:2,
      }});

    t2.from('#a_social',{
      duration:3,
      stagger:1,
      scale:1.2,
      delay:1,
      backgroundColor:'blue',
    })

    t2.to('#social',{
     scale:1,
     duration:3,
     stagger:0.5,
    })
  })
  
  return (
    <div className='bg-gray-950  m-0 p-0 ' id='/' >

        <nav id='home' className='sticky top-0 p-0 m-0 mb-2'>
        <ul className='flex  md:justify-end justify-around p-0 m-0 pt-2 '>
          {menuItems.map((item) => (
            <li id='menu' className='md:m-2 '> <a href={`#${item.id}`}
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`md:text-[20px] text-[10px] md:p-2 bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent p-1 font-bold  ${active === item.id ? "border-b-2 border-b-blue-600 italic rounded-3xl all ease-in-out duration-700" : ""
                }`}
            >
              {item.label}
            </a></li>
          ))}
        </ul>
      </nav>
      <div className=" md:h-screen md:w-full bg-[url(https://images.unsplash.com/photo-1712230879699-e8a0a389da63?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center" id='#'>
        <div className=' md:h-screen md:w-full bg-[rgba(0,0,0,0.8)]'>
          {/* photo and heading */}
          <div className='grid md:grid-cols-2  mb-12' id=''>
            <div className=' mx-auto md:my-16' id='title'>
              <p className='md:text-5xl text-2xl my-2 bg-gradient-to-r from-white to-blue-600 to-35%  bg-clip-text text-transparent  font-bold italic'>Hello!!!</p>
              <p className='md:text-[40px] text-center my-2   bg-gradient-to-r from-white via-blue-500 to-blue-600  bg-clip-text text-transparent  font-bold italic'>I'm Surajit Dolai</p>
              <p className='md:text-2xl text-end my-2  text-amber-50  font-mono'>Full Stack Developer </p>
              <div className='text-amber-300 md:none' id='btn'>
                <button  className='bg-gray-700 font-mono px-3 py-2 rounded-3xl mt-10 hover:bg-gray-500 hover:shadow-md hover:shadow-blue-300 text-[20px] transition-all duration-600 ease-in-out cursor-pointer md:block hidden'><a href="#contact">Contact me</a></button>
              </div>
            </div>
            <div className=''>
              <img src={profile} alt="" className='md:h-[350px] md:w-[400px] w-[200px] m-auto my-4 md:my-20 ' id='img'/>
              <div className='text-amber-300 md:none'>
                <button onClick={handleDownload} id='btn' className='bg-gray-700 font-mono px-3 py-2 rounded-3xl md:mt-10 my-5 mx-auto hover:bg-gray-500 hover:shadow-md hover:shadow-amber-50 text-[20px] transition-all duration-600 ease-in-out cursor-pointer md:hidden block'>Resume Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about me */}
      <div className='w-[85%]  m-auto md:mt- md:h-screen ' id='about' >
        <p className='text-3xl bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent font-bold italic  border-b-2 border-blue-800 rounded-2xl p-3 inline-block' >About Me</p>
        <p className='md:w-[90%] text-gray-400 border-gray-800 border-t-0 md:mt-12 md:ps-28  text-2xl/13 font-mono' id='description' >
          I am a recent postgraduate and a passionate Full Stack Web Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have hands-on experience building dynamic and responsive web applications, focusing on clean code, API integration, and user-centric design. I’ve completed real-world projects like a Blood Bank Management System, and I’m eager to contribute to innovative development teams. I’m a quick learner, team player, and always motivated to grow in a collaborative environment.
        </p>
      </div>

      {/* tech stack */}
      <div className=''>
        <div className='w-[90%] m-auto md:my-4 md:py-8 md:px-2 md:h-screen'>
          <p className='text-3xl bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent font-bold italic   border-b-2 border-blue-800 rounded-2xl p-3 inline-block my-7' >Tech Stack</p>
          {/* <div className='grid md:grid-cols-6 grid-cols-2 md:gap-4 gap-2 md:mt-20 md:pt -6'>
            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <a href="https://html.com/">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="" width={100} className='mx-auto' />
                  <p className='text-center text-blue-950  font-mono ext-2xl font-bold hover:b'>HTML</p></a>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>CSS</p>
              </div>
            </div>

            <div>
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>JavaScript</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>React jS</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" width={100} className='mx-auto bg-white' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Express JS</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Node JS</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Python</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>JAVA</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>MongoDB</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>MySql</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-md shadow-gray-400 hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" width={100} className='mx-auto bg-white' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold'>Github</p>
              </div>
            </div>

            <div >
              <div className='hover:scale-105 shadow-md shadow-gray-400 hover:shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950 font-mono text-2xl font-bold'>Docker</p>
              </div>
            </div>

          </div> */}

          <div className='grid grid-cols-2'>
            {
              skills.map((skill) => {
                return (
                  <div className='flex flex-col justify-center items-center'>
                    <div className='text-white w-[80%] my-1' id='stack'>
                      <label htmlFor="" className='bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent font-bold italic text-2xl'>{skill.name}</label><br />
                      <input type="range" min={10} max={100} value={skill.value} className='w-[90%] accent-blue-800 shadow-lg shadow-blue-500 focus:shadow-[glow]' /><span>{skill.value}%</span>
                    </div>
                  </div>
                )
              })
            }
            <div>

            </div>
          </div>

        </div>
      </div>

      {/* project details */}
      <div className='w-[90%] m-auto md:my-4 md:py-0 md:px-2 md:h-screen ' id='project'>
        <p className='text-3xl bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent font-bold italic   border-b-2 border-blue-800 rounded-2xl p-3 inline-block my-10 md:my-0 '>Project</p>
        <div className='grid md:grid-cols-5 gap-10 md:my-24' >
          <div className='shadow-lg shadow-black rounded-2xl cursor-pointer' id='project-1'>
            <img src={swiggy} width={500} height={200} alt="" className='transition-all duration-500 ease-in-out hover:scale-125 ' />

            <p className='text-center text-2xl   my-3 mx-2 px-3 py-2 rounded-3xl shadow-md  shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://swiggy-clone-six-steel.vercel.app" className='bg-gradient-to-r from-white to-blue-600 to-35%  bg-clip-text text-transparent'>Demo</a></p>
            <p className='text-center text-2xl   my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://github.com/SurajitDolai/Swiggy-clone" className='bg-gradient-to-r from-white to-blue-600 to-35%  bg-clip-text text-transparent'>Github</a></p>

          </div>

          <div className='shadow-lg shadow-black rounded-2xl cursor-pointer' id='project-1'>
            <img src={restaurant} width={500} height={200} alt="" className='transition-all duration-500 ease-in-out hover:scale-125' />

            <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://swiggy-clone-six-steel.vercel.app" className='bg-gradient-to-r from-white to-blue-600 to-35%  bg-clip-text text-transparent'>Demo</a></p>
            <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://github.com/SurajitDolai/Swiggy-clone" className='bg-gradient-to-r from-white to-blue-600 to-35%  bg-clip-text text-transparent'>Github</a></p>

          </div>

          <div className='shadow-lg shadow-black rounded-2xl cursor-pointer' id='project-1'>
            <img src={bloodbank} width={500} height={200} alt="" className='transition-all duration-500 ease-in-out hover:scale-125' />
            <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://swiggy-clone-six-steel.vercel.app" className='bg-gradient-to-r from-white to-blue-600 to-35%  bg-clip-text text-transparent'>Demo</a></p>
            <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://github.com/SurajitDolai/Swiggy-clone" className='bg-gradient-to-r from-white to-blue-600 to-35%  bg-clip-text text-transparent'>Github</a></p>

          </div>
        </div>

      </div>

      {/* Education */}
      <div className='w-[90%]  m-auto my-5 md:my-0 md:h-screen ' id='education' >
        <span className=' inline-block text-3xl bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent font-bold italic  border-b-2 border-blue-800 rounded-2xl p-3  my-5 mx-auto  md:my-0'>Education</span>
        <div className='md:mt-5 md:my-2 py-4' id='edu-1'>
          <div className='md:w-[60%] bg-gray-950 py-2 shadow-lg text-gray-400 ring-1 shadow-gray-500 rounded-e-full  text-[20px] text-center font-serif  transition-all duration-700 ease-in-out cursor-pointer ' >
            <p className='font-mono'>Meghnad Saha Institute of Technology</p>
            <p className='font-mono'>Master of Computer Applications (MCA)</p>
            <p className='font-mono'>2023 - 2025</p>
            <p className='font-mono'>Kolkata</p>
          </div>
        </div>
        <div className=' my-5 py-4 ' id='edu-2'>
          <div className='md:w-[60%]  py-2 shadow-lg text-gray-400 bg-gray-950 ring-1 shadow-gray-500 rounded-s-full ms-auto  cursor-pointer  text-[20px] text-center font-serif '>
            <p className='font-mono'>Mahishadal Raj College</p>
            <p className='font-mono'>Bachelor of Computer Applications (BCA)</p>
            <p className='font-mono'>2020 - 2023</p>
            <p className='font-mono'>Mahishadal, East Medinipur</p>
          </div>
        </div>
        <div className=' my-5 py-4' id='edu-1'>
          <div className='md:w-[60%] bg-gray-950 py-2 shadow-lg text-gray-400 ring-1 shadow-gray-500 rounded-e-full text-[20px] text-center font-serif  cursor-pointer ' >
            <p className='font-mono'>Chaksimulia Kamakhya Vidyapith</p>
            <p className='font-mono'>High Secondary (H.S)</p>
            <p className='font-mono'>2018 - 2020</p>
            <p className='font-mono'>Thekuachak, East Medinipur</p>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className=''>
        <div className='w-[85%] m-auto  mb-0 rounded-3xl  md:block md:h-screen' id='contact'  >
          <p className='text-3xl bg-gradient-to-r from-white to-blue-700 bg-clip-text text-transparent font-bold italic  border-b-2 border-blue-800 rounded-2xl p-3 inline-block  md:mb-20 mb-6' >Contact</p>
          <div className='grid md:grid-cols-2 mt-[18%]'>
            <div className='ps-8'>
              <p className='ps-28 text-2xl text-white font-serif my-3'>Kolkata</p>
              <p className='text-white ps-18 md:ps-20 flex  my-5'><PiPhoneDuotone className=' mt-1 mr-1' />phone: 8001328027</p>
              <p className='flex text-white ps-18 md:ps-20 my-5' > <ImLocation2 className=' mt-1 mr-1 ' /> Address: <br />
                Garia Station ,Kolkata <br />
                Dr BR Ambedkar Road , 700084
              </p>
            </div>
            <div className=' md:ps-20'>
              <p className='text-center text-2xl text-white font-serif my-3'>Contact Info</p>
              {/* <p className='text-white ps-20 flex my-2'><TfiEmail className=' mt-1 mr-1' /> Email: surajitdolai080@gmail.com</p> */}
              <div className='flex justify-evenly'>
                <a id='a_social' href="mailto:surajit.dev.2001@gmail.com" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><TfiEmail className='text-2xl text-white hover:text-red-400' id='social'/></a>
                <a id='a_social' href="https://github.com/SurajitDolai" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaGithub className='text-2xl text-white hover:text-black' id='social'/></a>
                <a id='a_social' href="https://www.linkedin.com/in/surajit-dolai-282271321/" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaLinkedin className='text-2xl text-white hover:text-blue-600 ' id='social'/></a>
                <a id='a_social' href="#" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaFacebook className='text-2xl text-white hover:text-blue-400' id='social'/></a>
                <a id='a_social' href="#" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaInstagramSquare className='text-2xl text-white hover:text-pink-600' id='social'/></a>
              </div>
            </div>
          </div>
          <div className='text-white flex flex-col justify-center items-center  pb-2 mt-[6%]'>
            <p className='flex font-mono text-[10px] md:text-[17px]'><FaRegCopyright className='mt-1 font-mono' />2025 Surajit. All rights reserved</p>
            <p className='font-mono text-[10px] md:text-[16px]'>Designed by Surajit Dolai</p>
          </div>
        </div>
      </div>
    </div>
  )
}
