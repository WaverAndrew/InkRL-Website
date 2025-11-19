"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { FlowDiagram } from "./FlowDiagram";

export function Scene() {
  return (
    <div className="h-[600px] w-full relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.5}
        />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
            <FlowDiagram />
            <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
