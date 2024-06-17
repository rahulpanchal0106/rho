import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Navbar/Nav";
import Intro from "./components/Intro/Intro";
import Pinned from "./components/Pinned/Pinned";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  

  return (
    <div  style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center"
    }}>
      <Nav/>


      <Intro/>
      
      <h1>These are My Favourites</h1>
      <Projects/>
      
      <h1>I have learned some tech,</h1>
      <Skills/>

      <h1 id="allmywork">Using those, I've worked on a lot of stuff</h1>
      <Pinned/>     


      
    </div>
  );
};

export default App
