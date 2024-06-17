import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Nav.css";
import { useTheme } from "../../context/ThemeContext";
import Bg from "../bg/Bg"
function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const leftRef = useRef(null);
  const liRefs = useRef([]);
  const [showSB, setShowSB] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use the theme context
  const [isPurrring,setPurring] = useState(true);
  liRefs.current = [];

  // const audioRef = useRef(new Audio('/public/purrr.mp3'));

  // const playAudio = () => {
  //   audioRef.current.play();
  // };

  // const pauseAudio = () => {
  //   setPurring(false);
  //   audioRef.current.pause();
  // };

  const addToRefs = (el) => {
    if (el && !liRefs.current.includes(el)) {
      liRefs.current.push(el);
    }
  };

  function animate(){
    const leftEl = leftRef.current;
    gsap.fromTo(
      leftEl,
      {
        y: -30,
        opacity: 0,
        duration: 1.5,
      },
      {
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      liRefs.current,
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1
      }
    );
  }

  useEffect(() => {
    animate();
    // playAudio()
    if(window.screen.width <= 600){
      setIsMobile(true);
    }else{
      setIsMobile(false);
    }
  }, []);

  return (
    <div className={`navContainer ${theme}`} style={{
      justifyContent:isMobile?"center":"space-between"
    }}>
      <div className="navLeft" ref={leftRef}>
        <a href="#introContainer">

          Rho
        </a>
        {/* <Bg/> */}
      </div>
      {
        isMobile?
        <button
          style={{background:"none",border:"none"}}
          onClick={()=>{
            setShowSB(!showSB);
            animate();
          }}>
          <div className="trigger">
            <svg viewBox="0 0 100 100" className={showSB?"active bars":"bars"} >
              <path className="line top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
              <path className="line middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
              <path className="line bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
            </svg>
          </div>
        </button>
        : null
      }
      <ul className={isMobile?"navRight-Mobile":"navRight-Desktop"} style={{
        display:isMobile?
          showSB?"flex":"none"
        :"flex",
      }}>
        <li ref={addToRefs}><a href="#projects"><div className="navText">My Favourites</div></a></li>
        <li ref={addToRefs}><a href="#allmywork"><div className="navText">My Work</div></a></li>
        <li ref={addToRefs}><a href=".skills"><div className="navText">Skills</div></a></li>
        <li ref={addToRefs}><a href=""><div className="navText">My Resume</div></a></li>
        <li ref={addToRefs}><a><div className="navText">Contact Me</div></a></li>
        {/* <li><button onClick={playAudio}>Play</button></li>
        <li><button onClick={pauseAudio}>Pause</button></li> */}
      </ul>
      {/* <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button> */}
    </div>
  );
}

export default Nav;
