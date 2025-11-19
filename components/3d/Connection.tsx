"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  active?: boolean;
}

export function Connection({ start, end, active = true }: ConnectionProps) {
  const lineRef = useRef<THREE.Line>(null);
  const particleRef = useRef<THREE.Mesh>(null);

  const points = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    return [startVec, endVec];
  }, [start, end]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  useFrame((state) => {
    if (particleRef.current && active) {
      // Move particle along the line
      const time = state.clock.elapsedTime;
      const t = (time % 2) / 2; // Loop every 2 seconds
      
      const startVec = new THREE.Vector3(...start);
      const endVec = new THREE.Vector3(...end);
      
      particleRef.current.position.lerpVectors(startVec, endVec, t);
    }
  });

  return (
    <group>
      {/* @ts-ignore */}
      <line geometry={lineGeometry}>
        <lineBasicMaterial color="#ffffff" opacity={0.2} transparent />
      </line>
      
      {active && (
        <mesh ref={particleRef}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#4ade80" />
        </mesh>
      )}
    </group>
  );
}
