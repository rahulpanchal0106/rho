import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Navbar/Nav";
import Intro from "./components/Intro/Intro";
import Pinned from "./components/Pinned/Pinned";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Loading from "./components/Loading/Loading";
import Resume from "./components/Resume/Resume";
import ContactForm from "./components/Contact/Contact";
import SocialMediaLinks from "./components/Socials/Socials";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {isLoading?<Loading/>:null}
      
        <Nav />
        <Intro />
        <h1>These are My Favourites</h1>
        <Projects />
        <h1 id="skillsContainer">I've learned some tech and beyond,</h1>
        <Skills />
        <h1 id="allmywork">Using the tech, I've worked on a lot of good stuff</h1>
        <Pinned />
        <h1 id="cv">Here I am, Looking For a Job </h1>
        <Resume/>
        <h1 id="contact">Did you like it? Tell me about your experience here,</h1>
        <ContactForm/>
        <h1>And if you want to connect with me...</h1>
        <SocialMediaLinks/>
    </div>
  );
};

export default App;
