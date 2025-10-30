import React, { useEffect, useState } from 'react'


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
import Navbar from './part/Navbar'
import First_home from './part/First_home'
import About from './part/About';
import TechStack from './part/TechStack';
import Project from './part/Project';
import Skiper31Demo2 from './part/Education';
import Education from './part/Education';
import LiquidEther from './animate/LiquidEther';
import ShinyText from './animate/ShinyText';
import ContactPage from './part/ContactPage';
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  //  work lenis 
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // GSAP FUNCTION

  useGSAP(() => {
    const t = gsap.timeline();

    // tech stack animation
    // gsap.from('#stack', {
    //   scrollTrigger: {
    //     trigger: '#stack',
    //     start: 'top 80%',
    //     end: 'top 30%',
    //     scrub: 3,
    //   },
    //   x: 300,
    //   opacity: 0,
    //   duration: 3,
    //   width: '50%',
    //   ease: 'power4.out',
    //   stagger: 0.3
    // })
    // project animation
    gsap.from('#project-1', {
      scale: 0,
      opacity: 0,
      duration: 5,
      stagger: 1,
      scrollTrigger: {
        trigger: '#project-1',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 60%',
        scrub: 3,
      }
    })
    // education animation
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#education',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 3,
      }
    });
    t1.from('#edu-1', {
      x: -500,
      opacity: 0,
      duration: 3,

    }, "a")
    t1.from('#edu-2', {
      x: 500,
      opacity: 0,
      duration: 3,
    }, "a")
    t1.from('#edu-3', {

      scrollTrigger: {
        trigger: '#edu-1',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 3,
      },
      x: 500,
      opacity: 0,
      duration: 3,
    }, "a")
    // contact animation
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#a_social',
        scroller: 'body',
        start: 'top 90%',
        end: 'top 60%',
        scrub: 2,
      }
    });

    t2.from('#a_social', {
      duration: 3,
      y: 50,
      opacity: 0,
    
    })
  })

  return (
    <div className='bg-gradient-to-tr from-sky-800  to-black  m-0  p-0 pt-2' id='/' >

      <div style={{ width: '100%', position: 'absolute' }} className='md:h-screen'>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
         
        />
      </div>

      {/* navbar */}
        <Navbar />

      {/* home page */}
      <First_home />

      {/* about me */}
      <About />

      {/* tech stack */}
      <TechStack />

      {/* project details */}
      <Project />

      {/* Education */}
      <Education />


      {/* Contact Details */}
      <ContactPage/>
     
    </div>
  )
}
