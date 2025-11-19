"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import * as THREE from "three";
import { GlassCard } from "../ui/GlassCard";

interface NodeProps {
  position: [number, number, number];
  label: string;
  description?: string;
  color?: string;
  type?: "input" | "llm" | "filter" | "selector" | "output";
}

export function Node({ position, label, description, color = "#ffffff", type = "input" }: NodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      // Scale effect on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "#4ade80" : color}
          emissive={hovered ? "#4ade80" : color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>

      {hovered && description && (
        <Html position={[0, 1, 0]} center distanceFactor={10}>
          <GlassCard className="w-48 p-3 text-xs pointer-events-none">
            <p className="text-white font-semibold mb-1">{label}</p>
            <p className="text-gray-300">{description}</p>
          </GlassCard>
        </Html>
      )}
    </group>
  );
}
