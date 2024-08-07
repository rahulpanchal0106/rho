import gsap from "gsap";
import "./intro.css"
import { useEffect, useRef, useState } from "react";
import Cat from "../Cat"
function Intro(){
    const [isMobile, setIsMobile] = useState(false);
    const h1Refs = useRef([]);
    const addToRefs = (el) => {
        if (el && !h1Refs.current.includes(el)) {
          h1Refs.current.push(el);
        }
      };

    useEffect(()=>{
        const tl = gsap.timeline();
        tl.fromTo(h1Refs.current,{
            y: -30,
            opacity:0,
            
        },{
            y:0,
            opacity:1,
            duration: 1,
            stagger: 1,
            delay: 1.5,
        })

        // tl.fromTo(h1Refs.current, {
        //     y:-30,
        //     opacity: 0
        // },{
        //     y:0,
        //     opacity:1,

        //     stagger: 1,
        //     repeat: -1 
        // })
        if(window.screen.width <= 600){
            setIsMobile(true);
          }else{
            setIsMobile(false);
          }
    },[])

    

    return (
        <div className="introContainer" id="introContainer" style={{
            display:"flex",
            flexDirection:isMobile?"column":"row",
            width:isMobile?"100%":"80%",
            height:isMobile?"90vh":"80vh"
        }}>
            <div className="introLeft">

                <h1 ref={addToRefs}>Hi,</h1>
                
                <h1 ref={addToRefs} style={{
                    display:isMobile?"flex":"",
                    flexDirection: isMobile?"column":"",
                    fontSize: isMobile?"0.7em":"0.5em",
                    textAlign:"left",

                    alignItems: isMobile?"": "center"
                }}>I am <strong style={{
                    fontSize:"2.3em",
                    color:"#00ADB5",
                    padding:"0px",
                    marginLeft: isMobile?"0px":'7px'
                }}> Rahul {isMobile?<br></br>:null} Panchal</strong> </h1>
                <h6 ref={addToRefs}>and...</h6>
                <h1 ref={addToRefs} style={{
                    flexDirection:isMobile?"column":'row',
                    fontSize: "1.4em"
                }}>I like to 
                    <div className="liketo" style={{
                        position:isMobile?"relative":"absolute",
                        left:isMobile?"":"230px",
                        top:isMobile?"":"-20px",
                        // margin: isMobile?,
                        color: "#00ADB5"

                    }}>
                        <div className="work1" ref={addToRefs}>Code</div>
                        <div className="work2" ref={addToRefs}>Learn</div>
                        <div className="work3" ref={addToRefs}>Animate</div>
                        <div className="work4" ref={addToRefs}>Explore</div>
                        <div className="work5" ref={addToRefs}>Build </div>
                    </div>
                </h1>
            </div>
            <div className="introRight" >
                {window.screen.width<600?null:<Cat/>}
            </div>
        </div>
    )
}
import { Canvas } from "@react-three/fiber";

export default Intro;