// src/Model.js
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Button } from 'material';
// import VolumeMuteIcon from '@mui/icons-material/VolumeMuteIcon';
import "./Bg.css"
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
  

  return <primitive  ref={group} object={scene} position={[0,-4,0]} />;
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
        position: [-71,0,33], // Set initial camera position (x, y, z)
        fov: 3, // Field of view
        // rotation: [95, 95, 90] 
      }}>
        {/* {isPurrring?<VolumeMuteIcon/>:<VolumeMuteIcon/>} */}
        
        
        <ambientLight intensity={2} />
        {/* <pointLight intensity={10} position={[10, 10, 10]} /> */}
        <Model url="/public/rhetorician.glb" />
        {/* <OrbitControls />
        <CameraLogger/> 
        <PerspectiveCamera/>  */}
        
      </Canvas>
      {/* <p style={{
        position:"absolute",
        zIndex:5,
        left:"10px",
        color:"grey"
      }}>The End!</p> */}
    </div>

    
  );
}
