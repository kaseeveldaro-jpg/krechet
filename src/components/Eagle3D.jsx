import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function EagleModel() {
  const group = useRef();
  const leftWing = useRef();
  const rightWing = useRef();
  const head = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    group.current.rotation.y = Math.sin(t * 0.32) * 0.18;
    group.current.rotation.z = Math.sin(t * 0.6) * 0.025;
    group.current.position.y = Math.sin(t * 0.8) * 0.08;
    leftWing.current.rotation.z = 0.25 + Math.sin(t * 1.5) * 0.09;
    rightWing.current.rotation.z = -0.25 - Math.sin(t * 1.5) * 0.09;
    head.current.rotation.y = Math.sin(t * 0.55) * 0.22;
  });

  const feather = (x, y, z, r = 0.15, s = 1) => (
    <mesh position={[x, y, z]} scale={[s, s, s]}>
      <coneGeometry args={[r, r * 2.6, 6]} />
      <meshStandardMaterial color="#14120f" roughness={0.8} metalness={0.12} />
    </mesh>
  );

  return <group ref={group} rotation={[0, 0, 0.02]} scale={1.25}>
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[0.43, 20, 16]} />
      <meshStandardMaterial color="#17130e" roughness={0.75} metalness={0.15} />
    </mesh>
    <mesh ref={head} position={[0.08, 0.38, 0.02]}>
      <sphereGeometry args={[0.3, 20, 16]} />
      <meshStandardMaterial color="#e1d5b9" roughness={0.7} />
    </mesh>
    <mesh position={[0.33, 0.36, 0]}>
      <coneGeometry args={[0.10, 0.32, 5]} />
      <meshStandardMaterial color="#c4973b" roughness={0.6} />
    </mesh>
    <mesh ref={leftWing} position={[-0.38, 0.04, 0]} rotation={[0, 0, 0.25]}>
      <boxGeometry args={[1.15, 0.14, 0.55]} />
      <meshStandardMaterial color="#211b14" roughness={0.8} metalness={0.12} />
    </mesh>
    <mesh ref={rightWing} position={[0.38, 0.04, 0]} rotation={[0, 0, -0.25]}>
      <boxGeometry args={[1.15, 0.14, 0.55]} />
      <meshStandardMaterial color="#211b14" roughness={0.8} metalness={0.12} />
    </mesh>
    {[-0.48,-0.32,-0.16,0,0.16,0.32,0.48].map((x,i) => feather(x, -0.08, 0.16 + (i%2)*0.04, 0.11, 1))}
    {[-0.48,-0.32,-0.16,0,0.16,0.32,0.48].map((x,i) => feather(x, -0.08, -0.16 - (i%2)*0.04, 0.11, 1))}
  </group>;
}

export default function Eagle3D() {
  return <Canvas camera={{ position: [0, 0.1, 3.2], fov: 38 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true }}>
    <ambientLight intensity={1.3} />
    <directionalLight position={[2, 3, 4]} intensity={2.2} />
    <pointLight position={[-2, 0, 2]} intensity={1.4} color="#c9a34e" />
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.18}>
      <EagleModel />
    </Float>
    <Environment preset="night" />
  </Canvas>;
}