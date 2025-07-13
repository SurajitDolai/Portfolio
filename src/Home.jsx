import React, { useEffect } from 'react'
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
import { NavLink } from 'react-router-dom';
import './App.css';
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/file/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-gray-950 md:pb-6 m-0 p-0' id='/'>
    
      <div className="bg-[url('https://images.unsplash.com/photo-1437419764061-2473afe69fc2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D')] md:bg-cover bg-center md:h-screen md:w-full">
        <div className='bg-[rgba(0,0,0,0.6)] md:h-screen md:w-full'>
          <nav id='home' >
            <ul className='flex  md:justify-end justify-around' data-aos="fade-up-right">
              <Link to="/" smooth={true} duration={500} className='mt-5'>
                <NavLink to='/' className='md:text-[20px] text-[10px] font-serif text-white  rounded-2xl md:m-2 mt-2  py-4 px-3   hover:bg-blue-500 hover:shadow-xl/30 hover:shadow-blue-700 hover:border-blue-800'>
                  Home
                </NavLink>
              </Link>
              <Link to="about" smooth={true} duration={500} className='mt-5'>
                <NavLink to='/about' className='md:text-[20px] text-[10px]  font-serif text-white  md:m-2 mt-2 py-4 px-3  rounded-2xl  hover:bg-blue-500 hover:shadow-xl/30 hover:shadow-blue-700 hover:border-blue-800 '>
                  About me</NavLink>
              </Link>

              <Link to="education" smooth={true} duration={500} className='mt-5'>
                <NavLink to='/education' className='md:text-[20px] text-[10px]   font-serif text-white rounded-2xl  md:m-2 mt-2 py-4 px-3  hover:bg-blue-500 hover:shadow-xl/30 hover:shadow-blue-700 hover:border-blue-800'>Education</NavLink>
              </Link>

              <Link to="project" smooth={true} duration={500} className='mt-5'>
                <NavLink to='project' className='md:text-[20px] text-[10px] rounded-2xl  font-serif text-white  md:m-2 mt-2 py-4 px-3  hover:bg-blue-500 hover:shadow-xl/30 hover:shadow-blue-700 hover:border-blue-800 '>Project</NavLink>
              </Link>

              <Link to="contact" smooth={true} duration={500} className='mt-5'>
                <NavLink to='/contact' className='md:text-[20px] text-[10px] rounded-2xl   font-serif text-white  md:m-2 mt-2 py-4 px-3  hover:bg-blue-500 hover:shadow-xl/30 hover:shadow-blue-700 hover:border-blue-800 '>Contact</NavLink>
              </Link>
            </ul>
          </nav>

          {/* photo and heading */}
          <div className='grid md:grid-cols-2 mt-6 mb-12' id=''>
            <div className=' mx-auto md:my-16' data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom">
              <h1 className='md:text-5xl text-2xl   text-amber-50  font-mono'>Hii...</h1>
              <h1 className='md:text-5xl text-2xl   text-amber-50  font-mono'>I'm Surajit </h1>
              <h1 className='md:text-2xl text-center  text-amber-50  font-mono'>Full Stack Developer </h1>
              <div className='text-amber-300 md:none'>
                <button onClick={handleDownload} className='bg-gray-700 font-mono px-3 py-2 rounded-3xl mt-10 hover:bg-gray-500 hover:shadow-md hover:shadow-amber-50 text-[20px] transition-all duration-600 ease-in-out cursor-pointer md:block hidden'>Resume Download</button>
              </div>
            </div>
            <div className=''>
              <img src={profile} alt="" className='md:h-[350px] md:w-[400px] w-[200px] m-auto my-4 md:my-20 ' data-aos="flip-left" />
               <div className='text-amber-300 md:none'>
                <button onClick={handleDownload} className='bg-gray-700 font-mono px-3 py-2 rounded-3xl md:mt-10 my-5 mx-auto hover:bg-gray-500 hover:shadow-md hover:shadow-amber-50 text-[20px] transition-all duration-600 ease-in-out cursor-pointer md:hidden block'>Resume Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about me */}
      <div className='w-[85%] m-auto md:mt-56' id='about' >
        <p className='text-3xl text-white font-serif  border-b-2 border-blue-800 rounded-2xl p-3 inline-block' data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">About Me</p>
        <p className='md:w-[70%] text-gray-400 border-gray-800 border-t-0 md:mt-12  text-2xl/13 font-mono  ' data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          I am a recent postgraduate and a passionate Full Stack Web Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have hands-on experience building dynamic and responsive web applications, focusing on clean code, API integration, and user-centric design. I’ve completed real-world projects like a Blood Bank Management System, and I’m eager to contribute to innovative development teams. I’m a quick learner, team player, and always motivated to grow in a collaborative environment.
        </p>
      </div>

      {/* tech stack */}
      <div className='w-[85%] m-auto md:my-4 md:py-8 md:px-2 '>
        <p className='text-3xl text-white font-serif  border-b-2 border-blue-800 rounded-2xl p-3 inline-block my-7' data-aos="fade-up-right">Tech Stack</p>
        <div className='grid md:grid-cols-6 grid-cols-2 md:gap-4 gap-2 md:mt-20 md:pt -6'>
          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <a href="https://html.com/">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="" width={100} className='mx-auto' />
                <p className='text-center text-blue-950  font-mono ext-2xl font-bold hover:b'>HTML</p></a>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>CSS</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>JavaScript</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>React jS</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" width={100} className='mx-auto bg-white' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Express JS</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Node JS</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Python</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>JAVA</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>MongoDB</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-gray-400 shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>MySql</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-md shadow-gray-400 hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" width={100} className='mx-auto bg-white' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold'>Github</p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className='hover:scale-105 shadow-md shadow-gray-400 hover:shadow-md  hover:shadow-blue-700 hover:bg-gray-200 hover:rounded-4xl md:my-3 transition-all duration-500 ease-in-out' >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="" width={100} className='mx-auto' />
              <p className='text-center text-blue-950 font-mono text-2xl font-bold'>Docker</p>
            </div>
          </div>

        </div>
      </div>

      {/* project details */}
      <div className='w-[85%] m-auto md:my-4 md:py-8 md:px-2 ' id='project'>
        <p className='text-3xl text-white font-serif  border-b-2 border-blue-800 rounded-2xl p-3 inline-block my-10 md:my-20' data-aos="fade-down">Project</p>
        <div className='grid md:grid-cols-5 gap-10 md:my-24' >
          <div className='shadow-lg shadow-black rounded-2xl cursor-pointer' data-aos="zoom-in-up">
            <img src={swiggy} width={500} height={200} alt="" className='transition-all duration-500 ease-in-out hover:scale-125 '/>
            
              <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://swiggy-clone-six-steel.vercel.app" className='text-white'>Demo</a></p>
              <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://github.com/SurajitDolai/Swiggy-clone" className='text-white'>Github</a></p>
           
          </div>

          <div className='shadow-lg shadow-black rounded-2xl cursor-pointer' data-aos="zoom-in-up">
            <img src={restaurant} width={500} height={200} alt="" className='transition-all duration-500 ease-in-out hover:scale-125'/>
            
              <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://swiggy-clone-six-steel.vercel.app" className='text-white'>Demo</a></p>
              <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://github.com/SurajitDolai/Swiggy-clone" className='text-white'>Github</a></p>
           
          </div>

          <div className='shadow-lg shadow-black rounded-2xl cursor-pointer' data-aos="zoom-in-up">
            <img src={bloodbank} width={500} height={200} alt="" className='transition-all duration-500 ease-in-out hover:scale-125'/>
            
              <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://swiggy-clone-six-steel.vercel.app" className='text-white'>Demo</a></p>
              <p className='text-center text-2xl text-white  my-3 mx-2 px-3 py-2 rounded-3xl shadow-md shadow-amber-50 font-mono hover:scale-90 hover:bg-fuchsia-500'><a href="https://github.com/SurajitDolai/Swiggy-clone" className='text-white'>Github</a></p>
           
          </div>
        </div>

      </div>




      {/* Education */}
      <div className='w-[85%] m-auto my-5 md:my-0' id='education' >
        <p className='text-3xl text-white font-serif  border-b-2 border-blue-800 rounded-2xl p-3 inline-block my-5 md:my-0' data-aos="zoom-in-up">Education</p>
        <div className='md:mt-5 md:my-2 py-4' data-aos="fade-up-left">
          <div className='md:w-[80%] py-2  shadow-lg text-gray-400 shadow-cyan-500/50 rounded-2xl ms-auto text-2xl text-center font-serif hover:text-4xl transition-all duration-700 ease-in-out cursor-pointer hover:rounded-4xl' >
            <p className='font-mono'>Meghnad Saha Institute of Technology</p>
            <p className='font-mono'>Master of Computer Applications (MCA)</p>
            <p className='font-mono'>2023 - 2025</p>
            <p className='font-mono'>Kolkata</p>
          </div>
        </div>
        <div className=' my-5 py-4' data-aos="zoom-in-up">
          <div className='md:w-[80%]  py-2 shadow-lg text-gray-400 shadow-cyan-500/50 rounded-2xl  m-auto transition-all duration-700 ease-in-out cursor-pointer hover:rounded-4xl text-2xl text-center font-serif hover:text-4xl'>
            <p className='font-mono'>Mahishadal Raj College</p>
            <p className='font-mono'>Bachelor of Computer Applications (BCA)</p>
            <p className='font-mono'>2020 - 2023</p>
            <p className='font-mono'>Mahishadal, East Medinipur</p>
          </div>
        </div>
        <div className=' my-5 py-4' data-aos="fade-down-right">
          <div className='md:w-[80%] py-2 shadow-lg text-gray-400 shadow-cyan-500/50 rounded-2xl  text-2xl text-center font-serif hover:text-4xl transition-all duration-700 ease-in-out cursor-pointer hover:rounded-4xl' >
            <p className='font-mono'>Chaksimulia Kamakhya Vidyapith</p>
            <p className='font-mono'>High Secondary (H.S)</p>
            <p className='font-mono'>2018 - 2020</p>
            <p className='font-mono'>Thekuachak, East Medinipur</p>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className='w-[85%] m-auto mt-10 mb-0 rounded-3xl shadow-md shadow-amber-50 bg-black md:block' id='contact' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >
        <p className='text-3xl text-white font-serif  border-b-2 border-blue-800 rounded-2xl p-3 inline-block md:mt-3 md:mb-20 mb-6' data-aos="zoom-in-up">Contact</p>
        <div className='grid md:grid-cols-2' data-aos="zoom-in-up" >
          <div className=''>
            <p className='ps-28 text-2xl text-white font-serif my-3'>Kolkata</p>
            <p className='text-white ps-18 md:ps-20 flex  my-2'><PiPhoneDuotone className=' mt-1 mr-1' />phone: 8001328027</p>
            <p className='flex text-white ps-18 md:ps-20 my-2' > <ImLocation2 className=' mt-1 mr-1 ' /> Address: <br />
              Garia Station ,Kolkata <br />
              Dr BR Ambedkar Road , 700084
            </p>
          </div>
          <div className=' md:ps-20'>
            <p className='text-center text-2xl text-white font-serif my-3'>Contact Info</p>
            {/* <p className='text-white ps-20 flex my-2'><TfiEmail className=' mt-1 mr-1' /> Email: surajitdolai080@gmail.com</p> */}
            <div className='flex justify-evenly'>
              <a href="mailto:surajitdolai080@gmail.com" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><TfiEmail className='text-2xl text-white hover:text-red-400' /></a>
              <a href="https://github.com/SurajitDolai" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaGithub className='text-2xl text-white hover:text-black' /></a>
              <a href="https://www.linkedin.com/in/surajit-dolai-282271321/" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaLinkedin className='text-2xl text-white hover:text-blue-600 ' /></a>
              <a href="#" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaFacebook className='text-2xl text-white hover:text-blue-400' /></a>
              <a href="#" className='border border-amber-50 p-2 shadow-md shadow-amber-50 rounded-3xl'><FaInstagramSquare className='text-2xl text-white hover:text-pink-600' /></a>
            </div>
          </div>
        </div>
        <div className='text-white flex flex-col justify-center items-center mt-5 pb-2'>
          <p className='flex font-mono text-[10px] md:text-[17px]'><FaRegCopyright className='mt-1 font-mono' />2025 Surajit. All rights reserved</p>
          <p className='font-mono text-[10px] md:text-[16px]'>Designed by Surajit Dolai</p>
        </div>
      </div>
    </div>
  )
}
