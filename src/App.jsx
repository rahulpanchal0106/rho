import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Navbar/Nav";
import Intro from "./components/Intro/Intro";
import Pinned from "./components/Pinned/Pinned";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  

  return (
    <div>
      <Nav/>
      <Intro/>
      <Pinned/>     

      
    </div>
  );
};

export default App
