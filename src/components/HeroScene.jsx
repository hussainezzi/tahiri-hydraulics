import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Sphere, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Pipe({ position, rotation, color = '#CC0000', radius = 0.08, length = 3 }) {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.003;
      mesh.current.rotation.y += 0.005;
    }
  });
  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <cylinderGeometry args={[radius, radius, length, 16]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function FloatingRing({ position, speed = 1, color = '#CC0000' }) {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5;
      mesh.current.rotation.y += 0.01 * speed;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
    }
  });
  return (
    <Torus ref={mesh} args={[0.8, 0.06, 16, 60]} position={position}>
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
    </Torus>
  );
}

function GearShape({ position, speed = 1 }) {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.008 * speed;
    }
  });
  return (
    <Box ref={mesh} args={[0.4, 0.4, 0.1]} position={position}>
      <meshStandardMaterial color="#CC0000" metalness={0.95} roughness={0.05} />
    </Box>
  );
}

function ParticleField() {
  const points = useRef();
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#CC0000" size={0.04} transparent opacity={0.6} />
    </points>
  );
}

function CentralSphere() {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Sphere ref={mesh} args={[1.2, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial color="#CC0000" metalness={0.9} roughness={0.1} distort={0.3} speed={2} />
    </Sphere>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#CC0000" />
      <spotLight position={[0, 10, 0]} intensity={1} color="#CC0000" angle={0.3} />

      <CentralSphere />
      <ParticleField />

      <FloatingRing position={[-3, 1, -2]} speed={0.8} color="#CC0000" />
      <FloatingRing position={[3, -1, -1]} speed={1.2} color="#FF3333" />
      <FloatingRing position={[0, 2.5, -3]} speed={0.6} color="#990000" />

      <Pipe position={[-2.5, 0, 0]} rotation={[0, 0, Math.PI / 4]} color="#CC0000" />
      <Pipe position={[2.5, 0, 0]} rotation={[0, 0, -Math.PI / 4]} color="#FF1A1A" />
      <Pipe position={[0, -2, -1]} rotation={[Math.PI / 6, 0, 0]} color="#990000" />

      <GearShape position={[-4, 2, -2]} speed={1} />
      <GearShape position={[4, -2, -2]} speed={-0.8} />
      <GearShape position={[-1, -3, 0]} speed={1.5} />
    </Canvas>
  );
}
