import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Blockchain = ({ isMobile }) => {
  const blockchain = useGLTF("./assets/models/blockchain_model.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <ambientLight intensity={2} />
      <spotLight intensity={1} position={[0, 20, 0]} />
      <pointLight intensity={1} />
      <primitive
        object={blockchain.scene}
        scale={isMobile ? 0.7 : 0.75}
      />
    </mesh>
  );
};

const BlockchainCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Blockchain isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BlockchainCanvas;