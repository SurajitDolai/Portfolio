import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TechStack() {
  //    const [skills, setSkills] = useState([
  //   { name: "HTML", value: 80 },
  //   { name: "CSS", value: 70 },
  //   { name: "JavaScript", value: 90 },
  //   { name: "React JS", value: 80 },
  //   { name: "Express JS", value: 70 },
  //   { name: "Node JS", value: 80 },
  //   { name: "PHP", value: 80 },
  //   { name: "Mongo DB", value: 80 },
  //   { name: "Mysql", value: 80 },
  // ]);


  useGSAP(() => {
    const t = gsap.timeline();
    gsap.from('#tech', {
      duration: 5,
      // rotate: 90,
      scale:0.5,
      // stagger:0.3,
      skewX:20,
      

      scrollTrigger: {
        trigger: '#tech',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 70%',
        scrub: true,
      },
      opacity: 0,
      x: -80,
    });

     gsap.from('#tech1', {
      duration: 5,
      // rotate: 90,
      scale: 0.5,
      // stagger:0.3,
      skewX:-20,
      
      scrollTrigger: {
        trigger: '#tech1',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 70%',
        scrub: true,
      },
      opacity: 0,
      x: 80,
    });

  });
  return (
    <div className='overflow-hidden'>
      <div className='w-[90%] m-auto md:my-4 md:py-8 md:px-2 md:h-screen'>
        <p className='text-3xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent font-bold italic   border-b-2 border-gray-200 rounded-2xl p-3 inline-block my-7' >Tech Stack</p>
        <div className='grid md:grid-cols-8 grid-cols-2 md:gap-6 gap-2 md:mt-20 md:pt -6'>

          <div className='bg-orange-900 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech">
            <a href="https://html.com/">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
              {/* <p className='text-center text-white  font-mono ext-2xl font-bold pt-1 hidden group-hover:block group-hover:transition-all duration-700 ease-in-out'>id="tech"HTML</p> */}
            </a>
          </div>

          <div className='bg-blue-900 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out ' id="tech" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>CSS</p> */}
          </div>

          <div className='bg-yellow-400 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>JavaScript</p> */}
          </div>

          <div className='bg-sky-800 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>React jS</p> */}
          </div>

          <div className='bg-white rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech1">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" width={80} className='mx-auto bg-white drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Express JS</p> */}
          </div>

          <div className='bg-green-900 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech1">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Node JS</p> */}
          </div>

          <div className='bg-gradient-to-br from-blue-900 to-yellow-600 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech1">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>Python</p> */}
          </div>

          <div className='bg-gradient-to-b from-orange-800 to-sky-700 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech1">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>JAVA</p> */}
          </div>

          <div className='bg-green-600 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>MongoDB</p> */}
          </div>

          <div className='bg-sky-500 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-white' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold hover:b'>MySql</p> */}
          </div>

          <div className='bg-white rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="" width={80} className='mx-auto bg-white drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold'>Github</p> */}
          </div>

          <div className='bg-sky-400 rounded-full py-5 hover:shadow-lg hover:shadow-lime-50 transition-all duration-700 ease-in-out' id="tech">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="" width={80} className='mx-auto drop-shadow-lg drop-shadow-black' />
            {/* <p className='text-center text-blue-950 font-mono text-2xl font-bold'>Docker</p> */}
          </div>

        </div>

        {/* <div className='grid grid-cols-2'>
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
          </div> */}

      </div>
    </div>
  )
}

//  initial={{y:100, opacity:0}}
//               whileInView={{y:0, opacity:1}}
//               transition={{duration:1}}
//               exit={{y:-100,opacity:0}}
//               viewport={{once:false,amount:0.2}}