import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./style.css"
//import {OrbitControls} from '@react-three/drei'
//import { BoxGeometry} from "three";

function Cube(props) {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  })
  return (
    <mesh
      {...props}
      ref={meshRef}
      onClick={(event) => { setClick(!click) }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={hover ? 'blue' : 'green'} />
    </mesh>
  )

}

function App() {
  return (
    <div style={{ position: 'relative', zIndex: 0 }}>
      <Canvas style={{  width: "100vw",height: "100vh", position: "absolute", top: 0, left: 0, zIndex: -1 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Cube position={[1.2, 0, 0]} />
        <Cube position={[-1.2, 0, 0]} />
      </Canvas>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{textAlign:'center'}}>HI My Name Is Taj Malnas</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p style={{textAlign:'center'}}>Taj</p>
      </div>
    </div>
  )
}
export default App;