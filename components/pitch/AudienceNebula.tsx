"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

// Cluster definitions with meaningful labels
const CLUSTERS = [
  { name: "Content Interest: Tech", color: "#3B82F6", center: [-2, 1, 0], size: 250 },
  { name: "Linguistic Style: Formal", color: "#10B981", center: [2, -1, 1], size: 200 },
  { name: "Content: Finance", color: "#8B5CF6", center: [0, 2, -1], size: 180 },
  { name: "Tone: Urgent", color: "#F59E0B", center: [1, -2, -1], size: 220 },
  { name: "Style: Storytelling", color: "#EF4444", center: [-1, -1, 2], size: 160 },
];

interface ParticleSystemProps {
  onClusterHover: (cluster: string | null) => void;
  animate: boolean;
}

function ParticleSystem({ onClusterHover, animate }: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const progressRef = useRef(0);
  
  const { positions, colors, targetPositions, clusterIndices } = useMemo(() => {
    const totalParticles = CLUSTERS.reduce((sum, c) => sum + c.size, 0);
    const positions = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);
    const targetPositions = new Float32Array(totalParticles * 3);
    const clusterIndices = new Int32Array(totalParticles);
    
    let particleIndex = 0;
    
    CLUSTERS.forEach((cluster, clusterIdx) => {
      const color = new THREE.Color(cluster.color);
      
      for (let i = 0; i < cluster.size; i++) {
        // Initial scattered positions (larger sphere)
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.acos(2 * Math.random() - 1);
        const r = 4 + Math.random() * 2;
        
        positions[particleIndex * 3] = r * Math.sin(theta) * Math.cos(phi);
        positions[particleIndex * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
        positions[particleIndex * 3 + 2] = r * Math.cos(theta);
        
        // Target clustered positions
        const clusterR = 0.3 + Math.random() * 0.5;
        const clusterPhi = Math.random() * Math.PI * 2;
        const clusterTheta = Math.acos(2 * Math.random() - 1);
        
        targetPositions[particleIndex * 3] = cluster.center[0] + clusterR * Math.sin(clusterTheta) * Math.cos(clusterPhi);
        targetPositions[particleIndex * 3 + 1] = cluster.center[1] + clusterR * Math.sin(clusterTheta) * Math.sin(clusterPhi);
        targetPositions[particleIndex * 3 + 2] = cluster.center[2] + clusterR * Math.cos(clusterTheta);
        
        // Colors with slight variation
        const variation = 0.9 + Math.random() * 0.2;
        colors[particleIndex * 3] = color.r * variation;
        colors[particleIndex * 3 + 1] = color.g * variation;
        colors[particleIndex * 3 + 2] = color.b * variation;
        
        clusterIndices[particleIndex] = clusterIdx;
        particleIndex++;
      }
    });
    
    return { positions, colors, targetPositions, clusterIndices };
  }, []);
  
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const geometry = pointsRef.current.geometry;
    const positionAttr = geometry.attributes.position;
    
    // Animate clustering progress
    if (animate && progressRef.current < 1) {
      progressRef.current = Math.min(1, progressRef.current + delta * 0.3);
      
      for (let i = 0; i < positionAttr.count; i++) {
        const idx = i * 3;
        const t = progressRef.current;
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        
        positionAttr.array[idx] = positions[idx] + (targetPositions[idx] - positions[idx]) * eased;
        positionAttr.array[idx + 1] = positions[idx + 1] + (targetPositions[idx + 1] - positions[idx + 1]) * eased;
        positionAttr.array[idx + 2] = positions[idx + 2] + (targetPositions[idx + 2] - positions[idx + 2]) * eased;
      }
      
      positionAttr.needsUpdate = true;
    }
    
    // Subtle floating animation
    const time = state.clock.elapsedTime;
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.position.y = Math.sin(time * 0.3) * 0.1;
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions.slice()}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ClusterLabels({ visible }: { visible: boolean }) {
  return (
    <>
      {CLUSTERS.map((cluster, idx) => (
        <Html
          key={cluster.name}
          position={cluster.center as [number, number, number]}
          center
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        >
          <div className="whitespace-nowrap rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/10">
            {cluster.name}
          </div>
        </Html>
      ))}
    </>
  );
}

export function AudienceNebula() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [hoveredCluster, setHoveredCluster] = useState<string | null>(null);
  
  useEffect(() => {
    // Start animation after mount
    const timer = setTimeout(() => setIsAnimating(true), 500);
    // Show labels after clustering
    const labelTimer = setTimeout(() => setShowLabels(true), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(labelTimer);
    };
  }, []);
  
  return (
    <div className="relative h-[400px] w-full rounded-2xl bg-paper overflow-hidden border border-ink/10">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <ParticleSystem onClusterHover={setHoveredCluster} animate={isAnimating} />
        <ClusterLabels visible={showLabels} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        {CLUSTERS.map((cluster) => (
          <div
            key={cluster.name}
            className="flex items-center gap-1.5 rounded-full bg-white/50 px-2.5 py-1 text-[10px] text-ink/80 backdrop-blur-sm border border-ink/5"
          >
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: cluster.color }}
            />
            {cluster.name}
          </div>
        ))}
      </div>
      
      {/* Status indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/50 px-3 py-1.5 text-xs text-ink/80 backdrop-blur-sm border border-ink/5">
        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        {showLabels ? "Clusters Identified" : "Analyzing Audience..."}
      </div>
    </div>
  );
}
