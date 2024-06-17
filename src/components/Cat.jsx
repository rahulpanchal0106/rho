// src/Model.js
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Button } from 'material';
// import VolumeMuteIcon from '@mui/icons-material/VolumeMuteIcon';
import "./cat.css"
function Model({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    if (actions) {
      // Play the first animation
      actions[Object.keys(actions)[0]].play();
      
    }
  }, [actions]);
  

  return <primitive  ref={group} object={scene} position={[0,-1,0]} />;
}





function CameraLogger() {
  const cameraRef = useRef();
  
  useFrame(({ camera }) => {
    if (cameraRef.current) {
      console.log(`Zoom level (fov): ${camera.fov}`);
      console.log(`Camera position: ${camera.position.x}, ${camera.position.y}, ${camera.position.z}`);
    }
  });

  return <perspectiveCamera ref={cameraRef} />;
}

export default function AnimatedModel() {
  const [isPurrring,setPurring] = useState(false);

  useEffect(()=>{
    isPurrring?playAudio():pauseAudio();
  })

  const audioRef = useRef(new Audio('/purrr.mp3'));
  const playAudio = () => {
    // setPurring(true);
    console.log("purring...")
    audioRef.current.play();
  };
  
  const pauseAudio = () => {
    // setPurring(false);
    console.log("Stopped purring...")
    audioRef.current.pause();
  };
  return (
    <div style={{
      display:"flex",
      flexDirection:"row-reverse",
      alignItems:"center",
      justifyContent:"center",
      position: "relative",
      zIndex:10
    }}>
      
      <Canvas camera={{
        position: [19,36,-36], // Set initial camera position (x, y, z)
        fov: 30, // Field of view
      }} onClick={()=>setPurring(!isPurrring)}>
        {/* {isPurrring?<VolumeMuteIcon/>:<VolumeMuteIcon/>} */}
        
        
        <ambientLight intensity={2} />
        {/* <pointLight intensity={10} position={[10, 10, 10]} /> */}
        <Model url="/an_animated_cat.glb" />
        {/* <OrbitControls />
        <CameraLogger/>  
         */}
      </Canvas>
      <p onClick={()=>setPurring(!isPurrring)} id={isPurrring?"cat-sound":"no-sound"} style={{
        position:"absolute",
        zIndex:5,
        cursor:'pointer'
      }}>{isPurrring?"click to turn off purring :(":"click to turn on purring :D"}</p>
    </div>

    
  );
}
